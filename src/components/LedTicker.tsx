type Props = { text: string };

export default function LedTicker({ text }: Props) {
  return (
    <div
      className="relative overflow-hidden border-y border-gold/25 bg-navy-deep py-6 lg:py-8"
      role="marquee"
      aria-label={text}
    >
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-navy-deep to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-navy-deep to-transparent"
        aria-hidden
      />
      <div className="flex w-max animate-led-scroll whitespace-nowrap will-change-transform">
        {[0, 1].map((i) => (
          <span
            key={i}
            aria-hidden={i === 1 ? true : undefined}
            className="led-text flex items-center gap-10 px-10 font-display text-2xl font-semibold tracking-[0.18em] text-gold sm:text-3xl md:text-4xl lg:text-5xl"
          >
            <span>{text}</span>
            <span className="text-gold/40">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
