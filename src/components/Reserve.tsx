"use client";

import Link from "next/link";
import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import Footer from "@/components/Footer";
import NewsletterForm from "@/components/NewsletterForm";
import { useI18n } from "@/i18n/LanguageProvider";

export default function Reserve() {
  const { t } = useI18n();
  const r = t.reservePage;

  return (
    <main id="top" className="relative overflow-hidden">
      <Nav />

      {/* HERO */}
      <section className="relative flex min-h-[88vh] items-center px-6 pt-32 pb-24 lg:px-10">
        <div
          className="pointer-events-none absolute left-1/2 top-1/3 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-gold/10 blur-[130px]"
          aria-hidden
        />
        <div className="relative mx-auto max-w-3xl text-center">
          <p className="animate-fade text-xs font-medium uppercase tracking-[0.4em] text-gold">
            {r.eyebrow}
          </p>
          <h1 className="mt-8 font-display text-[clamp(3rem,8vw,6rem)] font-semibold leading-[0.98] text-cream">
            {r.title}
          </h1>
          <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-cream/70">
            {r.lead}
          </p>

          <div className="mt-12 flex flex-col items-center gap-4">
            <button
              type="button"
              disabled
              aria-disabled="true"
              className="cursor-not-allowed rounded-full border border-gold/40 bg-gold/15 px-10 py-4 text-sm font-medium tracking-[0.08em] text-gold/80"
            >
              {r.ctaPrimary}
            </button>
            <p className="text-xs tracking-[0.12em] text-cream/40">
              {r.ctaPrimaryNote}
            </p>
            <a
              href="#reserve-newsletter"
              className="mt-2 rounded-full bg-gold px-10 py-4 text-sm font-medium tracking-[0.08em] text-navy-deep transition-transform hover:scale-[1.03]"
            >
              {r.ctaSecondary}
            </a>
          </div>
        </div>
      </section>

      {/* STEPS */}
      <section className="border-y border-gold/15 bg-navy-deep px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <h2 className="font-display text-[clamp(2rem,4vw,3.25rem)] font-semibold text-cream">
              {r.stepsTitle}
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-gold/15 bg-gold/15 md:grid-cols-3">
            {r.steps.map((s, i) => (
              <Reveal
                key={s.k}
                delay={i * 90}
                className="bg-navy p-10"
              >
                <span className="font-display text-3xl text-gold/40">
                  {s.k}
                </span>
                <h3 className="mt-6 font-display text-2xl font-semibold text-cream">
                  {s.t}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-cream/55">
                  {s.d}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <h2 className="font-display text-[clamp(2rem,4vw,3.25rem)] font-semibold text-cream">
              {r.benefitsTitle}
            </h2>
            <ul className="mt-10 space-y-4">
              {r.benefits.map((b) => (
                <li key={b} className="flex gap-4 text-lg text-cream/70">
                  <span className="mt-3 h-1.5 w-1.5 flex-none rounded-full bg-gold" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="relative border-t border-gold/15 bg-navy-deep px-6 py-24 lg:px-10 lg:py-32">
        <div
          id="reserve-newsletter"
          className="pointer-events-none absolute -top-24"
          aria-hidden
        />
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.4em] text-gold">
            {t.newsletter.eyebrow}
          </p>
          <h2 className="mt-6 font-display text-[clamp(2rem,4vw,3.25rem)] font-semibold text-cream">
            {t.newsletter.title}
          </h2>
          <p className="mx-auto mt-6 mb-10 max-w-lg text-lg leading-relaxed text-cream/65">
            {t.newsletter.lead}
          </p>
          <NewsletterForm />
          <div className="mt-12">
            <Link
              href="/"
              className="text-sm tracking-[0.1em] text-cream/60 underline-offset-8 transition-colors hover:text-gold hover:underline"
            >
              {r.backHome}
            </Link>
          </div>
        </Reveal>
      </section>

      <Footer />
    </main>
  );
}
