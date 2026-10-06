# Donacijske platforme — katalog (discovery pass, 6.10.2026.)

Prvi prolaz: tri istraživača (web search, Sonnet), ~100 platformi i kanala.
Sirovi nalazi s izvorima po retku: `raw/2026-10-06-*.md`. Stari Compass izvještaj
(ožujak 2026.) je u `raw/2026-03-compass-creator-payments.md` i služi samo kao
popis imena, ne kao izvor brojki.

**Status:** ovo je otkrivanje, ne verifikacija. Velik dio službenih stranica je
vratio 403/404 pa su brojke često iz search snippeta ili sekundarnih izvora.
Nijedna brojka ne ide na stranicu bez provjere sa službene stranice i datuma.

## Glavni zaključak

Na donaciji od 1 € gotovo svaki kanal udara u isti zid: **fiksna naknada
procesora od 0,20–0,35 €**. Kreatorske platforme (Patreon, BMC, Substack,
Donorbox…) su uglavnom omotači oko Stripea ili PayPala i dodaju svoj postotak
**povrh** toga, pa na 1 € ne mogu biti bolje od golog Stripea (0,735 €).

Jedini kanali koji primatelju daju puni 1 € su oni bez kartične mreže:
SEPA/instant uplata (ali donator plati 0,33–0,40 € banci), KEKS Pay (neprovjereno
za pravne osobe), on-chain EURe i GitHub Sponsors (GitHub upija trošak).

To je ujedno pošten okvir za naš rail (`domovina.ai/c/domovina-tv/doniraj`):
bankovna naknada se plati **jednom** pri punjenju novčanika, a svaka sljedeća
donacija je bez fiksne naknade (batching, isti princip kao Liberapay). Za
jednokratnu donaciju od 1 € s praznim novčanikom naš rail nije jeftiniji od
SEPA QR-a, i to treba pisati.

## Neto od 1 € (EEA kartica, jednokratno)

| Kanal | Stigne primatelju | Donator plaća više | Status |
|---|---|---|---|
| SEPA / instant + HUB3 | 1,00 € (poslovni račun ZABA/OTP: −0,16 € po dolaznoj) | +0,30–0,40 € (Addiko 0,30, PBZ 0,33, ZABA/RBA/OTP 0,35, Erste 0,40) | ✅ cjenici banaka |
| KEKS Pay (Erste) | 1,00 € | 0 | udruge ✅ u praksi; d.o.o./obrt neprovjereno; traži HR IBAN |
| On-chain EURe (Gnosis) iz novčanika | ~1,00 € | gas ~0 | trošak punjenja zasebno |
| GitHub Sponsors | ~1,00 € ako donator plaća s osobnog računa (org do 6 %) | 0 | ✅; isplata u USD, prihvatljivost medija neprovjerena |
| SumUp payment link | **0,975 €** (2,5 % flat) | 0 | ✅ ispravljeno |
| PayPal micropayment tarifa | **0,90 €** (5 % + 0,05; isplati se ispod ~18,75 €) | 0 | ✅ |
| Revolut Business | 0,79 € (1 % + 0,20) | 0 | ✅ stopa; LT IBAN, udruga ne može |
| Viva.com | 0,738 € (2,19 % + 0,24) | 0 | službeno |
| **Stripe Payment Link** | **0,735 €** (1,5 % + 0,25) | 0 | ✅ min. 0,50 €, isplata besplatna, obrt i neprofitne OK |
| Ko-fi tip na vlastiti Stripe | 0,735 € | 0 | sekundarno |
| Mollie | 0,732 € | 0 | službeno; HR onboarding neprovjeren |
| WhyDonate | 0,731 € (1,9 % + 0,25) | opcionalni tip | službeno |
| Donorbox | ~0,706 € (2,95 % + Stripe) | 0 | sekundarno |
| YouTube Super Thanks / članstvo (web) | ~0,70 € | 0 | ✅ 70 %; fan funding od 500 pretplatnika |
| Apple Podcasts pretplata | 0,70 € (1. god.), 0,85 € kasnije | 0 | ✅ HR dostupno; godišnja naknada u EUR nejasna |
| Telegram Stars | ~0,65 € | 0 | sekundarno; isplata u TON |
| BMC | ~0,60–0,65 € | 0 | aproks. (USD tarife) |
| PayPal (standard) | 0,616 € (3,4 % + 0,35) | 0 | ✅ |
| Twitch pretplata | 0,50 € | 0 | službeno (snippet) |
| YouTube s iPhonea | ~0,49 € | 0 | Apple 30 % prije YouTubeovih 30 % |
| Gumroad / Lemon Squeezy / Paddle / Polar | ≤0,50 € | 0 | fiksno 0,50 $ |
| Patreon | **nepoznato** | 0 | procjena ~0,75 € je po USD tarifi i gotovo sigurno kriva |

