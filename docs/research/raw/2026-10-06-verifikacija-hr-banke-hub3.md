# Croatian bank rails for DOMOVINA donations: verification (2026-10-06)

Status tags: CONFIRMED / CORRECTED / UNVERIFIED. Tariff PDFs were downloaded and read directly (pdftotext) unless noted.

## Per-bank table

| Bank | HUB3 | EPC QR | Mobile SEPA out, EUR 1 to other HR bank | Cross-border SEPA (EUR, non-HR IBAN), mobile | Incoming fee, business account | Source + validity |
|---|---|---|---|---|---|---|
| ZABA | yes (UNVERIFIED officially) | UNVERIFIED (secondary source says yes) | 0.35 (m-zaba, B1.8.5.3; instant B1.8.6.3 also 0.35); 0.00 if "dobrotvorne svrhe" | 0.35 (B1.11.5.1, SHAR) | 0.16 national or cross-border EUR (retail "naplata"); account keeping 6.60/mo (business, not udruga-specific); internal 0.04 | zaba.hr/home/med/dok/9279/b19-izvadak-...-01.01.2026.pdf (valid 1.1.2026); business: zaba.hr/home/med/dok/5491/5491-naknade-poslovnim-subjektima-u-platnom-prometu-od-15.1.2026.pdf (15.1.2026). m-zaba itself 1.33/mo |
| PBZ | yes (UNVERIFIED officially) | UNVERIFIED | 0.33 (4.1.1.4.8); 0.00 to listed humanitarian orgs at PBZ | 0.33 (4.1.2.2.1, SHA, EU member state in EUR) | UNVERIFIED (business tariff not retrieved) | pbz.hr/document/termsConditions/documents/PBZ/valid/Naknade_FizickeOsobe/PBZ_naknade_u_poslovanju_s_gradjanima_01102026.pdf (valid 1.10.2026) |
| Erste (George) | yes (UNVERIFIED officially) | UNVERIFIED | 0.40 (01.03.01.06.02); to Erste clients 0.30; charity-list accounts 0.00 | 0.40 (01.03.01.12.12 / .10 "SEPA Kreditni transfer", SHA) | UNVERIFIED (business tariff not retrieved) | cdn.erstegroup.com/.../naknade-za-usluge/18022026-izvadak-iz-odluke-o-naknadama-za-usluge-u-poslovanju-s-gradanstvom-u-primjeni-od-152026.pdf (from 15.5.2026; erstebank.hr lists a 23.7.2026 list-of-charities annex) |
| OTP | yes (UNVERIFIED) | UNVERIFIED | 0.35 (25.35.20.6, OTPgo/OTPmini); 0.27 retail incoming | 0.35 (25.35.20.11) | 0.16 "evidentiranje priljeva" domestic EUR and cross-border EUR, incl. instant (non-consumer tariff 3.2.10, 1.2.1.1.1) | otpbanka.hr/sw/static/file/NaknadeOTPbankezatransakcijskeracuneuslugeplatnogprometaionlinebankarstvaOTPgo25.09.2026.pdf (valid 25.9.2026); .../Naknadezauslugeplatnogprometazanepotrosace_od25092026finPDF.pdf (25.9.2026). OTP "Start" business package 11.50/mo |
| RBA | yes (UNVERIFIED) | UNVERIFIED | 0.35 (F4.5.3.1.2.1); free/half for some packages | 0.35 (F4.5.4.1.1, SHA) | UNVERIFIED (business tariff not retrieved) | rba.hr/.../2026-01-10-NAKNADE-u-poslovanju-s-fizickim-osobama.pdf (valid 10.1.2026). Note: RBA tariff says the bank may exempt humanitarian accounts |
| HPB | yes (UNVERIFIED) | UNVERIFIED (secondary source says yes) | 0.35 for SEPA instant per hpb.hr page; official PDF not retrieved, so UNVERIFIED | UNVERIFIED | UNVERIFIED | hpb.hr/hr/sepa-instant-placanje-220/220 (undated web page) |
| Addiko | yes (UNVERIFIED) | UNVERIFIED | 0.30 on-line (row 36 regular, row 41 instant); mobile app is a channel of on-line banking | 0.30 on-line (row 53 "prekogranični", row 57 instant to other bank) | UNVERIFIED | addiko.hr/static/uploads/Izvadak-iz-Odluke-o-naknadama-...-potrosacima-primjena-1.1.2026.pdf (v1/2026, from 1.1.2026) |
| Revolut | HUB3: UNVERIFIED (see Q1) | yes, scans EPC QR | n/a | n/a | n/a | secondary sources only |
| KEKS Pay | scans its own QR | n/a | free for donors (secondary) | n/a | recipient "Primatelj donacije" | see Q6 |

