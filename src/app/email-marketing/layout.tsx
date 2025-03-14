import { Metadata } from "next";
import Script from 'next/script';

export const metadata: Metadata = {
  title: "Email Marketing Usluge | Profesionalne Kampanje za Povećanje Prodaje",
  description: "Povećajte prodaju i angažman vašeg brenda uz naše usluge email marketinga. Specijalizovani smo za kreiranje personalizovanih email kampanja, automatske sekvence i analitiku.",
  metadataBase: new URL("https://www.black-box-media.com"),
  openGraph: {
    title: "Email Marketing Usluge | Profesionalne Kampanje za Povećanje Prodaje",
    description: "Povećajte prodaju i angažman vašeg brenda uz naše usluge email marketinga. Specijalizovani smo za kreiranje personalizovanih email kampanja, automatske sekvence i analitiku.",
    images: [
      {
        url: "https://www.black-box-media.com/emailm.svg",
        alt: "Email Marketing Usluge - Black Box Media",
      },
    ],
    url: "https://www.black-box-media.com/email-marketing",
    type: "website",
  },
  keywords: [
    "email marketing usluge",
    "email kampanje",
    "personalizovane email kampanje",
    "automatske email sekvence",
    "povećanje prodaje",
    "povećanje angažmana",
    "email analitika",
    "segmentacija baze podataka",
    "kreiranje email sadržaja",
    "email marketing za e-commerce",
    "email marketing za male biznise",
    "email marketing za startupe",
    "email marketing za usluge",
    "email marketing strategija",
    "Black Box Media",
    "Srbija",
    "Hrvatska",
    "Bosna i Hercegovina",
    "Balkan email marketing",
    "digitalni marketing",
    "marketing automatizacija",
    "konverzija putem emaila",
    "lead nurturing",
    "dizajn emaila",
    "email marketing alati",
    "CRM integracije",
    "email marketing za B2B",
    "email marketing za B2C",
    "optimizacija email kampanja",
    "A/B testiranje emaila",
    "email marketing za brendove",
    "newsletter dizajn",
    "rast baze pretplatnika",
  ],
  authors: [{ name: "Black Box Media", url: "https://www.black-box-media.com" }],
  robots: "index, follow",
  alternates: {
    canonical: "https://www.black-box-media.com/email-marketing",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Email Marketing Usluge",
  "description": "Povećajte prodaju i angažman vašeg brenda uz naše usluge email marketinga. Specijalizovani smo za kreiranje personalizovanih email kampanja, automatske sekvence i analitiku.",
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
    "name": "Paketi Usluga za Email Marketing",
    "itemListElement": [
      {
        "@type": "Offer",
        "name": "Osnovni Email Marketing Paket",
        "description": "Kreiranje i slanje osnovnih email kampanja sa segmentacijom baze podataka i osnovnom analitikom.",
        "price": "200",
        "priceCurrency": "EUR",
      },
      {
        "@type": "Offer",
        "name": "Napredni Email Marketing Paket",
        "description": "Kreiranje personalizovanih email kampanja, automatskih sekvenci i napredne analitike.",
        "price": "400",
        "priceCurrency": "EUR",
      },
      {
        "@type": "Offer",
        "name": "Premium Email Marketing Paket",
        "description": "Kompletna strategija email marketinga sa A/B testiranjem, CRM integracijom i detaljnom analitikom.",
        "price": "600",
        "priceCurrency": "EUR",
      },
    ],
  },

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