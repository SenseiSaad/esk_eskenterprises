import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SITE } from "@/lib/site";

const title = "ESK Properties | Property Dealers in Lahore: Buy, Sell & Rent";
const description =
  "ESK Properties is a trusted property dealer in Lahore. Buy, sell or rent plots, houses, apartments and commercial property in DHA, Bahria Town, Gulberg, Johar Town, Manawan and 100+ societies. Chat on WhatsApp.";

export const metadata: Metadata = {
  // Prefer the configured canonical domain, then Vercel's deployment URL.
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ??
      (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000"),
  ),
  title,
  description,
  keywords: [
    "property dealer Lahore",
    "real estate Lahore",
    "plots for sale Lahore",
    "houses for rent Lahore",
    "apartments for rent Lahore",
    "DHA Lahore",
    "Bahria Town Lahore",
    "Manawan Lahore",
    "ESK Properties",
    "Waseem Asghar",
  ],
  authors: [{ name: SITE.agent }],
  openGraph: {
    title,
    description,
    type: "website",
    locale: "en_PK",
    siteName: SITE.name,
    images: [
      { url: "/assets/images/esk/hero.jpg", width: 2400, height: 1600, alt: "ESK Properties, Lahore" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/assets/images/esk/hero.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0b0a08",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: SITE.name,
  description,
  telephone: SITE.phoneTel,
  email: SITE.email,
  areaServed: {
    "@type": "City",
    name: "Lahore",
    containedInPlace: { "@type": "Country", name: "Pakistan" },
  },
  address: { "@type": "PostalAddress", addressLocality: "Lahore", addressCountry: "PK" },
  employee: { "@type": "Person", name: SITE.agent, jobTitle: SITE.agentRole },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-ink text-ivory font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
