'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { TrendingUp, Shield, Leaf, MapPin } from 'lucide-react';

interface StatItem {
  value: number;
  suffix: string;
  label: string;
  description: string;
  icon: typeof TrendingUp;
  color: string;
}

const stats: StatItem[] = [
  {
    value: 95,
    suffix: '%',
    label: 'Reuse/Recycle Rate',
    description: 'Equipment reused or responsibly recycled',
    icon: TrendingUp,
    color: 'from-green-400 to-emerald-500',
  },
  {
    value: 100,
    suffix: '%',
    label: 'Customer Satisfaction',
    description: 'Clients who recommend our services',
    icon: Shield,
    color: 'from-blue-400 to-indigo-500',
  },
  {
    value: 0,
    suffix: '%',
    label: 'Zero Landfill Policy',
    description: 'Nothing goes to landfill',
    icon: Leaf,
    color: 'from-purple-400 to-pink-500',
  },
  {
    value: 30,
    suffix: '+',
    label: 'States Served',
    description: 'Nationwide coverage across the U.S.',
    icon: MapPin,
    color: 'from-amber-400 to-orange-500',
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
    <section className="py-24 md:py-32 bg-gradient-to-br from-primary via-primary-700 to-primary-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-white/5 to-transparent" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="max-w-container mx-auto px-5 md:px-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-white/80 font-semibold mb-4 tracking-wide uppercase text-sm">Our Impact</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold tracking-tight text-white mb-6">
            Measurable Results That Matter
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            S3 is committed to sustainable e-waste management with measurable results.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10 hover:bg-white/15 transition-all duration-300 text-center h-full">
                  {/* Icon */}
                  <div className={`w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Value */}
                  <p className="text-4xl md:text-5xl font-display font-bold text-white mb-2">
                    <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                  </p>

                  {/* Label */}
                  <p className="text-lg font-semibold text-white mb-1">{stat.label}</p>

                  {/* Description */}
                  <p className="text-sm text-white/60">{stat.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
