import Image from 'next/image';
import { iconFor, type MenuCategory } from '@/lib/menu-data';

type Props = { category: MenuCategory };

export default function MenuCard({ category }: Props) {
  return (
    <article className="group relative bg-white rounded-2xl border-2 border-brand-pink-soft hover:border-brand-pink transition-all duration-300 hover:-translate-y-1 hover:shadow-card overflow-hidden">
      {/* corner accent */}
      <div className="absolute -top-12 -right-12 w-28 h-28 rounded-full bg-brand-pink-soft/60 group-hover:bg-brand-pink/10 transition" />

      <header className="relative flex items-center gap-3 px-5 pt-5 pb-3 border-b-2 border-dashed border-brand-pink-soft">
        <span className="shrink-0 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-brand-pink-soft">
          <Image src={iconFor(category)} alt="" width={32} height={32} unoptimized className="w-8 h-8" />
        </span>
        <h3 className="font-display font-extrabold text-brand-pink text-lg leading-tight">
          {category.title}
        </h3>
      </header>

      <ul className="px-5 py-3 space-y-0.5">
        {category.items.map(item => (
          <li
            key={item.name}
            className="flex items-center justify-between gap-3 py-1.5 border-b border-dotted border-zinc-100 last:border-0"
          >
            <span className="text-sm text-zinc-700">{item.name}</span>
            <span className="shrink-0 inline-flex items-center bg-brand-green text-white text-xs font-bold px-2 py-1 rounded-md">
              {item.price}
              <span className="ml-1 font-medium opacity-90 text-[10px]">DA</span>
            </span>
          </li>
        ))}
      </ul>
    </article>
  );
}
