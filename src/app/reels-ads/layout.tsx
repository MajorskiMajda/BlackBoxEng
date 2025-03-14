import { Metadata } from "next";
import Script from 'next/script';

export const metadata: Metadata = {
  title: "Reels UGC Reklame | Profesionalna Produkcija Video Sadržaja za Društvene Mreže",
  description: "Kreiramo privlačne i angažovane Reels video reklame za vaš brend. Specijalizovani smo za produkciju UGC (User-Generated Content) Reels sadržaja koji povećava prodaju i angažman.",
  metadataBase: new URL("https://www.black-box-media.com"),
  openGraph: {
    title: "Reels UGC Reklame | Profesionalna Produkcija Video Sadržaja za Društvene Mreže",
    description: "Kreiramo privlačne i angažovane Reels video reklame za vaš brend. Specijalizovani smo za produkciju UGC (User-Generated Content) Reels sadržaja koji povećava prodaju i angažman.",
    images: [
      {
        url: "https://www.black-box-media.com/reels.svg",
        alt: "Reels UGC Reklame - Black Box Media",
      },
    ],
    url: "https://www.black-box-media.com/reels",
    type: "website",
  },
  keywords: [
    "reels reklame",
    "ugc reklame",
    "produkcija reelsa",
    "video reklame",
    "snimanje ugc reklama",
    "izrada reelsa",
    "video produkcija",
    "reels sadržaji",
    "društvene mreže",
    "marketing video",
    "video editovanje",
    "digitalni marketing",
    "video oglašavanje",
    "kreacija video sadržaja",
    "video kampanje",
    "instagram reels",
    "facebook reels",
    "video strategija",
    "povećanje prodaje",
    "povećanje angažmana",
    "Black Box Media",
    "Srbija",
    "Hrvatska",
    "Bosna i Hercegovina",
    "Balkan video produkcija",
    "brendiranje kroz video",
    "visokokvalitetni video oglasi",
    "ciljani video oglasi",
    "video promocija",
    "online oglašavanje",
    "kreativni marketing",
    "video pričanje",
    "influencer marketing",
    "video sadržaj za brendove",
  ],
  authors: [{ name: "Black Box Media", url: "https://www.black-box-media.com" }],
  robots: "index, follow",
  alternates: {
    canonical: "https://www.black-box-media.com/reels",
  },
};

// Structured data for Reels Production services
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Reels UGC Reklame",
  "description": "Kreiramo privlačne i angažovane Reels video reklame za vaš brend. Specijalizovani smo za produkciju UGC (User-Generated Content) Reels sadržaja koji povećava prodaju i angažman.",
  "provider": {
    "@type": "Organization",
    "name": "Black Box Media",
    "logo": "https://www.black-box-media.com/log.svg",
    "url": "https://www.black-box-media.com",
  },
  "areaServed": {
    "@type": "Country",
    "name": ["Srbija", "Hrvatska", "Bosna i Hercegovina"],
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Paketi Usluga za Produkciju Reels Reklama",
    "itemListElement": [
      {
        "@type": "Offer",
        "name": "Pojedinačna Reels Reklama",
        "description": "Kreiramo jednu Reels reklamu koja privlači pažnju i donosi povećanu prodaju vašeg proizvoda ili usluge.",
        "price": "150",
        "priceCurrency": "EUR",
      },
      {
        "@type": "Offer",
        "name": "Osnovni Paket",
        "description": "Snimanje, editovanje i produkcija visokokvalitetnih Reels video reklama za vaš brend.",
        "price": "300",
        "priceCurrency": "EUR",
      },
      {
        "@type": "Offer",
        "name": "Premium Paket",
        "description": "Napredna produkcija Reels sadržaja sa montažom, efektima i strategijom za maksimalan angažman.",
        "price": "600",
        "priceCurrency": "EUR",
      },
    ],
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