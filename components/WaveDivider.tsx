type Props = {
  /** Hex color of the wave fill. In default mode (wave at the END of the
   *  previous section) this is the NEXT section's color — the SVG paints
   *  below the curve. In `inverted` mode (wave at the START of the next
   *  section) this is the PREVIOUS section's color — the SVG paints above
   *  the curve, leaving the bottom transparent so the parent section's
   *  background shows through unchanged. */
  fill?: string;
  /** Optional gradient fill — overrides `fill`. Use when one of the sections
   *  has a gradient bg so the wave doesn't sit on top as a single flat color.
   *  The CSS angle is in degrees (0 = bottom→top). */
  gradient?: { from: string; to: string; angle?: number };
  /** Inverted mode: SVG paints ABOVE the curve (top area) instead of below.
   *  Place this divider at the TOP of the next section so the section's own
   *  background fills the area below the curve — guaranteeing the wave's
   *  bottom edge matches the section perfectly (it IS the section). */
  inverted?: boolean;
  /** Wave variant — different paths so dividers don't all look identical. */
  variant?: 1 | 2 | 3 | 4;
  /** Flip vertically (useful when wave sits at top of next section). */
  flip?: boolean;
  /** Add a second, lighter back-layer wave for depth. */
  layered?: boolean;
  /** Continuously slide the wave horizontally (always moving). */
  animated?: boolean;
  className?: string;
  /** Unique id suffix when multiple dividers share the same page; rarely needed. */
  id?: string;
};

/**
 * Tileable wave paths. ViewBox is 2880 wide and y(0) == y(1440) == y(2880),
 * so animating translateX from 0 → -50% loops seamlessly with no edge gaps.
 * Standard paths fill the BOTTOM area (below the curve).
 */
const PATHS: Record<1 | 2 | 3 | 4, string> = {
  1: 'M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 C1680,80 1920,0 2160,40 C2400,80 2640,0 2880,40 L2880,100 L0,100 Z',
  2: 'M0,50 C240,10 480,90 720,50 C960,10 1200,90 1440,50 C1680,10 1920,90 2160,50 C2400,10 2640,90 2880,50 L2880,100 L0,100 Z',
  3: 'M0,40 C200,75 520,20 720,55 C920,90 1240,15 1440,40 C1640,75 1960,20 2160,55 C2360,90 2680,15 2880,40 L2880,100 L0,100 Z',
  4: 'M0,50 C180,25 360,75 540,50 C720,25 900,75 1080,50 C1260,25 1320,75 1440,50 C1620,25 1800,75 1980,50 C2160,25 2340,75 2520,50 C2700,25 2760,75 2880,50 L2880,100 L0,100 Z',
};

const BACK_PATHS: Record<1 | 2 | 3 | 4, string> = {
  1: 'M0,60 C240,30 480,90 720,55 C960,20 1200,80 1440,60 C1680,30 1920,90 2160,55 C2400,20 2640,80 2880,60 L2880,100 L0,100 Z',
  2: 'M0,40 C240,75 480,15 720,45 C960,75 1200,15 1440,40 C1680,75 1920,15 2160,45 C2400,75 2640,15 2880,40 L2880,100 L0,100 Z',
  3: 'M0,55 C240,25 480,80 720,50 C960,20 1200,85 1440,55 C1680,25 1920,80 2160,50 C2400,20 2640,85 2880,55 L2880,100 L0,100 Z',
  4: 'M0,45 C240,70 480,20 720,55 C960,30 1200,75 1440,45 C1680,70 1920,20 2160,55 C2400,30 2640,75 2880,45 L2880,100 L0,100 Z',
};

/** Inverted paths — same curves, but capped at y=0 so they fill the TOP area
 *  (above the curve). Used in `meshClass` mode so the previous-section color
 *  paints the area above the wave while the mesh shows below it. */
