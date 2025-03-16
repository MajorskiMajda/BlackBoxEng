import { Metadata } from "next";
import Script from 'next/script';

export const metadata: Metadata = {
  title: "Google Ads Services | Professional Campaign Management.",
  description: "Increase the success of your Google Ads campaigns with expert management, targeting, and optimization.",
  metadataBase: new URL("https://www.black-box-media.com"),
  openGraph: {
    title: "Google Ads Services | Professional Campaign Management.",
    description: "Increase the success of your Google Ads campaigns with expert management, targeting, and optimization.",
    images: [
      {
        url: "https://www.black-box-media.com/googleads.svg",
        alt: "Google Ads Services - Black Box Media",
      },
    ],
    url: "https://www.black-box-media.com/google-reklame",
    type: "website",
  },
  keywords: [
    "Google Ads services",
    "Google Ads",
    "Google advertising",
    "Google Ads experts",
    "digital marketing",
    "increase ROI",
    "ad targeting",
    "Google Ads agencies",
    "Google ads company",
    "Google campaign management",
    "Google Ads optimization",
    "PPC ads",
    "Google Ads experts",
    "digital marketing",
    "increase ROI",
    "ad targeting",
    "Google Ads for small businesses",
    "Google Ads for Serbia",
    "Google Ads for Croatia",
    "Google Ads for Bosnia and Herzegovina",
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
  "name": "Google Ads Services",
  "description": "Increase the success of your Google Ads campaigns with expert management, targeting, and optimization. Free analysis of your campaigns! Contact us today.",
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