## Q1. HUB3 vs EPC QR per bank app

- Owner prior "all Croatian apps scan HUB3": UNVERIFIED by an official source, but plausible. HUB spec (Prilog A, HUB-3 format v6) defines the barcode for the HUB 3A payment slip. No bank publishes an app-by-app matrix. mojauplatnica.com.hr (commercial HUB3 generator) lists PBZ, ZABA, Erste, RBA, OTP, HPB, Addiko as supporting HUB3. That is a blog, not official.
- Owner prior "Croatian banks do NOT support EPC QR": **DISPUTED / UNVERIFIED**. The same blog (mojauplatnica.com.hr "HUB3 vs SEPA QR") states that "all major Croatian banks in their m-banking apps support both formats" and that scanning SEPA QR puts the reference into the description field. Another search snippet claims HPB, OTP, Erste support EPC. I found no official bank, HUB or HNB document confirming or denying it. Do not state "no Croatian bank scans EPC" as fact; test on real apps (m-zaba, PBZ, George, RBA on:Mobile, OTPgo, HPB, Addiko Mobile) before publishing any claim.
- HUB/HNB plan to support EPC QR: UNVERIFIED, no official statement found.
- Revolut scans EPC QR: CONFIRMED by multiple secondary sources (also your own pay.domovina.ai README says Revolut and Wise scan EPC). Revolut scanning HUB3 PDF417 directly: UNVERIFIED; a GitHub tool (TheOfficer2303/hub3-epc) exists precisely to convert HUB3 to EPC QR for Revolut, which suggests Revolut does not scan HUB3.
- KEKS Pay scans: its own QR codes (Kekstag, merchant and donation QR). HUB3: UNVERIFIED.

## Q2. HUB3 with non-Croatian IBAN

Source: HUB, "UPUTA o upotrebi PDF417 2D bar koda ... (obrazac HUB3A), Prilog A, FORMAT ZAPISA 2D barkoda prema HUB-3 standardu, VERZIJA 6", https://hub.hr/sites/default/files/inline-files/2DBK_EUR_Uputa_0.pdf (applies to slips printed from 1 Jan 2023; EUR).

- Field 10, "Broj računa primatelja (IBAN)", max length **21**.
- Text: "Hrvatska konstrukcija IBAN transakcijskih računa sadrži 21 znak i to: HR - 2 slova oznake zemlje ... Kontrolni broj ... Broj banke - 7 znamenaka ... Broj računa - 10 znamenaka". Example HR1210010051863000160.
- Verdict: the spec defines only the Croatian IBAN construction and sizes the field at 21. **CORRECTED/important:** it neither explicitly allows nor forbids foreign IBANs, but any IBAN longer than 21 characters does not fit and "mora se skratiti" (text longer than the field must be truncated). Lengths: LT 20 (fits), DE 22, IE 22, IS 26 (do not fit). So HUB3 with a Monerium IS-style IBAN (26) is outside the spec. Whether any app accepts a 20-char LT IBAN: UNVERIFIED, test it. Treat the 21-char limit as the key risk.
- Other limits (same doc): header "HRVHUB30" (8 chars); currency EUR (3); amount 15 digits in cents, right-aligned, zero-padded (123,55 EUR -> 000000000012355); payer name 30, payer street 27, payer place 27; recipient name 25, address 25, place 27; model 4 ("HR00", "HR99"; prefix HR plus 2 digits); poziv na broj 22; šifra namjene 4 (ISO 20022, e.g. COST); opis plaćanja **35 chars** (spec allows 4x35 on the slip but only 35 in the barcode); total 273 chars. UTF-8, fields separated by LF, ECL 4, binary mode. Allowed characters: digits, Croatian letters plus Q W X Y, space, , . : - + ? ' / ( ). Č,Ć,Đ,Š,Ž take 2 bytes each (length counted in characters, not bytes).
- Fee when a Croatian app pays a foreign IBAN: it is a cross-border SEPA credit transfer, priced per the table (0.30 to 0.40 on-line/mobile at all banks checked). CONFIRMED from tariffs (cross-border EUR in SEPA states is priced as the domestic-other-bank rate or the same band).

