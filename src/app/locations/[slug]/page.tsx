import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { CTABand } from "@/components/sections/CTABand";
import { FadeIn } from "@/components/animations/FadeIn";
import { LOCATIONS, SERVICES, SITE } from "@/lib/site";
import { ArrowRight, ArrowLeft, MapPin, Phone, ShieldCheck } from "lucide-react";

export function generateStaticParams() {
  return LOCATIONS.map((l) => ({ slug: l.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const loc = LOCATIONS.find((l) => l.slug === slug);
  if (!loc) return {};
  const url = `${SITE.url}/locations/${slug}`;
  return {
    title: `Spray Foam Insulation in ${loc.name}, FL`,
    description: `${loc.blurb} Residential, commercial, open-cell, and closed-cell spray foam insulation. Free estimates. Licensed & insured.`,
    alternates: { canonical: url },
    openGraph: {
      title: `Spray Foam Insulation in ${loc.name}, FL | Miami Spray Foam`,
      description: loc.blurb,
      url,
    },
  };
}

export default async function LocationPage({ params }: Props) {
  const { slug } = await params;
  const loc = LOCATIONS.find((l) => l.slug === slug);
  if (!loc) notFound();
  const url = `${SITE.url}/locations/${slug}`;

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
      { "@type": "ListItem", position: 2, name: "Coverage Area", item: `${SITE.url}/coverage` },
      { "@type": "ListItem", position: 3, name: `${loc.name}, FL`, item: url },
    ],
  };
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Spray Foam Insulation in ${loc.name}, Florida`,
    description: loc.blurb,
    url,
    areaServed: { "@type": "City", name: `${loc.name}, Florida` },
    provider: {
      "@type": "HomeAndConstructionBusiness",
      name: SITE.name,
      url: SITE.url,
      telephone: "+13051234567",
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Navbar />
      <main>
        <section className="relative bg-warm-radial pt-32 pb-16 md:pt-40 md:pb-20">
          <div className="container-wide">
            <FadeIn>
              <Link
                href="/coverage"
                className="inline-flex items-center gap-1.5 text-sm font-heading font-semibold text-clay hover:gap-2.5 transition-all mb-6"
              >
                <ArrowLeft className="h-4 w-4" />
                Coverage area
              </Link>
            </FadeIn>
            <div className="grid lg:grid-cols-12 gap-10 items-center">
              <FadeIn className="lg:col-span-7">
                <span className="pill-clay">
                  <MapPin className="h-3.5 w-3.5" />
                  {loc.name} · {loc.region}
                </span>
                <h1 className="mt-4 font-heading font-extrabold text-espresso text-4xl md:text-5xl leading-[1.08] tracking-tight">
                  Spray foam insulation in{" "}
                  <span className="bg-gradient-to-r from-clay via-clay-light to-sage bg-clip-text text-transparent">
                    {loc.name}, Florida
                  </span>
                </h1>
                <p className="mt-5 lead max-w-2xl">{loc.blurb}</p>
                <div className="mt-7 flex flex-col sm:flex-row gap-3">
                  <Link href="/quote" className="btn-primary">
                    Get a {loc.name} estimate
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                  <a href={SITE.phoneHref} className="btn-secondary">
                    <Phone className="h-5 w-5" />
                    {SITE.phone}
                  </a>
                </div>
              </FadeIn>

              <FadeIn direction="left" className="lg:col-span-5">
                <div className="rounded-t-[10rem] rounded-b-3xl overflow-hidden border-4 border-white shadow-warm-lg">
                  <img
                    src="/images/coastal-home.jpg"
                    alt={`Spray foam insulation in ${loc.name}, Florida`}
                    className="w-full h-[300px] md:h-[360px] object-cover"
                    loading="lazy"
                  />
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        <section className="bg-cream py-16 md:py-20">
          <div className="container-tight">
            <FadeIn className="max-w-2xl mb-10">
              <span className="eyebrow"><span className="h-px w-8 bg-clay" />Insulation services in {loc.name}</span>
              <h2 className="mt-3 h-section">
                The full range, installed for {loc.name} properties.
              </h2>
              <p className="mt-4 lead">
                From a single-family attic to a multi-unit commercial building, we deliver every
                spray foam insulation service a {loc.name} property owner needs — built for South Florida&apos;s climate.
              </p>
            </FadeIn>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {SERVICES.slice(0, 4).map((s, i) => (
                <FadeIn key={s.slug} delay={i * 0.06}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="group block h-full p-6 rounded-3xl bg-white border border-adobe shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all"
                  >
                    <ShieldCheck className="h-7 w-7 text-clay mb-3" strokeWidth={2.2} />
                    <p className="font-heading font-bold text-espresso">{s.title}</p>
                    <span className="mt-2 inline-flex items-center gap-1 text-sm font-heading font-bold text-clay group-hover:gap-2 transition-all">
                      Learn more <ArrowRight className="h-4 w-4" />
                    </span>
                  </Link>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <CTABand
          title={`Insulating ${loc.name} properties since 2008`}
          description={`Local expertise, certified crews, and same-day estimates. Call ${SITE.phone} or request your free estimate online.`}
        />
      </main>
      <Footer />
    </>
  );
}