Usput: Stripe HR stranica kaže da je ne-EEA kartica **3,15 %** + 0,25 €, a ne
3,25 % kako piše u `energy.domovina.ai/lib/fees.ts`. SEPA raspon 0,25–0,40 € iz
istog fajla je potvrđen (0,33–0,40 € za mobilno bankarstvo).

## 2. prolaz: verifikacija (6.10.2026.)

Sirovo: `raw/2026-10-06-verifikacija-*.md`. ✅ u tablici gore = potvrđeno sa
službene stranice ili cjenika.

**HR IBAN + trenutna obavijest: ne postoji.** Nijedan pružatelj danas ne daje
hrvatskoj pravnoj osobi HR IBAN s webhookom za dolazne uplate.
- Revolut Business: webhook `TransactionCreated` postoji, ali IBAN je LT.
  Wise i Paysera nemaju HR IBAN. Aircash je samo za fizičke osobe.
- Enable Banking (PSD2 AIS): pokriva ZABA, PBZ, Erste, RBA (OTP ne). Webhookovi
  samo za status plaćanja, ne za dolazne uplate. PSD2 dopušta 4 pozadinska
  čitanja / 24 h → kašnjenje ~6 h. Re-consent svakih 180 dana. GoCardless BAD
  zatvoren za nove, Kevin. u stečaju, finAPI bez HR.
- HR banke: camt.054 izvodi postoje, javni push API nije nađen.
- Monerium (EMI Island, SEPA preko LHV Pank, **IBAN je EE**) je na HNB popisu
  stranih pružatelja koji posluju u HR. Plana za HR IBAN nema.

