import { Metadata } from 'next';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import PageHero from '@/components/shared/PageHero';
import Link from 'next/link';
import { ArrowRight, Calendar, User } from 'lucide-react';
import { blogPosts } from '@/data/blog';
import BlogImagePlaceholder from '@/components/shared/BlogImagePlaceholder';

export const metadata: Metadata = {
  title: 'News & Blog | S3 Recycling Solutions',
  description:
    'Stay updated with the latest news, awards, and insights from S3 Recycling Solutions.',
};

function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function BlogPage() {
  const featuredPost = blogPosts[0];
  const otherPosts = blogPosts.slice(1);

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <PageHero>
          <div className="max-w-3xl">
            <span className="inline-block text-primary font-medium mb-4">
              News & Updates
            </span>
            <h1 className="text-display-md md:text-display-lg font-display font-medium tracking-tighter text-logis-text mb-6">
              Latest News
            </h1>
            <p className="text-body-lg text-logis-text-secondary">
              Stay updated with the latest news, awards, and insights from S3
              Recycling Solutions.
            </p>
          </div>
        </PageHero>

        {/* Featured Post */}
        <section className="py-20 md:py-28 bg-white">
          <div className="w-full px-6 md:px-12 lg:px-20">
            <Link
              href={`/blog/${featuredPost.slug}`}
              className="group block bg-logis-bg rounded-logis-lg overflow-hidden hover:shadow-lg transition-all"
            >
              <div className="grid md:grid-cols-2 gap-8">
                {/* Image */}
                <div className="aspect-video md:aspect-auto min-h-[300px]">
                  <BlogImagePlaceholder category={featuredPost.category} size="lg" />
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col justify-center">
                  <span className="inline-block bg-primary/10 text-primary text-sm font-medium px-3 py-1 rounded-full mb-4 w-fit">
                    {featuredPost.category}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-display font-medium text-logis-text mb-4 group-hover:text-primary transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-logis-text-secondary mb-6">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-6 text-sm text-logis-text-muted mb-6">
                    <span className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {formatDate(featuredPost.date)}
                    </span>
                    <span className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      {featuredPost.author}
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Other Posts */}
        <section className="py-20 md:py-28 bg-logis-bg">
          <div className="w-full px-6 md:px-12 lg:px-20">
            <h2 className="text-heading-lg font-display font-medium tracking-tighter text-logis-text mb-10">
              More News
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group block bg-white rounded-logis-lg overflow-hidden hover:shadow-lg transition-all"
                >
                  {/* Image */}
                  <div className="aspect-video">
                    <BlogImagePlaceholder category={post.category} size="sm" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <span className="inline-block bg-primary/10 text-primary text-xs font-medium px-2 py-1 rounded-full mb-3">
                      {post.category}
                    </span>
                    <h3 className="text-lg font-display font-medium text-logis-text mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-logis-text-secondary mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-logis-text-muted">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {formatDate(post.date)}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-20 md:py-28 bg-primary">
          <div className="w-full px-6 md:px-12 lg:px-20 text-center">
            <h2 className="text-heading-lg font-display font-medium tracking-tighter text-white mb-6">
              Stay Updated
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter to receive the latest news and updates
              from S3 Recycling Solutions.
            </p>
            <form className="max-w-md mx-auto flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-logis bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button
                type="submit"
                className="bg-white text-primary hover:bg-gray-100 px-6 py-3 rounded-logis font-medium transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
