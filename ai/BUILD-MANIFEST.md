# BUILD-MANIFEST — sprayfoaminsulationmiami.com

**Rebuild date:** 2026-06-18
**Rebuild type:** CONTENT REBUILD — insurance framing → spray foam INSULATION SERVICE (lead-gen)
**Build status:** `npm run build` GREEN (Next.js 15.5.19, 26 routes, all prerendered as static/SSG)
**Push status:** Pushed. Remote HEAD `471051d` (newer than prior `8b045b4`).

---

## What changed

The site was wrongly built as a **spray foam INSURANCE** site (insurance services, FAQs for spray
foam *contractors*, InsuranceAgency/InsuranceService JSON-LD). It is now a **spray foam INSULATION
SERVICE** lead-gen site for Miami homeowners/businesses — matching the live original. ZERO insurance
language anywhere. Stack, design system, section component scaffolding, routes, and blog pipeline
were all preserved; only the copy and data were rewritten.

## Homepage composition (≥6 sections, all insulation)

Navbar · Hero · TrustBar · ServicesGrid · UnderstandingSprayFoam (How it Protects + energy-flow
infographic + Open vs Closed types comparison + types infographic) · WhyChooseUs · Process ·
CoverageMap (South Florida service area) · Stats · Testimonials · FAQ · FinalCTA · Footer.

All scroll reveals via `motion` + the existing `FadeIn`/`Counter` animation components (actually used).

## Services (4, insulation) — `/services/[slug]`

| Slug | Title |
|---|---|
| `residential` | Residential Spray Foam Insulation |
| `commercial` | Commercial Spray Foam Insulation |
| `open-cell` | Open Cell Foam Insulation |
| `closed-cell` | Closed Cell Foam Insulation |

Each has full editorial detail (heroBlurb, what's included, who it's for, why us, FAQs) in
`src/lib/content.ts` `SERVICE_DETAIL`. Old insurance slugs (`general-liability`,
`contractors-pollution-liability`, `workers-compensation`, `commercial-auto`,
`inland-marine-equipment`, `professional-liability`, `builders-risk`, `windstorm-named-storm`)
removed entirely.

## Blog posts (5 new insulation posts; 4 insurance posts deleted)

Deleted: `florida-insurance-market-spray-foam.mdx`, `hurricane-season-spray-foam-builders-risk.mdx`,
`miami-spray-foam-pollution-liability.mdx`, `salt-air-spray-rig-equipment-coverage.mdx`.

New (800–1200 words each, Miami/Florida angle):
1. `spray-foam-insulation-miami-cost.mdx` — cost & ROI.
2. `open-cell-vs-closed-cell-spray-foam-miami.mdx` — which foam for attics/walls/flood zones.
3. `does-spray-foam-lower-energy-bills-miami.mdx` — 30–50% savings, AC run-time.
4. `spray-foam-hurricane-humidity-protection-florida.mdx` — moisture barrier, mold, structural.
5. `best-attic-insulation-miami-fl.mdx` — attic insulation deep-dive.

Frontmatter: `title, description, date, category, image, author` (matches `src/lib/blog.ts`).

## Images used (synced originals, already in `public/images/`)

- Hero background: `spray-foam-application.jpg`
- Energy infographic (How it Protects): `spray-foam-energy-flow-original.jpg`
- Types infographic (Open vs Closed): `spray-foam-open-vs-closed-cell-original.jpg`
- Supporting: `attic-foam.jpg` (service pages), `closed-cell-foam.jpg`, `coastal-home.jpg`
  (service-area), `crew-portrait.jpg` (WhyUs/About), `cta-interior.jpg`, `spray-rig.jpg`, `og-image.jpg`.
- Meaningful `alt` text on every image.

## Schema (JSON-LD) — insulation service, no InsuranceService

- `src/app/layout.tsx`: `@type: ["HomeAndConstructionBusiness", "LocalBusiness"]` with `areaServed`
  (Miami-Dade/Broward/Palm Beach), `address`, `telephone`, `openingHoursSpecification`, `priceRange`.
- `src/app/services/[slug]/page.tsx`: `Service` + `HomeAndConstructionBusiness` provider.
- `src/app/locations/[slug]/page.tsx`: `Service` + `HomeAndConstructionBusiness` provider.
- `src/app/blog/[slug]/page.tsx`: `BlogPosting` with `Organization` publisher.
- `FAQPage` + `BreadcrumbList` on service, location, blog, coverage, about, services pages.
- Removed every `InsuranceService` / `InsuranceAgency` / `insuranceServiceType`.

