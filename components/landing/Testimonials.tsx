'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { testimonials } from '@/data/testimonials';

const Testimonials = () => {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-logis-bg to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-primary/5 to-transparent rounded-full blur-3xl" />

      <div className="w-full px-6 md:px-12 lg:px-20 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary font-semibold mb-4 tracking-wide uppercase text-sm">Testimonials</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold tracking-tight text-logis-text mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-logis-text-secondary max-w-2xl mx-auto">
            See why organizations across the country choose S3 for their e-waste recycling needs.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group relative bg-white rounded-2xl p-8 md:p-10 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              {/* Quote mark decoration */}
              <div className="absolute top-6 right-8 text-8xl text-primary/5 font-serif leading-none select-none">
                &ldquo;
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-logis-text text-lg md:text-xl leading-relaxed mb-8 relative z-10">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                {/* Avatar with gradient */}
                <div className="relative">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary via-primary-600 to-secondary flex items-center justify-center text-white text-lg font-bold shadow-lg">
                    {testimonial.company.split(' ').map(word => word[0]).join('').slice(0, 2)}
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-logis-text text-lg">{testimonial.author}</p>
                  <p className="text-logis-text-secondary">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Social proof bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-8 px-8 py-4 bg-white rounded-full shadow-sm border border-gray-100">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {['from-green-400 to-emerald-500', 'from-blue-400 to-indigo-500', 'from-purple-400 to-pink-500', 'from-amber-400 to-orange-500'].map((gradient, i) => (
                  <div key={i} className={`w-8 h-8 rounded-full bg-gradient-to-br ${gradient} border-2 border-white`} />
                ))}
              </div>
              <span className="text-sm text-logis-text-secondary ml-2">
                <span className="font-semibold text-logis-text">500+</span> satisfied clients
              </span>
            </div>
            <div className="h-6 w-px bg-gray-200" />
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
              <span className="text-sm text-logis-text-secondary ml-2">
                <span className="font-semibold text-logis-text">4.9/5</span> rating
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