**Dubinska pretraga obavijesti o priljevu** (`raw/2026-10-06-hr-banke-obavijesti-o-priljevu.md`):
nijedna HR banka javno ne nudi webhook za poslovni račun. Najbliže:
RBA mDIREKT (SMS po priljevu „u realnom vremenu", opći uvjeti 8.3.2026.),
Erste SMS (prag iznosa) i neprovjereni ErsteConnect Premium API s webhookovima,
PBZCOM-SMS (svakih 2,5 h ili po kriteriju, 0,04 €/SMS), ZABA camt.052 samo za
korporativne (SWIFTNet). HPB SMS/e-mail ide u paketima nakon 07:00, ali **push u
HPB poslovnoj aplikaciji stiže odmah** (vlasnikovo iskustvo) → kandidat za
Android gateway (`NotificationListenerService`). Svaki od ovih kanala je samo
okidač; istina je dnevni izvod (Erste: SMS „nema pravnu snagu").

**HUB3 → instant** (`raw/2026-10-06-verifikacija-hub3-instant.md`): redovni nalozi
idu kroz EuroNKS, instant kroz zasebni EuroNKSInst (spojen na TIPS od 6/2023).
Banke opisuju instant kao izbor po nalogu; PBZ izričito: nije automatski na
kopiranim nalozima/predlošcima. Strani SEPA IBAN (HPB priručnik) otvara
prekogranični nalog s drugim poljima — poziv na broj se može izgubiti.
Ne obećavati „skeniraj i odmah stiže"; uputa „uključi Instant".

**HUB3 s Monerium IBAN-om: po specifikaciji stane.** HUB3 v6 polje IBAN ima
max. **21 znak** i opisuje samo HR konstrukciju. EE IBAN ima 20 znakova pa
stane (IS 26, DE/IE 22 ne bi). Za hrvatsku banku to je prekogranični SEPA u
EUR, koji je kod svih 6 provjerenih banaka po istoj cijeni kao domaći nalog
drugoj banci. **Prihvaćaju li ga aplikacije: test stvarnom uplatom od 1 €
iz m-zabe, PBZ-a, Georgea, OTP-a, RBA-a.**

Ostali HUB3 limiti: opis 35 znakova, model `HRnn`, poziv na broj 22 znaka.
Verification of Payee (obavezan od 9.10.2025.): ime primatelja u barkodu mora
točno odgovarati imenu vlasnika Monerium računa, inače donator vidi upozorenje.

**EPC QR u HR bankama: sporno.** Pretpostavka je da ga HR banke ne čitaju; jedan
komercijalni blog tvrdi suprotno, službenog izvora nema ni za jedno. Ne pisati
ni jedno ni drugo javno bez testa u aplikacijama.

**Ostalo:**
- Instant SEPA: sve HR banke šalju i primaju od 9.10.2025., ista cijena kao
  obični nalog.
- ZABA, PBZ, Erste i RBA ne naplaćuju (ili smiju ne naplaćivati) nalog prema
  računima humanitarnih organizacija na svom popisu.
- Erste George mobilno: 1,50 €/mj od 1.4.2026.
- Naknada primatelju (poslovni račun): ZABA i OTP 0,16 € po dolaznoj uplati.
  Kod 1 € to je 16 % — za mikro-donacije na HR poslovni račun nije zanemarivo.

## Omotači vs. vlastita obrada

- **Omotači oko Stripea/PayPala (svoj % povrh):** Buy Me a Coffee, Substack,
  Ghost, Memberful, Memberstack, Podia, Kajabi, Supercast, Donorbox, Fundraise Up,
  Donately, GoGetFunding, Kickstarter, Indiegogo, Fourthwall.
- **0 % platforme, prolaz naknade procesora:** Ko-fi (tipovi), Liberapay,
  WhyDonate i Givebutter (financirani napojnicom donatora), StreamElements.
- **Merchant of Record (prodavatelj, PDV riješen, fiksno ~0,50 $):** Gumroad,
  Lemon Squeezy (sad Stripe), Paddle, Polar, Steady (sekundarno).
- **Vlastita / licencirana obrada:** Patreon, Tipeee (Adyen), GitHub Sponsors,
  betterplace, Ulule, poljski operateri (Patronite, buycoffee.to).
- **Platforma je MoR / primatelj (društvene mreže):** YouTube, Meta, TikTok,
  Twitch, Apple Podcasts, Telegram — dijele prihod, na iOS-u Apple uzme svoje prije.
- **Re-grant (platforma prima pa prosljeđuje):** Every.org, PayPal Giving Fund.

## Prijedlog po prioritetu

**Tier A: najbolji neto ili već imamo**
1. SEPA/instant + HUB3/EPC QR (postoji u repou)
2. Naš rail (MPT / Monerium EURe) s poštenim retkom za punjenje
3. Stripe Payment Link (+ Apple/Google Pay; najveći UX dobitak za impulsnih 1–5 €)
4. Za provjeru prije odluke: SumUp, Revolut Business, KEKS Pay, GitHub Sponsors

**Tier B: doseg (publika je već tamo, skuplje)**
YouTube članstva / Super Thanks, Ko-fi (na vlastiti Stripe), Liberapay
(ponavljajuće), Patreon, Buy Me a Coffee, PayPal, Apple Podcasts, Facebook Stars

**Tier C: niša / kasnije**
Twitch, X pretplate, Telegram Stars, Lightning (Alby), Steady, Ulule, WhyDonate

**Otpada za HR primatelja ili ovaj slučaj**
Kickstarter, GoFundMe, Zeffy, Every.org, HelloAsso, Discord pretplate,
Spotify pretplate (vjerojatno), Square, Wise payment linkovi (zatvoreno za nove),
Coinbase Commerce (ugašen izvan US/SG 31.3.2026.), Wero (nije u HR),
humanitarni 060/SMS (samo humanitarne akcije), WSPay/CorvusPay (godišnja/mjesečna
licenca), poljske platforme, Flattr (ugašen), kripto on-ramp za 1 € (minimalno ~4 $).

## Otvoreno nakon 2. prolaza

**Test stvarnom uplatom (ne može se riješiti webom):**
- HUB3 barkod s Monerium EE IBAN-om: skenira li se i prolazi u m-zaba, PBZ,
  George, OTP, RBA, Addiko; koliko je naplaćeno; što VoP prikaže
- EPC QR: čita li ga ijedna HR bankovna aplikacija

**Pitati izravno:**
- Erste: KEKS Pay primatelj donacija za d.o.o./obrt/medijski projekt; George
  Business webhook / camt.054 push
- GitHub: prihvaća li Sponsors nesoftverski medijski projekt

**Još neprovjereno webom:**
- Revolut Pay stopa i plan; obrt kao Revolut Business klijent
- PayPal dobrotvorna tarifa u EUR i prihvatljivost HR udruge
- Patreon EUR tablica obrade; BMC EUR/HR obrada i min. isplata
- Ko-fi minimalna donacija i HR podrška
- YouTube članstva / Super Chat dostupnost u HR (YPP da, fan funding?)
- Naknada za dolaznu uplatu na poslovni račun: PBZ, Erste, RBA, HPB, Addiko
- Slovenija, Srbija, BiH: lokalne platforme

## Vezani dokumenti

- `../kanali-za-donacije.md` — odluka: što aktivirati (tier 1–3, ne aktivirati)
- `2026-10-06-android-push-gateway.md` — APK analiza, push za priljev po banci
- github.com/domovinatv/bank-push-gateway — implementacija gatewaya
