import { Metadata } from "next";
import Script from 'next/script';

export const metadata: Metadata = {
  title: "Reels Reklame",
  description: "Profesionalna produkcija Reels sadržaja za društvene mreže. Kreiramo privlačne i angažovane video reklame za vaš brend s ciljem povećanje prodaje uz Black Box Meida marketing.",
  metadataBase: new URL("https://www.black-box-media.com"),
  openGraph: {
    title: "Reels Reklame",
    description: "Profesionalna produkcija Reels sadržaja za društvene mreže. Kreiramo privlačne i angažovane video reklame za vaš brend s ciljem povećanje prodaje uz Black Box Meida marketing.",
    images: "https://www.black-box-media.com/reels.svg", // Replace with the actual image URL
    url: "https://www.black-box-media.com/reels",
    type: "website",
  },
  keywords:"produkcija reelsa, izrada video reklama, video reklame, brendiranje, reels, UGC, UGC reklame, snimanje UGC reklama, izrada reelsa, izrada reklama, snimanje reklama, reklame za društvene mreže, video produkcija, reels sadržaji, društvene mreže, marketing video, Black Box, Srbija, Hrvatska, Bosna i Hercegovina, Balkanci, kreacija video sadržaja, video editovanje, digitalni marketing, oglasi na društvenim mrežama, video produkcija za brendove, video oglašavanje, kreacija sadržaja za brendove, marketing sa influencerima, kampanje na društvenim mrežama, promocija brenda, video pričanje, video marketing strategija, video oglasi za Instagram, video oglasi za Facebook, oglašavanje za male biznise, video promocija, strategija sadržaja, vizuelni sadržaj, online oglašavanje, kreativni marketing, ciljani video oglasi, visokokvalitetni video oglasi, Balkan digitalni marketing, brend identitet kroz video, video kampanje za brendove",
  authors: [{ name: "Kursor" }],
  robots: "index, follow",
};

// Structured data for Reels Production services
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Reels Reklame",
  "description": "Profesionalna produkcija Reels video sadržaja za društvene mreže. Kreiramo privlačne i angažovane Reels video sadržaje za vaš brend sa Black Box marketing agencijom.",
  "provider": {
    "@type": "Organization",
    "name": "Black Box",
    "logo": "https://www.black-box-media.com/logo.svg" // Replace with your logo URL
  },
  "areaServed": {
    "@type": "Country",
    "name": ["Srbija", "Hrvatska", "Bosna i Hercegovina"]
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Paketi Usluga za Produkciju Reels Reklama",
    "itemListElement": [
      {
        "@type": "Offer",
        "name": "Pojedinačna Reels Reklama",
        "description": "Kreiraćemo Reels reklamu koja privlači pažnju i donosi povećanu prodaju Vašeg proizvoda ili usluge.",
        "price": "150",
        "priceCurrency": "EUR"
      },
      {
        "@type": "Offer",
        "name": "Osnovni Paket",
        "description": "Kreiramo sadržaj koji privlači pažnju i donosi rezultate. Naša usluga obuhvata snimanje, editovanje i izrada visokokvalitetnih Reels video reklama.",
        "price": "300",
        "priceCurrency": "EUR"
      },
      {
        "@type": "Offer",
        "name": "Premium Paket",
        "description": "Kreiramo sadržaj koji privlači pažnju i donosi rezultate. Produkcija visokokvalitetnih Reels sadržaja sa naprednom montažom i efektima.",
        "price": "600",
        "priceCurrency": "EUR"
      },
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