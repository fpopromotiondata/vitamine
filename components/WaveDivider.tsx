type Props = {
  /** Hex color of the wave fill (== the color of the NEXT section). */
  fill: string;
  /** Wave variant — different paths so dividers don't all look identical. */
  variant?: 1 | 2 | 3;
  /** Flip vertically (useful when wave sits at top of next section). */
  flip?: boolean;
  className?: string;
};

const PATHS: Record<1 | 2 | 3, string> = {
  1: 'M0,40 C240,100 480,0 720,40 C960,80 1200,10 1440,50 L1440,100 L0,100 Z',
  2: 'M0,60 C360,10 720,90 1080,40 C1260,15 1380,30 1440,50 L1440,100 L0,100 Z',
  3: 'M0,30 C200,80 500,20 800,60 C1100,90 1300,30 1440,55 L1440,100 L0,100 Z',
};

export default function WaveDivider({ fill, variant = 1, flip = false, className = '' }: Props) {
  return (
    <svg
      className={`block w-full h-[60px] sm:h-[90px] ${flip ? 'rotate-180' : ''} ${className}`}
      viewBox="0 0 1440 100"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path d={PATHS[variant]} fill={fill} />
    </svg>
  );
}
