# Creator membership / tip / storefront platforms - discovery pass
Date checked: 2026-10-06. Method: WebFetch of official pages where reachable, WebSearch otherwise. Many pages returned 403/404 (Ko-fi, Patreon help, Substack, Ghost help); those rows rely on search snippets = "secondary-source". Everything needs later verification.

Baseline: Stripe EEA domestic card 1.5% + EUR0.25 -> EUR1 nets EUR0.735 (direct Stripe HR account). Croatia IS a Stripe-supported country (stripe.com/global, official-page).
Net-for-EUR1 formulas use only numbers I saw; USD-denominated fees (2.9%+$0.30) are NOT EEA rates, so most rows are "n/a" or flagged approximate.

## Table

| # | Platform (url) | Type | Processor / MoR | Platform fee + own fixed fee; processor pass-through | Min payment | HR recipient usable? | Recurring | Net of EUR1 (EEA card) | Source status | Note |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Patreon (patreon.com) | membership | Own "Patreon Payments" on top of card networks/PayPal; Patreon is MoR for pledges (unverified) | 10% platform (all new creators, since Aug 2025 - secondary) + processing 2.9%+$0.30 (>$3) or 5%+$0.10 (<=$3) + payout fees (PayPal 1% cap $20; local bank ~1.55%+$0.25 in some regions) + 2.5% FX | none stated | Yes: PayPal payout list includes Croatia (secondary); bank payout for HR unverified | yes (one-time supported in newer versions) | approx 1 - 0.10 - (0.05 + 0.10) = ~0.75 before payout/FX, using USD-schedule figures (EEA rates may differ). Treat as approximate | pricing page official-page (10%); processing numbers secondary-source | Pledge-oriented, not a one-off donation tool; 10% is the confirmed headline |
| 2 | Ko-fi (ko-fi.com) | tips / membership / storefront | Direct to creator's own PayPal and/or Stripe (Ko-fi not MoR) | 0% on one-off tips (free plan); 5% on memberships/shop on free plan; Gold (~$6-12/mo, figures conflict) = 0%. Processor fees pass through | none found | Yes if HR Stripe or PayPal account (Stripe HR official) | yes (memberships need Gold or 5%) | Via Stripe EEA: 1 - (0.015+0.25) = 0.735; via PayPal: n/a (EUR fixed fee unknown) | secondary-source (ko-fi.com pages 403) | Best-known 0% tips; money goes straight to your processor |
| 3 | Buy Me a Coffee (buymeacoffee.com) | tips / membership / shop | Stripe (and PayPal for payouts? unverified); BMC not MoR | 5% + Stripe 2.9%+$0.30, +1% non-US cards, +0.5% subscriptions, 0.5% payout | not stated | Stripe HR OK in principle; unverified for BMC | yes | ~0.05 + Stripe approx 0.029+$0.30 + 1% + 0.5% payout -> ~0.60-0.65 (USD figures, approximate, not EEA) | help.buymeacoffee.com page official-page; EEA rates unverified | Dearer than Ko-fi for small tips |
| 4 | Steady (steady.page, ex steadyhq.com, DE) | membership | Stripe/PayPal/SEPA via Steady; Steady acts as MoR and handles EU VAT (secondary) | 10% + processing fees (rates not on pricing page) | n/a | Likely (EU, SEPA payout) - unverified | yes | n/a | pricing page official-page (10%); rest secondary | German, EU-VAT friendly; aimed at publishers |
| 5 | Memberful (memberful.com) | membership | Stripe (own account) | $49/mo + 4.9% transaction fee + Stripe fees | n/a | Yes via own Stripe HR | yes | n/a (monthly fee) | official-page | Owned by Patreon; poor for small donations |
| 6 | Substack (substack.com) | newsletter membership | Stripe (creator's account) | 10% + Stripe 2.9%+$0.30 + 0.7% billing | n/a | Croatia on Stripe list; Substack support unverified | yes | n/a | secondary-source (support page 403) | Not a donation tool |
| 7 | Ghost (ghost.org) | CMS memberships/tips | Stripe only | 0% Ghost fee (self-hosted); Ghost(Pro) plan fee; Stripe fees apply | n/a | Via own Stripe HR | yes | n/a | unverified (help page 404) | Has tips feature; hosting cost |
| 8 | Liberapay (liberapay.com, FR non-profit) | donation | Stripe + PayPal (recipient connects own); SEPA Direct Debit for EUR | 0% platform; avg Stripe ~3%, PayPal ~5% | EUR0.01/week nominal; donors asked to prepay (card minimums unverified) | YES: Croatia listed in 33 fully supported territories (official-page) | yes (weekly), no true one-off | n/a - fixed Stripe EUR0.25 likely applies; prepay batching lowers it | official-page | Cheapest recurring; weekly cap EUR100; no one-off tipping |
| 9 | Open Collective / Open Source Europe (opencollective.com) | donation (fiscal hosting) | Stripe, PayPal, Wise, bank | Host fee 6-10% (OS Europe 8% online, 10% bank) + processor fees; platform pricing now by org plan (free / $60 / $320) | n/a | Needs a fiscal host; legal entity in HR possible via host | yes | n/a | Platform pricing official-page; host fees secondary | Transparent ledger; heavy onboarding |
| 10 | GitHub Sponsors (github.com/sponsors) | donation/membership | Stripe Connect / GitHub billing | Personal accounts 0% (100% to dev); orgs up to 6% (3% card + 3% GitHub) | $1 tiers typical (unverified) | Croatia is a supported region (official-page) | yes + one-time | ~1.00 for individual donor per GitHub docs (GitHub absorbs processing) | official-page | Needs GitHub profile and open-source framing; fits domovina GitHub org |
| 11 | Gumroad (gumroad.com) | storefront | Gumroad is MoR (since 2025-01-01) | 10% + $0.50 direct; 30% Discover; processing separate? (unverified) | $0+ pay-what-you-want | PayPal payout; HR unverified | yes (memberships) | 1 - 0.10 - 0.50 -> <= ~0.4 USD-ish, n/a | official-page | Bad for EUR1 |
| 12 | Lemon Squeezy (lemonsqueezy.com) | storefront / SaaS | MoR; owned by Stripe | 5% + $0.50, extras for some payments | n/a | Payout to 200+ countries bank/PayPal | yes | 1 - 0.05 - ~0.46 = ~0.49 (USD fixed fee, approx) | official-page | MoR handles VAT; poor for micro |
| 13 | Paddle (paddle.com) | storefront / SaaS | MoR | 5% + $0.50 | custom under $10 | Business onboarding required | yes | approx 0.49 | official-page | Not for donations |
| 14 | Whop (whop.com) | storefront/membership | Own/Stripe (unverified) | page fetch failed | ? | unknown | yes | n/a | unverified | |
| 15 | Fourthwall (fourthwall.com) | storefront + memberships + donations | Stripe/PayPal; Fourthwall payouts | Donations: no platform fee (Free & Pro), membership/digital 5%; processing 2.9%+$0.30 (US) | n/a | Payout countries unknown | yes | n/a | official-page (partial) | Merch for DOMOVINA is a possible side use |
| 16 | Podia (podia.com) | storefront/membership | Stripe + PayPal (own accounts) | Plans $42-150/mo; 5% on Mover; processor 2.9%+30c | n/a | Via own Stripe HR | yes | n/a | official-page | Subscription cost |
| 17 | Kajabi (kajabi.com) | course/storefront | Kajabi Payments (Stripe-based) or own Stripe/PayPal | 0% platform, plan $; Kajabi Payments 2.9%+$0.30 / own Stripe +0-2% surcharge | n/a | unknown | yes | n/a | secondary-source | Expensive suite |
| 18 | Memberstack (memberstack.com) | membership plumbing | Stripe | 4%/2%/0.9%/0% by plan $25-399/mo + Stripe | n/a | Via own Stripe | yes | n/a | secondary-source | For Webflow sites |
| 19 | Tipeee (tipeee.com, FR) | tips/membership | Adyen, PayPal, SEPA; own EU wallet | 8% incl. VAT (6.66% ex VAT); PayPal +1%; Paysafecard +15%; bank payout free | unknown | Probably (EU) - unverified | yes | ~0.92 minus method costs, n/a | secondary-source (official page 404) | French audience |
| 20 | Herohero (herohero.co, CZ/SK) | membership | Stripe | 10% incl. Stripe for non-US creators + VAT | unknown | Central European; HR unverified | yes | ~0.90 if included (Stripe included per secondary) | secondary-source | Regional, closest culture to HR |
| 21 | Patronite (patronite.pl, PL) | membership/one-off | PL payment operators | 6.5% + VAT on subscriptions; none on one-off; operators 0.8-2.9% | unknown | Polish residents likely only | yes | n/a | secondary-source | Polish only (probably) |
| 22 | Zrzutka.pl (PL) | crowdfund | PL operators | 0% platform | unknown | PL bank account likely | no | n/a | secondary-source | Polish only |
| 23 | Buycoffee.to (PL) | tips | PL operator | 7.5% service + 2.5% transaction = 10%; recurring 5%, payouts after the first 6.90 PLN | unknown | Polish creators | yes | ~0.90 | secondary-source | Polish only |
| 24 | Suppi.pl (PL) | tips | PL | 0% service + 0% transaction (secondary claim) | unknown | PL | ? | n/a | secondary-source | Claim is suspicious; verify |
| 25 | Petje.af (NL) | membership | Creator's own Mollie or Stripe | 6% | unknown | Possibly via own Stripe | yes | n/a | secondary-source | Dutch |
| 26 | Throne (throne.com) | wishlist/cash gifts | Own/processor | Cash gifts 9.75% + processing; 7% non-partner gifts | unknown | unknown | no | ~0.90 minus processing | secondary-source | Fan-gifting, not fitting |
| 27 | StreamElements tips (streamelements.com) | tips | PayPal or SE.Pay | 0% platform, processor only | unknown | PayPal HR ok | no | n/a | secondary-source | Streaming oriented |
| 28 | Streamlabs tips (streamlabs.com) | tips | PayPal/Stripe | 0% (1%, cap $5, w/o Prime - secondary) | unknown | unknown | no | n/a | secondary-source | |
| 29 | Donorbox (donorbox.org) | donation | Stripe/PayPal | 2.95% (std), 1.75% ($150/mo Pro); + processor | unknown | Needs Stripe HR | yes | n/a | secondary-source | Wrapper over Stripe/PayPal |
| 30 | Polar.sh (polar.sh) | storefront / OSS funding | MoR; Stripe Connect payout | 5% + $0.50 free; +1.5% intl cards; payouts $2/mo + 0.25%+$0.25; $15 dispute | n/a | Stripe payout countries (HR plausibly) | yes | ~0.49 minus intl 1.5% (approx) | official-page | |
| 31 | Thanks.dev (thanks.dev) | OSS funding | Stripe? | 5% commission (secondary) | n/a | unknown | yes | n/a | secondary-source | Dependencies-based; irrelevant to a podcast |
| 32 | Flattr | micro-donation | - | SHUT DOWN Nov 2023 | - | - | - | - | secondary-source | Dead; skip |
| 33 | Supercast (supercast.com) | podcast subs | Stripe | $0.59/subscriber/mo + Stripe; one-off 15% capped $1.50 + Stripe; maybe $49/mo | n/a | Via own Stripe HR | yes | n/a | secondary-source | Private podcast feeds |

## Wrappers vs own processing
- Thin Stripe/PayPal wrappers, platform fee added on top: BMC (5%), Substack (10%), Ghost, Memberful (4.9% + $49), Memberstack, Podia, Kajabi, Donorbox, Supercast, Fourthwall donations (0%), Liberapay (0% but pass-through), Ko-fi (0% tips, direct to your PayPal/Stripe), Streamlabs/StreamElements.
- Merchant of Record (own entity sells; handles VAT; fixed fee heavy): Gumroad, Lemon Squeezy, Paddle, Polar, Steady (secondary), Whop (unverified).
- Own/licensed processing: Patreon (Patreon Payments), Tipeee (Adyen/own wallet), Polish operators behind Patronite/buycoffee.to; GitHub Sponsors (GitHub billing + Stripe Connect).

## Cheapest for EUR1 (only where computable)
1. GitHub Sponsors individual: ~EUR1.00 (docs: 100% to developer; individual-only, needs OSS framing).
2. Ko-fi one-off tip via your own HR Stripe: EUR0.735 (1 - 0.015 - 0.25).
3. Direct Stripe Payment Link (baseline): EUR0.735.
4. Patreon ~0.75 only on USD-schedule approximation (unverified for EEA).
5. BMC ~0.60-0.65 (approximate).
Fixed fees of $0.30-$0.50 (BMC, Gumroad, Paddle, LS, Polar) make EUR1 donations bad; all net below ~0.5-0.65.

## Found but not researched / unresolved
Whop fees; Tippin.pl, Tipply, Hooandja; Memberful vs Supercast exact current prices; Ghost fee page (404); Substack, Patreon, Ko-fi official pages (403); Patronite/Tipeee official; Kajabi official; Streamlabs/StreamElements official; Open Collective Europe official host fee; Patreon HR bank payout; Ko-fi/BMC minimum payment amounts; donatr.ee (link aggregator, not processor); Zeffy (0% nonprofit, not in segment); Buy Me a Coffee PayPal payout.
