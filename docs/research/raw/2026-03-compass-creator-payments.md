> **Arhivirani izvor, NIJE SSOT.** Claude Desktop Research (Sonnet 4.6), ožujak 2026. Poznate greške: koristi US Stripe stopu 2,9 % + 0,30 umjesto EEA 1,5 % + 0,25 €; USD fiksne naknade preračunate 1:1 u EUR; ključne Patreon brojke iz sekundarnih izvora (superprofile.bio, whop.com); teza (Solana + USDC MoR) nije naš smjer. Vidi `../2026-10-06-donacijske-platforme.md`.

# Creator Economy plaćanja: zašto su platforme preskupe i kako blockchain mijenja igru

**Kreatori širom Europe gube između 15% i 40% prihoda na naknade platformi i payment procesora** — a za mikrotransakcije ispod €3 ta brojka može premašiti čak 50%. Ovaj whitepaper analizira zašto je postojeći sustav plaćanja za kreatore fundamentalno neefikasan, kako EU regulativa dodatno komplicira situaciju, te zašto kombinacija blockchain tehnologije (konkretno Solane i stablecoina) s reguliranim Merchant of Record modelom predstavlja priliku za potpuno novi tip platforme. Fokus je na EU tržištu — i specifično na izazove s kojima se suočavaju kreatori iz Hrvatske i regije.

Kreatorska ekonomija vrijedi više od **250 milijardi dolara globalno** u 2025., s europskim segmentom od oko **33 milijarde dolara** koji raste po stopi od 25% godišnje. Unatoč tom rastu, infrastruktura plaćanja ostala je u prošlom desetljeću.\[1\] Fiksne naknade po transakciji, višestruki posrednici i složena porezna regulativa stvaraju sustav u kojem mali i srednji kreatori — koji čine ogromnu većinu — gube neproporcionalno velik dio svojih prihoda.

---

## 1. Koliko zapravo naplaćuju kreatorske platforme

Razumijevanje strukture naknada zahtijeva razlaganje na sastavne dijelove: platformska naknada (platform fee), naknada za obradu plaćanja (payment processing), konverzija valuta i naknada za isplatu.

### Patreon: anatomija jedne pretplate

Patreon, najpoznatija kreatorska platforma, od kolovoza 2025. naplaćuje **10% platformske naknade** svim novim kreatorima.\[2\] Legacy kreatori na starijim planovima zadržavaju niže stope (5% za Founders plan, 8% za stari Pro plan), ali gube taj status ako deaktiviraju stranicu ili promijene valutu.\[3\]\[4\] Na vrh toga dolazi payment processing od **2,9% + €0,30 po transakciji** za iznose iznad €3,\[4\] ili **5% + €0,10** za mikrotransakcije ispod €3.\[5\] Kreatori koji primaju uplate u drugoj valuti od svoje isplatne valute plaćaju dodatnih **2,5% za konverziju**.\[3\]\[6\] Isplata na europski bankovni račun košta oko **€0,25–€0,50**.\[7\]

**Konkretan primjer: €10 mjesečna pretplata iz Hrvatske (EUR→EUR)**

| Stavka | Naknada | Preostaje kreatoru |
|--------|---------|-------------------|
| Patron plaća | — | €10,00 |
| Platformska naknada (10%) | €1,00 | €9,00 |
| Processing (2,9% + €0,30) | €0,59 | €8,41 |
| Konverzija valute (0% — ista valuta) | €0,00 | €8,41 |
| Isplata na banku (~€0,25, amortizirano) | ~€0,01 | **~€8,40** |

**Efektivna stopa naknada: ~16%** — kreator dobije oko €8,40 od €10.

**Konkretan primjer: €1 mikrotransakcija**

| Stavka | Naknada | Preostaje kreatoru |
|--------|---------|-------------------|
| Patron plaća | — | €1,00 |
| Platformska naknada (10%) | €0,10 | €0,90 |
| Processing (5% + €0,10 za <€3) | €0,15 | €0,75 |
| **Ukupno naknade** | **€0,25** | **€0,75** |

**Efektivna stopa naknada: 25%.** Četvrtina svake mikro-donacije od €1 nestaje u naknadama. Ako patron plaća iz zemlje s drugom valutom, dodajte još 2,5% — ukupne naknade rastu na gotovo 28%.

### Kako stoje alternative

| Platforma | Platformska naknada | Processing naknada | MoR? | Idealno za |
|-----------|--------------------|--------------------|------|------------|
| **Patreon** (novi) | 10% | 2,9% + €0,30 | Ne | Članstva, zajednice |
| **Ko-fi** (besplatno) | 0% (tipovi) / 5% (članstva) | ~3% + €0,30 (Stripe) | Ne | Tipovi, ilustratori |
| **Ko-fi Gold** (€6/mj) | 0% na sve | ~3% + €0,30 (Stripe) | Ne | Aktivni kreatori |
| **Buy Me a Coffee** | 5% | ~2,9% + €0,30 | Ne | Jednokratni tipovi |
| **Substack** | 10% | 2,9% + €0,30 + 0,5% | Ne | Newsletter pisci |
| **Gumroad** | 10% + €0,50/tx | ~2,9% + €0,30 | **Da** | Digitalni proizvodi |
| **Lemon Squeezy** | 5% + €0,50 (+1,5% intl) | Uključeno | **Da** | SaaS, digitalni proizvodi |
| **Whop** | 3% | 2,7% + €0,30 (+1,5% intl) | **Da** | Discord zajednice |
| **Memberful** | €49/mj + 4,9% | ~2,9% + €0,30 (Stripe) | Ne | WordPress članstva |
| **Liberapay** | **0%** | ~3,2% (Stripe) | Ne | Open-source, donacije |

