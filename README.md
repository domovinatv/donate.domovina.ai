# donate.domovina.ai

Statički landing za donacije DOMOVINA projektu (`github.com/domovinatv`).
Hrvatski default, engleska verzija pod `/en/`.

## Domena

- Primarno: `donate.domovina.ai`
- Hosting: Cloudflare Pages

## Donacijski kanali

- IBAN (HR bankovni transfer) — TBD
- Stripe Payment Link (kartica) — TBD
- GitHub Sponsors (`github.com/sponsors/domovinatv`) — TBD
- Kripto (Gnosis Safe multi-chain) — TBD

Svi kanali su trenutno **placeholder**. Punimo kad imamo prave podatke.

## Struktura

```
public/
├── index.html        # HR (default)
├── en/index.html     # EN
├── styles.css        # DOMOVINA brand (navy/red/white)
├── favicon.svg
└── og-image.png      # share kartica (TBD)
_redirects            # CF Pages redirects (Accept-Language → /en/)
```

## Lokalni dev

Bez build koraka — otvori `public/index.html` u browseru, ili posluži:

```bash
cd public && python3 -m http.server 8080
# http://localhost:8080
```

## Deploy

CF Pages projekt vezuje se na ovaj repo, build output = `public/`.
Custom domena `donate.domovina.ai` se assigna preko CF dashboard-a.

## Brand

Boje i tipografija prate canonical DOMOVINA brand pattern
(`sms.domovina.ai/webhook/src/views.ts`):

- Navy `#002F6C` — primarna
- Red `#FF0000` — accent
- White `#FFFFFF` — surface
- Muted `#5A6570` — body text
- Font: `system-ui, -apple-system, "Segoe UI", Helvetica, Arial, sans-serif`

## Licenca

MIT (statički site, otvoren za fork).
