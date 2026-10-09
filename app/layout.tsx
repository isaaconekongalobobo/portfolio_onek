import type { Metadata, Viewport } from "next";
import { Instrument_Sans, Marcellus } from "next/font/google";
import { siteUrl } from "@/lib/site";
import "./globals.css";

const marcellus = Marcellus({ subsets: ["latin"], weight: "400", variable: "--font-marcellus", display: "swap" });
const instrument = Instrument_Sans({ subsets: ["latin"], variable: "--font-instrument", display: "swap" });

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: "Isaac Onekonga | Développeur full-stack à Kinshasa",
    template: "%s | Isaac Onekonga",
  },
  description:
    "Développeur full-stack à Kinshasa, je conçois des applications web avec Java, Spring Boot, Next.js et des solutions d’intelligence artificielle.",
  applicationName: "Portfolio d’Isaac Onekonga",
  authors: [{ name: "Isaac Onekonga" }],
  creator: "Isaac Onekonga",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteUrl,
    siteName: "Isaac Onekonga",
    title: "Isaac Onekonga | Développeur full-stack à Kinshasa",
    description:
      "Portfolio d’Isaac Onekonga, développeur full-stack et intégrateur de solutions d’IA à Kinshasa.",
    images: [
      {
        url: "/og-cover-onek.jpg",
        width: 1200,
        height: 600,
        alt: "Isaac Onekonga, développeur full-stack à Kinshasa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Isaac Onekonga | Développeur full-stack à Kinshasa",
    description:
      "Développeur full-stack et intégrateur de solutions d’IA à Kinshasa. Découvrez mon portfolio.",
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
      <body>{children}</body>
    </html>
  );
}
