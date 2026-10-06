# DOMOVINA TV – payment rails discovery (2026-10-06)

Legend: status = official-page (fetched/quoted from vendor/bank doc) / secondary-source / unverified. "Net from 1 EUR" = 1 - (pct*1 + fixed). "Donor extra" = cost to donor on top of 1 EUR.
Entity-type column: I = individual, O = obrt, U = udruga, D = d.o.o. Many entity claims are UNVERIFIED unless stated.

## A) Processors / wallets

| # | Name / URL | Layer | HR recipient? payout | Fees (who pays) | Min | Net from 1 EUR / donor extra | Donor UX | Public verifiability | Source + status | Note |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Stripe Payment Links – stripe.com/en-hr/pricing | processor | HR supported country; entity types I/O/U/D unverified (needs legal form docs); payout to HR IBAN (payout fee not on page: unverified) | EEA std cards 1.5%+0.25; EEA premium 2.8%+0.25; UK 2.5%+0.25; intl 3.15%+0.25 (+2% only if currency conversion); SEPA DD 0.35 flat; recipient pays | Stripe min charge ~0.50 EUR (unverified) | std EEA: 1-(0.015+0.25)=**0.735**; premium 0.722; intl 0.7185; SEPA DD 0.65. Donor extra 0 | Card/Apple/Google Pay, no account, instant | No (private) | stripe.com/en-hr/pricing – official-page | Baseline confirmed for EEA; intl is 3.15% not 3.25% on HR page |
| 2 | Stripe nonprofit discount – support.stripe.com/questions/fee-discount-for-nonprofit-organizations | processor | secondary sources say EU orgs eligible, need >80% tax-deductible donations; HR udruga eligibility UNVERIFIED | 2.2%+0.30 (US wording; secondary) | - | would be 0.678 = WORSE than HR standard 1.5%+0.25 | same | No | secondary-source / unverified for EU | Discount is US-centric; for EEA cards standard rate is already lower. Do not bother |
| 3 | PayPal Donate/checkout – paypal.com/hr/webapps/mpp/merchant-fees | processor/wallet | HR supported; business acct (I/O/U/D); withdrawal to HR bank free if no FX | Commercial: 3.40% + 0.35 domestic/EEA; UK 4.69%; rest 5.39%; micropayment 5.00%+micro fixed (fixed not captured, UNVERIFIED); currency conversion 3.0%; withdrawal to bank no fee | none | 1-(0.034+0.35)=**0.616**; micropayment ~0.85-0.90 only if fixed ~0.05-0.10 (unverified) | PayPal account or guest card; instant | No | official-page (fees page, updated 2026-09-28); charity 1.99% rate = US/other, HR eligibility not found: unverified | Worst for 1 EUR on standard rate; PayPal Giving Fund for HR charities not found |
| 4 | PayPal friends&family | wallet | personal acct; PayPal ToS forbids commercial/fundraising abuse (unverified) | free domestic funded by balance/bank; card funding fee | - | ~1.00 but ToS risk | account needed | No | unverified | Not recommended for public donation page |
| 5 | SumUp payment links – sumup.com/en-ie/pricing | processor | SumUp operates in HR (country selector); entity types unverified; payout to IBAN | secondary: 1.69% flat on payment links (alt secondary: 2.5%+0.25 – conflicting); official page did not render online rate | ? | if 1.69%: **0.983**; if 2.5%+0.25: 0.725 | card, no account | No | secondary-source (conflicting) | Potentially the cheapest card route for 1 EUR; MUST verify HR-specific online rate |
| 6 | Mollie – mollie.com/pricing | processor | HR availability/onboarding UNVERIFIED | EEA consumer cards 1.80%+0.25; commercial 2.90%+0.25; non-EEA 3.25%+0.25; SEPA bank transfer 0.25; PayPal var+0.10 | none | card 0.732; SEPA transfer 0.75 | card/bank | No | official-page (pricing) | Wero listed by Mollie but not HR |
| 7 | Viva.com – viva.com/en-hr/pricing | processor | HR page exists; I/O/D likely; payout IBAN; udruga unverified | online cards 2.19%+0.24; plans Zero 0 / Default 4.99 EUR/mo; payment links included | - | 1-(0.0219+0.24)=**0.738** | card/Apple Pay, no account | No | official-page (via search extract) | Similar to Stripe |
| 8 | Revolut Business (payment links, Revolut Pay) – revolut.com/business/accept-payments-pricing | processor | EEA-registered companies; sole trader/udruga unverified; settles to Revolut IBAN (HR bank payout not checked) | EEA consumer cards 1% + 0.20 (Revolut Pay also 1%+0.20); intl higher (not captured) | - | 1-(0.01+0.20)=**0.79** | card or Revolut Pay (Revolut users 1 tap) | No | secondary-source (official HR page 403) | Best net among card processors verified by number; 0.20 fixed dominates |
| 9 | Revolut Me / revtag P2P | local-wallet | personal accounts; business revtag? unverified | free between Revolut users | - | 1.00 | donor must have Revolut | No | unverified | Only works inside Revolut; personal-use ToS |
| 10 | Wise payment links – wise.com/us/business/accept-card-payments | processor | **unavailable to new customers** (per Wise page); 2.9%+0.30 USD dom / 4.2%+0.30 intl | - | - | n/a (closed) | - | No | official-page | Dead end. Wise still useful as receive-IBAN/FX account |
| 11 | Square | processor | **Not available in HR** (UK/IE/FR/ES only) | - | - | n/a | - | - | secondary-source | exclude |
| 12 | Adyen | processor | available in HR but minimum monthly billing, enterprise onboarding | min invoice amount (value not confirmed) | - | n/a | - | No | secondary-source | Not for a podcast |
| 13 | Checkout.com | processor | enterprise onboarding | custom | - | n/a | - | No | unverified (not researched) | exclude |
| 14 | Monri WSPay – wspay.info/cd/319/monri-wspay-cjenik-usluga | HR gateway | HR d.o.o./obrt/udruga with merchant acct at acquirer | 380 EUR+VAT/yr; if turnover >80k EUR/yr: 0.50% instead; acquirer/bank MDR on top (not captured) | - | n/a (fixed yearly fee dominates; 380/yr only pays off at large volume) | card 3DS | No | official-page | Not viable for micro-donations |
| 15 | CorvusPay – corvuspay.com/cjenik | HR gateway | same | basic module min 30 EUR/mo licence; 0.50% + 0.02 per authorised tx; acquirer MDR on top | - | n/a | card | No | official-page (via search extract) | Not viable at low volume |
| 16 | Payten/Nestpay | HR/regional gateway | - | - | - | n/a | - | - | unverified (not researched) | |
| 17 | Apple Pay / Google Pay | method | not a processor; works through Stripe/Viva/etc. | no extra fee on Stripe | - | same as underlying | 1 tap | - | secondary | Biggest UX win for impulse 1-5 EUR |

