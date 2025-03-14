import { Metadata } from "next";
import Script from 'next/script';

export const metadata: Metadata = {
  title: "Grafički Dizajn Usluge | Profesionalni Dizajn za Vaš Brend",
  description: "Kreiramo vizuelno impresivne logoe, banere, Instagram postove, vizit karte i newslettere za vaš brend. Povećajte prepoznatljivost vašeg brenda uz naše usluge grafičkog dizajna.",
  metadataBase: new URL("https://www.black-box-media.com"),
  openGraph: {
    title: "Grafički Dizajn Usluge | Profesionalni Dizajn za Vaš Brend",
    description: "Kreiramo vizuelno impresivne logoe, banere, Instagram postove, vizit karte i newslettere za vaš brend. Povećajte prepoznatljivost vašeg brenda uz naše usluge grafičkog dizajna.",
    images: [
      {
        url: "https://www.black-box-media.com/graphic.svg",
        alt: "Grafički Dizajn Usluge - Black Box Media",
      },
    ],
    url: "https://www.black-box-media.com/graficki-dizajn",
    type: "website",
  },
  keywords: [
    "grafički dizajn",
    "dizajn logoa",
    "dizajn banera",
    "Instagram postovi",
    "vizit karte",
    "newsletter dizajn",
    "brending usluge",
    "dizajn za društvene mreže",
    "profesionalni grafički dizajn",
    "Black Box Media",
    "Srbija",
    "Hrvatska",
    "Bosna i Hercegovina",
    "Balkanci",
    "kreiranje objava za društvene mreže",
    "dizajn za Facebook",
    "dizajn za Instagram",
  ],
  authors: [{ name: "Black Box Media", url: "https://www.black-box-media.com" }],
  robots: "index, follow",
  alternates: {
    canonical: "https://www.black-box-media.com/graficki-dizajn",
  },
};


const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Grafički Dizajn Usluge",
  "description": "Kreiramo vizuelno impresivne logoe, banere, Instagram postove, vizit karte i newslettere za vaš brend. Povećajte prepoznatljivost vašeg brenda uz naše usluge grafičkog dizajna.",
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
    "name": "Paketi Usluga za Grafički Dizajn",
    "itemListElement": [
      {
        "@type": "Offer",
        "name": "Osnovni Paket",
        "description": "Dizajn logoa, Instagram postova i osnovnih vizuelnih elemenata za vaš brend.",
        "price": "199",
        "priceCurrency": "EUR",
      },
      {
        "@type": "Offer",
        "name": "Premium Paket",
        "description": "Kompletan brending paket uključujući logo, banere, Instagram postove, vizit karte i newslettere.",
        "price": "499",
        "priceCurrency": "EUR",
      },
    ],
  }
};


export default function GraphicDesignLayout({ children }: { children: React.ReactNode }) {
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