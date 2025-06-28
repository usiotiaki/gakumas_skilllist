import type { Metadata } from "next";
import { Geist, Geist_Mono, IBM_Plex_Sans_JP } from "next/font/google";
import "./globals.css";

/* 基本フォント IBM Plex Sans JP */
const ibmPlexSansJP = IBM_Plex_Sans_JP({
  subsets: ['latin'],
  display: 'swap',
  weight: ['500', '600'], // 必要に応じて
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "【学マス】スキルカード図鑑【非公式】",
  description: "ゲーム「学園アイドルマスター」における『スキルカード』の 非公式 検索ツールです。本家のP図鑑+αを目標に個人で作成し公開しています。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ibmPlexSansJP} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
