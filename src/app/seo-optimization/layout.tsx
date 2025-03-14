import { Metadata } from "next";
import Script from 'next/script';

export const metadata: Metadata = {
  title: "SEO Optimizacija | Profesionalne Usluge za Poboljšanje Rangiranja",
  description: "Povećajte vidljivost vašeg sajta u pretraživačima uz naše SEO usluge. Specijalizovani smo za tehničku SEO optimizaciju, optimizaciju sadržaja i dugoročne strategije za povećanje organskog prometa.",
  metadataBase: new URL("https://www.black-box-media.com"),
  openGraph: {
    title: "SEO Optimizacija | Profesionalne Usluge za Poboljšanje Rangiranja",
    description: "Povećajte vidljivost vašeg sajta u pretraživačima uz naše SEO usluge. Specijalizovani smo za tehničku SEO optimizaciju, optimizaciju sadržaja i dugoročne strategije za povećanje organskog prometa.",
    images: [
      {
        url: "https://www.black-box-media.com/seoo.svg",
        alt: "SEO Optimizacija - Black Box Media",
      },
    ],
    url: "https://www.black-box-media.com/seo-optimizacija",
    type: "website",
  },
  keywords: [
    "seo optimizacija",
    "seo usluge",
    "tehnička seo optimizacija",
    "optimizacija sadržaja",
    "organski promet",
    "google rangiranje",
    "on-page seo",
    "off-page seo",
    "link building",
    "seo strategija",
    "seo audit",
    "lokalni seo",
    "seo za e-commerce",
    "optimizacija brzine sajta",
    "seo copywriting",
    "meta opisi",
    "serp optimizacija",
    "google algoritmi",
    "mobilni seo",
    "voice search seo",
    "schema markup",
    "dugoročna seo strategija",
    "analiza ključnih reči",
    "backlink strategija",
    "Black Box Media",
    "Srbija",
    "Hrvatska",
    "Bosna i Hercegovina",
    "Balkan seo usluge",
    "digitalni marketing",
    "content marketing",
    "tehničke seo analize",
    "ux i seo",
    "indeksiranje sajta",
    "canonical tagovi",
    "semantičko pretraživanje",
    "seo alati",
    "seo dashboard",
  ],
  authors: [{ name: "Black Box Media", url: "https://www.black-box-media.com" }],
  robots: "index, follow",
  alternates: {
    canonical: "https://www.black-box-media.com/seo-optimizacija",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "SEO Optimizacija",
  "description": "Povećajte vidljivost vašeg sajta u pretraživačima uz naše SEO usluge. Specijalizovani smo za tehničku SEO optimizaciju, optimizaciju sadržaja i dugoročne strategije za povećanje organskog prometa.",
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
    "name": "Paketi Usluga za SEO Optimizaciju",
    "itemListElement": [
      {
        "@type": "Offer",
        "name": "Osnovni SEO Paket",
        "description": "Optimizacija sajta za ključne reči, osnovne meta tagove i tehničke SEO elemente.",
        "price": "150",
        "priceCurrency": "EUR",
      },
      {
        "@type": "Offer",
        "name": "Premium SEO Paket",
        "description": "Kompletna SEO optimizacija sa naprednim strategijama, analitikom, link buildingom i optimizacijom sadržaja.",
        "price": "300",
        "priceCurrency": "EUR",
      },
      {
        "@type": "Offer",
        "name": "E-commerce SEO Paket",
        "description": "Specijalizovana SEO optimizacija za online prodavnice sa fokusom na povećanje konverzija i organskog prometa.",
        "price": "500",
        "priceCurrency": "EUR",
      },
    ],
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