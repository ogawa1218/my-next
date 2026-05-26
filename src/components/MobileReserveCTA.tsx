"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useI18n } from "@/i18n/LanguageProvider";

// Floating Reserve pill that appears after the user has scrolled past the
// hero on mobile widths. Hidden on md+ since the desktop nav already shows
// a persistent Reserve button.
export default function MobileReserveCTA() {
  const { t } = useI18n();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Link
      href="/reserve"
      aria-label={t.nav.cta}
      className={`fixed bottom-5 right-5 z-40 rounded-full bg-gold px-6 py-3 text-xs font-semibold tracking-[0.12em] text-navy-deep shadow-[0_18px_50px_rgba(6,21,42,0.32)] transition-all duration-300 md:hidden ${
        show
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      {t.nav.cta}
    </Link>
  );
}