Najjeftinije opcije za čiste donacije su **Ko-fi** (0% na tipove)\[8\] i **Liberapay** (0% platforma), ali obje prebacuju payment processing naknade\[9\] i poreznu odgovornost na kreatora. Najskuplje su **Patreon** i **Gumroad** za male iznose, gdje fiksne naknade (€0,30–€0,80 po transakciji) drastično povećavaju efektivni postotak.

---

## 2. Merchant of Record — zašto je važniji nego što mislite

### Što je zapravo Merchant of Record

**Merchant of Record (MoR) je pravna osoba koja prodaje proizvod ili uslugu krajnjem kupcu.** Ime MoR-a pojavljuje se na izvodu kartice kupca. MoR preuzima svu pravnu i financijsku odgovornost za transakciju\[10\] — uključujući naplatu i prijavu PDV-a, upravljanje povratima, chargebackove i usklađenost s lokalnim zakonima.\[11\]\[12\]

Ključna razlika: **payment procesor** (kao Stripe) samo obrađuje prijenos novca između kupca i prodavatelja. Stripe ne preuzima poreznu odgovornost\[10\] — kreator ostaje prodavatelj i mora sam prijavljivati i plaćati PDV. **MoR platforma** (kao Lemon Squeezy ili Paddle) postaje pravni prodavatelj, a kreator je tehnički dobavljač koji prodaje MoR-u, koji zatim prodaje kupcu.\[13\]

U MoR modelu postoje **dvije transakcije**: jedna između kupca i MoR-a (s odgovarajućim lokalnim PDV-om), i jedna između MoR-a i kreatora (oslobođena PDV-a kao B2B transakcija).\[14\] Kreator prima neto isplatu bez brige o poreznoj usklađenosti.\[13\]

### Zašto je MoR kritičan za EU kreatore

EU pravila zahtijevaju da se digitalne usluge oporezuju **u zemlji kupca**, ne prodavatelja.\[15\]\[16\] To znači da hrvatski kreator koji prodaje digitalne pretplate kupcima u Njemačkoj mora naplatiti **19% PDV**, u Mađarskoj **27%**, u Francuskoj **20%**, u Luxembourgu **17%**. Bez MoR-a, kreator bi teoretski trebao porezne registracije u svim zemljama u kojima ima kupce\[17\] — ili koristiti VAT OSS sustav koji pojednostavljuje prijavu, ali zahtijeva poznavanje i praćenje svih stopa.

**Platforme koje JESU MoR**: Gumroad (od siječnja 2025.),\[18\] Lemon Squeezy, Paddle,\[19\] FastSpring, Whop. Ove platforme automatski izračunavaju, naplaćuju i prijavljuju PDV u ime kreatora.\[11\]\[20\]\[21\]

**Platforme koje NISU MoR**: Patreon, Ko-fi, Buy Me a Coffee, Substack, Memberful, Liberapay. Na ovim platformama kreator sam snosi poreznu odgovornost. Patreon doduše naplaćuje PDV od patrona u jurisdikcijama gdje je to zakonski obavezan,\[22\] ali **ne garantira** da kreator nema dodatne obveze lokalne prijave.\[23\]

---

## 3. EU regulativa koja oblikuje budućnost plaćanja kreatorima

### VAT OSS — One Stop Shop sustav

Od 1. srpnja 2021. VAT OSS sustav omogućuje EU poduzećima da se **registriraju jednom** u svojoj matičnoj državi,\[17\] naplaćuju PDV po stopi zemlje kupca i podnose **jednu tromjesečnu prijavu** koja pokriva svih 27 država članica.\[24\]\[25\]

Za hrvatske kreatore funkcionira ovako: ispod praga od **€10.000 godišnje** u ukupnoj prekograničnoj B2C prodaji digitalnih usluga, kreator može primjenjivati\[26\] **hrvatsku stopu PDV-a od 25%** na sve EU prodaje i prijavljivati domaće. Iznad tog praga mora naplaćivati PDV po stopi svake pojedine zemlje kupca\[26\]\[27\]\[28\] — što u praksi znači praćenje **27 različitih stopa** (od 17% u Luxembourgu do 27% u Mađarskoj).\[15\]\[29\]

Pravilo "deemed supplier" (pretpostavljeni dobavljač) dodatno komplicira sliku: **elektronička sučelja** (platforme) koja "facilitiraju" prodaju digitalnih usluga smatraju se prodavateljem za potrebe PDV-a.\[24\]\[30\]\[31\] No, platforme koje samo procesiraju plaćanja ili oglašavaju proizvode **ne** spadaju pod to pravilo\[32\] — što znači da većina kreatorskih platformi (Patreon, Ko-fi) ipak ne preuzima tu odgovornost.\[23\]

### MiCA — Markets in Crypto-Assets regulativa

**MiCA** (Uredba EU 2023/1114) je najvažniji zakonodavni okvir za kripto-imovinu u EU.\[33\] Stupila je na snagu u dva koraka: pravila za stablecoine (lipanj 2024.) i potpuna primjena za **Crypto Asset Service Providere (CASP)** od **30. prosinca 2024.**\[34\]

CASP licenca je **obavezna autorizacija** za tvrtke koje pružaju kripto usluge u EU — uključujući mjenjačnice, platforme za trgovanje, skrbništvo nad kripto-imovinom i izvršavanje naloga.\[34\]\[35\] Ključna prednost: licenca je **passportable** — odobrena u jednoj državi članici, vrijedi u svih 27 + EEA.\[34\]\[36\]\[37\]

Kapitalni zahtjevi su strukturirani u tri klase: od **€50.000** za osnovne usluge do **€150.000** za skrbništvo i administraciju kripto-imovine.\[37\]\[38\] CASP-ovi moraju implementirati punu KYC/AML usklađenost, praćenje transakcija, prijavu sumnjivih aktivnosti\[39\] i Travel Rule (prijenos identifikacijskih podataka pošiljatelja i primatelja za svaku kripto transakciju).\[40\]

