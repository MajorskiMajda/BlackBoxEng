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
  title: "Black Box Media | Leading Marketing Agency",
  description: "Black Box Media offers SEO, PPC, Reels ads, social media management, email marketing, website development, and more. Boost your online presence and sales with us!",
  metadataBase: new URL("https://www.black-box-media.com"),
  openGraph: {
    title: "Black Box Media | Leading Marketing Agency",
    description: "Black Box Media offers SEO, PPC, Reels ads, social media management, email marketing, website development, and more. Boost your online presence and sales with us!",
    images: [
      {
        url: "https://www.black-box-media.com/log.svg",
        alt: "Black Box Media - Digital Marketing Agency",
      },
    ],
    url: "https://www.black-box-media.com",
    type: "website",
  },
  keywords: [
    "digital marketing agency",
    "SEO services",
    "PPC advertising",
    "social media management",
    "email marketing",
    "website development",
    "Black Box Media",
    "Serbia",
    "Croatia",
    "Bosnia and Herzegovina",
    "Balkan digital marketing",
    "online advertising",
    "increase sales",
    "increase engagement",
    "branding",
    "web development",
    "e-commerce solutions",
    "website optimization",
    "google ads",
    "facebook ads",
    "instagram ads",
    "reels ads",
    "ugc ads",
    "video production",
    "digital transformation",
    "marketing strategy",
    "analytics and reports",
    "local SEO",
    "technical SEO optimization",
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
    "email campaigns",
    "automated email sequences",
    "database segmentation",
    "email content creation",
    "newsletter design",
    "web design",
    "responsive web design",
    "custom websites",
    "website redesign",
    "web applications",
    "online store",
    "wordpress websites",
    "shopify websites",
    "website loading speed",
    "website security",
    "API integrations",
    "CMS solutions",
    "digital agency Belgrade",
    "digital agency Zagreb",
    "digital agency Sarajevo",
    "marketing agency Serbia",
    "marketing agency Croatia",
    "marketing agency Bosnia",
    "social media advertising",
    "advertising for small businesses",
    "advertising for startups",
    "advertising for e-commerce",
    "advertising for services",
    "advertising for products",
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
    "subscriber base growth",
    "video marketing",
    "video ads",
    "video ad filming",
    "video editing",
    "video strategy",
    "video campaigns",
    "video storytelling",
    "video content for brands",
    "video production for social media",
    "instagram video ads",
    "facebook video ads",
    "tiktok video ads",
    "linkedin video ads",
    "youtube video ads",
    "video ads for small businesses",
    "video ads for startups",
    "video ads for e-commerce",
    "video ads for services",
    "video ads for products",
    "video ads for brands",
    "video ads for conversion",
    "video ads for engagement",
    "video ads for sales",
    "video ads for brand growth",
    "video ads for follower growth",
    "video ads for sales growth",
    "video ads for engagement growth",
    "video ads for conversion growth",
    "video ads for brand growth on social media",
    "video ads for brand growth on instagram",
    "video ads for brand growth on facebook",
    "video ads for brand growth on tiktok",
    "video ads for brand growth on linkedin",
    "video ads for brand growth on youtube",
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
  "description": "Black Box Media offers SEO, PPC, Reels ads, social media management, email marketing, website development, and more. Boost your online presence and sales with us!",
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