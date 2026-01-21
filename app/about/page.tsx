import { Metadata } from 'next';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import PageHero from '@/components/shared/PageHero';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Shield, Leaf, Award, Users, MapPin, Calendar } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us | S3 Recycling Solutions',
  description:
    'Learn about S3 Recycling Solutions - a leader in IT asset disposition and e-waste recycling. R2 certified, minority-owned, serving 30+ states.',
};

const certifications = [
  { name: 'R2 Certified', description: 'Electronics recycling industry\'s top credential' },
  { name: 'ISO 14001', description: 'Environmental management system certification' },
  { name: 'ISO 45001', description: 'Occupational health and safety certification' },
  { name: 'MBE Certified', description: 'Certified minority-owned business' },
];

const milestones = [
  { year: '2007', title: 'Founded', description: 'S3 Recycling Solutions established in Springfield, TN' },
  { year: '2018', title: 'R2 Certification', description: 'Achieved R2 certification for responsible recycling' },
  { year: '2021', title: 'National Expansion', description: 'Expanded to serve clients in 30+ states' },
  { year: '2022', title: 'Inc. 5000', description: 'Named to Inc. 5000 fastest-growing companies' },
  { year: '2024', title: 'R2v3 Certification', description: 'Achieved latest R2v3 certification standard' },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <PageHero>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-primary font-medium mb-4">
                About S3
              </span>
              <h1 className="text-display-md md:text-display-lg font-display font-medium tracking-tighter text-logis-text mb-6">
                Who We Are
              </h1>
              <p className="text-body-lg text-logis-text-secondary mb-6">
                Headquartered in Springfield, Tennessee, S3 Recycling Solutions&apos;
                vision is to combat our planet&apos;s e-waste epidemic by employing
                both environmentally and financially responsible processes for a
                stronger, safer global community.
              </p>
              <p className="text-body-lg text-logis-text-secondary mb-8">
                We help our customers reduce the cost of ownership of their
                electronic technology assets, while providing peace of mind that
                data security is maintained at the highest industry standards.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/about/leadership"
                  className="inline-flex items-center gap-2 bg-primary hover:bg-primary-700 text-white px-6 py-3 rounded-logis font-medium transition-colors"
                >
                  Meet Our Team
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/about/values"
                  className="inline-flex items-center gap-2 border-2 border-logis-border hover:border-primary text-logis-text px-6 py-3 rounded-logis font-medium transition-colors"
                >
                  Our Values
                </Link>
              </div>
            </div>

            {/* Stats Card */}
            <div className="bg-white/80 backdrop-blur-sm rounded-logis-lg p-8 border border-white/50 shadow-lg">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-3xl font-display font-bold text-logis-text">
                    2007
                  </p>
                  <p className="text-sm text-logis-text-secondary">Founded</p>
                </div>
                <div className="text-center p-4">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-3xl font-display font-bold text-logis-text">
                    30+
                  </p>
                  <p className="text-sm text-logis-text-secondary">States Served</p>
                </div>
                <div className="text-center p-4">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                    <Leaf className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-3xl font-display font-bold text-logis-text">
                    95%
                  </p>
                  <p className="text-sm text-logis-text-secondary">Reuse Rate</p>
                </div>
                <div className="text-center p-4">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-3xl font-display font-bold text-logis-text">
                    0%
                  </p>
                  <p className="text-sm text-logis-text-secondary">Landfill</p>
                </div>
              </div>
            </div>
          </div>
        </PageHero>

        {/* Mission Section */}
        <section className="py-20 md:py-28 bg-white">
          <div className="w-full px-6 md:px-12 lg:px-20">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-heading-lg md:text-heading-xl font-display font-medium tracking-tighter text-logis-text mb-6">
                Our Mission
              </h2>
              <p className="text-xl text-logis-text-secondary leading-relaxed">
                S3 Recycling Solutions is a full-service technology recycling firm
                with an emphasis on cost-effective processes for receiving, sorting,
                repurposing and remarketing electronic assets. Since our inception
                in 2007, we have supported a diverse client base throughout the
                United States and Canada.
              </p>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-20 md:py-28 bg-logis-bg">
          <div className="w-full px-6 md:px-12 lg:px-20">
            <div className="text-center mb-12">
              <h2 className="text-heading-lg font-display font-medium tracking-tighter text-logis-text mb-4">
                Certifications & Accreditations
              </h2>
              <p className="text-logis-text-secondary max-w-2xl mx-auto">
                Our certifications demonstrate our commitment to the highest
                standards of quality, security, and environmental responsibility.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications.map((cert) => (
                <div
                  key={cert.name}
                  className="bg-white rounded-logis-lg p-6 text-center border border-logis-border"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Award className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-display font-medium text-logis-text mb-2">
                    {cert.name}
                  </h3>
                  <p className="text-sm text-logis-text-secondary">
                    {cert.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 md:py-28 bg-white">
          <div className="w-full px-6 md:px-12 lg:px-20">
            <div className="text-center mb-12">
              <h2 className="text-heading-lg font-display font-medium tracking-tighter text-logis-text mb-4">
                Our Journey
              </h2>
              <p className="text-logis-text-secondary max-w-2xl mx-auto">
                From our founding in Springfield, Tennessee to becoming a national
                leader in e-waste recycling.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-logis-border md:left-1/2 md:-translate-x-0.5" />

                {milestones.map((milestone, index) => (
                  <div
                    key={milestone.year}
                    className={`relative flex items-start gap-6 mb-8 last:mb-0 md:gap-12 ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* Dot */}
                    <div className="absolute left-8 w-4 h-4 rounded-full bg-primary border-4 border-white shadow md:left-1/2 md:-translate-x-1/2" />

                    {/* Content */}
                    <div
                      className={`ml-16 md:ml-0 md:w-1/2 ${
                        index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'
                      }`}
                    >
                      <span className="inline-block text-primary font-bold text-lg mb-1">
                        {milestone.year}
                      </span>
                      <h3 className="font-display font-medium text-logis-text mb-1">
                        {milestone.title}
                      </h3>
                      <p className="text-sm text-logis-text-secondary">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Community Section */}
        <section className="py-20 md:py-28 bg-primary text-white">
          <div className="w-full px-6 md:px-12 lg:px-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-6">
                  <Users className="w-8 h-8" />
                </div>
                <h2 className="text-heading-lg font-display font-medium tracking-tighter mb-6">
                  Community Commitment
                </h2>
                <p className="text-lg text-white/80 mb-6">
                  S3 takes great care to continually give back to the community
                  through various avenues. We believe in supporting the communities
                  where we operate.
                </p>
                <blockquote className="border-l-4 border-white/30 pl-6 italic text-white/90">
                  &ldquo;Our greatest responsibility is to care for our team members and
                  the communities in which we are located. Giving back is the
                  cornerstone of the S3 story.&rdquo;
                  <footer className="mt-2 text-white/70 not-italic">
                    — Rod McDaniel, CEO
                  </footer>
                </blockquote>
              </div>

              <div className="bg-white/10 rounded-logis-lg p-8">
                <h3 className="text-xl font-display font-medium mb-6">
                  Diversity & Inclusion
                </h3>
                <p className="text-white/80 mb-4">
                  S3 is a culturally diverse team. We foster an inclusive environment
                  and are committed to an equal opportunity workplace.
                </p>
                <p className="text-white/80">
                  S3 is certified nationally and by the State of Tennessee as a
                  minority-owned business, and we are proud to have diversity
                  displayed throughout all levels of the organization from the
                  labor force to executive leadership.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-28 bg-logis-bg">
          <div className="w-full px-6 md:px-12 lg:px-20 text-center">
            <h2 className="text-heading-lg font-display font-medium tracking-tighter text-logis-text mb-6">
              Ready to Partner with S3?
            </h2>
            <p className="text-logis-text-secondary mb-8 max-w-2xl mx-auto">
              Join the many organizations that trust S3 for their e-waste
              recycling needs. Contact us today to learn how we can help.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-700 text-white px-8 py-4 rounded-logis font-medium transition-colors"
              >
                Contact Us
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/about/process"
                className="inline-flex items-center gap-2 border-2 border-logis-border hover:border-primary text-logis-text px-8 py-4 rounded-logis font-medium transition-colors"
              >
                Learn Our Process
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
