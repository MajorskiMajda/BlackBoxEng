import { Metadata } from "next";
import Script from 'next/script';

export const metadata: Metadata = {
  title: "Meta Advertising | Professional Advertising on Facebook and Instagram",
  description: "Increase your brand's sales and engagement with our Meta advertising services. We specialize in managing Facebook and Instagram ads, campaign optimization, and increasing ROI.",
  metadataBase: new URL("https://www.black-box-media.com"),
  openGraph: {
    title: "Meta Advertising | Professional Advertising on Facebook and Instagram",
    description: "Increase your brand's sales and engagement with our Meta advertising services. We specialize in managing Facebook and Instagram ads, campaign optimization, and increasing ROI.",
    images: [
      {
        url: "https://www.black-box-media.com/meta.svg",
        alt: "Meta Advertising - Black Box Media",
      },
    ],
    url: "https://www.black-box-media.com/meta-reklame",
    type: "website",
  },
  keywords: [
    "meta advertising",
    "facebook ads",
    "instagram ads",
    "meta ads",
    "social media advertising",
    "targeted ads",
    "meta ads management",
    "campaign optimization",
    "increase sales",
    "increase engagement",
    "retargeting",
    "remarketing",
    "ROI optimization",
    "A/B ad testing",
    "meta business suite",
    "digital marketing",
    "social media marketing",
    "ppc advertising",
    "conversions",
    "campaign budgeting",
    "ad creatives",
    "post boosting",
    "meta algorithm",
    "Black Box Media",
    "Serbia",
    "Croatia",
    "Bosnia and Herzegovina",
    "Balkan meta advertising",
    "advertising for e-commerce",
    "b2b marketing",
    "visual marketing",
    "advertising strategy",
  ],
  authors: [{ name: "Black Box Media", url: "https://www.black-box-media.com" }],
  robots: "index, follow",
  alternates: {
    canonical: "https://www.black-box-media.com/meta-reklame",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Meta Advertising",
  "description": "Increase your brand's sales and engagement with our Meta advertising services. We specialize in managing Facebook and Instagram ads, campaign optimization, and increasing ROI.",
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

export default function MetaAdsLayout({ children }: { children: React.ReactNode }) {
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