## B) Bank / local rails

| # | Name | Layer | HR recipient? | Fees | Min | Net from 1 EUR / donor extra | Donor UX | Transparency | Source + status | Note |
|---|---|---|---|---|---|---|---|---|---|---|
| 18 | SEPA credit transfer to IBAN (any entity) | bank-rail | all types incl. individual; IBAN is the payout | Sender pays. PBZ (tariff 1.1.2026): digital banking to other HR bank **0.33 EUR**; to PBZ client account 0.00-0.20; **to humanitarian-organisation account at PBZ 0.00**; branch 1.90; cross-border SEPA EUR digital 0.33, branch 1.90; **instant transfers priced same as normal**. ZABA (secondary, Jan 2025): digital 0.35, branch 2.00. Erste (secondary): George 0.40, branch 2.50; George app 1.50/mo from Apr 2026 (secondary, unverified). OTP: in-bank 0.13, other bank 2.00 (channel unclear, unverified). Recipient: incoming EUR free on PBZ (package); other banks unverified | none | Recipient 1.00; donor extra 0.33-0.40 => donor pays ~1.33-1.40 | needs IBAN, HUB3/EPC QR scan, bank app; instant (SCT Inst) | Publicly visible only if account is transparent (transparent account / Wise / Revolut statements) | PBZ tariff PDF – official-page; ZABA/Erste/OTP – secondary-source | Baseline "0.25-0.40" confirmed: 0.33-0.40 mobile. Zero cost to recipient: best for recipient, mildly costly for donor at 1 EUR |
| 19 | SEPA Instant (IPR 2024/886) | bank-rail | all banks in HR must send/receive since 9 Oct 2025; fee <= regular SEPA; free Verification of Payee | = SCT fee (see PBZ: same tariff line) | none | same as 18 | 10 s, 24/7 | as above | secondary-source (croatiaweek etc.) + PBZ tariff official | Use instant QR; recipient name check helps trust |
| 20 | HUB3 barcode (PDF417) / EPC QR | method | n/a | none | - | - | scan in HR banking apps | - | project CLAUDE.md; bwip-js already used | Already in repo |
| 21 | KEKS Pay (Erste) – kekspay.hr | local-wallet | KEKS Pay terms: payer and receiver are natural persons; "donation recipient" role exists for registered recipients; legal entity eligibility UNVERIFIED | free to send/receive/withdraw per Erste terms | ? | 1.00 | KEKS Pay app, any HR bank | No | official-page terms (via search extract) | HR-only, very popular; ask Erste whether media project can be a donation recipient |
| 22 | Aircash | local-wallet | e-money inst. licensed by HNB; receiving as merchant/donation unverified | free in-store/online/top-up; cash-out 2% (PBZ ATM) / 4% (kiosk) | - | n/a | Aircash app | No | secondary-source | Skip unless demand |
| 23 | Wero / EPI | local-wallet | **No evidence Wero is live or planned in HR**; live DE, FR, BE; NL, LU next; rollout 2026-27 | - | - | n/a | - | - | secondary-source (absence of evidence) | Re-check in 2027 |
| 24 | Humanitarni broj 060 (HT) – t.ht.hr/drustvena-odgovornost | operator-billing | Request by organiser of humanitarian action / permanent collector; nonprofits, but law (ZoHP) also allows legal/natural persons for actions; HT decides: humanitarian character, number of recipients, media support, national scope; HAKOM only numbering; collection regulated by social-policy law (NN 102/2015) | Donor pays fixed charge via phone bill (cited 0.83 EUR incl VAT; per-call; operator/VAT share not found) | fixed | n/a – donation amounts are fixed steps, operator cut unknown | call or SMS | action reported to ministry | official-page + secondary; operator share UNVERIFIED | Needs a "humanitarian" cause; podcast is NOT humanitarian; practically unusable |

