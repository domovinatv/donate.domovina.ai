# Verification of donation-channel fees (2026-10-06)

Note: pass 1 claims were not supplied to me verbatim except where the task lists them; "pass-1 claim" below is as stated in the task. Many vendor pages return 403 to WebFetch (Revolut, Ko-fi, Patreon support, GitHub marketing page); for those the value comes from a vendor-domain search result snippet (flagged "snippet"), not a full page read.

## Summary table

| # | Item | Pass-1 claim | Verified value | Net from EUR 1 (EEA card) | Status | Source |
|---|---|---|---|---|---|---|
| 1 | SumUp payment links HR | 1.69% or 2.5%+0.25 | 2.50% flat, no fixed fee | 0.975 | CORRECTED (neither) | sumup.com/hr-hr/cijene/ |
| 2 | Revolut Business acceptance | 1% + 0.20 | 1% + 0.20 online EEA consumer cards (snippet); non-EEA/commercial 2.8%+0.20 | 0.79 | CONFIRMED (fee); plan UNVERIFIED; udruga NOT eligible, HR IBAN: no (LT) | help.revolut.com merchant fees page |
| 3 | Stripe HR | 3.15%+0.25 non-EEA | EEA 1.5%+0.25; non-EEA 3.15%+0.25 +2% FX; min 0.50 EUR; standard payout free | 0.735 | CONFIRMED | stripe.com/en-hr/pricing |
| 4 | PayPal HR | - | 3.40%+0.35 commercial; micropayment 5.00%+0.05; charity rate exists, EUR value unverified | 0.6225 std / 0.90 micro | PARTLY UNVERIFIED (charity rate) | paypal.com/hr/business/paypal-business-fees |
| 5 | Patreon | - | 10% platform (new creators after 2025-08-04) + processing + payout | approx. 0.55 (see item) | PARTLY UNVERIFIED (EUR table) | support.patreon.com |
| 6 | Buy Me a Coffee | 5% | 5% platform + Stripe 2.9%+$0.30 (+1% intl, +0.5% subs, +0.5% payout) | approx. 0.58 | CONFIRMED 5%; HR-specific processing UNVERIFIED | help.buymeacoffee.com |
| 7 | Ko-fi | 0% donations | 0% on one-time tips; 5% on memberships/shop; Gold $12/mo = 0% | 1 - PSP fee | CONFIRMED (snippet) | help.ko-fi.com |
| 8 | GitHub Sponsors | 0% | 0% for personal-account sponsors; orgs paying up to 6%; Croatia listed as supported region; payout in USD | 1.00 (card sponsor personal) | CONFIRMED w/ caveats | docs.github.com |
| 9 | YouTube | - | 70% of net for memberships, Super Chat, Super Thanks; early tier 500 subs + 3000h or 3M Shorts views | 0.70 less tax/iOS fee | CONFIRMED (snippet) | support.google.com/youtube |
| 10 | Liberapay | 0% | 0% platform; Croatia supported; min EUR 0.01/week; PSP avg 3% Stripe / 5% PayPal | approx. 0.97 | CONFIRMED | liberapay.com/about/faq |
| 11 | Apple Podcasts Subs | - | Croatia available; 70% yr1, 85% after; annual fee listed as 159.99 HRK (stale) | 0.70 | CONFIRMED availability; fee amount STALE | podcasters.apple.com |

## 1. SumUp
- Claim: 1.69% flat, or 2.5% + 0.25.
- Verified: 2.50% on online payments (payment links, Bookings, digital products), regardless of plan (Pay as You Go or Payments Plus).
- Source: https://www.sumup.com/hr-hr/cijene/ : "Na plaćanja putem interneta obrađena pomoću Poveznica za plaćanje, značajke Bookings i ostalim digitalnim proizvodima primjenjuje se naknada od 2,50%."
- Net from EUR 1: 1 - 0.025 = 0.975 (no fixed fee stated; payout fee not checked).
- Status: CORRECTED. 1.69% is not the online/payment-link rate (likely the in-person reader rate; not verified here). 2.5%+0.25 is also wrong: no fixed part.

