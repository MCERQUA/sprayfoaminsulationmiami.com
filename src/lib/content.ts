// Rich, niche-accurate content blocks for Spray Foam Insulation Miami.
// Insulation contractor (lead-gen) — South Florida / hurricane / humidity focused.
// This is a trade-service (insulation contractor) lead-gen site.

import {
  PhoneCall, ClipboardCheck, SprayCan, BadgeCheck,
  Home, Building2, Volume2, ShieldCheck,
  ThermometerSun, Droplets, Wind, Layers,
  Timer, Banknote, MapPin,
} from "lucide-react";

/* ============================================================
   PROCESS — insulation installation, not policy binding
   ============================================================ */
export const PROCESS = [
  {
    step: "01",
    icon: PhoneCall,
    title: "Request your free estimate",
    description:
      "Call us or fill out the quote form. Tell us about your property, the area you want insulated, and whether you're leaning open-cell or closed-cell — or let us recommend the right foam for your space.",
  },
  {
    step: "02",
    icon: ClipboardCheck,
    title: "On-site assessment & proposal",
    description:
      "We measure the space, inspect for moisture or air-leakage issues, and deliver a detailed written proposal — usually same day, always within 24 hours. Transparent pricing, no hidden fees.",
  },
  {
    step: "03",
    icon: SprayCan,
    title: "Professional installation",
    description:
      "Our SPFA-certified crew arrives on schedule, preps the area, and applies high-grade spray foam to spec — sealing every gap and crack for a continuous thermal envelope that lasts a lifetime.",
  },
  {
    step: "04",
    icon: BadgeCheck,
    title: "Final walkthrough & warranty",
    description:
      "We walk the job with you, confirm full coverage, clean the work area, and stand behind the install. Your spray foam insulation comes with a workmanship warranty and ongoing support.",
  },
] as const;

/* ============================================================
   WHY CHOOSE US — insulation contractor differentiators
   ============================================================ */
export const WHY_CHOOSE = [
  {
    icon: BadgeCheck,
    title: "Certified Professionals",
    description:
      "Our team holds SPFA certification and follows industry best practices for every installation. We use high-grade materials and proven techniques to deliver a thermal envelope that performs for decades.",
  },
  {
    icon: Timer,
    title: "Same-Day Estimates",
    description:
      "Request a quote today and receive your detailed proposal within 24 hours — often the same day. No waiting, no pressure, just clear pricing and a clear plan for your Miami property.",
  },
  {
    icon: Banknote,
    title: "Competitive Pricing",
    description:
      "Transparent pricing with no hidden fees. We'll beat any written quote from licensed competitors. You get top-tier insulation and honest value — the kind of dealing that built our reputation since 2008.",
  },
  {
    icon: MapPin,
    title: "Local Miami Experts",
    description:
      "We understand South Florida's unique climate challenges and building codes. From HVHZ wind requirements to salt-air exposure and hurricane-season moisture, we spec insulation built for Miami.",
  },
] as const;

/* ============================================================
   HOMEPAGE FAQ — accurate spray foam insulation questions
   ============================================================ */
