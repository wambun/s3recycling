'use client';

import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import { ReactNode, useRef } from 'react';
import {
  fadeUp,
  fadeLeft,
  fadeRight,
  scaleUp,
  blurIn,
  slideUpClip,
  staggerContainer,
  viewportOnce,
} from '@/lib/animations';

type AnimationType = 'fadeUp' | 'fadeLeft' | 'fadeRight' | 'scaleUp' | 'blurIn' | 'slideUp';

const animationVariants: Record<AnimationType, Variants> = {
  fadeUp,
  fadeLeft,
  fadeRight,
  scaleUp,
  blurIn,
  slideUp: slideUpClip,
};

interface ScrollRevealProps {
  children: ReactNode;
  animation?: AnimationType;
  delay?: number;
  className?: string;
  once?: boolean;
}

export const ScrollReveal = ({
  children,
  animation = 'fadeUp',
  delay = 0,
  className = '',
  once = true,
}: ScrollRevealProps) => {
  const variants = animationVariants[animation];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={once ? viewportOnce : { once: false, margin: '-100px' }}
      variants={variants}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface StaggerRevealProps {
  children: ReactNode;
  className?: string;
  childAnimation?: AnimationType;
}

export const StaggerReveal = ({
  children,
  className = '',
  childAnimation = 'fadeUp',
}: StaggerRevealProps) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={staggerContainer}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface ParallaxProps {
  children: ReactNode;
  speed?: 'slow' | 'medium' | 'fast';
  className?: string;
}

export const Parallax = ({
  children,
  speed = 'medium',
  className = '',
}: ParallaxProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const speedValues = {
    slow: [-30, 30],
    medium: [-50, 50],
    fast: [-80, 80],
  };

  const y = useTransform(scrollYProgress, [0, 1], speedValues[speed]);

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
};

interface TextRevealProps {
  text: string;
  className?: string;
  tag?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
}

export const TextReveal = ({
  text,
  className = '',
  tag = 'p',
}: TextRevealProps) => {
  const words = text.split(' ');
  const Tag = tag;

  return (
    <Tag className={className}>
      <motion.span
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.05,
            },
          },
        }}
        className="inline"
      >
        {words.map((word, i) => (
          <motion.span
            key={i}
            className="inline-block mr-[0.25em]"
            variants={{
              hidden: { opacity: 0, y: 20, rotateX: -90 },
              visible: {
                opacity: 1,
                y: 0,
                rotateX: 0,
                transition: {
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                },
              },
            }}
          >
            {word}
          </motion.span>
        ))}
      </motion.span>
    </Tag>
  );
};

interface CountUpProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}

export const CountUp = ({
  end,
  suffix = '',
  prefix = '',
  duration = 2,
  className = '',
}: CountUpProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center center'],
  });

  const count = useTransform(scrollYProgress, [0, 0.5], [0, end]);

  return (
    <motion.span ref={ref} className={className}>
      {prefix}
      <motion.span>{count}</motion.span>
      {suffix}
    </motion.span>
  );
};

export default ScrollReveal;
