import type { Metadata } from 'next';
import { Montserrat } from "next/font/google";
import "./globals.css";
import Script from 'next/script';
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from '@vercel/speed-insights/react';

const montserrat = Montserrat({
  variable: "--font-montserrat-sans-serif",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Black Box Media | Vodeća Marketing Agencija",
  description: "Black Box Media nudi usluge SEO, PPC, Reels reklama, UGC reklama, menadzment društvenih mreža, email marketinga, izrade web sajtova i još mnogo toga. Povećajte svoj online prisustvo i prodaju sa nama!",
  metadataBase: new URL("https://www.black-box-media.com"),
  openGraph: {
    title: "Black Box Media | Vodeća Marketing Agencija",
    description: "Black Box Media nudi usluge SEO, PPC, Reels reklama, menadzment društvenih mreža, email marketinga, izrade web sajtova i još mnogo toga. Povećajte svoj online prisustvo i prodaju sa nama!",
    images: [
      {
        url: "https://www.black-box-media.com/log.svg",
        alt: "Black Box Media - Digital Marketing Agencija",
      },
    ],
    url: "https://www.black-box-media.com",
    type: "website",
  },
  keywords: [
    "digital marketing agencija",
    "SEO usluge",
    "PPC oglašavanje",
    "upravljanje društvenim mrežama",
    "email marketing",
    "izrada web sajtova",
    "Black Box Media",
    "Srbija",
    "Hrvatska",
    "Bosna i Hercegovina",
    "Balkan digitalni marketing",
    "online oglašavanje",
    "povećanje prodaje",
    "povećanje angažmana",
    "brendiranje",
    "web development",
    "e-commerce rešenja",
    "optimizacija sajta",
    "google ads",
    "facebook ads",
    "instagram reklame",
    "reels reklame",
    "ugc reklame",
    "video produkcija",
    "digitalna transformacija",
    "marketing strategija",
    "analitika i izveštaji",
    "lokalni SEO",
    "tehnička SEO optimizacija",
    "on-page SEO",
    "off-page SEO",
    "link building",
    "content marketing",
    "influencer marketing",
    "social media marketing",
    "facebook marketing",
    "instagram marketing",
    "linkedin marketing",
    "tiktok marketing",
    "twitter marketing",
    "email kampanje",
    "automatske email sekvence",
    "segmentacija baze podataka",
    "kreiranje email sadržaja",
    "newsletter dizajn",
    "web dizajn",
    "responsive web dizajn",
    "custom web sajtovi",
    "redizajn web sajtova",
    "web aplikacije",
    "online prodavnica",
    "wordpress sajtovi",
    "shopify sajtovi",
    "brzina učitavanja sajta",
    "sigurnost web sajtova",
    "API integracije",
    "CMS rešenja",
    "digitalna agencija Beograd",
    "digitalna agencija Zagreb",
    "digitalna agencija Sarajevo",
    "marketing agencija Srbija",
    "marketing agencija Hrvatska",
    "marketing agencija Bosna",
    "oglašavanje na društvenim mrežama",
    "oglašavanje za male biznise",
    "oglašavanje za startupe",
    "oglašavanje za e-commerce",
    "oglašavanje za usluge",
    "oglašavanje za proizvode",
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
    "rast baze pretplatnika",
    "video marketing",
    "video reklame",
    "snimanje video reklama",
    "video editovanje",
    "video strategija",
    "video kampanje",
    "video pričanje",
    "video sadržaj za brendove",
    "video produkcija za društvene mreže",
    "video oglasi za instagram",
    "video oglasi za facebook",
    "video oglasi za tiktok",
    "video oglasi za linkedin",
    "video oglasi za youtube",
    "video oglasi za male biznise",
    "video oglasi za startupe",
    "video oglasi za e-commerce",
    "video oglasi za usluge",
    "video oglasi za proizvode",
    "video oglasi za brendove",
    "video oglasi za konverziju",
    "video oglasi za angažman",
    "video oglasi za prodaju",
    "video oglasi za rast brenda",
    "video oglasi za rast pratilaca",
    "video oglasi za rast prodaje",
    "video oglasi za rast angažmana",
    "video oglasi za rast konverzija",
    "video oglasi za rast brenda na društvenim mrežama",
    "video oglasi za rast brenda na instagramu",
    "video oglasi za rast brenda na facebooku",
    "video oglasi za rast brenda na tiktoku",
    "video oglasi za rast brenda na linkedinu",
    "video oglasi za rast brenda na youtubeu",
    "video oglasi za rast brenda na društvenim mrežama",
    "video oglasi za rast brenda na instagramu",
    "video oglasi za rast brenda na facebooku",
    "video oglasi za rast brenda na tiktoku",
    "video oglasi za rast brenda na linkedinu",
    "video oglasi za rast brenda na youtubeu",
  ],
  authors: [{ name: "Black Box Media", url: "https://www.black-box-media.com" }],
  robots: "index, follow",
  alternates: {
    canonical: "https://www.black-box-media.com",
  },
};


const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Black Box Media",
  "description": "Black Box Media koja nudi usluge SEO, PPC, Reels reklama, menadzment društvenih mreža, email marketinga, izrade web sajtova i još mnogo toga. Povećajte svoj online prisustvo i prodaju sa nama!",
  "url": "https://www.black-box-media.com",
  "logo": "https://www.black-box-media.com/log.svg",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+381-60-130-5588",
    "contactType": "customer service",
    "email": "info@black-box-media.com",
    "areaServed": ["RS", "HR", "BA"],
    "availableLanguage": ["sr", "en"]
  },
  "sameAs": [
    "https://www.facebook.com/yourpage",
    "https://www.instagram.com/yourpage",
    "https://www.linkedin.com/company/yourpage"
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>

        <link rel="icon" href="/favicon.ico" sizes="any" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-KCZR65J1S3`}
        />
      </head>
      <body className={montserrat.variable}>
        {children}
        <Analytics />
        <SpeedInsights />
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-KCZR65J1S3`}
        />

      </body>
    </html>
  );
}