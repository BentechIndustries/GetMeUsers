export function ProblemVisual() {
  return (
    <div className="flex items-center justify-center" aria-hidden>
      <svg
        viewBox="0 0 320 360"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-auto w-full max-w-[220px] sm:max-w-[260px] md:max-w-[280px]"
      >
        <defs>
          {/* Clip so trails/dust only show inside the screen glass */}
          <clipPath id="screenClip">
            <rect x="86" y="56" width="112" height="228" rx="14" />
          </clipPath>
        </defs>

        {/* Ground shadow */}
        <ellipse cx="150" cy="322" rx="70" ry="7" fill="#17130d" opacity="0.08" />

        {/* Phone body */}
        <rect
          x="76"
          y="46"
          width="132"
          height="248"
          rx="22"
          fill="#faf7f0"
          stroke="#c3bbab"
          strokeWidth="2"
        />
        <rect x="86" y="56" width="112" height="228" rx="14" fill="#ffffff" />

        {/* Notch */}
        <rect x="120" y="56" width="44" height="9" rx="4.5" fill="#e0d8c7" />

        {/* Screen label */}
        <text
          x="98"
          y="92"
          fill="#8a8272"
          fontSize="9"
          fontFamily="system-ui, sans-serif"
          fontWeight="600"
          letterSpacing="0.04em"
        >
          Signups
        </text>

        {/* Flatline baseline */}
        <line x1="98" y1="238" x2="186" y2="238" stroke="#e6ded0" strokeWidth="1" />
        <line
          x1="98"
          y1="238"
          x2="186"
          y2="238"
          stroke="#9a9284"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <text
          x="142"
          y="262"
          fill="#8a8272"
          fontSize="12"
          fontFamily="system-ui, sans-serif"
          fontWeight="600"
          textAnchor="middle"
        >
          0
        </text>

        {/* Emergence trail: motion INSIDE the screen leading to the exit point */}
        <g clipPath="url(#screenClip)" stroke="#a89068" strokeLinecap="round" fill="none">
          <path d="M120 150 C150 154, 176 158, 196 160" strokeWidth="1.6" opacity="0.4" />
          <path d="M126 176 C154 176, 178 176, 198 176" strokeWidth="1.4" opacity="0.32" />
          <path d="M120 202 C150 200, 176 196, 198 192" strokeWidth="1.2" opacity="0.24" />
          {/* debris flicked back inside the screen */}
          <circle cx="150" cy="140" r="1.8" fill="#a89068" stroke="none" opacity="0.4" />
          <circle cx="168" cy="210" r="1.5" fill="#a89068" stroke="none" opacity="0.32" />
          <circle cx="138" cy="168" r="1.3" fill="#a89068" stroke="none" opacity="0.28" />
        </g>

        {/* Tumbleweed straddling the phone's right edge (emerging out of the screen) */}
        <Tumbleweed cx={200} cy={176} />

        {/* Dust kicked up just outside the exit point */}
        <circle cx="242" cy="132" r="2" fill="#a89068" opacity="0.32" />
        <circle cx="252" cy="176" r="1.6" fill="#a89068" opacity="0.26" />
        <circle cx="244" cy="222" r="1.6" fill="#a89068" opacity="0.24" />
      </svg>
    </div>
  );
}

function Tumbleweed({ cx, cy }: { cx: number; cy: number }) {
  return (
    <g transform={`translate(${cx}, ${cy})`}>
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
  );
}

function TumbleweedBranch({ d }: { d: string }) {
  return (
    <path d={d} stroke="#a89068" strokeWidth="2" strokeLinecap="round" fill="none" />
  );
}
