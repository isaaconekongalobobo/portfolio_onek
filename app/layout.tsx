import type { Metadata, Viewport } from "next";
import { Instrument_Sans, Marcellus } from "next/font/google";
import { siteUrl } from "@/lib/site";
import "./globals.css";

const marcellus = Marcellus({ subsets: ["latin"], weight: "400", variable: "--font-marcellus", display: "swap" });
const instrument = Instrument_Sans({ subsets: ["latin"], variable: "--font-instrument", display: "swap" });

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: "Isaac Onek | Développeur full-stack & IA à Kinshasa",
    template: "%s | Isaac Onekonga",
  },
  description: "Isaac Onekonga, aussi connu sous le nom d’Isaac Onek, est développeur full-stack à Kinshasa. Applications web et mobiles, Java, Spring Boot, Next.js et développement assisté par l’IA.",
  applicationName: "Portfolio d’Isaac Onekonga",
  authors: [{ name: "Isaac Onekonga" }],
  creator: "Isaac Onekonga",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteUrl,
    siteName: "Isaac Onekonga",
    title: "Isaac Onek | Développeur full-stack & IA à Kinshasa",
    description:
      "Portfolio d’Isaac Onekonga (Isaac Onek), développeur full-stack à Kinshasa spécialisé en applications web, mobile et intégration de l’intelligence artificielle.",
    images: [
      {
        url: "/og-cover-onek.jpg",
        width: 1200,
        height: 600,
        alt: "Portfolio d’Isaac Onek, développeur full-stack et intégrateur IA à Kinshasa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Isaac Onek | Développeur full-stack & IA à Kinshasa",
    description:
      "Isaac Onekonga, alias Isaac Onek : développeur full-stack et intégrateur IA à Kinshasa. Découvrez ses projets web et mobiles.",
    images: ["/og-cover-onek.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};
export const viewport: Viewport = { width: "device-width", initialScale: 1, viewportFit: "cover", themeColor: "#000000" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${marcellus.variable} ${instrument.variable}`}>
      <body className="group/site">
        <div className="min-h-screen overflow-x-clip bg-black text-white antialiased">{children}</div>
      </body>
    </html>
  );
}
