// KnightTrader BloFin — marketing & checkout config (edit here, then redeploy both sites)
window.KT_CONFIG = {
  productName: 'KnightTrader BloFin',
  priceUsd: 29,
  priceLabel: '$29',
  // Create a NEW $29 Payment Link in Stripe Dashboard → update this URL.
  // Set success URL to:
  // https://mknight2690-sys.github.io/knighttrader-blo-site/?purchase=success&utm_source=stripe
  stripePaymentUrl: 'https://buy.stripe.com/dRmcN69QG4C0b55bkoe3e0c',
  landingUrl: 'https://mknight2690-sys.github.io/knighttrader-blo-site/',
  paymentUrl: 'https://mknight2690-sys.github.io/knighttrader-blofin-payment/',
  githubReleases: 'https://github.com/mknight2690-sys/KnightTrader-BloFin/releases/latest',
  // Meta Events Manager → Data Sources → your Pixel → Pixel ID (numbers only)
  metaPixelId: '',
  // Optional: restrict ads to these countries first (lower support burden / clearer BloFin path)
  targetCountries: ['US', 'CA', 'GB', 'AU', 'RO', 'PL', 'NL', 'MX'],
};