Do kasne 2025. izdano je **preko 40 CASP licenci** u EU — prednjače **Njemačka (18)** i **Nizozemska (14)**.\[41\] Među prvim licenciranima bili su MoonPay, BitStaete, ZBD i Hidden Road, svi putem nizozemskog AFM-a\[42\]\[43\] na sam datum pune primjene, 30. prosinca 2024.\[41\]\[44\]

### DORA — otpornost digitalnih operacija

**DORA** (Uredba EU 2022/2554) se u potpunosti primjenjuje od **17. siječnja 2025.** i zahtijeva od svih financijskih subjekata — uključujući CASP-ove — implementaciju okvira za upravljanje ICT rizicima,\[45\] prijavu incidenata, testiranje digitalne otpornosti i upravljanje rizicima trećih strana.\[46\] DORA i MiCA su komplementarni: MiCA regulira licenciranje i ponašanje, DORA operativnu otpornost.

---

## 4. Matematika mikrotransakcija — zašto €0,30 ubija male kreatore

Fiksna naknada za obradu plaćanja od **€0,25–€0,30 po transakciji** je srž problema.\[47\] Dok je ta naknada zanemariva za transakciju od €100 (0,3%), za €1 transakciju predstavlja **30% vrijednosti** — prije nego se uopće doda platformska naknada.

### Koliko kreator stvarno dobije na različitim iznosima (Patreon, novi plan)

| Mjesečna pretplata | Platformska naknada (10%) | Processing | Ukupne naknade | Kreator prima | % u naknadama |
|---------------------|--------------------------|------------|---------------|---------------|---------------|
| **€1** | €0,10 | €0,15 (5%+€0,10) | **€0,25** | **€0,75** | **25,0%** |
| **€2** | €0,20 | €0,20 (5%+€0,10) | **€0,40** | **€1,60** | **20,0%** |
| **€3** | €0,30 | €0,39 (2,9%+€0,30) | **€0,69** | **€2,31** | **23,0%** |
| **€5** | €0,50 | €0,45 (2,9%+€0,30) | **€0,95** | **€4,05** | **19,0%** |
| **€10** | €1,00 | €0,59 (2,9%+€0,30) | **€1,59** | **€8,41** | **15,9%** |
| **€25** | €2,50 | €1,03 (2,9%+€0,30) | **€3,53** | **€21,47** | **14,1%** |
| **€50** | €5,00 | €1,75 (2,9%+€0,30) | **€6,75** | **€43,25** | **13,5%** |

Obrazac je jasan: **što je transakcija manja, veći postotak odlazi u naknade.** Na €1 pretplati naknade su gotovo dvostruko veće nego na €50 pretplati, procentualno gledano.

### Rješenja problema mikrotransakcija

**Godišnje pretplate** su najočitije rješenje: umjesto 12 mjesečnih transakcija od €5 (12 × €0,30 = €3,60 u fiksnim naknadama), jedna godišnja od €60 ima samo €0,30 fiksne naknade — **ušteda od €3,30 godišnje po pretplatniku.**\[48\]

**Batching/agregacija** je pristup koji koristi Liberapay: donatori uplaćuju sredstva unaprijed u wallet, a platforma zatim distribuira sredstva kreatorima s manje pojedinačnih transakcija. Time se fiksna naknada dijeli na više isplata.\[49\]

**Prebacivanje na alternativne platne kanale** poput SEPA Direct Debit (0,8% + €0,30, s gornjom granicom od €6) smanjuje processing naknade za europske korisnike.

No nijedno od ovih rješenja ne eliminira fundamentalni problem: **tradicionalni platni sustavi nisu dizajnirani za mikrotransakcije.**

---

## 5. Blockchain kao rješenje — Solana, stablecoini i nova infrastruktura

### Zašto Solana za plaćanja

Solana se izdvaja među blockchainovima kao platforma optimizirana za plaćanja zahvaljujući trima karakteristikama: **naknade ispod jednog centa** (~€0,00025 po transakciji),\[50\]\[51\]\[52\] **finalitet od ~400 milisekundi**\[51\]\[53\] (s nadolazećim Alpenglow nadogradnjom cilj je ispod 150ms)\[54\] i **masivan throughput** od 1.000–5.000 transakcija u sekundi u praksi.\[53\]\[55\] Solana je u 2025. obradila više od **bilijun dolara volumena stablecoina**, s više od 200 milijuna stablecoin transakcija mjesečno u prvom kvartalu 2025.\[56\]

USDC (Circle-ov stablecoin vezan za američki dolar)\[57\] dominira Solaninim stablecoin tržištem s **55–70% udjela**.\[56\] Ukupna ponuda stablecoina na Solani porasla je na ~**14 milijardi dolara**,\[58\] a dnevni P2P transfer volumeni premašuju desetke milijardi. Visa je krajem 2024. pokrenula USDC settlement putem Solane,\[59\] dok je Cash App omogućio slanje i primanje USDC-a kroz Solanu.\[60\]

Za usporedbu: **prijenos €1 u USDC na Solani košta ~€0,00025**\[50\] — oko 1.300 puta jeftinije od Stripe-ovog stablecoin processinga (1,5%)\[61\] i preko **100.000 puta jeftinije** od standardnog kartičnog processinga (2,9% + €0,30).

### Solana Pay i Shopify integracija

**Solana Pay** je open-source, decentralizirani peer-to-peer protokol za plaćanja izgrađen na Solani.\[62\] Omogućuje merchantima prihvaćanje kriptovalutnih plaćanja (primarno USDC) s gotovo nultim naknadama, bez posrednika, bez chargeback rizika i s trenutnim settlementom.\[63\] Integracija sa Shopifyjem omogućuje milijunima merchantova pristup kripto plaćanjima\[64\] kroz jednostavnu instalaciju aplikacije.\[63\]

