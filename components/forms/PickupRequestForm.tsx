'use client';

import { useState } from 'react';
import { Send, Loader2, Calendar } from 'lucide-react';

export default function PickupRequestForm() {
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
          <Calendar className="w-8 h-8 text-primary" />
        </div>
        <h3 className="text-xl font-display font-medium text-logis-text mb-2">
          Request Submitted!
        </h3>
        <p className="text-logis-text-secondary">
          Thank you for your pickup request. A member of our team will contact you
          within 24 hours to confirm the details.
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
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-logis-text mb-2"
          >
            Phone <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            className="w-full px-4 py-3 rounded-logis border border-logis-border bg-white text-logis-text placeholder:text-logis-text-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            placeholder="(555) 123-4567"
          />
        </div>
        <div>
          <label
            htmlFor="company"
            className="block text-sm font-medium text-logis-text mb-2"
          >
            Company <span className="text-red-500">*</span>
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
            htmlFor="pickupDate"
            className="block text-sm font-medium text-logis-text mb-2"
          >
            Preferred Pickup Date <span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            id="pickupDate"
            name="pickupDate"
            required
            className="w-full px-4 py-3 rounded-logis border border-logis-border bg-white text-logis-text focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
          />
        </div>
        <div>
          <label
            htmlFor="location"
            className="block text-sm font-medium text-logis-text mb-2"
          >
            Pickup City and State (optional)
          </label>
          <input
            type="text"
            id="location"
            name="location"
            className="w-full px-4 py-3 rounded-logis border border-logis-border bg-white text-logis-text placeholder:text-logis-text-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            placeholder="e.g., Nashville, TN"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="details"
          className="block text-sm font-medium text-logis-text mb-2"
        >
          Pickup Details <span className="text-red-500">*</span>
        </label>
        <textarea
          id="details"
          name="details"
          required
          rows={5}
          className="w-full px-4 py-3 rounded-logis border border-logis-border bg-white text-logis-text placeholder:text-logis-text-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
          placeholder="Approximate quantities: e.g., 50 desktops, 30 laptops, 20 LCDs, etc."
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
            Submitting...
          </>
        ) : (
          <>
            Submit Request
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
