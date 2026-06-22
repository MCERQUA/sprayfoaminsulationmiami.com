# Design System — "Atlantic Coastal"

A light, bright, coastal-corporate visual identity for Spray Foam Insulation Miami. Distinct from tucsonfoam.com (Sonoran Warmth / terracotta) and from every other site in the batch. No dark hero. Cool aquatic palette.

## Palette (exact hexes)
| Token (internal label) | Hex | Role |
|-------|-----|------|
| `mist` (page bg) | `#F2F8FA` | Page background — pale seafoam mist |
| `foam` (alt bg) | `#E4F1F4` | Alternate section background |
| `white` | `#FFFFFF` | Cards |
| `ocean` (primary) | `#0C5A6B` | Brand primary — deep Atlantic teal |
| `ocean.dark` | `#083F4D` | Hover / pressed |
| `ocean.light` | `#1C8FA3` | Gradient companion |
| `lagoon` (secondary) | `#12A4A0` | Tropical lagoon teal — trust / environment |
| `lagoon.dark` | `#0C7A77` | |
| `coral` (accent) | `#FF6B5B` | Coral accent — energy, highlights, dividers |
| `coral.dark` | `#E2503F` | |
| `ink` (headings) | `#0B2B33` | Deep navy-teal heading text |
| `slate` (body) | `#33474D` | Body text |
| `steel` (muted) | `#5E7178` | Muted text |
| `line` (borders) | `#CFE3E8` | Cool mist border |

## Typography
- **Headings:** Outfit (weights 400/500/600/700/800) via `next/font/google`. Geometric, clean, modern coastal. CSS var `--font-heading`, Tailwind `font-heading`.
- **Body:** DM Sans via `next/font/google`. Friendly, readable. CSS var `--font-body`, Tailwind `font-body`.
- **Letter-spacing:** headings `-0.02em`.

## Motif & Shape Language
- **Porthole / circular cutout shapes:** rounded cards and image frames (large radii), porthole-style circular badges.
- **Wave horizon bands:** thin gradient wave stripes (`wave-band` utility) in ocean/lagoon/coral — section dividers and top accents.
- **Wave / palm line motifs:** subtle inline SVG waveforms in hero background and section dividers (replaces the saguaro motif).
- **Pill buttons** full-pill-radius; primary = ocean, secondary = white with line border, lagoon = lagoon fill, coral accents sparingly.
- **Pill eyebrow labels** small uppercase tracking-wide pills.
- **Cool radial glows** subtle radial gradients (lagoon + ocean at low opacity).

## Components (same class surface as sister sites, remapped values)
- `.btn-primary` ocean fill / `.btn-secondary` white+line / `.btn-sage`→lagoon / `.btn-ghost`
- `.card-warm` white + line border + soft shadow + lift; `.card-arch`→rounded image frame
- `.pill-clay`→ocean / `.pill-sage`→lagoon / `.pill-gold`→coral
- `.eyebrow` ocean label; `.h-section` large ink heading; `.lead` steel supporting text
- `.bg-sonoran`→coastal-mist bg utility; `.horizon-band`→`.wave-band` gradient

## Spacing & Rhythm
- Generous vertical padding (sections `py-20 md:py-28`).
- Container: `container-tight` (max-w-6xl), `container-wide` (max-w-7xl).
- Card radius 1.5–2.5rem.

## Imagery Style
- Photorealistic, bright tropical coastal light.
- South Florida concrete-block (CBS) construction, impact windows, palm trees, turquoise water.
- SPF crews in PPE, spray rigs at coastal jobsites, CBS wall / rebar foam application, conditioned attics.
- Cool white / teal / aqua palette across imagery.
- NO emoji. NO cartoon. NO dark/moody. NO desert/Southwest imagery.

## Anti-patterns (forbidden)
- Dark hero, charcoal backgrounds.
- Terracotta / desert / Sonoran tones (that's tucsonfoam).
- Blue/purple/pink generic gradients (this is teal-driven).
- External icon font CDNs (lucide-react inline SVG only).
- Reusing another site's design system.

## Distinctiveness check
- Deep teal `#0C5A6B` + lagoon `#12A4A0` + coral `#FF6B5B` trio = no other batch site uses this.
- Outfit + DM Sans pairing = unique typography.
- Wave-band dividers + porthole motifs = unique to this site.
- Visually opposite of tucsonfoam's warm desert system.
