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
          rx="14"
          fill="#f8fafc"
          stroke="#e2e8f0"
          strokeWidth="2"
        />
        <text
          x="86"
          y="52"
          fill="#94a3b8"
          fontSize="9"
          fontFamily="system-ui, sans-serif"
          textAnchor="middle"
          fontWeight="700"
          letterSpacing="0.05em"
        >
          BEFORE
        </text>

        {/* Empty inbox */}
        <rect x="36" y="64" width="100" height="52" rx="8" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1.5" />
        <rect x="48" y="76" width="48" height="6" rx="3" fill="#e2e8f0" />
        <rect x="48" y="88" width="72" height="6" rx="3" fill="#f1f5f9" />
        <rect x="48" y="100" width="56" height="6" rx="3" fill="#f1f5f9" />
        <text
          x="86"
          y="134"
          fill="#94a3b8"
          fontSize="8"
          fontFamily="system-ui, sans-serif"
          textAnchor="middle"
        >
          Empty inbox
        </text>

        {/* Flat chart */}
        <line x1="44" y1="168" x2="128" y2="168" stroke="#e2e8f0" strokeWidth="1" />
        <line
          x1="44"
          y1="168"
          x2="128"
          y2="168"
          stroke="#94a3b8"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="86" cy="156" r="10" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1.5" />
        <text
          x="86"
          y="160"
          fill="#94a3b8"
          fontSize="10"
          fontFamily="system-ui, sans-serif"
          textAnchor="middle"
        >
          1
        </text>

        {/* Arrow divider */}
        <circle cx="170" cy="110" r="16" fill="#eef2ff" stroke="#a5b4fc" strokeWidth="1.5" />
        <path
          d="M164 110 L176 110 M172 106 L176 110 L172 114"
          stroke="#4f46e5"
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
          rx="14"
          fill="#ffffff"
          stroke="#a5b4fc"
          strokeWidth="2"
        />
        <text
          x="254"
          y="52"
          fill="#4f46e5"
          fontSize="9"
          fontFamily="system-ui, sans-serif"
          textAnchor="middle"
          fontWeight="700"
          letterSpacing="0.05em"
        >
          AFTER
        </text>

        {/* Growing chart */}
        <rect x="204" y="64" width="100" height="52" rx="8" fill="#eef2ff" stroke="#c7d2fe" strokeWidth="1.5" />
        {[18, 26, 22, 34, 30, 42, 48].map((h, i) => (
          <rect
            key={i}
            x={212 + i * 12}
            y={108 - h}
            width="8"
            height={h}
            rx="2"
            fill="#6366f1"
            opacity={0.35 + (i / 6) * 0.65}
          />
        ))}

        {/* Channel icons */}
        <circle cx="218" cy="138" r="8" fill="#eef2ff" stroke="#818cf8" strokeWidth="1" />
        <circle cx="254" cy="138" r="8" fill="#eef2ff" stroke="#818cf8" strokeWidth="1" />
        <circle cx="290" cy="138" r="8" fill="#eef2ff" stroke="#818cf8" strokeWidth="1" />

        {/* Loop arrow */}
        <path
          d="M220 168 C240 182, 268 182, 288 168"
          stroke="#6366f1"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M284 164 L288 168 L284 172"
          stroke="#6366f1"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <text
          x="254"
          y="186"
          fill="#4338ca"
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
