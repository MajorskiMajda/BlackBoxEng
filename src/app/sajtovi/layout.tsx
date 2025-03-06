import { Metadata } from "next";
import Script from 'next/script';

export const metadata: Metadata = {
  title: "Izrada Sajtova - Kursor",
  description: "Profesionalna izrada sajtova po meri za vaš biznis. Moderni, responzivni i optimizovani sajtovi za bolju online prisutnost sa Kursor platformom.",
  metadataBase: new URL("https://www.vasastranicatestiranje.com"),
  openGraph: {
    title: "Izrada Sajtova - Kursor",
    description: "Profesionalna izrada sajtova po meri za vaš biznis. Moderni, responzivni i optimizovani sajtovi za bolju online prisutnost sa Kursor platformom.",
    images: "URL to an image representing website development services", // Replace with the actual image URL
    url: "https://www.vasastranicatestiranje.com/izrada-sajtova",
    type: "website",
  },
  keywords: "izrada sajtova, web development, responzivni sajtovi, optimizacija sajtova, Kursor, Srbija, Hrvatska, Bosna i Hercegovina, Balkanci",
  authors: [{ name: "Kursor" }],
  robots: "index, follow",
};

// Structured data for Website Development services
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Izrada Sajtova",
  "description": "Profesionalna izrada sajtova po meri za vaš biznis. Moderni, responzivni i optimizovani sajtovi za bolju online prisutnost sa Kursor platformom.",
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
    "name": "Paketi Usluga za Izradu Sajtova",
    "itemListElement": [
      {
        "@type": "Offer",
        "name": "Osnovni Paket",
        "description": "Izrada jednostavnog sajta sa osnovnim funkcionalnostima.",
        "price": "499",
        "priceCurrency": "EUR"
      },
      {
        "@type": "Offer",
        "name": "Premium Paket",
        "description": "Izrada kompleksnog sajta sa naprednim funkcionalnostima i optimizacijom.",
        "price": "999",
        "priceCurrency": "EUR"
      }
    ]
  }
};

export default function WebsiteDevelopmentLayout({ children }: { children: React.ReactNode }) {
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