## Q3. Outgoing mobile fees for a EUR 1 transfer (private person)

All CONFIRMED from the bank tariff PDFs (see table). Summary: Addiko 0.30, PBZ 0.33, RBA 0.35, ZABA 0.35, OTP 0.35, HPB 0.35 (web page only), Erste 0.40.
- Cross-border SEPA in EUR: **same price as domestic to another bank** at ZABA, PBZ, RBA, OTP, Erste (SEPA SHA), Addiko. CONFIRMED. Non-EUR cross-border is much higher (3.90 to 5.70).
- PBZ 0.33 other-bank and 0.00 to humanitarian org at PBZ: CONFIRMED (4.1.1.4.8, 4.1.1.4.7 *12; valid 1.10.2026).
- Erste 0.40: CONFIRMED (01.03.01.06.02, in force from 15.5.2026). Erste to own clients 0.30.
- George mobile monthly fee: CONFIRMED, 1.50 EUR/month from 1.4.2026 (pensioners 0.15; free for minors, 18-25, Gold/Gold Plus; web banking free). Source: erstebank.hr notice 2026/1/2 and the tariff PDF line "Korištenje usluge mobilnog bankarstva George 1,50 EUR mjesečno".
- Other monthly mobile fees found: m-zaba 1.33/mo (many packages exempt), RBA mobile 1.46/mo (F4.3.5.2), HPB online 1.59/mo (2024 extract), Addiko Mobile free.
- IMPORTANT (new finding): ZABA, PBZ, RBA and Erste exempt or may exempt payments "za prikupljanje sredstava u dobrotvorne svrhe" or to listed humanitarian organisations (ZABA B1.8.x notes b and "dobrotvorne"; Erste: "Uplate i kreditni transferi ... u korist računa pravnih osoba i udruga za pomoć ... su bez naknade", list is a published annex; PBZ list/contract; RBA "može donijeti odluku"). That requires the recipient account to be on the bank's list (a contract with the bank). A media project probably does not qualify; UNVERIFIED how to get on the lists.
- Same-bank transfers are cheaper (ZABA business-account recipient 0.25, RBA 0.27, PBZ 0.20, Erste 0.30); that does not help a non-HR IBAN.

## Q4. Recipient side

- ZABA business tariff (15.1.2026): "Naplata - nacionalna u valuti EUR 0,16 po nalogu"; "prekogranična u valuti EUR 0,16"; internal 0.04; account keeping "Vođenje računa 6,60" (listed on first page; check whether this is the right package for a udruga). CONFIRMED.
- OTP non-consumer tariff (25.9.2026): inflow of EUR domestic/cross-border "evidentiranje priljeva" 0.16, instant 0.16. Business packages OTP Start 11.50/mo, Dobrodošlice 8.00/mo, Knjigovođa 6.50-7.50/mo. CONFIRMED.
- PBZ, Erste, RBA, HPB, Addiko business incoming fees and udruga monthly fee: UNVERIFIED (not retrieved within budget). Typical order: about EUR 0.16 per incoming credit; for several hundred EUR 1 donations that is 16 percent of each donation, so a non-Monerium bank route is unattractive for micro-donations. (Inference from the numbers above.)
- Individual donors pay the sender-side fee (0.30-0.40) on a EUR 1 gift, so up to 40 percent of the gift is fees before the recipient fee. Exception: charity-list exemptions above and KEKS (see Q6).

