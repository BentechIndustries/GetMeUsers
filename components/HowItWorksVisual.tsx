export function HowItWorksVisual() {
  return (
    <div className="flex items-center justify-center" aria-hidden>
      <svg
        viewBox="0 0 300 340"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-auto w-full max-w-[240px] sm:max-w-[280px]"
      >
        {/* Clipboard */}
        <rect
          x="52"
          y="44"
          width="196"
          height="252"
          rx="12"
          fill="#ffffff"
          stroke="#cbd5e1"
          strokeWidth="2"
        />
        <rect x="128" y="32" width="44" height="24" rx="6" fill="#e2e8f0" />
        <rect x="136" y="40" width="28" height="8" rx="4" fill="#cbd5e1" />

        {/* Blueprint grid */}
        <g opacity="0.35" stroke="#c7d2fe" strokeWidth="0.75">
          {[88, 108, 128, 148, 168, 188, 208, 228, 248].map((y) => (
            <line key={`h-${y}`} x1="68" y1={y} x2="232" y2={y} />
          ))}
          {[88, 118, 148, 178, 208].map((x) => (
            <line key={`v-${x}`} x1={x} y1="76" x2={x} y2="280" />
          ))}
        </g>

        <text
          x="78"
          y="98"
          fill="#6366f1"
          fontSize="10"
          fontFamily="system-ui, sans-serif"
          fontWeight="700"
          letterSpacing="0.05em"
        >
          GROWTH BLUEPRINT
        </text>

        {/* Product box */}
        <rect
          x="88"
          y="112"
          width="56"
          height="40"
          rx="6"
          fill="#eef2ff"
          stroke="#a5b4fc"
          strokeWidth="1.5"
        />
        <text
          x="116"
          y="136"
          fill="#4f46e5"
          fontSize="9"
          fontFamily="system-ui, sans-serif"
          textAnchor="middle"
          fontWeight="600"
        >
          Product
        </text>

        {/* Flat chart */}
        <rect
          x="156"
          y="112"
          width="68"
          height="40"
          rx="6"
          fill="#f8fafc"
          stroke="#e2e8f0"
          strokeWidth="1.5"
        />
        <line
          x1="166"
          y1="142"
          x2="214"
          y2="142"
          stroke="#94a3b8"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <text
          x="190"
          y="126"
          fill="#94a3b8"
          fontSize="7"
          fontFamily="system-ui, sans-serif"
          textAnchor="middle"
        >
          Traction
        </text>

        {/* Callout: bottleneck */}
        <path
          d="M116 158 L116 178 L148 178"
          stroke="#6366f1"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        />
        <rect x="150" y="168" width="78" height="22" rx="5" fill="#eef2ff" stroke="#a5b4fc" strokeWidth="1" />
        <text
          x="189"
          y="183"
          fill="#4338ca"
          fontSize="8"
          fontFamily="system-ui, sans-serif"
          textAnchor="middle"
          fontWeight="600"
        >
          Bottleneck
        </text>

        {/* Callout: channel fit */}
        <path
          d="M200 152 L218 152 L218 200"
          stroke="#6366f1"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        />
        <rect x="168" y="202" width="72" height="22" rx="5" fill="#eef2ff" stroke="#a5b4fc" strokeWidth="1" />
        <text
          x="204"
          y="217"
          fill="#4338ca"
          fontSize="8"
          fontFamily="system-ui, sans-serif"
          textAnchor="middle"
          fontWeight="600"
        >
          Channel fit
        </text>

        {/* Callout: first experiment */}
        <rect x="78" y="232" width="88" height="22" rx="5" fill="#eef2ff" stroke="#a5b4fc" strokeWidth="1" />
        <text
          x="122"
          y="247"
          fill="#4338ca"
          fontSize="8"
          fontFamily="system-ui, sans-serif"
          textAnchor="middle"
          fontWeight="600"
        >
          First experiment
        </text>
        <path
          d="M122 232 L122 218"
          stroke="#6366f1"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        />

        {/* Magnifying glass */}
        <circle cx="236" cy="108" r="14" fill="#ffffff" stroke="#6366f1" strokeWidth="2" />
        <line
          x1="246"
          y1="118"
          x2="256"
          y2="128"
          stroke="#6366f1"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