Merchanti instaliraju Solana Pay aplikaciju iz Shopify App Storea, prolaze KYB verifikaciju, unose adresu Solana walleta i aktiviraju. Kupci na checkoutu biraju Solana Pay, spajaju wallet ili skeniraju QR kod i odobravaju transakciju.\[65\] **Trošak po transakciji: ispod €0,001** — u usporedbi s 2,4–2,9% za tradicionalno kartično procesiranje.\[66\]

### Helio/MoonPay Commerce — akvizicija i mogućnosti

**MoonPay je u siječnju 2025. akvizirao Helio za 175 milijuna dolara** u all-equity transakciji\[67\] — svoju dosad najveću akviziciju.\[68\] Helio, londonski startup osnovan 2022. s timom od 20 ljudi,\[69\] transformiran je u **MoonPay Commerce**\[70\] — platformu s preko **6.000 merchantova**\[62\] i kumulativnim transakcijskim volumenom od **1,5 milijardi dolara**.\[71\]

MoonPay Commerce nudi Pay Linkove, Checkout Widgete, pretplate, Shopify i WooCommerce pluginove te Discord/Telegram članstva.\[62\] Podržava USDC, SOL, ETH, BTC i stotine drugih tokena na više blockchainova.\[70\]

Kritična činjenica: **MoonPay Commerce NIJE Merchant of Record.** Sve transakcije su **100% peer-to-peer** — kupac plaća direktno merchantu on-chain. MoonPay nikada ne drži sredstva.\[70\] Posljedica: **PDV ostaje potpuna odgovornost merchanta/kreatora.** Za EU kreatore to znači da korištenje MoonPay Commerce-a za prodaju digitalnih pretplata ne rješava problem VAT compliance-a.

Sustav pretplata funkcionira na "push" modelu: kupac prima email podsjetnik za svaki ciklus naplate s linkom za obnovu\[72\] — za razliku od kartičnog sustava koji automatski tereti karticu. To je fundamentalno drugačiji UX koji zahtijeva aktivnu akciju kupca za svako plaćanje.

### MoonPay-eva MiCA licenca

MoonPay je **30. prosinca 2024.** dobio CASP licencu od nizozemskog AFM-a\[44\]\[73\] — bio je među **prva četiri poduzeća** koja su dobila MiCA licencu na sam datum pune primjene regulative.\[41\]\[44\]\[74\] Licenca omogućuje MoonPayu pružanje fiat-to-crypto i crypto-to-fiat usluga u cijelom **Europskom gospodarskom prostoru**.\[75\]\[76\] No ta licenca pokriva MoonPay-evu mjenjačku djelatnost (on-ramp/off-ramp), ne Commerce segment koji ostaje P2P facilitator.

### Stripe stablecoin pretplate

Stripe je u listopadu 2025. pokrenuo **stablecoin subscription payments** u privatnom previewu — trenutno **samo za američke merchantove.**\[77\]\[78\]\[79\] Sustav koristi smart contract koji rješava fundamentalno ograničenje blockchaina: vlasnik walleta mora ručno potpisati svaku transakciju. Stripe-ov pristup omogućuje korisnicima da spreme wallet kao platnu metodu i autoriziraju recurring plaćanja bez ponovnog potpisivanja.\[77\]

Naknada je **1,5% bez fiksne komponente**\[61\]\[80\] — što je revolucionarno za mikrotransakcije. Na €1 transakciji, Stripe stablecoin naplaćuje samo €0,015, dok kartično procesiranje košta €0,329.\[81\] Podržani stablecoini uključuju USDC, USDP i USDG na Ethereum, Solana, Base i Polygon mrežama.\[61\]\[82\]

### Usporedba troškova: blockchain vs. tradicionalno za mikrotransakcije

| Metoda plaćanja | Struktura naknada | Naknada na €1 | % transakcije |
|-----------------|-------------------|---------------|---------------|
| **Solana (mrežna naknada)** | ~€0,00025 fiksno | **€0,00025** | **0,025%** |
| **Stripe stablecoin** | 1,5% bez fiksne | **€0,015** | **1,5%** |
| **Stripe kartica** | 2,9% + €0,30 | **€0,329** | **32,9%** |
| **PayPal standard** | 2,99% + €0,49 | **€0,52** | **52,0%** |
| **Patreon (mikro)** | 10% + 5% + €0,10 | **€0,25** | **25,0%** |

Razlika je dramatična. Za €1 transakciju, Solana mrežna naknada je **1.300 puta jeftinija** od Stripe stablecoina i **130.000 puta jeftinija** od kartičnog processinga. Čak i Stripe-ov stablecoin model s naknadom od 1,5% bez fiksne komponente predstavlja transformativno poboljšanje za mikrotransakcije.

---

## 6. Tržišna praznina — regulirani blockchain MoR za EU kreatore

### Problem koji nitko ne rješava

Trenutno na tržištu postoji jasna praznina. S jedne strane imamo **tradicionalne MoR platforme** (Lemon Squeezy, Paddle, Gumroad) koje rješavaju PDV compliance ali koriste skupe kartične procesore s fiksnim naknadama koje ubijaju mikrotransakcije.\[19\] S druge strane imamo **blockchain platne platforme** (MoonPay Commerce, Solana Pay) koje nude jeftine transakcije, ali ne preuzimaju MoR odgovornost i ostavljaju PDV na kreatoru.

**Ne postoji regulirani blockchain Merchant of Record za EU kreatore.** Ovo je praznina vrijedna istraživanja i razvoja.

### Kako bi izgledala idealna platforma

