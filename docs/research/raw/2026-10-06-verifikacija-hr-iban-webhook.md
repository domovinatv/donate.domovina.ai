# HR IBAN + instant notification: verification (2026-10-06)

Tags: [OFF] official page fetched/read; [SEC] secondary (aggregator/blog/search summary); [UNV] unverified / inferred.
Caveat: several vendor pages returned 403/404/429 to the fetcher; those claims are [SEC] or [UNV].

## 1. Monerium
- Licensed EMI in Iceland (Monerium EMI ehf., supervised by FSA/Central Bank of Iceland), passportable across EEA. [OFF: monerium.com/press, lb.lt register entry listed in search]
- IBAN/SEPA rails are provided by partner LHV Pank (Estonia), not by Monerium itself. [OFF: Monerium business ToS]
- Country of IBAN issued: ToS do not state it. Search summaries say IBANs are offered for Iceland, Ireland, Lithuania (the latter two via the Gnosis Pay help page, which I could not re-fetch: 404). [SEC/UNV] No HR IBAN anywhere in sources.
- Passporting into Croatia: "Monerium EMI ehf." appears in the HNB spreadsheet "popisi pružatelja usluga u RH" (list of providers from other member states, file modified 15/9/2026; the string is in sharedStrings with "Financial Supervisory Authority, Iceland"). [OFF: hnb.hr xlsx, I downloaded and grepped it; sheet/service-code columns not decoded]. So legal service into HR exists; this does not mean an HR IBAN.
- Gnosis Pay help page snippet lists Croatia among eligible nationalities for the Monerium IBAN. [SEC, page 404 on re-fetch]
- Incoming SEPA fee: "zero fees" on Monerium infrastructure (Monerium EURe page via search). [SEC] Full fee schedule not read. Monerium ToS warn amounts may differ due to "transaction and/or currency conversion fees". [OFF]
- Public plans for HR/other local IBANs: nothing found. [UNV]

## 2. Enable Banking
- HR coverage page: Zagrebačka banka (m-zaba SCA), PBZ, Erste, RBA supported. OTP banka "not yet supported". Croatia banka PSD2 discontinued after HPB acquisition (March 2026). [OFF: enablebanking.com/docs/markets/hr]
- Addiko, HPB, KentBank etc.: not stated on the page. [UNV]
- Pricing: per connected account per month + per payment, quote-only ("Get a Quote" since April 2026). Free "restricted production" mode for linking your OWN accounts (evaluation/personal). [SEC; 404 on pricing page]
  - Caveat: restricted mode for an org's own accounts is plausibly enough for a donation account (we are the account holder), but ToS wording "evaluation or personal use" is a risk. [UNV]
- Webhooks: ONLY payment status changes ("Payment Status Webhook"). No incoming-transaction or consent webhooks. [OFF: enablebanking.com/docs/api/webhooks]
- Polling limits: HR page silent. Per-ASPSP `maximum_consent_validity` in metadata; 429 possible. [OFF: API reference, partial read]
- PSD2 RTS (Art. 36(5)(b)): unattended AIS max 4 calls / 24h unless higher frequency is agreed with the ASPSP and user; user-present calls unlimited. SCA renewal 180 days (was 90) since the 2022 amendment. [SEC: EBA final report EBA/RTS/2022/03 via search; not opened]
- Practical: "user present" calls are unlimited, so a donor-facing page cannot count as the account holder being present. Poll latency would be ~6h when unattended. A bank may still allow a higher frequency by agreement. [UNV for HR banks]

## 3. Other AIS aggregators (HR)
- GoCardless Bank Account Data (ex-Nordigen): closed to new signups, enterprise-only. [SEC: dev.to, openbankingtracker, invoiceninja forum]. No webhooks for transactions. [UNV]
- Tink: webhooks exist (`account-transactions:modified`, `refresh:finished`) but fire on refresh, which is still bound by the 4x/24h rule for background. HR coverage not confirmed. Enterprise pricing. [OFF docs via search for webhooks; HR UNV]
- Salt Edge: lists HR banks (Agram, BKS, Erste, IKB, Karlovačka, OTP, Podravska, PBZ, RBA, ...). Zaba not in snippet. [SEC]. Pricing/webhooks not verified.
- Yapily: webhooks Private Beta, mainly payments/consent/data-access events. [OFF docs via search]. HR coverage UNV. Owns finAPI.
- finAPI: no Croatia (13 countries listed). [SEC: finapi.io coverage]
- TrueLayer: Data API async webhook only when a call completes; HR coverage not confirmed. [OFF docs via search; HR UNV]
- Token.io: not researched. Kevin.: bankrupt Sept 2024, license revoked. [SEC]
- Ponto/Isabel: "1,800+ banks, 15 countries"; Croatia not confirmed. [SEC]
- All of the above sit on the same bank PSD2 XS2A (Berlin Group, HUB standard) and the same 4/day background cap; webhooks cannot beat bank-side limits. [SEC/inference]

## 4. Croatian banks' own corporate channels
- Standard in HR: camt.052/053/054 statement and notification files per HUB/sepa.hr implementation guide, delivered via e-banking (PBZCOM@NET, e-zaba, RBA, HPB). camt.054 = credit notification per posting. [OFF: sepa.hr, rba.hr, hpb.hr PDFs via search; camt.054 availability by bank not checked]
- PBZ: PSD2 XS2A portal (openbanking.pbz.hr / apiportal.pbz.hr) supports camt.05x for AISP; corporate extracts via PBZCOM@NET contract. [SEC]
- Erste Group: ErsteConnect premium API (account info, SEPA initiation, reconciliation), camt.054 for corporates, SEPA Instant live since 2025-10-05. [SEC; whether Erste HR offers push webhooks UNV]
- Zaba: PSD2 portal developer.unicredit.eu; no corporate push API found. [SEC/UNV]
- Nothing found for a public HR bank webhook for incoming credits. Need to ask banks: "camt.054 push via host-to-host / SFTP / API", cost and eligibility (usually companies/associations with a business contract). [UNV]

