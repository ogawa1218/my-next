import type { Metadata } from "next";
import {
  Bodoni_Moda,
  Hanken_Grotesk,
  Noto_Sans_JP,
  Noto_Serif_JP,
} from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/i18n/LanguageProvider";

const bodoni = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  display: "swap",
});

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const notoSansJp = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const notoSerifJp = Noto_Serif_JP({
  variable: "--font-noto-serif-jp",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "KAKU — Sushi, Squared.",
  description:
    "KAKU は、寿司をキューブに再定義したプレミアム Grab & Go。宝石のような6つのフレーバー、雑穀ブレンドのシャリ、開けるために生まれた箱。シンガポール & クアラルンプール。",
  keywords: [
    "KAKU",
    "プレミアム寿司",
    "グラブアンドゴー",
    "キューブ寿司",
    "テイクアウト寿司",
    "シンガポール",
    "クアラルンプール",
  ],
  openGraph: {
    title: "KAKU — Sushi, Squared.",
    description:
      "寿司をキューブに再定義したプレミアム Grab & Go。宝石のような6つのフレーバーを、開けるために生まれた箱に。",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${bodoni.variable} ${hanken.variable} ${notoSansJp.variable} ${notoSerifJp.variable} h-full`}
    >
      <body className="min-h-full bg-navy text-cream antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
