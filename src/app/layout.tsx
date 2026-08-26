import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { HealthNotice } from "@/components/health-notice";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kuduz.org - Bilgiyle Koru, Önlemle Yaşa",
  description: "Türkiye'de kuduz farkındalığı, acil durum rehberi ve güvenli bildirim platformu.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="light" style={{ colorScheme: "light" }}>
      <body className={inter.className}>
        <Navbar />
        <HealthNotice />
        {children}
      </body>
    </html>
  );
}
