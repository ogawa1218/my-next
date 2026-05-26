"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { useI18n } from "@/i18n/LanguageProvider";

// When the manga is delivered, drop the rendered panels into
// public/manga/01.jpg ... 06.jpg. Then flip the constant below to true
// and the placeholders are replaced everywhere automatically.
const MANGA_READY = false;

export default function Story() {
  const { t } = useI18n();
  const s = t.story;

  return (
    <section
      id="story"
      className="border-y border-gold/15 bg-cream-dim px-6 py-28 lg:px-10 lg:py-40"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.4em] text-gold">
            {s.eyebrow}
          </p>
          <h2 className="mt-6 font-display text-[clamp(2.5rem,5vw,4.5rem)] font-semibold leading-[1.05] text-navy-deep">
            {s.title}
          </h2>
          <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-navy-deep/70">
            {s.lead}
          </p>
        </Reveal>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {s.panels.map((p, i) => (
            <Reveal key={p.k} delay={i * 70}>
              <Panel k={p.k} title={p.t} description={p.d} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14 text-center">
          <Link
            href="/reserve"
            className="inline-flex items-center gap-2 rounded-full border border-gold bg-gold px-8 py-3 text-sm font-semibold tracking-[0.08em] text-navy-deep transition-transform hover:-translate-y-0.5"
          >
            {s.cta}
          </Link>
          <p className="mt-4 text-xs tracking-[0.18em] text-navy-deep/55">
            {s.ctaNote}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Panel({
  k,
  title,
  description,
}: {
  k: string;
  title: string;
  description: string;
}) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-gold/25 bg-navy-deep shadow-[0_24px_60px_rgba(6,21,42,0.12)]">
      <div className="relative aspect-[4/3] overflow-hidden bg-navy-deep">
        {MANGA_READY ? (
          <Image
            src={`/manga/${k}.jpg`}
            alt={title}
            fill
            sizes="(min-width: 1024px) 26rem, (min-width: 640px) 45vw, 90vw"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />
        ) : (
          <PanelPlaceholder k={k} title={title} />
        )}
      </div>

      <div className="border-t border-gold/15 px-5 py-4">
        <p className="font-display text-[0.65rem] tracking-[0.3em] text-gold/80">
          PANEL {k}
        </p>
        <h3 className="mt-2 font-display text-xl font-semibold text-cream">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-cream/70">
          {description}
        </p>
      </div>
    </article>
  );
}

function PanelPlaceholder({ k, title }: { k: string; title: string }) {
  return (
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-gradient-to-br from-navy-deep via-navy-deep to-[#0a1d3a]" />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_rgba(216,189,118,0.22),_transparent_55%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-3 rounded-md border border-gold/15"
        aria-hidden
      />

      <div className="absolute left-5 top-5 flex items-center gap-2">
        <span className="h-2 w-2 rotate-45 bg-gold/70" aria-hidden />
        <span className="font-display text-[0.6rem] tracking-[0.4em] text-gold/70">
          {k}
        </span>
      </div>

      <span className="absolute right-5 top-5 font-display text-[0.55rem] tracking-[0.4em] text-gold/40">
        KAKU
      </span>

      <p className="absolute inset-x-5 bottom-5 font-display text-2xl font-semibold leading-tight text-cream/90">
        {title}
      </p>
    </div>
  );
}
