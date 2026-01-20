import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react';
import { footerNavigation, contactInfo } from '@/data/navigation';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-logis-dark text-white">
      {/* Main Footer */}
      <div className="max-w-container mx-auto px-5 md:px-10 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/static/images/logo-white.png"
                alt="S3 Recycling Solutions"
                width={150}
                height={58}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-gray-400 mb-6">
              Security. Sustainability. Stewardship.
            </p>
            <p className="text-gray-400 text-sm">
              Hassle-free e-waste solutions for businesses. R2-certified with a
              zero landfill policy.
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-lg font-display font-medium mb-6">Solutions</h4>
            <ul className="space-y-3">
              {footerNavigation.solutions.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-display font-medium mb-6">Company</h4>
            <ul className="space-y-3">
              {footerNavigation.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-display font-medium mb-6">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={contactInfo.phoneHref}
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
                >
                  <Phone className="w-5 h-5 text-primary" />
                  <span>{contactInfo.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={contactInfo.emailHref}
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
                >
                  <Mail className="w-5 h-5 text-primary" />
                  <span>{contactInfo.email}</span>
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-primary" />
                <span>{contactInfo.address}</span>
              </li>
              <li className="pt-2">
                <a
                  href={contactInfo.clientPortal}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary-400 transition-colors"
                >
                  <span>Client Portal</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
            <Image
              src="/static/images/certifications/r2-cert.png"
              alt="R2 Certified"
              width={80}
              height={40}
              className="h-10 w-auto"
            />
            <Image
              src="/static/images/certifications/iso-14001.png"
              alt="ISO 14001"
              width={80}
              height={40}
              className="h-10 w-auto"
            />
            <Image
              src="/static/images/certifications/iso-45001.png"
              alt="ISO 45001"
              width={80}
              height={40}
              className="h-10 w-auto"
            />
            <Image
              src="/static/images/certifications/mbe.png"
              alt="MBE Certified"
              width={80}
              height={40}
              className="h-10 w-auto"
            />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-container mx-auto px-5 md:px-10 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              &copy; {currentYear} S3 Recycling Solutions. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/privacy-policy"
                className="text-gray-500 hover:text-white text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/contact"
                className="text-gray-500 hover:text-white text-sm transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
