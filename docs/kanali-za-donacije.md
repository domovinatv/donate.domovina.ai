# Kanali za donacije: što aktivirati u Hrvatskoj

Stanje 6.10.2026. Izvor svih brojki i statusa: `research/2026-10-06-donacijske-platforme.md`
(+ `research/raw/`). „Neto" = koliko primatelju ostane od donacije od 1 € EEA karticom
ili bankom. ✅ = potvrđeno sa službene stranice / cjenika; ostalo je sekundarno.

**Otvoreno pitanje koje mijenja pola liste: pravni oblik primatelja** (udruga / obrt /
d.o.o.). Udruga: Revolut Business otpada, KEKS Pay radi. d.o.o./obrt: KEKS Pay i SumUp
treba provjeriti.

## Tier 1: aktivirati prvo (najbolji neto za male iznose)

| # | Kanal | Neto od 1 € | Zašto | Uvjet / rizik |
|---|---|---|---|---|
| 1 | HUB3 (PDF417) na HR IBAN + `bank-push-gateway` | 1,00 € ✅ | skenira ga svaka HR bankovna aplikacija; donator banci 0,30–0,40 € ✅ | gateway u izradi (faza 0); instant je izbor po nalogu — uputa „uključi Instant" |
| 2 | MPT rail (Monerium EURe, `domovina.ai/c/domovina-tv/doniraj`) | 1,00 € iz novčanika | postoji; javno vidljivo tko je i kad uplatio; trenutno | bankovna naknada pri punjenju novčanika (jednom); IBAN je EE |
| 3 | SumUp payment link (kartica, Apple/Google Pay) | 0,975 € ✅ (2,5 % flat) | najbolja kartica za male iznose | isplati se do 25 €, iznad je Stripe jeftiniji; pravni oblici neprovjereni |
| 4 | PayPal, micropayment tarifa | 0,90 € ✅ (5 % + 0,05 €) | za donatore koji žele PayPal | tarifa za cijeli račun; isplati se do 18,75 € |

## Tier 2: doseg (publika je već tamo, skuplje)

| Kanal | Neto od 1 € | Napomena |
|---|---|---|
| YouTube Super Thanks / članstva | 0,70 € ✅ (iOS ~0,49 €) | fan funding od 500 pretplatnika |
| KEKS Pay (Erste) | 1,00 € | udruge ✅ u praksi; traži HR IBAN; pitati Erste za naš pravni oblik |
| Liberapay | ≈0,735 € | 0 % platforme ✅, ponavljajuće donacije, HR podržan ✅ |
| Ko-fi | ≈0,735 € | 0 % na jednokratne ✅, izravno na naš Stripe/PayPal |
| Patreon | 10 % ✅ + obrada | samo za ljude koji već žive na Patreonu |
| Apple Podcasts pretplate | 0,70 € 1. god., 0,85 € kasnije ✅ | tek uz sadržaj samo za pretplatnike |
| Facebook Stars | ~0,70 € | HR na službenom popisu |

## Tier 3: niša / kasnije

Twitch (0,50 €), X pretplate, Telegram Stars (~0,65 €, isplata u TON), Lightning
(Alby), Steady (DE, MoR), Ulule (crowdfunding kampanje), WhyDonate (0,731 €),
Stripe Payment Link (0,735 € ✅ — tek uz više donacija iznad 25 €), GitHub Sponsors
(~1,00 € s osobnih računa, ali isplata u USD i upitno za medijski projekt).

## Ne aktivirati

| Kanal | Razlog |
|---|---|
| Buy Me a Coffee | ~0,60 € (5 % + Stripe) |
| Gumroad, Lemon Squeezy, Paddle, Polar | ≤0,50 € (fiksno ~0,50 $) |
| Donorbox, Givebutter, Fundraise Up, Donately, GoGetFunding | omotači s vlastitim % povrh Stripe/PayPal |
| Substack, Memberful, Ghost, Podia, Kajabi, Memberstack, Supercast | članstva/tečajevi, nisu donacije; mjesečne pretplate |
| Revolut Business | 0,79 €, ali LT IBAN; udruga ga ne može otvoriti |
| Viva, Mollie | ~0,73 € — ništa bolje od SumUpa |
| WSPay, CorvusPay | godišnja/mjesečna licenca |
| GoFundMe, Kickstarter, Zeffy, Every.org, HelloAsso, Discord pretplate | nedostupno HR primatelju |
| Spotify pretplate | vjerojatno nije u HR |
| Coinbase Commerce | ugašen izvan US/SG (31.3.2026.) |
| Wero / EPI | nije u HR |
| Square, Wise payment links | nedostupno / zatvoreno za nove |
| Humanitarni 060 / SMS | samo humanitarne akcije |
| Kripto on-ramp za male iznose | minimalno ~4 $ — nemoguće za 1 € |
| Poljske platforme (Patronite, Zrzutka, buycoffee.to) | samo PL primatelji |
| Flattr | ugašen 2023. |

## Kako ovo komunicirati donatorima

- Uvijek pokazati **neto od 1 €** po kanalu, s datumom provjere.
- „0 %" nikad samo — naš rail ne uzima postotak, ali donator plati bankovnu naknadu
  pri punjenju novčanika; to stoji u istom retku.
- Za jednokratnu donaciju od 1 € s praznim novčanikom naš rail nije jeftiniji od HUB3;
  prednost je trenutnost, javnost uplata i to što se fiksna naknada plaća jednom.