export const HOME_FAQS = [
  {
    q: "How much does spray foam insulation cost in Miami?",
    a: "Pricing depends on the area being insulated, the foam type (open-cell vs closed-cell), and accessibility. As a rough guide, open-cell runs about $0.50–$1.00 per board foot and closed-cell $1.00–$1.75 per board foot installed. A typical single-family attic in Miami falls in the $2,500–$5,500 range for open-cell and higher for closed-cell. We provide a free, itemized written estimate — usually same day — so you know your exact cost before any work begins.",
  },
  {
    q: "Open-cell vs closed-cell spray foam — which do I need?",
    a: "It depends on where it goes and what you're solving for. Open-cell (R-3.7/in) is softer, lower-cost, and excellent for soundproofing interior walls, condos, and attics where vapor can dry to the inside. Closed-cell (R-6.5/in) is dense, rigid, acts as a true vapor barrier, reinforces walls and roof decks, and is the right choice for crawl spaces, metal buildings, flood zones, and hurricane-exposed assemblies. We'll recommend the right product for each area of your home.",
  },
  {
    q: "Will spray foam really lower my energy bills, and by how much?",
    a: "Yes — for most Miami homes it's the single highest-impact upgrade you can make. Properly installed spray foam creates a continuous air seal that blocks the convective heat gain driving your AC, and homeowners typically report 30–50% reductions in cooling costs. The savings usually pay back the investment in 3–6 years, after which the lower bills are money in your pocket for the life of the home.",
  },
  {
    q: "Does spray foam help with hurricanes, humidity, and mold?",
    a: "Closed-cell spray foam does, in three ways. First, it's a Class II vapor retarder and a genuine moisture barrier, which helps keep South Florida's humidity out of your walls and attic. Second, closed-cell foam is dense and rigid and has been shown to add structural reinforcement to wall and roof assemblies. Third, by sealing the envelope it reduces the warm, moist air and condensation that feed mold growth. For hurricane and flood-zone exposure, closed-cell is the product we recommend.",
  },
  {
    q: "How long does spray foam insulation last?",
    a: "Spray polyurethane foam is one of the longest-lasting insulation products available. A properly installed application typically lasts the lifetime of the building — 30 to 80+ years — without settling, sagging, or losing R-value the way fiberglass and cellulose do. It does not degrade under normal conditions, which is why it's backed by long workmanship warranties.",
  },
  {
    q: "How long does installation take?",
    a: "Most residential jobs are completed in one day. A full single-family attic is typically a one-day install; whole-home new construction or large commercial projects may take two to three days. The foam cures within minutes of application, and the area is usually re-occupiable within 24 hours. We'll give you a clear timeline in your written estimate.",
  },
] as const;

/* ============================================================
   SERVICE DETAIL — per-service editorial content (4 services)
   ============================================================ */
export interface ServiceDetail {
  heroBlurb: string;
  whatsCovered: string[];
  whoItsFor: string[];
  whyCca: string[];
  faqs: { q: string; a: string }[];
}

