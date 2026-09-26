# Accept crypto (USDC) via Stripe

Your checkout uses Stripe Payment Links. The live **$29 link** accepts card today; **USDC** appears once Stripe activates crypto on your account.

**Live Payment Link:** `https://buy.stripe.com/28EaEYaUK8Sg2yzgEIe3e0e`

---

## What was done

1. Created **$29** product + Payment Link via your `sk_live_…` key (Bobby folder)
2. Set success redirect → download page with `?purchase=success`
3. Turned **crypto preference ON** in Stripe payment method settings (pending Stripe approval)
4. Updated payment page copy: Card, Apple Pay, Cash App, or USDC

---

## One step left — activate USDC in Dashboard

Crypto shows `available: false` until Stripe approves:

1. [Stripe Dashboard](https://dashboard.stripe.com) → **Settings** → **Payment methods**
2. Find **Stablecoins and Crypto** / **USDC**
3. Complete any **Request access** or onboarding prompts
4. Status must show **Active** (not Pending)

Once active, the **same Payment Link** automatically shows **Pay with crypto** — no site changes needed.

Docs: https://docs.stripe.com/payments/accept-stablecoin-payments

---

## Test checkout

1. Open https://mknight2690-sys.github.io/knighttrader-blofin-payment/
2. Click Pay $29
3. Pay with card (works now) or USDC (after activation)
4. Confirm redirect to download page with green banner

---

## Your keys (important)

| File | What it is |
|------|------------|
| `Documents\Stripe Secret Key.txt` | **Restricted key** (`rk_live_…`) — **expired**, do not use |
| `Documents\Stripe Backup Code.txt` | **2FA recovery code** — not an API key, used only if locked out of Stripe login |
| `Documents\Bobby\Stripe Secret Key.txt` | **Working secret key** (`sk_live_…`) — use this for API/scripts only, never commit to GitHub |

---

## Regenerate payment link later

```powershell
cd C:\Users\mknig\knighttrader-blofin-payment
$env:STRIPE_SECRET_KEY = (Get-Content "C:\Users\mknig\OneDrive\Documents\Bobby\Stripe Secret Key.txt" -Raw).Trim()
node scripts/create-payment-link.mjs
```

Paste the printed URL into `config.js` on both site repos.
