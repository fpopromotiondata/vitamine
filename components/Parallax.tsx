'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, type ReactNode } from 'react';

type Props = {
  children: ReactNode;
  /** Vertical offset range in px. Positive = element moves UP as you scroll down. */
  offset?: number;
  /** Optional rotation total degrees across the scroll range. */
  rotate?: number;
  /** Optional scale change across the scroll range (1 = none). */
  scaleTo?: number;
  className?: string;
};

export default function Parallax({
  children,
  offset = 80,
  rotate = 0,
  scaleTo = 1,
  className = '',
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);
  const r = useTransform(scrollYProgress, [0, 1], [0, rotate]);
  const s = useTransform(scrollYProgress, [0, 1], [1, scaleTo]);

  return (
    <motion.div
      ref={ref}
      style={{ y, rotate: r, scale: s }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
