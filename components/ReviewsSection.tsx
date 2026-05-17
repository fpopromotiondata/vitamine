'use client';

import Container from './Container';
import ReviewCard from './ReviewCard';
import WaveDivider from './WaveDivider';
import FloatingFruit from './FloatingFruit';
import AuroraBackground from './AuroraBackground';
import Reveal from './Reveal';
import { REVIEWS } from '@/lib/reviews-data';
import { FRUIT_IMG } from '@/lib/fruit-images';
import { BRAND } from '@/lib/theme';

export default function ReviewsSection() {
  // Marquee seam — repeat 4× so each half is wide enough on large screens.
  const loop = [...REVIEWS, ...REVIEWS, ...REVIEWS, ...REVIEWS];

  return (
    <section
      id="reviews"
      className="relative bg-green-mesh bg-size-300 animate-gradient-shift overflow-hidden pt-16 lg:pt-20 grain"
    >
      <AuroraBackground variant="green" />

      <FloatingFruit src={FRUIT_IMG.lemon}      className="top-10 left-4 w-16 h-16 lg:w-24 lg:h-24"           anim="animate-float"      delay={0.0} opacity={70} parallax={70} />
      <FloatingFruit src={FRUIT_IMG.pineapple}  className="bottom-24 right-6 w-16 h-16 lg:w-24 lg:h-24"       anim="animate-float-slow" delay={0.4} opacity={70} parallax={90} />
      <FloatingFruit src={FRUIT_IMG.orange}     className="top-1/3 right-8 w-12 h-12 lg:w-16 lg:h-16 hidden sm:block" anim="animate-drift"     delay={0.7} opacity={70} parallax={50} />
      <FloatingFruit src={FRUIT_IMG.strawberry} className="top-1/2 left-8 w-12 h-12 lg:w-16 lg:h-16 hidden sm:block" anim="animate-drift-rev" delay={1.0} opacity={80} parallax={60} />
      <FloatingFruit src={FRUIT_IMG.watermelon} className="top-8 right-1/4 w-12 h-12 lg:w-16 lg:h-16 hidden md:block" anim="animate-float-fast" delay={0.3} opacity={70} parallax={80} />
      <FloatingFruit src={FRUIT_IMG.kiwi}       className="bottom-32 left-1/4 w-12 h-12 lg:w-16 lg:h-16 hidden md:block" anim="animate-float"  delay={0.9} opacity={70} parallax={40} />

      <Container className="relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-10 lg:mb-14 text-white">
          <Reveal direction="up">
            <span className="inline-block bg-white/20 border border-white/30 backdrop-blur font-semibold text-sm px-4 py-1.5 rounded-full shadow-sm">
              ⭐ Avis clients
            </span>
          </Reveal>
          <Reveal direction="up" delay={0.1}>
            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl mt-3">
              Ce qu&apos;on <span className="text-shimmer">dit</span> de nous
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.2}>
            <p className="mt-3 text-white/90">
              Quelques mots laissés par nos clients sur Google ⭐
            </p>
          </Reveal>
        </div>
      </Container>

      {/* Marquee (full bleed). pr-5 on items so duplicated half lines up at the seam. */}
      <Reveal direction="up" delay={0.2} className="relative z-10">
        <div className="relative group [mask-image:linear-gradient(90deg,transparent_0,#000_6%,#000_94%,transparent_100%)]">
          <div
            className="flex w-max animate-marquee group-hover:[animation-play-state:paused]"
            style={{ animationDuration: '100s' }}
          >
            {loop.map((r, i) => (
              <div key={`${r.initial}-${i}`} className="shrink-0 pr-5">
                <ReviewCard review={r} />
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <WaveDivider fill={BRAND.white} variant={3} layered animated className="mt-16 lg:mt-20 -mb-px relative z-10" />
    </section>
  );
}
