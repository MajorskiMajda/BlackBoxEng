import { Metadata } from "next";
import Script from 'next/script';

export const metadata: Metadata = {
  title: "Grafički Dizajn - Kursor",
  description: "Profesionalne usluge grafičkog dizajna za vaš brend. Kreiramo vizuelno privlačne logoe, banere, vizit karte i druge materijale sa Kursor platformom.",
  metadataBase: new URL("https://www.vasastranicatestiranje.com"),
  openGraph: {
    title: "Grafički Dizajn - Kursor",
    description: "Profesionalne usluge grafičkog dizajna za vaš brend. Kreiramo vizuelno privlačne logoe, banere, vizit karte i druge materijale sa Kursor platformom.",
    images: "URL to an image representing graphic design services", // Replace with the actual image URL
    url: "https://www.vasastranicatestiranje.com/graficki-dizajn",
    type: "website",
  },
  keywords: "grafički dizajn, dizajn logoa, baneri, vizit karte, brending, Kursor, Srbija, Hrvatska, Bosna i Hercegovina, Balkanci",
  authors: [{ name: "Kursor" }],
  robots: "index, follow",
};

// Structured data for Graphic Design services
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Grafički Dizajn",
  "description": "Profesionalne usluge grafičkog dizajna za vaš brend. Kreiramo vizuelno privlačne logoe, banere, vizit karte i druge materijale sa Kursor platformom.",
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
    "name": "Paketi Usluga za Grafički Dizajn",
    "itemListElement": [
      {
        "@type": "Offer",
        "name": "Osnovni Paket",
        "description": "Dizajn logoa i osnovnih vizuelnih elemenata za vaš brend.",
        "price": "199",
        "priceCurrency": "EUR"
      },
      {
        "@type": "Offer",
        "name": "Premium Paket",
        "description": "Kompletan brending paket uključujući logo, banere, vizit karte i druge materijale.",
        "price": "499",
        "priceCurrency": "EUR"
      }
    ]
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