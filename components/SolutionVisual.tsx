export function SolutionVisual() {
  const spokes = [
    { label: "Hook", x: 150, y: 52, active: true },
    { label: "Channels", x: 248, y: 120, active: false },
    { label: "Loop", x: 220, y: 228, active: true },
    { label: "Metrics", x: 80, y: 228, active: false },
    { label: "Messaging", x: 52, y: 120, active: false },
  ];

  return (
    <div className="flex items-center justify-center" aria-hidden>
      <svg
        viewBox="0 0 300 280"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-auto w-full max-w-[240px] sm:max-w-[280px]"
      >
        {/* Connection lines */}
        {spokes.map((node) => (
          <line
            key={node.label}
            x1="150"
            y1="150"
            x2={node.x}
            y2={node.y}
            stroke={node.active ? "#818cf8" : "#e2e8f0"}
            strokeWidth={node.active ? 2 : 1.5}
            strokeDasharray={node.active ? undefined : "4 3"}
          />
        ))}

        {/* Outer ring */}
        <circle cx="150" cy="150" r="108" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="6 4" />

        {/* Center: product */}
        <circle cx="150" cy="150" r="36" fill="#4f46e5" />
        <text
          x="150"
          y="146"
          fill="#ffffff"
          fontSize="9"
          fontFamily="system-ui, sans-serif"
          textAnchor="middle"
          fontWeight="700"
        >
          Your
        </text>
        <text
          x="150"
          y="158"
          fill="#ffffff"
          fontSize="9"
          fontFamily="system-ui, sans-serif"
          textAnchor="middle"
          fontWeight="700"
        >
          product
        </text>

        {/* Spoke nodes */}
        {spokes.map((node) => (
          <g key={node.label}>
            <circle
              cx={node.x}
              cy={node.y}
              r="22"
              fill={node.active ? "#eef2ff" : "#f8fafc"}
              stroke={node.active ? "#818cf8" : "#cbd5e1"}
              strokeWidth="1.5"
            />
            <text
              x={node.x}
              y={node.y + 4}
              fill={node.active ? "#4338ca" : "#64748b"}
              fontSize="8"
              fontFamily="system-ui, sans-serif"
              textAnchor="middle"
              fontWeight="600"
            >
              {node.label}
            </text>
          </g>
        ))}

        {/* System label */}
        <text
          x="150"
          y="272"
          fill="#94a3b8"
          fontSize="9"
          fontFamily="system-ui, sans-serif"
          textAnchor="middle"
          fontWeight="600"
          letterSpacing="0.06em"
        >
          ACQUISITION SYSTEM
        </text>
      </svg>
    </div>
  );
}