## Quote form (`/quote` + inline) — insulation quote request

Fields: Full name, Phone, Email, Property address/City, Property type (Residential/Commercial/
New Construction), Area to insulate (Attic/Walls/Crawl Space/Whole home/New build/Not sure), Foam
type (Open cell/Closed cell/Not sure), Message. Netlify attributes + fetch-to-webhook
`https://josh.jam-bot.com/social-api/api/leads/webhook/netlify?tenant=josh&site=sprayfoaminsulationmiami.com`.
Honeypot. CTA "Get My Free Estimate."

## NAP / brand

- Name: Spray Foam Insulation Miami (logo: "Miami Spray Foam")
- Phone: (305) 123-4567
- Address: 123 Insulation Way, Miami, FL 33101
- Hours: Mon–Sat 7AM–6PM, Sun Closed
- Since 2008; footer blurb matches spec.

## QA — insurance-language grep (must be clean)

Command:
```
grep -rilE "insurance|liability coverage|builders risk|pollution liability|worker'?s comp|premium|policy limit|inland marine|E&S|non-renewal|certificate of insurance|coverage limit|deductible|carrier|admitted market|InsuranceService|InsuranceAgency|insuranceServiceType" src
```
**Result: EMPTY (no matches).** Grep is clean.

The only `insured` occurrences are the acceptable trades phrase "Licensed & insured" / "Licensed,
bonded & insured" describing the contractor (permitted per spec). The webhook host
`josh.jam-bot.com` is the only other expected external string.

## Build result

```
✓ Compiled successfully in 20.1s
✓ Generating static pages (26/26)
Route (app) — 26 routes, all prerendered (○ Static / ● SSG)
  /  /about  /blog  /blog/[slug] (5 posts)  /contact  /coverage
  /locations/[slug] (3)  /privacy  /quote  /services  /services/[slug] (4)
  /sitemap.xml  /robots.txt  /terms  /_not-found
```
Final success line: `✓ Generating static pages (26/26)` — exit 0.

## Push result

- Remote set to `git@github.com:MCERQUA/sprayfoaminsulationmiami.com.git`.
- Pushed via deploy key: `8b045b4..471051d HEAD -> main`.
- Verified: `git ls-remote ... HEAD` returns `471051d93b69a06a5950d9b9df259f8cd7f0145e`
  (newer than prior `8b045b4`).

## Files rewritten (all insulation framing)

- `src/lib/site.ts` — SITE, SERVICES (4), LOCATIONS (3), CREDENTIALS, STATS, TESTIMONIALS, NAV_LINKS.
- `src/lib/content.ts` — PROCESS, WHY_CHOOSE, HOME_FAQS, SERVICE_DETAIL (4), FL_REGIONS,
  SERVICE_AREA_CITIES, quote form option arrays.
- `src/components/sections/*` — Hero, ServicesGrid, UnderstandingSprayFoam, WhyChooseUs, Process,
  CoverageMap, FinalCTA, TrustBar, Testimonials, FAQ, Navbar, Footer, CTABand (defaults).
- `src/app/layout.tsx` — metadata + LocalBusiness/HomeAndConstructionBusiness JSON-LD.
- `src/app/page.tsx` — homepage composition (unchanged structure; sections now insulation).
- `src/app/services/page.tsx`, `src/app/services/[slug]/page.tsx` — new slugs, Service schema.
- `src/app/quote/page.tsx` — insulation quote form.
- `src/app/blog/page.tsx`, `src/app/blog/[slug]/page.tsx` — insulation copy, Organization publisher.
- `src/app/about/page.tsx`, `src/app/contact/page.tsx`, `src/app/coverage/page.tsx`,
  `src/app/locations/[slug]/page.tsx` — insulation copy + schema.
- `src/app/privacy/page.tsx`, `src/app/terms/page.tsx` — rewritten for insulation contractor.
- `src/app/not-found.tsx` — CTA label.
- `src/content/posts/*` — 4 insurance deleted, 5 insulation written.

## Preserved (not changed)

- Stack: Next.js 15 + React 19 + TS + Tailwind + `motion` + `lenis` + `lucide-react` + MDX blog.
- Light corporate design system: `globals.css`, `tailwind.config.ts`, `src/lib/fonts.ts`.
- `src/lib/{blog,markdown,utils}.ts`, `src/app/{robots,sitemap}.ts` (auto-updates from site.ts),
  `netlify.toml` (webhook site= already correct), `package.json`, `public/images/`.
