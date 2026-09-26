# Stripe + download funnel setup ($29)

## 1. $29 Payment Link (live)

**Current link:** `https://buy.stripe.com/28EaEYaUK8Sg2yzgEIe3e0e`

Success redirect is already set to:

```
https://mknight2690-sys.github.io/knighttrader-blo-site/?purchase=success&utm_source=stripe
```

To recreate: run `node scripts/create-payment-link.mjs` with `STRIPE_SECRET_KEY` set (see `CRYPTO-PAYMENTS.md`).

## 1b. Enable USDC (crypto)

Dashboard → **Settings** → **Payment methods** → **Stablecoins and Crypto** → request/activate.

See `CRYPTO-PAYMENTS.md` for full steps.

## 2. Update config on both sites

Edit `config.js` in **both** repos:

```js
priceUsd: 29,
stripePaymentUrl: 'https://buy.stripe.com/YOUR_NEW_29_LINK',
metaPixelId: 'YOUR_PIXEL_ID',  // numbers only
```

Push to GitHub → Pages updates in ~1–2 min.

## 3. Meta Pixel

1. [Meta Events Manager](https://business.facebook.com/events_manager) → Connect data → **Web** → **Meta Pixel**
2. Copy Pixel ID → paste into `config.js` → redeploy
3. Install [Meta Pixel Helper](https://chrome.google.com/webstore/detail/meta-pixel-helper) Chrome extension
4. Visit payment page → should see **PageView**
5. Complete test purchase → landing page should fire **Purchase**

## 4. Test purchase flow

1. Open payment page in incognito
2. Pay with Stripe test mode OR real $29 (refund yourself)
3. Confirm redirect to download page with green success banner
4. Download Windows `.exe` or Mac `.dmg`
5. Install and open How-To tab

## 5. Facebook ad URL

Always send paid traffic to **payment page**, not download page:

```
https://mknight2690-sys.github.io/knighttrader-blofin-payment/?utm_source=facebook&utm_medium=paid&utm_campaign=kt_blo_launch
```

Organic / post-purchase users use the **landing/download page** directly.
