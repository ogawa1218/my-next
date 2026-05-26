"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useI18n } from "@/i18n/LanguageProvider";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Nav() {
  const { t } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/#concept", label: t.nav.concept },
    { href: "/#menu", label: t.nav.menu },
    { href: "/#why", label: t.nav.why },
    { href: "/#locations", label: t.nav.locations },
    { href: "/reserve", label: t.nav.reserve },
    { href: "/franchise", label: t.nav.franchise },
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
          ? "bg-cream/85 backdrop-blur-md border-b border-gold/15 py-4"
          : "bg-transparent py-7"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">
        <Link
          href="/"
          aria-label="KAKU — Home"
          className="block w-32 md:w-40"
        >
          <Image
            src="/kaku-logo-transparent.png"
            alt="KAKU Sushi, Squared."
            width={1015}
            height={276}
            priority
            className="h-auto w-full"
          />
        </Link>

        <ul className="hidden items-center gap-10 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-xs font-medium tracking-[0.14em] text-navy-deep/70 transition-colors hover:text-gold"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-5 md:flex">
          <LanguageSwitcher />
          <Link
            href="/reserve"
            className="rounded-full border border-gold bg-gold px-6 py-2.5 text-xs font-semibold tracking-[0.12em] text-navy-deep transition-all hover:-translate-y-0.5 hover:bg-cream"
          >
            {t.nav.cta}
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`h-px w-6 bg-navy-deep transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`}
          />
          <span
            className={`h-px w-6 bg-navy-deep transition-opacity ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`h-px w-6 bg-navy-deep transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
          />
        </button>
      </nav>

      {open && (
        <div className="border-t border-gold/15 bg-cream/95 px-6 py-6 md:hidden">
          <ul className="flex flex-col gap-5">
            {links.map((l) => (
              <li key={l.label}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-sm tracking-[0.1em] text-navy-deep/80"
                >
                  {l.label}
                </Link>
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
