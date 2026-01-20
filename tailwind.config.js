// @ts-check
const { fontFamily } = require('tailwindcss/defaultTheme');
const { colors: customColors } = require('./data/config/colors');

/** @type {import("tailwindcss").Config } */
module.exports = {
  content: [
    './node_modules/@shipixen/pliny/**/*.js',
    './app/**/*.{js,ts,jsx,tsx,css,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,css,mdx}',
    './components/**/*.{js,ts,jsx,tsx,css,mdx}',
    './layouts/**/*.{js,ts,jsx,tsx,css,mdx}',
    './demo/**/*.{js,ts,jsx,tsx,css,mdx}',
    './data/**/*.mdx',
  ],
  darkMode: ['class'],
  theme: {
    extend: {
      // Logis Typography Scale
      fontSize: {
        // Display sizes (responsive)
        'display-xl': ['100px', { lineHeight: '1', letterSpacing: '-0.02em' }],
        'display-lg': ['74px', { lineHeight: '1', letterSpacing: '-0.02em' }],
        'display-md': ['52px', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-sm': ['36px', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        // Section headings
        'heading-xl': ['48px', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'heading-lg': ['36px', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'heading-md': ['30px', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'heading-sm': ['24px', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        // Body text
        'body-lg': ['18px', { lineHeight: '1.5' }],
        'body-md': ['16px', { lineHeight: '1.5' }],
        'body-sm': ['14px', { lineHeight: '1.5' }],
      },
      lineHeight: {
        tight: '1',
        snug: '1.1',
        normal: '1.2',
        relaxed: '1.5',
        11: '2.75rem',
        12: '3rem',
        13: '3.25rem',
        14: '3.5rem',
      },
      letterSpacing: {
        tighter: '-0.02em',
        tight: '-0.01em',
      },
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
        display: ['var(--font-display)', ...fontFamily.sans],
        cursive: ['cursive'],
      },
      // Logis Spacing System
      spacing: {
        '18': '4.5rem',    // 72px
        '22': '5.5rem',    // 88px
        '26': '6.5rem',    // 104px
        '30': '7.5rem',    // 120px
        '34': '8.5rem',    // 136px
        '38': '9.5rem',    // 152px
        '42': '10.5rem',   // 168px
        '46': '11.5rem',   // 184px
        '50': '12.5rem',   // 200px
      },
      // Logis Container
      maxWidth: {
        'container': '1380px',
        'content': '1200px',
        'narrow': '800px',
      },
      // Logis Border Radius
      borderRadius: {
        'logis': '10px',
        'logis-lg': '12px',
        'logis-xl': '16px',
      },
      colors: {
        // Primary - S3 Green
        primary: {
          50: '#f0fdf4',
          100: customColors.primary.lighter,
          200: customColors.primary.lighter,
          300: customColors.primary.light,
          400: customColors.primary.light,
          500: customColors.primary.main,
          600: customColors.primary.main,
          700: customColors.primary.dark,
          800: customColors.primary.dark,
          900: customColors.primary.darker,
          DEFAULT: customColors.primary.main,
        },
        // Secondary - S3 Blue
        secondary: {
          50: '#f0f9ff',
          100: customColors.secondary.lighter,
          200: customColors.secondary.lighter,
          300: customColors.secondary.light,
          400: customColors.secondary.light,
          500: customColors.secondary.main,
          600: customColors.secondary.main,
          700: customColors.secondary.dark,
          800: customColors.secondary.dark,
          900: customColors.secondary.darker,
          DEFAULT: customColors.secondary.main,
        },
        // Accent - Yellow highlight
        'accent-yellow': {
          light: customColors.accent.light,
          DEFAULT: customColors.accent.main,
          dark: customColors.accent.dark,
        },
        // Logis specific colors
        'logis-bg': customColors.logis.background,
        'logis-dark': customColors.logis.dark,
        'logis-text': customColors.logis.textPrimary,
        'logis-text-secondary': customColors.logis.textSecondary,
        'logis-text-muted': customColors.logis.textMuted,
        'logis-border': customColors.logis.border,
        'logis-link': customColors.logis.link,
        // Shadcn colors
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: customColors.primary.dark,
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            a: {
              color: theme('colors.primary.500'),
              '&:hover': {
                color: `${theme('colors.primary.600')}`,
              },
              code: { color: theme('colors.primary.400') },
            },
            'h1,h2': {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
            },
            h3: {
              fontWeight: '600',
            },
            code: {
              color: theme('colors.indigo.500'),
            },
          },
        },
        invert: {
          css: {
            a: {
              color: theme('colors.primary.500'),
              '&:hover': {
                color: `${theme('colors.primary.400')}`,
              },
              code: { color: theme('colors.primary.400') },
            },
            'h1,h2,h3,h4,h5,h6': {
              color: theme('colors.gray.100'),
            },
          },
        },
      }),
      screens: {
        '2xl': '1400px',
        'tall-sm': { raw: '(min-height: 640px)' },
        'tall-md': { raw: '(min-height: 768px)' },
        'tall-lg': { raw: '(min-height: 1024px)' },
        'tall-xl': { raw: '(min-height: 1280px)' },
        'tall-2xl': { raw: '(min-height: 1536px)' },
      },
      zIndex: {
        60: 60,
        70: 70,
        80: 80,
        90: 90,
        100: 100,
        110: 110,
      },
      transitionDuration: {
        2000: '2000ms',
        3000: '3000ms',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        wiggle: {
          '0%, 100%': {
            transform: 'rotate(-3deg)',
          },
          '50%': {
            transform: 'rotate(3deg)',
          },
        },
        'rotate-left-to-right': {
          '0%': {
            transform: 'rotate(-35deg)',
          },

          '30%': {
            transform: 'rotate(-10deg)',
          },

          '50%': {
            transform: 'rotate(20deg)',
          },

          '60%': {
            transform: 'rotate(35deg)',
          },

          '70%': {
            transform: 'rotate(15deg)',
          },

          '80%': {
            transform: 'rotate(45deg)',
          },

          '90%': {
            transform: 'rotate(-10deg)',
          },

          '100%': {
            transform: 'rotate(-35deg)',
          },
        },
        tilt: {
          '0%,50%,to': {
            transform: 'rotate(0deg)',
          },

          '25%': {
            transform: 'rotate(.5deg)',
          },

          '75%': {
            transform: 'rotate(-.5deg)',
          },
        },
        marquee: {
          '0%': {
            transform: 'translateX(0)',
          },
          '100%': {
            transform: 'translateX(-50%)',
          },
        },
      },
      animation: {
        tilt: 'tilt 10s linear infinite',
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        wiggle: 'wiggle 1s ease-in-out infinite',
        'fade-in-down-snail': 'fade-in-down 5s ease-in forwards',
        'fade-in-down-slower': 'fade-in-down 1.2s ease-in-out forwards',
        'fade-in-down-slow': 'fade-in-down 1s ease-in-out forwards',
        'fade-in-down-normal': 'fade-in-down 0.8s ease-in-out forwards',
        'fade-in-down-fast': 'fade-in-down 0.6s ease-in-out forwards',
        'fade-in-down-faster': 'fade-in-down 0.4s ease-in-out forwards',
        'rotate-left-to-right': 'rotate-left-to-right 3s ease-in-out infinite',
        'fade-in-down-normal-delay':
          'fade-in-down 0.8s ease-in-out 2s forwards',
        marquee: '30s marquee linear infinite',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};
