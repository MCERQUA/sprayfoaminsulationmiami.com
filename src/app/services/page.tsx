import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { CTABand } from "@/components/sections/CTABand";
import { FadeIn } from "@/components/animations/FadeIn";
import { SERVICES, SITE } from "@/lib/site";
import { Home, Building2, Volume2, ShieldCheck, ArrowRight } from "lucide-react";

const ICONS = {
  Home, Building2, Volume2, ShieldCheck,
} as const;

export const metadata: Metadata = {
  title: "Spray Foam Insulation Services in Miami — Residential & Commercial",
  description:
    "Residential, commercial, open-cell, and closed-cell spray foam insulation in Miami. Attics, walls, crawl spaces, warehouses, and new construction. Free estimates. Licensed & insured.",
  alternates: { canonical: `${SITE.url}/services` },
  openGraph: {
    title: "Spray Foam Insulation Services | Miami Spray Foam",
    description:
      "Comprehensive spray foam insulation for Miami homes and businesses — residential, commercial, open-cell, and closed-cell. Free estimates.",
    url: `${SITE.url}/services`,
  },
};

export default function ServicesPage() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
      { "@type": "ListItem", position: 2, name: "Services", item: `${SITE.url}/services` },
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
              <span className="pill-clay">Our services</span>
              <h1 className="mt-5 font-heading font-extrabold text-espresso text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
                Spray Foam Insulation Services for{" "}
                <span className="bg-gradient-to-r from-clay via-clay-light to-gold-dark bg-clip-text text-transparent">
                  Miami
                </span>
                .
              </h1>
              <p className="mt-6 lead max-w-2xl mx-auto">
                From residential homes to commercial buildings, we provide Miami with comprehensive
                spray foam insulation solutions tailored to Florida&apos;s unique climate challenges.
              </p>
            </FadeIn>
          </div>
        </section>

        <section className="bg-cream py-16 md:py-20">
          <div className="container-wide">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {SERVICES.map((s, i) => {
                const Icon = ICONS[s.icon as keyof typeof ICONS] ?? ShieldCheck;
                const featured = s.slug === "closed-cell";
                return (
                  <FadeIn key={s.slug} delay={(i % 4) * 0.06}>
                    <Link
                      href={`/services/${s.slug}`}
                      className={`group relative block h-full p-7 rounded-3xl border transition-all duration-300 hover:-translate-y-1.5 ${
                        featured
                          ? "bg-espresso text-cream border-espresso shadow-warm-lg"
                          : "bg-white text-espresso border-adobe shadow-card hover:shadow-card-hover"
                      }`}
                    >
                      {featured && (
                        <span className="absolute -top-2.5 right-5 pill-gold !bg-gold !text-espresso !border-gold-dark">
                          Best for Florida
                        </span>
                      )}
                      <div
                        className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl mb-4 ${
                          featured ? "bg-clay-gradient text-white" : "bg-clay/10 text-clay"
                        }`}
                      >
                        <Icon className="h-6 w-6" strokeWidth={2.2} />
                      </div>
                      <h2 className={`font-heading font-bold text-xl ${featured ? "text-cream" : "text-espresso"}`}>
                        {s.title}
                      </h2>
                      <p className={`mt-2 text-sm leading-relaxed ${featured ? "text-cream/80" : "text-mocha"}`}>
                        {s.description}
                      </p>
                      <span
                        className={`mt-5 inline-flex items-center gap-1 text-sm font-heading font-bold group-hover:gap-2 transition-all ${
                          featured ? "text-gold" : "text-clay"
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
          </div>
        </section>

        <CTABand
          title="Not sure which type of foam you need?"
          description="Most Miami homes benefit from a combination — closed-cell in moisture-prone areas, open-cell for sound and value. We'll recommend the right mix in one visit."
        />
      </main>
      <Footer />
    </>
  );
}
