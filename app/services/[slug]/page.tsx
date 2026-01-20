import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import Link from 'next/link';
import {
  ArrowRight,
  ArrowLeft,
  Check,
  Phone,
  ShieldCheck,
  Server,
  Recycle,
  Building,
  HeartPulse,
  Truck,
} from 'lucide-react';
import { services, getServiceBySlug } from '@/data/services';

const iconMap: Record<string, React.ElementType> = {
  'shield-check': ShieldCheck,
  server: Server,
  recycle: Recycle,
  building: Building,
  'heart-pulse': HeartPulse,
  truck: Truck,
};

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }

  return {
    title: `${service.title} | S3 Recycling Solutions`,
    description: service.description,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const Icon = iconMap[service.icon] || ShieldCheck;

  // Get related services (excluding current)
  const relatedServices = services
    .filter((s) => s.slug !== service.slug)
    .slice(0, 3);

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-logis-bg py-20 md:py-28">
          <div className="w-full px-6 md:px-12 lg:px-20">
            {/* Breadcrumb */}
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-logis-text-secondary hover:text-primary mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Services
            </Link>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                {/* Icon */}
                <div className="w-20 h-20 rounded-logis-lg bg-primary/10 flex items-center justify-center mb-6">
                  <Icon className="w-10 h-10 text-primary" />
                </div>

                <h1 className="text-display-sm md:text-display-md font-display font-medium tracking-tighter text-logis-text mb-6">
                  {service.title}
                </h1>
                <p className="text-body-lg text-logis-text-secondary mb-8">
                  {service.description}
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/pickup-request"
                    className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-700 text-white px-8 py-4 rounded-logis font-medium transition-colors"
                  >
                    {service.ctaText}
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
              </div>

              {/* Features Card */}
              <div className="bg-white rounded-logis-lg p-8 border border-logis-border">
                <h2 className="text-heading-sm font-display font-medium text-logis-text mb-6">
                  What&apos;s Included
                </h2>
                <ul className="space-y-4">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-logis-text">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Details Section */}
        <section className="py-20 md:py-28 bg-white">
          <div className="w-full px-6 md:px-12 lg:px-20">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-heading-lg font-display font-medium tracking-tighter text-logis-text mb-6">
                Why Choose S3 for {service.shortTitle}?
              </h2>

              <div className="prose prose-lg max-w-none text-logis-text-secondary">
                <p>
                  S3 Recycling Solutions is a trusted leader in the e-waste
                  recycling industry. Our {service.shortTitle.toLowerCase()}{' '}
                  services are designed to meet the highest standards of security,
                  sustainability, and compliance.
                </p>

                <h3>Our Commitment to Excellence</h3>
                <ul>
                  <li>
                    <strong>R2 Certified:</strong> Our processes meet the
                    electronics recycling industry&apos;s top credential standards.
                  </li>
                  <li>
                    <strong>Zero Landfill Policy:</strong> We ensure nothing goes
                    to landfill through responsible recycling and remarketing.
                  </li>
                  <li>
                    <strong>Data Security:</strong> Your sensitive information is
                    protected throughout the entire process.
                  </li>
                  <li>
                    <strong>Nationwide Service:</strong> We serve clients in more
                    than 30 states across the U.S.
                  </li>
                </ul>

                <h3>How It Works</h3>
                <ol>
                  <li>
                    <strong>Contact Us:</strong> Reach out to discuss your needs
                    and get a customized solution.
                  </li>
                  <li>
                    <strong>Schedule Pickup:</strong> We&apos;ll arrange convenient
                    pickup at your location.
                  </li>
                  <li>
                    <strong>Secure Processing:</strong> Your assets are processed
                    at our R2-certified facility.
                  </li>
                  <li>
                    <strong>Documentation:</strong> Receive comprehensive reports
                    and certificates of destruction.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-20 md:py-28 bg-logis-bg">
          <div className="w-full px-6 md:px-12 lg:px-20">
            <h2 className="text-heading-lg font-display font-medium tracking-tighter text-logis-text mb-10 text-center">
              Related Services
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {relatedServices.map((related) => {
                const RelatedIcon = iconMap[related.icon] || ShieldCheck;

                return (
                  <Link
                    key={related.slug}
                    href={`/services/${related.slug}`}
                    className="group block bg-white hover:shadow-lg border border-logis-border rounded-logis-lg p-6 transition-all"
                  >
                    <div className="w-12 h-12 rounded-logis bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <RelatedIcon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-display font-medium text-logis-text mb-2">
                      {related.shortTitle}
                    </h3>
                    <p className="text-sm text-logis-text-secondary mb-4">
                      {related.shortDescription}
                    </p>
                    <span className="inline-flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all">
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
              Ready to Get Started?
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Contact S3 today to learn more about our {service.shortTitle.toLowerCase()}{' '}
              services and get a customized solution for your organization.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/pickup-request"
                className="inline-flex items-center gap-2 bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-logis font-medium transition-colors"
              >
                Request a Pickup
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border-2 border-white/30 hover:border-white text-white px-8 py-4 rounded-logis font-medium transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