## Q5. Instant payments regulation (EU 2024/886)

CONFIRMED by FINA, HRT, Erste: banks in Croatia must receive SCT Inst from 9 Jan 2025 and send from 9 Oct 2025; max 10 seconds, 24/7/365; price parity (Erste: "Naknada za plaćanja je ista sa i bez opcije Instant plaćanja"; the tariffs above price "kreditni transfer i instant kreditni transfer" as one line); Verification of Payee mandatory for all credit transfers (outcomes: match, close match, no match, unable to verify), free of charge. The ZABA/Addiko/RBA tariffs list instant as a separate line at the same price. Erste says non-euro EU states follow by mid-2027. Relevance for you: VoP compares the payee name to the IBAN, so the recipient name in the donation instructions must equal the Monerium account holder name exactly; a mismatch shows a warning to donors.
- UNVERIFIED: that every individual bank is live (HPB page says 0.35 and 100,000 EUR limit; others mention Instant option). HNB page not read in detail.

## Q6. KEKS Pay as recipient

- Terms (Opći uvjeti korištenja Usluge KEKS Pay plaćanja, in force 16.6.2025; a 2026 version "od 1.9.2026" is linked on erstebank.hr): defines "Primatelj donacije" as "bilo koja osoba koja je registrirana u aplikaciji KEKS Pay kao primatelj donacija". Donations reach recipients "dostupni u aplikaciji, podržani preko KEKS Pay poveznica, kodova za plaćanje ili drugih tehnologija". Fees: "objavljene u Odluci o naknadama Erste banke". "Račun/IBAN" in the terms means a personal account at a bank in the Republic of Croatia.
- Secondary: many udruge use KEKS Pay donation QR/links (Crveni nosovi, HRCIN, Prijatelji životinja, Ana Rukavina), donors pay no fee. A legal entity/udruga as recipient: CONFIRMED in practice (several udruge); a media d.o.o. or obrt: UNVERIFIED. The onboarding process, recipient fees, and requirement of a Croatian IBAN: UNVERIFIED. The donor discovers you via QR code or link only (no public directory confirmed). Because it needs a Croatian IBAN, it cannot take the Monerium (non-HR) IBAN.

## Q7. Other local options

UNVERIFIED (only a general search was possible): Aircash is a HNB-licensed EMI (since 2019), pay bills and AircashPay at merchants; no evidence found of a donation feature or merchant fee for donations. Mobile operator billing beyond 060 and HR request-to-pay ("Plati"): not found. Leave out of the landing page until confirmed with the providers.

## Claim register

| Claim | Status |
|---|---|
| All HR apps scan HUB3 | UNVERIFIED (plausible; blog-level only) |
| HR banks do not scan EPC QR | UNVERIFIED / DISPUTED by one blog |
| Revolut scans EPC QR | CONFIRMED (secondary) |
| Revolut scans HUB3 | UNVERIFIED, probably not |
| HUB3 IBAN field 21 chars, Croatian construction | CONFIRMED (spec v6) |
| Foreign IBAN fits HUB3 | CORRECTED: only if 21 chars or shorter (LT 20 only); IS/DE/IE truncated |
| Description 35 chars in barcode | CONFIRMED |
| PBZ 0.33 / 0.00 humanitarian | CONFIRMED (1.10.2026) |
| Erste 0.40 | CONFIRMED (15.5.2026) |
| George 1.50/mo from April 2026 | CONFIRMED |
| Cross-border EUR SEPA priced like domestic | CONFIRMED for 6 banks checked |
| Business incoming ~0.16 (ZABA, OTP) | CONFIRMED for those two only |
| Instant parity, VoP, 9 Oct 2025 | CONFIRMED |
| KEKS Pay for udruge | PARTLY CONFIRMED; legal-entity/media eligibility UNVERIFIED |
