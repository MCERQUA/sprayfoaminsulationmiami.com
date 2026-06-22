import type { Metadata } from "next";
import Link from "next/link";
import {
  Home, Building2, Volume2, ShieldCheck, ArrowRight, Phone, Star, CheckCircle2,
  MapPin, ThermometerSun, Wind, Droplets, Layers, Quote, Clock,
  BadgeCheck, CalendarCheck, Timer,
} from "lucide-react";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Stats } from "@/components/sections/Stats";
import { FAQ } from "@/components/sections/FAQ";
import { FadeIn } from "@/components/animations/FadeIn";
import { SITE, SERVICES, CREDENTIALS, LOCATIONS, TESTIMONIALS } from "@/lib/site";
import { PROCESS, WHY_CHOOSE, FL_REGIONS, SERVICE_AREA_CITIES } from "@/lib/content";

export const metadata: Metadata = {
  title: "Spray Foam Insulation Miami | Miami's #1 Insulation Contractor",
  description:
    "Miami's #1 rated spray foam insulation contractor. Cut energy bills up to 50%, block South Florida humidity, and reinforce your home against hurricane moisture. Free estimates across Miami-Dade, Broward & Palm Beach.",
  alternates: { canonical: SITE.url },
};

const SERVICE_ICONS = { Home, Building2, Volume2, ShieldCheck } as const;

const CREDENTIAL_ICONS: Record<string, React.ComponentType<{ className?: string; strokeWidth?: number }>> = {
  ShieldCheck,
  Award: BadgeCheck,
  CalendarCheck,
  Timer,
  Home,
  BadgeCheck,
};

/* How spray foam protects a Miami home — paired with the energy-flow infographic. */
const PROTECTION_POINTS = [
  {
    icon: ThermometerSun,
    title: "Blocks 95% of radiant heat transfer",
    body: "A seamless air barrier stops the convective heat gain that drives South Florida cooling loads.",
  },
  {
    icon: Layers,
    title: "Reduces energy bills by 30–50%",
    body: "Homeowners consistently see dramatic cooling-cost reductions after a proper spray foam install.",
  },
  {
    icon: Wind,
    title: "Creates a continuous air barrier",
    body: "Expanding foam fills the gaps, cracks, and penetrations that fiberglass and cellulose leave open.",
  },
  {
    icon: Droplets,
    title: "Controls moisture and humidity",
    body: "Closed-cell acts as a vapor barrier, keeping South Florida's warm, moist air out of your envelope.",
  },
];

/* Open-cell vs closed-cell comparison — paired with the types infographic. */
const FOAM_TYPES = [
  {
    icon: Volume2,
    name: "Open Cell Foam",
    rValue: "R-3.7 / inch",
    moisture: "Allows vapor permeation",
    cost: "$",
    bestFor: "Interior walls, soundproofing, budget projects.",
    points: [
      "Softer, lower-density foam that expands to fill and seal wall cavities",
      "Outstanding sound dampening between units, rooms, and floors",
      "Vapor-permeable — lets an assembly dry, which makes detailing critical in humid South Florida",
      "Lower material cost; common in interior walls, attics, and sound assemblies",
    ],
  },
  {
    icon: ShieldCheck,
    name: "Closed Cell Foam",
    rValue: "R-6.5 / inch",
    moisture: "Complete vapor barrier",
    cost: "$$$",
    bestFor: "Exterior walls, flood zones, structural support.",
    points: [
      "Dense and rigid — adds structural reinforcement to walls and roof decks",
      "Acts as a Class II vapor retarder and a genuine moisture barrier",
      "Higher R-value per inch and resists storm-driven and flood water",
      "Common in crawl spaces, metal buildings, and hurricane-exposed assemblies",
    ],
  },
];

const HERO_TRUST = [
  { icon: CheckCircle2, label: "Free estimates" },
  { icon: CheckCircle2, label: "Same-day response" },
  { icon: CheckCircle2, label: "Licensed & insured" },
  { icon: Star, label: "Since 2008" },
];

const CTA_TRUST_CHIPS = [
  "Free estimates, no obligation",
  "Same-day response guaranteed",
  "Licensed, bonded & insured",
];

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <TrustBarSection />
        <ServicesSection />
        <UnderstandingSection />
        <WhyChooseSection />
        <ProcessSection />
        <CoverageSection />
        <Stats />
        <TestimonialsSection />
        <FAQ />
        <FinalCTASection />
      </main>
      <Footer />
    </>
  );
}

