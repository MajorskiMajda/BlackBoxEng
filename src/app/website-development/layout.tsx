import { Metadata } from "next";
import Script from 'next/script';

export const metadata: Metadata = {
  title: "Izrada Web Sajtova",
  description: "Profesionalna izrada modernih i funkcionalnih custom web sajtova posebno prilagođenih Vašem brendu i potrebama. Kreiramo responzivne i optimizovane sajtove koji unapređuju vaše online prisustvo uz Black Box Media.",
  metadataBase: new URL("https://www.black-box-media.com"),
  openGraph: {
    title: "Izrada Web Sajtova",
    description: "Profesionalna izrada modernih i funkcionalnih custom web sajtova posebno prilagođenih Vašem brendu i potrebama. Kreiramo responzivne i optimizovane sajtove koji unapređuju vaše online prisustvo uz Black Box Media.",
    images: "https://www.black-box-media.com/webdev.svg",
    url: "https://www.black-box-media.com/izrada-sajtova",
    type: "website",
  },
  keywords: "izrada web sajtova, web development, dizajn web sajtova, responsivni sajtovi, optimizacija web sajtova, programiranje sajtova, razvoj web aplikacija, frontend development, backend development, SEO optimizacija, digitalna transformacija, brendiranje, Black Box Media, Srbija, Hrvatska, Bosna i Hercegovina, Balkan web development, UI/UX dizajn, poslovni sajtovi, e-commerce sajtovi, web aplikacije, prilagođeni sajtovi, kreiranje web sadržaja, moderni web sajtovi, custom web dizajn, web dizajn agencija, web hosting, full-stack development, JavaScript, React, Next.js, PHP, Laravel, HTML, CSS, digitalni marketing, optimizacija konverzija, UX strategija, mobilni web sajtovi, vizuelni identitet, startup sajtovi, izrada landing stranica, responsive dizajn, sigurnost web sajtova, online portfolio, redizajn web sajtova, kreacija brenda online, tehnička SEO optimizacija, brzina učitavanja sajta, prilagođene web aplikacije, API integracije, CMS rešenja",
  authors: [{ name: "Black Box Media", url: "https://www.black-box-media.com" }],
  robots: "index, follow",
  alternates: {
    canonical: "https://www.black-box-media.com/izrada-sajtova",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Izrada Web Sajtova",
  "description": "Profesionalna izrada modernih i funkcionalnih web sajtova prilagođenih vašem brendu. Kreiramo responsivne i optimizovane sajtove koji unapređuju vaše online prisustvo uz Black Box Media.",
  "provider": {
    "@type": "Organization",
    "name": "Black Box Media",
    "logo": "https://www.black-box-media.com/log.svg"
  },
  "areaServed": {
    "@type": "Country",
    "name": ["Srbija", "Hrvatska", "Bosna i Hercegovina"]
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Paketi Usluga za Izradu Web Sajtova",
    "itemListElement": [
      {
        "@type": "Offer",
        "name": "Osnovni Web Sajt",
        "description": "Izrada jednostavnog web sajta sa do 3 stranice, prilagođenog mobilnim uređajima i optimizovanog za pretragu.",
        "price": "300",
        "priceCurrency": "EUR"
      },
      {
        "@type": "Offer",
        "name": "Napredni Web Sajt",
        "description": "Izrada prilagođenog web sajta sa dodatnim funkcionalnostima i SEO optimizacijom.",
        "price": "500",
        "priceCurrency": "EUR"
      },
      {
        "@type": "Offer",
        "name": "Online Prodavnica Sajt",
        "description": "Razvoj profesionalne online prodavnice sa integracijom plaćanja i naprednim funkcijama.",
        "price": "2000",
        "priceCurrency": "EUR"
      },
    ]
  }
};

export default function WebsiteDevelopmentLayout({ children }: { children: React.ReactNode }) {
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