## C) Crypto / stablecoin

| # | Name | Layer | HR recipient? | Fees | Min | Net from 1 EUR | Donor UX | Transparency | Source + status | Note |
|---|---|---|---|---|---|---|---|---|---|---|
| 25 | Monerium EURe (Gnosis) – monerium.com/eure | crypto-rail | any entity with Monerium onboarding (KYC); IBAN <-> wallet | no Monerium fee on SEPA in/out, mint/redeem 1:1 | none | 1.00 on-chain (plus tiny gas, ~0.00x EUR, unverified) | donor needs EURe wallet or can SEPA to the IBAN and receives minted EURe | **Yes, on-chain public** | official-page / secondary | Matches repo's custody design |
| 26 | Gnosis Pay | crypto-rail | spend side (Visa card); gas subsidised | zero fees stated | - | n/a for receiving | - | on-chain | secondary-source | Operations tier, not donor-facing |
| 27 | Circle EURC | crypto-rail | no issuer fee for transfers (unverified) | chain gas only | - | ~1.00 | wallet | on-chain | unverified (not researched) | Ramp lists EURC |
| 28 | Stripe stablecoin payments – docs.stripe.com/payments/stablecoin-payments | processor+crypto | EU businesses: **private preview**; 1.5% flat | 1.5% | - | 0.985 if available | wallet, USDC on Solana/ETH/Polygon/Base | on-chain | secondary-source | Not generally available in HR as of search |
| 29 | Coinbase Commerce / Onchain Payments | processor | **shut down outside US & Singapore on 2026-03-31** | was 1% | - | n/a | - | - | secondary-source | exclude |
| 30 | BTCPay Server | self-hosted | no KYC; self-custody | 0% processor; network fee only | dust limit | ~1.00 minus chain fee (BTC on-chain unsuitable for 1 EUR; LN fine) | wallet scan | public if you publish xpub/address | secondary-source | Needs a server |
| 31 | NOWPayments | processor | KYC; custodial | 0.5% single-currency, ~1% w/ conversion (secondary) | - | 0.995 / 0.99 | wallet | partial | secondary-source | |
| 32 | Lightning (Alby Hub, Strike) | crypto-rail | Strike available in 100+ countries; Alby Hub self-custody; Alby no platform fee | recipient pays nothing; routing paid by sender (~20 ppm median); Alby Cloud ~10-13 USD/mo optional | ~1 sat | ~1.00 | Lightning wallet (niche in HR) | payer-private; publish static LNURL/zap | secondary-source | Cheapest rail technically; tiny audience |
| 33 | Chain cost of 1 EUR transfer | crypto-rail | - | Solana ~0.0003 USD; Base ~0.01-0.05 USD; Gnosis Chain sub-cent (unverified; bridge ETH->Gnosis cost 1.38 USD) | - | n/a | - | on-chain | secondary-source | Chain fee is negligible; real cost is on-ramp |
| 34 | On-ramp for donor w/o crypto (MoonPay, Transak, Ramp) | on-ramp | - | MoonPay ~3.99% card, **min 3.99 USD**; Transak 3.5-5.5%; Ramp card ~3.9% EUR, SEPA ~0.49% | - | donor buying 1 EUR of crypto effectively impossible/uneconomic (min fee > amount) | KYC, ~5-10 min | - | secondary-source | Crypto is NOT a viable channel for 1 EUR from non-crypto donors; fine for 20+ EUR donors |
| 35 | MoonPay Commerce (ex-Helio), Request Finance, Safe donations | misc | not researched in depth | - | - | n/a | - | - | unverified | Safe = custody (already used) |

