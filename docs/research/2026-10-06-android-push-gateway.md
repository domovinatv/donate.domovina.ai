# Android push gateway za HR banke — statička analiza APK-ova (6.10.2026.)

Ideja: namjenski Android telefon s bankovnom aplikacijom + `NotificationListenerService`
sidecar koji push o priljevu šalje na HTTP webhook. Web istraživanje
(`raw/2026-10-06-push-banke-*.md`) je dalo malo jer banke ne dokumentiraju push,
pa su APK-ovi skinuti (`apkeep -d apk-pure`, samo statička analiza, ništa nije
instalirano) i pregledani `aapt2 dump`.

## Manifest

Svih 7 skinutih aplikacija koristi Firebase Cloud Messaging
(`com.google.firebase.MESSAGING_EVENT`, `POST_NOTIFICATIONS`). Addiko ima i
Huawei Push. To samo potvrđuje da push postoji — ne i za što.

## Resursi (stringovi) — postoji li push za priljev

| Banka / aplikacija | Package | Nalaz u resursima | Zaključak |
|---|---|---|---|
| HPB mHPB | `co.infinum.hpb` | `notification_account_balance_change` = „Obavijest o promjeni po transakcijskom računu."; `notifications_hide_balance` = „Sakrij stanje" | ✅ push za promjenu po računu; **stanje je u obavijesti** (može se sakriti) |
| RBA mojaRBA | `co.infinum.rba.eva` | `notification_management_incoming_payments` = „Uplate na račune"; „Nova uplata poslodavca"; „Ostale nove uplate" | ✅ kategorija push za uplate (web istraživač je krivo zaključio da nema) |
| Erste George | `hr.erstebank.george` | Android notification kanali `INCOMING_TRX` „Incoming transactions", `INSTANT_PAYMENT` „Instant Payment (SEPA)", `BALANCE_WD` | ✅ zaseban kanal za dolazne transakcije i za instant SEPA — listener može filtrirati po channel id |
| ZABA m-zaba | `hr.asseco.android.zaba.new` | `infopage_user_notification_incoming_funds` (UniCredit zajednički kod) | ✅ postoji „incoming funds" obavijest (i web stranica to potvrđuje) |
| PBZ mobile | `hr.asseco.android.intesa.isbd.pbz` | Flutter, nema stringova u resursima | ❓ tekstovi vjerojatno sa servera |
| PBZ poslovni (digi4biz) | `hr.pbz.digi4biz` | Flutter, isto | ❓ |
| Addiko Mobile | `com.comtrade.HYPOnetmBankarstvo` | ništa u resursima | ❓ tekstovi vjerojatno sa servera; web kaže da priljev postoji |
| OTPgo | `hr.asseco.android.ae.otp` | APK se nije skinuo | ❓ |

Manje banke (web, `raw/2026-10-06-push-banke-ostale.md`): Partner banka
(`hr.paba.leonus`), Podravska POBAgo (`hr.asseco.android.ae.poba`) i KentBank
(`hr.kentbank.mkent`) službeno navode push za uplate. Agram, IKB, Slatinska,
Samoborska, Karlovačka, Imex, Kovanica: samo SMS. Revolut i Aircash: push postoji.

### Manje banke — APK analiza

Sve imaju mobilno bankarstvo s Firebase pushom (`MESSAGING_EVENT`); tekstovi
obavijesti nisu u resursima (server-driven ili zaseban framework), pa push za
priljev statički nije ni potvrđen ni isključen:

| Banka | Aplikacije (package) | Push SDK | Priljev push |
|---|---|---|---|
| Podravska | `hr.asseco.android.ae.poba` (građani + poslovni) | FCM | ✅ službeno (web) |
| Karlovačka | `hr.kaba.mbankretail`, `hr.kaba.mbankbiz` | FCM | ❓ |
| Agram | `hr.banksoft.mobile.kbzRet`, `…kbzCorp` | FCM | ❓ |
| IKB Umag | `hr.banksoft.mobile.mIKBRet`, `…mIKBCorp` | FCM | ❓ |
| Slatinska | `hr.banksoft.mobile.mSLBRet` | FCM | ❓ (SMS za priljev postoji) |
| Samoborska | `hr.banksoft.mobile.mSaba` | FCM | ❓ |
| Partner | `hr.paba.leonus` | APK nije skinut | ✅ službeno (Play opis) |
| KentBank | `hr.kentbank.mkent` | APK nije skinut | ✅ službeno („u stvarnom vremenu") |
| Imex | `com.dabar.kalix_project.imexpr` | APK nije skinut | ❓ |

Agram, IKB, Slatinska i Samoborska dijele dobavljača (Banksoft) — jedan test
vjerojatno vrijedi za sve četiri.

## Što statička analiza NE može reći

Sam tekst obavijesti (ima li ime uplatitelja i poziv na broj) dolazi u FCM
payloadu sa servera banke. To se vidi samo testom na uređaju. HPB obavijest sadrži
stanje, pa se iznos uvijek može izvesti iz razlike stanja, ali uparivanje s
donacijom bez poziva na broja traži jedinstvene iznose (vidi V免签 obrazac).

## Gotova open-source rješenja (GitHub)

- `pppscn/SmsForwarder` (28k★, BSD-2): SMS + app notifikacije → webhook. Prevelik
  za telefon s bankovnom sesijom.
- `szvone/vmqApk` + `vmqphp` („V免签"): isti obrazac za Alipay/WeChat, s
  uparivanjem po jedinstvenom iznosu.
- `ItsAzni/NotificationForwarder` (MIT), `suriyadi15/qrishook` (MIT, QRIS),
  `karuhun-developer/android-notification-forwarder`: mali, čitljivi, dobri za fork.
- `capcom6/android-sms-gateway` (5,8k★, Apache-2): za SMS varijantu.
