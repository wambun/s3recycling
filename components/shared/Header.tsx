'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Phone, ExternalLink } from 'lucide-react';
import { mainNavigation, contactInfo } from '@/data/navigation';
import Logo from './Logo';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary text-white text-sm py-2">
        <div className="max-w-container mx-auto px-5 md:px-10 flex items-center justify-between">
          <p className="hidden sm:block">
            We are R2-Certified and have a Zero Landfill Policy!
          </p>
          <div className="flex items-center gap-4 sm:gap-6">
            <a
              href={contactInfo.phoneHref}
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <Phone className="w-4 h-4" />
              <span>Call today: {contactInfo.phone}</span>
            </a>
            <a
              href={contactInfo.clientPortal}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-1 hover:opacity-80 transition-opacity"
            >
              <span>Client Portal</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-logis-border">
        <div className="max-w-container mx-auto px-5 md:px-10">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Logo variant="dark" className="h-10 w-auto" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {mainNavigation.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() =>
                    item.children && setActiveDropdown(item.label)
                  }
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className="flex items-center gap-1 text-logis-text hover:text-primary transition-colors font-medium"
                  >
                    {item.label}
                    {item.children && (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </Link>

                  {/* Dropdown */}
                  <AnimatePresence>
                    {item.children && activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 pt-2 w-64"
                      >
                        <div className="bg-white rounded-logis shadow-lg border border-logis-border py-2">
                          {item.children.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              className="block px-4 py-2 text-logis-text hover:bg-logis-bg hover:text-primary transition-colors"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <Link
                href="/pickup-request"
                className="bg-primary hover:bg-primary-700 text-white px-6 py-3 rounded-logis font-medium transition-colors"
              >
                Request Pickup
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-logis-border bg-white"
            >
              <nav className="max-w-container mx-auto px-5 py-4">
                {mainNavigation.map((item) => (
                  <div key={item.label} className="border-b border-logis-border last:border-0">
                    <Link
                      href={item.href}
                      className="block py-3 text-logis-text font-medium"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                    {item.children && (
                      <div className="pl-4 pb-3">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="block py-2 text-logis-text-secondary hover:text-primary"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <Link
                  href="/pickup-request"
                  className="block mt-4 bg-primary hover:bg-primary-700 text-white text-center px-6 py-3 rounded-logis font-medium transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Request Pickup
                </Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Header;
