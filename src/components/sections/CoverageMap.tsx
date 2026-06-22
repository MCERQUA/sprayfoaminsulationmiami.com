"use client";

import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { LOCATIONS } from "@/lib/site";
import { FL_REGIONS, SERVICE_AREA_CITIES } from "@/lib/content";
import { FadeIn } from "@/components/animations/FadeIn";

export function CoverageMap() {
  return (
    <section id="coverage" className="relative bg-sonoran py-20 md:py-28">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Copy + regions */}
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

          {/* Coastal visual card */}
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