## 2. Revolut Business
- Fee: "For online payments with European consumer cards, 1% + EUR 0.20" (EEA + IS, LI, NO); in-person 0.8% + 0.02; commercial and non-European cards 2.8% + 0.20 online. Source: https://help.revolut.com/en-IE/help/merchant-accounts/fees/how-much-does-it-cost-to-accept-card-payments/business/ (WebFetch 403; value from vendor-domain search result of this page and en-ES/en-DE variants). Net = 1 - 0.01 - 0.20 = 0.79.
- Revolut Pay: separate rate NOT found. STILL UNVERIFIED.
- Plan: snippets did not say whether the rate depends on plan. STILL UNVERIFIED (the pricing page revolut.com/business/accept-payments-pricing/ was 403).
- Croatian entities (search snippet of help.revolut.com/en-HR .../what-types-of-business-entities-are-supported): supported: d.o.o., dioničko društvo, javno trgovačko društvo, komanditno društvo. Unsupported: Udruga (association). General rule: "legal form should not be a charity, public sector, cooperative". Obrt/sole trader not seen in either list: UNVERIFIED.
- HR IBAN: Revolut Business EEA EUR accounts use LT IBANs; local IBANs listed only for FR, IE, LT, NL, RO, ES, UK (help.revolut.com/en-HR/business/help/setting-up-an-account/managing-my-currency-accounts/question-local-ibans-available/). No HR IBAN. Status: CONFIRMED (fee), CORRECTED eligibility (udruga excluded), HR IBAN = no.

## 3. Stripe Croatia
- Source https://stripe.com/en-hr/pricing: EEA cards "1.5% + EUR 0.25"; UK "2.5% + 0.25"; international "3.15% + 0.25" plus 2% currency conversion. Non-EEA claim CONFIRMED. Instant payouts 1% (min 0.50).
- Net EUR 1 EEA card: 1 - 0.015 - 0.25 = 0.735.
- Min charge: https://docs.stripe.com/currencies : "0.50 EUR" (for the settlement currency). A EUR 1 donation is fine.
- Payout fee: docs.stripe.com/payouts and pricing page show no standard payout fee (search snippet: "Stripe doesn't charge you a fee to initiate normal payouts"). A "0.30 EUR" figure surfaced in snippets belongs to Global Payouts (a different product), not Dashboard payouts to your own IBAN. Treat as 0, but not explicitly quoted on a single HR page: mostly confirmed.
- HR IBAN payouts: docs.stripe.com/payouts lists IBAN countries; Croatia is covered by the EUR/IBAN set (HR in EEA list on currencies page).
- Business types: Stripe Services Agreement for Croatia (stripe.com/en-hr/legal/ssa): "business (which may be a sole proprietor) or a non-profit organisation located in Croatia" eligible (snippet). So obrt (sole proprietor), udruga (non-profit), d.o.o. all eligible. Status: CONFIRMED.

## 4. PayPal Croatia
- Source https://www.paypal.com/hr/business/paypal-business-fees: commercial 3.40% + EUR 0.35; micropayment 5.00% + 0.05 (domestic), 5.50% + 0.05 for international digital goods. Nets for EUR 1: 0.6225 standard; micropayment 1 - 0.05 - 0.05 = 0.90 (only if account is switched to micropayment rate; applies to transactions under about EUR 10 on request).
- Charity rate: https://www.paypal.com/hr/cshelp/article/how-do-i-apply-for-the-charity-rate-help221 confirms a charity application exists on the HR site (needs registered-charity proof) but shows no EUR rate. The 1.99% + 0.49 figure is the US (USD) rate from paypal.com/us. HR EUR value and whether a Croatian udruga qualifies: STILL UNVERIFIED. No donation-specific rate on the HR fee page.

## 5. Patreon
- Platform: "If you published your creator page after August 4, 2025, you are on the standard 10% platform fee plan" (support.patreon.com/hc/en-us/articles/36426991446797). pricing page: "10% of the income you earn" plus processing, currency conversion, payout fees. CONFIRMED.
- Processing: standard 10% plan, card/Apple Pay with USD payout 2.9% + $0.30. For EUR payout the snippet said 3.4% + EUR 0.35 (and legacy 5% + 0.15 micropayments): this conflicts in kind (it looks like a legacy/PayPal-type row) and the fee article itself was 403. STILL UNVERIFIED.
- Payout (snippet of support.patreon.com payout guide): Croatia supports local-currency (EUR) bank transfer, about $0.50 flat per payout, min $10; PayPal 1% (min $0.25, cap $20); Payoneer $1. Croatia on PayPal supported list.
- Net EUR 1 (rough, if 10% + 2.9%+0.30 equivalent): about 1 - 0.10 - 0.029 - 0.30 = 0.57 (EUR processing row unverified, so approximate).

## 6. Buy Me a Coffee
- Source https://help.buymeacoffee.com/en/articles/8105744-how-to-calculate-charges-on-your-payment : "5% platform fee"; Stripe "2.9% + $0.30 per successful transaction"; "+1% for international (outside of the US)"; "+0.5% for subscription payments"; "0.5% fee for payout processing".
- Payout: first $10 minimum to request; weekly Wednesday transfer to Stripe (help article 10025793 snippet). Minimum payout not stated on the fee page. Croatia as supported Stripe Connect country: not checked on a BMC page.
- Net EUR 1: 1 - 0.05 - (0.029+0.01) - 0.30 - 0.005 about 0.61 (USD fixed fee treated as 0.30; real EUR fixed fee unverified). Status: 5% CONFIRMED; EUR/HR processing UNVERIFIED.

