"use client";

import Reveal from "@/components/Reveal";
import { useI18n } from "@/i18n/LanguageProvider";

export default function Roadmap() {
  const { t } = useI18n();
  const r = t.roadmap;

  return (
    <section
      id="roadmap"
      className="px-6 py-28 lg:px-10 lg:py-40"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.4em] text-gold">
            {r.eyebrow}
          </p>
          <h2 className="mt-6 font-display text-[clamp(2.5rem,5vw,4.5rem)] font-semibold leading-[1.05] text-navy-deep">
            {r.title}
          </h2>
          <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-navy-deep/70">
            {r.lead}
          </p>
        </Reveal>

        <div className="relative mt-16">
          <div
            className="pointer-events-none absolute left-0 right-0 top-12 hidden h-px bg-gold/25 lg:block"
            aria-hidden
          />
          <div className="grid gap-6 lg:grid-cols-4">
            {r.milestones.map((m, i) => (
              <Reveal
                key={m.k}
                delay={i * 90}
                className="relative rounded-2xl border border-gold/20 bg-cream-dim p-7"
              >
                <span
                  className="absolute -top-3 left-7 hidden h-6 w-6 items-center justify-center rounded-full border-2 border-gold bg-cream lg:flex"
                  aria-hidden
                >
                  <span className="h-2 w-2 rounded-full bg-gold" />
                </span>
                <p className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                  {m.k}
                </p>
                <h3 className="mt-4 font-display text-2xl font-semibold leading-tight text-navy-deep">
                  {m.t}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-navy-deep/65">
                  {m.d}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
