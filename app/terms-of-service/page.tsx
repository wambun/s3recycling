import { Metadata } from 'next';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service | S3 Recycling Solutions',
  description:
    'Terms of Service for S3 Recycling Solutions. Read our terms and conditions for using our e-waste recycling and IT asset disposition services.',
};

export default function TermsOfServicePage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-logis-bg py-20 md:py-28">
          <div className="w-full px-6 md:px-12 lg:px-20">
            <div className="max-w-3xl">
              <h1 className="text-display-md md:text-display-lg font-display font-medium tracking-tighter text-logis-text mb-6">
                Terms of Service
              </h1>
              <p className="text-body-lg text-logis-text-secondary">
                Last updated: January 2026
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 md:py-28 bg-white">
          <div className="w-full px-6 md:px-12 lg:px-20">
            <div className="max-w-3xl mx-auto prose prose-lg prose-gray">
              <h2>Agreement to Terms</h2>
              <p>
                By accessing or using the services provided by S3 Recycling Solutions
                (&ldquo;S3,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;), you agree to be bound by these
                Terms of Service. If you disagree with any part of these terms, you may
                not access our services.
              </p>

              <h2>Description of Services</h2>
              <p>
                S3 Recycling Solutions provides IT asset disposition (ITAD), e-waste
                recycling, data destruction, and related services. Our services include
                but are not limited to:
              </p>
              <ul>
                <li>Collection and pickup of electronic waste and IT equipment</li>
                <li>Secure data destruction and sanitization</li>
                <li>Environmentally responsible recycling and disposal</li>
                <li>Asset remarketing and resale</li>
                <li>Documentation and certification of destruction</li>
                <li>Reverse logistics and supply chain services</li>
              </ul>

              <h2>Service Terms</h2>
              <h3>Equipment Acceptance</h3>
              <p>
                S3 reserves the right to refuse any equipment that we determine, in our
                sole discretion, to be hazardous, illegal, or otherwise unsuitable for
                processing. We do not accept equipment that contains radioactive
                materials, biological hazards, or other dangerous substances not
                typically found in standard electronic equipment.
              </p>

              <h3>Data Destruction</h3>
              <p>
                When data destruction services are requested, S3 will perform data
                sanitization using industry-standard methods consistent with our R2
                certification requirements. While we take every reasonable precaution to
                ensure complete data destruction, customers are responsible for removing
                any sensitive data they wish to retain prior to equipment transfer.
              </p>

              <h3>Chain of Custody</h3>
              <p>
                We maintain strict chain of custody procedures for all equipment from
                the point of pickup through final disposition. Documentation will be
                provided upon request, including inventory reports, certificates of
                destruction, and recycling certificates.
              </p>

              <h2>Customer Responsibilities</h2>
              <p>When using our services, you agree to:</p>
              <ul>
                <li>
                  Provide accurate information about the equipment being submitted for
                  processing
                </li>
                <li>
                  Ensure you have the legal authority to dispose of the equipment
                </li>
                <li>
                  Backup any data you wish to retain before transferring equipment to S3
                </li>
                <li>
                  Disclose any known hazards or special handling requirements for the
                  equipment
                </li>
                <li>
                  Comply with all applicable laws and regulations regarding the disposal
                  of electronic equipment
                </li>
              </ul>

              <h2>Intellectual Property</h2>
              <p>
                All content on the S3 Recycling Solutions website, including text,
                graphics, logos, images, and software, is the property of S3 or its
                content suppliers and is protected by United States and international
                copyright laws. You may not reproduce, distribute, modify, or create
                derivative works from any content without our express written consent.
              </p>

              <h2>Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by applicable law, S3 Recycling
                Solutions shall not be liable for any indirect, incidental, special,
                consequential, or punitive damages, including without limitation, loss
                of profits, data, use, goodwill, or other intangible losses, resulting
                from:
              </p>
              <ul>
                <li>Your use or inability to use our services</li>
                <li>
                  Any unauthorized access to or use of our servers and/or any personal
                  information stored therein
                </li>
                <li>
                  Any interruption or cessation of transmission to or from our services
                </li>
                <li>
                  Any bugs, viruses, trojan horses, or the like that may be transmitted
                  to or through our services by any third party
                </li>
              </ul>

              <h2>Indemnification</h2>
              <p>
                You agree to defend, indemnify, and hold harmless S3 Recycling Solutions
                and its officers, directors, employees, contractors, agents, licensors,
                and suppliers from and against any claims, liabilities, damages,
                judgments, awards, losses, costs, expenses, or fees arising out of or
                relating to your violation of these Terms of Service or your use of our
                services.
              </p>

              <h2>Governing Law</h2>
              <p>
                These Terms of Service shall be governed by and construed in accordance
                with the laws of the State of Tennessee, without regard to its conflict
                of law provisions. Any legal action or proceeding relating to your
                access to or use of our services shall be instituted in a state or
                federal court located in Tennessee.
              </p>

              <h2>Modifications to Terms</h2>
              <p>
                We reserve the right to modify these Terms of Service at any time. We
                will provide notice of any material changes by posting the new Terms of
                Service on this page and updating the &ldquo;Last updated&rdquo; date. Your
                continued use of our services after any such changes constitutes your
                acceptance of the new Terms of Service.
              </p>

              <h2>Severability</h2>
              <p>
                If any provision of these Terms of Service is found to be unenforceable
                or invalid, that provision will be limited or eliminated to the minimum
                extent necessary so that these Terms of Service will otherwise remain in
                full force and effect.
              </p>

              <h2>Entire Agreement</h2>
              <p>
                These Terms of Service constitute the entire agreement between you and
                S3 Recycling Solutions regarding the use of our services, superseding
                any prior agreements between you and S3 regarding the same subject
                matter.
              </p>

              <h2>Contact Information</h2>
              <p>
                If you have any questions about these Terms of Service, please contact
                us:
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
          <div className="w-full px-6 md:px-12 lg:px-20 text-center">
            <h2 className="text-heading-md font-display font-medium tracking-tighter text-logis-text mb-4">
              Have Questions?
            </h2>
            <p className="text-logis-text-secondary mb-8">
              If you have any questions about our terms of service, please don&apos;t
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
