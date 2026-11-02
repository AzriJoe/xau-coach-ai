XAU COACH — MOBILE-FIRST PAPER-TRADING COACH

WHAT IS INCLUDED
- index.html: mobile-friendly application with navigation
- Risk planner for XAUUSD with configurable gold ounces per lot, risk %, equity, and lot steps
- Six-item pre-trade checklist and 1.5:1 minimum reward-to-risk check
- Paper-trade journal; exit price entry; performance statistics in USD and R
- Daily simulated loss cap, maximum daily paper trades, optional pause toggle
- Four lessons about risk, chart timeframes, setups and psychology
- Browser-local data and JSON export/import
- manifest.webmanifest, service worker and icon for installable offline app

IMPORTANT LIMITATIONS
- No real money trading, order execution, automated position management, or live account state. The optional private Tailscale dashboard receives market candles only.
- Position size and P/L are approximate. Broker contract specs, spreads, commissions, financing, slippage, market gaps, and currency conversion may change outcomes. Simulator records exclude trading costs.
- Trade counter and daily limit are calculated from records in this browser, not real MT5 trades.
- The app does not call Grok or any other AI API.
- This app is educational and not financial advice; profits are not guaranteed.

HOW TO USE ON IPHONE
1. Upload the ENTIRE folder's contents to a GitHub Pages repository (index.html must be at the root), or another HTTPS static host.
2. Open the website in Safari.
3. Tap Share > Add to Home Screen. Open the icon to use the app.
4. Open Settings first and set your reference account equity, risk %, broker lot size and daily limits.
5. Use Plan trade to calculate risk; complete all checks; log only a paper trade.
6. Journal > Record paper exit to enter a simulated exit price; export backups regularly.

GROK AND METATRADER INTEGRATION ROADMAP (NOT IMPLEMENTED)
- Stage 1: Manual, private AI feedback on journal records, explicitly labeled as non-execution advice.
- Stage 2: A server-side API proxy for xAI/Grok and read-only MT5 market/account data. Never embed a secret API token in public HTML or GitHub Pages.
- Stage 3: Backtest a deterministic rules-based strategy (including fees, spread, slippage, regime shifts, out-of-sample and walk-forward testing) and paper trade over an extended period.
- Stage 4: Only after independent security/risk validation, evaluate opt-in MT5 EA execution on desktop/VPS, with max loss/trades, hard SL, kill switch, logs, alerts and manual override. Never assume profitability.

No account credentials or API keys are needed or collected.


VERSION 4 ADDITIONS — READ-ONLY MT5 FEED PROTOTYPE
- Optional live relay card polls a configured Worker /latest URL every 15 seconds and shows signal, symbol/price, feed age, and levels.
- Requires a separately deployed Cloudflare Worker + KV namespace and an MT5 desktop Expert Advisor. Setup is in connector/SETUP.txt.
- The EA transmits public market candles, bid, and spread only; it does not read account data or place trades.
- Prototype is unvalidated; use demo/paper review and check calendar risk manually.

VERSION 3 ADDITIONS — MANUAL SIGNAL COACH
- Signal Coach tab evaluates manually entered H1 trend, M15 structure, closed M5 trigger, spread and news status.
- Displays BUY SETUP, SELL SETUP or WAIT with transparent reasons.
- Requires user-entered invalidation and target levels; only passes planned reward:risk of at least 1.5:1.
- Copies the setup into the risk planner for review. No live quotes, AI API, MT5 connection or trade execution.
- New service worker cache version ensures updated files can be fetched after redeployment.

VERSION 2 ADDITIONS — DUAL SCALPING MODES
- New 'Scalp modes' tab: evaluate observed spread, ATR(14) M5, H1/M15 trend, M5 confirmation, M1 noise, and high-impact news risk.
- Explicit DEMO rules: Quick $1–$2; Selective $3–$5; or WAIT. This is not a real-time market monitor or AI signal, and thresholds have not been validated.
- One-click application of a template into the existing PAPER trade planner, where entry, stop and intended lots remain user-selected and risk-checked.
- New $50 USD absolute max planned-loss setting; effective risk is the lower of the percentage risk and this cap.
- Journal entries include the selected mode.
- Existing V1 localStorage journal uses the same storage key and should migrate on the SAME browser origin. Export a backup first before deploying or replacing a prior version.
- No XM API, TradingView API, Grok API, or live orders included; manual conditions only.


VERSION 12 LIVE-FIRST INTERFACE — LESS MANUAL INPUT
- Live Coach is the default screen. The private Tailscale dashboard auto-connects on load, hides the URL field, and checks for updates every second; the EA sends market data every 15 seconds. The manual assessment is collapsed and optional.
- Active setups show a red shaded entry-to-stop risk zone and a green shaded entry-to-target zone, extended into the chart's forward area. BUY and SELL zones appear on the appropriate side of entry.
- Live Coach provides the H4/H1/M15/M5 rule result and chart without requiring manual entry of prices, trends, triggers, stops, or targets. High-impact USD news remains a manual gate; unknown or nearby news forces WAIT, and a clear-news check expires after 30 minutes. The detailed manual assessment is still available under “Manual assessment (optional)”.
- Current BUY/SELL setup, if present, is marked with the relay's entry reference, stop/invalidation, and one 1.5R target. WAIT leaves the chart unannotated apart from candles.
- Signal rules: H1/M15 EMA20/50 alignment, six-bar closed M5 breakout, RSI(14), MACD(12,26,9), tick-volume and ATR filters, $0.60 max spread, plus 2-of-3 confirmation from H4 EMA20/50, Stochastic(14,3,3) cross, and five-bar A/D direction. No account, position, or trade-history data is used.
- The private Tailscale root serves this dashboard and /latest from the package. The public GitHub Pages site remains separate. The feed is read-only and places no orders.
- This preview does not show historical signal markers or validated win-rate statistics. Test the rule output in paper mode before relying on it.


VERSION 13 LIVE ANALYTICS EXPLAINER
- Adds an automatically updated plain-language interpretation of the live conditions: timeframe bias, RSI/MACD/Stochastic context, A/D direction, tick volume, M5 breakout, ATR and spread filters.
- Describes conflicting evidence in plain language (for example, a bearish trend with oversold Stochastic or bullish MACD) and clarifies why the final state is WAIT or a rule-aligned setup.
- Does not call an AI service, predict price, or use account, position, or trade-history data. News remains a manual check.
