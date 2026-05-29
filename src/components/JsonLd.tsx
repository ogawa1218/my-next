import type { Locale } from "@/i18n/dictionaries";

const SITE = "https://kaku.example";

const NAME: Record<Locale, string> = {
  ja: "KAKU 押し寿司 — Sushi, Squared.",
  en: "KAKU Pressed Sushi — Sushi, Squared.",
  zh: "KAKU 押寿司 — Sushi, Squared.",
};

const DESC: Record<Locale, string> = {
  ja: "30mm角の押し寿司キューブを五穀米で。原宿・東京駅八重洲口・浅草・上野の4店舗パイロット。働く20-30代のための健康とラグジュアリーのGrab & Go。",
  en: "30mm pressed sushi cubes on five-grain rice. Four Tokyo pilot stores: Harajuku, Tokyo Station Yaesu, Asakusa, and Ueno. Premium Grab & Go for the busiest you.",
  zh: "30mm 押寿司立方，五谷米。东京 4 家试点门店：原宿、东京站、浅草、上野。专为忙碌的 20-30 代而生的健康奢华即取即走。",
};

const STORES = [
  {
    name: { ja: "KAKU 原宿 旗艦店", en: "KAKU Harajuku Flagship", zh: "KAKU 原宿旗舰店" },
    locality: { ja: "渋谷区", en: "Shibuya", zh: "涩谷区" },
    region: { ja: "東京都", en: "Tokyo", zh: "东京都" },
  },
  {
    name: { ja: "KAKU 東京駅 八重洲口店", en: "KAKU Tokyo Station Yaesu", zh: "KAKU 东京站 八重洲口店" },
    locality: { ja: "千代田区", en: "Chiyoda", zh: "千代田区" },
    region: { ja: "東京都", en: "Tokyo", zh: "东京都" },
  },
  {
    name: { ja: "KAKU 浅草店", en: "KAKU Asakusa", zh: "KAKU 浅草店" },
    locality: { ja: "台東区", en: "Taito", zh: "台东区" },
    region: { ja: "東京都", en: "Tokyo", zh: "东京都" },
  },
  {
    name: { ja: "KAKU 上野店", en: "KAKU Ueno", zh: "KAKU 上野店" },
    locality: { ja: "台東区", en: "Taito", zh: "台东区" },
    region: { ja: "東京都", en: "Tokyo", zh: "东京都" },
  },
];

export default function JsonLd({ locale }: { locale: Locale }) {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE}/#org`,
        name: "KAKU",
        url: `${SITE}/${locale}`,
        logo: `${SITE}/kaku-logo-transparent.png`,
        sameAs: [],
        description: DESC[locale],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE}/#website`,
        url: `${SITE}/${locale}`,
        name: NAME[locale],
        inLanguage: locale,
        publisher: { "@id": `${SITE}/#org` },
      },
      {
        "@type": "Restaurant",
        "@id": `${SITE}/${locale}#restaurant`,
        name: NAME[locale],
        description: DESC[locale],
        image: `${SITE}/kaku-hero.png`,
        url: `${SITE}/${locale}`,
        servesCuisine: ["Japanese", "Sushi", "Pressed Sushi"],
        priceRange: "¥¥",
        acceptsReservations: true,
        areaServed: { "@type": "City", name: "Tokyo" },
        department: STORES.map((s, i) => ({
          "@type": "Restaurant",
          name: s.name[locale],
          address: {
            "@type": "PostalAddress",
            addressLocality: s.locality[locale],
            addressRegion: s.region[locale],
            addressCountry: "JP",
          },
          openingDate: ["2026-03-01", "2026-06-01", "2026-09-01", "2026-12-01"][i],
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
