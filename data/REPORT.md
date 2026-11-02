# Market data report

Generated 2026-11-02T19:13:16.095Z from `game.db`.

- **Dataset:** real (built 2026-11-02T19:13:16.073Z)
- **Range:** 2018-01-02 to 2026-10-30
- **Benchmark:** SPY; context: SPY, DIA
- **Database size:** 0.03 GB (target under 3 GB)
- Prices, the VIX and the T-bill rate: Schwab market data (read-only), pulled on this computer into schwab.db.
- Option chains are real on the closes they were pulled after. Every other day's chain is modeled from the stock's trailing volatility and labeled MODEL.
- Schwab's market data has no earnings or dividend history, so this market has no earnings events or ex-dividend days (the DoltHub build has them).
- FOMC/CPI dates compiled offline; see data/REPORT.md.

## Row counts

| Table | Rows |
|---|---|
| symbols | 79 |
| bars | 80,767 |
| chains | 165,833 |
| chain_days | 75,711 |
| vol | 80,767 |
| earnings | 0 |
| dividends | 0 |
| splits | 0 |
| rates | 2,206 |
| vix | 2,218 |
| macro_events | 157 |
| fundamentals | 0 |
| windows | 56,909 |

## Tickers

| Symbol | Name | Sector | Why | Bars | First chain | Chain days | % modeled | Bar gaps | Liquidity (spread/mid) | Median IV |
|---|---|---|---|---|---|---|---|---|---|---|
| AAPL | Apple | Technology | Pulled from Schwab | 2018-01-02 to 2026-10-30 | 2018-04-05 | 2156 | 100.0 | 0 | 2.6% | 26% |
| AMD | Advanced Micro Devices | Semiconductors | Pulled from Schwab | 2018-01-02 to 2026-10-30 | 2018-04-05 | 2156 | 100.0 | 0 | 1.7% | 74% |
| AMZN | Amazon | Consumer Discretionary | Pulled from Schwab | 2018-01-02 to 2026-10-30 | 2018-04-05 | 2156 | 100.0 | 0 | 2.4% | 35% |
| ARM | Arm Holdings | Semiconductors | Pulled from Schwab | 2024-10-07 to 2026-10-30 | 2025-01-08 | 455 | 100.0 | 0 | 1.8% | 84% |
| AVGO | Broadcom | Semiconductors | Pulled from Schwab | 2018-01-02 to 2026-10-30 | 2018-04-05 | 2156 | 100.0 | 0 | 1.8% | 48% |
| BA | Boeing | Industrials | Pulled from Schwab | 2018-01-02 to 2026-10-30 | 2018-04-05 | 2156 | 100.0 | 0 | 2.5% | 37% |
| BABA | Alibaba Group | Consumer Discretionary | Pulled from Schwab | 2024-10-07 to 2026-10-30 | 2025-01-08 | 455 | 100.0 | 0 | 2.8% | 44% |
| BAC | Bank of America | Financials | Pulled from Schwab | 2024-10-07 to 2026-10-30 | 2025-01-08 | 455 | 100.0 | 0 | 6.1% | 24% |
| C | Citigroup | Financials | Pulled from Schwab | 2024-10-07 to 2026-10-30 | 2025-01-08 | 455 | 100.0 | 0 | 3.3% | 31% |
| CCL | Carnival | Consumer Discretionary | Pulled from Schwab | 2024-10-07 to 2026-10-30 | 2025-01-08 | 455 | 100.0 | 0 | 5.7% | 54% |
| COIN | Coinbase | Financials | Pulled from Schwab | 2021-04-14 to 2026-10-30 | 2021-07-15 | 1331 | 99.9 | 0 | 2.0% | 78% |
| COST | Costco | Consumer Staples | Pulled from Schwab | 2018-01-02 to 2026-10-30 | 2018-04-05 | 2156 | 100.0 | 0 | 1.7% | 21% |
| CRM | Salesforce | Technology | Pulled from Schwab | 2018-01-02 to 2026-10-30 | 2018-04-05 | 2156 | 100.0 | 0 | 2.4% | 47% |
| CSCO | Cisco Systems | Technology | Pulled from Schwab | 2024-10-07 to 2026-10-30 | 2025-01-08 | 455 | 100.0 | 0 | 3.6% | 36% |
| CVX | Chevron | Energy | Pulled from Schwab | 2024-10-07 to 2026-10-30 | 2025-01-08 | 455 | 100.0 | 0 | 3.0% | 26% |
| DAL | Delta Air Lines | Industrials | Pulled from Schwab | 2024-10-07 to 2026-10-30 | 2025-01-08 | 455 | 100.0 | 0 | 3.8% | 42% |
| DIA | SPDR Dow Jones ETF | Index ETF | Pulled from Schwab | 2018-01-02 to 2026-10-30 | 2018-04-05 | 2156 | 100.0 | 0 | 1.4% | 15% |
| DIS | Walt Disney | Communication | Pulled from Schwab | 2018-01-02 to 2026-10-30 | 2018-04-05 | 2156 | 100.0 | 0 | 3.8% | 28% |
| DKNG | DraftKings | Consumer Discretionary | Pulled from Schwab | 2024-10-07 to 2026-10-30 | 2025-01-08 | 455 | 100.0 | 0 | 5.6% | 57% |
| EEM | iShares MSCI Emerging Markets | Index ETF | Pulled from Schwab | 2024-10-07 to 2026-10-30 | 2025-01-08 | 455 | 100.0 | 0 | 2.9% | 30% |
| F | Ford Motor | Autos | Pulled from Schwab | 2024-10-07 to 2026-10-30 | 2025-01-08 | 455 | 100.0 | 0 | 11.4% | 37% |
| FXI | iShares China Large-Cap | Index ETF | Pulled from Schwab | 2024-10-07 to 2026-10-30 | 2025-01-08 | 455 | 100.0 | 0 | 4.9% | 23% |
| GLD | SPDR Gold Shares | Commodity ETF | Pulled from Schwab | 2024-10-07 to 2026-10-30 | 2025-01-08 | 455 | 100.0 | 0 | 1.1% | 31% |
| GME | GameStop | Retail | Pulled from Schwab | 2018-01-02 to 2026-10-30 | 2018-04-05 | 2156 | 100.0 | 0 | 7.6% | 39% |
| GOOGL | Alphabet | Communication | Pulled from Schwab | 2018-01-02 to 2026-10-30 | 2018-04-05 | 2156 | 100.0 | 0 | 2.2% | 33% |
| HOOD | Robinhood | Financials | Pulled from Schwab | 2021-07-29 to 2026-10-30 | 2021-10-28 | 1257 | 99.9 | 0 | 2.6% | 80% |
| INTC | Intel | Semiconductors | Pulled from Schwab | 2024-10-07 to 2026-10-30 | 2025-01-08 | 455 | 100.0 | 0 | 2.7% | 80% |
| IWM | iShares Russell 2000 | Index ETF | Pulled from Schwab | 2024-10-07 to 2026-10-30 | 2025-01-08 | 455 | 100.0 | 0 | 1.6% | 22% |
| JNJ | Johnson & Johnson | Health Care | Pulled from Schwab | 2024-10-07 to 2026-10-30 | 2025-01-08 | 455 | 100.0 | 0 | 3.0% | 20% |
| JPM | JPMorgan Chase | Financials | Pulled from Schwab | 2018-01-02 to 2026-10-30 | 2018-04-05 | 2156 | 100.0 | 0 | 2.5% | 25% |
| KO | Coca-Cola | Consumer Staples | Pulled from Schwab | 2024-10-07 to 2026-10-30 | 2025-01-08 | 455 | 100.0 | 0 | 5.3% | 19% |
| KRE | SPDR S&P Regional Banking | Sector ETF | Pulled from Schwab | 2024-10-07 to 2026-10-30 | 2025-01-08 | 455 | 100.0 | 0 | 3.0% | 25% |
| LLY | Eli Lilly | Health Care | Pulled from Schwab | 2024-10-07 to 2026-10-30 | 2025-01-08 | 455 | 100.0 | 0 | 1.4% | 38% |
| MA | Mastercard | Financials | Pulled from Schwab | 2024-10-07 to 2026-10-30 | 2025-01-08 | 455 | 100.0 | 0 | 2.0% | 25% |
| MARA | MARA Holdings | Financials | Pulled from Schwab | 2024-10-07 to 2026-10-30 | 2025-01-08 | 455 | 100.0 | 0 | 7.0% | 89% |
| MCD | McDonald's | Consumer Discretionary | Pulled from Schwab | 2024-10-07 to 2026-10-30 | 2025-01-08 | 455 | 100.0 | 0 | 2.8% | 21% |
| META | Meta Platforms | Communication | Pulled from Schwab | 2018-01-02 to 2026-10-30 | 2018-04-05 | 2156 | 100.0 | 0 | 1.6% | 46% |
| MRNA | Moderna | Health Care | Pulled from Schwab | 2024-10-07 to 2026-10-30 | 2025-01-08 | 455 | 100.0 | 0 | 3.4% | 79% |
| MSFT | Microsoft | Technology | Pulled from Schwab | 2018-01-02 to 2026-10-30 | 2018-04-05 | 2156 | 100.0 | 0 | 2.0% | 33% |
| MSTR | Strategy (MicroStrategy) | Technology | Pulled from Schwab | 2024-10-07 to 2026-10-30 | 2025-01-08 | 455 | 100.0 | 0 | 2.1% | 82% |
| MU | Micron | Semiconductors | Pulled from Schwab | 2018-01-02 to 2026-10-30 | 2018-04-05 | 2156 | 100.0 | 0 | 1.5% | 79% |
| NDX | Nasdaq-100 Index | Index | Pulled from Schwab | 2024-10-08 to 2026-10-30 | 2025-01-10 | 454 | 100.0 | 0 | 0.3% | 22% |
| NFLX | Netflix | Communication | Pulled from Schwab | 2018-01-02 to 2026-10-30 | 2018-04-05 | 2156 | 100.0 | 0 | 3.7% | 39% |
| NIO | NIO | Autos | Pulled from Schwab | 2024-10-07 to 2026-10-30 | 2025-01-08 | 455 | 100.0 | 0 | 17.1% | 56% |
| NKE | Nike | Consumer Discretionary | Pulled from Schwab | 2024-10-07 to 2026-10-30 | 2025-01-08 | 455 | 100.0 | 0 | 4.8% | 37% |
| NVDA | NVIDIA | Semiconductors | Pulled from Schwab | 2018-01-02 to 2026-10-30 | 2018-04-05 | 2156 | 100.0 | 0 | 2.5% | 42% |
| ORCL | Oracle | Technology | Pulled from Schwab | 2018-01-02 to 2026-10-30 | 2018-04-05 | 2156 | 100.0 | 0 | 2.2% | 64% |
| PEP | PepsiCo | Consumer Staples | Pulled from Schwab | 2024-10-07 to 2026-10-30 | 2025-01-08 | 455 | 100.0 | 0 | 3.6% | 23% |
| PFE | Pfizer | Health Care | Pulled from Schwab | 2024-10-07 to 2026-10-30 | 2025-01-08 | 455 | 100.0 | 0 | 9.7% | 24% |
| PLTR | Palantir | Technology | Pulled from Schwab | 2020-09-30 to 2026-10-30 | 2020-12-31 | 1465 | 99.9 | 0 | 2.3% | 61% |
| PYPL | PayPal | Financials | Pulled from Schwab | 2024-10-07 to 2026-10-30 | 2025-01-08 | 455 | 100.0 | 0 | 4.5% | 43% |
| QCOM | Qualcomm | Semiconductors | Pulled from Schwab | 2024-10-07 to 2026-10-30 | 2025-01-08 | 455 | 100.0 | 0 | 2.4% | 49% |
| QQQ | Invesco QQQ (Nasdaq-100) | Index ETF | Pulled from Schwab | 2024-10-07 to 2026-10-30 | 2025-01-08 | 455 | 100.0 | 0 | 1.0% | 22% |
| RDDT | Reddit | Communication | Pulled from Schwab | 2024-10-07 to 2026-10-30 | 2025-01-08 | 455 | 100.0 | 0 | 2.0% | 75% |
| RIVN | Rivian Automotive | Autos | Pulled from Schwab | 2024-10-07 to 2026-10-30 | 2025-01-08 | 455 | 100.0 | 0 | 6.9% | 71% |
| RUT | Russell 2000 Index | Index | Pulled from Schwab | 2024-10-08 to 2026-10-30 | 2025-01-10 | 454 | 100.0 | 0 | 0.6% | 22% |
| SBUX | Starbucks | Consumer Discretionary | Pulled from Schwab | 2024-10-07 to 2026-10-30 | 2025-01-08 | 455 | 100.0 | 0 | 3.8% | 30% |
| SHOP | Shopify | Technology | Pulled from Schwab | 2024-10-07 to 2026-10-30 | 2025-01-08 | 455 | 100.0 | 0 | 2.4% | 63% |
| SLV | iShares Silver Trust | Commodity ETF | Pulled from Schwab | 2024-10-07 to 2026-10-30 | 2025-01-08 | 455 | 100.0 | 0 | 1.9% | 66% |
| SMCI | Super Micro Computer | Technology | Pulled from Schwab | 2018-01-02 to 2026-10-30 | 2018-04-05 | 2156 | 100.0 | 0 | 3.9% | 95% |
| SMH | VanEck Semiconductor ETF | Sector ETF | Pulled from Schwab | 2024-10-07 to 2026-10-30 | 2025-01-08 | 455 | 100.0 | 0 | 0.9% | 42% |
| SNAP | Snap | Communication | Pulled from Schwab | 2024-10-07 to 2026-10-30 | 2025-01-08 | 455 | 100.0 | 0 | 14.0% | 61% |
| SOFI | SoFi Technologies | Financials | Pulled from Schwab | 2024-10-07 to 2026-10-30 | 2025-01-08 | 455 | 100.0 | 0 | 6.4% | 62% |
| SPX | S&P 500 Index | Index | Pulled from Schwab | 2024-10-08 to 2026-10-30 | 2025-01-10 | 454 | 100.0 | 0 | 0.5% | 14% |
| SPY | SPDR S&P 500 ETF | Index ETF | Pulled from Schwab | 2018-01-02 to 2026-10-30 | 2018-04-05 | 2156 | 100.0 | 0 | 1.2% | 14% |
| T | AT&T | Communication | Pulled from Schwab | 2024-10-07 to 2026-10-30 | 2025-01-08 | 455 | 100.0 | 0 | 8.7% | 28% |
| TLT | iShares 20+ Year Treasury | Bond ETF | Pulled from Schwab | 2024-10-07 to 2026-10-30 | 2025-01-08 | 455 | 100.0 | 0 | 4.7% | 11% |
| TSLA | Tesla | Autos | Pulled from Schwab | 2018-01-02 to 2026-10-30 | 2018-04-05 | 2156 | 100.0 | 0 | 1.7% | 48% |
| UBER | Uber | Industrials | Pulled from Schwab | 2019-05-10 to 2026-10-30 | 2019-08-12 | 1816 | 99.9 | 0 | 4.0% | 39% |
| UNH | UnitedHealth Group | Health Care | Pulled from Schwab | 2024-10-07 to 2026-10-30 | 2025-01-08 | 455 | 100.0 | 0 | 2.0% | 35% |
| USO | United States Oil Fund | Commodity ETF | Pulled from Schwab | 2024-10-07 to 2026-10-30 | 2025-01-08 | 455 | 100.0 | 0 | 1.4% | 58% |
| V | Visa | Financials | Pulled from Schwab | 2024-10-07 to 2026-10-30 | 2025-01-08 | 455 | 100.0 | 0 | 2.4% | 23% |
| VZ | Verizon | Communication | Pulled from Schwab | 2024-10-07 to 2026-10-30 | 2025-01-08 | 455 | 100.0 | 0 | 6.3% | 26% |
| WMT | Walmart | Consumer Staples | Pulled from Schwab | 2024-10-07 to 2026-10-30 | 2025-01-08 | 455 | 100.0 | 0 | 3.6% | 28% |
| XBI | SPDR S&P Biotech | Sector ETF | Pulled from Schwab | 2024-10-07 to 2026-10-30 | 2025-01-08 | 455 | 100.0 | 0 | 1.7% | 34% |
| XLE | Energy Select Sector SPDR | Sector ETF | Pulled from Schwab | 2024-10-07 to 2026-10-30 | 2025-01-08 | 455 | 100.0 | 0 | 3.4% | 26% |
| XLF | Financial Select Sector SPDR | Sector ETF | Pulled from Schwab | 2024-10-07 to 2026-10-30 | 2025-01-08 | 455 | 100.0 | 0 | 4.7% | 17% |
| XOM | Exxon Mobil | Energy | Pulled from Schwab | 2024-10-07 to 2026-10-30 | 2025-01-08 | 455 | 100.0 | 0 | 3.2% | 29% |
| XSP | Mini-SPX Index (1/10 of SPX) | Index | Pulled from Schwab | 2024-10-08 to 2026-10-30 | 2025-01-10 | 454 | 100.0 | 0 | 1.2% | 14% |

