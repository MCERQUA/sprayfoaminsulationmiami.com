"use client";

import { motion, useReducedMotion } from "motion/react";
import {
  ThermometerSun, Wind, Droplets, Layers,
  Volume2, ShieldCheck,
} from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";

/* How spray foam protects your Miami home — paired with the energy-flow infographic. */
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
] as const;

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
] as const;

export function UnderstandingSprayFoam() {
  const prefersReduced = useReducedMotion();

  return (
    <section id="understanding" className="relative bg-cream py-20 md:py-28">
      <div className="container-wide">
        {/* How it protects — intro + energy-flow infographic */}
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

              {/* Floating SPF-fact card */}
              <motion.div
                initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
                whileInView={prefersReduced ? {} : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: 0.25, duration: 0.6 }}
                className="absolute -bottom-6 -right-3 md:-right-6 bg-white rounded-2xl shadow-warm-lg border border-adobe p-5 max-w-[15rem]"
              >
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
              </motion.div>
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

        {/* Protection points strip */}
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

        {/* Types comparison — intro + open-vs-closed infographic */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center mt-20 md:mt-24">
          <FadeIn className="lg:col-span-5">
            <div className="relative">
              <div className="relative overflow-hidden rounded-t-[12rem] rounded-b-3xl shadow-warm-lg border-4 border-white">
                <img
                  src="/images/spray-foam-open-vs-closed-cell-original.jpg"
                  alt="Infographic comparing open-cell and closed-cell spray foam insulation — R-value, moisture behavior, cost, and best use cases"
                  className="w-full h-[380px] md:h-[460px] object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/25 via-transparent to-transparent" />
              </div>
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

        {/* Open-cell vs closed-cell comparison cards */}
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
