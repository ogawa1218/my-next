"use client";

import { useMemo } from "react";
import { useInView, prefersReducedMotion } from "@/hooks/useInView";

type Props = {
  text: string;
  className?: string;
  stepMs?: number;
  durationMs?: number;
};

// Reveals each character left-to-right when the element first scrolls into view.
// The full text is exposed to screen readers via aria-label so character-level
// spans don't pollute accessibility.
export default function RevealText({
  text,
  className,
  stepMs = 55,
  durationMs = 520,
}: Props) {
  const { ref, inView } = useInView<HTMLSpanElement>({ threshold: 0.25, once: true });
  const reduce = useMemo(() => prefersReducedMotion(), []);
  const visible = inView || reduce;

  return (
    <span ref={ref} className={className} aria-label={text}>
      {Array.from(text).map((ch, i) => (
        <span
          key={i}
          aria-hidden
          className="inline-block will-change-transform"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(0.45em)",
            transition: `opacity ${durationMs}ms cubic-bezier(0.16, 1, 0.3, 1) ${i * stepMs}ms, transform ${durationMs}ms cubic-bezier(0.16, 1, 0.3, 1) ${i * stepMs}ms`,
          }}
        >
          {ch === " " ? " " : ch}
        </span>
      ))}
    </span>
  );
}
