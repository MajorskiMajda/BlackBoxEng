import { Metadata } from "next";
import Script from 'next/script';

export const metadata: Metadata = {
  title: "SEO Optimization | Professional Services to Improve Ranking",
  description: "Increase your website's visibility in search engines with our SEO services. We specialize in technical SEO optimization, content optimization, and long-term strategies to increase organic traffic.",
  metadataBase: new URL("https://www.black-box-media.com"),
  openGraph: {
    title: "SEO Optimization | Professional Services to Improve Ranking",
    description: "Increase your website's visibility in search engines with our SEO services. We specialize in technical SEO optimization, content optimization, and long-term strategies to increase organic traffic.",
    images: [
      {
        url: "https://www.black-box-media.com/google.svg",
        alt: "SEO Optimization - Black Box Media",
      },
    ],
    url: "https://www.black-box-media.com/seo-optimizacija",
    type: "website",
  },
  keywords: [
    "seo optimization",
    "seo services",
    "technical seo optimization",
    "content optimization",
    "organic traffic",
    "google ranking",
    "on-page seo",
    "off-page seo",
    "link building",
    "seo strategy",
    "seo audit",
    "local seo",
    "seo for e-commerce",
    "website speed optimization",
    "seo copywriting",
    "meta descriptions",
    "serp optimization",
    "google algorithms",
    "mobile seo",
    "voice search seo",
    "schema markup",
    "long-term seo strategy",
    "keyword analysis",
    "backlink strategy",
    "Black Box Media",
    "Serbia",
    "Croatia",
    "Bosnia and Herzegovina",
    "Balkan seo services",
    "digital marketing",
    "content marketing",
    "technical seo analysis",
    "ux and seo",
    "website indexing",
    "canonical tags",
    "semantic search",
    "seo tools",
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
  "name": "SEO Optimization",
  "description": "Increase your website's visibility in search engines with our SEO services. We specialize in technical SEO optimization, content optimization, and long-term strategies to increase organic traffic.",
  "provider": {
    "@type": "Organization",
    "name": "Black Box Media",
    "logo": "https://www.black-box-media.com/log.svg",
    "url": "https://www.black-box-media.com",
  },
  "areaServed": {
    "@context": "https://schema.org",
    "@type": "Continent",
    "name": ["Europe", "North America", "South America"]
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