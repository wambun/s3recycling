'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { testimonials } from '@/data/testimonials';

const Testimonials = () => {
  return (
    <section className="py-20 md:py-28 bg-logis-bg">
      <div className="max-w-container mx-auto px-5 md:px-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary font-medium mb-4">Testimonials</span>
          <h2 className="text-heading-lg md:text-heading-xl font-display font-medium tracking-tighter text-logis-text mb-4">
            What Our Clients Say
          </h2>
          <p className="text-body-lg text-logis-text-secondary max-w-2xl mx-auto">
            Organizations across the country trust S3 for their e-waste recycling needs.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-logis-lg p-8 border border-logis-border"
            >
              {/* Quote Icon */}
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Quote className="w-6 h-6 text-primary" />
              </div>

              {/* Quote */}
              <blockquote className="text-logis-text text-lg mb-6 leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold">
                  {testimonial.company.charAt(0)}
                </div>
                <div>
                  <p className="font-medium text-logis-text">{testimonial.author}</p>
                  <p className="text-sm text-logis-text-secondary">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