const PATHS_INVERTED: Record<1 | 2 | 3 | 4, string> = {
  1: 'M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 C1680,80 1920,0 2160,40 C2400,80 2640,0 2880,40 L2880,0 L0,0 Z',
  2: 'M0,50 C240,10 480,90 720,50 C960,10 1200,90 1440,50 C1680,10 1920,90 2160,50 C2400,10 2640,90 2880,50 L2880,0 L0,0 Z',
  3: 'M0,40 C200,75 520,20 720,55 C920,90 1240,15 1440,40 C1640,75 1960,20 2160,55 C2360,90 2680,15 2880,40 L2880,0 L0,0 Z',
  4: 'M0,50 C180,25 360,75 540,50 C720,25 900,75 1080,50 C1260,25 1320,75 1440,50 C1620,25 1800,75 1980,50 C2160,25 2340,75 2520,50 C2700,25 2760,75 2880,50 L2880,0 L0,0 Z',
};

const BACK_PATHS_INVERTED: Record<1 | 2 | 3 | 4, string> = {
  1: 'M0,60 C240,30 480,90 720,55 C960,20 1200,80 1440,60 C1680,30 1920,90 2160,55 C2400,20 2640,80 2880,60 L2880,0 L0,0 Z',
  2: 'M0,40 C240,75 480,15 720,45 C960,75 1200,15 1440,40 C1680,75 1920,15 2160,45 C2400,75 2640,15 2880,40 L2880,0 L0,0 Z',
  3: 'M0,55 C240,25 480,80 720,50 C960,20 1200,85 1440,55 C1680,25 1920,80 2160,50 C2400,20 2640,85 2880,55 L2880,0 L0,0 Z',
  4: 'M0,45 C240,70 480,20 720,55 C960,30 1200,75 1440,45 C1680,70 1920,20 2160,55 C2400,30 2640,75 2880,45 L2880,0 L0,0 Z',
};

export default function WaveDivider({
  fill = '#ffffff',
  gradient,
  inverted = false,
  variant = 1,
  flip = false,
  layered = false,
  animated = false,
  className = '',
  id = 'wave',
}: Props) {
  const gradId = `${id}-grad-${variant}-${flip ? 'f' : 'n'}`;
  // SVG linearGradient direction; 0deg in CSS == bottom→top; we mirror that.
  const angle = gradient?.angle ?? 135;
  // Convert CSS angle (0=up) to SVG x1/y1/x2/y2 unit vector.
  const rad = ((angle - 90) * Math.PI) / 180;
  const x2 = (0.5 + Math.cos(rad) * 0.5).toFixed(3);
  const y2 = (0.5 + Math.sin(rad) * 0.5).toFixed(3);
  const x1 = (0.5 - Math.cos(rad) * 0.5).toFixed(3);
  const y1 = (0.5 - Math.sin(rad) * 0.5).toFixed(3);
  const paintFill = gradient ? `url(#${gradId})` : fill;
  const mainPath = inverted ? PATHS_INVERTED[variant] : PATHS[variant];
  const backPath = inverted ? BACK_PATHS_INVERTED[variant] : BACK_PATHS[variant];

  return (
    <div className={`w-full overflow-hidden ${flip ? 'rotate-180' : ''} ${className}`}>
      <svg
        className={`block w-[200%] h-[60px] sm:h-[90px] ${animated ? 'animate-wave-slide' : ''}`}
        viewBox="0 0 2880 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        {gradient && (
          <defs>
            <linearGradient id={gradId} x1={x1} y1={y1} x2={x2} y2={y2}>
              <stop offset="0%"   stopColor={gradient.from} />
              <stop offset="100%" stopColor={gradient.to} />
            </linearGradient>
          </defs>
        )}
        {layered && (
          <path
            d={backPath}
            fill={paintFill}
            opacity={0.45}
          />
        )}
        <path d={mainPath} fill={paintFill} />
      </svg>
    </div>
  );
}
