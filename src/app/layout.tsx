import type { Metadata } from 'next';
import { Montserrat } from "next/font/google";
import "@/styles.globals.cssgi";
import Script from 'next/script';

const montserrat = Montserrat({
  variable: "--font-montserrat-sans-serif",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kursor - Digital Marketing Agencija",
  description: "Kursor je vodeća digital marketing agencija koja pruža usluge SEO, PPC, društvenih mreža, email marketinga i još mnogo toga. Povećajte svoj online prisutnost sa nama!",
  metadataBase: new URL("https://www.vasastranicatestiranje.com"),
  openGraph: {
    title: "Kursor - Digital Marketing Agencija",
    description: "Kursor je vodeća digital marketing agencija koja pruža usluge SEO, PPC, društvenih mreža, email marketinga i još mnogo toga. Povećajte svoj online prisutnost sa nama!",
    images: "URL to an image representing your agency", // Replace with the actual image URL
    url: "https://www.vasastranicatestiranje.com",
    type: "website",
  },
  keywords: "digital marketing agencija, SEO, PPC, društvene mreže, email marketing, Kursor, Srbija, Hrvatska, Bosna i Hercegovina, Balkanci",
  authors: [{ name: "Kursor" }],
  robots: "index, follow",
};

// Structured data for the agency
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Kursor",
  "description": "Kursor je vodeća digital marketing agencija koja pruža usluge SEO, PPC, društvenih mreža, email marketinga i još mnogo toga. Povećajte svoj online prisutnost sa nama!",
  "url": "https://www.vasastranicatestiranje.com",
  "logo": "https://www.vasastranicatestiranje.com/logo.png", // Replace with your logo URL
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+381-123-4567", // Replace with your phone number
    "contactType": "customer service",
    "email": "info@vasastranicatestiranje.com", // Replace with your email
    "areaServed": ["RS", "HR", "BA"], // Countries you serve
    "availableLanguage": ["sr", "en"] // Languages supported
  },
  "sameAs": [
    "https://www.facebook.com/yourpage", // Replace with your social media links
    "https://www.instagram.com/yourpage",
    "https://www.linkedin.com/company/yourpage"
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sr">
      <head>
        <meta name="geo.region" content="RS" />
        <meta name="geo.region" content="HR" />
        <meta name="geo.region" content="BA" />
        <meta name="geo.placename" content="Balkan" />
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${montserrat.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}