/* ============================================================
   HERO — Miami's #1 Rated Insulation Contractor
   ============================================================ */
function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-warm-radial pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="absolute top-24 inset-x-0 h-px horizon-band opacity-70" aria-hidden />
      <WaveSilhouette className="absolute right-4 bottom-0 h-40 w-[60%] text-sage/8 hidden lg:block" />

      <div className="container-wide relative">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Copy */}
          <div className="lg:col-span-6">
            <FadeIn>
              <span className="pill-clay">
                <span className="h-1.5 w-1.5 rounded-full bg-clay animate-pulse" />
                Miami · Broward · Palm Beach
              </span>
            </FadeIn>

            <FadeIn delay={0.05}>
              <h1 className="mt-5 font-heading font-extrabold text-espresso text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl leading-[1.05] tracking-tight">
                Miami&apos;s #1 Rated{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-r from-clay via-clay-light to-sage bg-clip-text text-transparent">
                    Insulation Contractor
                  </span>
                  <svg
                    className="absolute -bottom-1 left-0 w-full h-3 text-gold/50"
                    viewBox="0 0 200 12"
                    preserveAspectRatio="none"
                    aria-hidden
                  >
                    <path d="M2 8 Q 50 2, 100 7 T 198 6" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
                  </svg>
                </span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.1}>
              <p className="mt-6 lead max-w-xl">
                Protect your home from Miami&apos;s extreme heat and humidity. Our high-performance{" "}
                <strong className="text-espresso">spray foam insulation</strong> reduces energy bills
                by up to 50% while creating a comfortable, sealed environment year-round.
              </p>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link href="/quote" className="btn-primary text-base">
                  Get My Free Estimate
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <a href={SITE.phoneHref} className="btn-secondary text-base">
                  <Phone className="h-5 w-5" />
                  {SITE.phone}
                </a>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-mocha">
                {HERO_TRUST.map((t) => (
                  <span key={t.label} className="inline-flex items-center gap-1.5">
                    <t.icon className={`h-4 w-4 ${t.icon === Star ? "text-gold fill-gold" : "text-sage"}`} />
                    {t.label}
                  </span>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Visual */}
          <FadeIn direction="left" delay={0.15} className="lg:col-span-6 relative">
            <div className="relative">
              <div className="relative overflow-hidden rounded-t-[14rem] rounded-b-3xl shadow-warm-lg border-4 border-white">
                <img
                  src="/images/spray-foam-application.jpg"
                  alt="Professional spray foam insulation being applied to the studs of a Miami home under construction"
                  className="w-full h-[420px] md:h-[520px] object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/30 via-transparent to-transparent" />
              </div>

              <FadeIn delay={0.4} className="absolute -bottom-6 -left-4 md:-left-8 bg-white rounded-2xl shadow-warm-lg border border-adobe p-5 max-w-[15rem]">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 h-11 w-11 rounded-xl bg-clay-gradient flex items-center justify-center">
                    <ShieldCheck className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-heading font-extrabold text-espresso text-2xl leading-none">50%</p>
                    <p className="text-xs text-mocha mt-1 leading-snug">
                      Average energy bill savings for Miami homes
                    </p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.5} className="absolute -top-4 -right-3 md:-right-6 bg-sage text-white rounded-2xl shadow-warm-lg px-4 py-3">
                <p className="font-heading font-bold text-sm">Since 2008</p>
                <p className="text-[0.7rem] text-white/80 mt-0.5">1,000+ Miami homes insulated</p>
              </FadeIn>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function WaveSilhouette({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 600 120" fill="none" aria-hidden preserveAspectRatio="none">
      <path d="M0 70 Q 75 30 150 70 T 300 70 T 450 70 T 600 70 V120 H0 Z" fill="currentColor" opacity="0.5" />
      <path d="M0 88 Q 75 58 150 88 T 300 88 T 450 88 T 600 88 V120 H0 Z" fill="currentColor" opacity="0.8" />
    </svg>
  );
}

/* ============================================================
   TRUST BAR — credentials strip
   ============================================================ */
function TrustBarSection() {
  return (
    <section className="relative bg-white border-y border-adobe">
      <div className="container-wide py-6 md:py-8">
        <FadeIn>
          <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-4 gap-y-5">
            {CREDENTIALS.map((c) => {
              const Icon = CREDENTIAL_ICONS[c.icon] ?? ShieldCheck;
              return (
                <li key={c.label} className="flex items-center gap-2.5">
                  <span className="flex-shrink-0 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-sand text-clay">
                    <Icon className="h-5 w-5" strokeWidth={2.2} />
                  </span>
                  <span className="text-sm font-heading font-semibold text-espresso leading-tight">
                    {c.label}
                  </span>
                </li>
              );
            })}
          </ul>
        </FadeIn>
      </div>
      <div className="h-px horizon-band opacity-60" />
    </section>
  );
}

/* ============================================================
   SERVICES — spray foam insulation services grid
   ============================================================ */
function ServicesSection() {
  return (
    <section id="services" className="relative bg-sonoran py-20 md:py-28">
      <div className="container-wide">
        <FadeIn className="max-w-3xl mb-12 md:mb-16">
          <span className="eyebrow">
            <span className="h-px w-8 bg-clay" />
            Our services
          </span>
          <h2 className="mt-3 h-section">
            Spray Foam Insulation Services for{" "}
            <span className="text-clay">Miami homes &amp; businesses</span>.
          </h2>
          <p className="mt-4 lead">
            From residential homes to commercial buildings, we provide Miami with comprehensive spray
            foam insulation solutions tailored to Florida&apos;s unique climate challenges.
          </p>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map((service, i) => {
            const Icon = SERVICE_ICONS[service.icon as keyof typeof SERVICE_ICONS] ?? ShieldCheck;
            const isFeatured = service.slug === "closed-cell";
            return (
              <FadeIn key={service.slug} delay={(i % 4) * 0.05}>
                <Link
                  href={`/services/${service.slug}`}
                  className={`group relative block h-full p-6 rounded-3xl border transition-all duration-300 hover:-translate-y-1.5 ${
                    isFeatured
                      ? "bg-espresso text-cream border-espresso shadow-warm-lg"
                      : "bg-white text-espresso border-adobe shadow-card hover:shadow-card-hover"
                  }`}
                >
                  {isFeatured && (
                    <span className="absolute -top-2.5 right-5 pill-gold !bg-gold !text-espresso !border-gold-dark">
                      Best for Florida
                    </span>
                  )}
                  <div
                    className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl mb-4 transition-colors ${
                      isFeatured
                        ? "bg-clay-gradient text-white"
                        : "bg-clay/10 text-clay group-hover:bg-clay group-hover:text-white"
                    }`}
                  >
                    <Icon className="h-6 w-6" strokeWidth={2.2} />
                  </div>
                  <h3 className={`font-heading font-bold text-lg leading-tight mb-1.5 ${isFeatured ? "text-cream" : "text-espresso"}`}>
                    {service.title}
                  </h3>
                  <p className={`text-sm leading-relaxed ${isFeatured ? "text-cream/80" : "text-mocha"}`}>
                    {service.description}
                  </p>
                  <span
                    className={`mt-4 inline-flex items-center gap-1 text-sm font-heading font-bold transition-all group-hover:gap-2 ${
                      isFeatured ? "text-gold" : "text-clay"
                    }`}
                  >
                    Learn more
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              </FadeIn>
            );
          })}
        </div>

        <FadeIn className="mt-12 text-center">
          <p className="text-mocha">
            Not sure what you need?{" "}
            <Link href="/quote" className="font-heading font-bold text-clay hover:underline">
              Get a free estimate →
            </Link>
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

/* ============================================================
   UNDERSTANDING SPRAY FOAM — how it protects + open vs closed cell
   ============================================================ */
function UnderstandingSection() {
  return (
    <section id="understanding" className="relative bg-cream py-20 md:py-28">
      <div className="container-wide">
        {/* How it protects */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <FadeIn direction="right" className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              <div className="relative overflow-hidden rounded-t-[12rem] rounded-b-3xl shadow-warm-lg border-4 border-white">
                <img
                  src="/images/spray-foam-energy-flow-original.jpg"
                  alt="Infographic showing how spray foam insulation blocks heat transfer and reduces energy bills in a Miami home"
                  className="w-full h-[380px] md:h-[460px] object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/25 via-transparent to-transparent" />
              </div>
              <FadeIn delay={0.25} className="absolute -bottom-6 -right-3 md:-right-6 bg-white rounded-2xl shadow-warm-lg border border-adobe p-5 max-w-[15rem]">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 h-11 w-11 rounded-xl bg-clay-gradient flex items-center justify-center">
                    <ThermometerSun className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-heading font-extrabold text-espresso text-2xl leading-none">30–50%</p>
                    <p className="text-xs text-mocha mt-1 leading-snug">
                      Typical heating &amp; cooling energy savings from properly installed spray foam
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </FadeIn>

          <FadeIn className="lg:col-span-7 order-1 lg:order-2">
            <span className="eyebrow">
              <span className="h-px w-8 bg-clay" />
              How it protects
            </span>
            <h2 className="mt-3 h-section">
              How Spray Foam Insulation Protects{" "}
              <span className="text-clay">Your Miami Home</span>.
            </h2>
            <p className="mt-4 lead">
              Unlike traditional insulation, spray foam expands to fill every gap and crack, creating
              a seamless thermal envelope that keeps Miami&apos;s heat and humidity out.
            </p>
          </FadeIn>
        </div>

        {/* Protection points */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-14 md:mt-16">
          {PROTECTION_POINTS.map((item, i) => (
            <FadeIn key={item.title} delay={(i % 4) * 0.05}>
              <div className="h-full rounded-2xl bg-sonoran/60 border border-adobe/60 p-5">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gold/15 text-gold-dark mb-3">
                  <item.icon className="h-5 w-5" strokeWidth={2.2} />
                </div>
                <h4 className="font-heading font-bold text-espresso text-sm leading-tight">
                  {item.title}
                </h4>
                <p className="mt-1.5 text-xs text-mocha leading-relaxed">{item.body}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Open-cell vs closed-cell intro */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center mt-20 md:mt-24">
          <FadeIn direction="right" className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-t-[12rem] rounded-b-3xl shadow-warm-lg border-4 border-white">
              <img
                src="/images/spray-foam-open-vs-closed-cell-original.jpg"
                alt="Infographic comparing open-cell and closed-cell spray foam insulation — R-value, moisture behavior, cost, and best use cases"
                className="w-full h-[380px] md:h-[460px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/25 via-transparent to-transparent" />
            </div>
          </FadeIn>

          <FadeIn className="lg:col-span-7">
            <span className="eyebrow">
              <span className="h-px w-8 bg-clay" />
              Open-cell vs closed-cell
            </span>
            <h2 className="mt-3 h-section">
              Spray Foam Insulation Types:{" "}
              <span className="text-clay">Which Is Right for You?</span>
            </h2>
            <p className="mt-4 lead">
              Understanding the difference between open cell and closed cell spray foam helps you make
              the best choice for your Miami property.
            </p>
          </FadeIn>
        </div>

        {/* Comparison cards */}
        <div className="grid md:grid-cols-2 gap-5 lg:gap-6 mt-10 md:mt-12">
          {FOAM_TYPES.map((foam, i) => (
            <FadeIn key={foam.name} delay={(i % 2) * 0.06}>
              <div className="h-full rounded-3xl bg-white border border-adobe p-7 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center justify-between gap-4 mb-5">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-clay/10 text-clay">
                    <foam.icon className="h-6 w-6" strokeWidth={2.2} />
                  </div>
                  <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-sage/10 border border-sage/20 text-sage-dark text-sm font-heading font-bold">
                    {foam.rValue}
                  </span>
                </div>
                <h3 className="font-heading font-bold text-xl text-espresso leading-tight">
                  {foam.name}
                </h3>
                <dl className="mt-4 grid grid-cols-3 gap-2 text-xs">
                  <div>
                    <dt className="text-mocha/70 font-semibold uppercase tracking-wide">Moisture</dt>
                    <dd className="text-espresso font-medium mt-0.5">{foam.moisture}</dd>
                  </div>
                  <div>
                    <dt className="text-mocha/70 font-semibold uppercase tracking-wide">Cost</dt>
                    <dd className="text-espresso font-medium mt-0.5">{foam.cost}</dd>
                  </div>
                  <div>
                    <dt className="text-mocha/70 font-semibold uppercase tracking-wide">Best For</dt>
                    <dd className="text-espresso font-medium mt-0.5">{foam.bestFor}</dd>
                  </div>
                </dl>
                <ul className="mt-4 space-y-2.5">
                  {foam.points.map((point) => (
                    <li key={point} className="flex items-start gap-2.5 text-sm text-mocha leading-relaxed">
                      <span className="flex-shrink-0 mt-1.5 h-1.5 w-1.5 rounded-full bg-clay" aria-hidden />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   WHY CHOOSE US — Miami insulation contractor differentiators
   ============================================================ */
function WhyChooseSection() {
  return (
    <section id="why" className="relative bg-sonoran-sand py-20 md:py-28">
      <div className="container-wide">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <FadeIn direction="right" className="lg:col-span-5">
            <div className="relative">
              <div className="relative overflow-hidden rounded-t-[12rem] rounded-b-3xl shadow-warm-lg border-4 border-white">
                <img
                  src="/images/crew-portrait.jpg"
                  alt="Spray foam insulation crew from Miami Spray Foam — SPFA-certified installers"
                  className="w-full h-[380px] md:h-[460px] object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/30 via-transparent to-transparent" />
              </div>
              <FadeIn delay={0.25} className="absolute -bottom-6 -left-3 md:-left-6 bg-white rounded-2xl shadow-warm-lg border border-adobe p-5 max-w-[15rem]">
                <p className="font-heading font-extrabold text-espresso text-2xl leading-none">SPFA</p>
                <p className="text-xs text-mocha mt-1 leading-snug">
                  Certified crews, high-grade materials, and a workmanship warranty on every install
                </p>
              </FadeIn>
            </div>
          </FadeIn>

          <div className="lg:col-span-7">
            <FadeIn>
              <span className="eyebrow">
                <span className="h-px w-8 bg-clay" />
                Why choose us
              </span>
              <h2 className="mt-3 h-section">
                Miami&apos;s spray foam insulation experts,{" "}
                <span className="text-clay">since 2008</span>.
              </h2>
              <p className="mt-4 lead">
                We know South Florida&apos;s climate, codes, and construction — and we spec insulation
                that actually performs in heat, humidity, and hurricane country.
              </p>
            </FadeIn>

            <div className="mt-8 grid sm:grid-cols-2 gap-5">
              {WHY_CHOOSE.map((item, i) => (
                <FadeIn key={item.title} delay={(i % 2) * 0.06}>
                  <div className="h-full rounded-2xl bg-white border border-adobe p-6 shadow-card hover:shadow-card-hover transition-all duration-300">
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-clay/10 text-clay mb-4">
                      <item.icon className="h-6 w-6" strokeWidth={2.2} />
                    </div>
                    <h3 className="font-heading font-bold text-espresso text-base leading-tight">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-mocha leading-relaxed">{item.description}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   PROCESS — insulation installation, start to finish
   ============================================================ */
function ProcessSection() {
  return (
    <section id="process" className="relative bg-cream py-20 md:py-28">
      <div className="container-wide">
        <FadeIn className="max-w-3xl mb-12 md:mb-16">
          <span className="eyebrow">
            <span className="h-px w-8 bg-clay" />
            How it works
          </span>
          <h2 className="mt-3 h-section">
            Your spray foam insulation project,{" "}
            <span className="text-clay">start to finish</span>.
          </h2>
          <p className="mt-4 lead">
            A clear, four-step process — from your first call to a fully sealed, energy-efficient
            Miami home, usually wrapped up in a single day.
          </p>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PROCESS.map((step, i) => (
            <FadeIn key={step.step} delay={(i % 4) * 0.05}>
              <div className="relative h-full rounded-3xl bg-white border border-adobe p-7 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
                <span className="absolute top-6 right-6 font-heading font-extrabold text-5xl text-clay/10 leading-none">
                  {step.step}
                </span>
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-clay-gradient text-white mb-4">
                  <step.icon className="h-6 w-6" strokeWidth={2.2} />
                </div>
                <h3 className="font-heading font-bold text-espresso text-base leading-tight">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-mocha leading-relaxed">{step.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   COVERAGE — South Florida service area
   ============================================================ */
function CoverageSection() {
  return (
    <section id="coverage" className="relative bg-sonoran py-20 md:py-28">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <FadeIn>
            <span className="eyebrow">
              <span className="h-px w-8 bg-clay" />
              Service area
            </span>
            <h2 className="mt-3 h-section">
              Proudly serving{" "}
              <span className="text-clay">Miami-Dade, Broward &amp; Palm Beach</span>.
            </h2>
            <p className="mt-4 lead">
              Based in Miami and insulating homes and businesses across South Florida since 2008.
              Our crews know the building codes, the coastal climate, and the right foam for every
              assembly — from Miami Beach condos to Broward warehouses.
            </p>

            <ul className="mt-7 space-y-3">
              {FL_REGIONS.map((region) => (
                <li key={region.name} className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-clay flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-heading font-semibold text-espresso">{region.name}</span>
                    <span className="text-mocha"> — {region.note}</span>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <p className="text-xs font-heading font-bold uppercase tracking-wider text-mocha mb-2">
                Cities we serve
              </p>
              <div className="flex flex-wrap gap-2">
                {SERVICE_AREA_CITIES.map((city) => (
                  <span
                    key={city}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-white border border-adobe text-espresso text-xs font-heading font-semibold"
                  >
                    {city}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="left">
            <div className="relative rounded-t-[12rem] rounded-b-3xl overflow-hidden border-4 border-white shadow-warm-lg">
              <img
                src="/images/coastal-home.jpg"
                alt="A South Florida coastal home insulated by Miami Spray Foam against heat, humidity, and hurricanes"
                className="w-full h-[360px] md:h-[440px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/55 via-espresso/10 to-transparent" />
              <div className="absolute bottom-0 inset-x-0 p-7">
                <p className="font-heading font-extrabold text-cream text-2xl leading-tight">
                  South Florida is home base.
                </p>
                <p className="text-cream/80 text-sm mt-1">
                  We&apos;ve insulated Miami homes and businesses since 2008.
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {LOCATIONS.map((l) => (
                    <Link
                      key={l.slug}
                      href={`/locations/${l.slug}`}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white/15 backdrop-blur text-cream text-sm font-heading font-semibold border border-white/20 hover:bg-white/25 transition-colors"
                    >
                      {l.name}, FL
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  ))}
                  <Link
                    href="/coverage"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-clay text-white text-sm font-heading font-semibold hover:bg-clay-dark transition-colors"
                  >
                    All areas
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   TESTIMONIALS — what Miami says about their insulation
   ============================================================ */
function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative bg-cream py-20 md:py-28">
      <div className="container-wide">
        <FadeIn className="max-w-3xl mb-12 md:mb-16">
          <span className="eyebrow">
            <span className="h-px w-8 bg-clay" />
            From Miami homeowners &amp; businesses
          </span>
          <h2 className="mt-3 h-section">
            What Miami says about{" "}
            <span className="text-clay">their insulation</span>.
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <FadeIn key={t.name} delay={i * 0.08}>
              <figure className="relative h-full rounded-3xl bg-white border border-adobe p-7 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col">
                <Quote className="absolute top-6 right-6 h-9 w-9 text-gold/25" />
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} className="h-4 w-4 fill-gold text-gold" />
                  ))}
                </div>
                <blockquote className="text-cocoa leading-relaxed text-[0.97rem] flex-grow">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-5 pt-5 border-t border-adobe">
                  <p className="font-heading font-bold text-espresso">{t.name}</p>
                  <p className="text-sm text-mocha">
                    {t.role} · {t.location}
                  </p>
                </figcaption>
              </figure>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   FINAL CTA — free spray foam estimate for Miami
   ============================================================ */
function FinalCTASection() {
  return (
    <section className="relative overflow-hidden bg-clay-gradient py-20 md:py-24">
      <div className="absolute inset-0 dotted-warm opacity-40" aria-hidden />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.25) 0%, transparent 40%)",
        }}
        aria-hidden
      />

      <div className="container-tight relative text-center">
        <FadeIn>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur border border-white/25 text-white text-xs font-heading font-bold uppercase tracking-[0.18em]">
            <Clock className="h-3.5 w-3.5" />
            Same-day response · Free estimates
          </span>
          <h2 className="mt-6 font-heading font-extrabold text-cream text-3xl md:text-5xl leading-[1.1]">
            Get your free spray foam estimate{" "}
            <span className="text-gold-light">for Miami today.</span>
          </h2>
          <p className="mt-5 text-cream/90 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Get your free, no-obligation estimate for spray foam insulation in Miami. We&apos;ll
            respond within 24 hours with a detailed proposal.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/quote"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-clay-dark font-heading font-bold text-base shadow-warm-lg hover:-translate-y-0.5 hover:bg-cream transition-all"
            >
              Get My Free Estimate
              <ArrowRight className="h-5 w-5" />
            </Link>
            <a
              href={SITE.phoneHref}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-espresso/20 backdrop-blur text-white font-heading font-bold text-base border-2 border-white/30 hover:bg-espresso/40 transition-all"
            >
              <Phone className="h-5 w-5" />
              {SITE.phone}
            </a>
          </div>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {CTA_TRUST_CHIPS.map((chip) => (
              <span key={chip} className="text-cream/85 text-sm font-heading font-semibold">
                · {chip}
              </span>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
