import Container from './Container';
import MenuCard from './MenuCard';
import WaveDivider from './WaveDivider';
import FloatingFruit from './FloatingFruit';
import { MENU, totalMenuItems } from '@/lib/menu-data';
import { FRUIT_IMG } from '@/lib/fruit-images';
import { BRAND } from '@/lib/theme';

export default function MenuSection() {
  return (
    <section id="menu" className="relative bg-brand-cream pt-16 lg:pt-20 overflow-hidden">
      {/* decorative fruits scattered around */}
      <FloatingFruit src={FRUIT_IMG.cherries}    className="top-10 left-4 w-16 h-16 lg:w-24 lg:h-24"          anim="animate-float"      delay={0.0} opacity={80} />
      <FloatingFruit src={FRUIT_IMG.mango}       className="top-24 right-6 w-14 h-14 lg:w-20 lg:h-20"         anim="animate-float-slow" delay={0.4} opacity={80} />
      <FloatingFruit src={FRUIT_IMG.kiwi}        className="top-1/2 left-2 w-12 h-12 lg:w-16 lg:h-16 hidden sm:block" anim="animate-drift"     delay={0.8} opacity={70} />
      <FloatingFruit src={FRUIT_IMG.grapes}      className="top-1/3 right-2 w-12 h-12 lg:w-16 lg:h-16 hidden sm:block" anim="animate-drift-rev" delay={1.0} opacity={70} />
      <FloatingFruit src={FRUIT_IMG.blueberries} className="bottom-32 left-8 w-14 h-14 lg:w-20 lg:h-20"       anim="animate-float-fast" delay={0.6} opacity={80} />
      <FloatingFruit src={FRUIT_IMG.peach}       className="bottom-24 right-10 w-14 h-14 lg:w-20 lg:h-20"     anim="animate-float"      delay={1.2} opacity={80} />

      <Container>
        <div className="relative text-center max-w-2xl mx-auto mb-10 lg:mb-14">
          <FloatingFruit src={FRUIT_IMG.strawberry} className="hidden md:block -top-4 -left-6 w-12 h-12" anim="animate-float" delay={0.0} />
          <FloatingFruit src={FRUIT_IMG.lemon}      className="hidden md:block -top-2 -right-8 w-12 h-12" anim="animate-drift" delay={0.5} />

          <span className="inline-block bg-brand-pink-soft text-brand-pink font-semibold text-sm px-3 py-1 rounded-full">
            Notre carte
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-brand-ink mt-3">
            Plus de {totalMenuItems} créations <span className="text-brand-pink">fruitées</span>
          </h2>
          <p className="mt-3 text-zinc-600">
            Tout est préparé minute avec des fruits frais. Les prix sont indicatifs et
            peuvent varier selon la saison.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {MENU.map(cat => (
            <MenuCard key={cat.id} category={cat} />
          ))}
        </div>
      </Container>

      {/* divider into reviews (brand-green) */}
      <WaveDivider fill={BRAND.green} variant={2} className="mt-16 lg:mt-20 -mb-px" />
    </section>
  );
}
