# QA — sprayfoaminsulationmiami.com

**Date:** 2026-06-17
**Build status:** ✅ `npm run build` green (Next.js 15.5.19, 28 routes, all prerendered)
**Stack:** Next.js 15 (App Router) · React 19 · TypeScript · Tailwind · motion · lenis · lucide-react · MDX-style blog (gray-matter + reading-time)

## Design — "Atlantic Coastal" (distinct from tucsonfoam.com)
- **Palette:** deep teal `#0C5A6B` (ocean) + lagoon `#12A4A0` + coral `#FF6B5B`, mist `#F2F8FA` bg, ink `#0B2B33` headings, cool mist `#CFE3E8` borders. (Tucsonfoam = terracotta/sage/gold — fully different.)
- **Type:** Outfit (headings) + DM Sans (body). (Tucsonfoam = Sora + Inter.)
- **Motif:** wave-band dividers (lagoon→coral), porthole/rounded image frames, wave SVG in hero (replaces saguaro). Coastal radial glows.
- **Imagery:** 8 generated South Florida images (CBS construction, palm trees, turquoise water, coastal homes, hurricane-country crews). NO desert imagery.

## Quality gate checklist
- [x] Homepage ≥ 6 sections — **10 sections**
- [x] ≥ 5 service pages — **8 service pages** incl. **windstorm-named-storm** (FL-unique, the HVHZ/Citizens/named-storm line most agents can't place)
- [x] Blog live with ≥ 3 posts — **4 posts** (CPL mold/humidity, hurricane-season builders risk, hard FL market, salt-air equipment)
- [x] ≥ 2 Netlify-ready forms — **quote + contact** (honeypot, form-name, webhook `site=sprayfoaminsulationmiami.com`), `netlify.toml` notifications + `public/__forms.html`
- [x] ≥ 8 generated images — **8 images**, lucide-react inline SVG icons only
- [x] Schema + sitemap + robots + llms.txt — InsuranceAgency (Miami geo/areaServed), InsuranceService + FAQPage + Breadcrumb (services), BlogPosting (posts), InsuranceService (locations); sitemap/robots/llms.txt
- [x] `npm run build` green
- [x] Light, corporate, UNIQUE design (Atlantic Coastal — distinct from tucsonfoam and all batch sites)
- [x] Responsive + interactive (motion, lenis, sticky nav, counters, FAQ accordion, mobile menu)

## Smoke test (production server)
All 15 spot-checked routes returned **200** (incl. `/services/windstorm-named-storm`, `/locations/miami`, `/locations/fort-lauderdale`, all blog posts, sitemap, robots).

## Routes (28)
- Static: `/`, `/about`, `/blog`, `/contact`, `/coverage`, `/privacy`, `/quote`, `/services`, `/terms`, `/robots.txt`, `/sitemap.xml`, `/_not-found`
- SSG: `/blog/[slug]` ×4, `/locations/[slug]` ×2 (Miami, Fort Lauderdale), `/services/[slug]` ×8

## Follow-up
- Per-domain GitHub repo `MCERQUA/sprayfoaminsulationmiami.com` + Netlify: manager (josh-desktop@mesh) provisions repo from committed code; host connects Netlify. Repo is git-committed locally and ready to push.