## 5. EMIs / neobanks with HR IBAN + webhooks (most important)
- Revolut Business: webhooks v2 `TransactionCreated` exist [OFF: developer.revolut.com]. But local IBANs for business are FR, IE, LT, NL, RO, ES, UK, not HR; HR customers get LT IBAN. [SEC: search of help.revolut.com, page 403 on fetch]. No HR IBAN.
- Wise: no HR IBAN (BE/HU/etc.); `incoming-transfer#credited` webhook exists. [SEC/OFF docs via search]
- Paysera: IBAN always "LT". [SEC: Paysera knowledge base]
- Aircash d.o.o.: Croatian EMI (HNB, EBA IEN116), BIC AIDOHR22; T&Cs cover personal accounts only, "own personal needs"; no API terms. HR IBAN per user not confirmed. [OFF terms; rest UNV]
- N26, bunq, Satispay: not verified; none known to issue HR IBANs (N26/bunq: DE/NL). [UNV]
- Erste George Business: native HR IBAN, HNB bank. [SEC] Webhook API not confirmed.
- Monri, HP e-money, Airwallex-in-HR: not verified. [UNV] (Salt Edge lists "Airwallex" under HR but probably a data artefact.)
- Conclusion: I found NO provider that gives a Croatian business an HR IBAN with an incoming-credit webhook. Needs direct enquiry (Erste, Aircash business, HPB, Zaba/PBZ corporate).

## 6. PIS ("pay by bank") in Croatia
- CorvusPay: first HR PISP licensed by HNB; "payment by IBAN"; merchant gets execution status in-app; no bank fees to merchant; same-bank = instant, otherwise HR clearing (3 cycles/business day, though SEPA Inst now applies). [SEC: corvuspay.com pages via search]
- Enable Banking: SCT supported by all HR banks over PSD2 APIs; instant via EuroNCSInst; payment status webhook [OFF: HR page + webhooks docs]. Price per payment: quote-only.
- Tink / Fintecture / Yapily PIS in HR: unverified.
- UX: donor leaves for bank app SCA; confirmation to merchant depends on payment status (accepted vs settled). Donor pays the bank's own SEPA/instant fee (HR retail often free for SCT, instant policies vary). [UNV]
- PIS destination account can still be the Monerium IBAN; the Monerium webhook will then fire on settlement.

## Comparison

| Option | HR IBAN? | Notification latency | Webhook? | Cost | Entity types | Source / status |
|---|---|---|---|---|---|---|
| Monerium IBAN (current) | No (non-HR; IS/IE/LT per snippets) | Seconds to minutes after SEPA credit (existing stack) | Yes | Incoming "zero fees" | Persons, legal entities | OFF+SEC |
| Revolut Business | No (LT) | Seconds | Yes (TransactionCreated) | Plan fees | Companies in eligible countries | OFF (API) + SEC (no HR IBAN) |
| Wise Business | No | Seconds | Yes | Account fee | Businesses | SEC |
| Paysera | No (LT) | Unknown | API exists, UNV | Free business acct | Businesses | SEC |
| Aircash | Probably (HR EMI) | Unknown | Unknown | Unknown | Personal only per T&C | OFF partial |
| Erste George Business / HR bank | Yes | Real-time in app; API push UNV | UNV (camt.054 on contract) | Bank tariff | Companies, associations | SEC/UNV |
| Enable Banking AIS on HR bank | Yes (donor-agnostic) | Up to ~6h background (4/day) | No (payments only) | Quote; free restricted own-account | Any TPP | OFF + SEC |
| Tink / Salt Edge / Yapily / TrueLayer | Yes (bank's own) | Same 4/day cap | Refresh-complete only | Enterprise quote | Enterprise | OFF/SEC |
| GoCardless BAD | Yes | Same cap | No | Enterprise only | Closed to new | SEC |
| Bank corporate camt.054 / H2H | Yes | Near real time (file/API) | Push file, UNV | Bank contract | Business clients | SEC/UNV |
| PIS via CorvusPay / Enable Banking | Pays to any IBAN | Payment-status callback | Yes (status) | Merchant fee 0 (Corvus), EB quote | Merchants | SEC / OFF |

## Recommendation
1. Keep Monerium as the source of truth; do not expect an HR IBAN from any EMI (all foreign EMIs give LT/IE/BE etc.). Check HR bank option separately.
2. HUB3 barcode can encode ANY IBAN: it works in Croatian mobile banks even for a non-HR IBAN (SEPA-reachable), so the HUB3 UX can ship now pointing at the Monerium IBAN. [UNV: confirm with a real test payment, including domestic-vs-SEPA fee/limits for donors]
3. If an HR IBAN is a hard requirement, open an HR business account (Erste George Business or PBZ/Zaba) and ask for camt.054 push / API. Else use Enable Banking AIS with ~6h polling, which kills "instant".
4. Instant UX alternative: PIS (CorvusPay by IBAN or Enable Banking PIS) with status callback, for the donors who want a pay-by-bank flow.
5. Open points: decode HNB xlsx for Monerium's service codes, ask Monerium support if HR IBAN is planned, ask Enable Banking about unattended frequency for HR banks.
