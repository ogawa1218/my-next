"use client";

import Link from "next/link";
import { useI18n } from "@/i18n/LanguageProvider";

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className="border-t border-gold/15 bg-cream px-6 py-14 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 md:flex-row md:justify-between">
        <Link
          href="/"
          className="font-display text-xl font-semibold tracking-[0.45em] text-navy-deep"
        >
          KAKU
        </Link>

        <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-xs tracking-[0.12em] text-navy-deep/50">
          <Link href="/reserve" className="transition-colors hover:text-gold">
            {t.footer.reserve}
          </Link>
          <Link
            href="/#newsletter"
            className="transition-colors hover:text-gold"
          >
            {t.footer.newsletter}
          </Link>
          <Link
            href="/franchise"
            className="transition-colors hover:text-gold"
          >
            {t.footer.franchise}
          </Link>
          <span className="text-navy-deep/40">{t.footer.tagline}</span>
        </nav>

        <p className="text-xs text-navy-deep/30">
          © {new Date().getFullYear()} KAKU. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
