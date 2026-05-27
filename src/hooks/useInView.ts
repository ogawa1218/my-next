"use client";

import { useEffect, useRef, useState, type RefObject } from "react";

type Options = {
  threshold?: number;
  once?: boolean;
  rootMargin?: string;
};

// Observe whether the referenced element is currently inside the viewport.
// Set `once` to stop observing as soon as the element first enters view.
export function useInView<T extends Element>(
  options: Options = {},
): { ref: RefObject<T | null>; inView: boolean } {
  const { threshold = 0, once = false, rootMargin } = options;
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          setInView(entry.isIntersecting);
          if (entry.isIntersecting && once) {
            io.disconnect();
            return;
          }
        }
      },
      { threshold, rootMargin },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold, once, rootMargin]);

  return { ref, inView };
}

export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
