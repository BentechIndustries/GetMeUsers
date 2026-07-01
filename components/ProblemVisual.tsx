export function ProblemVisual() {
  return (
    <div
      className="flex items-center justify-center"
      aria-hidden
    >
      <svg
        viewBox="0 0 320 360"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-auto w-full max-w-[220px] sm:max-w-[260px] md:max-w-[280px]"
      >
        {/* Ground shadow */}
        <ellipse cx="155" cy="318" rx="72" ry="8" fill="#cbd5e1" opacity="0.5" />

        {/* Phone body */}
        <rect
          x="88"
          y="48"
          width="136"
          height="248"
          rx="22"
          fill="#f8fafc"
          stroke="#cbd5e1"
          strokeWidth="2"
        />
        <rect x="98" y="58" width="116" height="228" rx="14" fill="#ffffff" />

        {/* Notch */}
        <rect x="134" y="58" width="44" height="10" rx="5" fill="#e2e8f0" />

        {/* Flat analytics on screen */}
        <text
          x="108"
          y="92"
          fill="#94a3b8"
          fontSize="9"
          fontFamily="system-ui, sans-serif"
          fontWeight="600"
        >
          Signups
        </text>
        <line
          x1="108"
          y1="248"
          x2="204"
          y2="248"
          stroke="#e2e8f0"
          strokeWidth="1"
        />
        <line
          x1="108"
          y1="248"
          x2="204"
          y2="248"
          stroke="#94a3b8"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <text
          x="156"
          y="268"
          fill="#94a3b8"
          fontSize="11"
          fontFamily="system-ui, sans-serif"
          textAnchor="middle"
        >
          0
        </text>

        {/* Tumbleweed trail wisps */}
        <path
          d="M218 210 C228 205, 238 200, 248 198"
          stroke="#c4a574"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.35"
        />
        <path
          d="M222 225 C234 222, 246 218, 258 216"
          stroke="#c4a574"
          strokeWidth="1.2"
          strokeLinecap="round"
          opacity="0.25"
        />
        <path
          d="M220 240 C232 238, 244 234, 254 232"
          stroke="#c4a574"
          strokeWidth="1"
          strokeLinecap="round"
          opacity="0.2"
        />

        {/* Tumbleweed */}
        <g transform="translate(248, 218)">
          <circle cx="0" cy="0" r="38" fill="#e8d5b0" opacity="0.25" />
          <TumbleweedBranch d="M0 0 C-8 -28, -32 -18, -36 2 C-38 18, -22 32, 0 28" />
          <TumbleweedBranch d="M0 0 C12 -26, 34 -14, 38 6 C40 22, 26 34, 4 30" />
          <TumbleweedBranch d="M0 0 C-26 -10, -34 12, -18 34 C-6 42, 14 36, 22 20" />
          <TumbleweedBranch d="M0 0 C22 -8, 36 14, 24 36 C14 44, -8 38, -16 22" />
          <TumbleweedBranch d="M0 0 C-18 -22, 4 -38, 26 -28 C38 -20, 36 0, 20 14" />
          <TumbleweedBranch d="M0 0 C-24 4, -30 28, -10 38 C4 44, 22 32, 18 12" />
          <TumbleweedBranch d="M0 0 C16 18, 6 40, -14 36 C-30 32, -32 10, -16 -4" />
          <TumbleweedBranch d="M0 0 C28 2, 40 20, 28 38 C18 48, -2 40, -6 22" />
          <circle cx="0" cy="0" r="10" fill="#c4a574" opacity="0.5" />
        </g>

        {/* Small dust puffs */}
        <circle cx="210" cy="202" r="2" fill="#c4a574" opacity="0.3" />
        <circle cx="228" cy="196" r="1.5" fill="#c4a574" opacity="0.25" />
        <circle cx="236" cy="208" r="1.5" fill="#c4a574" opacity="0.2" />
      </svg>
    </div>
  );
}

function TumbleweedBranch({ d }: { d: string }) {
  return (
    <path
      d={d}
      stroke="#a89068"
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
    />
  );
}
