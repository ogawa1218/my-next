"use client";

import { useI18n } from "@/i18n/LanguageProvider";

export default function StoreShowcase() {
  const { t } = useI18n();
  const stores = t.stores.slice(0, 4);

  return (
    <div className="space-y-3">
      <div className="grid grid-cols-2 gap-3">
        {stores.map((s) => (
          <StoreCard
            key={s.id}
            city={s.city}
            venue={s.venue}
            badge={t.hero.pilotBadge}
          />
        ))}
      </div>
      <TeamRibbon
        eyebrow={t.hero.teamEyebrow}
        copy={t.hero.teamCopy}
      />
    </div>
  );
}

function StoreCard({
  city,
  venue,
  badge,
}: {
  city: string;
  venue: string;
  badge: string;
}) {
  return (
    <div className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-gold/20 bg-navy-deep">
      <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/50 to-transparent" />

      <div
        className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gold/15 blur-2xl"
        aria-hidden
      />

      {/* Mock showcase row at the top — 3 KAKU cubes behind glass */}
      <div className="absolute inset-x-4 top-5 flex h-1/3 items-center justify-center gap-2 rounded-md border border-gold/25 bg-cream/5 backdrop-blur-[1px]">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="h-4 w-4 rotate-45 rounded-sm bg-gold/70 shadow-[0_0_10px_rgba(216,189,118,0.45)] transition-transform group-hover:rotate-[60deg]"
            aria-hidden
          />
        ))}
      </div>

      <span className="absolute right-3 top-3 font-display text-[0.55rem] tracking-[0.35em] text-gold/80">
        KAKU
      </span>

      <div className="absolute inset-x-0 bottom-0 p-5">
        <p className="text-[0.6rem] font-medium uppercase tracking-[0.3em] text-gold">
          {badge}
        </p>
        <h3 className="mt-2 font-display text-xl font-semibold leading-tight text-cream sm:text-2xl">
          {city}
        </h3>
        <p className="mt-1 text-xs text-cream/55">{venue}</p>
      </div>
    </div>
  );
}

function TeamRibbon({ eyebrow, copy }: { eyebrow: string; copy: string }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-gold/20 bg-navy-deep px-5 py-4">
      <div
        className="pointer-events-none absolute -right-8 top-1/2 h-24 w-24 -translate-y-1/2 rounded-full bg-gold/15 blur-2xl"
        aria-hidden
      />
      <div className="relative flex items-center gap-4">
        <div className="flex shrink-0 -space-x-2">
          {[0, 1, 2].map((i) => (
            <Silhouette key={i} />
          ))}
        </div>
        <div className="min-w-0">
          <p className="text-[0.6rem] font-medium uppercase tracking-[0.3em] text-gold">
            {eyebrow}
          </p>
          <p className="mt-1 text-sm leading-snug text-cream/85">{copy}</p>
        </div>
      </div>
    </div>
  );
}

function Silhouette() {
  return (
    <svg
      viewBox="0 0 32 40"
      width="28"
      height="36"
      aria-hidden
      className="rounded-full border border-gold/30 bg-navy-deep p-1"
    >
      <circle cx="16" cy="11" r="6" className="fill-cream/65" />
      <path
        d="M3 40 Q3 22 16 22 Q29 22 29 40 Z"
        className="fill-cream/65"
      />
    </svg>
  );
}
