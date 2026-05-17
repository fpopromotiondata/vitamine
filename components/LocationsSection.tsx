'use client';

import dynamic from 'next/dynamic';
import Container from './Container';
import FloatingFruit from './FloatingFruit';
import AuroraBackground from './AuroraBackground';
import Reveal from './Reveal';
import { FRUIT_IMG } from '@/lib/fruit-images';

// react-leaflet touches window — load it client-side only.
const LocationMap = dynamic(() => import('./LocationMap'), {
  ssr: false,
  loading: () => (
    <div className="h-full w-full bg-zinc-100 animate-pulse" />
  ),
});

export default function LocationsSection() {
  return (
    <section id="locations" className="relative bg-white pt-16 lg:pt-20 overflow-hidden">
      <AuroraBackground variant="white" className="opacity-50" />

      <FloatingFruit src={FRUIT_IMG.cherries}   className="top-10 right-6 w-14 h-14 lg:w-20 lg:h-20"                    anim="animate-float"      delay={0.0} opacity={80} parallax={60} />
      <FloatingFruit src={FRUIT_IMG.mango}      className="top-1/3 left-4 w-12 h-12 lg:w-16 lg:h-16 hidden sm:block"   anim="animate-drift"      delay={0.5} opacity={70} parallax={50} />
      <FloatingFruit src={FRUIT_IMG.banana}     className="bottom-10 right-10 w-12 h-12 lg:w-16 lg:h-16 hidden sm:block" anim="animate-drift-rev"  delay={0.8} opacity={70} parallax={40} />
      <FloatingFruit src={FRUIT_IMG.greenApple} className="bottom-20 left-10 w-12 h-12 lg:w-16 lg:h-16 hidden sm:block"  anim="animate-float-slow" delay={1.1} opacity={70} parallax={70} />

      <Container className="relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-10 lg:mb-14">
          <Reveal direction="up">
            <span className="inline-block bg-gradient-to-r from-brand-green-soft to-white text-brand-green-dark font-semibold text-sm px-4 py-1.5 rounded-full ring-1 ring-brand-green/20 shadow-sm">
              📍 Nos adresses
            </span>
          </Reveal>
          <Reveal direction="up" delay={0.1}>
            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-brand-ink mt-3">
              Deux <span className="text-gradient-green">Vitamine</span> à Oran
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.2}>
            <p className="mt-3 text-zinc-600">
              Venez nous voir dans l&apos;une de nos deux boutiques.
            </p>
          </Reveal>
        </div>
      </Container>

      {/* Full-bleed cinematic map */}
      <Reveal direction="zoom" delay={0.15} className="relative z-10">
        <div className="relative w-full h-[420px] sm:h-[520px] lg:h-[600px] border-y border-zinc-200 shadow-card">
          <LocationMap />
        </div>
      </Reveal>
    </section>
  );
}
