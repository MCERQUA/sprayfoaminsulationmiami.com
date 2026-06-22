import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Stats } from "@/components/sections/Stats";
import { CTABand } from "@/components/sections/CTABand";
import { FadeIn } from "@/components/animations/FadeIn";
import { SITE, CREDENTIALS } from "@/lib/site";
import { ArrowRight, Home, ShieldCheck, Award, Leaf } from "lucide-react";

export const metadata: Metadata = {
  title: "About Spray Foam Insulation Miami — Miami's Insulation Experts Since 2008",
  description:
    "Miami Spray Foam Insulation has insulated 1,000+ Miami homes and businesses since 2008. SPFA-certified crews, honest pricing, and insulation built for South Florida's heat, humidity, and hurricanes.",
  alternates: { canonical: `${SITE.url}/about` },
};

const values = [
  { icon: Home, title: "Built for Miami", desc: "Based in Miami since 2008, we know South Florida's climate, building codes, and the right foam for every assembly — from Miami Beach condos to Broward warehouses." },
  { icon: ShieldCheck, title: "Certified craftsmanship", desc: "SPFA-certified crews, high-grade materials, and proven technique. We detail every gap and stand behind our work with a workmanship warranty." },
  { icon: Award, title: "Honest, competitive pricing", desc: "Transparent proposals with no hidden fees — and we'll beat any written quote from a licensed competitor. The kind of dealing that built our reputation." },
  { icon: Leaf, title: "Real energy savings", desc: "Our installs typically cut cooling bills 30–50%. We're here to make your home more comfortable and more efficient for the long run, not to upsell." },
];

const timeline = [
  { year: "2008", title: "Spray Foam Insulation Miami founded", desc: "We started with one crew and a simple promise: high-performance spray foam, honest pricing, and real energy savings for Miami homeowners." },
  { year: "1,000+", title: "Miami homes & businesses insulated", desc: "From Coral Gables attics to Fort Lauderdale warehouses, we've sealed and insulated over a thousand South Florida properties." },
  { year: "Today", title: "South Florida's trusted insulation team", desc: "SPFA-certified crews, same-day estimates, and insulation engineered for South Florida's heat, humidity, and hurricane seasons." },
];

export default function AboutPage() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
      { "@type": "ListItem", position: 2, name: "About", item: `${SITE.url}/about` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Navbar />
      <main>
        <section className="relative bg-warm-radial pt-32 pb-16 md:pt-40 md:pb-20">
          <div className="container-wide grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <span className="pill-clay">About us</span>
              <h1 className="mt-5 font-heading font-extrabold text-espresso text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
                Miami&apos;s spray foam insulation experts,{" "}
                <span className="bg-gradient-to-r from-clay via-clay-light to-sage bg-clip-text text-transparent">
                  since 2008
                </span>
                .
              </h1>
              <p className="mt-6 lead">
                We&apos;ve spent nearly two decades making Miami homes and businesses cooler, drier,
                and more energy-efficient. SPFA-certified crews, high-grade materials, and insulation
                built specifically for South Florida&apos;s heat, humidity, and hurricane seasons.
              </p>
              <div className="mt-7 flex flex-col sm:flex-row gap-3">
                <Link href="/quote" className="btn-primary">Get My Free Estimate <ArrowRight className="h-5 w-5" /></Link>
                <Link href="/contact" className="btn-secondary">Talk to our team</Link>
              </div>
            </FadeIn>
            <FadeIn direction="left">
              <div className="rounded-t-[12rem] rounded-b-3xl overflow-hidden border-4 border-white shadow-warm-lg">
                <img
                  src="/images/crew-portrait.jpg"
                  alt="The Miami Spray Foam Insulation crew on a jobsite in South Florida"
                  className="w-full h-[360px] md:h-[440px] object-cover"
                  loading="lazy"
                />
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Credentials bar */}
        <section className="bg-white border-y border-adobe">
          <div className="container-wide py-6">
            <FadeIn>
              <ul className="flex flex-wrap justify-center gap-x-8 gap-y-3">
                {CREDENTIALS.map((c) => (
                  <li key={c.label} className="inline-flex items-center gap-2 text-sm font-heading font-semibold text-espresso">
                    <ShieldCheck className="h-4 w-4 text-sage" />
                    {c.label}
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </section>

        {/* Story / timeline */}
        <section className="bg-cream py-16 md:py-24">
          <div className="container-tight">
            <FadeIn className="max-w-2xl mb-12">
              <span className="eyebrow"><span className="h-px w-8 bg-clay" />Our story</span>
              <h2 className="mt-3 h-section">Two decades insulating Miami.</h2>
              <p className="mt-4 lead">
                We started with a simple promise: high-performance spray foam, honest pricing, and real energy
                savings for Miami homeowners. Nearly twenty years and over a thousand properties later,
                that promise still drives every install — from Coral Gables attics to Broward warehouses.
              </p>
            </FadeIn>
            <div className="space-y-6">
              {timeline.map((t, i) => (
                <FadeIn key={t.title} delay={i * 0.08}>
                  <div className="flex flex-col md:flex-row gap-4 md:gap-8 p-6 rounded-3xl bg-white border border-adobe shadow-card">
                    <div className="md:w-40 flex-shrink-0">
                      <span className="inline-flex px-4 py-2 rounded-full bg-clay-gradient text-white font-heading font-extrabold">
                        {t.year}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-xl text-espresso">{t.title}</h3>
                      <p className="mt-1 text-mocha leading-relaxed">{t.desc}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <Stats />

        {/* Values */}
        <section className="bg-sonoran-sand py-16 md:py-24">
          <div className="container-wide">
            <FadeIn className="max-w-2xl mb-12">
              <span className="eyebrow"><span className="h-px w-8 bg-clay" />What we stand for</span>
              <h2 className="mt-3 h-section">Four things we won&apos;t compromise on.</h2>
            </FadeIn>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {values.map((v, i) => (
                <FadeIn key={v.title} delay={i * 0.06}>
                  <div className="h-full rounded-3xl bg-white border border-adobe p-7 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-sage/10 text-sage mb-4">
                      <v.icon className="h-6 w-6" strokeWidth={2.2} />
                    </div>
                    <h3 className="font-heading font-bold text-lg text-espresso">{v.title}</h3>
                    <p className="mt-2 text-sm text-mocha leading-relaxed">{v.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <CTABand />
      </main>
      <Footer />
    </>
  );
}
