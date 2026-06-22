"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, Phone, ShieldCheck, Star, CheckCircle2 } from "lucide-react";
import { SITE } from "@/lib/site";

export function Hero() {
  const prefersReduced = useReducedMotion();
  const container = prefersReduced
    ? {}
    : {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { staggerChildren: 0.08, delayChildren: 0.05 },
      };
  const item = prefersReduced
    ? {}
    : { initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 } };

  return (
    <section className="relative overflow-hidden bg-warm-radial pt-32 pb-20 md:pt-40 md:pb-28">
      {/* Decorative wave band at top */}
      <div className="absolute top-24 inset-x-0 h-px horizon-band opacity-70" aria-hidden />
      {/* Wave SVG motif - subtle */}
      <WaveSilhouette className="absolute right-4 bottom-0 h-40 w-[60%] text-sage/8 hidden lg:block" />

      <div className="container-wide relative">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Copy column */}
          <motion.div className="lg:col-span-6" {...container}>
            <motion.div {...item}>
              <span className="pill-clay">
                <span className="h-1.5 w-1.5 rounded-full bg-clay animate-pulse" />
                Miami · Broward · Palm Beach
              </span>
            </motion.div>

            <motion.h1
              {...item}
              className="mt-5 font-heading font-extrabold text-espresso text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl leading-[1.05] tracking-tight"
            >
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
            </motion.h1>

            <motion.p {...item} className="mt-6 lead max-w-xl">
              Protect your home from Miami&apos;s extreme heat and humidity. Our high-performance{" "}
              <strong className="text-espresso">spray foam insulation</strong> reduces energy bills
              by up to 50% while creating a comfortable, sealed environment year-round.
            </motion.p>

            <motion.div {...item} className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link href="/quote" className="btn-primary text-base">
                Get My Free Estimate
                <ArrowRight className="h-5 w-5" />
              </Link>
              <a href={SITE.phoneHref} className="btn-secondary text-base">
                <Phone className="h-5 w-5" />
                {SITE.phone}
              </a>
            </motion.div>

            {/* Trust micro-bar */}
            <motion.div {...item} className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-mocha">
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-sage" />
                Free estimates
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-sage" />
                Same-day response
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-sage" />
                Licensed &amp; insured
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Star className="h-4 w-4 text-gold fill-gold" />
                Since 2008
              </span>
            </motion.div>
          </motion.div>

          {/* Visual column */}
          <motion.div
            className="lg:col-span-6 relative"
            initial={prefersReduced ? {} : { opacity: 0, scale: 0.96 }}
            animate={prefersReduced ? {} : { opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            {/* Porthole / arch frame */}
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

              {/* Floating stat card */}
              <motion.div
                initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
                animate={prefersReduced ? {} : { opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="absolute -bottom-6 -left-4 md:-left-8 bg-white rounded-2xl shadow-warm-lg border border-adobe p-5 max-w-[15rem]"
              >
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
              </motion.div>

              {/* Floating since badge */}
              <motion.div
                initial={prefersReduced ? {} : { opacity: 0, y: -10 }}
                animate={prefersReduced ? {} : { opacity: 1, y: 0 }}
                transition={{ delay: 0.75, duration: 0.6 }}
                className="absolute -top-4 -right-3 md:-right-6 bg-sage text-white rounded-2xl shadow-warm-lg px-4 py-3"
              >
                <p className="font-heading font-bold text-sm">Since 2008</p>
                <p className="text-[0.7rem] text-white/80 mt-0.5">1,000+ Miami homes insulated</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function WaveSilhouette({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 600 120"
      fill="none"
      aria-hidden
      preserveAspectRatio="none"
    >
      <path
        d="M0 70 Q 75 30 150 70 T 300 70 T 450 70 T 600 70 V120 H0 Z"
        fill="currentColor"
        opacity="0.5"
      />
      <path
        d="M0 88 Q 75 58 150 88 T 300 88 T 450 88 T 600 88 V120 H0 Z"
        fill="currentColor"
        opacity="0.8"
      />
    </svg>
  );
}
