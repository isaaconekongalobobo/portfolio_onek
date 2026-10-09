import type { Metadata, Viewport } from "next";
import { Instrument_Sans, Marcellus } from "next/font/google";
import "./globals.css";

const marcellus = Marcellus({ subsets: ["latin"], weight: "400", variable: "--font-marcellus", display: "swap" });
const instrument = Instrument_Sans({ subsets: ["latin"], variable: "--font-instrument", display: "swap" });

export const metadata: Metadata = {
  title: "Isaac Onekonga | Développeur full-stack & intégrateur IA",
  description:
    "Portfolio d'Isaac Onekonga, développeur full-stack (Java Spring Boot, Next.js) et intégrateur IA à Kinshasa.",
};
export const viewport: Viewport = { width: "device-width", initialScale: 1, viewportFit: "cover", themeColor: "#000000" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${marcellus.variable} ${instrument.variable}`}>
      <body>{children}</body>
    </html>
  );
}
