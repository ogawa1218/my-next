"use client";

import { useState } from "react";
import KakuLogo from "@/components/KakuLogo";

type Props = {
  k: string;
  title: string;
  description: string;
};

// Click reveal: a soft gold halo blooms and a KAKU cube emerges in the
// top-right of the card. Toggle to close. Designed to feel like opening
// a small jewellery box — luxurious and quiet.
export default function PromiseCard({ k, title, description }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setOpen((v) => !v)}
      aria-expanded={open}
      aria-label={title}
      className="group relative overflow-hidden bg-cream-dim p-10 text-left transition-colors hover:bg-cream focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
    >
      <p className="font-display text-xs tracking-[0.3em] text-gold">{k}</p>
      <p className="mt-3 font-display text-2xl font-semibold text-navy-deep">
        {title}
      </p>
      <p className="mt-2 max-w-[14em] text-sm leading-snug text-navy-deep/55">
        {description}
      </p>

      <span
        aria-hidden
        className={`absolute bottom-4 right-5 font-display text-[0.6rem] tracking-[0.4em] transition-opacity duration-300 ${
          open ? "opacity-0" : "opacity-60 group-hover:opacity-100 text-gold"
        }`}
      >
        + OPEN
      </span>

      {/* Reveal layer: gold halo + KAKU cube blooms on click */}
      <div
        aria-hidden
        className={`pointer-events-none absolute right-6 top-6 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          open
            ? "translate-y-0 scale-100 opacity-100"
            : "translate-y-3 scale-50 opacity-0"
        }`}
      >
        <div className="relative">
          <div
            className={`absolute -inset-12 rounded-full bg-gold/35 blur-3xl ${
              open ? "animate-pulse" : ""
            }`}
          />
          <div
            className="absolute -inset-6 rounded-full bg-gold/20 blur-xl"
            aria-hidden
          />
          <KakuLogo
            strokeWidth={2.6}
            className="relative h-16 w-16 drop-shadow-[0_0_22px_rgba(216,189,118,0.7)]"
          />
        </div>
      </div>
    </button>
  );
}
