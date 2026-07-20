import { site } from "@/lib/content"

// Approximate geographic positions for Lake County + NW Cook County cities.
// Used to render a styled static SVG map until a full Mapbox/Leaflet implementation is wired.
// Coordinates are normalized (0-100, x: West→East, y: North→South)
const cityCoords: Record<string, { x: number; y: number }> = {
  "Round Lake Beach": { x: 22, y: 18 },
  "Round Lake Park": { x: 24, y: 19 },
  "Round Lake": { x: 24, y: 21 },
  "Lake Villa": { x: 16, y: 16 },
  "Lindenhurst": { x: 18, y: 14 },
  "Gurnee": { x: 32, y: 14 },
  "Grayslake": { x: 28, y: 22 },
  "Wauconda": { x: 22, y: 28 },
  "Mundelein": { x: 36, y: 30 },
  "Libertyville": { x: 42, y: 26 },
  "Vernon Hills": { x: 46, y: 32 },
  "Long Grove": { x: 40, y: 38 },
  "Hawthorn Woods": { x: 36, y: 40 },
  "Kildeer": { x: 34, y: 44 },
  "Lake Zurich": { x: 30, y: 44 },
  "Deer Park": { x: 36, y: 48 },
  "Barrington Hills": { x: 20, y: 48 },
  "Barrington": { x: 24, y: 50 },
  "Cary": { x: 14, y: 42 },
  "Crystal Lake": { x: 10, y: 36 },
  "Fox River Grove": { x: 14, y: 48 },
  "Algonquin": { x: 8, y: 52 },
  "Lake in the Hills": { x: 6, y: 48 },
  "Palatine": { x: 40, y: 56 },
  "Rolling Meadows": { x: 46, y: 58 },
  "Arlington Heights": { x: 54, y: 60 },
  "Buffalo Grove": { x: 50, y: 50 },
  "Wheeling": { x: 60, y: 54 },
  "Prospect Heights": { x: 62, y: 60 },
  "Mount Prospect": { x: 60, y: 66 },
}

export function ServiceAreaMap({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={`relative w-full max-w-full rounded-2xl overflow-hidden border border-[color:var(--color-brand-border)] bg-[color:var(--color-brand-surface)] shadow-[var(--shadow-soft)] ${
        compact ? "aspect-[4/3] md:aspect-[5/4]" : "aspect-[4/3] md:aspect-[5/4]"
      }`}
    >
      <svg
        viewBox="0 0 100 80"
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="xMidYMid meet"
        aria-labelledby="service-area-map-title"
        role="img"
      >
        <title id="service-area-map-title">Torvik Hauling service area, Lake County and Northwest Cook County, Illinois</title>
        <defs>
          <pattern id="dotgrid" width="4" height="4" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="0.3" fill="#0B2E5B" opacity="0.08" />
          </pattern>
          <radialGradient id="coverage" cx="35%" cy="40%" r="50%">
            <stop offset="0%" stopColor="#6FA8DC" stopOpacity="0.35" />
            <stop offset="60%" stopColor="#6FA8DC" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#6FA8DC" stopOpacity="0" />
          </radialGradient>
        </defs>

        <rect width="100" height="80" fill="url(#dotgrid)" />
        <circle cx="35" cy="40" r="35" fill="url(#coverage)" />

        {/* Boundary hint, Lake County + NW Cook */}
        <path
          d="M 2 10 Q 20 5, 42 8 T 80 12 L 84 50 Q 70 70, 40 72 T 4 70 Z"
          fill="none"
          stroke="#0B2E5B"
          strokeWidth="0.3"
          strokeDasharray="1 1"
          opacity="0.35"
        />

        {/* City dots */}
        {site.serviceAreas.full.map((city) => {
          const c = cityCoords[city]
          if (!c) return null
          const isPrimary = site.serviceAreas.primary.includes(city)
          return (
            <g key={city}>
              <circle
                cx={c.x}
                cy={c.y}
                r={isPrimary ? 1.2 : 0.7}
                fill={isPrimary ? "#0B2E5B" : "#3E7CB1"}
              />
              {isPrimary && (
                <text
                  x={c.x + 2}
                  y={c.y + 0.8}
                  fontSize="1.9"
                  fill="#1A2033"
                  fontFamily="Inter, system-ui, sans-serif"
                  fontWeight="500"
                >
                  {city}
                </text>
              )}
            </g>
          )
        })}

        {/* Home base marker */}
        <g>
          <circle cx={cityCoords["Hawthorn Woods"].x} cy={cityCoords["Hawthorn Woods"].y} r="2.4" fill="#0B2E5B" stroke="#fff" strokeWidth="0.5" />
          <circle cx={cityCoords["Hawthorn Woods"].x} cy={cityCoords["Hawthorn Woods"].y} r="3.8" fill="none" stroke="#0B2E5B" strokeWidth="0.3" opacity="0.4">
            <animate attributeName="r" values="2.4;5.5;2.4" dur="3s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.6;0;0.6" dur="3s" repeatCount="indefinite" />
          </circle>
        </g>
      </svg>

      <div className="absolute bottom-4 left-4 bg-[color:var(--color-brand-surface)]/95 backdrop-blur-sm rounded-lg px-3 py-2 border border-[color:var(--color-brand-border)] text-xs">
        <div className="flex items-center gap-2 mb-1">
          <span className="w-2 h-2 rounded-full bg-[color:var(--color-brand-primary)]" />
          <span className="text-[color:var(--color-brand-text)] font-medium">Home base, Hawthorn Woods</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[color:var(--color-brand-secondary)]" />
          <span className="text-[color:var(--color-brand-muted)]">{site.serviceAreas.full.length}+ communities served</span>
        </div>
      </div>
    </div>
  )
}
