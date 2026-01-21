'use client';

import { motion } from 'framer-motion';
import { Building2, GraduationCap, Heart, Landmark, Users, Factory } from 'lucide-react';

const clientTypes = [
  { icon: Landmark, label: 'Government Agencies' },
  { icon: GraduationCap, label: 'Universities/K-12 Schools' },
  { icon: Heart, label: 'Medical Centers' },
  { icon: Building2, label: 'Financial Institutions' },
  { icon: Users, label: 'Non-profit Organizations' },
  { icon: Factory, label: 'Fortune 500 Corporations' },
];

const ClientLogos = () => {
  return (
    <section className="py-16 md:py-20 bg-white border-y border-gray-100">
      <div className="w-full px-6 md:px-12 lg:px-20">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-heading-md font-display font-medium tracking-tighter text-logis-text mb-2">
            Who We Serve
          </h2>
          <p className="text-logis-text-secondary">
            Trusted by organizations across diverse industries
          </p>
        </motion.div>

        {/* Client Types Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {clientTypes.map((client, index) => {
            const Icon = client.icon;
            return (
              <motion.div
                key={client.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex flex-col items-center text-center p-4"
              >
                <div className="w-16 h-16 rounded-full bg-logis-bg flex items-center justify-center mb-4">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <p className="text-base text-logis-text font-medium">
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
