"use client";

import { useI18n } from "@/i18n/LanguageProvider";
import { locales, localeNames } from "@/i18n/dictionaries";

export default function LanguageSwitcher({
  className = "",
}: {
  className?: string;
}) {
  const { locale, setLocale } = useI18n();

  return (
    <div
      className={`flex items-center gap-1 rounded-full border border-gold/25 p-1 ${className}`}
      role="group"
      aria-label="Language"
    >
      {locales.map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLocale(l)}
          aria-pressed={locale === l}
          className={`rounded-full px-3 py-1 text-[0.7rem] font-medium tracking-[0.08em] transition-colors ${
            locale === l
              ? "bg-gold text-navy-deep"
              : "text-navy-deep/60 hover:text-gold"
          }`}
        >
          {localeNames[l]}
        </button>
      ))}
    </div>
  );
}
