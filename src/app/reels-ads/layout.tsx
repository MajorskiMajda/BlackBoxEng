import { Metadata } from "next";
import Script from 'next/script';

export const metadata: Metadata = {
  title: "Reels UGC Ads | Professional Video Content Production for Social Media",
  description: "We create engaging and captivating Reels video ads for your brand. We specialize in producing UGC (User-Generated Content) Reels content that boosts sales and engagement.",
  metadataBase: new URL("https://www.black-box-media.com"),
  openGraph: {
    title: "Reels UGC Ads | Professional Video Content Production for Social Media",
    description: "We create engaging and captivating Reels video ads for your brand. We specialize in producing UGC (User-Generated Content) Reels content that boosts sales and engagement.",
    images: [
      {
        url: "https://www.black-box-media.com/video.svg",
        alt: "Reels UGC Ads - Black Box Media",
      },
    ],
    url: "https://www.black-box-media.com/reels",
    type: "website",
  },
  keywords: [
    "reels ads",
    "ugc ads",
    "reels production",
    "video ads",
    "ugc ad filming",
    "reels creation",
    "video production",
    "reels content",
    "social media",
    "marketing video",
    "video editing",
    "digital marketing",
    "video advertising",
    "video content creation",
    "video campaigns",
    "instagram reels",
    "facebook reels",
    "video strategy",
    "increase sales",
    "increase engagement",
    "Black Box Media",
    "Serbia",
    "Croatia",
    "Bosnia and Herzegovina",
    "Balkan video production",
    "branding through video",
    "high-quality video ads",
    "targeted video ads",
    "video promotion",
    "online advertising",
    "creative marketing",
    "video storytelling",
    "influencer marketing",
    "video content for brands",
  ],
  authors: [{ name: "Black Box Media", url: "https://www.black-box-media.com" }],
  robots: "index, follow",
  alternates: {
    canonical: "https://www.black-box-media.com/reels",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Reels UGC Ads",
  "description": "We create engaging and captivating Reels video ads for your brand. We specialize in producing UGC (User-Generated Content) Reels content that boosts sales and engagement.",
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

export default function ReelsProductionLayout({ children }: { children: React.ReactNode }) {
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