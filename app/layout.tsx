import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { SITE_URL } from "@/lib/site";
import { REVIEWS } from "@/lib/reviews";

const TITLE =
  "Douglas Driveway Services | Driveway Sealing & Pressure Washing — Regina, SK";
const DESCRIPTION =
  "Hand-rolled driveway sealing, pressure washing, and snow clearing for Regina, White City, Emerald Park, Pilot Butte & Moose Jaw. Free estimates. Call (306) 540-8311.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: SITE_URL,
    siteName: "Douglas Driveway Services",
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: "/images/finished_driveway_hero.jpg",
        alt: "Freshly sealed driveway by Douglas Driveway Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/images/finished_driveway_hero.jpg"],
  },
};

// LocalBusiness structured data — tells Google this is a Regina-area
// driveway business, with service area, hours and star rating.
// reviewCount is tied to the reviews actually shown on the site, so it
// stays accurate as reviews are added.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
  name: "Douglas Driveway Services",
  image: `${SITE_URL}/images/finished_driveway_hero.jpg`,
  url: SITE_URL,
  telephone: "+1-306-540-8311",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Regina",
    addressRegion: "SK",
    addressCountry: "CA",
  },
  areaServed: [
    { "@type": "City", name: "Regina" },
    { "@type": "City", name: "White City" },
    { "@type": "City", name: "Emerald Park" },
    { "@type": "City", name: "Pilot Butte" },
    { "@type": "City", name: "Moose Jaw" },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "06:00",
      closes: "19:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: String(REVIEWS.length),
    bestRating: "5",
    worstRating: "1",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Zilla+Slab:wght@500;600;700&family=Public+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Nav />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
