type Variant = 'pink' | 'green' | 'cream' | 'white';

type Props = {
  variant?: Variant;
  className?: string;
};

/**
 * Animated mesh / blob backdrop. Place inside a `relative` parent with
 * `overflow-hidden`. Renders three blurred colored blobs that drift around
 * to give a living gradient feel.
 */
export default function AuroraBackground({ variant = 'pink', className = '' }: Props) {
  const palette = {
    pink:  ['blob-pink',  'blob-cream', 'blob-pink'],
    green: ['blob-green', 'blob-cream', 'blob-green'],
    cream: ['blob-pink',  'blob-green', 'blob-cream'],
    white: ['blob-pink',  'blob-green', 'blob-cream'],
  }[variant];

  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <div
        className={`absolute -top-32 -left-24 w-[520px] h-[520px] rounded-full ${palette[0]} animate-blob`}
      />
      <div
        className={`absolute top-1/3 -right-32 w-[600px] h-[600px] rounded-full ${palette[1]} animate-blob-slow`}
        style={{ animationDelay: '4s' }}
      />
      <div
        className={`absolute -bottom-40 left-1/3 w-[560px] h-[560px] rounded-full ${palette[2]} animate-blob`}
        style={{ animationDelay: '8s' }}
      />
    </div>
  );
}
