import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import {
  Hero,
  ServicesGrid,
  StatsSection,
  ClientLogos,
  Testimonials,
  CTASection,
} from '@/components/landing';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ServicesGrid />
        <StatsSection />
        <ClientLogos />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