Platforma koja bi popunila ovu prazninu trebala bi kombinirati nekoliko ključnih komponenti:

- **MiCA CASP licenca** za legalno procesiranje kripto plaćanja u cijelom EEA
- **VAT OSS registracija** i automatsko upravljanje PDV-om za digitalnu prodaju u EU
- **Merchant of Record odgovornost** — platforma je pravni prodavatelj, kreator je dobavljač
- **Solana settlement** za sub-centne mrežne naknade i trenutni finalitet
- **USDC/EURC** kao primarni stablecoini za eliminaciju volatilnosti
- **Smart contract recurring** za automatske pretplate (slično Stripe-ovom pristupu)
- **Fiat on/off ramp** za kupce koji ne žele koristiti kripto wallet direktno

### Usporedba troškova: blockchain MoR vs. Patreon

Pretpostavimo hipotetsku blockchain MoR platformu s naknadom od 5% + mrežni troškovi:

| Iznos pretplate | Patreon (kreator prima) | Blockchain MoR (kreator prima) | Ušteda |
|-----------------|------------------------|-------------------------------|--------|
| **€1/mjesec** | €0,75 (25% naknade) | €0,95 (5% naknade) | **+€0,20 (+27%)** |
| **€5/mjesec** | €4,05 (19% naknade) | €4,75 (5% naknade) | **+€0,70 (+17%)** |
| **€10/mjesec** | €8,41 (15,9% naknade) | €9,50 (5% naknade) | **+€1,09 (+13%)** |
| **€25/mjesec** | €21,47 (14,1% naknade) | €23,75 (5% naknade) | **+€2,28 (+11%)** |

Razlika je najdramatičnija upravo kod malih iznosa: za €1 mikrotransakciju, kreator na hipotetskoj blockchain MoR platformi prima **27% više** nego na Patreonu. Za kreatore s tisućama malih pretplatnika, ta razlika kumulativno predstavlja značajan iznos.

### Potencijalno tržište i korisnici

Kreatorska ekonomija u Europi vrijedi oko **33 milijarde dolara** s rastom od 25% godišnje.\[83\]\[84\] Procjene sugeriraju da Europa ima između 50 i 100 milijuna aktivnih kreatora,\[85\] od kojih je samo mali postotak profesionaliziran. **50% kreatora zarađuje manje od 5.000 dolara godišnje**\[86\]\[87\] — upravo oni kojima svaki postotak naknada najviše znači.

Ciljani korisnici blockchain MoR platforme uključuju **podcastere** koji prodaju bonus epizode i članstva, **video kreatore** koji traže alternativu YouTube-ovom 45% rezu,\[88\] **newsletter pisce** koji žele nižu alternativu Substackovom 10%+processing sustavu,\[89\]\[90\] **open-source developere** koji primaju mikro-donacije (gdje fiksne naknade pojedu značajan dio), **glazbenike i vizualne umjetnike** koji prodaju digitalni sadržaj, te **edukatere** koji prodaju tečajeve i radionice.

Hrvatska je zanimljiv mikro-tržišni primjer: **81,5% populacije posjeduje vještine stvaranja digitalnog sadržaja** (značajno iznad EU prosjeka od 68,3%),\[91\] penetracija interneta prelazi 92%, a digitalna ekonomija je u fazi brzog rasta. No **stopa PDV-a od 25%** (jedna od najviših u EU) i relativno malo domaće tržište čine poreznu usklađenost posebno bolnom točkom za hrvatske kreatore koji ciljaju EU publiku.

### Komponente idealne platforme

Izgradnja blockchain MoR platforme za EU kreatore zahtijeva integraciju više regulatornih i tehničkih slojeva. Regulatorni temelj čine **MiCA CASP licenca** (minimalni kapital €50.000–€150.000, ovisno o klasi usluga),\[37\]\[38\] **VAT OSS registracija** u matičnoj državi, puna **AML/KYC infrastruktura** uključujući Travel Rule usklađenost,\[39\] te **DORA compliance** za operativnu otpornost.

Tehnički stack trebao bi uključivati **Solana blockchain** za settlement s sub-centnim naknadama, **USDC i EURC stablecoine** (Circle, MiCA compliant)\[57\] za stabilnost vrijednosti, **smart contract sustav za recurring payments** koji omogućuje automatske pretplate bez ručnog potpisivanja svake transakcije, **fiat on-ramp** (npr. putem MoonPay ili Stripe) za kupce koji preferiraju kartično plaćanje,\[73\] te **automatski PDV kalkulator** koji primjenjuje ispravnu stopu ovisno o lokaciji kupca.

Korisnički tok bi izgledao ovako: kupac odabere pretplatu → platforma izračuna PDV prema lokaciji kupca → kupac plaća karticom ili kriptom → platforma primi sredstva kao MoR → platforma prijavi i uplati PDV → kreator prima neto isplatu u EUR ili USDC. Kreator nikada ne mora razmišljati o porezima, a naknada platforme može biti dramatično niža od tradicionalnih alternativa jer blockchain settlement eliminira najskuplji dio — kartično procesiranje.

---

## 7. Zaključak i preporuke za djelovanje

### Ključni nalazi ovog istraživanja

Tradicionalne kreatorske platforme naplaćuju **15–25% efektivnih naknada** na tipične pretplate, s fiksnim payment processing naknadama koje neproporcionalno pogađaju mikrotransakcije. **Merchant of Record status** je kritičan za EU kreatore zbog kompleksnosti PDV-a na digitalne usluge u 27 zemalja s različitim stopama, ali većina popularnih kreatorskih platformi (Patreon, Ko-fi, Substack) ne nudi tu uslugu. **Blockchain tehnologija** — posebno Solana s naknadama od €0,00025 po transakciji — tehnički rješava problem skupih mikrotransakcija, ali postojeće blockchain platne platforme (MoonPay Commerce) ne preuzimaju MoR odgovornost. **Regulatorni okvir je spreman**: MiCA pruža jasnu licencnu strukturu za kripto platne usluge u EU, a VAT OSS pojednostavljuje prekogranično upravljanje PDV-om.

