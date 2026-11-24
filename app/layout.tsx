import type { Metadata, Viewport } from "next";
import {
  Cormorant_Garamond,
  Inter,
  JetBrains_Mono,
  Oxanium,
} from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
  display: "swap",
});

const oxanium = Oxanium({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-oxanium",
  display: "swap",
});

export const metadata: Metadata = {
  title: "YESHU ARCHITECTURAL — Surfaces, Cladding & Bespoke Form",
  description:
    "Architectural stone, fumed timber cladding, acoustic systems, and bespoke monolithic furniture. Private showroom for architects, designers, and residences.",
};

export const viewport: Viewport = {
  themeColor: "#121211",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} ${jetbrains.variable} ${oxanium.variable}`}
    >
      <body className="bg-bone text-ink antialiased selection:bg-slate selection:text-chalk">
        {children}
      </body>
    </html>
  );
}

