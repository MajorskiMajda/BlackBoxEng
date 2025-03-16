import { Metadata } from "next";
import Script from 'next/script';

export const metadata: Metadata = {
  title: "Graphic Design Services | Professional Design for Your Brand",
  description: "We create visually impressive logos, banners, Instagram posts, business cards, and newsletters for your brand. Increase your brand recognition with our graphic design services.",
  metadataBase: new URL("https://www.black-box-media.com"),
  openGraph: {
    title: "Graphic Design Services | Professional Design for Your Brand",
    description: "We create visually impressive logos, banners, Instagram posts, business cards, and newsletters for your brand. Increase your brand recognition with our graphic design services.",
    images: [
      {
        url: "https://www.black-box-media.com/pen-tool.svg",
        alt: "Graphic Design Services - Black Box Media",
      },
    ],
    url: "https://www.black-box-media.com/graficki-dizajn",
    type: "website",
  },
  keywords: [
    "graphic design",
    "logo design",
    "banner design",
    "Instagram posts",
    "business cards",
    "newsletter design",
    "branding services",
    "social media design",
    "professional graphic design",
    "Black Box Media",
    "Serbia",
    "Croatia",
    "Bosnia and Herzegovina",
    "Balkans",
    "social media post creation",
    "Facebook design",
    "Instagram design",
  ],
  authors: [{ name: "Black Box Media", url: "https://www.black-box-media.com" }],
  robots: "index, follow",
  alternates: {
    canonical: "https://www.black-box-media.com/graficki-dizajn",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Graphic Design Services",
  "description": "We create visually impressive logos, banners, Instagram posts, business cards, and newsletters for your brand. Increase your brand recognition with our graphic design services.",
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

export default function GraphicDesignLayout({ children }: { children: React.ReactNode }) {
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