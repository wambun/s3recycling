'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, Server, Recycle, Building, HeartPulse, Truck } from 'lucide-react';
import { services } from '@/data/services';

const iconMap: Record<string, React.ElementType> = {
  'shield-check': ShieldCheck,
  'server': Server,
  'recycle': Recycle,
  'building': Building,
  'heart-pulse': HeartPulse,
  'truck': Truck,
};

const cardColors = [
  { bg: 'group-hover:bg-green-50', icon: 'bg-green-100 group-hover:bg-green-200', iconColor: 'text-green-600' },
  { bg: 'group-hover:bg-blue-50', icon: 'bg-blue-100 group-hover:bg-blue-200', iconColor: 'text-blue-600' },
  { bg: 'group-hover:bg-purple-50', icon: 'bg-purple-100 group-hover:bg-purple-200', iconColor: 'text-purple-600' },
];

const ServicesGrid = () => {
  // Show first 3 services on homepage
  const featuredServices = services.slice(0, 3);

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-container mx-auto px-5 md:px-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary font-semibold mb-4 tracking-wide uppercase text-sm">Our Services</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold tracking-tight text-logis-text mb-6">
            Complete E-Waste Solutions
          </h2>
          <p className="text-xl text-logis-text-secondary max-w-2xl mx-auto">
            From data destruction to end-of-life recycling, S3 provides comprehensive
            IT asset disposition services tailored to your business needs.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredServices.map((service, index) => {
            const Icon = iconMap[service.icon] || ShieldCheck;
            const colors = cardColors[index % cardColors.length];

            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={`/services/${service.slug}`}
                  className={`group block h-full bg-gray-50 ${colors.bg} rounded-2xl p-8 transition-all duration-300 hover:shadow-xl border border-transparent hover:border-gray-200`}
                >
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl ${colors.icon} flex items-center justify-center mb-6 transition-colors duration-300`}>
                    <Icon className={`w-8 h-8 ${colors.iconColor}`} />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl md:text-2xl font-display font-semibold text-logis-text mb-3">
                    {service.shortTitle}
                  </h3>
                  <p className="text-logis-text-secondary mb-6 leading-relaxed">
                    {service.shortDescription}
                  </p>

                  {/* Link */}
                  <span className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                    Learn More
                    <ArrowRight className="w-5 h-5" />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-3 bg-logis-dark hover:bg-black text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:gap-4"
          >
            View All Services
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesGrid;
