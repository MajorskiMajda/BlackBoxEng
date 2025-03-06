import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Pristupite besplatnim testovima i lekcijama engleskog jezika sa Kursor platforme. Prijavite se sada i unapredite svoje jezičke veštine!",
  metadataBase: new URL("https://www.vasastranicatestiranje.com"),
  openGraph: {
    title: "Prijavite se za učenje engleskog jezika sa Kursorom",
    description: "Pristupite besplatnim testovima i lekcijama engleskog jezika sa Kursor platforme. Prijavite se sada i unapredite svoje jezičke veštine!",
    images: "URL to an image representing login",
    url: "https://www.vasastranicatestiranje.com/login",
    type: "website",
  },
  keywords: "prijava, učenje engleskog, online kurs, online nastava, engleski jezik, testovi, lekcije, Kursor, Srbija, Hrvatska, Bosna i Hercegovina, Balkanci",
  authors: [{ name: "Kursor" }],
  robots: "index, follow",
};

export default function SMMLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