### Što EU kreatori mogu učiniti danas

**Za kreatore s prihodima ispod €10.000 godišnje** u prekograničnoj prodaji: koristite platforme poput **Ko-fi** (0% na tipove) ili **Liberapay** (0% platforma) za donacije, i primijenite domaću stopu PDV-a. Potičite godišnje umjesto mjesečne pretplate da smanjite utjecaj fiksnih naknada.

**Za kreatore iznad praga od €10.000**: razmotrite **Lemon Squeezy** ili **Gumroad** kao MoR platforme koje automatski upravljaju PDV-om. Lemon Squeezy nudi nižu stopu (5% + €0,50) od Gumroada (10% + €0,50), ali s 1,5% međunarodnom premium naknadom. Stripe-ova akvizicija Lemon Squeezyja (srpanj 2024.) obećava daljnju integraciju i potencijalno poboljšanje uvjeta.

**Za tech-savvy kreatore**: eksperimentirajte s **MoonPay Commerce** za dio svoje publike koja već koristi kripto walleteove, ali budite svjesni da PDV ostaje vaša odgovornost. Pratite **Stripe stablecoin subscriptions** — kad se proširi izvan SAD-a na EU tržište, to bi mogla biti najjednostavnija kombinacija niskih naknada i poznate infrastrukture.

### Pogled u budućnost

Kratkoročno (2026.–2027.) očekujemo širenje **Stripe-ovih stablecoin pretplata na europsko tržište** — što bi odmah pružilo 1,5% naknade bez fiksne komponente za sve kreatore koji koriste Stripe. Srednji rok (2027.–2028.) donosi sazrijevanje **MiCA ekosustava** s više od 100 licenciranih CASP-ova i potencijalno pojavu prvih blockchain MoR platformi specifično dizajniranih za kreatorsku ekonomiju. Dugoročno (2028.+), konvergencija regulatornog okvira (MiCA, AMLA direktni nadzor od 2028., ViDA reforme), zrele blockchain infrastrukture i rastuće kripto pismenosti stvara uvjete za potpuno novu generaciju kreatorskih platformi koje kombiniraju **sub-centne naknade, automatsku poreznu usklađenost i poznati korisnički doživljaj.**

Praznina na tržištu je jasna, regulatorni okvir postoji, a tehnologija je spremna. Pitanje nije hoće li se blockchain MoR za EU kreatore pojaviti — pitanje je tko će ga prvi izgraditi.

## Sources

