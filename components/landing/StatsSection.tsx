'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

interface StatItem {
  value: number;
  suffix: string;
  label: string;
  description: string;
}

const stats: StatItem[] = [
  {
    value: 95,
    suffix: '%',
    label: 'Reuse/Recycle Rate',
    description: 'Equipment reused or responsibly recycled',
  },
  {
    value: 100,
    suffix: '%',
    label: 'Customer Satisfaction',
    description: 'Clients who recommend our services',
  },
  {
    value: 0,
    suffix: '%',
    label: 'Zero Landfill Policy',
    description: 'Nothing goes to landfill',
  },
  {
    value: 30,
    suffix: '+',
    label: 'States Served',
    description: 'Nationwide coverage across the U.S.',
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
    <section className="py-20 md:py-28 bg-primary">
      <div className="max-w-container mx-auto px-5 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-heading-lg md:text-heading-xl font-display font-medium tracking-tighter text-white mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            S3 is committed to sustainable e-waste management with measurable results.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <p className="text-5xl md:text-6xl font-display font-bold text-white mb-2">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-lg font-medium text-white mb-1">{stat.label}</p>
              <p className="text-sm text-white/70">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
