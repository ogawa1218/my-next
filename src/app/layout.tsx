import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  Inter,
  Noto_Sans_JP,
  Noto_Serif_JP,
} from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
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
      className={`${cormorant.variable} ${inter.variable} ${notoSansJp.variable} ${notoSerifJp.variable} h-full`}
    >
      <body className="min-h-full bg-navy text-cream antialiased">
        {children}
      </body>
    </html>
  );
}
