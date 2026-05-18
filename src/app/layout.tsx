import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
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

export const metadata: Metadata = {
  title: "KAKU — Sushi, Squared.",
  description:
    "KAKU is premium Grab & Go sushi, reimagined as a cube. Six jewelled flavours, a multigrain core, and a box made to be opened. Singapore & Kuala Lumpur.",
  keywords: [
    "KAKU",
    "premium sushi",
    "grab and go",
    "cube sushi",
    "sushi Singapore",
    "sushi Kuala Lumpur",
  ],
  openGraph: {
    title: "KAKU — Sushi, Squared.",
    description:
      "Premium Grab & Go sushi, reimagined as a cube. Six jewelled flavours in a box made to be opened.",
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
      lang="en"
      className={`${cormorant.variable} ${inter.variable} h-full`}
    >
      <body className="min-h-full bg-navy text-cream antialiased">
        {children}
      </body>
    </html>
  );
}