export const SERVICE_DETAIL: Record<string, ServiceDetail> = {
  residential: {
    heroBlurb:
      "Complete home insulation for Miami properties — attics, walls, crawl spaces, and new construction. A seamless spray foam envelope keeps South Florida's heat and humidity out, lowers your cooling bills, and makes every room more comfortable year-round.",
    whatsCovered: [
      "Attic and roof-deck insulation (open-cell or closed-cell, vented or unvented)",
      "Exterior and interior wall cavities, including CBS and frame construction",
      "Crawl spaces and raised floors with closed-cell moisture barriers",
      "Whole-home new construction and major remodel insulation packages",
      "Garage and bonus-room conditioning for usable, comfortable space",
      "Air-sealing around penetrations, rim joists, and attic hatches",
    ],
    whoItsFor: [
      "Miami homeowners with high cooling bills or uneven room temperatures",
      "Owners of older homes with fiberglass or cellulose that has settled or failed",
      "Buyers and builders of new construction wanting top-tier performance from day one",
      "Properties with humidity, draft, or comfort complaints",
    ],
    whyCca: [
      "SPFA-certified crews that detail every gap, crack, and penetration",
      "Product recommendations matched to each assembly and Miami's climate",
      "Clean, on-time installation backed by a workmanship warranty",
    ],
    faqs: [
      {
        q: "Should I insulate my attic with open-cell or closed-cell foam?",
        a: "For most Miami attics the choice comes down to moisture strategy and budget. Open-cell at the roof deck gives you excellent air-sealing and sound control at a lower cost, and works well when the attic is brought into the conditioned envelope and properly managed for humidity. Closed-cell gives you a true vapor barrier and structural reinforcement and is preferred for flood-exposed assemblies and metal roof decks. We'll walk your attic and recommend the right product for your home.",
      },
      {
        q: "Will insulating my home really lower my energy bills?",
        a: "For the great majority of Miami homes, yes — significantly. Spray foam creates a continuous air seal that blocks the convective heat gain that drives your AC. Homeowners typically see 30–50% reductions in cooling costs, with payback in roughly 3–6 years depending on the scope and your current insulation.",
      },
    ],
  },
  commercial: {
    heroBlurb:
      "Industrial-grade spray foam insulation for offices, warehouses, retail spaces, and metal buildings across Miami-Dade and Broward. Lower operating costs, control humidity, and protect inventory with a thermal envelope engineered for South Florida's demanding commercial environment.",
    whatsCovered: [
      "Metal building and pre-engineered structure insulation (closed-cell preferred)",
      "Warehouse and distribution ceilings and walls",
      "Office and retail thermal envelopes and sound control",
      "Cold storage and conditioned warehousing with high-R closed-cell",
      "Roof-deck insulation that lowers HVAC load and interior temperatures",
      "Humidity and condensation control for moisture-sensitive operations",
    ],
    whoItsFor: [
      "Building owners and facility managers cutting operating costs",
      "Warehouses and cold-storage operators protecting inventory from heat and humidity",
      "Retail and office tenants improving comfort without replacing HVAC",
      "Developers and GCs insulating new commercial construction to code",
    ],
    whyCca: [
      "Experience across metal, CBS, tilt-wall, and cold-storage commercial builds",
      "Scheduling and scope built around business operations — minimal disruption",
      "Documentation and specs that satisfy commercial build requirements",
    ],
    faqs: [
      {
        q: "How much can commercial spray foam lower my operating costs?",
        a: "That depends on the building, but for South Florida metal and warehouse structures the savings are often substantial — commonly 30–50% on HVAC energy, plus reduced maintenance from lower equipment run-time. Closed-cell roof-deck insulation is one of the highest-ROI upgrades available for hot-climate commercial buildings.",
      },
      {
        q: "Can you insulate a metal building without interrupting my operations?",
        a: "In most cases, yes. We plan scheduling around your hours, section off the work area, and coordinate so daily operations can continue. Spray foam cures within minutes, and we isolate HVAC and ventilation so odor and overspray are controlled. We'll review logistics with you during the site walk.",
      },
    ],
  },
  "open-cell": {
    heroBlurb:
      "Open-cell spray foam is the cost-effective choice for interior walls, attics, and soundproofing. Softer and more flexible than closed-cell, it expands to fill cavities and delivers excellent noise reduction — perfect for Miami condos and shared-wall construction where sound matters.",
    whatsCovered: [
      "Interior wall and ceiling cavities for sound dampening and air-sealing",
      "Attic and roof-deck applications (in properly designed assemblies)",
      "Condo and multi-family demising walls and floor separations",
      "Bonus rooms, media rooms, and home offices needing quiet",
      "Floor systems and knee-wall air-sealing",
      "Budget-conscious whole-home packages where vapor control is managed separately",
    ],
    whoItsFor: [
      "Miami condo and townhouse owners dealing with neighbor noise",
      "Homeowners wanting strong performance at a lower cost than closed-cell",
      "Media room, bedroom, and office soundproofing projects",
      "Attic air-sealing where the assembly is designed to dry inward",
    ],
    whyCca: [
      "Accurate recommendations on where open-cell is the right product — and where it isn't",
      "Detailed installation so the assembly can dry properly in humid South Florida",
      "Competitive pricing with transparent, itemized proposals",
    ],
    faqs: [
      {
        q: "Is open-cell foam good for soundproofing?",
        a: "Yes — open-cell's soft, porous structure absorbs sound, which makes it one of the best cost-per-result options for reducing airborne noise between rooms, units, and floors. It won't stop low-frequency impact noise on its own, but for condo demising walls, shared bedrooms, and media rooms it makes a noticeable difference.",
      },
      {
        q: "Why is open-cell less expensive than closed-cell?",
        a: "Open-cell foam is lower density and expands more, so it covers more area per unit of material — that lowers the cost per board foot. It still delivers excellent air-sealing and an R-value of about R-3.7 per inch. The trade-off is that it is vapor-permeable and softer, so it isn't a moisture barrier and isn't the right product for every assembly. We'll tell you straight where it fits and where closed-cell is the better call.",
      },
    ],
  },
  "closed-cell": {
    heroBlurb:
      "Closed-cell spray foam is Miami's top-tier insulation choice. Dense, rigid, and a true vapor barrier, it delivers the highest R-value per inch (R-6.5), resists storm-driven moisture, and adds structural reinforcement to walls and roof decks — the ideal product for Florida's humidity, hurricanes, and flood zones.",
    whatsCovered: [
      "Roof decks and unvented attics with a true vapor barrier",
      "Exterior wall assemblies in CBS, frame, and metal construction",
      "Crawl spaces and raised floors exposed to ground moisture",
      "Flood-zone and hurricane-exposed structures needing structural reinforcement",
      "Metal buildings, cold storage, and high-humidity interiors",
      "Continuous insulation (CI) layers for code-compliant new construction",
    ],
    whoItsFor: [
      "Miami homeowners in flood zones or hurricane-exposed areas",
      "Properties with humidity, condensation, or moisture complaints",
      "New construction aiming for top-tier performance and code compliance",
      "Metal building, warehouse, and cold-storage owners",
    ],
    whyCca: [
      "The product we recommend most for South Florida's climate and storm exposure",
      "Installed to the correct lift thickness and cure to avoid off-gassing issues",
      "Documented to support HVHZ and flood-zone building requirements",
    ],
    faqs: [
      {
        q: "Does closed-cell foam really help with hurricanes?",
        a: "Closed-cell foam is rigid and bonds tightly to framing and roof decks, which has been shown to add structural reinforcement to those assemblies. It's also a Class II vapor retarder and resists storm-driven water, which helps protect the envelope during and after a storm. It's the insulation product we recommend most for hurricane-exposed and flood-zone properties in South Florida.",
      },
      {
        q: "Why is closed-cell the right choice for humidity and mold?",
        a: "Because it acts as a true vapor barrier, closed-cell foam keeps South Florida's warm, moist outside air from entering your walls and attic, where it would otherwise hit cool surfaces and condense — the exact condition that feeds mold. By sealing and vapor-blocking the envelope, closed-cell dramatically reduces the moisture and condensation that cause mold and rot.",
      },
    ],
  },
};

