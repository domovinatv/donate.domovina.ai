# HR IBAN + near-real-time incoming-credit notification for a business (research 2026-10-06)

Conclusion: no Croatian bank publicly documents a self-service webhook for incoming credits to a d.o.o./obrt/udruga.
But there ARE near-real-time channels that can be turned into a trigger:
1. RBA mDIREKT SMS per inflow, real time (OFFICIAL, in RBA T&C). SMS -> forwarder -> HTTP.
2. PBZCOM-SMS (batch every ~2.5 h, or per-criterion at 0.04 EUR/msg) (OFFICIAL/secondary).
3. Erste "ErsteConnect" Premium API, reportedly with webhooks, Croatia listed (UNVERIFIED, must ask).
4. Zagrebacka banka camt.052 intraday via SWIFTNet/EuropeanGate (corporate; UniCredit slide, OFFICIAL-ish, 2023).

## Table

| Candidate | HR IBAN | Mechanism | Latency | Who / min size | Cost | Source / status |
|---|---|---|---|---|---|---|
| RBA (Raiffeisenbank Austria HR) mDIREKT | yes | SMS to a mobile number per credited inflow ("tijekom dana - u realnom vremenu, obavijest o provedenim priljevima"). Content: new balance/amount (payer name/poziv na broj NOT confirmed). | "real time", same day | business entities with current/multicurrency/giro account; contracted at a branch | not found | OFFICIAL: RBA Opci uvjeti RBA DIREKT za poslovne subjekte (2026-03-08) cl. 42 https://www.rba.hr/content/dam/rbi/retail/eu/hr/dokumentacija/poslovni-subjekti/opci-uvjeti-za-koristenje-rba-direkt-servisa-za-poslovne-subjekte/2026-03-08-Opci_uvjeti_za_koristenje_RBA_DIREKT_servisa_za_poslovne_subjekte.pdf.coredownload.inline.pdf ; secondary: rbainvest sms-usluge page. Obrt/udruga eligibility = ask. |
| PBZ PBZCOM-SMS / Info | yes | SMS: fixed start/end of day, OR "prema prometu" (every 2.5 h if there was activity), OR "posebni kriterij" 0.04 EUR/msg. PBZ digital banking app also has push "Notifications" about transactions (business scope unclear). | 2.5 h (turnover mode); custom criterion mode unclear, maybe near-real-time | PBZ business clients; apply at PBZ branch/Sinergo desk | 0.93 / 1.86 / 3.32 EUR per phone per month; 0.04 EUR/msg | OFFICIAL fee list (PBZ Naknade platni promet 06.05.2024) + corp.pbz.hr PBZCOM-SMS (via search snippet, page not fetchable). |
| Erste & Steiermarkische HR - Erste SMS za poslovne subjekte | yes | SMS: balance up to 3/day; daily turnover up to 3/day; "obavijest o stanju na racunu nakon pojedinacne uplate i/ili isplate vece od iznosa definiranog u Zahtjevu" | per-transaction above a threshold (set threshold low, e.g. 0.01 -> practically every credit); latency not stated | any business client | not found | OFFICIAL: Opci uvjeti Erste SMS usluge za PS https://www.erstebank.hr/content/dam/hr/ebc/www_erstebank_hr/poslovni/downloads/e-bankarstvo/OpciUvjetiErsteSMSUslugeZaPoslovneSubjekte.pdf cl. 4.1. Threshold-minimum not verified. |
| Erste ErsteConnect (Premium API) | yes | REST API: balances, transactions, SEPA(Inst) payment initiation; "webhook notifications" and "real-time" per portal summary; aimed at "corporate customers of Erste Group"; Croatia in country list per portal summary | possibly seconds (unverified) | corporate clients of Erste Group; size/eligibility unknown; onboarding + "transparent pricing" page exists | unknown | UNVERIFIED. developers.erstegroup.com/ersteconnect returns 500 to curl and WebFetch summaries were vague; erstegroup.com/en/erste-open-banking confirms product, mentions "real-time access", no webhook detail. Tatra banka SK page says Premium API has webhooks (could not fetch, 403). MUST ASK Erste HR. |
| Zagrebacka banka (UniCredit) | yes | Corporate cash management: camt.052 intraday, MT940/camt.053 EOD, pain.001/002/008; connectivity SWIFTNet, EuropeanGate, e-zaba/m-zaba. Instant payments in EUR supported. H2H "BusinessNet Connect" listed only for other UC countries (Czech), NOT for Croatia in the slide. | intraday (frequency undocumented) | multinational/corporate; SWIFT connection needed | unknown | OFFICIAL-ish: UniCredit Payments & CM Country Slides, July 2023 https://my.arneis.com/wp-content/uploads/UC_Payments-CM-Country-Slides_Short-July-2023-1.pdf ; SWIFT bank readiness page (403). Not realistic for a small association. Ask for e-zaba/m-zaba push on inflows (m-zaba business push confirmed only for card use). |
| OTP banka HR | yes | SMS info service "automatski SMS pri promjeni na racunu" (shown for private clients: salary, transfers etc.); business support podrskapravneosobe@otpbanka.hr | "as soon as possible" | ask if available for pravne osobe | ? | SECONDARY: otpbanka.hr/upute/sms-info. Business applicability unverified. |
| HPB | yes | SMS/e-mail service: sent business days after 07:00 (batch); camt.053 export only on request via relationship manager; camt.052/054 documented in "Uputa za primjenu XML camt poruka" | batch | individuals per page text | ? | OFFICIAL: hpb.hr/hr/sms-e-mail-usluga/7157 ; camt PDF https://www.hpb.hr/UserDocsImages/poslovni-korisnici/racuni-i-placanja/placanja/Uputa-za-primjenu-i-implementaciju-XML-camt-poruka.pdf . Not near-real-time. Ask whether camt.054 is delivered for business. |
| Addiko, Agram, KentBank, Podravska, Partner, IKB, Imex, Samoborska, BKS | yes | Only PSD2 XS2A found (Addiko dev portal oapideveloper.addiko.hr); Addiko eBank exports statements. No webhook/H2H evidence | - | - | - | NOT PUBLICLY DOCUMENTED. Not found in 1 search each; "not found" != "does not exist". |
| PSD2 AIS via aggregator (Enable Banking, Salt Edge, merBanking/MeR TPP) | yes (bank's) | Polling PSD2 API with consent. When PSU absent, RTS limits to max 4 refreshes/day. merBanking spec: "najvise cetiri puta dnevno", camt.053 generated daily at 04:00, JSON getTransactions with booked+pending, NO webhook endpoint in spec v0.10.1. | hours (unattended); real-time only if user session present | any bank client; merBanking via ERP vendors | merBanking price list separate | OFFICIAL spec http://wsdokumentacija.spi.hr/pages/MER_TPP/merBanking-API-v0.10.1.pdf . merBanking blog claims data will refresh "within ten seconds" after new legislation, but that refers to SEPA instant payments execution, not feed latency (my reading; vague). Enable Banking covers Zaba, PBZ, Erste, RBA (not OTP) https://enablebanking.com/docs/markets/hr/ . Business-account support in Enable Banking HR page: not stated. |
| Revolut Business | NO - gets LT IBAN; local IBANs only FR, IE, LT, NL, RO, ES, UK | - | - | - | - | OFFICIAL help.revolut.com local IBANs page (via search); no HR local IBAN announced. RRiF opinion exists on whether Revolut UAB account can be obrt business account (not read). |
| N26, bunq, Wise | no HR IBAN known | - | - | - | - | Not researched deeply; no evidence of HR IBAN (assume no). |
| Aircash (IEN licensed by HNB 2019) | no own HR IBAN found | e-wallet; withdraws to HR IBAN; merchant payments | - | - | - | SECONDARY. No evidence of business IBAN-issuing. |
| Monri, Paysafe, Fina, HP "Posta Pay" | not found | - | - | - | - | Not verified; no evidence of HR IBAN issuing. |
| New HR neobank / digital bank 2025-26 | none found | - | - | - | - | Search returned only HPB absorbing Nova hrvatska banka (2023) and Croatia banka -> HPB (Mar 2026). Freenance 2026 list: only traditional banks' digital arms. |
| Pantheon / Minimax / e-racuni feeds | n/a | via merBanking (above) or file import | daily ("izvod od prethodnog dana") | - | - | Mechanism = PSD2 AIS aggregation, not real time. |
| Instant (SCT Inst) credit notification | n/a | EU IPR: banks must notify payer of exec/reject; receiving since 2025-01-09, sending since 2025-10-09. Nothing found on payee-side push API for business | - | - | - | HNB (Oct 2025): 8 of 20 banks sending instant (Addiko, Agram, BKS, HPB, Istra, Partner, PBZ, Zaba) via lidermedia/financije.hr. No bank found offering payee-side instant-credit webhook. |

## Does not exist vs not documented
- Does NOT exist (publicly): any HR bank self-service "webhook for incoming credits" product page; HR IBAN from Revolut/neobanks for businesses.
- NOT PUBLICLY DOCUMENTED (ask): ErsteConnect webhooks in HR; Zaba camt.052 frequency/H2H for SMEs; PBZ per-credit SMS latency in "posebni kriterij" mode; OTP/Addiko/KentBank/HPB business notifications and any H2H.

## Ranked shortlist: what to ask whom

1. Raiffeisenbank Austria HR. Verified in T&C: real-time SMS per inflow for business accounts. Ask:
   "Mozemo li kao [d.o.o./obrt/udruga] ugovoriti mDIREKT SMS obavijest o priljevu u realnom vremenu za sve priljeve (bez minimalnog iznosa)? Koji su podaci u SMS-u (iznos, platitelj, IBAN platitelja, poziv na broj, opis)? Je li SMS dostavljen unutar nekoliko sekundi i za SEPA Instant priljeve? Je li moguca i e-mail ili push varijanta, ili API/H2H za izvode (camt.052/054)? Naknada?"
   Caveat: SMS content may lack poziv na broj; test with a small donation.
2. Erste HR. Ask:
   "Nudi li Erste & Steiermarkische banka d.d. poslovnim klijentima ErsteConnect / Premium API s webhook obavijestima za priljeve na racun u Hrvatskoj? Tko se moze prijaviti (d.o.o., obrt, udruga), minimalni uvjeti, cijena, latencija, sandbox? Ako ne: moze li se Erste SMS za poslovne subjekte postaviti na 'svaka uplata' (prag 0,01 EUR) i koji su sadrzaji poruke?"
3. PBZ. Ask:
   "Moze li se PBZCOM-SMS 'prema posebnom kriteriju' (0,04 EUR/poruka) postaviti na svaki priljev, s kojom latencijom, i s kojim podacima (platitelj, poziv na broj)? Nudite li API / H2H (camt.052/054) ili push obavijest za priljeve u PBZ digitalnom bankarstvu za poslovne subjekte?"
4. Zagrebacka banka. Ask:
   "Nudite li malim poslovnim subjektima/udrugama intraday izvode (camt.052) ili camt.054 notifikacije za priljeve preko H2H/SFTP/API, ili push u m-zaba poslovno za priljeve? Minimalni uvjeti i cijena?" Likely answer: SWIFT/corporate only.
5. OTP / HPB / Addiko. Ask whether the SMS info (OTP) or camt.054 (HPB) exists for the entity type and how fast. Low expected value.

## Fallback design if only SMS/e-mail exists
SMS -> Android forwarder / Twilio-style number -> Cloudflare Worker (Email Routing if e-mail). Treat as hint only: reconcile via camt.053/PSD2 daily statement (authoritative; SMS has no legal force per Erste T&C cl. 4.3). Use poziv na broj to match donations; test content with 1 EUR transfer before committing.

## Caveats
- Not checked: Erste/Zaba/PBZ public developer portals beyond search (portals 500/403 for scripts).
- ~38 tool calls used; OTP, KentBank, Agram, Imex, Podravska, Samoborska got no dedicated page-level check.
- Statement "RBA SMS carries payer/poziv na broj" is NOT verified.
