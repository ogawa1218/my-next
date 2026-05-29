import Landing from "@/components/Landing";
import JsonLd from "@/components/JsonLd";
import { locales, type Locale } from "@/i18n/dictionaries";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const safe = (locales as readonly string[]).includes(locale)
    ? (locale as Locale)
    : "ja";
  return (
    <>
      <JsonLd locale={safe} />
      <Landing />
    </>
  );
}
