'use client';

import Image from 'next/image';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import type { MouseEvent } from 'react';
import { iconFor, type MenuCategory } from '@/lib/menu-data';

type Props = { category: MenuCategory };

export default function MenuCard({ category }: Props) {
  // Mouse-tracked 3D tilt
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotX = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), { stiffness: 200, damping: 18 });
  const rotY = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]), { stiffness: 200, damping: 18 });
  const glowX = useTransform(mx, [-0.5, 0.5], ['10%', '90%']);
  const glowY = useTransform(my, [-0.5, 0.5], ['10%', '90%']);

  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <motion.article
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX: rotX, rotateY: rotY, transformPerspective: 1000 }}
      className="group relative bg-white rounded-2xl border-2 border-brand-pink-soft hover:border-brand-pink/40 transition-colors duration-300 hover:shadow-card overflow-hidden will-change-transform"
    >
      {/* Mouse-tracked spotlight — subtle */}
      <motion.div
        aria-hidden
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: useTransform(
            [glowX, glowY],
            ([x, y]) => `radial-gradient(360px circle at ${x} ${y}, rgba(227,54,84,0.05), transparent 60%)`,
          ),
        }}
      />

      {/* corner accent */}
      <div className="absolute -top-12 -right-12 w-28 h-28 rounded-full bg-brand-pink-soft/50 group-hover:bg-brand-pink-soft/80 group-hover:scale-110 transition-all duration-500" />

      <header className="relative flex items-center gap-3 px-5 pt-5 pb-3 border-b-2 border-dashed border-brand-pink-soft">
        <span className="shrink-0 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-brand-pink-soft to-white group-hover:from-brand-pink-soft group-hover:to-brand-pink-soft/60 transition-colors duration-500 shadow-sm">
          <Image src={iconFor(category)} alt="" width={32} height={32} unoptimized className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
        </span>
        <h3 className="font-display font-extrabold text-brand-pink text-lg leading-tight group-hover:text-brand-pink-dark transition">
          {category.title}
        </h3>
      </header>

      <ul className="relative px-5 py-3 space-y-0.5">
        {category.items.map(item => (
          <li
            key={item.name}
            className="flex items-center justify-between gap-3 py-1.5 border-b border-dotted border-zinc-100 last:border-0 hover:bg-brand-pink-soft/25 -mx-2 px-2 rounded-md transition-colors"
          >
            <span className="text-sm text-zinc-700">{item.name}</span>
            {item.price !== undefined && (
              <span className="shrink-0 inline-flex items-center bg-gradient-to-r from-brand-green to-brand-green-dark text-white text-xs font-bold px-2 py-1 rounded-md shadow-sm">
                {item.price}
                <span className="ml-1 font-medium opacity-90 text-[10px]">DA</span>
              </span>
            )}
          </li>
        ))}
      </ul>

      {category.supplements && (
        <div className="relative mx-5 mb-5 mt-1 rounded-xl bg-brand-pink-soft/40 ring-1 ring-brand-pink/15 px-4 py-3">
          <h4 className="font-display font-extrabold text-brand-pink text-xs uppercase tracking-wide mb-2">
            {category.supplements.title}
          </h4>
          <ul className="space-y-0.5">
            {category.supplements.items.map(item => (
              <li
                key={item.name}
                className="flex items-center justify-between gap-3 py-1"
              >
                <span className="text-sm text-zinc-700">{item.name}</span>
                <span className="shrink-0 inline-flex items-center bg-white text-brand-pink-dark text-xs font-bold px-2 py-1 rounded-md ring-1 ring-brand-pink/20">
                  +{item.price}
                  <span className="ml-1 font-medium opacity-80 text-[10px]">DA</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </motion.article>
  );
}