## Windows

56909 dealable windows; 29314 from the last three years (dealt 75% of the time).

| Review filter | Windows |
|---|---|
| Earnings inside window | 0 |
| FOMC inside window | 56909 |
| Ex-dividend inside window | 0 |
| ADX < 18 (chop) | 17627 |
| ADX > 30 (trend) | 13371 |
| VIX > 25 | 8849 |
| IVR < 15 | 17720 |
| Gap > 2 ATR | 18953 |
| Widest spread decile | 5682 |

## Macro calendar

157 FOMC and CPI dates. 157 are unverified: they were compiled offline because federalreserve.gov and bls.gov were unreachable from the build machine.

## Validation

- **no negative bars:** {"symbol":"BA","date":20230605}
- **no negative bars:** {"symbol":"JPM","date":20230605}
- **no negative bars:** {"symbol":"PLTR","date":20230605}
- **no negative bars:** {"symbol":"UBER","date":20230605}
- **windows enter on a real chain:** {"id":1,"symbol":"AAPL","entry_date":"2019-01-03"}
- **windows enter on a real chain:** {"id":2,"symbol":"AAPL","entry_date":"2019-01-04"}
- **windows enter on a real chain:** {"id":3,"symbol":"AAPL","entry_date":"2019-01-07"}
- **windows enter on a real chain:** {"id":4,"symbol":"AAPL","entry_date":"2019-01-08"}
- **windows enter on a real chain:** {"id":5,"symbol":"AAPL","entry_date":"2019-01-09"}
- **windows enter on a real chain:** {"id":6,"symbol":"AAPL","entry_date":"2019-01-10"}
- **windows enter on a real chain:** {"id":7,"symbol":"AAPL","entry_date":"2019-01-11"}
- **windows enter on a real chain:** {"id":8,"symbol":"AAPL","entry_date":"2019-01-14"}
- **windows enter on a real chain:** {"id":9,"symbol":"AAPL","entry_date":"2019-01-15"}
- **windows enter on a real chain:** {"id":10,"symbol":"AAPL","entry_date":"2019-01-16"}
- **windows enter on a real chain:** {"id":11,"symbol":"AAPL","entry_date":"2019-01-17"}
- **windows enter on a real chain:** {"id":12,"symbol":"AAPL","entry_date":"2019-01-18"}
- **windows enter on a real chain:** {"id":13,"symbol":"AAPL","entry_date":"2019-01-22"}
- **windows enter on a real chain:** {"id":14,"symbol":"AAPL","entry_date":"2019-01-23"}
- **windows enter on a real chain:** {"id":15,"symbol":"AAPL","entry_date":"2019-01-24"}
- **windows enter on a real chain:** {"id":16,"symbol":"AAPL","entry_date":"2019-01-25"}
- **windows enter on a real chain:** {"id":17,"symbol":"AAPL","entry_date":"2019-01-28"}
- **windows enter on a real chain:** {"id":18,"symbol":"AAPL","entry_date":"2019-01-29"}
- **windows enter on a real chain:** {"id":19,"symbol":"AAPL","entry_date":"2019-01-30"}
- **windows enter on a real chain:** {"id":20,"symbol":"AAPL","entry_date":"2019-01-31"}