## Summary

**Cheapest to recipient for 1 EUR (net):**
1. SEPA/instant transfer, HUB3/EPC QR: 1.00 net, but donor pays 0.33-0.40 at HR banks (PBZ 0.33; PBZ 0.00 if recipient account is a registered humanitarian org at PBZ).
2. KEKS Pay: free both sides (entity eligibility unverified).
3. SumUp payment links: 0.983 IF 1.69% flat (conflicting sources, verify).
4. Revolut Business: 0.79 (1% + 0.20).
5. Viva 0.738, Stripe 0.735, Mollie 0.732 (card), PayPal 0.616.
Fixed fee dominates under ~5 EUR: any processor with 0.20-0.35 fixed loses 21-38% of a 1 EUR gift.

**HR-specific:** WSPay/CorvusPay have annual/monthly licences and are pointless at this scale. Square unavailable. Wise card links closed to new customers. Wero not in HR. KEKS Pay is the local P2P standard. SCT Inst is mandatory at all HR banks since 2025-10-09 at parity pricing. 060 numbers restricted to humanitarian actions run via HT.

**Surprises:** Stripe "nonprofit discount" (2.2%+0.30) is worse than HR standard 1.5%+0.25; Coinbase Commerce closed outside US/SG (2026-03-31); Stripe stablecoin still preview in EU; on-ramp minimums (3.99 USD) kill 1 EUR crypto gifts; PBZ gives 0.00 transfers to humanitarian-org accounts at PBZ.

**To verify next:** SumUp HR online rate; Revolut official HR page (403 here); Stripe payout/HR entity types (udruga/obrt); PayPal micropayment fixed fee; ZABA/Erste/RBA/HPB current tariff PDFs (only PBZ fetched directly); KEKS Pay for legal entities.

**Names found, not researched:** Payten/Nestpay, Checkout.com, MoonPay Commerce/Helio, Request Finance, Circle EURC, PayPal Giving Fund (HR), Zeffy, Donorbox/Fundraise Up (wrappers).

## Sources
- stripe.com/en-hr/pricing; paypal.com/hr/webapps/mpp/merchant-fees; mollie.com/pricing; viva.com/en-hr/pricing; sumup.com/en-ie/pricing; revolut.com/en-HR/business/accept-payments-pricing (403) ; wspay.info/cd/319; corvuspay.com/cjenik
- PBZ tariff: pbz.hr .../PBZ_naknade_u_poslovanju_s_gradjanima 01012026-28022026.pdf (read directly)
- kekspay.hr; erstebank.hr KEKS terms; t.ht.hr humanitarni telefon; narodne-novine.nn.hr 2015_09_102_1970
- monerium.com/eure; docs.gnosischain.com/about/uRamp; eco.com / spark.money crypto comparisons (secondary)
