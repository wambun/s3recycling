'use client';

import { motion } from 'framer-motion';
import { Building2, GraduationCap, Heart, Landmark, Users, Factory } from 'lucide-react';
import { staggerContainer, fadeUp, viewportOnce } from '@/lib/animations';

const clientTypes = [
  { icon: Landmark, label: 'Government Agencies' },
  { icon: GraduationCap, label: 'Universities/K-12 Schools' },
  { icon: Heart, label: 'Medical Centers' },
  { icon: Building2, label: 'Financial Institutions' },
  { icon: Users, label: 'Non-profit Organizations' },
  { icon: Factory, label: 'Fortune 500 Corporations' },
];

const iconVariants = {
  hidden: { opacity: 0, scale: 0.5, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

const ClientLogos = () => {
  return (
    <section className="py-16 md:py-20 bg-white border-y border-gray-100 overflow-hidden">
      <div className="w-full px-6 md:px-12 lg:px-20">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="text-center mb-12"
        >
          <motion.h2
            variants={fadeUp}
            className="text-heading-md font-display font-medium tracking-tighter text-logis-text mb-2"
          >
            Who We Serve
          </motion.h2>
          <motion.p variants={fadeUp} className="text-logis-text-secondary">
            Trusted by organizations across diverse industries
          </motion.p>
        </motion.div>

        {/* Client Types Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {clientTypes.map((client, index) => {
            const Icon = client.icon;
            return (
              <motion.div
                key={client.label}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                variants={iconVariants}
                whileHover={{ y: -4 }}
                className="group flex flex-col items-center text-center p-4 cursor-default"
              >
                <motion.div
                  className="w-16 h-16 rounded-full bg-logis-bg flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                >
                  <Icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                </motion.div>
                <p className="text-base text-logis-text font-medium group-hover:text-primary transition-colors duration-300">
                  {client.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
