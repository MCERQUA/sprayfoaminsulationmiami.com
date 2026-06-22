import type { Metadata } from "next";
import { headingFont, bodyFont } from "@/lib/fonts";
import { SmoothScroll } from "@/components/animations/SmoothScroll";
import { SITE } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Spray Foam Insulation Miami | Miami Spray Foam",
    template: "%s | Spray Foam Insulation Miami",
  },
  description: SITE.description,
  keywords: [
    "spray foam insulation Miami",
    "Miami spray foam insulation",
    "insulation contractor Miami FL",
    "open cell spray foam Miami",
    "closed cell spray foam Miami",
    "attic insulation Miami",
    "home insulation South Florida",
    "energy savings insulation Florida",
    "hurricane protection insulation Miami",
    "commercial spray foam Miami",
  ],
  authors: [{ name: "Spray Foam Insulation Miami" }],
  creator: "Spray Foam Insulation Miami",
  publisher: "Spray Foam Insulation Miami",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE.url,
    siteName: SITE.name,
    title: "Spray Foam Insulation Miami | Miami Spray Foam",
    description:
      "Miami's trusted spray foam insulation experts. Reduce energy bills by 50%, protect against humidity & hurricanes. Free quotes. Licensed & insured.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Spray Foam Insulation Miami — Miami's trusted spray foam insulation experts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Spray Foam Insulation Miami | Miami Spray Foam",
    description:
      "Miami's trusted spray foam insulation experts. Reduce energy bills by 50%, protect against humidity & hurricanes. Free quotes.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: SITE.url,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": ["HomeAndConstructionBusiness", "LocalBusiness"],
    name: SITE.name,
    description: SITE.description,
    url: SITE.url,
    telephone: "+13051234567",
    email: SITE.email,
    image: `${SITE.url}/images/og-image.jpg`,
    logo: `${SITE.url}/images/og-image.jpg`,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.state,
      postalCode: SITE.address.zip,
      addressCountry: SITE.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 25.7617,
      longitude: -80.1918,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "07:00",
        closes: "18:00",
      },
    ],
    areaServed: [
      { "@type": "AdministrativeArea", name: "Miami-Dade County" },
      { "@type": "AdministrativeArea", name: "Broward County" },
      { "@type": "AdministrativeArea", name: "Palm Beach County" },
    ],
    serviceType: [
      "Residential Spray Foam Insulation",
      "Commercial Spray Foam Insulation",
      "Open Cell Foam Insulation",
      "Closed Cell Foam Insulation",
      "Attic Insulation",
      "Crawl Space Insulation",
    ],
  };

  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
      </head>
      <body className="antialiased">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
