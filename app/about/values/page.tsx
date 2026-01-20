import { Metadata } from 'next';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Shield, Leaf, Heart, CheckCircle, Users, Star } from 'lucide-react';
import { companyValues } from '@/data/team';

export const metadata: Metadata = {
  title: 'Our Values | S3 Recycling Solutions',
  description:
    'Security, Sustainability, Stewardship - discover the core values that guide S3 Recycling Solutions in everything we do.',
};

const iconMap: Record<string, React.ElementType> = {
  shield: Shield,
  leaf: Leaf,
  heart: Heart,
  check: CheckCircle,
  users: Users,
  star: Star,
};

export default function ValuesPage() {
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
                What We Believe
              </span>
              <h1 className="text-display-md md:text-display-lg font-display font-medium tracking-tighter text-logis-text mb-6">
                Our Values
              </h1>
              <p className="text-body-lg text-logis-text-secondary">
                At S3, our values guide everything we do. Security, Sustainability,
                and Stewardship aren&apos;t just words in our name—they&apos;re the principles
                that shape our approach to e-waste recycling.
              </p>
            </div>
          </div>
        </section>

        {/* Core Values - Large */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-container mx-auto px-5 md:px-10">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Security */}
              <div className="bg-gradient-to-br from-primary to-primary-700 rounded-logis-xl p-8 text-white">
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-6">
                  <Shield className="w-8 h-8" />
                </div>
                <h2 className="text-2xl font-display font-medium mb-4">Security</h2>
                <p className="text-white/90">
                  We maintain the highest data security standards, ensuring your
                  sensitive information is protected throughout the entire
                  disposition process. Our R2 certification and NAID membership
                  demonstrate our commitment to security.
                </p>
              </div>

              {/* Sustainability */}
              <div className="bg-gradient-to-br from-secondary to-secondary-700 rounded-logis-xl p-8 text-white">
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-6">
                  <Leaf className="w-8 h-8" />
                </div>
                <h2 className="text-2xl font-display font-medium mb-4">
                  Sustainability
                </h2>
                <p className="text-white/90">
                  Our zero landfill policy and 95% reuse/recycle rate demonstrate
                  our commitment to environmental responsibility. We believe in
                  creating a cleaner, safer planet for future generations.
                </p>
              </div>

              {/* Stewardship */}
              <div className="bg-gradient-to-br from-accent-yellow to-accent-yellow-dark rounded-logis-xl p-8 text-logis-text">
                <div className="w-16 h-16 rounded-full bg-white/50 flex items-center justify-center mb-6">
                  <Heart className="w-8 h-8" />
                </div>
                <h2 className="text-2xl font-display font-medium mb-4">
                  Stewardship
                </h2>
                <p className="text-logis-text/90">
                  We take responsibility for the proper handling of electronic
                  assets, from pickup to final disposition. Our clients trust us to
                  be good stewards of their equipment and data.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Values */}
        <section className="py-20 md:py-28 bg-logis-bg">
          <div className="max-w-container mx-auto px-5 md:px-10">
            <div className="text-center mb-12">
              <h2 className="text-heading-lg font-display font-medium tracking-tighter text-logis-text mb-4">
                Guiding Principles
              </h2>
              <p className="text-logis-text-secondary max-w-2xl mx-auto">
                Beyond our core values, these principles guide our daily operations
                and interactions with clients, partners, and communities.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {companyValues.slice(3).map((value) => {
                const Icon = iconMap[value.icon] || CheckCircle;

                return (
                  <div
                    key={value.title}
                    className="bg-white rounded-logis-lg p-6 border border-logis-border"
                  >
                    <div className="w-12 h-12 rounded-logis bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-display font-medium text-logis-text mb-2">
                      {value.title}
                    </h3>
                    <p className="text-logis-text-secondary text-sm">
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Quote Section */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-container mx-auto px-5 md:px-10">
            <div className="max-w-3xl mx-auto text-center">
              <blockquote className="text-2xl md:text-3xl font-display text-logis-text leading-relaxed mb-6">
                &ldquo;Our greatest responsibility is to care for our team members and
                the communities in which we are located. Giving back is the
                cornerstone of the S3 story.&rdquo;
              </blockquote>
              <p className="text-logis-text-secondary">
                — Rod McDaniel, CEO
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-28 bg-primary">
          <div className="max-w-container mx-auto px-5 md:px-10 text-center">
            <h2 className="text-heading-lg font-display font-medium tracking-tighter text-white mb-6">
              Experience Our Values in Action
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              See how S3&apos;s commitment to security, sustainability, and stewardship
              translates into real results for our clients.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/about/process"
                className="inline-flex items-center gap-2 bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-logis font-medium transition-colors"
              >
                See Our Process
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
