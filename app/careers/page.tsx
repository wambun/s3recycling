import { Metadata } from 'next';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import PageHero from '@/components/shared/PageHero';
import Link from 'next/link';
import { ArrowRight, Users, Heart, Leaf, Award, MapPin, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Careers | S3 Recycling Solutions',
  description:
    'Join the S3 team. Explore career opportunities at S3 Recycling Solutions and help us combat e-waste.',
};

const benefits = [
  {
    icon: Heart,
    title: 'Health & Wellness',
    description: 'Comprehensive health insurance and wellness programs.',
  },
  {
    icon: Users,
    title: 'Team Culture',
    description: 'Collaborative, inclusive environment where everyone matters.',
  },
  {
    icon: Leaf,
    title: 'Make an Impact',
    description: 'Work that directly contributes to environmental sustainability.',
  },
  {
    icon: Award,
    title: 'Growth Opportunities',
    description: 'Career development and advancement opportunities.',
  },
];

const openPositions = [
  {
    title: 'Warehouse Associate',
    department: 'Operations',
    location: 'Springfield, TN',
    type: 'Full-time',
  },
  {
    title: 'IT Asset Technician',
    department: 'Processing',
    location: 'Springfield, TN',
    type: 'Full-time',
  },
  {
    title: 'Logistics Coordinator',
    department: 'Logistics',
    location: 'Springfield, TN',
    type: 'Full-time',
  },
  {
    title: 'Account Manager',
    department: 'Sales',
    location: 'Remote',
    type: 'Full-time',
  },
];

export default function CareersPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <PageHero>
          <div className="max-w-3xl">
            <span className="inline-block text-primary font-medium mb-4">
              Join Our Team
            </span>
            <h1 className="text-display-md md:text-display-lg font-display font-medium tracking-tighter text-logis-text mb-6">
              Careers at S3
            </h1>
            <p className="text-body-lg text-logis-text-secondary mb-8">
              Join a team that&apos;s making a difference. At S3, we&apos;re committed to
              creating a sustainable future while building rewarding careers for
              our team members.
            </p>
            <a
              href="#open-positions"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-700 text-white px-8 py-4 rounded-logis font-medium transition-colors"
            >
              View Open Positions
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </PageHero>

        {/* Why S3 */}
        <section className="py-20 md:py-28 bg-white">
          <div className="w-full px-6 md:px-12 lg:px-20">
            <div className="text-center mb-12">
              <h2 className="text-heading-lg font-display font-medium tracking-tighter text-logis-text mb-4">
                Why Work at S3?
              </h2>
              <p className="text-logis-text-secondary max-w-2xl mx-auto">
                S3 is more than a job—it&apos;s an opportunity to make a meaningful
                impact on the environment while growing your career.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit) => {
                const Icon = benefit.icon;

                return (
                  <div
                    key={benefit.title}
                    className="bg-logis-bg rounded-logis-lg p-6 text-center"
                  >
                    <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-display font-medium text-logis-text mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-logis-text-secondary">
                      {benefit.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Culture Section */}
        <section className="py-20 md:py-28 bg-primary text-white">
          <div className="w-full px-6 md:px-12 lg:px-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-heading-lg font-display font-medium tracking-tighter mb-6">
                  Our Culture
                </h2>
                <p className="text-lg text-white/80 mb-6">
                  S3 is a culturally diverse team. We foster an inclusive environment
                  and are committed to an equal opportunity workplace.
                </p>
                <p className="text-lg text-white/80 mb-6">
                  As a certified minority-owned business, we&apos;re proud to have
                  diversity displayed throughout all levels of the organization
                  from the labor force to executive leadership.
                </p>
                <blockquote className="border-l-4 border-white/30 pl-6 italic text-white/90">
                  &ldquo;Our greatest responsibility is to care for our team members and
                  the communities in which we are located.&rdquo;
                  <footer className="mt-2 text-white/70 not-italic">
                    — Rod McDaniel, CEO
                  </footer>
                </blockquote>
              </div>

              <div className="bg-white/10 rounded-logis-lg p-8">
                <h3 className="text-xl font-display font-medium mb-6">
                  Recognition
                </h3>
                <ul className="space-y-4">
                  {[
                    'Inc. 5000 Fastest-Growing Companies',
                    'Best Places to Work Honoree',
                    'MBE Certified Business',
                    'R2 Certified Facility',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                        <Award className="w-4 h-4" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section id="open-positions" className="py-20 md:py-28 bg-logis-bg">
          <div className="w-full px-6 md:px-12 lg:px-20">
            <div className="text-center mb-12">
              <h2 className="text-heading-lg font-display font-medium tracking-tighter text-logis-text mb-4">
                Open Positions
              </h2>
              <p className="text-logis-text-secondary max-w-2xl mx-auto">
                Explore current opportunities to join the S3 team.
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              {openPositions.map((position) => (
                <div
                  key={position.title}
                  className="bg-white rounded-logis-lg p-6 border border-logis-border hover:border-primary transition-colors"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-display font-medium text-logis-text mb-2">
                        {position.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-logis-text-secondary">
                        <span>{position.department}</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {position.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {position.type}
                        </span>
                      </div>
                    </div>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 bg-primary hover:bg-primary-700 text-white px-6 py-3 rounded-logis font-medium transition-colors whitespace-nowrap"
                    >
                      Apply Now
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-logis-text-secondary mb-4">
                Don&apos;t see a position that fits? We&apos;re always looking for talented
                individuals.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border-2 border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 rounded-logis font-medium transition-colors"
              >
                Send Your Resume
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
