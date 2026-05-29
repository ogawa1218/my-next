import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  Bodoni_Moda,
  Hanken_Grotesk,
  Noto_Sans_JP,
  Noto_Serif_JP,
} from "next/font/google";
import "../globals.css";
import { LanguageProvider } from "@/i18n/LanguageProvider";
import { dictionaries, locales, type Locale } from "@/i18n/dictionaries";

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

const SITE_ORIGIN = "https://kaku.example";

const META: Record<
  Locale,
  { title: string; description: string; keywords: string[]; htmlLang: string }
> = {
  ja: {
    title: "KAKU 押し寿司 — Sushi, Squared. | 原宿・東京駅・浅草・上野",
    description:
      "東京4店舗パイロット（原宿・東京駅八重洲口・浅草・上野）。30mm角の押し寿司キューブを五穀米で。働く20-30代女性のための、健康とラグジュアリーのGrab & Go。次の活力へ。",
    keywords: [
      "KAKU",
      "押し寿司",
      "プレミアム寿司",
      "テイクアウト寿司",
      "原宿 ランチ",
      "東京駅 ランチ",
      "浅草 ランチ",
      "上野 ランチ",
      "Grab & Go",
      "健康ランチ",
      "五穀米",
      "ヘルシーランチ 東京",
      "押し寿司 東京",
      "ギフト 寿司",
    ],
    htmlLang: "ja",
  },
  en: {
    title: "KAKU Pressed Sushi — Sushi, Squared. | Harajuku · Tokyo Station",
    description:
      "Four Tokyo pilot stores: Harajuku, Tokyo Station Yaesu, Asakusa, Ueno. 30mm pressed sushi cubes on five-grain rice. Premium Grab & Go for the busiest you — your next surge.",
    keywords: [
      "KAKU",
      "pressed sushi",
      "premium sushi",
      "sushi takeaway",
      "Tokyo lunch",
      "Harajuku lunch",
      "Tokyo Station food",
      "Asakusa lunch",
      "Grab and Go",
      "healthy lunch Tokyo",
      "five-grain rice",
      "Japanese gift sushi",
    ],
    htmlLang: "en",
  },
  zh: {
    title: "KAKU 押寿司 — Sushi, Squared. | 原宿·东京站·浅草·上野",
    description:
      "东京 4 家试点门店：原宿、东京站八重洲口、浅草、上野。30mm 押寿司立方，五谷米。专为忙碌的 20-30 代女性而生的健康奢华即取即走——下一份活力。",
    keywords: [
      "KAKU",
      "押寿司",
      "高端寿司",
      "外带寿司",
      "原宿 午餐",
      "东京站 午餐",
      "浅草 午餐",
      "即取即走",
      "健康午餐 东京",
      "五谷米",
      "日本伴手礼",
    ],
    htmlLang: "zh-CN",
  },
};

function altUrls(path = "") {
  return {
    ja: `${SITE_ORIGIN}/ja${path}`,
    en: `${SITE_ORIGIN}/en${path}`,
    zh: `${SITE_ORIGIN}/zh${path}`,
    "x-default": `${SITE_ORIGIN}/ja${path}`,
  };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!(locales as readonly string[]).includes(locale)) return {};
  const m = META[locale as Locale];

  return {
    metadataBase: new URL(SITE_ORIGIN),
    title: m.title,
    description: m.description,
    keywords: m.keywords,
    alternates: {
      canonical: `/${locale}`,
      languages: altUrls(""),
    },
    openGraph: {
      type: "website",
      locale: m.htmlLang.replace("-", "_"),
      url: `/${locale}`,
      siteName: "KAKU — Sushi, Squared.",
      title: m.title,
      description: m.description,
      images: [
        {
          url: "/kaku-hero.png",
          width: 1448,
          height: 1086,
          alt: "KAKU pressed sushi showcase",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: m.title,
      description: m.description,
      images: ["/kaku-hero.png"],
    },
  };
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!(locales as readonly string[]).includes(locale)) notFound();

  const dict = dictionaries[locale as Locale];

  return (
    <html
      lang={META[locale as Locale].htmlLang}
      className={`${bodoni.variable} ${hanken.variable} ${notoSansJp.variable} ${notoSerifJp.variable} h-full`}
    >
      <body className="min-h-full bg-cream-dim text-navy-deep antialiased">
        <LanguageProvider initialLocale={locale as Locale} dict={dict}>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
