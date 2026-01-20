import { Metadata } from 'next';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Linkedin, Mail } from 'lucide-react';
import { leadershipTeam } from '@/data/team';

export const metadata: Metadata = {
  title: 'Leadership Team | S3 Recycling Solutions',
  description:
    'Meet the leadership team at S3 Recycling Solutions. Our experienced executives guide our mission to provide sustainable e-waste solutions.',
};

export default function LeadershipPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-logis-bg py-20 md:py-28">
          <div className="w-full px-6 md:px-12 lg:px-20">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-logis-text-secondary hover:text-primary mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to About
            </Link>

            <div className="max-w-3xl">
              <span className="inline-block text-primary font-medium mb-4">
                Our Team
              </span>
              <h1 className="text-display-md md:text-display-lg font-display font-medium tracking-tighter text-logis-text mb-6">
                Leadership
              </h1>
              <p className="text-body-lg text-logis-text-secondary">
                Meet the experienced professionals who guide S3&apos;s mission to provide
                sustainable, secure e-waste solutions for businesses across America.
              </p>
            </div>
          </div>
        </section>

        {/* Team Grid */}
        <section className="py-20 md:py-28 bg-white">
          <div className="w-full px-6 md:px-12 lg:px-20">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {leadershipTeam.map((member) => (
                <div
                  key={member.id}
                  className="bg-logis-bg rounded-logis-lg overflow-hidden border border-logis-border"
                >
                  {/* Avatar */}
                  <div className="aspect-square bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <span className="text-6xl font-display font-bold text-white">
                      {member.name.charAt(0)}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h2 className="text-xl font-display font-medium text-logis-text mb-1">
                      {member.name}
                    </h2>
                    <p className="text-primary font-medium mb-4">{member.role}</p>
                    <p className="text-logis-text-secondary text-sm mb-4">
                      {member.bio}
                    </p>

                    {/* Social Links */}
                    <div className="flex items-center gap-3">
                      <button
                        className="w-10 h-10 rounded-full bg-white border border-logis-border flex items-center justify-center text-logis-text-secondary hover:text-primary hover:border-primary transition-colors"
                        aria-label="LinkedIn"
                      >
                        <Linkedin className="w-5 h-5" />
                      </button>
                      <button
                        className="w-10 h-10 rounded-full bg-white border border-logis-border flex items-center justify-center text-logis-text-secondary hover:text-primary hover:border-primary transition-colors"
                        aria-label="Email"
                      >
                        <Mail className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Join Our Team CTA */}
        <section className="py-20 md:py-28 bg-primary">
          <div className="w-full px-6 md:px-12 lg:px-20 text-center">
            <h2 className="text-heading-lg font-display font-medium tracking-tighter text-white mb-6">
              Join Our Team
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              We&apos;re always looking for talented individuals who share our passion
              for sustainability and customer service. Explore career opportunities
              at S3.
            </p>
            <Link
              href="/careers"
              className="inline-flex items-center gap-2 bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-logis font-medium transition-colors"
            >
              View Open Positions
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
