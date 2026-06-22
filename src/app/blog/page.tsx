import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { CTABand } from "@/components/sections/CTABand";
import { FadeIn } from "@/components/animations/FadeIn";
import { getAllPosts } from "@/lib/blog";
import { SITE } from "@/lib/site";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Spray Foam Insulation Blog — Miami Guides & Insights",
  description:
    "Practical guidance on spray foam insulation in Miami: open-cell vs closed-cell, energy savings, hurricane and humidity protection, attic insulation, and cost. From Miami's insulation experts since 2008.",
  alternates: { canonical: `${SITE.url}/blog` },
  openGraph: {
    title: "Spray Foam Insulation Blog | Miami Spray Foam",
    description:
      "Expert guides on spray foam insulation, energy savings, hurricane protection, and South Florida home comfort.",
    url: `${SITE.url}/blog`,
  },
};

export default function BlogPage() {
  const posts = getAllPosts();
  const [featured, ...rest] = posts;

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE.url}/blog` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Navbar />
      <main>
        <section className="relative bg-warm-radial pt-32 pb-12 md:pt-40 md:pb-16">
          <div className="container-tight text-center">
            <FadeIn>
              <span className="pill-clay">Blog & insights</span>
              <h1 className="mt-5 font-heading font-extrabold text-espresso text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
                Spray foam insulation,{" "}
                <span className="bg-gradient-to-r from-clay via-clay-light to-gold-dark bg-clip-text text-transparent">
                  explained
                </span>
              </h1>
              <p className="mt-5 lead max-w-2xl mx-auto">
                Plain-English guides on insulation, energy savings, and South Florida home comfort —
                from open-cell vs closed-cell to hurricane and humidity protection.
              </p>
            </FadeIn>
          </div>
        </section>

        <section className="bg-cream py-12 md:py-16">
          <div className="container-wide">
            {posts.length === 0 ? (
              <p className="text-center text-mocha py-16">Articles coming soon.</p>
            ) : (
              <>
                {/* Featured */}
                {featured && (
                  <FadeIn className="mb-12">
                    <Link href={`/blog/${featured.slug}`} className="group block">
                      <article className="grid md:grid-cols-2 gap-0 rounded-[2rem] overflow-hidden bg-white border border-adobe shadow-card hover:shadow-card-hover transition-all">
                        <div className="relative overflow-hidden">
                          <img
                            src={featured.image || "/images/attic-foam.jpg"}
                            alt={featured.title}
                            className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute top-4 left-4">
                            <span className="pill-gold !bg-gold !text-espresso !border-gold-dark">Featured</span>
                          </div>
                        </div>
                        <div className="p-8 md:p-10 flex flex-col justify-center">
                          <div className="flex items-center gap-3 text-xs text-mocha mb-3">
                            <span className="px-2.5 py-0.5 bg-clay/10 text-clay rounded-md font-heading font-semibold">{featured.category}</span>
                            <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5" />{new Date(featured.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
                            <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{featured.readTime}</span>
                          </div>
                          <h2 className="font-heading font-extrabold text-espresso text-2xl md:text-3xl leading-tight group-hover:text-clay transition-colors">
                            {featured.title}
                          </h2>
                          <p className="mt-3 text-mocha leading-relaxed">{featured.description}</p>
                          <span className="mt-5 inline-flex items-center gap-1 text-clay font-heading font-bold group-hover:gap-2 transition-all">
                            Read article <ArrowRight className="h-4 w-4" />
                          </span>
                        </div>
                      </article>
                    </Link>
                  </FadeIn>
                )}

                {/* Grid */}
                <div className="grid md:grid-cols-3 gap-6">
                  {rest.map((post, i) => (
                    <FadeIn key={post.slug} delay={i * 0.08}>
                      <Link href={`/blog/${post.slug}`} className="group block h-full">
                        <article className="rounded-3xl overflow-hidden bg-white border border-adobe shadow-card hover:shadow-card-hover transition-all h-full flex flex-col">
                          <div className="h-2 bg-clay-gradient" />
                          <div className="p-6 flex-grow flex flex-col">
                            <div className="flex items-center gap-3 text-xs text-mocha mb-3">
                              <span className="px-2.5 py-0.5 bg-clay/10 text-clay rounded-md font-heading font-semibold">{post.category}</span>
                              <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{post.readTime}</span>
                            </div>
                            <h3 className="font-heading font-bold text-espresso text-lg leading-tight group-hover:text-clay transition-colors line-clamp-2">
                              {post.title}
                            </h3>
                            <p className="mt-2 text-sm text-mocha leading-relaxed line-clamp-3 flex-grow">{post.description}</p>
                            <span className="mt-4 inline-flex items-center gap-1 text-sm font-heading font-bold text-clay group-hover:gap-2 transition-all">
                              Read <ArrowRight className="h-4 w-4" />
                            </span>
                          </div>
                        </article>
                      </Link>
                    </FadeIn>
                  ))}
                </div>
              </>
            )}
          </div>
        </section>

        <CTABand
          title="Have an insulation question we didn't answer?"
          description="Get a straight answer — and a free estimate — usually the same day."
        />
      </main>
      <Footer />
    </>
  );
}
