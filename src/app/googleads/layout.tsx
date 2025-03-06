import { Metadata } from "next";
import Script from 'next/script';

export const metadata: Metadata = {
  title: "Google Ads Usluge - Kursor",
  description: "Profesionalno upravljanje Google Ads kampanjama za vaš biznis. Povećajte vidljivost i konverzije putem Google pretraživača i mreže sa Kursor platformom.",
  metadataBase: new URL("https://www.vasastranicatestiranje.com"),
  openGraph: {
    title: "Google Ads Usluge - Kursor",
    description: "Profesionalno upravljanje Google Ads kampanjama za vaš biznis. Povećajte vidljivost i konverzije putem Google pretraživača i mreže sa Kursor platformom.",
    images: "URL to an image representing Google Ads services", // Replace with the actual image URL
    url: "https://www.vasastranicatestiranje.com/google-ads",
    type: "website",
  },
  keywords: "google ads, google oglasi, ppc reklame, digitalni marketing, Kursor, Srbija, Hrvatska, Bosna i Hercegovina, Balkanci",
  authors: [{ name: "Kursor" }],
  robots: "index, follow",
};

// Structured data for Google Ads services
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Google Ads Usluge",
  "description": "Profesionalno upravljanje Google Ads kampanjama za vaš biznis. Povećajte vidljivost i konverzije putem Google pretraživača i mreže sa Kursor platformom.",
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
    "name": "Paketi Usluga za Google Ads",
    "itemListElement": [
      {
        "@type": "Offer",
        "name": "Osnovni Paket",
        "description": "Upravljanje osnovnim Google Ads kampanjama za jednu platformu.",
        "price": "299",
        "priceCurrency": "EUR"
      },
      {
        "@type": "Offer",
        "name": "Premium Paket",
        "description": "Upravljanje naprednim Google Ads kampanjama sa analitikom i optimizacijom.",
        "price": "599",
        "priceCurrency": "EUR"
      }
    ]
  }
};

export default function GoogleAdsLayout({ children }: { children: React.ReactNode }) {
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