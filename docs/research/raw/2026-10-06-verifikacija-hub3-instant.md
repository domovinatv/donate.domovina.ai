# HUB3 scan -> SEPA Instant to EE IBAN: hypothesis check (2026-10-06)

Caveat up front: no public bank document I could reach says what a HUB3 scan does to the instant flag or to a foreign IBAN. H1-H3 are largely UNVERIFIED by official sources and need in-app tests (section 6). Where evidence is indirect, it is labelled.

## 1. Clearing infrastructure (official)

- EuroNKS (regular SCT, FINA-run, since 2016): "processes national and cross-border interbank payment transactions of credit transfers in euros (SEPA credit transfers)"; settled in "TARGET2-HR". Accepts files 7:00-14:30 cross-border, 7:00-17:00 domestic. So regular domestic AND regular cross-border SEPA both go via EuroNKS (not a separate "domestic only" path). HNB: https://www.hnb.hr/en/-/obavijest-hrvatske-narodne-banke-o-radu-nove-platforme-nks-i-radu-novog-platnog-sustava-euronks (page predates the euro; check current T2 naming; STEP2 not mentioned).
- EuroNKSInst (separate national instant system, FINA-run, SCT Inst compliant): HNB: "full implementation of SCT Inst was achieved by the EuroNCSInst system and its participants accessing TIPS on 24 June 2023 ... full reachability and interoperability ... through TIPS DCA ... settlement of cross-border instant payments in euro". https://www.hnb.hr/en/core-functions/payment-system/payment-systems/euroncsinst ; FINA: https://www.fina.hr/eng/financial-services-and-payment-systems/payment-systems/euronksinst
- Estonia/LHV: LHV Pank is a direct RT1 (EBA) participant (https://www.ebaclearing.eu/services-instant-payments/rt1-sct-inst/participants/). LHV docs: EUR payments "processed as SCT Inst if the beneficiary bank supports instant payments" (https://docs.lhv.com/home/connect/services/payments/payment-types-and-scheme-selection). TIPS<->RT1 interoperability (EU-wide reachability obligation) is why HR->EE instant is expected to work; I did not find a document naming the HR-bank-to-LHV path explicitly. UNVERIFIED for this exact pair; test with a EUR 1 payment.
- Instant obligation: receive from 9 Jan 2025, send from 9 Oct 2025, national and cross-border, same fee as regular (FINA https://www.fina.hr/novosti/instant-placanja-od-9.-listopada-nova-stvarnost-u-hrvatskoj-i-eu ; HUB https://hub.hr/hr/instant-placanja-dostupna-svima-brze-i-sigurnije-uz-uslugu-provjere-primatelja-placanja).

## 2. Instant default vs opt-in, per bank

HUB (quoted): "Prilikom zadavanja naloga korisnici ce moci odabrati zele li instant ili redovno placanje" -> user choice is the industry framing; no default stated. Novi list, mer-banking, Bug: no default stated.

## 3. HUB3 scan: payment type

Only indirect evidence:
- Vendor blog (MojaUplatnica, NOT official, treat as anecdotal): HUB3 "processed as a standard domestic invoice with automatic population of model and reference numbers"; SEPA QR "processed as a SEPA transfer". https://www.mojauplatnica.com.hr/novosti/kako-platiti-uplatnicu-mobitelom-hub3-vs-sepa . Same blog says all big HR apps support both HUB3 and SEPA QR - claim uncorroborated by any bank page I found.
- HPB manual: scanning "Slikaj i plati" fills the order; "Nakon sto se podaci registriraju, potrebno je provjeriti ispravnost" - the scan lands in the normal order form (where redovno/instant is selectable). HPB order types: "nacionalni nalog je nalog u kojem je IBAN primatelja u HPB ili u nekoj drugoj banci unutar RH; prekogranicni nalog je nalog u kojem je banka primatelja na SEPA podrucju"; national needs model/poziv na broj, cross-border needs "jedinstveni identifikator i referenca"; IBAN format documented as HR-only. https://www.hpb.hr/UserDocsImages/racuni-i-placanja/Korisni%C4%8Dka%20uputa%20mHPB%2027062025.pdf
- RBA mojaRBA guide: FotoNalog "Podrzani su 2D barkod i QR kod"; Instant "moze se koristiti za sva nacionalna i prekogranicna odlazna placanja u eurima". https://www.rba.hr/content/dam/rbi/retail/eu/hr/dokumentacija/gradani/upute/korisnicka-uputa-za-mojarba-mobilno-bankarstvo/2025-11-07-korisnicka-uputa-mojaRBA-mobilno-bankarstvo.pdf.coredownload.inline.pdf
- Zaba m-foto plati reads "2D code, QR code or data from an invoice" (business page) https://www.zaba.hr/home/m-foto-plati-poduzetnici

## 4. Per-bank table

| Bank | Instant default / opt-in | HUB3 scan -> order type | Foreign IBAN via HUB3 | Source |
|---|---|---|---|---|
| ZABA (m-zaba) | Opt-in: "oznacavanjem opcije 'instant'" in existing order form; per-order/daily limit; instant also to EU/EEA and SEPA banks | Scan = "m-foto plati", order "automatski popunjen"; type not documented | UNVERIFIED | https://www.zaba.hr/home/instant-placanja |
| PBZ | Opt-in checkbox on order screen, "aktivna ako uneseni elementi naloga zadovoljavaju uvjete"; NOT auto-ticked when copying from Primatelji/predlosci or Kopiraj (business guide, Oct 2025; retail app likely same, unverified); cap EUR 13,272.28 in that guide; instant available in both "Placanje" and "Placanje u stranoj valuti" submenus | "Skeniraj i plati" fills order; type not documented; by analogy to the Kopiraj rule, scan probably does not auto-tick instant (inference) | UNVERIFIED | https://www.pbz.hr/document/documents/PBZ/SB_SME_online/PBZ_digitalno-bankarstvo_Korisnicka-uputa_poslovni_02102025.pdf |
| Erste (George) | Opt-in: "putem George mozete oznaciti da se nalog provede kao SEPA Instant"; can be enabled/disabled per order; standing orders can be set instant | "Slikaj i plati": scan creates "novi nalog automatski"; type not documented | UNVERIFIED | https://www.erstebank.hr/hr/pomoc/help-center/racuni-i-kartice/placanja/na-koji-nacin-mogu-odrediti-kako-zelim-platiti-kao-do-sad-ili-kao-instant-placanje |
| OTP (OTPgo) | Instant via OTPgo, domestic and international orders; recipients in eurozone/SCTInst banks; selection mechanics not retrieved (page 403 to fetch; seen only in search snippet) | UNVERIFIED | UNVERIFIED | https://www.otpbanka.hr/gradani/instant-placanje-i-vop |
| RBA (mojaRBA) | Instant for "sva nacionalna i prekogranicna odlazna placanja u eurima"; initial instant limit EUR 5,000/day; SME page says "The standard option is OPT IN" - ambiguous (appears to refer to the instant service/limit, not per-order default) | FotoNalog: 2D barcode and QR | UNVERIFIED | RBA PDF above; https://www.rba.hr/en/sme/products-and-services/daily-banking/instant-payment.html |
| HPB (mHPB) | Hybrid: manual "redovno ili instant" choice (slika 22) in order form; in mPlati/PIR flow "Ako je banka primatelja u instant shemi, nalog ce biti proveden kao instant" (auto); instant EUR only, max EUR 100,000 | "Slikaj i plati" fills order for review | Order-type definition: SEPA-area recipient = "prekogranicni" with different mandatory fields (unique identifier/reference instead of model/poziv); IBAN field documented HR-format only | HPB PDF above |
| Addiko | Opt-in: in "Domestic payment order", select the "Instant placanje" option after filling data (search-result summary of Addiko page; old text mentions HRK limits, so possibly stale) | UNVERIFIED | UNVERIFIED | https://www.addiko.hr (instant page via search) |

## 5. Verdicts

H1 (HUB3 works only with HR IBANs; apps reject foreign IBANs on scan): UNVERIFIED, leaning PARTLY. No official source says foreign IBANs are rejected. Indirect: HUB3 spec/guides describe HR IBAN only; HPB's national form documents HR IBAN format and uses different mandatory fields for cross-border orders; a vendor blog says HUB3 "works best domestically" (anecdotal). The 21-char field fits an EE IBAN, but app-side validation (HR + 19 digits, model/poziv checks) is unknown. Needs test.

H2 (HUB3 scan creates a domestic regular order via NKS, not instant): PARTLY. Regular domestic orders do go via EuroNKS (HNB), and a scan fills a normal order form where instant is a separate choice (HPB, Erste, ZABA, PBZ), so a scan does not itself create an instant order. But "domestic" is only true if the IBAN is HR; a SEPA/foreign IBAN may be reclassified as cross-border (HPB definition). Regular cross-border SEPA also clears through EuroNKS, so either way it is not instant unless ticked.

H3 (app will not prefill instant after scan; donor must switch manually, if possible at all): PARTLY / probable but not directly confirmed. Every bank page found describes instant as a per-order opt-in selection (ZABA, PBZ, Erste, Addiko, HPB; HUB: "mogu odabrati"). PBZ states instant is not auto-ticked for copied/template orders. Switching is possible in the form, and available for cross-border euro orders (RBA, ZABA, HPB). Counter-case: HPB auto-instant in mPlati/PIR flow when the recipient bank is in the scheme; unknown whether HPB's scan flow does the same. No bank doc says "scan keeps/removes instant".

## 6. Implication for the site

HUB3 cannot carry an instant flag; instant for the donor depends on app behaviour. Safest copy: tell donors to tick "Instant" in the order, show EPC QR as an alternative (see below), and keep IBAN-copy as fallback. Don't promise "instant" for the scan alone.

EPC QR / SRTP: no official HR bank page found confirming EPC QR scanning. SEO pages (hub3-epc GitHub, Excelly) claim HPB/OTP/Erste/ZABA/RBA support it - unverified, treat as anecdotal. RBA and ZABA guides say QR is scanned; format unstated. HUB "SIP" page is just SCT Inst, not request-to-pay. No SRTP in HR retail banking found. No deep-link/URL-scheme for HR bank apps found.

## 7. Manual tests (per app; use EUR 1, donor account with instant enabled, EE IBAN, also an HR control)

For each of ZABA, PBZ, George, OTPgo, mojaRBA, mHPB, Addiko Mobile:
1. Generate HUB3 PDF417 with EE IBAN (EUR 1) and an identical one with an HR IBAN (control). Scan via m-foto plati / Skeniraj i plati / Slikaj i plati / FotoNalog / Slikaj i plati / Skeniraj.
2. Screen after scan: does it open Placanje (national) vs Placanje u stranoj valuti / Inozemno / SEPA? Is the IBAN accepted, red-flagged, truncated, or replaced? Are Model/Poziv na broj fields required (HR99 auto-fill)? Is there a "Instant" toggle visible, and is it pre-ticked, greyed out, or hidden?
3. Tick instant manually; confirm summary screen says Instant and fee equal; note VoP (provjera primatelja) result for the name/IBAN pair (EE VoP may be unsupported or give "no match" warning - important UX).
4. Execute, time arrival at LHV/Monerium (expect under 10 s, check status "Izvrseno" vs "U obradi"/next cycle in order list). Check instant limits (RBA default EUR 5,000/day, ZABA/PBZ per-order).
5. Repeat after Primatelji/predlozak path and Kopiraj (PBZ: instant not auto-ticked).
6. Also test an EPC QR (EPC069-12) of the same data in each app, and the same with the "Payment of EUR to foreign IBAN" path typed manually.
7. Record screenshots; note app version and OS.