## 7. Ko-fi
- Search snippet from help.ko-fi.com/hc/en-us/articles/360002506494 (page itself 403): "Ko-fi Free offers 0% on one-time tips, but a flat 5% service fee applies to anything else (shop items, memberships, monthly tips, commissions)". Gold = $12/month for 0% on everything. Money goes directly to your own PayPal/Stripe; their normal fees apply (about 3% + $0.30 stated by Ko-fi).
- Minimum donation: not found. Stripe/PayPal for Croatia: Ko-fi connects Stripe and PayPal; Croatia-specific support not verified. Note: monthly "tips" (recurring) are 5% on Free, not 0%.
- Status: 0% one-time CONFIRMED (snippet); minimum and HR UNVERIFIED. Net = 1 - PSP fee (Stripe EEA 0.735 if Stripe).

## 8. GitHub Sponsors
- https://docs.github.com/en/sponsors/getting-started-with-github-sponsors/about-github-sponsors : "GitHub Sponsors does not charge any fees for sponsorships from personal accounts, so 100% of these sponsorships go to the sponsored developer or organization." Organizations paying: "a fee of up to 6%" (3% card + 3% GitHub). Both one-time and monthly are offered; documentation states no minimum (the $1 figure is not in docs: UNVERIFIED).
- Recipients: "contribute to an open source project and legally operate in a supported region"; organizations can be sponsored. A non-software media project does not obviously qualify (requires open-source contribution; domovinatv does have open-source repos so could qualify through them, judgment call).
- Supported regions: the about page lists Croatia (fetch summary; "reside in a supported region to receive funds").
- Payout: "Payouts are made in US dollars"; bank account region must match residence region (setting-up doc). EUR payout not offered, so FX is on the receiving bank. Requires Stripe Connect, 2FA, W-8BEN.
- Status: CONFIRMED 0% (personal sponsors), CORRECTED: payout is USD, not EUR.

## 9. YouTube
- Snippets of support.google.com/youtube: 70% of net revenue for channel memberships, Super Chat/Stickers, Super Thanks; "70% is calculated after local sales tax and App Store fees on iOS are deducted"; card transaction costs covered by YouTube.
- Eligibility: fan funding tier = 500 subscribers + 3 public uploads in 90 days + (3,000 watch hours in 12 months or 3M Shorts views in 90 days); full YPP = 1,000 subs + 4,000 h or 10M Shorts views (support.google.com/youtube/answer/72851, answer/12843009). Age 18+, country where features are available (Croatia listed for related features; Memberships/Super Chat availability in Croatia not explicitly quoted).
- Net EUR 1: about 0.70 before tax and iOS fees (iOS: Apple 30% first deducted, so about 0.49 on iOS purchases; estimate from the 70%-of-post-fee statement).
- Status: CONFIRMED (snippets); HR availability of Memberships/Super Chat UNVERIFIED.

## 10. Liberapay
- https://liberapay.com/about/faq : platform "0%"; "The minimum you can give any user is EUR 0.01 per week, but in order to minimize processing fees you will be asked to pay for multiple weeks in advance"; "average fee percentages ... 3% for Stripe and 5% for PayPal"; money now goes straight to the recipient's processor account.
- https://liberapay.com/about/global : Croatia in "Best supported territories"; EUR supported.
- Net EUR 1 (one-off, if Stripe about 3%): about 0.97 approx (Liberapay is recurring-oriented; actual per-payment fees vary with prepaid chunks). Status: CONFIRMED. The "prepay/batch" description changed: now direct to recipient account, not batched wallet.

## 11. Apple Podcasts Subscriptions
- https://podcasters.apple.com/support/904-availability-of-apple-podcasts-features : Croatia has Subscriptions for listeners; Croatia listed for Podcasters Program with annual fee "159.99 HRK" (stale currency, Croatia adopted EUR 2023-01-01; actual EUR charge not verified; global fee is USD 19.99).
- https://podcasters.apple.com/support/5553-subscription-launch-checklist : "70% of the subscription price at each billing cycle, minus applicable taxes", 85% after one year of paid service. EU compliance (DSA trader info) required.
- Net EUR 1: 0.70 minus taxes (VAT included in price). Status: CONFIRMED availability and share; fee amount in EUR STILL UNVERIFIED.
