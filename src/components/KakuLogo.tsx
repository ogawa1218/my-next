type Props = {
  className?: string;
  charClassName?: string;
};

export default function KakuLogo({
  className = "h-10 w-10 rounded-md border",
  charClassName = "text-xl",
}: Props) {
  return (
    <span
      aria-label="KAKU"
      className={`relative inline-flex items-center justify-center border-gold text-gold ${className}`}
    >
      <span className="pointer-events-none absolute right-[14%] top-[14%] h-[6%] w-[6%] rounded-full bg-gold" aria-hidden />
      <span
        aria-hidden
        className={`font-display font-semibold leading-none ${charClassName}`}
      >
        角
      </span>
    </span>
  );
}
