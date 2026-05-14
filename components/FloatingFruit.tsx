import Image from 'next/image';

type Props = {
  src: string;
  alt?: string;
  /** rendered pixel size at lg breakpoint */
  size?: number;
  /** Tailwind position classes (top/left/bottom/right + breakpoints) and sizing */
  className?: string;
  /** animation utility, e.g. animate-float / animate-drift / animate-drift-rev */
  anim?: string;
  /** seconds offset so neighbours don't move in sync */
  delay?: number;
  /** opacity 0-100 */
  opacity?: number;
};

export default function FloatingFruit({
  src,
  alt = '',
  size = 64,
  className = '',
  anim = 'animate-float',
  delay = 0,
  opacity = 100,
}: Props) {
  return (
    <span
      className={`group absolute select-none cursor-pointer transition-transform duration-300 hover:scale-125 hover:-translate-y-1 ${className}`}
      style={{ opacity: opacity / 100 }}
    >
      <Image
        src={src}
        alt={alt}
        width={size}
        height={size}
        unoptimized
        className={`block w-full h-full drop-shadow-lg ${anim} group-hover:drop-shadow-[0_10px_24px_rgba(0,0,0,0.25)]`}
        style={{ animationDelay: `${delay}s` }}
      />
    </span>
  );
}
