'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
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
  /** Hidden below the `sm` breakpoint so the hero doesn't feel crowded on
   *  small screens. Only the four corner-anchored fruits stay on mobile. */
  hideOnMobile?: boolean;
};

const ORBITS: Orbit[] = [
  // LEFT side
  { key: 'strawberry', alt: 'Fraise',     size: 120, pos: 'top-[8%]    left-[4%]  sm:left-[6%]  lg:left-[8%]',   anim: 'animate-drift',      delay: 0.0 },
  { key: 'orange',     alt: 'Orange',     size: 92,  pos: 'top-[34%]   left-[2%]  sm:left-[4%]  lg:left-[6%]',   anim: 'animate-float',      delay: 0.6, hideOnMobile: true },
  { key: 'kiwi',       alt: 'Kiwi',       size: 78,  pos: 'top-[60%]   left-[10%] sm:left-[12%] lg:left-[14%]',  anim: 'animate-drift-rev',  delay: 1.1, hideOnMobile: true },
  { key: 'pineapple',  alt: 'Ananas',     size: 96,  pos: 'top-[18%]   left-[20%] sm:left-[22%] lg:left-[24%]',  anim: 'animate-float-slow', delay: 0.3, hideOnMobile: true },
  { key: 'grapes',     alt: 'Raisins',    size: 82,  pos: 'bottom-[8%] left-[4%]  sm:left-[8%]  lg:left-[10%]',  anim: 'animate-float',      delay: 1.4 },
  { key: 'mango',      alt: 'Mangue',     size: 70,  pos: 'bottom-[28%] left-[24%] sm:left-[26%] lg:left-[28%]', anim: 'animate-float-fast', delay: 0.9, hideOnMobile: true },

  // RIGHT side
  { key: 'watermelon', alt: 'Pastèque',   size: 120, pos: 'top-[8%]    right-[4%] sm:right-[6%] lg:right-[8%]',   anim: 'animate-drift-rev',  delay: 0.4 },
  { key: 'lemon',      alt: 'Citron',     size: 80,  pos: 'top-[32%]   right-[2%] sm:right-[4%] lg:right-[6%]',   anim: 'animate-float',      delay: 1.0, hideOnMobile: true },
  { key: 'apple',      alt: 'Pomme',      size: 90,  pos: 'top-[58%]   right-[10%] sm:right-[12%] lg:right-[14%]', anim: 'animate-drift',     delay: 0.7, hideOnMobile: true },
  { key: 'cherries',   alt: 'Cerises',    size: 76,  pos: 'top-[14%]   right-[22%] sm:right-[24%] lg:right-[26%]', anim: 'animate-float-slow', delay: 0.2, hideOnMobile: true },
  { key: 'peach',      alt: 'Pêche',      size: 78,  pos: 'bottom-[10%] right-[6%] sm:right-[10%] lg:right-[12%]', anim: 'animate-float',     delay: 1.3 },
  { key: 'banana',     alt: 'Banane',     size: 84,  pos: 'bottom-[26%] right-[22%] sm:right-[24%] lg:right-[26%]', anim: 'animate-drift-rev', delay: 0.5, hideOnMobile: true },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative bg-hero-mesh bg-size-300 animate-gradient-shift overflow-hidden pt-20 lg:pt-24 grain"
    >
      {/* soft radial glow behind text */}
      <div
        aria-hidden
        className="absolute left-1/2 top-[55%] -translate-x-1/2 -translate-y-1/2 w-[680px] h-[680px] rounded-full blur-3xl opacity-40"
        style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.35) 0%, transparent 65%)' }}
      />

      <Container className="relative">
        <div className="relative h-[640px] sm:h-[700px] lg:h-[760px]">

          {/* Orbiting fruits — pure CSS float/drift, no scroll parallax */}
          {ORBITS.map(o => (
            <span
              key={o.key + o.pos}
              className={`group absolute select-none cursor-pointer transition-transform duration-300 hover:scale-125 hover:-translate-y-1 ${o.pos} ${o.hideOnMobile ? 'hidden sm:block' : ''}`}
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
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 bg-white/15 border border-white/30 backdrop-blur px-3 py-1 rounded-full text-xs sm:text-sm font-semibold pointer-events-auto shadow-lg"
            >
              <span className="relative flex w-2 h-2">
                <span className="absolute inset-0 rounded-full bg-brand-green animate-pulse-ring" />
                <span className="relative inline-flex w-2 h-2 rounded-full bg-brand-green" />
              </span>
              100% naturel · Pressé minute
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="font-display font-black mt-5 text-4xl sm:text-6xl lg:text-7xl leading-[1.02] tracking-tight max-w-3xl"
            >
              Le goût frais des{' '}
              <span className="text-shimmer inline-block">fruits</span>
              <br className="hidden sm:block" />
              <span className="text-white/95">à Oran.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="mt-5 text-base sm:text-lg text-white/90 max-w-xl"
            >
              Jus pressés, crêpes, gaufres, cocktails et salades de fruits,
              milkshakes et bouteilles 1L — préparés chaque jour avec des fruits choisis.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="mt-7 flex flex-wrap gap-3 justify-center pointer-events-auto"
            >
              <motion.a
                whileHover={{ scale: 1.06, y: -3 }}
                whileTap={{ scale: 0.96 }}
                href="#menu"
                className="group relative inline-flex items-center bg-brand-green hover:bg-brand-green-dark text-white font-semibold px-6 py-3 rounded-full shadow-soft transition glow-green overflow-hidden"
              >
                <span className="relative z-10">Voir le menu</span>
                <span
                  className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/30 to-transparent"
                />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.06, y: -3 }}
                whileTap={{ scale: 0.96 }}
                href="#locations"
                className="inline-flex items-center bg-white/5 backdrop-blur hover:bg-white/15 text-white font-semibold px-6 py-3 rounded-full border-2 border-white/70 transition"
              >
                Nous trouver
              </motion.a>
            </motion.div>

            {/* Scroll cue */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.6 }}
              className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/70 text-[11px] uppercase tracking-[0.25em] font-semibold"
            >
              <span>Défiler</span>
              <span className="relative w-[2px] h-10 bg-white/30 rounded-full overflow-hidden">
                <motion.span
                  initial={{ y: -40 }}
                  animate={{ y: 40 }}
                  transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute inset-x-0 top-0 h-4 bg-white rounded-full"
                />
              </span>
            </motion.div>
          </div>
        </div>
      </Container>

      {/* divider into menu section (brand-cream) — animated + layered for depth */}
      <WaveDivider fill={BRAND.cream} variant={1} layered animated className="relative z-10 -mb-px" />
    </section>
  );
}
