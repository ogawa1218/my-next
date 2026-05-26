"use client";

import Link from "next/link";
import Nav from "@/components/Nav";
import LedTicker from "@/components/LedTicker";
import Reveal from "@/components/Reveal";
import Image from "next/image";
import StoreShowcase from "@/components/StoreShowcase";
import Footer from "@/components/Footer";
import NewsletterForm from "@/components/NewsletterForm";
import { useI18n } from "@/i18n/LanguageProvider";

export default function Landing() {
  const { t } = useI18n();

  return (
    <main id="top" className="relative overflow-hidden">
      <Nav />

      {/* HERO */}
      <section className="relative flex min-h-screen items-center px-6 pt-32 pb-24 lg:px-10">
        <div
          className="pointer-events-none absolute -right-40 top-1/4 h-[520px] w-[520px] rounded-full bg-gold/10 blur-[120px]"
          aria-hidden
        />
        <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
          <div className="animate-rise">
            {/* Enlarged hero image with Concept overlay + KAKU title */}
            <div className="relative overflow-hidden rounded-3xl border border-gold/20 shadow-[0_30px_90px_rgba(6,21,42,0.18)]">
              <Image
                src="/kaku-hero.png"
                alt="KAKU pressed sushi cubes on a serving tray"
                width={1200}
                height={680}
                priority
                sizes="(min-width: 1024px) 55vw, 92vw"
                className="h-auto w-full object-cover"
              />

              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-b from-navy-deep/40 via-transparent to-navy-deep/60"
                aria-hidden
              />

              {/* Horizontal Concept eyebrow over the top of the image */}
              <div className="absolute inset-x-0 top-0 flex flex-wrap items-center gap-x-4 gap-y-1 px-6 pt-5 sm:px-8 sm:pt-6">
                <span className="text-[0.65rem] font-semibold uppercase tracking-[0.4em] text-gold">
                  Concept
                </span>
                <span className="text-gold/40" aria-hidden>
                  ·
                </span>
                <span className="text-[0.65rem] uppercase tracking-[0.3em] text-cream/85">
                  {t.hero.eyebrow}
                </span>
              </div>

              {/* KAKU + Sushi, Squared title overlay */}
              <div className="absolute inset-x-0 bottom-0 px-6 pb-6 sm:px-8 sm:pb-8">
                <p className="font-display text-5xl font-semibold tracking-[0.18em] text-cream sm:text-6xl lg:text-7xl">
                  KAKU
                </p>
                <p className="mt-2 font-display text-lg tracking-[0.08em] text-gold-soft sm:text-xl lg:text-2xl">
                  {t.hero.title1} {t.hero.title2}
                </p>
              </div>
            </div>

            {/* Lead + CTAs below the image */}
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-navy-deep/75">
              {t.hero.lead}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <a
                href="#menu"
                className="rounded-full bg-gold px-9 py-4 text-sm font-semibold tracking-[0.08em] text-navy-deep transition-transform hover:scale-[1.03]"
              >
                {t.hero.ctaMenu}
              </a>
              <a
                href="#concept"
                className="text-sm font-medium tracking-[0.08em] text-navy-deep/70 underline-offset-8 transition-colors hover:text-gold hover:underline"
              >
                {t.hero.ctaConcept}
              </a>
            </div>
          </div>

          <div className="animate-rise">
            <StoreShowcase />
          </div>
        </div>

        <div
          className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 text-[0.65rem] uppercase tracking-[0.35em] text-navy-deep/40 lg:block"
          aria-hidden
        >
          Scroll
        </div>
      </section>

      {/* MARQUEE */}
      <div className="border-y border-gold/15 bg-cream py-6">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-3 px-6 text-xs tracking-[0.3em] text-navy-deep/40">
          {t.marquee.map((w, i) => (
            <span key={i}>{w}</span>
          ))}
        </div>
      </div>

      {/* CONCEPT */}
      <section id="concept" className="py-28 lg:py-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.4em] text-gold">
              {t.concept.eyebrow}
            </p>
            <h2 className="mt-6 max-w-3xl font-display text-[clamp(2.5rem,5vw,4.5rem)] font-semibold leading-[1.05] text-navy-deep">
              {t.concept.title}
            </h2>
          </Reveal>
        </div>

        <Reveal className="mt-14 lg:mt-16">
          <LedTicker text={t.concept.lead} />
        </Reveal>

        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mt-20 grid gap-px overflow-hidden rounded-2xl border border-gold/15 bg-gold/15 md:grid-cols-2 lg:grid-cols-5">
            {t.concept.pillars.map((p, i) => (
              <Reveal
                key={p.k}
                delay={i * 80}
                className="group bg-cream-dim p-8 transition-colors hover:bg-cream"
              >
                <span className="font-display text-3xl text-gold/40 transition-colors group-hover:text-gold">
                  {p.k}
                </span>
                <h3 className="mt-6 font-display text-2xl font-semibold text-navy-deep">
                  {p.t}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-navy-deep/55">
                  {p.d}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* MENU */}
      <section
        id="menu"
        className="border-y border-gold/15 bg-cream px-6 py-28 lg:px-10 lg:py-40"
      >
        <div className="mx-auto max-w-7xl">
          <Reveal className="text-center">
            <p className="text-xs font-medium uppercase tracking-[0.4em] text-gold">
              {t.menu.eyebrow}
            </p>
            <h2 className="mx-auto mt-6 max-w-2xl font-display text-[clamp(2.5rem,5vw,4.5rem)] font-semibold leading-[1.05] text-navy-deep">
              {t.menu.title}
            </h2>
          </Reveal>

          <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {t.menu.items.map((m, i) => (
              <Reveal
                key={m.slug}
                delay={i * 70}
                className="group relative overflow-hidden rounded-2xl border border-gold/15 bg-cream-dim transition-all hover:border-gold/50"
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden">
                  <Image
                    src={`/products/${m.slug}.png`}
                    alt={m.name}
                    fill
                    sizes="(min-width: 1024px) 22rem, (min-width: 640px) 45vw, 90vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <span className="absolute right-3 top-3 rounded-full border border-gold/40 bg-cream/60 px-3 py-1 text-[0.65rem] tracking-[0.1em] text-gold/90 backdrop-blur">
                    {m.rice}
                  </span>
                </div>
                <div className="p-7">
                  <p className="font-display text-xs tracking-[0.3em] text-gold/80">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-semibold text-navy-deep">
                    {m.name}
                  </h3>
                  <p className="mt-2 text-sm text-navy-deep/55">{m.note}</p>
                  <div
                    className="mt-6 h-px w-full hairline opacity-50 transition-opacity group-hover:opacity-100"
                    aria-hidden
                  />
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-4">
            {t.menu.sets.map((s, i) => (
              <Reveal
                key={s.name}
                delay={i * 70}
                className={`rounded-2xl p-8 text-center transition-transform hover:-translate-y-1 ${
                  s.featured
                    ? "bg-gold text-navy-deep"
                    : "border border-gold/15 bg-cream-dim text-navy-deep"
                }`}
              >
                {s.featured && (
                  <span className="text-[0.65rem] font-semibold tracking-[0.12em]">
                    {t.menu.featuredLabel}
                  </span>
                )}
                <h3
                  className={`font-display text-2xl font-semibold ${s.featured ? "mt-2" : ""}`}
                >
                  {s.name}
                </h3>
                <p
                  className={`mt-2 text-xs tracking-[0.08em] ${
                    s.featured ? "text-navy-deep/70" : "text-navy-deep/45"
                  }`}
                >
                  {s.detail}
                </p>
                <p className="mt-6 font-display text-4xl font-semibold">
                  {s.price}
                </p>
              </Reveal>
            ))}
          </div>

          {t.menu.sides.length > 0 && (
            <Reveal className="mt-12 flex flex-wrap justify-center gap-x-10 gap-y-2 text-sm text-navy-deep/45">
              {t.menu.sides.map((s, i) => (
                <span key={s} className="flex items-center gap-x-10">
                  {i > 0 && <span className="text-gold/40">·</span>}
                  {s}
                </span>
              ))}
            </Reveal>
          )}
        </div>
      </section>

      {/* VISUAL SYSTEM */}
      <section className="bg-navy-deep px-6 py-24 text-cream lg:px-10 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.4em] text-gold">
              Menu Board / Store Image
            </p>
            <h2 className="mt-6 font-display text-[clamp(2.4rem,5vw,4.6rem)] font-semibold leading-[1.05]">
              From showcase
              <span className="block text-gradient-gold">to premium pickup.</span>
            </h2>
            <p className="mt-7 max-w-xl text-base leading-8 text-cream/70 md:text-lg">
              A luxury visual system for the cake showcase, core six menu and price architecture.
              The product, menu board and pickup flow work together as one conversion experience.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/reserve"
                className="rounded-full bg-gold px-8 py-4 text-sm font-semibold tracking-[0.08em] text-navy-deep transition-transform hover:scale-[1.03]"
              >
                Reserve Pickup
              </Link>
              <Link
                href="/franchise#inquiry"
                className="rounded-full border border-gold/45 px-8 py-4 text-sm font-semibold tracking-[0.08em] text-gold transition-colors hover:bg-gold/10"
              >
                Franchise Inquiry
              </Link>
            </div>
          </Reveal>

          <Reveal className="grid gap-5">
            <div className="overflow-hidden rounded-[2rem] border border-gold/25 bg-cream p-2 shadow-[0_30px_90px_rgba(0,0,0,0.28)]">
              <Image
                src="/kaku-menu-board.svg"
                alt="KAKU core six menu board with Japanese pricing"
                width={1600}
                height={1000}
                className="h-auto w-full rounded-[1.5rem]"
              />
            </div>
            <div className="overflow-hidden rounded-[2rem] border border-gold/25 bg-cream p-2 shadow-[0_30px_90px_rgba(0,0,0,0.22)]">
              <Image
                src="/kaku-store.svg"
                alt="KAKU cake showcase store concept"
                width={1600}
                height={900}
                className="h-auto w-full rounded-[1.5rem]"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHY */}
      <section id="why" className="px-6 py-28 lg:px-10 lg:py-40">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2 lg:gap-24">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.4em] text-gold">
              {t.why.eyebrow}
            </p>
            <h2 className="mt-6 font-display text-[clamp(2.5rem,5vw,4.5rem)] font-semibold leading-[1.05] text-navy-deep">
              {t.why.title}
            </h2>
            <p className="mt-8 text-lg leading-relaxed text-navy-deep/65">
              {t.why.lead}
            </p>
            <ul className="mt-10 space-y-4">
              {t.why.bullets.map((b) => (
                <li key={b} className="flex gap-4 text-navy-deep/70">
                  <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-gold" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <div className="grid grid-cols-2 gap-px self-center overflow-hidden rounded-2xl border border-gold/15 bg-gold/15">
            {t.why.promises.map((p, i) => (
              <Reveal key={p.k} delay={i * 90} className="bg-cream-dim p-10">
                <p className="font-display text-xs tracking-[0.3em] text-gold">
                  {p.k}
                </p>
                <p className="mt-3 font-display text-2xl font-semibold text-navy-deep">
                  {p.t}
                </p>
                <p className="mt-2 text-sm leading-snug text-navy-deep/55">
                  {p.d}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATIONS */}
      <section
        id="locations"
        className="border-y border-gold/15 bg-cream px-6 py-28 lg:px-10 lg:py-40"
      >
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.4em] text-gold">
              {t.locations.eyebrow}
            </p>
            <h2 className="mt-6 max-w-2xl font-display text-[clamp(2.5rem,5vw,4.5rem)] font-semibold leading-[1.05] text-navy-deep">
              {t.locations.title}
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {t.locations.cities.map((c, i) => (
              <Reveal
                key={c.city}
                delay={i * 100}
                className="group relative overflow-hidden rounded-3xl border border-gold/20 bg-cream-dim p-10 lg:p-14"
              >
                <span className="text-xs tracking-[0.14em] text-gold/70">
                  {c.tag}
                </span>
                <h3 className="mt-4 font-display text-4xl font-semibold text-navy-deep lg:text-5xl">
                  {c.city}
                </h3>
                <p className="mt-6 max-w-sm text-navy-deep/60">{c.d}</p>
                <div className="mt-10 h-px w-full hairline" aria-hidden />
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-navy-deep/45">
            <span>{t.locations.nextLabel}</span>
            {t.locations.next.map((n) => (
              <span key={n} className="flex items-center gap-x-6">
                <span className="text-gold/40">·</span>
                {n}
              </span>
            ))}
          </Reveal>
        </div>
      </section>

      {/* SOCIAL / CTA */}
      <section className="relative px-6 py-28 lg:px-10 lg:py-44">
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/10 blur-[140px]"
          aria-hidden
        />
        <Reveal className="relative mx-auto max-w-3xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.4em] text-gold">
            {t.social.eyebrow}
          </p>
          <h2 className="mt-6 font-display text-[clamp(2.75rem,6vw,5.5rem)] font-semibold leading-[1.02] text-navy-deep">
            {t.social.title1}{" "}
            <span className="text-gradient-gold">{t.social.title2}</span>
          </h2>
          <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-navy-deep/65">
            {t.social.leadPre}{" "}
            <span className="text-gold">#KAKUChallenge</span>
            {t.social.leadPost}
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-5">
            <a
              href="#menu"
              className="rounded-full bg-gold px-10 py-4 text-sm font-medium tracking-[0.08em] text-navy-deep transition-transform hover:scale-[1.03]"
            >
              {t.social.ctaBuild}
            </a>
            <a
              href="#top"
              className="rounded-full border border-gold/40 px-10 py-4 text-sm font-medium tracking-[0.08em] text-gold transition-colors hover:bg-gold/10"
            >
              {t.social.ctaTop}
            </a>
          </div>
        </Reveal>
      </section>

      {/* RESERVE CTA */}
      <section
        id="reserve"
        className="border-y border-gold/15 bg-cream px-6 py-28 lg:px-10 lg:py-36"
      >
        <Reveal className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.4em] text-gold">
            {t.reserveCta.eyebrow}
          </p>
          <h2 className="mt-6 font-display text-[clamp(2.5rem,5vw,4.5rem)] font-semibold leading-[1.05] text-navy-deep">
            {t.reserveCta.title}
          </h2>
          <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-navy-deep/65">
            {t.reserveCta.lead}
          </p>
          <div className="mt-10">
            <Link
              href="/reserve"
              className="inline-block rounded-full bg-gold px-10 py-4 text-sm font-medium tracking-[0.08em] text-navy-deep transition-transform hover:scale-[1.03]"
            >
              {t.reserveCta.cta}
            </Link>
          </div>
          <p className="mt-6 text-xs tracking-[0.14em] text-navy-deep/40">
            {t.reserveCta.note}
          </p>
        </Reveal>
      </section>

      {/* NEWSLETTER */}
      <section className="relative px-6 py-28 lg:px-10 lg:py-36">
        <div
          id="newsletter"
          className="pointer-events-none absolute -top-24"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/10 blur-[140px]"
          aria-hidden
        />
        <Reveal className="relative mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.4em] text-gold">
            {t.newsletter.eyebrow}
          </p>
          <h2 className="mt-6 font-display text-[clamp(2.25rem,5vw,4rem)] font-semibold leading-[1.05] text-navy-deep">
            {t.newsletter.title}
          </h2>
          <p className="mx-auto mt-6 mb-10 max-w-lg text-lg leading-relaxed text-navy-deep/65">
            {t.newsletter.lead}
          </p>
          <NewsletterForm />
        </Reveal>
      </section>

      <Footer />
    </main>
  );
}
