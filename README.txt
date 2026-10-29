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
- No real money trading, order execution, signals, broker connection, automated position management, live account state or market data.
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


VERSION 2 ADDITIONS — DUAL SCALPING MODES
- New 'Scalp modes' tab: evaluate observed spread, ATR(14) M5, H1/M15 trend, M5 confirmation, M1 noise, and high-impact news risk.
- Explicit DEMO rules: Quick $1–$2; Selective $3–$5; or WAIT. This is not a real-time market monitor or AI signal, and thresholds have not been validated.
- One-click application of a template into the existing PAPER trade planner, where entry, stop and intended lots remain user-selected and risk-checked.
- New $50 USD absolute max planned-loss setting; effective risk is the lower of the percentage risk and this cap.
- Journal entries include the selected mode.
- Existing V1 localStorage journal uses the same storage key and should migrate on the SAME browser origin. Export a backup first before deploying or replacing a prior version.
- No XM API, TradingView API, Grok API, or live orders included; manual conditions only.
