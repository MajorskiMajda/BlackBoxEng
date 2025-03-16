import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Black Box Media - Marketing Experts in Serbia",
  description: "Get to know Black Box Media, a leading marketing agency for digital campaigns, branding, and business growth. Contact us for your brand’s success!",
  metadataBase: new URL("https://www.black-box-media.com"), 
  openGraph: {
    title: "About Us | Black Box Media - Your Marketing Partner",
    description: "Learn more about Black Box Media and how we help clients achieve their business goals through creative and effective marketing.",
    url: "https://www.black-box-media.com/about",
    type: "website",
  },
  keywords: "marketing agency, digital marketing, branding, advertising, Serbia, marketing agency, digital marketing, branding, advertising, Serbia, marketing strategy, marketing consulting, creative agency, full-service marketing, SEO optimization, local SEO, technical SEO, SEO strategy, SEO analysis, website optimization, keywords, backlinking, on-page SEO, off-page SEO, social media marketing, social media management, increasing engagement, Instagram strategy", 
  authors: [{ name: "Black Box Media" }],
  robots: "index, follow",
};

export default function SMMLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
