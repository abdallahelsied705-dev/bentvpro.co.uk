# IPTV UK (bentvpro.co.uk)

English-only (en-GB) Next.js 16 site selling **IPTV Polska** to Polish speakers living in the UK.
Brand shown on the site: **IPTV UK**. Focus keywords: "IPTV Polska", "IPTV Poland", "Polish IPTV UK".
Built from the ~/iptvpoland template (Polish half removed, all copy rewritten for the UK market,
new red/navy palette and logo).

## Run
    npm install
    npm run dev        # http://localhost:3000
    npm run build && npm start

## Where things live
- Prices (GBP, 1–4 devices, 1–24 months), contact details, brand: `lib/site.ts`
- Routes: `lib/routes.ts`; page copy lives in each component (`const copy = { en: ... }`)
- Legal drafts: `lib/legal.ts` (UK GDPR / Consumer Contracts wording, not legal advice)
- Launch date used for every visible/structured date: `LAST_MODIFIED` in `lib/seo.ts` (2026-10-17)
- Articles: `content/blog/en/*.md` (front matter: title, description, date; optional updated, tags)

## Before going live
- Set `NEXT_PUBLIC_SITE_URL` to the host the hosting serves (default `https://bentvpro.co.uk`, apex).
- Trial form delivery: set `TRIAL_WEBHOOK_URL` or `RESEND_API_KEY` + `TRIAL_TO_EMAIL`; otherwise visitors are sent to WhatsApp.
- `lib/reviews.ts` is empty on purpose: add real reviews only.
- Add Google Search Console and submit `/sitemap.xml`.
