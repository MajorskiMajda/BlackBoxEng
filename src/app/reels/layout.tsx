import { Metadata } from "next";
import Script from 'next/script';

export const metadata: Metadata = {
  title: "Produkcija Reelsa - Kursor",
  description: "Profesionalna produkcija Reels sadržaja za društvene mreže. Kreiramo privlačne i angažovane video sadržaje za vaš brend sa Kursor platformom.",
  metadataBase: new URL("https://www.vasastranicatestiranje.com"),
  openGraph: {
    title: "Produkcija Reelsa - Kursor",
    description: "Profesionalna produkcija Reels sadržaja za društvene mreže. Kreiramo privlačne i angažovane video sadržaje za vaš brend sa Kursor platformom.",
    images: "URL to an image representing Reels production services", // Replace with the actual image URL
    url: "https://www.vasastranicatestiranje.com/produkcija-reelsa",
    type: "website",
  },
  keywords: "produkcija reelsa, video produkcija, reels sadržaji, društvene mreže, marketing video, Kursor, Srbija, Hrvatska, Bosna i Hercegovina, Balkanci",
  authors: [{ name: "Kursor" }],
  robots: "index, follow",
};

// Structured data for Reels Production services
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Produkcija Reelsa",
  "description": "Profesionalna produkcija Reels sadržaja za društvene mreže. Kreiramo privlačne i angažovane video sadržaje za vaš brend sa Kursor platformom.",
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
    "name": "Paketi Usluga za Produkciju Reelsa",
    "itemListElement": [
      {
        "@type": "Offer",
        "name": "Osnovni Paket",
        "description": "Produkcija jednostavnih Reels sadržaja sa osnovnim montažom.",
        "price": "199",
        "priceCurrency": "EUR"
      },
      {
        "@type": "Offer",
        "name": "Premium Paket",
        "description": "Produkcija visokokvalitetnih Reels sadržaja sa naprednom montažom i efektima.",
        "price": "499",
        "priceCurrency": "EUR"
      }
    ]
  }
};

export default function ReelsProductionLayout({ children }: { children: React.ReactNode }) {
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