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

const ServicesGrid = () => {
  // Show first 3 services on homepage
  const featuredServices = services.slice(0, 3);

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-container mx-auto px-5 md:px-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary font-medium mb-4">Our Services</span>
          <h2 className="text-heading-lg md:text-heading-xl font-display font-medium tracking-tighter text-logis-text mb-4">
            Complete E-Waste Solutions
          </h2>
          <p className="text-body-lg text-logis-text-secondary max-w-2xl mx-auto">
            From data destruction to end-of-life recycling, S3 provides comprehensive
            IT asset disposition services tailored to your business needs.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featuredServices.map((service, index) => {
            const Icon = iconMap[service.icon] || ShieldCheck;

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
                  className="group block h-full bg-logis-bg hover:bg-white border border-transparent hover:border-logis-border rounded-logis-lg p-8 transition-all hover:shadow-lg"
                >
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-logis bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>

                  {/* Content */}
                  <h3 className="text-heading-sm font-display font-medium text-logis-text mb-3">
                    {service.shortTitle}
                  </h3>
                  <p className="text-logis-text-secondary mb-6">
                    {service.shortDescription}
                  </p>

                  {/* Link */}
                  <span className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                    Learn More
                    <ArrowRight className="w-4 h-4" />
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
          className="text-center mt-12"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-logis font-medium transition-colors"
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
