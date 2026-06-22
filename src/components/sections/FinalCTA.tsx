"use client";

import Link from "next/link";
import { ArrowRight, Phone, Clock } from "lucide-react";
import { SITE } from "@/lib/site";
import { FadeIn } from "@/components/animations/FadeIn";

const trustChips = [
  "Free estimates, no obligation",
  "Same-day response guaranteed",
  "Licensed, bonded & insured",
];

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-clay-gradient py-20 md:py-24">
      {/* texture */}
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
            {trustChips.map((chip) => (
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
