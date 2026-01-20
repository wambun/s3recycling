'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Phone, Calendar } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-20 md:py-28 bg-logis-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-primary to-transparent" />
        <div className="absolute bottom-0 right-0 w-1/2 h-full bg-gradient-to-l from-secondary to-transparent" />
      </div>

      <div className="max-w-container mx-auto px-5 md:px-10 relative">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-heading-lg md:text-heading-xl font-display font-medium tracking-tighter text-white mb-6">
              Ready to Responsibly Recycle Your E-Waste?
            </h2>
            <p className="text-lg text-gray-300 mb-10">
              Get started with S3 today. Our team will create a customized solution
              for your organization&apos;s IT asset disposition needs.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/pickup-request"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-600 text-white px-8 py-4 rounded-logis font-medium transition-all hover:gap-3 w-full sm:w-auto justify-center"
              >
                <Calendar className="w-5 h-5" />
                Schedule a Pickup
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:8889707377"
                className="inline-flex items-center gap-2 border-2 border-white/30 hover:border-white text-white px-8 py-4 rounded-logis font-medium transition-colors w-full sm:w-auto justify-center"
              >
                <Phone className="w-5 h-5" />
                Call 888-970-S3RS
              </a>
            </div>

            {/* Trust Badge */}
            <p className="mt-8 text-gray-400 text-sm">
              R2 Certified &bull; Zero Landfill Policy &bull; NAID Member
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
