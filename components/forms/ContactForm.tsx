'use client';

import { useState } from 'react';
import { Send, Loader2 } from 'lucide-react';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="bg-primary/10 rounded-logis-lg p-8 text-center">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
          <Send className="w-8 h-8 text-primary" />
        </div>
        <h3 className="text-xl font-display font-medium text-logis-text mb-2">
          Message Sent!
        </h3>
        <p className="text-logis-text-secondary">
          Thank you for contacting us. A member of our team will reach out to you
          shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-logis-text mb-2"
          >
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-3 rounded-logis border border-logis-border bg-white text-logis-text placeholder:text-logis-text-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            placeholder="Your name"
          />
        </div>
        <div>
          <label
            htmlFor="company"
            className="block text-sm font-medium text-logis-text mb-2"
          >
            Company Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="company"
            name="company"
            required
            className="w-full px-4 py-3 rounded-logis border border-logis-border bg-white text-logis-text placeholder:text-logis-text-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            placeholder="Your company"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-logis-text mb-2"
          >
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-3 rounded-logis border border-logis-border bg-white text-logis-text placeholder:text-logis-text-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            placeholder="you@company.com"
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-logis-text mb-2"
          >
            Phone (optional)
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full px-4 py-3 rounded-logis border border-logis-border bg-white text-logis-text placeholder:text-logis-text-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            placeholder="(555) 123-4567"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-logis-text mb-2"
        >
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full px-4 py-3 rounded-logis border border-logis-border bg-white text-logis-text placeholder:text-logis-text-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
          placeholder="Tell us about your e-waste recycling needs..."
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-700 disabled:bg-primary/50 text-white px-8 py-4 rounded-logis font-medium transition-colors"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Send Message
            <Send className="w-5 h-5" />
          </>
        )}
      </button>

      <p className="text-sm text-logis-text-muted">
        Required fields are marked with <span className="text-red-500">*</span>
      </p>
    </form>
  );
}
