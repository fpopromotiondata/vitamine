import Container from './Container';
import ReviewCard from './ReviewCard';
import WaveDivider from './WaveDivider';
import FloatingFruit from './FloatingFruit';
import { REVIEWS } from '@/lib/reviews-data';
import { FRUIT_IMG } from '@/lib/fruit-images';
import { BRAND } from '@/lib/theme';

export default function ReviewsSection() {
  // The marquee animates translateX(0) -> translateX(-50%), so a *seamless*
  // loop also needs each half of the rendered row to be wider than the viewport
  // — otherwise the right edge runs out of content before wrapping and a gap
  // appears. With only 4 unique reviews × 2 copies that breaks on wide screens,
  // so we repeat the list 4× total (each half = 2× the unique list).
  const loop = [...REVIEWS, ...REVIEWS, ...REVIEWS, ...REVIEWS];

  return (
    <section id="reviews" className="relative bg-brand-green overflow-hidden pt-16 lg:pt-20">
      <FloatingFruit src={FRUIT_IMG.lemon}      className="top-10 left-4 w-16 h-16 lg:w-24 lg:h-24"           anim="animate-float"      delay={0.0} opacity={70} />
      <FloatingFruit src={FRUIT_IMG.pineapple}  className="bottom-24 right-6 w-16 h-16 lg:w-24 lg:h-24"       anim="animate-float-slow" delay={0.4} opacity={70} />
      <FloatingFruit src={FRUIT_IMG.orange}     className="top-1/3 right-8 w-12 h-12 lg:w-16 lg:h-16 hidden sm:block" anim="animate-drift"     delay={0.7} opacity={70} />
      <FloatingFruit src={FRUIT_IMG.strawberry} className="top-1/2 left-8 w-12 h-12 lg:w-16 lg:h-16 hidden sm:block" anim="animate-drift-rev" delay={1.0} opacity={80} />
      <FloatingFruit src={FRUIT_IMG.watermelon} className="top-8 right-1/4 w-12 h-12 lg:w-16 lg:h-16 hidden md:block" anim="animate-float-fast" delay={0.3} opacity={70} />
      <FloatingFruit src={FRUIT_IMG.kiwi}       className="bottom-32 left-1/4 w-12 h-12 lg:w-16 lg:h-16 hidden md:block" anim="animate-float"  delay={0.9} opacity={70} />

      <Container>
        <div className="text-center max-w-2xl mx-auto mb-10 lg:mb-14 text-white">
          <span className="inline-block bg-white/20 border border-white/30 font-semibold text-sm px-3 py-1 rounded-full">
            Avis clients
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl mt-3">
            Ce qu&apos;on dit de nous
          </h2>
          <p className="mt-3 text-white/90">
            Quelques mots laissés par nos clients sur Google ⭐
          </p>
        </div>
      </Container>

      {/* Marquee (full bleed).
          Spacing is per-card via pr-5 (NOT flex gap) so the duplicated half lines
          up at the seam — flex gap would only sit *between* siblings and leave the
          loop short by one gap, causing a visible jump on wrap. */}
      <div className="relative group [mask-image:linear-gradient(90deg,transparent_0,#000_6%,#000_94%,transparent_100%)]">
        <div
          className="flex w-max animate-marquee group-hover:[animation-play-state:paused]"
          // Each half now contains 8 cards instead of 4 — keep the per-card
          // scroll speed roughly constant by doubling the animation duration.
          style={{ animationDuration: '100s' }}
        >
          {loop.map((r, i) => (
            <div key={`${r.initial}-${i}`} className="shrink-0 pr-5">
              <ReviewCard review={r} />
            </div>
          ))}
        </div>
      </div>

      <WaveDivider fill={BRAND.white} variant={3} className="mt-16 lg:mt-20 -mb-px" />
    </section>
  );
}
