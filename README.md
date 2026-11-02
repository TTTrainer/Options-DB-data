# Options-DB-data

Market data for Spread Trading Game. Download the finished `game.db` with one command; there is no build step.

## Download

You need [Node.js](https://nodejs.org) 18 or newer.

**Windows (PowerShell):**

```powershell
irm https://raw.githubusercontent.com/TTTrainer/Options-DB-data/HEAD/scripts/download.mjs | node --input-type=module -
```

**From a clone of this repo (any platform):**

```bash
node scripts/download.mjs
```

The script:

1. Fetches the latest release's `manifest.json` and `game.db`.
2. Checks the file size and SHA-256 hash against the manifest. On a mismatch it deletes the download and exits with an error.
3. Skips the download if your local `game.db` already matches the manifest. Use `--force` to download anyway.
4. Saves to `%APPDATA%\SpreadTradingGame\data\game.db` on Windows, `~/Library/Application Support/SpreadTradingGame/data/game.db` on macOS, and `~/.config/SpreadTradingGame/data/game.db` on Linux. This is the same path the game uses, including its `STG_USER_DATA` and `STG_GAME_DB` overrides.

Close the game before you download. The script also removes any old `game.db-wal` and `game.db-shm` files left beside the database.

Use `--dest <path>` to save somewhere else.

## What's here

| Path | What it is |
|---|---|
| Releases (`data-YYYY.MM.DD`) | `game.db`, `manifest.json` and `REPORT.md` for each data update. |
| `data/manifest.json` | The latest release's version, build date, size and SHA-256 of `game.db`, and date range. |
| `data/REPORT.md` | The latest build report: coverage and gaps. |
| `scripts/download.mjs` | The download script. |

## Known data limits

- Source: Charles Schwab market data, pulled on the owner's computer. Builds from the update workflow are pulled on GitHub Actions. Check Schwab's terms before publishing.
- No earnings, dividend or fundamentals history in this build.
- 157 FOMC and CPI dates were compiled offline and are unverified.
- NDX, RUT, SPX and XSP end on 2026-10-16; all other tickers end on 2026-10-27.
- Option chains are real only on closes that were pulled after the market closed. In the current build that is 25 tickers on 2026-10-01. Every other day's chain is modeled from the stock's trailing volatility and labeled MODEL in the game.

The data covers 2018-01-02 to 2026-10-27 for 79 tickers. Some tickers start later; see `data/REPORT.md`.

This is paper-trading data for a game, not financial advice.
