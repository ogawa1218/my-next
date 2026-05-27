"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

// Wraps text in the gold-shimmer gradient and pauses the animation while
// the element is off-screen. Saves GPU/battery when visitors scroll past
// the hero, while still re-glinting the moment it scrolls back into view.
export default function ShimmerText({ children, className }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          setPaused(!entry.isIntersecting);
        }
      },
      { threshold: 0 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <span
      ref={ref}
      className={`text-gradient-gold-shimmer ${className ?? ""}`}
      style={paused ? { animationPlayState: "paused" } : undefined}
    >
      {children}
    </span>
  );
}
