import { Metadata } from "next";
import Script from 'next/script';

export const metadata: Metadata = {
  title: "Menadžment Društvenih Mreža | Profesionalno Upravljanje Facebook, Instagram i LinkedIn - Black Box Media",
  description: "Povećajte angažman i vidljivost vašeg brenda uz naše usluge menadžmenta društvenih mreža. Specijalizovani smo za strategije, kreiranje sadržaja i analitiku za Facebook, Instagram, LinkedIn i TikTok.",
  metadataBase: new URL("https://www.black-box-media.com"),
  openGraph: {
    title: "Menadžment Društvenih Mreža | Profesionalno Upravljanje Facebook, Instagram i LinkedIn - Black Box Media",
    description: "Povećajte angažman i vidljivost vašeg brenda uz naše usluge menadžmenta društvenih mreža. Specijalizovani smo za strategije, kreiranje sadržaja i analitiku za Facebook, Instagram, LinkedIn i TikTok.",
    images: [
      {
        url: "https://www.black-box-media.com/smm.svg",
        alt: "Menadžment Društvenih Mreža - Black Box Media",
      },
    ],
    url: "https://www.black-box-media.com/smm",
    type: "website",
  },
  keywords: [
    "menadžment društvenih mreža",
    "upravljanje društvenim mrežama",
    "smm usluge",
    "facebook marketing",
    "instagram marketing",
    "linkedin marketing",
    "tiktok marketing",
    "social media marketing",
    "strategija društvenih mreža",
    "povećanje angažmana",
    "povećanje pratilaca",
    "kreiranje sadržaja",
    "analitika društvenih mreža",
    "brendiranje na društvenim mrežama",
    "oglašavanje na društvenim mrežama",
    "content marketing",
    "influencer marketing",
    "digitalni marketing",
    "Black Box Media",
    "Srbija",
    "Hrvatska",
    "Bosna i Hercegovina",
    "Balkan SMM usluge",
    "upravljanje instagram profilom",
    "upravljanje facebook stranicom",
    "upravljanje linkedin profilom",
    "tiktok strategije",
    "rast brenda na društvenim mrežama",
    "smm za male biznise",
    "smm za e-commerce",
    "smm za startupe",
    "smm za usluge",
    "smm za proizvode",
    "smm kampanje",
    "smm analitika i izveštaji",
  ],
  authors: [{ name: "Black Box Media", url: "https://www.black-box-media.com" }],
  robots: "index, follow",
  alternates: {
    canonical: "https://www.black-box-media.com/smm", // Add canonical URL for SEO
  },
};

// Structured data for Social Media Management services
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Menadžment Društvenih Mreža",
  "description": "Povećajte angažman i vidljivost vašeg brenda uz naše usluge menadžmenta društvenih mreža. Specijalizovani smo za strategije, kreiranje sadržaja i analitiku za Facebook, Instagram, LinkedIn i TikTok.",
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
    "name": "Paketi Usluga za Menadžment Društvenih Mreža",
    "itemListElement": [
      {
        "@type": "Offer",
        "name": "Osnovni SMM Paket",
        "description": "Upravljanje jednom društvenom mrežom sa osnovnim strategijama, kreiranjem sadržaja i objavama.",
        "price": "200",
        "priceCurrency": "EUR",
      },
      {
        "@type": "Offer",
        "name": "Napredni SMM Paket",
        "description": "Upravljanje više društvenih mreža sa naprednim strategijama, analitikom i kampanjama.",
        "price": "300",
        "priceCurrency": "EUR",
      },
      {
        "@type": "Offer",
        "name": "Premium SMM Paket",
        "description": "Kompletno upravljanje svim društvenim mrežama sa strategijom, influencer marketingom i detaljnom analitikom.",
        "price": "500",
        "priceCurrency": "EUR",
      },
    ],
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