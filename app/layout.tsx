import type { Metadata } from "next";
import { Cormorant_Garamond, Barlow_Condensed, DM_Sans } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/providers/LenisProvider";
import { Toaster } from "@/components/ui/sonner";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-barlow",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "inDEF Design & Construction N.V. | Premium Architecture",
  description:
    "Technical Precision. Architectural Soul. Premium design and construction firm based in Suriname.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${cormorant.variable} ${barlow.variable} ${dmSans.variable} font-body antialiased bg-dark-bg text-on-surface`}
      >
        <LenisProvider>
          {children}
        </LenisProvider>
        <Toaster />
      </body>
    </html>
  );
}
