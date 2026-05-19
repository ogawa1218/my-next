type CubeTone = {
  top: string;
  left: string;
  right: string;
};

const tones: CubeTone[] = [
  { top: "#F4A07A", left: "#D87A52", right: "#E08C63" }, // Salmon Classic
  { top: "#E5604F", left: "#B83F33", right: "#CC4F40" }, // Spicy Tuna
  { top: "#D8A24B", left: "#A9762E", right: "#C08C3C" }, // Teriyaki Chicken
  { top: "#C8B68C", left: "#8E7C53", right: "#A89668" }, // Miso Mushroom
  { top: "#E8D7A8", left: "#BFA86A", right: "#D2BD82" }, // Inari Bomb
  { top: "#F2B36B", left: "#C98A3F", right: "#DD9D52" }, // Tropical Shrimp
];

function Cube({ x, y, tone }: { x: number; y: number; tone: CubeTone }) {
  const s = 86; // edge
  const h = 30; // iso depth
  return (
    <g transform={`translate(${x} ${y})`}>
      {/* top */}
      <polygon
        points={`0,${h} ${s / 2},0 ${s},${h} ${s / 2},${h * 2}`}
        fill={tone.top}
      />
      {/* left */}
      <polygon
        points={`0,${h} ${s / 2},${h * 2} ${s / 2},${h * 2 + s} 0,${h + s}`}
        fill={tone.left}
      />
      {/* right */}
      <polygon
        points={`${s},${h} ${s / 2},${h * 2} ${s / 2},${h * 2 + s} ${s},${h + s}`}
        fill={tone.right}
      />
      {/* rice speckle hint */}
      <polygon
        points={`0,${h} ${s / 2},0 ${s},${h} ${s / 2},${h * 2}`}
        fill="url(#sheen)"
        opacity="0.35"
      />
    </g>
  );
}

export default function KakuBox({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 680 760"
      className={className}
      role="img"
      aria-label="A KAKU jewellery box containing six cube sushi pieces, viewed from above"
    >
      <defs>
        <linearGradient id="boxBg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0E2645" />
          <stop offset="100%" stopColor="#06152A" />
        </linearGradient>
        <linearGradient id="sheen" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="goldFrame" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#E6CF8A" />
          <stop offset="50%" stopColor="#C8A24B" />
          <stop offset="100%" stopColor="#9C7A2E" />
        </linearGradient>
      </defs>

      {/* outer gold frame */}
      <rect
        x="20"
        y="20"
        width="640"
        height="720"
        rx="26"
        fill="url(#goldFrame)"
      />
      {/* inner velvet */}
      <rect
        x="34"
        y="34"
        width="612"
        height="692"
        rx="18"
        fill="url(#boxBg)"
      />
      {/* inset hairline */}
      <rect
        x="56"
        y="56"
        width="568"
        height="648"
        rx="12"
        fill="none"
        stroke="#C8A24B"
        strokeOpacity="0.4"
        strokeWidth="1.5"
      />

      {/* 2 x 3 grid of cubes */}
      {[0, 1, 2].map((row) =>
        [0, 1].map((col) => {
          const i = row * 2 + col;
          return (
            <Cube
              key={i}
              x={120 + col * 230}
              y={110 + row * 196}
              tone={tones[i]}
            />
          );
        }),
      )}

      {/* brand mark */}
      <text
        x="340"
        y="50"
        textAnchor="middle"
        fill="#C8A24B"
        fontSize="22"
        letterSpacing="14"
        fontFamily="serif"
      >
        KAKU
      </text>
    </svg>
  );
}
