"use client";

import type { ReactNode } from "react";
import { useInView } from "@/hooks/useInView";

type Props = {
  children: ReactNode;
  className?: string;
};

// Wraps text in the gold-shimmer gradient and pauses the animation while
// the element is off-screen. Saves GPU/battery when visitors scroll past
// the hero, while still re-glinting the moment it scrolls back into view.
export default function ShimmerText({ children, className }: Props) {
  const { ref, inView } = useInView<HTMLSpanElement>();

  return (
    <span
      ref={ref}
      className={`text-gradient-gold-shimmer ${className ?? ""}`}
      style={inView ? undefined : { animationPlayState: "paused" }}
    >
      {children}
    </span>
  );
}
