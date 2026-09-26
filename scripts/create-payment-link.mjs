#!/usr/bin/env node
/**
 * Creates KnightTrader BloFin $29 Stripe Payment Link (card + USDC when enabled in Dashboard).
 *
 * Usage (PowerShell):
 *   $env:STRIPE_SECRET_KEY = "sk_live_..."
 *   node scripts/create-payment-link.mjs
 *
 * Or:
 *   node scripts/create-payment-link.mjs --key-file "C:\path\to\key.txt"
 */

import { readFileSync } from 'node:fs';

const SUCCESS_URL =
  'https://mknight2690-sys.github.io/knighttrader-blo-site/?purchase=success&utm_source=stripe';
const PRODUCT_NAME = 'KnightTrader BloFin — AI Agent Trading System';
const PRICE_CENTS = 2900;
const METADATA_KEY = 'kt_product';
const METADATA_VAL = 'knighttrader-blofin-v1';

function parseArgs(argv) {
  const out = { keyFile: null };
  for (let i = 2; i < argv.length; i++) {
    if (argv[i] === '--key-file' && argv[i + 1]) out.keyFile = argv[++i];
  }
  return out;
}

function loadSecretKey(keyFile) {
  if (process.env.STRIPE_SECRET_KEY) return process.env.STRIPE_SECRET_KEY.trim();
  if (keyFile) return readFileSync(keyFile, 'utf8').trim();
  console.error('Set STRIPE_SECRET_KEY or pass --key-file path.');
  process.exit(1);
}

async function stripe(secretKey, path, method = 'GET', body = null) {
  const res = await fetch(`https://api.stripe.com/v1${path}`, {
    method,
    headers: {
      Authorization: `Bearer ${secretKey}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: body ? new URLSearchParams(body).toString() : undefined,
  });
  const json = await res.json();
  if (!res.ok) {
    const msg = json?.error?.message || res.statusText;
    throw new Error(`Stripe API ${path}: ${msg}`);
  }
  return json;
}

async function findOrCreateProduct(secretKey) {
  const list = await stripe(secretKey, '/products?limit=100&active=true');
  const existing = (list.data || []).find(
    (p) => p.metadata?.[METADATA_KEY] === METADATA_VAL || p.name === PRODUCT_NAME
  );
  if (existing) return existing;

  return stripe(secretKey, '/products', 'POST', {
    name: PRODUCT_NAME,
    description: 'Local desktop AI trading assistant for BloFin. One-time license.',
    [`metadata[${METADATA_KEY}]`]: METADATA_VAL,
  });
}

async function findOrCreatePrice(secretKey, productId) {
  const list = await stripe(secretKey, `/prices?product=${productId}&active=true&limit=20`);
  const existing = (list.data || []).find(
    (p) => p.unit_amount === PRICE_CENTS && p.currency === 'usd' && !p.recurring
  );
  if (existing) return existing;

  return stripe(secretKey, '/prices', 'POST', {
    product: productId,
    unit_amount: String(PRICE_CENTS),
    currency: 'usd',
  });
}

async function createPaymentLink(secretKey, priceId) {
  return stripe(secretKey, '/payment_links', 'POST', {
    'line_items[0][price]': priceId,
    'line_items[0][quantity]': '1',
    'after_completion[type]': 'redirect',
    'after_completion[redirect][url]': SUCCESS_URL,
    allow_promotion_codes: 'true',
  });
}

async function main() {
  const { keyFile } = parseArgs(process.argv);
  const secretKey = loadSecretKey(keyFile);

  console.log('Checking Stripe account…');
  const account = await stripe(secretKey, '/account');
  console.log(`Account: ${account.email || account.id} (${account.country})`);

  console.log('Creating product + $29 price…');
  const product = await findOrCreateProduct(secretKey);
  const price = await findOrCreatePrice(secretKey, product.id);
  console.log(`Product: ${product.id}  Price: ${price.id} ($${PRICE_CENTS / 100})`);

  console.log('Creating Payment Link…');
  const link = await createPaymentLink(secretKey, price.id);
  console.log('\n--- SUCCESS ---');
  console.log('Payment Link URL:\n', link.url);
  console.log('\nPaste into config.js on BOTH sites:');
  console.log(`  stripePaymentUrl: '${link.url}',`);
}

main().catch((err) => {
  console.error(err.message || err);
  process.exit(1);
});
