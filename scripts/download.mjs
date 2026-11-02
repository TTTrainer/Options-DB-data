#!/usr/bin/env node
// Downloads the latest release's game.db and verifies it against the release manifest.
//
//   node scripts/download.mjs            download if the local copy differs from the latest release
//   node scripts/download.mjs --force    download even if the local copy already matches
//   node scripts/download.mjs --dest <path>
//   node scripts/download.mjs --schwab   fetch schwab.db (the raw pull game.db is built from) instead
//
// Env: GITHUB_TOKEN or GH_TOKEN (needed for a private repo), STG_GAME_DB, STG_USER_DATA,
// STG_DATA_REPO (owner/name), STG_GITHUB_API (API base URL).
// Plain ASCII on purpose: Windows PowerShell 5.1 mangles other characters when piping a script to node.
import { createHash } from 'node:crypto';
import { createReadStream, createWriteStream, existsSync, mkdirSync, renameSync, rmSync, statSync } from 'node:fs';
import { homedir } from 'node:os';
import { dirname, join } from 'node:path';
import { Readable, Transform } from 'node:stream';
import { pipeline } from 'node:stream/promises';

const API = process.env.STG_GITHUB_API || 'https://api.github.com';
const TOKEN = process.env.GITHUB_TOKEN || process.env.GH_TOKEN || '';

const args = process.argv.slice(2);
const flag = (name) => args.includes(`--${name}`);
const arg = (name) => {
  const i = args.indexOf(`--${name}`);
  return i >= 0 ? args[i + 1] : undefined;
};
const ASSET = flag('schwab') ? 'schwab.db' : 'game.db';
// game.db comes from the public data repo; schwab.db is only in the private one (needs a token).
const REPO = process.env.STG_DATA_REPO || (ASSET === 'game.db' ? 'TTTrainer/Options-DB-data' : 'TTTrainer/Options-DB');

// Same rule as the game (app/main/paths.ts and data-pipeline/paths.ts in Spread-Trade-Game).
function destPath() {
  if (arg('dest')) return arg('dest');
  const env = process.env.STG_GAME_DB;
  if (env) return ASSET === 'game.db' ? env : join(dirname(env), ASSET);
  const appData =
    process.env.APPDATA ??
    (process.platform === 'darwin' ? join(homedir(), 'Library', 'Application Support') : join(homedir(), '.config'));
  const userData = process.env.STG_USER_DATA ?? join(appData, 'SpreadTradingGame');
  return join(userData, 'data', ASSET);
}

function fail(msg) {
  console.error(`\nERROR: ${msg}\n`);
  process.exit(1);
}

async function api(path, accept = 'application/vnd.github+json') {
  const headers = { Accept: accept, 'User-Agent': 'stg-data-download', 'X-GitHub-Api-Version': '2022-11-28' };
  if (TOKEN) headers.Authorization = `Bearer ${TOKEN}`;
  const r = await fetch(`${API}/repos/${REPO}${path}`, { headers });
  if (r.status === 404)
    fail(
      `No release found at github.com/${REPO}${TOKEN ? '' : ' (if the repo is private, set GITHUB_TOKEN to a token that can read it)'}.`,
    );
  if (!r.ok) fail(`GitHub answered ${r.status} for ${path}: ${(await r.text()).slice(0, 200)}`);
  return r;
}

async function sha256File(path) {
  const h = createHash('sha256');
  await pipeline(createReadStream(path), h);
  return h.digest('hex');
}

/** Whether `path` is byte-for-byte the release (size first, then hash). */
async function matches(path, want) {
  if (!existsSync(path)) return false;
  if (statSync(path).size !== want.size) return false;
  return (await sha256File(path)) === want.sha256;
}

/** The size and hash the manifest promises for ASSET. */
function expected(m) {
  const e = ASSET === 'game.db' ? m : m?.schwabDb;
  const ok =
    typeof m?.version === 'string' &&
    Number.isInteger(e?.size) &&
    e.size > 0 &&
    typeof e.sha256 === 'string' &&
    /^[0-9a-f]{64}$/.test(e.sha256);
  if (!ok) fail(`The release manifest has no version, size or sha256 for ${ASSET}. Refusing to download.`);
  return { size: e.size, sha256: e.sha256 };
}

async function main() {
  const dest = destPath();
  const release = await (await api('/releases/latest')).json();
  const assetOf = (name) => release.assets.find((a) => a.name === name);
  const manifestAsset = assetOf('manifest.json');
  const dbAsset = assetOf(ASSET);
  if (!manifestAsset || !dbAsset) fail(`Release ${release.tag_name} has no manifest.json or ${ASSET}.`);

  const manifest = await (await api(`/releases/assets/${manifestAsset.id}`, 'application/octet-stream')).json();
  const want = expected(manifest);
  console.log(`Latest data: ${manifest.version} (${release.tag_name}), ${manifest.dateRange?.first} to ${manifest.dateRange?.last}`);
  console.log(`Target: ${dest}`);

  if (!flag('force') && (await matches(dest, want))) {
    console.log('Already up to date. Nothing downloaded.');
    return;
  }

  mkdirSync(dirname(dest), { recursive: true });
  const tmp = `${dest}.download`;
  rmSync(tmp, { force: true });
  const r = await api(`/releases/assets/${dbAsset.id}`, 'application/octet-stream');
  const total = Number(r.headers.get('content-length')) || want.size;
  let got = 0;
  let lastPct = -1;
  const meter = new Transform({
    transform(chunk, _enc, cb) {
      got += chunk.length;
      const pct = Math.floor((got / total) * 100);
      if (pct !== lastPct && pct % 10 === 0) {
        lastPct = pct;
        process.stdout.write(`  ${pct}%\r`);
      }
      cb(null, chunk);
    },
  });
  await pipeline(Readable.fromWeb(r.body), meter, createWriteStream(tmp));
  process.stdout.write('\n');

  const size = statSync(tmp).size;
  if (size !== want.size) {
    rmSync(tmp, { force: true });
    fail(`SIZE MISMATCH: downloaded ${size} bytes, manifest says ${want.size}. The file was discarded.`);
  }
  const hash = await sha256File(tmp);
  if (hash !== want.sha256) {
    rmSync(tmp, { force: true });
    fail(`SHA-256 MISMATCH: downloaded ${hash}, manifest says ${want.sha256}. The file was discarded.`);
  }

  try {
    renameSync(tmp, dest);
  } catch (e) {
    rmSync(tmp, { force: true });
    if (e.code === 'EBUSY' || e.code === 'EPERM')
      fail(`Could not replace ${dest}: it is in use. Close the game and run this again.`);
    throw e;
  }
  // A -wal/-shm left from the old database would be replayed onto the new one, so they go too
  // (the game does the same when it swaps in a freshly built game.db).
  for (const s of ['-wal', '-shm']) rmSync(dest + s, { force: true });
  console.log(`Saved and verified ${dest} (${size} bytes, sha256 ${hash}).`);
}

main().catch((e) => fail(e?.message ?? String(e)));
