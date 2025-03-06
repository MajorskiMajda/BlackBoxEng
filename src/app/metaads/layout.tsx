import { Metadata } from "next";
import Script from 'next/script';

export const metadata: Metadata = {
  title: "Meta Ads Usluge - Kursor",
  description: "Profesionalno upravljanje Meta oglasima za vaš biznis. Povećajte prodaju i angažman putem Facebook i Instagram reklama sa Kursor platformom.",
  metadataBase: new URL("https://www.vasastranicatestiranje.com"),
  openGraph: {
    title: "Meta Ads Usluge - Kursor",
    description: "Profesionalno upravljanje Meta oglasima za vaš biznis. Povećajte prodaju i angažman putem Facebook i Instagram reklama sa Kursor platformom.",
    images: "URL to an image representing Meta Ads services", // Replace with the actual image URL
    url: "https://www.vasastranicatestiranje.com/meta-ads",
    type: "website",
  },
  keywords: "meta ads, facebook oglasi, instagram reklame, digitalni marketing, Kursor, Srbija, Hrvatska, Bosna i Hercegovina, Balkanci",
  authors: [{ name: "Kursor" }],
  robots: "index, follow",
};

// Structured data for Meta Ads services
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Meta Ads Usluge",
  "description": "Profesionalno upravljanje Meta oglasima za vaš biznis. Povećajte prodaju i angažman putem Facebook i Instagram reklama sa Kursor platformom.",
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
    "name": "Paketi Usluga za Meta Ads",
    "itemListElement": [
      {
        "@type": "Offer",
        "name": "Osnovni Paket",
        "description": "Upravljanje osnovnim Meta oglasima za jednu platformu.",
        "price": "299",
        "priceCurrency": "EUR"
      },
      {
        "@type": "Offer",
        "name": "Premium Paket",
        "description": "Upravljanje naprednim Meta oglasima za više platformi sa analitikom i optimizacijom.",
        "price": "599",
        "priceCurrency": "EUR"
      }
    ]
  }
};

export default function MetaAdsLayout({ children }: { children: React.ReactNode }) {
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