'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Phone, Shield, Leaf, Award, Recycle, CheckCircle } from 'lucide-react';

const orbitingCards = [
  {
    id: 'satisfaction',
    icon: CheckCircle,
    iconBg: 'bg-green-100',
    iconColor: 'text-green-600',
    value: '100%',
    label: 'Satisfaction Rate',
    angle: 315, // Top-left position
  },
  {
    id: 'landfill',
    icon: Shield,
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    value: '0%',
    label: 'Landfill Rate',
    angle: 45, // Top-right position
  },
  {
    id: 'reuse',
    icon: Leaf,
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600',
    value: '95%',
    label: 'Reuse Rate',
    angle: 135, // Bottom-right position
  },
  {
    id: 'states',
    icon: Award,
    iconBg: 'bg-amber-100',
    iconColor: 'text-amber-600',
    value: '30+',
    label: 'States Served',
    angle: 225, // Bottom-left position
  },
];

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-logis-bg via-white to-logis-bg overflow-hidden min-h-[90vh] flex items-center">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large gradient orb */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-primary/20 to-secondary/10 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
          className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-secondary/20 to-primary/10 blur-3xl"
        />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="w-full px-6 md:px-12 lg:px-20 py-20 md:py-28 lg:py-32 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-primary/10 text-primary px-5 py-2.5 rounded-full mb-8 border border-primary/20"
            >
              <Shield className="w-4 h-4" />
              <span className="text-sm font-semibold tracking-wide">R2v3 Certified • Zero Landfill Policy</span>
            </motion.div>

            {/* Headline */}
            <h1 className="text-[2.75rem] md:text-[3.5rem] lg:text-[4.25rem] font-display font-semibold tracking-tight text-logis-text mb-6 leading-[1.1]">
              Security.{' '}
              <span className="text-primary relative">
                Sustainability.
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-primary/30" viewBox="0 0 200 12" preserveAspectRatio="none">
                  <path d="M0 9c50-6 100-6 200 0" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round"/>
                </svg>
              </span>{' '}
              <br className="hidden md:block" />
              Stewardship.
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-logis-text-secondary mb-10 max-w-xl leading-relaxed">
              Enterprise e-waste solutions that protect your data, the environment, and your bottom line.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href="/pickup-request"
                className="group inline-flex items-center justify-center gap-3 bg-primary hover:bg-primary-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
              >
                Request a Pickup
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:8889707377"
                className="inline-flex items-center justify-center gap-3 bg-white hover:bg-gray-50 border-2 border-logis-border hover:border-primary/50 text-logis-text px-8 py-4 rounded-xl font-semibold text-lg transition-all"
              >
                <Phone className="w-5 h-5 text-primary" />
                888-970-S3RS
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <Shield className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm font-medium text-logis-text-secondary">Secure Data Destruction</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <Leaf className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm font-medium text-logis-text-secondary">95% Reuse Rate</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <Award className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm font-medium text-logis-text-secondary">Inc. 5000 Company</span>
              </div>
            </div>
          </motion.div>

          {/* Hero Visual with Orbiting Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Main Visual Container */}
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Background Circle */}
              <div className="absolute inset-8 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10" />

              {/* Central Icon - spins clockwise */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                  className="w-40 h-40 md:w-56 md:h-56"
                >
                  <svg viewBox="0 0 100 100" className="w-full h-full text-primary/20">
                    <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="0.5" fill="none" strokeDasharray="4 4" />
                  </svg>
                </motion.div>
                <motion.div
                  className="absolute w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-primary to-primary-700 flex items-center justify-center shadow-2xl shadow-primary/30"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                >
                  <Recycle className="w-12 h-12 md:w-16 md:h-16 text-white" />
                </motion.div>
              </div>

              {/* Orbiting Cards Container - rotates clockwise */}
              <motion.div
                className="absolute inset-0"
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{
                  duration: 60,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              >
                {orbitingCards.map((card, index) => {
                  const Icon = card.icon;
                  // Calculate position on the orbit
                  const radius = 48; // percentage from center
                  const angleRad = (card.angle * Math.PI) / 180;
                  const x = 50 + radius * Math.cos(angleRad);
                  const y = 50 + radius * Math.sin(angleRad);

                  return (
                    <motion.div
                      key={card.id}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                        rotate: -360, // Counter-rotate to keep cards upright
                      }}
                      transition={{
                        opacity: { delay: 0.6 + index * 0.2, duration: 0.5 },
                        scale: {
                          delay: 0.6 + index * 0.2,
                          duration: 0.5,
                          type: 'spring',
                          stiffness: 200,
                          damping: 15,
                        },
                        rotate: {
                          duration: 60,
                          repeat: Infinity,
                          ease: 'linear',
                        },
                      }}
                      className="absolute bg-white rounded-2xl p-3 md:p-4 shadow-xl border border-gray-100"
                      style={{
                        left: `${x}%`,
                        top: `${y}%`,
                        transform: 'translate(-50%, -50%)',
                      }}
                    >
                      <div className="flex items-center gap-2 md:gap-3">
                        <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl ${card.iconBg} flex items-center justify-center`}>
                          <Icon className={`w-5 h-5 md:w-6 md:h-6 ${card.iconColor}`} />
                        </div>
                        <div>
                          <p className="text-xl md:text-2xl font-bold text-logis-text">{card.value}</p>
                          <p className="text-[10px] md:text-xs text-logis-text-secondary whitespace-nowrap">{card.label}</p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>

              {/* Orbit path visualization (subtle) */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="48"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.2"
                  strokeDasharray="2 2"
                  className="text-primary/10"
                />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
