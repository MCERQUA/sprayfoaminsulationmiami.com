import type { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { CTABand } from "@/components/sections/CTABand";
import { FAQ } from "@/components/sections/FAQ";
import { FadeIn } from "@/components/animations/FadeIn";
import { SITE, LOCATIONS } from "@/lib/site";
import { FL_REGIONS, SERVICE_AREA_CITIES } from "@/lib/content";
import Link from "next/link";
import { MapPin, ArrowRight, ThermometerSun, Droplets, Waves } from "lucide-react";

export const metadata: Metadata = {
  title: "Spray Foam Insulation Service Area — Miami-Dade, Broward & Palm Beach",
  description:
    "Spray Foam Insulation Miami serves homes and businesses across Miami-Dade, Broward, and Palm Beach counties. Miami Beach, Coral Gables, Hialeah, Fort Lauderdale, Boca Raton. Free estimates.",
  alternates: { canonical: `${SITE.url}/coverage` },
};

const climateChallenges = [
  {
    icon: ThermometerSun,
    title: "Extreme heat & AC load",
    note: "South Florida's year-round heat drives constant cooling. Spray foam's air seal blocks convective heat gain, cutting AC run-time and energy bills by 30–50%.",
  },
  {
    icon: Droplets,
    title: "Humidity & moisture",
    note: "Year-round humidity enters walls and attics, condenses, and feeds mold. Closed-cell foam acts as a vapor barrier to keep moisture out of the envelope.",
  },
  {
    icon: Waves,
    title: "Coastal salt air & storms",
    note: "Salt-air exposure, hurricane-driven rain, and flood-zone moisture. Closed-cell foam reinforces walls and roof decks and resists storm-driven water.",
  },
];

export default function CoveragePage() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
      { "@type": "ListItem", position: 2, name: "Service Area", item: `${SITE.url}/coverage` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Navbar />
      <main>
        <section className="relative bg-warm-radial pt-32 pb-16 md:pt-40 md:pb-20">
          <div className="container-tight text-center">
            <FadeIn>
              <span className="pill-clay">Service Area</span>
              <h1 className="mt-5 font-heading font-extrabold text-espresso text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
                Serving{" "}
                <span className="bg-gradient-to-r from-clay via-clay-light to-sage bg-clip-text text-transparent">
                  South Florida
                </span>
                .
              </h1>
              <p className="mt-6 lead max-w-2xl mx-auto">
                Based in Miami and insulating homes and businesses across South Florida since 2008.
                Our crews know the climate, the building codes, and the right foam for every assembly.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Climate challenges */}
        <section className="bg-cream py-16 md:py-20">
          <div className="container-wide">
            <FadeIn className="max-w-2xl mb-12">
              <span className="eyebrow"><span className="h-px w-8 bg-clay" />South Florida climate</span>
              <h2 className="mt-3 h-section">Insulation built for Miami&apos;s climate, not a cold-weather spec.</h2>
            </FadeIn>
            <div className="grid md:grid-cols-3 gap-6">
              {climateChallenges.map((r, i) => (
                <FadeIn key={r.title} delay={i * 0.08}>
                  <div className="h-full rounded-3xl bg-white border border-adobe p-7 shadow-card hover:shadow-card-hover transition-all">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-clay/10 text-clay mb-4">
                      <r.icon className="h-6 w-6" strokeWidth={2.2} />
                    </div>
                    <h3 className="font-heading font-bold text-lg text-espresso">{r.title}</h3>
                    <p className="mt-2 text-sm text-mocha leading-relaxed">{r.note}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Regions list */}
        <section className="bg-sonoran-sand py-16 md:py-20">
          <div className="container-tight">
            <FadeIn className="max-w-2xl mb-10">
              <span className="eyebrow"><span className="h-px w-8 bg-clay" />Counties we serve</span>
              <h2 className="mt-3 h-section">Where we work in South Florida.</h2>
            </FadeIn>
            <div className="grid sm:grid-cols-3 gap-4">
              {FL_REGIONS.map((region, i) => (
                <FadeIn key={region.name} delay={(i % 3) * 0.06}>
                  <div className="flex items-start gap-3 rounded-2xl bg-white border border-adobe p-5 h-full">
                    <MapPin className="h-5 w-5 text-clay flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-heading font-bold text-espresso">{region.name}</p>
                      <p className="text-sm text-mocha">{region.note}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>

            <FadeIn className="mt-10">
              <div className="rounded-3xl bg-white border border-adobe p-8">
                <p className="font-heading font-bold text-espresso mb-3">Cities we serve</p>
                <div className="flex flex-wrap gap-2">
                  {SERVICE_AREA_CITIES.map((city) => (
                    <span key={city} className="inline-flex items-center gap-1 px-3.5 py-2 rounded-full bg-clay/10 text-clay text-sm font-heading font-semibold">
                      <MapPin className="h-3.5 w-3.5" />
                      {city}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn className="mt-10">
              <div className="rounded-3xl bg-espresso text-cream p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <p className="font-heading font-extrabold text-2xl">Featured service areas</p>
                  <p className="text-cream/75 mt-1">Dedicated local pages for our busiest South Florida markets.</p>
                </div>
                <div className="flex flex-wrap gap-3">
                  {LOCATIONS.map((l) => (
                    <Link
                      key={l.slug}
                      href={`/locations/${l.slug}`}
                      className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-white/10 text-cream font-heading font-semibold border border-white/20 hover:bg-white/20 transition-colors"
                    >
                      {l.name}, FL <ArrowRight className="h-4 w-4" />
                    </Link>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        <FAQ
          eyebrow="Service area questions"
          title={
            <>
              Service area{" "}
              <span className="text-clay">questions</span>
            </>
          }
          items={[
            {
              q: "Which areas of South Florida do you serve?",
              a: "We serve all of Miami-Dade, Broward, and Palm Beach counties — including Miami, Miami Beach, Coral Gables, Hialeah, Doral, Fort Lauderdale, Hollywood, Pompano Beach, Boca Raton, West Palm Beach, and Delray Beach. If you're in the tri-county South Florida area, we can insulate your property.",
            },
            {
              q: "Do you offer free estimates across the whole service area?",
              a: "Yes. We provide free, no-obligation estimates throughout our full service area, with same-day response and a detailed written proposal — usually within 24 hours. Reach out through our quote form or call us directly.",
            },
            {
              q: "Can you work on coastal or flood-zone properties?",
              a: "Absolutely — coastal and flood-zone properties are a specialty. We recommend closed-cell spray foam for these applications because it acts as a vapor barrier, resists storm-driven water, and reinforces wall and roof assemblies. It's the right product for Miami Beach, the barrier islands, and other hurricane-exposed areas.",
            },
          ]}
          background="cream"
        />

        <CTABand />
      </main>
      <Footer />
    </>
  );
}
