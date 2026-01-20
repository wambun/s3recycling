'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Phone, Calendar, CheckCircle } from 'lucide-react';

const benefits = [
  'Free consultation & quote',
  'Nationwide pickup service',
  'Certified data destruction',
  'Detailed documentation',
];

const CTASection = () => {
  return (
    <section className="py-24 md:py-32 bg-logis-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient orbs */}
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[128px]" />
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[128px]" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="w-full px-6 md:px-12 lg:px-20 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block text-primary font-semibold mb-4 tracking-wide uppercase text-sm">Get Started</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold tracking-tight text-white mb-6">
              Ready to Responsibly Recycle Your E-Waste?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Get started with S3 today. Our team will create a customized solution
              for your organization&apos;s IT asset disposition needs.
            </p>

            {/* Benefits */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-gray-300 text-sm">{benefit}</span>
                </motion.div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/pickup-request"
                className="group inline-flex items-center justify-center gap-3 bg-primary hover:bg-primary-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30"
              >
                <Calendar className="w-5 h-5" />
                Schedule a Pickup
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:8889707377"
                className="inline-flex items-center justify-center gap-3 border-2 border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:bg-white/5"
              >
                <Phone className="w-5 h-5" />
                888-970-S3RS
              </a>
            </div>
          </motion.div>

          {/* Stats Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-white/10">
              <h3 className="text-2xl font-display font-semibold text-white mb-8">
                Why Choose S3?
              </h3>

              <div className="space-y-6">
                {[
                  { value: '95%', label: 'Reuse/Recycle Rate', description: 'Equipment reused or responsibly recycled' },
                  { value: '100%', label: 'Satisfaction Rate', description: 'Clients who recommend our services' },
                  { value: '0%', label: 'Landfill Rate', description: 'Zero waste to landfill guarantee' },
                  { value: '30+', label: 'States Served', description: 'Nationwide coverage across the U.S.' },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="flex items-center gap-4 pb-6 border-b border-white/10 last:border-0 last:pb-0"
                  >
                    <div className="text-3xl md:text-4xl font-display font-bold text-primary">
                      {stat.value}
                    </div>
                    <div>
                      <p className="text-white font-medium">{stat.label}</p>
                      <p className="text-gray-400 text-sm">{stat.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -z-10 -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-2xl" />
          </motion.div>
        </div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-white/10 text-center"
        >
          <p className="text-gray-400 text-sm">
            Trusted by Fortune 500 companies, healthcare organizations, government agencies, and educational institutions
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
