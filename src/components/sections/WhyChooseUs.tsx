"use client";

import { Users } from "lucide-react";
import { WHY_CHOOSE } from "@/lib/content";
import { FadeIn } from "@/components/animations/FadeIn";

export function WhyChooseUs() {
  return (
    <section id="why" className="relative bg-sonoran-sand py-20 md:py-28">
      <div className="container-wide">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Sticky heading column */}
          <FadeIn className="lg:col-span-5 lg:sticky lg:top-28">
            <span className="eyebrow">
              <span className="h-px w-8 bg-clay" />
              Why Miami chooses us
            </span>
            <h2 className="mt-3 h-section">
              Why Choose Spray Foam Insulation{" "}
              <span className="text-clay">Miami</span>.
            </h2>
            <p className="mt-4 lead">
              Trusted by thousands of Miami homeowners for quality insulation that lasts a lifetime.
              Certified crews, honest pricing, and local expertise built for South Florida&apos;s climate.
            </p>

            <div className="mt-8 rounded-3xl overflow-hidden border-4 border-white shadow-warm-lg">
              <img
                src="/images/crew-portrait.jpg"
                alt="The Miami Spray Foam Insulation installation crew on a jobsite"
                className="w-full h-[260px] object-cover"
                loading="lazy"
              />
            </div>

            <div className="mt-6 rounded-3xl bg-white border border-adobe shadow-card p-6">
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-clay-gradient text-white">
                  <Users className="h-6 w-6" strokeWidth={2.2} />
                </span>
                <div>
                  <p className="font-heading font-bold text-espresso">
                    Local Miami experts since 2008
                  </p>
                  <p className="text-sm text-mocha mt-1 leading-relaxed">
                    We&apos;ve insulated over 1,000 Miami homes and businesses. Our crews know the
                    building codes, the climate, and the right foam for every assembly.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Reasons grid */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
            {WHY_CHOOSE.map((item, i) => (
              <FadeIn key={item.title} delay={(i % 2) * 0.06}>
                <div className="h-full rounded-3xl bg-white border border-adobe p-6 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-sage/10 text-sage mb-4">
                    <item.icon className="h-6 w-6" strokeWidth={2.2} />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-espresso leading-tight">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-mocha leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
