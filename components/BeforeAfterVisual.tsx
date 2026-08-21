export function BeforeAfterVisual() {
  return (
    <div className="flex items-center justify-center" aria-hidden>
      <svg
        viewBox="0 0 340 220"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-auto w-full max-w-[300px] sm:max-w-[340px]"
      >
        {/* Before panel */}
        <rect
          x="16"
          y="28"
          width="140"
          height="164"
          fill="#faf7f0"
          stroke="#c3bbab"
          strokeWidth="1.5"
        />
        <text
          x="86"
          y="52"
          fill="#8a8272"
          fontSize="9"
          fontFamily="ui-monospace, monospace"
          textAnchor="middle"
          fontWeight="700"
          letterSpacing="0.14em"
        >
          BEFORE
        </text>

        {/* Empty inbox */}
        <rect x="36" y="64" width="100" height="52" fill="#ffffff" stroke="#e0d8c7" strokeWidth="1.5" />
        <rect x="48" y="76" width="48" height="6" fill="#e0d8c7" />
        <rect x="48" y="88" width="72" height="6" fill="#efe8da" />
        <rect x="48" y="100" width="56" height="6" fill="#efe8da" />
        <text
          x="86"
          y="134"
          fill="#8a8272"
          fontSize="8"
          fontFamily="system-ui, sans-serif"
          textAnchor="middle"
        >
          Empty inbox
        </text>

        {/* Flat chart */}
        <line
          x1="44"
          y1="168"
          x2="128"
          y2="168"
          stroke="#8a8272"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="86" cy="156" r="10" fill="#f4f0e8" stroke="#c3bbab" strokeWidth="1.5" />
        <text
          x="86"
          y="160"
          fill="#8a8272"
          fontSize="10"
          fontFamily="system-ui, sans-serif"
          textAnchor="middle"
        >
          1
        </text>

        {/* Arrow divider */}
        <path
          d="M162 110 L178 110 M173 105 L178 110 L173 115"
          stroke="#17130d"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* After panel */}
        <rect
          x="184"
          y="28"
          width="140"
          height="164"
          fill="#ffffff"
          stroke="#17130d"
          strokeWidth="1.5"
        />
        <text
          x="254"
          y="52"
          fill="#2563eb"
          fontSize="9"
          fontFamily="ui-monospace, monospace"
          textAnchor="middle"
          fontWeight="700"
          letterSpacing="0.14em"
        >
          AFTER
        </text>

        {/* Growing chart */}
        <rect x="204" y="64" width="100" height="52" fill="#faf7f0" stroke="#e0d8c7" strokeWidth="1.5" />
        {[18, 26, 22, 34, 30, 42, 48].map((h, i) => {
          const isPeak = i >= 5;
          return (
            <rect
              key={i}
              x={212 + i * 12}
              y={108 - h}
              width="8"
              height={h}
              fill={isPeak ? "#2563eb" : "#17130d"}
              opacity={isPeak ? 1 : 0.2 + (i / 6) * 0.5}
            />
          );
        })}

        {/* Channel nodes */}
        <circle cx="218" cy="138" r="7" fill="none" stroke="#17130d" strokeWidth="1.25" />
        <circle cx="254" cy="138" r="7" fill="none" stroke="#17130d" strokeWidth="1.25" />
        <circle cx="290" cy="138" r="7" fill="none" stroke="#17130d" strokeWidth="1.25" />

        {/* Loop arrow */}
        <path
          d="M220 168 C240 182, 268 182, 288 168"
          stroke="#2563eb"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M284 164 L288 168 L284 172"
          stroke="#2563eb"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <text
          x="254"
          y="186"
          fill="#1e3a8a"
          fontSize="8"
          fontFamily="system-ui, sans-serif"
          textAnchor="middle"
          fontWeight="600"
        >
          Compounding loop
        </text>
      </svg>
    </div>
  );
}
