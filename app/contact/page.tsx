import { Metadata } from 'next';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import ContactForm from '@/components/forms/ContactForm';
import { Phone, Mail, MapPin, Clock, ExternalLink } from 'lucide-react';
import { contactInfo } from '@/data/navigation';

export const metadata: Metadata = {
  title: 'Contact Us | S3 Recycling Solutions',
  description:
    'Get in touch with S3 Recycling Solutions. Contact us to discuss your e-waste recycling needs or request a pickup.',
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-logis-bg py-20 md:py-28">
          <div className="max-w-container mx-auto px-5 md:px-10">
            <div className="max-w-3xl">
              <span className="inline-block text-primary font-medium mb-4">
                Get In Touch
              </span>
              <h1 className="text-display-md md:text-display-lg font-display font-medium tracking-tighter text-logis-text mb-6">
                Contact Us
              </h1>
              <p className="text-body-lg text-logis-text-secondary">
                We&apos;re waiting for your call. If you are interested in learning
                more about S3&apos;s services, please fill out the form below and one
                of our representatives will reach out shortly.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-container mx-auto px-5 md:px-10">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Contact Info */}
              <div className="lg:col-span-1">
                <div className="bg-logis-bg rounded-logis-lg p-8 sticky top-32">
                  <h2 className="text-xl font-display font-medium text-logis-text mb-6">
                    Contact Information
                  </h2>

                  <div className="space-y-6">
                    {/* Phone */}
                    <div>
                      <h3 className="text-sm font-medium text-logis-text-secondary mb-2">
                        Give us a call
                      </h3>
                      <a
                        href={contactInfo.phoneHref}
                        className="flex items-center gap-3 text-logis-text hover:text-primary transition-colors"
                      >
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <Phone className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium">{contactInfo.phone}</p>
                          <p className="text-sm text-logis-text-secondary">
                            {contactInfo.hours}
                          </p>
                        </div>
                      </a>
                    </div>

                    {/* Email */}
                    <div>
                      <h3 className="text-sm font-medium text-logis-text-secondary mb-2">
                        Send us an email
                      </h3>
                      <a
                        href={contactInfo.emailHref}
                        className="flex items-center gap-3 text-logis-text hover:text-primary transition-colors"
                      >
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <Mail className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium">{contactInfo.email}</p>
                          <p className="text-sm text-logis-text-secondary">24/7/365</p>
                        </div>
                      </a>
                    </div>

                    {/* Location */}
                    <div>
                      <h3 className="text-sm font-medium text-logis-text-secondary mb-2">
                        Our Location
                      </h3>
                      <div className="flex items-center gap-3 text-logis-text">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <MapPin className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium">{contactInfo.address}</p>
                          <p className="text-sm text-logis-text-secondary">
                            R2-Certified Facility
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Client Portal */}
                    <div className="pt-4 border-t border-logis-border">
                      <a
                        href={contactInfo.clientPortal}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-4 bg-white rounded-logis border border-logis-border hover:border-primary transition-colors"
                      >
                        <span className="font-medium text-logis-text">
                          Client Portal
                        </span>
                        <ExternalLink className="w-5 h-5 text-primary" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="bg-logis-bg rounded-logis-lg p-8">
                  <h2 className="text-xl font-display font-medium text-logis-text mb-6">
                    Send Us a Message
                  </h2>
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section (Placeholder) */}
        <section className="bg-logis-bg">
          <div className="max-w-container mx-auto px-5 md:px-10 py-20">
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-logis-lg h-80 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                <p className="text-logis-text font-medium">Springfield, Tennessee</p>
                <p className="text-logis-text-secondary">Serving 30+ States Nationwide</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
