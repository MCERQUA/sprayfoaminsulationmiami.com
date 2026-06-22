"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { FadeIn } from "@/components/animations/FadeIn";
import { SITE } from "@/lib/site";
import { QUOTE_PROPERTY_TYPES, QUOTE_AREA_OPTIONS, QUOTE_FOAM_TYPES } from "@/lib/content";
import { CheckCircle2, ShieldCheck, ArrowRight, Phone, Clock, MapPin } from "lucide-react";

const WEBHOOK_URL =
  "https://josh.jam-bot.com/social-api/api/leads/webhook/netlify?tenant=josh&site=sprayfoaminsulationmiami.com";

const trustItems = [
  { icon: ShieldCheck, title: "Licensed, bonded & insured", desc: "SPFA-certified crews serving Miami since 2008." },
  { icon: Clock, title: "Same-day response", desc: "Detailed proposal within 24 hours — often same day." },
  { icon: CheckCircle2, title: "Free, no obligation", desc: "Transparent pricing with no hidden fees. We'll beat any written quote." },
  { icon: MapPin, title: "South Florida wide", desc: "Miami-Dade, Broward & Palm Beach counties." },
];

export default function QuotePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    propertyType: "",
    areaToInsulate: "",
    foamType: "",
    message: "",
    "bot-field": "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData["bot-field"]) return;
    setSubmitting(true);
    setError("");
    try {
      await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ form_name: "quote", source: "sprayfoaminsulationmiami.com", ...formData }),
      });
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please call us at 844-967-5247 or try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-adobe bg-cream/50 text-espresso placeholder-mocha/60 focus:outline-none focus:border-clay focus:ring-2 focus:ring-clay/20 transition-all text-sm";
  const labelClass = "block text-sm font-heading font-semibold text-espresso mb-1.5";

  return (
    <>
      <Navbar />
      <main>
        <section className="relative bg-warm-radial pt-32 pb-20 md:pt-40 md:pb-28">
          <div className="container-wide">
            <FadeIn className="text-center max-w-2xl mx-auto mb-12">
              <span className="pill-clay"><ShieldCheck className="h-3.5 w-3.5" /> Free estimate</span>
              <h1 className="mt-5 font-heading font-extrabold text-espresso text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
                Get your{" "}
                <span className="bg-gradient-to-r from-clay via-clay-light to-gold-dark bg-clip-text text-transparent">
                  free spray foam estimate
                </span>
              </h1>
              <p className="mt-5 lead">
                Tell us about your property and we&apos;ll respond within 24 hours with a detailed
                proposal — often same day. No obligation, transparent pricing.
              </p>
            </FadeIn>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Trust sidebar */}
              <div className="space-y-4">
                {trustItems.map((item) => (
                  <FadeIn key={item.title}>
                    <div className="flex gap-3 p-5 rounded-2xl bg-white border border-adobe shadow-card">
                      <span className="flex-shrink-0 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-clay/10 text-clay">
                        <item.icon className="h-5 w-5" strokeWidth={2.2} />
                      </span>
                      <div>
                        <p className="font-heading font-bold text-espresso text-sm">{item.title}</p>
                        <p className="text-mocha text-xs leading-relaxed mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  </FadeIn>
                ))}
                <FadeIn>
                  <div className="p-5 rounded-2xl bg-espresso text-cream text-center">
                    <p className="text-xs font-heading font-bold uppercase tracking-wider text-gold mb-2">
                      Prefer to call?
                    </p>
                    <a href={SITE.phoneHref} className="flex items-center justify-center gap-2 text-cream font-heading font-extrabold text-xl hover:text-gold-light transition-colors">
                      <Phone className="h-5 w-5" />
                      {SITE.phone}
                    </a>
                    <p className="text-xs text-cream/60 mt-1">{SITE.hours}</p>
                  </div>
                </FadeIn>
              </div>

              {/* Form */}
              <div className="lg:col-span-2">
                {submitted ? (
                  <FadeIn>
                    <div className="p-10 md:p-12 rounded-3xl bg-white border border-adobe shadow-card text-center">
                      <div className="w-16 h-16 rounded-full bg-sage/15 flex items-center justify-center mx-auto mb-4">
                        <CheckCircle2 className="h-8 w-8 text-sage" />
                      </div>
                      <h2 className="font-heading font-extrabold text-espresso text-2xl mb-3">
                        Estimate request received
                      </h2>
                      <p className="text-mocha mb-2">
                        Thank you! We&apos;ll review your project and reach out within 24 hours with
                        your detailed proposal — often the same day.
                      </p>
                      <p className="text-sm text-mocha">
                        Need it sooner? Call{" "}
                        <a href={SITE.phoneHref} className="text-clay font-heading font-semibold">
                          {SITE.phone}
                        </a>
                        .
                      </p>
                      <Link href="/" className="btn-secondary mt-6 inline-flex">
                        Back to home
                      </Link>
                    </div>
                  </FadeIn>
                ) : (
                  <FadeIn>
                    <form
                      name="quote"
                      data-netlify="true"
                      netlify-honeypot="bot-field"
                      onSubmit={handleSubmit}
                      className="rounded-3xl bg-white border border-adobe shadow-card p-7 md:p-9 space-y-5"
                    >
                      <input type="hidden" name="form-name" value="quote" />
                      <input
                        name="bot-field"
                        type="hidden"
                        value={formData["bot-field"]}
                        onChange={handleChange}
                        className="hidden"
                      />

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="name" className={labelClass}>Full name *</label>
                          <input id="name" name="name" type="text" required value={formData.name} onChange={handleChange} placeholder="Jane Smith" className={inputClass} />
                        </div>
                        <div>
                          <label htmlFor="phone" className={labelClass}>Phone *</label>
                          <input id="phone" name="phone" type="tel" required value={formData.phone} onChange={handleChange} placeholder="844-967-5247" className={inputClass} />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="email" className={labelClass}>Email *</label>
                          <input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} placeholder="jane@email.com" className={inputClass} />
                        </div>
                        <div>
                          <label htmlFor="address" className={labelClass}>Property address / City *</label>
                          <input id="address" name="address" type="text" required value={formData.address} onChange={handleChange} placeholder="123 Main St, Miami, FL" className={inputClass} />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-3 gap-4">
                        <div>
                          <label htmlFor="propertyType" className={labelClass}>Property type *</label>
                          <select id="propertyType" name="propertyType" required value={formData.propertyType} onChange={handleChange} className={inputClass}>
                            <option value="">Select…</option>
                            {QUOTE_PROPERTY_TYPES.map((t) => (<option key={t} value={t}>{t}</option>))}
                          </select>
                        </div>
                        <div>
                          <label htmlFor="areaToInsulate" className={labelClass}>Area to insulate *</label>
                          <select id="areaToInsulate" name="areaToInsulate" required value={formData.areaToInsulate} onChange={handleChange} className={inputClass}>
                            <option value="">Select…</option>
                            {QUOTE_AREA_OPTIONS.map((a) => (<option key={a} value={a}>{a}</option>))}
                          </select>
                        </div>
                        <div>
                          <label htmlFor="foamType" className={labelClass}>Foam type</label>
                          <select id="foamType" name="foamType" value={formData.foamType} onChange={handleChange} className={inputClass}>
                            <option value="">Select…</option>
                            {QUOTE_FOAM_TYPES.map((f) => (<option key={f} value={f}>{f}</option>))}
                          </select>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="message" className={labelClass}>
                          Message{" "}
                          <span className="text-mocha/60 font-normal">(optional)</span>
                        </label>
                        <textarea
                          id="message" name="message" rows={4} value={formData.message}
                          onChange={handleChange} placeholder="Square footage, age of home, current insulation, comfort issues, or anything else that helps us scope your project…"
                          className={`${inputClass} resize-none`}
                        />
                      </div>

                      {error && <p className="text-red-600 text-sm font-medium">{error}</p>}

                      <button
                        type="submit"
                        disabled={submitting}
                        className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-clay-gradient text-white font-heading font-bold rounded-full shadow-warm hover:shadow-warm-lg hover:-translate-y-0.5 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {submitting ? "Sending…" : "Get My Free Estimate"}
                        {!submitting && <ArrowRight className="h-5 w-5" />}
                      </button>
                      <p className="text-xs text-center text-mocha/70">
                        No spam. No commitment. We&apos;ll only contact you about your estimate.
                      </p>
                    </form>
                  </FadeIn>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
