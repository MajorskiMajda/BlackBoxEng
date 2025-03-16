import { Metadata } from "next";
import Script from 'next/script';

export const metadata: Metadata = {
  title: "Website Development",
  description: "Professional creation of modern and functional custom websites tailored to your brand and needs. We create responsive and optimized sites that enhance your online presence with Black Box Media.",
  metadataBase: new URL("https://www.black-box-media.com"),
  openGraph: {
    title: "Website Development",
    description: "Professional creation of modern and functional custom websites tailored to your brand and needs. We create responsive and optimized sites that enhance your online presence with Black Box Media.",
    images: "https://www.black-box-media.com/domain.svg",
    url: "https://www.black-box-media.com/izrada-sajtova",
    type: "website",
  },
  keywords: "website development, web design, responsive websites, website optimization, website programming, web application development, frontend development, backend development, SEO optimization, digital transformation, branding, Black Box Media, Serbia, Croatia, Bosnia and Herzegovina, Balkan web development, UI/UX design, business websites, e-commerce websites, web applications, custom websites, web content creation, modern websites, custom web design, web design agency, web hosting, full-stack development, JavaScript, React, Next.js, PHP, Laravel, HTML, CSS, digital marketing, conversion optimization, UX strategy, mobile websites, visual identity, startup websites, landing page creation, responsive design, website security, online portfolio, website redesign, online brand creation, technical SEO optimization, site loading speed, custom web applications, API integrations, CMS solutions",
  authors: [{ name: "Black Box Media", url: "https://www.black-box-media.com" }],
  robots: "index, follow",
  alternates: {
    canonical: "https://www.black-box-media.com/izrada-sajtova",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Website Development",
  "description": "Professional creation of modern and functional websites tailored to your brand. We create responsive and optimized sites that enhance your online presence with Black Box Media.",
  "provider": {
    "@type": "Organization",
    "name": "Black Box Media",
    "logo": "https://www.black-box-media.com/log.svg"
  },
  "areaServed": {
    "@context": "https://schema.org",
    "@type": "Continent",
    "name": ["Europe", "North America", "South America"]
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