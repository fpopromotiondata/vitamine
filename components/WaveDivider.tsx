type Props = {
  /** Hex color of the wave fill (== the color of the NEXT section). */
  fill: string;
  /** Wave variant — different paths so dividers don't all look identical. */
  variant?: 1 | 2 | 3 | 4;
  /** Flip vertically (useful when wave sits at top of next section). */
  flip?: boolean;
  /** Add a second, lighter back-layer wave for depth. */
  layered?: boolean;
  /** Animate the wave drifting horizontally. */
  animated?: boolean;
  className?: string;
};

const PATHS: Record<1 | 2 | 3 | 4, string> = {
  1: 'M0,40 C240,100 480,0 720,40 C960,80 1200,10 1440,50 L1440,100 L0,100 Z',
  2: 'M0,60 C360,10 720,90 1080,40 C1260,15 1380,30 1440,50 L1440,100 L0,100 Z',
  3: 'M0,30 C200,80 500,20 800,60 C1100,90 1300,30 1440,55 L1440,100 L0,100 Z',
  4: 'M0,50 C180,20 360,80 540,50 C720,20 900,80 1080,50 C1260,20 1380,60 1440,40 L1440,100 L0,100 Z',
};

const BACK_PATH = 'M0,60 C240,30 480,90 720,55 C960,20 1200,80 1440,45 L1440,100 L0,100 Z';

export default function WaveDivider({
  fill,
  variant = 1,
  flip = false,
  layered = false,
  animated = false,
  className = '',
}: Props) {
  return (
    <svg
      className={`block w-full h-[60px] sm:h-[90px] ${flip ? 'rotate-180' : ''} ${className}`}
      viewBox="0 0 1440 100"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {layered && (
        <path
          d={BACK_PATH}
          fill={fill}
          opacity={0.45}
          className={animated ? 'animate-wave-slow origin-center' : ''}
        />
      )}
      <path
        d={PATHS[variant]}
        fill={fill}
        className={animated ? 'animate-wave-slow origin-center' : ''}
        style={animated ? { animationDelay: '-2s' } : undefined}
      />
    </svg>
  );
}
