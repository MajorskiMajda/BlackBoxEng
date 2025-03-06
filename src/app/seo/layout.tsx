import { Metadata } from "next";
import Script from 'next/script';

export const metadata: Metadata = {
  title: "SEO Usluge - Kursor",
  description: "Profesionalne SEO usluge za poboljšanje vidljivosti vašeg sajta u pretraživačima. Povećajte organički promet i rangiranje sa Kursor platformom.",
  metadataBase: new URL("https://www.vasastranicatestiranje.com"),
  openGraph: {
    title: "SEO Usluge - Kursor",
    description: "Profesionalne SEO usluge za poboljšanje vidljivosti vašeg sajta u pretraživačima. Povećajte organički promet i rangiranje sa Kursor platformom.",
    images: "URL to an image representing SEO services", // Replace with the actual image URL
    url: "https://www.vasastranicatestiranje.com/seo",
    type: "website",
  },
  keywords: "SEO usluge, optimizacija za pretraživače, organički promet, Google rangiranje, Kursor, Srbija, Hrvatska, Bosna i Hercegovina, Balkanci",
  authors: [{ name: "Kursor" }],
  robots: "index, follow",
};

// Structured data for SEO services
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "SEO Usluge",
  "description": "Profesionalne SEO usluge za poboljšanje vidljivosti vašeg sajta u pretraživačima. Povećajte organički promet i rangiranje sa Kursor platformom.",
  "provider": {
    "@type": "Organization",
    "name": "Kursor",
    "logo": "https://www.vasastranicatestiranje.com/logo.png" // Replace with your logo URL
  },
  "areaServed": {
    "@type": "Country",
    "name": ["Srbija", "Hrvatska", "Bosna i Hercegovina"]
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Paketi Usluga za SEO",
    "itemListElement": [
      {
        "@type": "Offer",
        "name": "Osnovni SEO Paket",
        "description": "Optimizacija sajta za ključne reči i osnovne SEO strategije.",
        "price": "299",
        "priceCurrency": "EUR"
      },
      {
        "@type": "Offer",
        "name": "Premium SEO Paket",
        "description": "Kompletna SEO optimizacija sa naprednim strategijama i analitikom.",
        "price": "599",
        "priceCurrency": "EUR"
      }
    ]
  }
};

export default function SEOLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {children}
    </>
  );
}