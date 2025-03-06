import { Metadata } from "next";
import Script from 'next/script';

export const metadata: Metadata = {
  title: "Upravljanje Društvenim Mrežama (SMM) - Kursor",
  description: "Profesionalno upravljanje društvenim mrežama za vaš biznis. Povećajte prisustvo i angažman na Facebook, Instagram, LinkedIn i drugim platformama uz Kursor platformu.",
  metadataBase: new URL("https://www.vasastranicatestiranje.com"),
  openGraph: {
    title: "Upravljanje Društvenim Mrežama (SMM) - Kursor",
    description: "Profesionalno upravljanje društvenim mrežama za vaš biznis. Povećajte prisustvo i angažman na Facebook, Instagram, LinkedIn i drugim platformama uz Kursor platformu.",
    images: "URL to an image representing SMM services", // Replace with the actual image URL
    url: "https://www.vasastranicatestiranje.com/smm",
    type: "website",
  },
  keywords: "upravljanje društvenim mrežama, SMM, marketing na društvenim mrežama, Facebook marketing, Instagram marketing, LinkedIn marketing, Kursor, Srbija, Hrvatska, Bosna i Hercegovina, Balkanci",
  authors: [{ name: "Kursor" }],
  robots: "index, follow",
};

// Structured data for SMM services
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Upravljanje Društvenim Mrežama (SMM)",
  "description": "Profesionalno upravljanje društvenim mrežama za vaš biznis. Povećajte prisustvo i angažman na Facebook, Instagram, LinkedIn i drugim platformama uz Kursor platformu.",
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
    "name": "Paketi Usluga za SMM",
    "itemListElement": [
      {
        "@type": "Offer",
        "name": "Osnovni Paket",
        "description": "Upravljanje jednom društvenom mrežom sa osnovnim strategijama.",
        "price": "199",
        "priceCurrency": "EUR"
      },
      {
        "@type": "Offer",
        "name": "Premium Paket",
        "description": "Upravljanje više društvenih mreža sa naprednim strategijama i analitikom.",
        "price": "499",
        "priceCurrency": "EUR"
      }
    ]
  }
};

export default function SMMLayout({ children }: { children: React.ReactNode }) {
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