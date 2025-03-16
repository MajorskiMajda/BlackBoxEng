import { Metadata } from "next";
import Script from 'next/script';

export const metadata: Metadata = {
  title: "Social Media Management | Professional Management of Facebook, Instagram, and LinkedIn - Black Box Media",
  description: "Increase your brand's engagement and visibility with our social media management services. We specialize in strategies, content creation, and analytics for Facebook, Instagram, LinkedIn, and TikTok.",
  metadataBase: new URL("https://www.black-box-media.com"),
  openGraph: {
    title: "Social Media Management | Professional Management of Facebook, Instagram, and LinkedIn - Black Box Media",
    description: "Increase your brand's engagement and visibility with our social media management services. We specialize in strategies, content creation, and analytics for Facebook, Instagram, LinkedIn, and TikTok.",
    images: [
      {
        url: "https://www.black-box-media.com/instagram.svg",
        alt: "Social Media Management - Black Box Media",
      },
    ],
    url: "https://www.black-box-media.com/smm",
    type: "website",
  },
  keywords: [
    "social media management",
    "smm services",
    "facebook marketing",
    "instagram marketing",
    "linkedin marketing",
    "tiktok marketing",
    "social media marketing",
    "social media strategy",
    "increase engagement",
    "increase followers",
    "content creation",
    "social media analytics",
    "social media branding",
    "social media advertising",
    "content marketing",
    "influencer marketing",
    "digital marketing",
    "Black Box Media",
    "Serbia",
    "Croatia",
    "Bosnia and Herzegovina",
    "Balkan SMM services",
    "instagram profile management",
    "facebook page management",
    "linkedin profile management",
    "tiktok strategies",
    "brand growth on social media",
    "smm for small businesses",
    "smm for e-commerce",
    "smm for startups",
    "smm for services",
    "smm for products",
    "smm campaigns",
    "smm analytics and reports",
  ],
  authors: [{ name: "Black Box Media", url: "https://www.black-box-media.com" }],
  robots: "index, follow",
  alternates: {
    canonical: "https://www.black-box-media.com/smm",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Social Media Management",
  "description": "Increase your brand's engagement and visibility with our social media management services. We specialize in strategies, content creation, and analytics for Facebook, Instagram, LinkedIn, and TikTok.",
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
export default function SMMLayout({ children }: { children: React.ReactNode }) {
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