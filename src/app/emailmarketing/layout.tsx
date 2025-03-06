import { Metadata } from "next";
import Script from 'next/script';

export const metadata: Metadata = {
  title: "Email Marketing Usluge - Kursor",
  description: "Profesionalne usluge email marketinga za vaš biznis. Kreiramo efikasne email kampanje za povećanje prodaje i angažmana sa Kursor platformom.",
  metadataBase: new URL("https://www.vasastranicatestiranje.com"),
  openGraph: {
    title: "Email Marketing Usluge - Kursor",
    description: "Profesionalne usluge email marketinga za vaš biznis. Kreiramo efikasne email kampanje za povećanje prodaje i angažmana sa Kursor platformom.",
    images: "URL to an image representing email marketing services", // Replace with the actual image URL
    url: "https://www.vasastranicatestiranje.com/email-marketing",
    type: "website",
  },
  keywords: "email marketing, email kampanje, digitalni marketing, Kursor, Srbija, Hrvatska, Bosna i Hercegovina, Balkanci",
  authors: [{ name: "Kursor" }],
  robots: "index, follow",
};

// Structured data for Email Marketing services
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Email Marketing Usluge",
  "description": "Profesionalne usluge email marketinga za vaš biznis. Kreiramo efikasne email kampanje za povećanje prodaje i angažmana sa Kursor platformom.",
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
    "name": "Paketi Usluga za Email Marketing",
    "itemListElement": [
      {
        "@type": "Offer",
        "name": "Osnovni Paket",
        "description": "Kreiranje i slanje osnovnih email kampanja.",
        "price": "199",
        "priceCurrency": "EUR"
      },
      {
        "@type": "Offer",
        "name": "Premium Paket",
        "description": "Kreiranje i slanje naprednih email kampanja sa personalizacijom i analitikom.",
        "price": "499",
        "priceCurrency": "EUR"
      }
    ]
  }
};

export default function EmailMarketingLayout({ children }: { children: React.ReactNode }) {
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