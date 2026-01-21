'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

const stats: StatItem[] = [
  {
    value: 95,
    suffix: '%',
    label: 'Reuse & Recycle Rate',
  },
  {
    value: 100,
    suffix: '%',
    label: 'Customer Satisfaction',
  },
  {
    value: 0,
    suffix: '%',
    label: 'Landfill Policy',
  },
  {
    value: 30,
    suffix: '+',
    label: 'States Served Nationwide',
  },
];

const AnimatedNumber = ({ value, suffix }: { value: number; suffix: string }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setDisplayValue(value);
          clearInterval(timer);
        } else {
          setDisplayValue(Math.floor(current));
        }
      }, duration / steps);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {displayValue}
      {suffix}
    </span>
  );
};

const StatsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-[#f8f9fa]">
      <div className="w-full px-6 md:px-12 lg:px-20">
        {/* Header Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-display font-semibold tracking-tight text-logis-text">
            Measurable Impact
          </h2>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-logis-border rounded-full text-logis-text hover:border-logis-text transition-colors text-sm font-medium"
          >
            Learn more
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* Divider */}
        <div className="w-full h-px bg-logis-border mb-16" />

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center lg:text-left"
            >
              {/* Large Number */}
              <p className="text-6xl md:text-7xl lg:text-8xl font-display font-semibold text-logis-text tracking-tight leading-none mb-4">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </p>

              {/* Label */}
              <p className="text-base md:text-lg text-logis-text-secondary">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