/* ============================================================
   SERVICE AREA — South Florida regions
   ============================================================ */
export const FL_REGIONS = [
  { name: "Miami-Dade County", note: "Miami, Miami Beach, Coral Gables, Hialeah, Doral — full residential and commercial insulation" },
  { name: "Broward County", note: "Fort Lauderdale, Hollywood, Pompano Beach, Pembroke Pines — coastal homes and condos" },
  { name: "Palm Beach County", note: "West Palm Beach, Boca Raton, Delray Beach — waterfront and luxury residential" },
];

export const SERVICE_AREA_CITIES = [
  "Miami", "Miami Beach", "Coral Gables", "Hialeah", "Doral",
  "Fort Lauderdale", "Hollywood", "Pompano Beach",
  "Boca Raton", "West Palm Beach", "Delray Beach",
];

/* ============================================================
   QUOTE FORM SELECT OPTIONS — insulation quote request
   ============================================================ */
export const QUOTE_PROPERTY_TYPES = [
  "Residential",
  "Commercial",
  "New Construction",
];

export const QUOTE_AREA_OPTIONS = [
  "Attic",
  "Walls",
  "Crawl Space",
  "Whole home",
  "New build",
  "Not sure",
];

export const QUOTE_FOAM_TYPES = [
  "Open cell",
  "Closed cell",
  "Not sure",
];
