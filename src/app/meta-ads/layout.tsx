import { Metadata } from "next";
import Script from 'next/script';

export const metadata: Metadata = {
  title: "Meta Reklamiranje | Profesionalno Oglašavanje na Facebook i Instagram",
  description: "Povećajte prodaju i angažman vašeg brenda uz naše usluge Meta reklamiranja. Specijalizovani smo za upravljanje Facebook i Instagram oglasima, optimizaciju kampanja i povećanje ROI-a.",
  metadataBase: new URL("https://www.black-box-media.com"),
  openGraph: {
    title: "Meta Reklamiranje | Profesionalno Oglašavanje na Facebook i Instagram",
    description: "Povećajte prodaju i angažman vašeg brenda uz naše usluge Meta reklamiranja. Specijalizovani smo za upravljanje Facebook i Instagram oglasima, optimizaciju kampanja i povećanje ROI-a.",
    images: [
      {
        url: "https://www.black-box-media.com/metaads.svg",
        alt: "Meta Reklamiranje - Black Box Media",
      },
    ],
    url: "https://www.black-box-media.com/meta-reklame",
    type: "website",
  },
  keywords: [
    "meta reklamiranje",
    "facebook oglasi",
    "instagram reklame",
    "meta ads",
    "oglašavanje na društvenim mrežama",
    "ciljane reklame",
    "upravljanje meta oglasima",
    "optimizacija kampanja",
    "povećanje prodaje",
    "povećanje angažmana",
    "retargeting",
    "remarketing",
    "ROI optimizacija",
    "A/B testiranje oglasa",
    "meta business suite",
    "digitalni marketing",
    "social media marketing",
    "ppc oglašavanje",
    "konverzije",
    "budžetiranje kampanja",
    "kreativa za oglase",
    "boostovanje objava",
    "meta algoritam",
    "Black Box Media",
    "Srbija",
    "Hrvatska",
    "Bosna i Hercegovina",
    "Balkan meta reklamiranje",
    "oglašavanje za e-commerce",
    "b2b marketing",
    "vizuelni marketing",
    "strategija oglašavanja",
  ],
  authors: [{ name: "Black Box Media", url: "https://www.black-box-media.com" }],
  robots: "index, follow",
  alternates: {
    canonical: "https://www.black-box-media.com/meta-reklame",
  },
};


const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Meta Reklamiranje",
  "description": "Povećajte prodaju i angažman vašeg brenda uz naše usluge Meta reklamiranja. Specijalizovani smo za upravljanje Facebook i Instagram oglasima, optimizaciju kampanja i povećanje ROI-a.",
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
    "name": "Paketi Usluga za Meta Reklamiranje",
    "itemListElement": [
      {
        "@type": "Offer",
        "name": "Osnovni Paket",
        "description": "Upravljanje osnovnim Meta oglasima za jednu platformu sa optimizacijom budžeta i analitikom.",
        "price": "299",
        "priceCurrency": "EUR",
      },
      {
        "@type": "Offer",
        "name": "Napredni Paket",
        "description": "Upravljanje Meta oglasima za više platformi sa analitikom, strategijom i optimizacijom kampanja.",
        "price": "599",
        "priceCurrency": "EUR",
      },
      {
        "@type": "Offer",
        "name": "Premium Paket",
        "description": "Kompletna strategija i upravljanje Meta oglasima, A/B testiranje, retargeting i povećanje ROAS-a.",
        "price": "999",
        "priceCurrency": "EUR",
      },
    ],
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