import { Metadata } from "next";
import Script from 'next/script';

export const metadata: Metadata = {
  title: "Google Ads Usluge | Profesionalno Upravljanje Kampanjama.",
  description: "Povećajte uspešnost vaših Google Ads kampanja uz stručno upravljanje, ciljanje i optimizaciju.",
  metadataBase: new URL("https://www.black-box-media.com"),
  openGraph: {
    title: "Google Ads Usluge | Profesionalno Upravljanje Kampanjama.",
    description: "Povećajte uspešnost vaših Google Ads kampanja uz stručno upravljanje, ciljanje i optimizaciju.",
    images: [
      {
        url: "https://www.black-box-media.com/googleads.svg",
        alt: "Google Ads Usluge - Black Box Media",
      },
    ],
    url: "https://www.black-box-media.com/google-reklame",
    type: "website",
  },
  keywords: [
    "Google Ads usluge",
    "Google Reklame",
    "Google oglasavanje",
    "Google Reklamiranje",
    "Google Ads stručnjaci",
    "digitalni marketing",
    "povećanje ROI-a",
    "ciljanje reklama",
    "Google Ads firme",
    "Google reklame firme",
    "upravljanje Google kampanjama",
    "optimizacija Google Ads",
    "PPC reklame",
    "Google Ads stručnjaci",
    "digitalni marketing",
    "povećanje ROI-a",
    "ciljanje reklama",
    "Google Ads za male firme",
    "Google Ads za Srbiju",
    "Google Ads za Hrvatsku",
    "Google Ads za Bosnu i Hercegovinu",
  ],
  authors: [{ name: "Black Box Media", url: "https://www.black-box-media.com" }],
  robots: "index, follow",
  alternates: {
    canonical: "https://www.black-box-media.com/google-reklame",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Google Ads Usluge",
  "description": "Povećajte uspešnost vaših Google Ads kampanja uz stručno upravljanje, ciljanje i optimizaciju. Besplatna analiza vaših kampanja! Kontaktirajte nas danas.",
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
    "name": "Paketi Usluga za Google Ads",
    "itemListElement": [
      {
        "@type": "Offer",
        "name": "Osnovni Paket",
        "description": "Ciljane reklame na Google-u za poboljšanje vidljivosti i povećanje CTR-a.",
        "price": "199",
        "priceCurrency": "EUR",
      },
      {
        "@type": "Offer",
        "name": "Premium Paket",
        "description": "Kompletna optimizacija Google Ads kampanja uz ciljanje, analitiku i strategiju za poboljšanje rezultata.",
        "price": "499",
        "priceCurrency": "EUR",
      },
    ],
  }
};


export default function GoogleAdsLayout({ children }: { children: React.ReactNode }) {
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