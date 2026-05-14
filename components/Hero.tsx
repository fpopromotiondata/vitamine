import Image from 'next/image';
import Container from './Container';
import WaveDivider from './WaveDivider';
import { FRUIT_IMG, type FruitKey } from '@/lib/fruit-images';
import { BRAND } from '@/lib/theme';

type Orbit = {
  key: FruitKey;
  alt: string;
  size: number;
  pos: string;
  anim: string;
  delay?: number;
};

const ORBITS: Orbit[] = [
  // LEFT side
  { key: 'strawberry', alt: 'Fraise',     size: 120, pos: 'top-[8%]    left-[4%]  sm:left-[6%]  lg:left-[8%]',   anim: 'animate-drift',      delay: 0.0 },
  { key: 'orange',     alt: 'Orange',     size: 92,  pos: 'top-[34%]   left-[2%]  sm:left-[4%]  lg:left-[6%]',   anim: 'animate-float',      delay: 0.6 },
  { key: 'kiwi',       alt: 'Kiwi',       size: 78,  pos: 'top-[60%]   left-[10%] sm:left-[12%] lg:left-[14%]',  anim: 'animate-drift-rev',  delay: 1.1 },
  { key: 'pineapple',  alt: 'Ananas',     size: 96,  pos: 'top-[18%]   left-[20%] sm:left-[22%] lg:left-[24%]',  anim: 'animate-float-slow', delay: 0.3 },
  { key: 'grapes',     alt: 'Raisins',    size: 82,  pos: 'bottom-[8%] left-[4%]  sm:left-[8%]  lg:left-[10%]',  anim: 'animate-float',      delay: 1.4 },
  { key: 'mango',      alt: 'Mangue',     size: 70,  pos: 'bottom-[28%] left-[24%] sm:left-[26%] lg:left-[28%]', anim: 'animate-float-fast', delay: 0.9 },

  // RIGHT side
  { key: 'watermelon', alt: 'Pastèque',   size: 120, pos: 'top-[8%]    right-[4%] sm:right-[6%] lg:right-[8%]',   anim: 'animate-drift-rev',  delay: 0.4 },
  { key: 'lemon',      alt: 'Citron',     size: 80,  pos: 'top-[32%]   right-[2%] sm:right-[4%] lg:right-[6%]',   anim: 'animate-float',      delay: 1.0 },
  { key: 'apple',      alt: 'Pomme',      size: 90,  pos: 'top-[58%]   right-[10%] sm:right-[12%] lg:right-[14%]', anim: 'animate-drift',     delay: 0.7 },
  { key: 'cherries',   alt: 'Cerises',    size: 76,  pos: 'top-[14%]   right-[22%] sm:right-[24%] lg:right-[26%]', anim: 'animate-float-slow', delay: 0.2 },
  { key: 'peach',      alt: 'Pêche',      size: 78,  pos: 'bottom-[10%] right-[6%] sm:right-[10%] lg:right-[12%]', anim: 'animate-float',     delay: 1.3 },
  { key: 'banana',     alt: 'Banane',     size: 84,  pos: 'bottom-[26%] right-[22%] sm:right-[24%] lg:right-[26%]', anim: 'animate-drift-rev', delay: 0.5 },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative bg-gradient-to-br from-brand-pink via-brand-pink to-brand-pink-dark overflow-hidden pt-20 lg:pt-24"
    >
      {/* soft radial glow behind text */}
      <div
        aria-hidden
        className="absolute left-1/2 top-[55%] -translate-x-1/2 -translate-y-1/2 w-[680px] h-[680px] rounded-full blur-3xl opacity-40"
        style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.35) 0%, transparent 65%)' }}
      />

      <Container className="relative">
        <div className="relative h-[640px] sm:h-[700px] lg:h-[760px]">

          {/* Orbiting fruits — wrapper handles hover scale so it stacks with the
              inner element's running float/drift animation. */}
          {ORBITS.map(o => (
            <span
              key={o.key + o.pos}
              className={`group absolute select-none cursor-pointer transition-transform duration-300 hover:scale-125 hover:-translate-y-1 ${o.pos}`}
              style={{ width: o.size, height: o.size }}
            >
              <Image
                src={FRUIT_IMG[o.key]}
                alt={o.alt}
                width={o.size}
                height={o.size}
                unoptimized
                className={`block w-full h-full drop-shadow-2xl ${o.anim} group-hover:drop-shadow-[0_12px_28px_rgba(255,255,255,0.45)]`}
                style={{ animationDelay: `${o.delay ?? 0}s` }}
              />
            </span>
          ))}

          {/* Center text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 pointer-events-none">
            <span className="inline-flex items-center gap-2 bg-white/15 border border-white/30 backdrop-blur px-3 py-1 rounded-full text-xs sm:text-sm font-semibold pointer-events-auto">
              <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
              100% naturel · Pressé minute
            </span>

            <h1 className="font-display font-black mt-5 text-4xl sm:text-6xl lg:text-7xl leading-[1.02] tracking-tight max-w-3xl">
              Le goût frais des{' '}
              <span className="text-brand-green-soft">fruits</span>, à Oran.
            </h1>

            <p className="mt-5 text-base sm:text-lg text-white/90 max-w-xl">
              Jus pressés, crêpes, gaufres, cocktails et salades de fruits,
              milkshakes et bouteilles — préparés chaque jour avec des fruits choisis.
            </p>

            <div className="mt-7 flex flex-wrap gap-3 justify-center pointer-events-auto">
              <a
                href="#menu"
                className="inline-flex items-center bg-brand-green hover:bg-brand-green-dark text-white font-semibold px-6 py-3 rounded-full shadow-soft transition"
              >
                Voir le menu
              </a>
              <a
                href="#locations"
                className="inline-flex items-center bg-white/0 hover:bg-white/15 text-white font-semibold px-6 py-3 rounded-full border-2 border-white/70 transition"
              >
                Nous trouver
              </a>
            </div>
          </div>
        </div>
      </Container>

      {/* divider into menu section (brand-cream) */}
      <WaveDivider fill={BRAND.cream} variant={1} className="relative z-10 -mb-px" />
    </section>
  );
}
