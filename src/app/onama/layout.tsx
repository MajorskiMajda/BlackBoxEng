import { Metadata } from "next";

export const metadata: Metadata = {
  title: "O nama | Black Box Media - Marketing stručnjaci u Srbiji",
  description: "Upoznajte Black Box Media, vodeću marketing agenciju za digitalne kampanje, brending i rast poslovanja. Kontaktirajte nas za uspeh vašeg brenda!",
  metadataBase: new URL("https://www.black-box-media.com"), 
  openGraph: {
    title: "O nama | Black Box Media - Vaš partner za marketing",
    description: "Saznajte više o Black Box Media i kako pomažemo klijentima da ostvare svoje poslovne ciljeve kroz kreativan i efektan marketing.",
    url: "https://www.black-box-medial/onama",
    type: "website",
  },
  keywords: "marketing agencija, digitalni marketing, brending, oglašavanje, Srbija, marketing agencija, digitalni marketing, brending, oglašavanje, Srbija, marketinška strategija, marketing konsultacije, kreativna agencija, full-service marketing, SEO optimizacija, lokalni SEO, tehnički SEO, SEO strategija, SEO analiza, optimizacija sajta, ključne reči, backlinking, on-page SEO, off-page SEO, social media marketing, menadžment društvenih mreža, povećanje engagementa, Instagram strategija ", 
  authors: [{ name: "Black Box Media" }],
  robots: "index, follow",
};

export default function SMMLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
