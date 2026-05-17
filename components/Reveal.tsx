'use client';

import { motion, type Variants } from 'framer-motion';
import type { ReactNode } from 'react';

type Direction = 'up' | 'down' | 'left' | 'right' | 'zoom' | 'none';

type Props = {
  children: ReactNode;
  /** Direction the element enters from. */
  direction?: Direction;
  /** Delay (seconds) before this element animates in. */
  delay?: number;
  /** Stagger duration for child Reveals (use with `stagger` parent). */
  duration?: number;
  /** Distance (px) the element travels during the reveal. */
  distance?: number;
  /** Repeat the animation every time it enters the viewport. */
  repeat?: boolean;
  className?: string;
  as?: 'div' | 'section' | 'span' | 'li' | 'article' | 'header';
};

const offsetFor = (dir: Direction, d: number) => {
  switch (dir) {
    case 'up':    return { y:  d, x: 0, scale: 1 };
    case 'down':  return { y: -d, x: 0, scale: 1 };
    case 'left':  return { y: 0,  x:  d, scale: 1 };
    case 'right': return { y: 0,  x: -d, scale: 1 };
    case 'zoom':  return { y: 0,  x: 0,  scale: 0.85 };
    default:      return { y: 0,  x: 0,  scale: 1 };
  }
};

export default function Reveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.7,
  distance = 32,
  repeat = false,
  className = '',
  as = 'div',
}: Props) {
  const start = offsetFor(direction, distance);

  const variants: Variants = {
    hidden: { opacity: 0, ...start },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const MotionTag = motion[as] as typeof motion.div;

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: !repeat, amount: 0.2 }}
      variants={variants}
    >
      {children}
    </MotionTag>
  );
}