1. [The 2025 Creator Monetization Landscape: Insights from a Key Survey and Broader Trends](https://quasa.io/media/the-2025-creator-monetization-landscape-insights-from-a-key-survey-and-broader-trends)
2. [We’re increasing our prices for new creators. Existing creators will not see any increase. | Patreon for Creators](https://www.patreon.com/posts/were-increasing-130695366)
3. [Creator fees overview – Patreon Help Center](https://support.patreon.com/hc/en-us/articles/11111747095181-Creator-fees-overview)
4. [How much does Patreon cost? Hidden fees and additional charges explained](https://whop.com/blog/patreon-cost/)
5. [Patreon Account Creator Fees and Price Tiers Overview](https://superprofile.bio/blog/patreon-pricing)
6. [A standard platform fee for new creators — effective after August 4, 2025](https://support.patreon.com/hc/en-us/articles/36426991446797-A-standard-platform-fee-for-new-creators-effective-after-August-4-2025)
7. [Setting my creator currency FAQ – Patreon Help Center](https://support.patreon.com/hc/en-us/articles/360039539851-Setting-my-creator-currency-FAQ)
8. [Ko-fi Pricing | Just 0-5% fees](https://ko-fi.com/pricing)
9. [The Patreon Exodus: Why Creators Are Building Their Own Branded Apps](https://passion.io/blog/the-patreon-exodus-why-creators-are-building-their-own-branded-apps)
10. [What is a merchant of record (MoR) + why use one for payments and sales tax?](https://www.paddle.com/blog/what-is-merchant-of-record)
11. [What is a Merchant of Record? A Deep Dive into Sales Tax Management for Creators](https://fourthwall.com/blog/what-is-a-merchant-of-record-a-deep-dive-into-sales-tax-management-for-creators)
12. [Merchant of Record Responsibilities for eCommerce Brands](https://gappgroup.com/blog/merchant-of-record-responsibilities/)
13. [Merchant of Record • Lemon Squeezy](https://www.lemonsqueezy.com/reporting/merchant-of-record)
14. [What is a Merchant of Record? MoR Payments Explained | Cleverbridge](https://grow.cleverbridge.com/blog/merchant-of-record)
15. [Taxually - When & Where to Charge EU VAT on Digital Services](https://www.taxually.com/blog/when-and-where-to-charge-eu-vat-on-digital-services)
16. [What Is a Merchant of Record? (And Why Should You Care?)](https://fastspring.com/blog/what-is-a-merchant-of-record-and-why-you-should-care/)
17. [The One Stop Shop - VAT e-Commerce - One Stop Shop - European Commission](https://vat-one-stop-shop.ec.europa.eu/one-stop-shop_en)
18. [Gumroad pricing: 10% flat fee](https://gumroad.com/pricing)
19. [Gumroad vs Lemon Squeezy: Which Platform is Best for Selling Digital Products?](https://sologrowthlab.com/blog/gumroad-vs-lemon-squeezy-for-creators/)
20. [Merchant of Record: Pros, Cons, Options](https://www.getsphere.com/blog/merchant-of-record)
21. [Lemon Squeezy: How does it work?](https://ruul.io/blog/what-is-lemonsqueezy)
22. [How VAT works for creators on Patreon – Patreon Help Center](https://support.patreon.com/hc/en-us/articles/205259549-How-VAT-works-for-creators-on-Patreon)
23. [Who Handles EU VAT on Digital Platforms? | hellotax](https://hellotax.com/blog/vat-on-digital-platforms/)
24. [VAT One Stop Shop - VAT e-Commerce - One Stop Shop - European Commission](https://vat-one-stop-shop.ec.europa.eu/index_en)
25. [EU VAT One Stop Shop (OSS) - Your Europe](https://europa.eu/youreurope/business/taxation/vat/one-stop-shop/index_en.htm)
26. [One Stop Shop (OSS) In The EU – 2025 Guide For E‑commerce Sellers | Intertax](https://polishtax.com/one-stop-shop-oss/)
27. [Croatia VAT Guide: Tax Number Format, Rates & Compliance](https://www.fonoa.com/resources/country-tax-guides/croatia)
28. [The Ultimate Guide to EU VAT for Digital Taxes](https://quaderno.io/guides/eu-vat/)
29. [2025 VAT Rates in Europe: Country Rates & Changes](https://www.vatai.com/blog/2025-vat-rates-in-europe-country-rates-changes)
30. [Online Marketplaces and Platforms A Guide to VAT Compliance in the EU and UK](https://www.taxmatic.com/wp-content/uploads/2024/08/VAT-for-Online-Marketplaces-and-Platforms-Taxmatic-Guide.pdf)
31. [VAT in the Digital Age | Tax Executive](https://www.taxexecutive.org/vat-in-the-digital-age/)
32. [Understanding the tax obligations of marketplaces in the EU | Stripe](https://stripe.com/guides/understanding-the-tax-obligations-of-marketplaces-in-the-eu)
33. [Crypto Regulations in the EU 2025 | The Sumsuber](https://sumsub.com/blog/eu-crypto-regulations/)
34. [CASP License - How to get a CASP License in EU | Gofaizen & Sherle](https://gofaizen-sherle.com/casp-license)
35. [Netherlands Grants MiCA Licenses to Crypto Companies to Operate Across the EU | Bitget News](https://www.bitget.com/news/detail/12560604477858)
36. [Morphic Financial Group’s Dutch subsidiary granted MiCA license](https://coingeek.com/morphic-financial-group-dutch-subsidiary-granted-mica-license/)
37. [Netherlands CASP License (MiCA) | Gofaizen & Sherle](https://gofaizen-sherle.com/casp-license/casp-license-in-netherlands)
38. [MiCA Regulation - Obtain a CASP License in the EU](https://www.maxcorp.eu/eng/crypto/mica-casp-license/)
39. [AML in the EU how to comply with the requirements - read in the blog of the company COREDO](https://coredo.eu/aml-in-the-eu-how-to-comply-with-the-requirements/)
40. [EU Crypto Regulation Explained: An Essential Guide (2026)](https://www.innreg.com/blog/eu-crypto-regulation-guide)
41. [MiCA Regulation: 2026 Guide for Licensing & Compliance](https://adamsmith.lt/en/mica-license-2025/)
42. [Four Crypto Firms Obtain First MiCA Licenses in the Netherlands, Signaling New EU Regulatory Phase](https://bitcoinethereumnews.com/crypto/four-crypto-firms-obtain-first-mica-licenses-in-the-netherlands-signaling-new-eu-regulatory-phase/)
43. [Dutch Regulator AFM Awards EU MiCA License to 4 Companies](https://www.coindesk.com/policy/2025/01/06/dutch-regulator-awards-eu-mi-ca-license-to-4-companies)
44. [MoonPay Becomes One of the First Crypto Firms to Receive MiCA Approval in Europe](https://www.blockhead.co/2024/12/31/moonpay-secures-mica-approval-in-europe/)
45. [Digital Operational Resilience Act (DORA) - European Insurance and Occupational Pensions Authority](https://www.eiopa.europa.eu/digital-operational-resilience-act-dora_en)
46. [Digital Operations Resilience Act (DORA)](https://hyperproof.io/digital-operations-resilience-act-dora/)
47. [The Vital Role of Payment Systems in the Global Creator Economy](https://bold-awards.com/creator-economy-payment-systems/)
48. [How Much Do You REALLY Earn on Substack? Let’s Talk Fees!](https://www.onlinewritingclub.com/p/how-much-do-you-really-earn-on-substack)
49. [Liberapay](https://en.liberapay.com/)
50. [Solana Statistics 2025: Validator Counts, DeFi TVL, etc. • CoinLaw](https://coinlaw.io/solana-statistics/)
51. [Solana (SOL) Transaction Fees, Speeds, and Limits: Everything You Need to Know - Fuze Blog](https://fuze.finance/blog/solana-transaction-fees-speeds-and-limits/)
52. [What Are Solana Gas Fees and Why They’re So Cheap | 2025 Guide](https://learn.backpack.exchange/articles/solana-gas-fees)
53. [Solana Transaction Speed & TPS: Fastest Blockchain? | OKX United States](https://www.okx.com/en-us/learn/solana-transaction-speed-tps)
54. [Solana Blockchain Explained: Understanding the High-Throughput, Low-Cost Network | Ledger](https://www.ledger.com/academy/topics/blockchain/solana-blockchain-explained-understanding-the-high-throughput-low-cost-network)
55. [Solana (SOL) Transactions: Fees, Speed, Limits](https://cryptomus.com/blog/solana-sol-transactions-fees-speed-limits)
56. [Solana’s Stablecoin Landscape](https://www.helius.dev/blog/solanas-stablecoin-landscape)
57. [Circle | Open infrastructure for faster, smarter payments](https://www.circle.com/)
58. [Non-USDC/USDT stablecoin supply on Solana surges nearly 10x since Jan 2025 - Cryptopolitan](https://www.cryptopolitan.com/non-usdc-usdt-stablecoin-supply-on-solana/)
59. [Visa - Visa Launches Stablecoin Settlement in the United States, Marking a Breakthrough for Stablecoin Integration](https://investor.visa.com/news/news-details/2025/Visa-Launches-Stablecoin-Settlement-in-the-United-States-Marking-a-Breakthrough-for-Stablecoin-Integration/default.aspx)
60. [Why has Solana stablecoin action boomed over the past year? – DL News](https://www.dlnews.com/articles/markets/why-solana-stablecoin-action-boomed-over-2025/)
61. [Stripe Charges 1.5% for Stablecoin Transfers That Cost \$0.0002 On-Chain](https://finance.yahoo.com/news/stripe-charges-1-5-stablecoin-145737023.html)
62. [Introducing MoonPay Commerce - MoonPay](https://www.moonpay.com/newsroom/moonpay-commerce)
63. [Solana Pay Integrates with Shopify as New Payment ...](https://solana.com/news/solana-pay-shopify)
64. [Stripe will help millions of Shopify merchants to accept stablecoin payments](https://stripe.com/newsroom/news/shopify-stripe-stablecoin-payments)
65. [How to Integrate Solana Pay as a Payment Method on Shopify](https://www.ecorn.agency/blog/solana-pay-shopify-guide)
66. [Shopify & Solana Pay: Step-by-Step Guide (2023)](https://www.helius.dev/blog/solana-pay-shopify)
67. [MoonPay acquires Helio to enhance crypto payment services](https://www.fintechfutures.com/m-a/moonpay-acquires-helio-to-enhance-crypto-payment-services)
68. [MoonPay acquires Helio for \$175M to expand crypto payments infrastructure | Fox Business](https://www.foxbusiness.com/markets/moonpay-acquires-helio-175m-expand-crypto-payments-infrastructure)
69. [Moonpay Acquires Helio for a Reported \$175M – Architect Partners](https://architectpartners.com/moonpay-acquires-helio-for-a-reported-175m/)
70. [FAQ](https://docs.hel.io/docs/welcome-to-helio)
71. [MoonPay acquires Helio in \$175M deal to expand crypto payment services](https://cointelegraph.com/news/moonpay-acquires-helio-175m-solana-payment-expansion)
72. [Seamless Subscriptions with Crypo with Helio – Secure & Flexible](https://www.hel.io/blog/introducing-helio-subscriptions)
73. [Rumble and Tether launch crypto wallet for creator tipping payments](https://thepaypers.com/crypto-web3-and-cbdc/news/rumble-and-tether-launch-crypto-wallet-for-creator-payments)
74. [MoonPay Secures MiCA Approval | Financial IT](https://financialit.net/news/cryptocurrencies/moonpay-secures-mica-approval)
75. [MoonPay approved under MiCA to operate in the EU](https://cryptoslate.com/moonpay-approved-under-mica-to-operate-in-the-eu/)
76. [MoonPay secures MiCA approval](https://www.finextra.com/pressarticle/103711/moonpay-secures-mica-approval)
77. [Introducing stablecoin payments for subscriptions](https://stripe.com/blog/introducing-stablecoin-payments-for-subscriptions)
78. [Stripe Begins Rollout of Stablecoin Payments for Subscriptions | PYMNTS.com](https://www.pymnts.com/cryptocurrency/2025/stripe-begins-rollout-of-stablecoin-payments-for-subscriptions/)
79. [Stripe adds stablecoin support for subscription payments | The Paypers](https://thepaypers.com/crypto-web3-and-cbdc/news/stripe-adds-stablecoin-support-for-subscription-payments)
80. [Stripe Crypto: 1.5% USDC Payments in 100+ Countries — 2026](https://blockfinances.fr/en/stripe-crypto-stablecoin-payments)
81. [Testing Stripe’s Stablecoin Payments! Instantly Save 94% on Payment Processing Fees](https://en.blocktrend.today/testing-stripes-stablecoin-payments-instantly-save-94-on-payment-processing-fees/)
82. [Stablecoin payments | Stripe Documentation](https://docs.stripe.com/payments/stablecoin-payments)
83. [Creator Economy Payments - Local Payouts for Global Creators | Nium](https://www.nium.com/solutions/creator-economy)
84. [Creator Economy Europe: Key Statistics and Market Data for 2026 | FluxNote](https://fluxnote.io/guides/creator-economy-europe-statistics-2026)
85. [The Content Creator Economy: Growth Through Empowerment | Deloitte US](https://www.deloitte.com/us/en/services/consulting/articles/content-creator-economy-growth-and-future-challenges.html)
86. [Content Creator Income Statistics 2026: Earnings by Platform, Niche & Experience Level - AutoFaceless Blog](https://autofaceless.ai/blog/content-creator-income-statistics-2026)
87. [Creator Economy Statistics And Market Size 2026](https://www.companieshistory.com/creator-economy-market-size/)
88. [Creator Platform Payouts: How TikTok, Patreon, YouTube & More Pay Creators](https://www.podcastvideos.com/articles/creator-platform-payouts-onlyfans-patreon-youtube/)
89. [Stop Losing 30% to Fees: The Best Patreon Alternatives for Creators](https://passion.io/blog/stop-losing-30-to-fees-the-best-patreon-alternatives-for-creators)
90. [Substack Pricing: What You Pay and What You Get](https://writeseen.com/blog/substack-pricing)
91. [Croatia - Digital Economy](https://www.trade.gov/country-commercial-guides/croatia-digital-economy)
