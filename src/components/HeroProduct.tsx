"use client";

import { useState } from "react";
import KakuBox from "@/components/KakuBox";

// Drop a real product photo at public/hero/showcase.jpg to replace the
// illustrated showcase. Until then we fall back to the KAKU box SVG so
// the hero is never broken.
const PHOTO_SRC = "/hero/showcase.jpg";

export default function HeroProduct() {
  const [usePhoto, setUsePhoto] = useState(true);

  return (
    <div className="relative mx-auto max-w-md">
      <div
        className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-gold/10 blur-2xl"
        aria-hidden
      />
      <div className="relative overflow-hidden rounded-[1.75rem] border border-gold/30 shadow-[0_40px_90px_rgba(0,0,0,0.6)]">
        {usePhoto ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={PHOTO_SRC}
            alt="KAKU の五穀米キューブ押し寿司をショーケースに並べた様子"
            className="block aspect-[4/5] w-full object-cover"
            onError={() => setUsePhoto(false)}
          />
        ) : (
          <div className="animate-float bg-navy-deep">
            <KakuBox className="h-auto w-full" />
          </div>
        )}
        <div
          className="pointer-events-none absolute inset-0 rounded-[1.75rem] ring-1 ring-inset ring-cream/10"
          aria-hidden
        />
      </div>
    </div>
  );
}
