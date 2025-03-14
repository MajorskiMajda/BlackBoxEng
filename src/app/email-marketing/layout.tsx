import { Metadata } from "next";
import Script from 'next/script';

export const metadata: Metadata = {
  title: "Email Marketing Services | Professional Campaigns to Increase Sales",
  description: "Increase your brand's sales and engagement with our email marketing services. We specialize in creating personalized email campaigns, automated sequences, and analytics.",
  metadataBase: new URL("https://www.black-box-media.com"),
  openGraph: {
    title: "Email Marketing Services | Professional Campaigns to Increase Sales",
    description: "Increase your brand's sales and engagement with our email marketing services. We specialize in creating personalized email campaigns, automated sequences, and analytics.",
    images: [
      {
        url: "https://www.black-box-media.com/emailm.svg",
        alt: "Email Marketing Services - Black Box Media",
      },
    ],
    url: "https://www.black-box-media.com/email-marketing",
    type: "website",
  },
  keywords: [
    "email marketing services",
    "email campaigns",
    "personalized email campaigns",
    "automated email sequences",
    "increase sales",
    "increase engagement",
    "email analytics",
    "database segmentation",
    "email content creation",
    "email marketing for e-commerce",
    "email marketing for small businesses",
    "email marketing for startups",
    "email marketing for services",
    "email marketing strategy",
    "Black Box Media",
    "Serbia",
    "Croatia",
    "Bosnia and Herzegovina",
    "Balkan email marketing",
    "digital marketing",
    "marketing automation",
    "email conversion",
    "lead nurturing",
    "email design",
    "email marketing tools",
    "CRM integrations",
    "email marketing for B2B",
    "email marketing for B2C",
    "email campaign optimization",
    "A/B email testing",
    "email marketing for brands",
    "newsletter design",
    "subscriber base growth",
  ],
  authors: [{ name: "Black Box Media", url: "https://www.black-box-media.com" }],
  robots: "index, follow",
  alternates: {
    canonical: "https://www.black-box-media.com/email-marketing",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Email Marketing Services",
  "description": "Increase your brand's sales and engagement with our email marketing services. We specialize in creating personalized email campaigns, automated sequences, and analytics.",
  "provider": {
    "@type": "Organization",
    "name": "Black Box Media",
    "logo": "https://www.black-box-media.com/log.svg",
    "url": "https://www.black-box-media.com",
  },
  "areaServed": {
    "@type": "Country",
    "name": ["Serbia", "Croatia", "Bosnia and Herzegovina"],
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Email Marketing Service Packages",
    "itemListElement": [
      {
        "@type": "Offer",
        "name": "Basic Email Marketing Package",
        "description": "Creation and sending of basic email campaigns with database segmentation and basic analytics.",
        "price": "200",
        "priceCurrency": "USD",
      },
      {
        "@type": "Offer",
        "name": "Advanced Email Marketing Package",
        "description": "Creation of personalized email campaigns, automated sequences, and advanced analytics.",
        "price": "400",
        "priceCurrency": "USD",
      },
      {
        "@type": "Offer",
        "name": "Premium Email Marketing Package",
        "description": "Complete email marketing strategy with A/B testing, CRM integration, and detailed analytics.",
        "price": "600",
        "priceCurrency": "USD",
      },
    ],
  },
};

export default function EmailMarketingLayout({ children }: { children: React.ReactNode }) {
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