import { Metadata } from 'next';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Phone, CheckCircle } from 'lucide-react';
import { processSteps } from '@/data/team';

export const metadata: Metadata = {
  title: 'Our Process | S3 Recycling Solutions',
  description:
    'Learn about S3\'s secure, sustainable e-waste recycling process. From initial contact to final documentation, we handle every step with care.',
};

export default function ProcessPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-logis-bg py-20 md:py-28">
          <div className="max-w-container mx-auto px-5 md:px-10">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-logis-text-secondary hover:text-primary mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to About
            </Link>

            <div className="max-w-3xl">
              <span className="inline-block text-primary font-medium mb-4">
                How It Works
              </span>
              <h1 className="text-display-md md:text-display-lg font-display font-medium tracking-tighter text-logis-text mb-6">
                Our Process
              </h1>
              <p className="text-body-lg text-logis-text-secondary">
                S3 makes e-waste recycling simple and hassle-free. Our comprehensive
                process ensures your IT assets are handled securely and sustainably
                from start to finish.
              </p>
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-container mx-auto px-5 md:px-10">
            <div className="max-w-4xl mx-auto">
              {processSteps.map((step, index) => (
                <div
                  key={step.step}
                  className="relative flex gap-6 md:gap-10 pb-12 last:pb-0"
                >
                  {/* Timeline Line */}
                  {index !== processSteps.length - 1 && (
                    <div className="absolute left-6 top-14 bottom-0 w-0.5 bg-logis-border md:left-8" />
                  )}

                  {/* Step Number */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary flex items-center justify-center text-white font-display font-bold text-lg md:text-xl">
                      {step.step}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-2 pb-8">
                    <h2 className="text-xl md:text-2xl font-display font-medium text-logis-text mb-3">
                      {step.title}
                    </h2>
                    <p className="text-logis-text-secondary">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What You Get */}
        <section className="py-20 md:py-28 bg-logis-bg">
          <div className="max-w-container mx-auto px-5 md:px-10">
            <div className="text-center mb-12">
              <h2 className="text-heading-lg font-display font-medium tracking-tighter text-logis-text mb-4">
                What You&apos;ll Receive
              </h2>
              <p className="text-logis-text-secondary max-w-2xl mx-auto">
                Comprehensive documentation and reporting throughout the process.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: 'Inventory Audit Report',
                  description: 'Complete listing with make, model, and serial numbers.',
                },
                {
                  title: 'Certificate of Destruction',
                  description: 'Proof of secure data destruction for all devices.',
                },
                {
                  title: 'Chain of Custody',
                  description: 'Documentation tracking assets from pickup to disposition.',
                },
                {
                  title: 'ESG/Sustainability Report',
                  description: 'Environmental impact metrics for your records.',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-white rounded-logis-lg p-6 border border-logis-border"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <CheckCircle className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-display font-medium text-logis-text mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-logis-text-secondary">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose S3 */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-container mx-auto px-5 md:px-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-heading-lg font-display font-medium tracking-tighter text-logis-text mb-6">
                  Why Choose S3?
                </h2>
                <ul className="space-y-4">
                  {[
                    'R2-certified facility with industry-leading security',
                    'Zero landfill policy - 95% reuse/recycle rate',
                    'Nationwide service covering 30+ states',
                    'White-glove pickup service at your location',
                    'Comprehensive documentation and reporting',
                    'Certified minority-owned business',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-logis-text">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-logis-bg rounded-logis-lg p-8 border border-logis-border">
                <h3 className="text-xl font-display font-medium text-logis-text mb-4">
                  Ready to Get Started?
                </h3>
                <p className="text-logis-text-secondary mb-6">
                  Contact our team today to discuss your e-waste recycling needs.
                  We&apos;ll assess your situation and provide a customized solution.
                </p>
                <div className="space-y-4">
                  <Link
                    href="/pickup-request"
                    className="flex items-center justify-center gap-2 w-full bg-primary hover:bg-primary-700 text-white px-6 py-4 rounded-logis font-medium transition-colors"
                  >
                    Request a Pickup
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <a
                    href="tel:8889707377"
                    className="flex items-center justify-center gap-2 w-full border-2 border-logis-border hover:border-primary text-logis-text px-6 py-4 rounded-logis font-medium transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    Call 888-970-S3RS
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
