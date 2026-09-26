# KnightTrader BloFin — market research (Sep 2026)

## Your category

**Local-first desktop crypto trading automation** with AI-assisted decisions — not exchange-hosted grid bots, not cloud SaaS with monthly rent.

## Direct competitors (pricing anchor)

| Product | Model | Price | Exchange focus | Beginner UX |
|---------|-------|-------|----------------|-------------|
| **Gunbot** | Lifetime license | ~€44–€299 promo / €199+ | 20+ exchanges | Low — trader audience |
| **DennTech** | Lifetime | $76–$350 | Kraken, Binance.US, Gemini | Medium |
| **Mega Brain AI Trader** | One-time tiers | $200 / $400 / $600 | 15+ exchanges | Medium |
| **thornberry** | Early access lifetime | $199 (limited) | Broker SDK | High research desk |
| **BloFin native bots** | Free with exchange | Trading fees only | BloFin only | Medium — in-app only |
| **BloFin MCP** | Open source | Free | BloFin API | Dev / Claude users only |

## Your differentiation (use in ads)

1. **BloFin-specific** — Hermes + desk + cron wired for BloFin USDT-M path
2. **Beginner How-To** — Coinbase → BloFin → keys (competitors assume you already have keys)
3. **Price** — $29 vs $199–$600 lifetime competitors
4. **Free AI models** — auto-ping on startup; no recurring Nous subscription by default
5. **Local keys** — same privacy story as Gunbot/thornberry, cheaper entry

## Why $29 (not $19 or $47/mo)

| Price | Pros | Cons |
|-------|------|------|
| **$19** | High impulse conversion on cold FB traffic | ~$11 profit/sale after ads+Stripe; support eats margin |
| **$29** ✓ | Still impulse-friendly; ~$18 profit at $18 CPA | Room for one support touch per buyer |
| **$49** | Better unit economics | Harder sell to "never bought crypto" audience |
| **$47/mo** | Recurring revenue | Mismatch with current product (no app login); high churn risk |

**Decision: $29 one-time** for launch ads. Raise to $39 after 50+ sales and stable support load.

## Realistic sales math (Facebook)

Assumptions: $25/day spend, 1.2% CTR, $1.20 CPC, 2.5% checkout conversion on payment page.

- Clicks/day: ~20
- Purchases/day: ~0.5 (1 sale every 2 days early on)
- CPA early: $40–60 (normal until creative wins)
- After optimization: target **$15–22 CPA**

**Month 1 realistic:** $750 ad spend → **15–35 sales** → **$435–$1,015 gross** if CPA improves mid-month.

## Gaps to close for "total success"

1. **$29 Stripe link** — current link may still charge $19
2. **Meta Pixel** — required for optimization
3. **Purchase → download funnel** — Stripe success URL → landing `?purchase=success`
4. **Optional v1.2.24:** email capture on download page for support + upsell
5. **App purchase gate** — GitHub installer is public; real gate needs Stripe webhook + license (phase 2)

## Positioning statement (use everywhere)

> KnightTrader BloFin is a **$29 one-time local desktop app** that walks beginners through BloFin setup and runs an AI trading assistant on a 5-minute schedule. **Not a subscription. Not cloud-hosted.** Futures are risky — only use money you can afford to lose.
