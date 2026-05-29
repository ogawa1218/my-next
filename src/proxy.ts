import { NextResponse, type NextRequest } from "next/server";
import { locales, defaultLocale, type Locale } from "@/i18n/dictionaries";

const SUPPORTED: readonly string[] = locales;

function negotiateLocale(req: NextRequest): Locale {
  const header = req.headers.get("accept-language") ?? "";
  const langs = header
    .split(",")
    .map((part) => part.split(";")[0].trim().toLowerCase());
  for (const lang of langs) {
    if (lang.startsWith("ja")) return "ja";
    if (lang.startsWith("zh")) return "zh";
    if (lang.startsWith("en")) return "en";
  }
  return defaultLocale;
}

export function proxy(req: NextRequest): NextResponse | undefined {
  const { pathname } = req.nextUrl;

  // Already locale-prefixed — let the request through.
  const first = pathname.split("/")[1] ?? "";
  if (SUPPORTED.includes(first)) return;

  // Detect locale, redirect with the same path under that prefix.
  const locale = negotiateLocale(req);
  const url = req.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    // Skip Next internals, API routes, static assets and files with extensions.
    "/((?!_next|api|.*\\..*).*)",
  ],
};
