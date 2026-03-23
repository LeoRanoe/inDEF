import type { Metadata } from "next";
import { Cormorant_Garamond, Barlow_Condensed, DM_Sans } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/providers/LenisProvider";
import { Toaster } from "@/components/ui/sonner";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-barlow",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

const siteUrl = "https://www.indefdesign.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "inDEF Design & Construction N.V. | Luxury Architecture Suriname",
    template: "%s | inDEF Design & Construction N.V.",
  },
  description:
    "Premier architectural design and construction firm in Suriname. We create bespoke luxury residences and commercial estates with photorealistic 3D visualization — from dream to reality, stress-free.",
  keywords: [
    "luxury architecture Suriname",
    "architectural design Paramaribo",
    "modern home construction Suriname",
    "3D visualization architecture",
    "premium construction Suriname",
    "bespoke residential design",
    "construction company Paramaribo",
    "luxury interior design Suriname",
    "inDEF design construction",
    "luxury real estate Suriname",
    "contemporary architecture Suriname",
    "architectural firm Wanica",
    "residential construction Suriname",
    "commercial architecture Paramaribo",
  ],
  authors: [{ name: "inDEF Design & Construction N.V.", url: siteUrl }],
  creator: "inDEF Design & Construction N.V.",
  publisher: "inDEF Design & Construction N.V.",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "nl_SR",
    alternateLocale: ["en_US"],
    url: siteUrl,
    siteName: "inDEF Design & Construction N.V.",
    title: "inDEF Design & Construction N.V. | Luxury Architecture Suriname",
    description:
      "Premier architectural design and construction firm in Suriname delivering bespoke luxury residences and stunning 3D visualizations. From vision to reality — stress-free.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1366,
        height: 768,
        alt: "Oasis Residences — luxury contemporary estate designed and built by inDEF Design & Construction N.V. Suriname",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "inDEF Design & Construction N.V. | Luxury Architecture Suriname",
    description:
      "Premier architectural design and construction firm in Suriname. From vision to reality — stress-free.",
    images: ["/images/og-image.jpg"],
  },
  alternates: {
    canonical: siteUrl,
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${siteUrl}/#organization`,
  name: "inDEF Design & Construction N.V.",
  description:
    "Premier architectural design and construction firm in Suriname delivering bespoke luxury residences, commercial projects, and 3D visualizations.",
  url: siteUrl,
  telephone: "+597-874-3028",
  email: "info@indefdesign.com",
  logo: {
    "@type": "ImageObject",
    url: `${siteUrl}/images/logo.png`,
  },
  image: `${siteUrl}/images/og-image.jpg`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "De Crane Weg #70",
    addressLocality: "Wanica",
    addressRegion: "Wanica",
    addressCountry: "SR",
  },
  areaServed: {
    "@type": "Country",
    name: "Suriname",
  },
  knowsAbout: [
    "Architectural Design",
    "3D Visualization",
    "Construction Management",
    "Interior Design",
    "Residential Construction",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Design & Construction Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Architectural Design",
          description:
            "Bespoke blueprints and 3D models for high-end residential and commercial estates.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "3D Visualization",
          description:
            "Photorealistic immersive environments and virtual walkthroughs.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Construction & Execution",
          description:
            "Turnkey project management with absolute adherence to specification.",
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${cormorant.variable} ${barlow.variable} ${dmSans.variable} font-body antialiased bg-dark-bg text-on-surface`}
      >
        <LenisProvider>
          {children}
        </LenisProvider>
        <Toaster />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </body>
    </html>
  );
}
