// Centralized site data — Spray Foam Insulation Miami (insulation contractor).
// South-Florida / hurricane / humidity focused lead-gen site.

export const SITE = {
  name: "Spray Foam Insulation Miami",
  legalName: "Spray Foam Insulation Miami",
  domain: "sprayfoaminsulationmiami.com",
  url: "https://sprayfoaminsulationmiami.com",
  tagline: "Miami's Trusted Spray Foam Insulation Experts",
  description:
    "Miami's trusted spray foam insulation experts. Reduce energy bills by 50%, protect against humidity & hurricanes. Free quotes. Licensed & insured.",
  phone: "844-967-5247",
  phoneAlt: "844-967-5247",
  phoneHref: "tel:+18449675247",
  phoneAltHref: "tel:+18449675247",
  email: "josh@contractorschoiceagency.com",
  founded: 2008,
  address: {
    street: "123 Insulation Way",
    city: "Miami",
    state: "FL",
    zip: "33101",
    country: "US",
  },
  hours: "Mon–Sat 7AM–6PM, Sun Closed",
  sinceNote: "Since 2008",
  estimateSla: "Same-day response guaranteed",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Service Area", href: "/coverage" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export const SERVICES = [
  {
    slug: "residential",
    title: "Residential Spray Foam Insulation",
    short: "Attics, walls & crawl spaces",
    description:
      "Complete home insulation solutions including attics, walls, and crawl spaces. Keep your Miami home cool and energy-efficient with a seamless thermal envelope that blocks heat and humidity.",
    icon: "Home",
    keywords: [
      "residential spray foam insulation Miami",
      "attic insulation Miami FL",
      "wall cavity insulation South Florida",
      "home insulation contractor Miami",
    ],
  },
  {
    slug: "commercial",
    title: "Commercial Spray Foam Insulation",
    short: "Offices, warehouses & retail",
    description:
      "Industrial-grade insulation for offices, warehouses, and retail spaces. Reduce operating costs with superior thermal protection designed for South Florida's demanding climate.",
    icon: "Building2",
    keywords: [
      "commercial spray foam insulation Miami",
      "warehouse insulation Florida",
      "metal building insulation Miami",
      "cold storage insulation contractor",
    ],
  },
  {
    slug: "open-cell",
    title: "Open Cell Foam Insulation",
    short: "Soundproofing & interior walls",
    description:
      "Cost-effective solution perfect for interior walls and soundproofing. Excellent for noise reduction in Miami condos, with R-3.7 per inch and a softer, flexible feel.",
    icon: "Volume2",
    keywords: [
      "open cell spray foam Miami",
      "soundproof insulation Miami condos",
      "budget spray foam Florida",
      "interior wall insulation Miami",
    ],
  },
  {
    slug: "closed-cell",
    title: "Closed Cell Foam Insulation",
    short: "Moisture barrier & structural",
    description:
      "Top-tier moisture barrier and structural reinforcement. Ideal for Florida's humid climate and hurricane protection, with R-6.5 per inch and a true vapor barrier rated for flood zones.",
    icon: "ShieldCheck",
    keywords: [
      "closed cell spray foam Miami",
      "moisture barrier insulation Florida",
      "hurricane protection insulation Miami",
      "flood zone insulation South Florida",
    ],
  },
] as const;

export const LOCATIONS = [
  {
    slug: "miami-beach",
    name: "Miami Beach",
    region: "Miami-Dade County",
    blurb:
      "Spray foam insulation for Miami Beach homes and condos — coastal humidity control, sound dampening between units, and sealed envelopes that cut AC run-time in waterfront properties.",
  },
  {
    slug: "coral-gables",
    name: "Coral Gables",
    region: "Miami-Dade County",
    blurb:
      "Insulation for Coral Gables residences and businesses — attic and wall retrofits that keep historic and new construction homes cool and energy-efficient year-round.",
  },
  {
    slug: "fort-lauderdale",
    name: "Fort Lauderdale",
    region: "Broward County",
    blurb:
      "Spray foam insulation across Fort Lauderdale and Broward — closed-cell moisture barriers for humid coastal homes and commercial buildings, plus open-cell soundproofing for condos.",
  },
] as const;

export const CREDENTIALS = [
  { label: "Licensed & insured", icon: "ShieldCheck" },
  { label: "SPFA-certified crews", icon: "Award" },
  { label: "Serving Miami since 2008", icon: "CalendarCheck" },
  { label: "Free estimates, same-day", icon: "Timer" },
  { label: "1,000+ Miami homes insulated", icon: "Home" },
  { label: "Bonded contractor", icon: "BadgeCheck" },
] as const;

export const STATS = [
  { value: 50, suffix: "%", label: "Average energy bill savings", prefix: "Up to " },
  { value: 95, suffix: "%", label: "Of radiant heat blocked", prefix: "" },
  { value: 2008, suffix: "", label: "Serving Miami since", prefix: "" },
  { value: 1000, suffix: "+", label: "Miami homes insulated", prefix: "" },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "The Miami Spray Foam team transformed our energy bills. Our AC used to run constantly in the summer — now it cycles normally and our home stays comfortable. Best investment we've made in 20 years!",
    name: "Maria Rodriguez",
    role: "Homeowner",
    location: "Coral Gables, FL",
  },
  {
    quote:
      "We had closed-cell foam installed in our Miami Beach condo and the difference is night and day. No more humidity, the unit stays cool, and our monthly electric bill dropped by almost half. Professional crew from start to finish.",
    name: "James Alvarez",
    role: "Condo owner",
    location: "Miami Beach, FL",
  },
  {
    quote:
      "After hurricane season left moisture in our attic, Miami Spray Foam sealed the whole space with closed-cell. The house feels tighter, quieter, and we sleep better knowing the roof deck is reinforced. Highly recommend.",
    name: "Sophia Bennett",
    role: "Homeowner",
    location: "Fort Lauderdale, FL",
  },
] as const;
