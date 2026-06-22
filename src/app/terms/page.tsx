import type { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { FadeIn } from "@/components/animations/FadeIn";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms governing your use of sprayfoaminsulationmiami.com and the spray foam insulation services of Spray Foam Insulation Miami.",
  alternates: { canonical: `${SITE.url}/terms` },
  robots: { index: false, follow: true },
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="bg-cream pt-32 pb-20 md:pt-40">
        <div className="container-tight max-w-3xl">
          <FadeIn>
            <span className="pill-clay">Legal</span>
            <h1 className="mt-5 font-heading font-extrabold text-espresso text-3xl md:text-4xl lg:text-5xl tracking-tight">Terms of Service</h1>
            <p className="text-mocha mt-3 text-sm">Last updated: June 2026</p>

            <div className="prose-warm mt-8">
              <p>
                These terms govern your use of {SITE.domain}. By accessing this website, you agree
                to the terms below. {SITE.legalName} is a licensed insulation contractor serving
                South Florida.
              </p>

              <h2>Estimates Are Indicative</h2>
              <p>
                Information on this website is provided for general educational purposes and does not
                constitute a binding contract for services. Any free estimate provided is based on the
                information you supply and on a visual on-site assessment. The final scope and price
                of your project are confirmed in a written proposal that both parties agree to before
                any work begins.
              </p>

              <h2>Scheduling &amp; Installation</h2>
              <p>
                Installation dates are scheduled based on crew availability and are confirmed in
                writing. We will communicate any changes to your schedule promptly. All work is
                performed by our certified crews and is backed by our workmanship warranty as
                described in your written proposal.
              </p>

              <h2>Accuracy of Information</h2>
              <p>
                We strive to keep this website accurate and current, but products, pricing, and
                building-code requirements change. Contact us to confirm any detail before relying on
                it for a project decision.
              </p>

              <h2>Use of the Website</h2>
              <p>
                You agree not to misuse this website, attempt to gain unauthorized access, submit
                fraudulent information, or interfere with its operation. You agree to provide
                truthful information when requesting an estimate.
              </p>

              <h2>Third Parties &amp; External Links</h2>
              <p>
                We are not responsible for the content or practices of third-party websites linked
                from this site.
              </p>

              <h2>Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, {SITE.legalName} is not liable for indirect,
                incidental, or consequential damages arising from your use of this website. Your use
                is at your own risk.
              </p>

              <h2>Governing Law</h2>
              <p>
                These terms are governed by the laws of the State of Florida, without regard to
                conflict-of-law principles.
              </p>

              <h2>Contact</h2>
              <p>
                Questions about these terms? Email{" "}
                <a href={`mailto:${SITE.email}`}>{SITE.email}</a> or call{" "}
                <a href={SITE.phoneHref}>{SITE.phone}</a>.
              </p>
            </div>
          </FadeIn>
        </div>
      </main>
      <Footer />
    </>
  );
}
