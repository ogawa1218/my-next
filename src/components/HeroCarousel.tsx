"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useI18n } from "@/i18n/LanguageProvider";

const ROTATE_MS = 3800;
const FADE_MS = 900;

export default function HeroCarousel() {
  const { t } = useI18n();
  const items = t.menu.items;
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduced = useRef(false);

  useEffect(() => {
    reduced.current =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  useEffect(() => {
    if (paused || reduced.current) return;
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % items.length);
    }, ROTATE_MS);
    return () => window.clearInterval(id);
  }, [paused, items.length]);

  const current = items[active];
  const num = String(active + 1).padStart(2, "0");

  return (
    <div
      className="relative mx-auto max-w-md"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div
        className="pointer-events-none absolute -inset-8 rounded-[2.25rem] bg-gold/10 blur-3xl"
        aria-hidden
      />

      <div
        className="relative overflow-hidden rounded-[1.75rem] border border-gold/30 bg-cream shadow-[0_40px_90px_rgba(6,21,42,0.18)]"
        aria-roledescription="carousel"
        aria-live="polite"
      >
        <div className="relative aspect-[4/5] w-full">
          {items.map((m, i) => (
            <Image
              key={m.slug}
              src={`/products/${m.slug}.png`}
              alt={m.name}
              fill
              priority={i === 0}
              sizes="(min-width: 1024px) 28rem, (min-width: 640px) 70vw, 90vw"
              className="object-cover transition-opacity ease-out"
              style={{
                opacity: i === active ? 1 : 0,
                transitionDuration: `${FADE_MS}ms`,
              }}
            />
          ))}

          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-cream via-cream/60 to-transparent"
            aria-hidden
          />

          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
            <p className="font-display text-xs tracking-[0.3em] text-gold">
              {num}
            </p>
            <h3
              key={`name-${active}`}
              className="mt-2 animate-fade font-display text-2xl font-semibold leading-tight text-navy-deep sm:text-3xl"
            >
              {current.name}
            </h3>
            <p
              key={`note-${active}`}
              className="mt-1 animate-fade text-sm text-navy-deep/70"
            >
              {current.note}
            </p>
          </div>
        </div>

        <div
          className="pointer-events-none absolute inset-0 rounded-[1.75rem] ring-1 ring-inset ring-cream/10"
          aria-hidden
        />
      </div>

      <div className="mt-6 flex justify-center gap-2.5">
        {items.map((m, i) => (
          <button
            key={m.slug}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`${m.name} を表示`}
            aria-current={i === active}
            className={`h-1.5 rounded-full transition-all ${
              i === active ? "w-8 bg-gold" : "w-3 bg-navy-deep/20 hover:bg-navy-deep/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
