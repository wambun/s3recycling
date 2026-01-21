import { Metadata } from 'next';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import PageHero from '@/components/shared/PageHero';
import PickupRequestForm from '@/components/forms/PickupRequestForm';
import { Phone, CheckCircle } from 'lucide-react';
import { contactInfo } from '@/data/navigation';

export const metadata: Metadata = {
  title: 'Request a Pickup | S3 Recycling Solutions',
  description:
    'Schedule an e-waste pickup with S3 Recycling Solutions. Our team will come to your location and handle the entire process.',
};

const benefits = [
  'White-glove pickup service',
  'Secure chain of custody',
  'R2-certified processing',
  'Comprehensive documentation',
  'Zero landfill guarantee',
  'Nationwide coverage',
];

export default function PickupRequestPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <PageHero>
          <div className="max-w-3xl">
            <span className="inline-block text-primary font-medium mb-4">
              Get Started
            </span>
            <h1 className="text-display-md md:text-display-lg font-display font-medium tracking-tighter text-logis-text mb-6">
              Request a Pickup
            </h1>
            <p className="text-body-lg text-logis-text-secondary">
              Fill out the form below and our team will contact you to schedule
              a convenient pickup time. We handle all the heavy lifting—literally
              and figuratively.
            </p>
          </div>
        </PageHero>

        {/* Form Section */}
        <section className="py-20 md:py-28 bg-white">
          <div className="w-full px-6 md:px-12 lg:px-20">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Benefits Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-logis-bg rounded-logis-lg p-8 sticky top-32">
                  <h2 className="text-xl font-display font-medium text-logis-text mb-6">
                    What to Expect
                  </h2>

                  <ul className="space-y-4 mb-8">
                    {benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle className="w-4 h-4 text-primary" />
                        </div>
                        <span className="text-logis-text">{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-6 border-t border-logis-border">
                    <p className="text-sm text-logis-text-secondary mb-4">
                      Need immediate assistance?
                    </p>
                    <a
                      href={contactInfo.phoneHref}
                      className="flex items-center gap-3 p-4 bg-white rounded-logis border border-logis-border hover:border-primary transition-colors"
                    >
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Phone className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-logis-text">
                          {contactInfo.phone}
                        </p>
                        <p className="text-sm text-logis-text-secondary">
                          {contactInfo.hours}
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              {/* Form */}
              <div className="lg:col-span-2">
                <div className="bg-logis-bg rounded-logis-lg p-8">
                  <h2 className="text-xl font-display font-medium text-logis-text mb-6">
                    Pickup Request Form
                  </h2>
                  <PickupRequestForm />
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
