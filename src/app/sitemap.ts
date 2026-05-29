import type { MetadataRoute } from "next";
import { locales } from "@/i18n/dictionaries";

const SITE = "https://kaku.example";
const PATHS = ["", "/reserve", "/franchise"];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];
  for (const path of PATHS) {
    entries.push({
      url: `${SITE}/ja${path}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: path === "" ? 1 : 0.8,
      alternates: {
        languages: Object.fromEntries(
          locales.map((l) => [l, `${SITE}/${l}${path}`]),
        ),
      },
    });
  }
  return entries;
}
