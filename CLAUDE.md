# CLAUDE.md

Project-specific guidance za Claude Code agenta u ovom repu.

## Što je ovaj repo

**donate.domovina.ai** = statički donacijski landing za DOMOVINA projekt.

Centralno mjesto kroz koje javnost (HR primarno, EN sekundarno) može
podržati cijeli `github.com/domovinatv` ekosistem (domovina.tv podcast,
domovina-rag, MCP serveri, sms.domovina.ai, izbori.domovina.ai, itd.).

## Hard-defined odluke

| Odluka | Vrijednost | Razlog |
|---|---|---|
| Stack | čisti HTML/CSS, bez framework-a | brzi load, povjerenje, nula JS surprises |
| Hosting | Cloudflare Pages | konzistentno s ostatkom DOMOVINA infrastrukture |
| Domena | `donate.domovina.ai` | EN-friendly, subdomena .ai apex-a (apex drži Flutter app, ne mi) |
| Default jezik | hrvatski (`/`) | primarna publika |
| EN verzija | `/en/` | internacionalni domet (vizija) |
| Brand | navy/red/white iz `sms.domovina.ai/views.ts` | canonical DOMOVINA pattern |

## Donacijski kanali (planirani)

1. **IBAN** — najvažniji za HR publiku
2. **Stripe Payment Link** — kartica, bez backenda
3. **GitHub Sponsors** — `github.com/sponsors/domovinatv`
4. **Kripto (Gnosis Safe)** — multi-chain (ETH/Polygon/Gnosis)

Svi su trenutno **placeholder TBD** dok ne stignu pravi podaci.

## Konvencije

- Sav user-facing tekst u `index.html` = **hrvatski** (bez srbizama, vidi feedback_hrvatski_tekst_strict u core memoriji)
- EN copy ide samo u `/en/index.html`
- HTML element identifiers (class, id) = engleski
- Commit poruke: konvencionalni commits (`feat:`, `fix:`, `chore:`, `docs:`, `style:`)

## Što NE raditi

- **Nemoj** dodavati framework (React, Vue, Astro) — statički HTML je point.
- **Nemoj** dodavati JS koji nije nužan (max: language switcher, copy-to-clipboard za IBAN).
- **Nemoj** ubacivati pravi IBAN/Gnosis adrese bez eksplicitne potvrde — koristi placeholder dok user ne pošalje.
- **Nemoj** kopirati brand vrijednosti — referenciraj `sms.domovina.ai/webhook/src/views.ts` ako trebaš provjeriti detalje.

## Lokalni dev

```bash
cd public && python3 -m http.server 8080
# http://localhost:8080
```

## Deploy

CF Pages projekt + GitHub integracija. Push u `main` → auto deploy.
