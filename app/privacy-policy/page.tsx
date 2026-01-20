import { Metadata } from 'next';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | S3 Recycling Solutions',
  description:
    'S3 Recycling Solutions privacy policy. Learn how we collect, use, and protect your information.',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-logis-bg py-20 md:py-28">
          <div className="max-w-container mx-auto px-5 md:px-10">
            <div className="max-w-3xl">
              <h1 className="text-display-md md:text-display-lg font-display font-medium tracking-tighter text-logis-text mb-6">
                Privacy Policy
              </h1>
              <p className="text-body-lg text-logis-text-secondary">
                Last updated: January 2026
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-container mx-auto px-5 md:px-10">
            <div className="max-w-3xl mx-auto prose prose-lg prose-gray">
              <h2>Introduction</h2>
              <p>
                S3 Recycling Solutions (&ldquo;S3,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is committed
                to protecting your privacy. This Privacy Policy explains how we
                collect, use, disclose, and safeguard your information when you
                visit our website or use our services.
              </p>

              <h2>Information We Collect</h2>
              <h3>Personal Information</h3>
              <p>
                We may collect personal information that you voluntarily provide to
                us when you:
              </p>
              <ul>
                <li>Fill out a contact form or request a pickup</li>
                <li>Subscribe to our newsletter</li>
                <li>Request information about our services</li>
                <li>Submit equipment for recycling</li>
              </ul>
              <p>
                This information may include your name, email address, phone number,
                company name, and details about your equipment.
              </p>

              <h3>Automatically Collected Information</h3>
              <p>
                When you visit our website, we may automatically collect certain
                information about your device, including:
              </p>
              <ul>
                <li>IP address</li>
                <li>Browser type</li>
                <li>Operating system</li>
                <li>Pages visited and time spent on our site</li>
                <li>Referring website addresses</li>
              </ul>

              <h2>How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul>
                <li>Provide, operate, and maintain our services</li>
                <li>Respond to your inquiries and fulfill your requests</li>
                <li>Send you updates, marketing communications, and other information</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>

              <h2>Information Sharing</h2>
              <p>
                We do not sell, trade, or otherwise transfer your personal
                information to outside parties except in the following circumstances:
              </p>
              <ul>
                <li>
                  <strong>Service Providers:</strong> We may share information with
                  third-party service providers who assist us in operating our
                  website and conducting our business.
                </li>
                <li>
                  <strong>Legal Requirements:</strong> We may disclose information
                  when required by law or to protect our rights.
                </li>
                <li>
                  <strong>Business Transfers:</strong> In the event of a merger,
                  acquisition, or sale of assets, your information may be
                  transferred.
                </li>
              </ul>

              <h2>Data Security</h2>
              <p>
                We implement appropriate technical and organizational security
                measures to protect your personal information. However, no method of
                transmission over the Internet or electronic storage is 100% secure.
              </p>

              <h2>Your Rights</h2>
              <p>Depending on your location, you may have the right to:</p>
              <ul>
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt out of marketing communications</li>
              </ul>

              <h2>Cookies</h2>
              <p>
                Our website may use cookies and similar tracking technologies to
                enhance your experience. You can set your browser to refuse cookies,
                but some features of our website may not function properly.
              </p>

              <h2>Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites. We are not
                responsible for the privacy practices of these external sites.
              </p>

              <h2>Children&apos;s Privacy</h2>
              <p>
                Our services are not directed to individuals under the age of 18. We
                do not knowingly collect personal information from children.
              </p>

              <h2>Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify
                you of any changes by posting the new Privacy Policy on this page
                and updating the &ldquo;Last updated&rdquo; date.
              </p>

              <h2>Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy, please contact us:
              </p>
              <ul>
                <li>Email: info@s3rs.com</li>
                <li>Phone: 888-970-S3RS (888-970-7377)</li>
                <li>Address: Springfield, Tennessee</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-28 bg-logis-bg">
          <div className="max-w-container mx-auto px-5 md:px-10 text-center">
            <h2 className="text-heading-md font-display font-medium tracking-tighter text-logis-text mb-4">
              Have Questions?
            </h2>
            <p className="text-logis-text-secondary mb-8">
              If you have any questions about our privacy practices, please don&apos;t
              hesitate to contact us.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-700 text-white px-8 py-4 rounded-logis font-medium transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
