# KnightTrader BloFin — launch checklist

Complete these in order before turning on Facebook ads.

## Today (required)

- [ ] **Stripe:** Create **$29** Payment Link → paste URL into `config.js` on both sites
- [ ] **Stripe success URL:** `https://mknight2690-sys.github.io/knighttrader-blo-site/?purchase=success&utm_source=stripe`
- [ ] **Meta Pixel:** Events Manager → copy Pixel ID → paste into `config.js` on both sites → push
- [ ] **Test purchase:** incognito → pay → lands on download page → green banner → download works
- [ ] **Record 3 videos** from scripts in `FACEBOOK-ADS-KIT.md` (CapCut / Canva, 9:16 vertical)

## Ads Manager setup

- [ ] Campaign: **Sales** (or Traffic for first $75)
- [ ] Budget: **$15/day minimum** × 5–7 days (not $15 total)
- [ ] URL: `https://mknight2690-sys.github.io/knighttrader-blofin-payment/?utm_source=facebook&utm_medium=paid&utm_campaign=kt_blo_launch`
- [ ] Upload 3 videos + paste 4 headlines + 4 primary texts + 4 descriptions from kit
- [ ] Enable **Advantage+ creative** / dynamic creative testing
- [ ] Audience: crypto/trading interests, 25–55, US/CA/GB/AU

## Week 1 metrics to watch

| Metric | Target |
|--------|--------|
| CTR | > 1% |
| CPC | < $1.50 |
| Landing → checkout click | > 3% |
| Checkout → purchase | > 2% |
| CPA (purchase) | < $22 |

## After 5+ sales

- [ ] Switch optimization to **Purchase** event
- [ ] Consider raising price to **$39**
- [ ] Add email capture on download page (optional)

## Files in this folder

| File | Purpose |
|------|---------|
| `FACEBOOK-ADS-KIT.md` | Videos, headlines, descriptions, budget |
| `MARKET-RESEARCH.md` | Competitors, pricing rationale |
| `STRIPE-SETUP.md` | Payment link + Pixel wiring |
| `LAUNCH-CHECKLIST.md` | This list |
