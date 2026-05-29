"use client";

import {
  createContext,
  useContext,
  useCallback,
  type ReactNode,
} from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  dictionaries,
  locales,
  type Dict,
  type Locale,
} from "./dictionaries";

type Ctx = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  path: (p: string) => string;
  t: Dict;
};

const LanguageContext = createContext<Ctx | null>(null);

// Returns a path with the current locale prefix prepended. External URLs
// and bare anchors (#foo) pass through unchanged.
function localePath(locale: Locale, p: string): string {
  if (p.startsWith("#") || p.startsWith("http")) return p;
  if (!p.startsWith("/")) return p;
  return `/${locale}${p === "/" ? "" : p}`;
}

export function LanguageProvider({
  children,
  initialLocale,
  dict,
}: {
  children: ReactNode;
  initialLocale: Locale;
  dict?: Dict;
}) {
  const router = useRouter();
  const pathname = usePathname() || "/";

  const setLocale = useCallback(
    (next: Locale) => {
      const stripped = pathname.replace(
        new RegExp(`^/(${locales.join("|")})(?=/|$)`),
        "",
      );
      const target = `/${next}${stripped || ""}`;
      router.push(target);
    },
    [pathname, router],
  );

  const pathHelper = useCallback(
    (p: string) => localePath(initialLocale, p),
    [initialLocale],
  );

  return (
    <LanguageContext.Provider
      value={{
        locale: initialLocale,
        setLocale,
        path: pathHelper,
        t: dict ?? dictionaries[initialLocale],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useI18n must be used within a LanguageProvider");
  }
  return ctx;
}
