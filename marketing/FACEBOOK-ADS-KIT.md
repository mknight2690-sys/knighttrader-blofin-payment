# KnightTrader BloFin — Facebook Ads Kit ($29 launch)

Use **Ads Manager → Create → Sales → Website**. Destination URL:

```
https://mknight2690-sys.github.io/knighttrader-blofin-payment/?utm_source=facebook&utm_medium=paid&utm_campaign=kt_blo_launch
```

Turn on **Advantage+ creative** (or Dynamic Creative) and paste the sets below. Meta will mix 3 videos × 4 headlines × 4 primary texts × 4 descriptions.

---

## Budget (read this first)

**$15 total is not enough to learn.** Meta needs ~1,000+ impressions per creative variant before it picks winners.

| Phase | Daily budget | Duration | Total | Goal |
|-------|-------------|----------|-------|------|
| **Test** | $15/day | 5–7 days | $75–$105 | Find CTR > 1%, CPC < $1.50 |
| **Validate** | $25/day | 7 days | $175 | 5–10 purchases, CPA < $22 |
| **Scale** | $40–60/day | ongoing | — | CPA stays under ~$20 on $29 price |

**Target economics:** $29 sale − ~$1.15 Stripe fee = **~$27.85 net**. Profitable if cost per purchase **≤ $18** (leaves room for refunds/support).

**Audience (start narrow):**
- Age 25–55
- Interests: cryptocurrency, Bitcoin, trading, BloFin, futures trading, passive income
- Countries: US, CA, GB, AU (expand to RO/PL/NL/MX once creative works)
- Placements: **Advantage+ placements ON** (cheaper learning)

**Pixel events to optimize toward (after Pixel ID in config.js):**
1. Week 1: **Landing Page Views** or **Link Clicks**
2. After 5+ purchases in 7 days: switch to **Purchase** optimization

---

## 3 video scripts (text-on-screen / voiceover — 15–22 sec each)

Record as vertical 9:16 in CapCut, Canva, or Meta's video tools. Bold captions on every line.

### Video A — "Debit card beginner"
```
[0–3s]  HOOK: "Never bought crypto? This desktop app still sets up a BloFin trading bot."
[3–8s]  "One-time $29. Runs on YOUR computer. Keys never leave your PC."
[8–14s] "Step-by-step How-To tab: Coinbase → BloFin → API keys → auto-trading."
[14–18s] "Local AI agent checks your account every 5 minutes."
[18–22s] CTA: "Tap Learn More — $29 one-time, no subscription."
```

### Video B — "vs $5,000 custom bot"
```
[0–3s]  HOOK: "Custom trading bots cost $5,000–$50,000."
[3–8s]  "KnightTrader BloFin: $29 once. Windows + Mac installer."
[8–14s] "Hermes AI assistant + live dashboard + beginner walkthrough built in."
[14–18s] "Not cloud-hosted. Not a subscription. You own the software."
[18–22s] CTA: "Risk warning: you can lose money trading futures."
```

### Video C — "Local / privacy angle"
```
[0–3s]  HOOK: "Your API keys stay on YOUR machine — not someone else's server."
[3–9s]  "Desktop app for BloFin perpetual futures. AI picks free models automatically."
[9–15s] "Install in one click. How-To tab holds your hand through setup."
[15–20s] "$29 one-time. Free app updates. Kill switch anytime."
[20–22s] CTA: "Download after checkout — link on the next page."
```

---

## 4 headlines (≤40 chars ideal)

1. `BloFin AI Trading Bot — $29 Once`
2. `Desktop Crypto Bot for Beginners`
3. `Local AI Agent — Your PC Only`
4. `Skip the $5K Bot — Pay $29 Once`

---

## 4 primary texts / titles (125 chars or less for primary)

1. `$29 one-time desktop app. Guided setup for BloFin futures. AI runs every 5 min on YOUR computer. Keys stay local. Futures are risky — only use money you can lose.`
2. `New to crypto? The How-To tab walks you Coinbase → BloFin → API keys → live dashboard. One payment, no KnightTrader subscription.`
3. `Stop renting cloud bots. KnightTrader BloFin installs on Windows/Mac, auto-selects free AI models, and updates itself. $29 flat.`
4. `Built for beginners with a debit card and a laptop. Local Hermes assistant + trading desk + logs. You can stop it anytime from the app.`

---

## 4 descriptions (≤30 chars show in feed; full text below)

Short link description field (use 30-char version in tight fields):

1. `$29 · local desktop bot`
2. `Guided BloFin setup`
3. `No monthly fee to us`
4. `Windows + Mac installer`

Long description (paste in primary text if Meta asks for separate description):

1. `One-time $29 includes installer, How-To tab, dashboard, and free updates. Separate one-time ~$5 Nous credit top-up (paid to Nous) to create your API key; app uses free AI models after that.`
2. `Runs locally on your PC. Not financial advice. Perpetual futures can lose money.`
3. `Secure Stripe checkout. Instant access to download page after payment.`
4. `Compare: Gunbot €199+, Mega Brain $200+, custom dev $5K+. Same local-bot category, beginner-first.`

---

## Campaign structure in Ads Manager

1. **Campaign:** Sales → Website purchases (or Traffic for first $75)
2. **Ad set:** Broad + interests above, $15–25/day, 1 ad set to start
3. **Ad:** Upload 3 videos, enable dynamic creative, paste all headlines/texts
4. **URL:** payment page with UTM (top of this doc)
5. **After Stripe checkout:** customer lands on download page → fires Purchase pixel (once Pixel ID set)

---

## Before you spend $1

- [ ] Create **$29 Stripe Payment Link** (see `STRIPE-SETUP.md`)
- [ ] Paste **Meta Pixel ID** into `config.js` on both sites
- [ ] Set Stripe **success URL** to landing page with `?purchase=success`
- [ ] Test full flow: ad URL → pay → download page → install

---

## What NOT to promise in ads

- Guaranteed profit or passive income
- "Set and forget" without risk disclaimer
- BloFin endorsement (you are independent software)

Always include: **Futures are leveraged. You can lose your deposit.**
