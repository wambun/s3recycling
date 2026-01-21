import { Metadata } from 'next';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cookie Policy | S3 Recycling Solutions',
  description:
    'Cookie Policy for S3 Recycling Solutions. Learn how we use cookies and similar technologies on our website.',
};

export default function CookiePolicyPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-logis-bg py-20 md:py-28">
          <div className="w-full px-6 md:px-12 lg:px-20">
            <div className="max-w-3xl">
              <h1 className="text-display-md md:text-display-lg font-display font-medium tracking-tighter text-logis-text mb-6">
                Cookie Policy
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
              <h2>What Are Cookies?</h2>
              <p>
                Cookies are small text files that are placed on your computer or mobile
                device when you visit a website. They are widely used to make websites
                work more efficiently and to provide information to the owners of the
                site.
              </p>
              <p>
                Cookies allow websites to recognize your device and remember information
                about your visit, such as your preferred language and other settings.
                This can make your next visit easier and the site more useful to you.
              </p>

              <h2>How We Use Cookies</h2>
              <p>
                S3 Recycling Solutions uses cookies for several purposes, including:
              </p>

              <h3>Essential Cookies</h3>
              <p>
                These cookies are necessary for the website to function properly. They
                enable basic functions like page navigation and access to secure areas
                of the website. The website cannot function properly without these
                cookies.
              </p>
              <ul>
                <li>Session management</li>
                <li>Security features</li>
                <li>Load balancing</li>
              </ul>

              <h3>Analytics Cookies</h3>
              <p>
                We use analytics cookies to understand how visitors interact with our
                website. These cookies help us collect information about the number of
                visitors, where visitors come from, and what pages they visit. This
                information is used to improve our website and services.
              </p>
              <ul>
                <li>
                  <strong>Google Analytics:</strong> We use Google Analytics to analyze
                  website traffic and usage patterns. Google Analytics uses cookies to
                  collect information about how visitors use our site.
                </li>
                <li>
                  <strong>Vercel Analytics:</strong> We use Vercel Analytics to monitor
                  website performance and user experience metrics.
                </li>
              </ul>

              <h3>Functional Cookies</h3>
              <p>
                These cookies enable enhanced functionality and personalization. They
                may be set by us or by third-party providers whose services we have
                added to our pages.
              </p>
              <ul>
                <li>Remembering your preferences and settings</li>
                <li>Providing enhanced features</li>
                <li>Customizing content based on your interests</li>
              </ul>

              <h3>Marketing Cookies</h3>
              <p>
                These cookies may be set through our site by our advertising partners.
                They may be used to build a profile of your interests and show you
                relevant advertisements on other sites.
              </p>

              <h2>Third-Party Cookies</h2>
              <p>
                In addition to our own cookies, we may also use various third-party
                cookies to report usage statistics, deliver advertisements, and provide
                other features. These third parties include:
              </p>
              <ul>
                <li>Google (Analytics and Advertising)</li>
                <li>Vercel (Analytics and Performance)</li>
                <li>LinkedIn (Social sharing and advertising)</li>
                <li>Facebook (Social sharing and advertising)</li>
              </ul>

              <h2>Managing Cookies</h2>
              <p>
                Most web browsers allow you to control cookies through their settings.
                You can usually find these settings in the &ldquo;Options&rdquo; or &ldquo;Preferences&rdquo;
                menu of your browser. Here&apos;s how to manage cookies in popular browsers:
              </p>
              <ul>
                <li>
                  <strong>Google Chrome:</strong> Settings &gt; Privacy and security &gt; Cookies
                  and other site data
                </li>
                <li>
                  <strong>Mozilla Firefox:</strong> Options &gt; Privacy &amp; Security &gt;
                  Cookies and Site Data
                </li>
                <li>
                  <strong>Safari:</strong> Preferences &gt; Privacy &gt; Cookies and website
                  data
                </li>
                <li>
                  <strong>Microsoft Edge:</strong> Settings &gt; Cookies and site permissions
                  &gt; Cookies and site data
                </li>
              </ul>
              <p>
                Please note that blocking some types of cookies may impact your
                experience on our website and the services we are able to offer.
              </p>

              <h2>Cookie Consent</h2>
              <p>
                When you first visit our website, you will be asked to consent to the
                use of cookies. You can choose to accept all cookies, reject
                non-essential cookies, or customize your preferences. You can change
                your cookie preferences at any time by adjusting your browser settings.
              </p>

              <h2>Data Retention</h2>
              <p>
                The length of time that a cookie remains on your device depends on the
                type of cookie:
              </p>
              <ul>
                <li>
                  <strong>Session cookies:</strong> These cookies are temporary and are
                  deleted when you close your browser.
                </li>
                <li>
                  <strong>Persistent cookies:</strong> These cookies remain on your
                  device for a set period of time (typically 1-2 years) or until you
                  delete them.
                </li>
              </ul>

              <h2>Updates to This Policy</h2>
              <p>
                We may update this Cookie Policy from time to time to reflect changes in
                our practices or for other operational, legal, or regulatory reasons. We
                encourage you to review this policy periodically for the latest
                information about our use of cookies.
              </p>

              <h2>Contact Us</h2>
              <p>
                If you have any questions about our use of cookies or this Cookie
                Policy, please contact us:
              </p>
              <ul>
                <li>Email: info@s3rs.com</li>
                <li>Phone: 888-970-S3RS (888-970-7377)</li>
                <li>Address: Springfield, Tennessee</li>
              </ul>

              <h2>Related Policies</h2>
              <p>
                For more information about how we handle your personal data, please
                review our{' '}
                <Link href="/privacy-policy" className="text-primary hover:underline">
                  Privacy Policy
                </Link>
                .
              </p>
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
              If you have any questions about our cookie practices, please don&apos;t
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
