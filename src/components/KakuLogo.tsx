type Props = {
  className?: string;
  strokeWidth?: number;
};

export default function KakuLogo({
  className = "h-10 w-10",
  strokeWidth = 2.2,
}: Props) {
  return (
    <svg
      viewBox="0 0 120 120"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinejoin="round"
      strokeLinecap="round"
      role="img"
      aria-label="KAKU"
      className={`text-gold ${className}`}
    >
      <path d="M60 20 L100 40 L100 80 L60 100 L20 80 L20 40 Z" />
      <path d="M60 60 L100 40 M60 60 L20 40 M60 60 L60 100" />
      <g strokeWidth={strokeWidth * 0.55} opacity="0.9">
        <path d="M30 35 L70 55 M40 30 L80 50 M50 25 L90 45" />
        <path d="M70 25 L30 45 M80 30 L40 50 M90 35 L50 55" />
      </g>
    </svg>
  );
}
