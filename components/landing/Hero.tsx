'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Phone, Shield, Leaf, Award } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-logis-bg overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/20 to-transparent" />
      </div>

      <div className="max-w-container mx-auto px-5 md:px-10 py-20 md:py-28 lg:py-36">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6"
            >
              <Shield className="w-4 h-4" />
              <span className="text-sm font-medium">R2 Certified &bull; Zero Landfill</span>
            </motion.div>

            {/* Headline */}
            <h1 className="text-display-md md:text-display-lg lg:text-display-xl font-display font-medium tracking-tighter text-logis-text mb-6">
              Security.{' '}
              <span className="text-primary">Sustainability.</span>{' '}
              Stewardship.
            </h1>

            {/* Subheadline */}
            <p className="text-body-lg text-logis-text-secondary mb-8 max-w-lg">
              Hassle-free e-waste solutions for businesses. S3 Recycling Solutions
              provides secure, sustainable IT asset disposition services nationwide.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link
                href="/pickup-request"
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-700 text-white px-8 py-4 rounded-logis font-medium transition-all hover:gap-3"
              >
                Request a Pickup
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:8889707377"
                className="inline-flex items-center justify-center gap-2 border-2 border-logis-border hover:border-primary text-logis-text px-8 py-4 rounded-logis font-medium transition-colors"
              >
                <Phone className="w-5 h-5" />
                888-970-S3RS
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-2 text-logis-text-secondary">
                <Shield className="w-5 h-5 text-primary" />
                <span className="text-sm">Secure Data Destruction</span>
              </div>
              <div className="flex items-center gap-2 text-logis-text-secondary">
                <Leaf className="w-5 h-5 text-primary" />
                <span className="text-sm">95% Reuse Rate</span>
              </div>
              <div className="flex items-center gap-2 text-logis-text-secondary">
                <Award className="w-5 h-5 text-primary" />
                <span className="text-sm">30+ States Served</span>
              </div>
            </div>
          </motion.div>

          {/* Hero Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-logis-xl overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20">
              {/* Placeholder for hero image - in production this would be an actual image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                    <Leaf className="w-12 h-12 text-primary" />
                  </div>
                  <p className="text-logis-text-secondary text-sm">
                    E-Recycling Made Easy
                  </p>
                </div>
              </div>

              {/* Floating Stats Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="absolute bottom-4 left-4 right-4 bg-white rounded-logis p-4 shadow-lg"
              >
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-display font-bold text-primary">95%</p>
                    <p className="text-xs text-logis-text-secondary">Reuse Rate</p>
                  </div>
                  <div>
                    <p className="text-2xl font-display font-bold text-primary">100%</p>
                    <p className="text-xs text-logis-text-secondary">Satisfaction</p>
                  </div>
                  <div>
                    <p className="text-2xl font-display font-bold text-primary">0%</p>
                    <p className="text-xs text-logis-text-secondary">Landfill</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
