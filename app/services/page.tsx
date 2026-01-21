import { Metadata } from 'next';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import PageHero from '@/components/shared/PageHero';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, Server, Recycle, Building, HeartPulse, Truck } from 'lucide-react';
import { services } from '@/data/services';

export const metadata: Metadata = {
  title: 'Solutions | E-Waste Recycling Services',
  description:
    'Complete e-waste solutions including IT asset disposition, data destruction, and end-of-life recycling. R2 certified with zero landfill policy.',
};

const iconMap: Record<string, React.ElementType> = {
  'shield-check': ShieldCheck,
  server: Server,
  recycle: Recycle,
  building: Building,
  'heart-pulse': HeartPulse,
  truck: Truck,
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <PageHero>
          <div className="max-w-3xl">
            <span className="inline-block text-primary font-medium mb-4">
              Our Solutions
            </span>
            <h1 className="text-display-md md:text-display-lg font-display font-medium tracking-tighter text-logis-text mb-6">
              Complete E-Waste Solutions
            </h1>
            <p className="text-body-lg text-logis-text-secondary">
              S3&apos;s comprehensive electronics recycling services help businesses
              responsibly manage their IT assets. From secure data destruction to
              sustainable end-of-life recycling, we handle the entire process.
            </p>
          </div>
        </PageHero>

        {/* Services Grid */}
        <section className="py-20 md:py-28 bg-white">
          <div className="w-full px-6 md:px-12 lg:px-20">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => {
                const Icon = iconMap[service.icon] || ShieldCheck;

                return (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="group block bg-logis-bg hover:bg-white border border-transparent hover:border-logis-border rounded-logis-lg p-8 transition-all hover:shadow-lg"
                  >
                    {/* Icon */}
                    <div className="w-16 h-16 rounded-logis bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>

                    {/* Content */}
                    <h2 className="text-heading-sm font-display font-medium text-logis-text mb-3">
                      {service.shortTitle}
                    </h2>
                    <p className="text-logis-text-secondary mb-6">
                      {service.shortDescription}
                    </p>

                    {/* Features Preview */}
                    <ul className="space-y-2 mb-6">
                      {service.features.slice(0, 3).map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 text-sm text-logis-text-secondary"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Link */}
                    <span className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-28 bg-primary">
          <div className="w-full px-6 md:px-12 lg:px-20 text-center">
            <h2 className="text-heading-lg md:text-heading-xl font-display font-medium tracking-tighter text-white mb-6">
              Not Sure Which Service You Need?
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Our team will assess your situation and recommend the best solution
              for your organization. Contact us today for a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-logis font-medium transition-colors"
              >
                Contact Us
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:8889707377"
                className="inline-flex items-center gap-2 border-2 border-white/30 hover:border-white text-white px-8 py-4 rounded-logis font-medium transition-colors"
              >
                Call 888-970-S3RS
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
