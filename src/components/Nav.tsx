"use client";

import { useEffect, useState } from "react";
import { useI18n } from "@/i18n/LanguageProvider";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Nav() {
  const { t } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#concept", label: t.nav.concept },
    { href: "#menu", label: t.nav.menu },
    { href: "#why", label: t.nav.why },
    { href: "#locations", label: t.nav.locations },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-navy-deep/85 backdrop-blur-md border-b border-gold/15 py-4"
          : "bg-transparent py-7"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">
        <a
          href="#top"
          className="font-display text-2xl font-semibold tracking-[0.45em] text-cream"
        >
          KAKU
        </a>

        <ul className="hidden items-center gap-10 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-xs font-medium tracking-[0.14em] text-cream/70 transition-colors hover:text-gold"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-5 md:flex">
          <LanguageSwitcher />
          <a
            href="#locations"
            className="rounded-full border border-gold/60 px-6 py-2.5 text-xs font-medium tracking-[0.12em] text-gold transition-all hover:bg-gold hover:text-navy-deep"
          >
            {t.nav.cta}
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`h-px w-6 bg-cream transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`}
          />
          <span
            className={`h-px w-6 bg-cream transition-opacity ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`h-px w-6 bg-cream transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
          />
        </button>
      </nav>

      {open && (
        <div className="border-t border-gold/15 bg-navy-deep/95 px-6 py-6 md:hidden">
          <ul className="flex flex-col gap-5">
            {[...links, { href: "#locations", label: t.nav.cta }].map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-sm tracking-[0.1em] text-cream/80"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <LanguageSwitcher />
          </div>
        </div>
      )}
    </header>
  );
}
