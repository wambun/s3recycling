# S3 Recycling Solutions - Website Redesign PRD

## Phase 1: Architecture & Product Requirements Document

---

## 1. Project Overview

**Objective**: Transform S3 Recycling Solutions' existing WordPress website into a modern, premium Next.js 15 application using design cues from the Logis Framer template.

**Tech Stack**:
- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS 3.4
- Shadcn UI
- Framer Motion

---

## 2. Sitemap (Derived from client/old)

### 2.1 Primary Pages

```
/                           # Home Page
/about                      # About Us
  /about/leadership        # Leadership Team
  /about/values            # Company Values
  /about/process           # Our Process
/services                   # Services Overview
  /services/itad           # IT Asset Disposition
  /services/data-destruction # Data Destruction
  /services/end-of-life-recycling # End-of-Life Recycling
  /services/data-center-decommissioning # Data Center Decommissioning
  /services/medical-equipment-disposal # Medical Equipment Disposal
  /services/reverse-logistics # Reverse Logistics
/blog                       # Blog/News
  /blog/[slug]             # Individual blog posts
/careers                    # Careers
/contact                    # Contact Us
/privacy-policy             # Privacy Policy
```

### 2.2 Utility Pages

```
/pickup-request             # Customer Pickup Form
/client-questionnaire       # Client Questionnaire
/donation-request           # Donation Request Forms
/return-your-tech           # Return Your Tech Portal
/thank-you                  # Thank You (post-form submission)
/404                        # Not Found
```

### 2.3 External Links (Preserved)
- Client Portal: https://s3erpportal.makor-erp.com/portal
- Phone: tel:8889707377 (888-970-S3RS)
- Email: mailto:info@s3rs.com

---

## 3. Visual Analysis - New Design Target

### 3.1 Color Palette

| Role | Color | Usage |
|------|-------|-------|
| Background Primary | `#f9f9f9` | Page backgrounds |
| Background Secondary | `#ffffff` | Cards, modals |
| Text Primary | `#1e1e1e` | Headings, body text |
| Text Secondary | `#6f6f6f` | Muted text, captions |
| Accent Primary | `#0099ff` | Links, CTAs |
| Accent Secondary | `#fdd36d` | Highlights, badges |
| Dark Background | `#1e1e1e` | Footer, dark sections |
| Border | `#e5e5e5` | Dividers, card borders |

**S3 Brand Colors to Integrate**:
- S3 Green: `#4CAF50` (environmental/sustainability)
- S3 Blue: `#1976D2` (trust/security)

### 3.2 Typography

**Font Family**:
- Primary: **Urbanist** (weights: 400, 500, 600, 700, 900)
- Fallback: Inter

**Scale**:
| Element | Desktop | Tablet | Mobile |
|---------|---------|--------|--------|
| H1 | 100px | 74px | 52px |
| H2 | 64px | 48px | 36px |
| H3 | 36px | 28px | 24px |
| Body | 16px | 16px | 16px |

**Styling**:
- Letter-spacing: -0.02em for headings
- Line-height: 100-110% for headings, 1.5em for body

### 3.3 Spacing System

| Token | Value | Usage |
|-------|-------|-------|
| `xs` | 6px | Tight inline spacing |
| `sm` | 14px | Card internal gaps |
| `md` | 24px | Component spacing |
| `lg` | 40px | Section padding |
| `xl` | 60px | Major section gaps |
| `2xl` | 80px | Hero sections |
| `3xl` | 110px | Full-width sections |

### 3.4 Layout Patterns

**Container**:
- Max-width: 1380px
- Horizontal padding: 40px (desktop), 20px (mobile)

**Grid**:
- Services grid: 3 columns, 20px gap
- Card min-width: 280px
- Responsive breakpoints: 1280px, 992px, 375px

### 3.5 Component Patterns

**Buttons**:
- Primary: Solid fill with accent color
- Secondary: Outline/ghost variant
- Border-radius: 10px
- Padding: 16px 32px
- Hover: Transform scale + shadow

**Cards**:
- Width: 360px (100% on mobile)
- Padding: 30px
- Gap: 14px internal
- Border-radius: 12px
- Hover: Subtle elevation

**Header**:
- Fixed position
- Height: 80px
- Navigation gap: 30px
- Mobile: Hamburger menu (375px breakpoint)

**Footer**:
- Dark background (#1e1e1e)
- Multi-column layout
- Padding: 70px vertical

### 3.6 Animation Patterns

- Page transitions: Fade + slide (0.3s ease)
- Card hover: Transform scale(1.02) + shadow
- Scroll reveal: Fade up with stagger
- Button hover: Background color transition (0.2s)
- Image loading: Blur-up placeholder

---

## 4. Content Mapping Strategy

### 4.1 Home Page (`/`)

| Old Content | New Component | Notes |
|-------------|---------------|-------|
| Hero: "Security. Sustainability. Stewardship." | Hero Section | Large headline with animated tagline |
| "E-Recycling Made Easy" | Hero Subheading | Supporting text |
| Pickup Request Form | CTA Modal/Section | Integrated form |
| Solutions Grid (3 cards) | Services Grid | Data Destruction, ITAD, Medical |
| Stats (95%, 100%, 0%) | Stats Banner | Animated counters |
| Who We Serve | Client Logos Marquee | Logo carousel |
| Testimonials | Testimonial Slider | Card-based carousel |
| Latest News | Blog Preview Grid | 2-3 recent posts |
| Newsletter Signup | Footer CTA | Email capture |

### 4.2 Services Mapping

| Old Service | New Route | Key Content |
|-------------|-----------|-------------|
| Data Destruction | `/services/data-destruction` | HD Shredding, Wiping, On-site, Certifications |
| ITAD | `/services/itad` | Full lifecycle, Data wiping standards, Logistics |
| End-of-Life Recycling | `/services/end-of-life-recycling` | Sustainable disposal, R2 certification |
| Medical Equipment | `/services/medical-equipment-disposal` | Healthcare-specific compliance |
| Data Center Decommissioning | `/services/data-center-decommissioning` | Large-scale projects |
| Reverse Logistics | `/services/reverse-logistics` | Returns management |

### 4.3 About Section Mapping

| Old Content | New Structure |
|-------------|---------------|
| Who We Are | `/about` hero section |
| Certifications (R2, ISO) | Certifications grid with badges |
| Company Video | Embedded video section |
| Community | Community impact section |
| Leadership | `/about/leadership` - Team cards |
| Values | `/about/values` - Values grid |

### 4.4 Blog/News Mapping

- Blog posts from `client/old` to be converted to MDX
- Categories: General, Press Releases, Awards
- Tags: Preserved from existing content
- Author: s3rs2021 → "S3 Recycling Solutions"

---

## 5. Technical Implementation Plan

### 5.1 Project Structure

```
app/
├── (marketing)/
│   ├── page.tsx                    # Home
│   ├── about/
│   │   ├── page.tsx                # About overview
│   │   ├── leadership/page.tsx
│   │   ├── values/page.tsx
│   │   └── process/page.tsx
│   ├── services/
│   │   ├── page.tsx                # Services overview
│   │   ├── [slug]/page.tsx         # Dynamic service pages
│   ├── blog/
│   │   ├── page.tsx                # Blog listing
│   │   └── [slug]/page.tsx         # Blog post
│   ├── careers/page.tsx
│   ├── contact/page.tsx
│   └── privacy-policy/page.tsx
├── (utility)/
│   ├── pickup-request/page.tsx
│   ├── donation-request/page.tsx
│   └── thank-you/page.tsx
├── layout.tsx
└── not-found.tsx

components/
├── landing/
│   ├── Hero.tsx
│   ├── ServicesGrid.tsx
│   ├── StatsSection.tsx
│   ├── ClientLogos.tsx
│   ├── Testimonials.tsx
│   ├── BlogPreview.tsx
│   ├── CTASection.tsx
│   └── NewsletterForm.tsx
├── shared/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Navigation.tsx
│   ├── MobileMenu.tsx
│   ├── Button.tsx
│   ├── Card.tsx
│   └── Container.tsx
├── forms/
│   ├── PickupRequestForm.tsx
│   ├── ContactForm.tsx
│   └── NewsletterForm.tsx
└── ui/
    └── [shadcn components]

data/
├── services.ts                     # Service data
├── testimonials.ts                 # Client testimonials
├── team.ts                         # Leadership team
└── content/
    └── blog/                       # MDX blog posts
```

### 5.2 Data Structures

**Service Interface**:
```typescript
interface Service {
  slug: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  image: string;
  ctaText: string;
}
```

**Testimonial Interface**:
```typescript
interface Testimonial {
  id: string;
  quote: string;
  author: string;
  company: string;
  industry: string;
  image?: string;
}
```

### 5.3 Dynamic Routes

**Services**: `/services/[slug]`
- data-destruction
- itad
- end-of-life-recycling
- data-center-decommissioning
- medical-equipment-disposal
- reverse-logistics

**Blog**: `/blog/[slug]`
- Dynamic MDX rendering
- Frontmatter for metadata

### 5.4 Forms Integration

All forms will use:
- React Hook Form for validation
- Server Actions for submission
- reCAPTCHA v3 for spam protection
- Email notifications via existing backend

### 5.5 SEO Implementation

- Dynamic metadata per page
- Structured data (JSON-LD)
- OpenGraph images
- XML sitemap generation
- robots.txt configuration

---

## 6. Phase 2 Execution Checklist

### 6.1 Foundation (Week 1)
- [ ] Configure Tailwind with design tokens
- [ ] Set up Urbanist font
- [ ] Create base components (Button, Card, Container)
- [ ] Build Header/Navigation
- [ ] Build Footer

### 6.2 Home Page (Week 1-2)
- [ ] Hero section with animations
- [ ] Services grid
- [ ] Stats section with counters
- [ ] Client logos marquee
- [ ] Testimonials slider
- [ ] Blog preview
- [ ] Newsletter CTA

### 6.3 Services Pages (Week 2)
- [ ] Services overview page
- [ ] Individual service page template
- [ ] All 6 service pages populated

### 6.4 About Section (Week 2-3)
- [ ] About overview
- [ ] Leadership team grid
- [ ] Values page
- [ ] Process page

### 6.5 Blog (Week 3)
- [ ] Blog listing page
- [ ] Blog post template
- [ ] Migrate existing posts to MDX

### 6.6 Utility Pages (Week 3)
- [ ] Contact page with form
- [ ] Pickup request form
- [ ] Donation request forms
- [ ] Thank you pages
- [ ] 404 page

### 6.7 QA & Launch (Week 4)
- [ ] Lighthouse audit (90+ all categories)
- [ ] Mobile responsive testing
- [ ] Accessibility audit
- [ ] Form testing
- [ ] External link verification
- [ ] Production build verification

---

## 7. Assets to Preserve

### 7.1 Logo & Branding
- Logo: `/wp-content/uploads/2025/10/S3-logo-white-for-web-375-x-144.png`
- Favicon set from existing site

### 7.2 Certifications
- R2 Certification badge
- ISO 14001 badge
- ISO 45001 badge
- MBE Certified badge

### 7.3 Client Logos
- Client logos composite image
- Individual client logos if available

### 7.4 Key Images
- Hard drive shredder
- Forklift/warehouse
- Medical equipment
- Team photos
- Facility photos

---

## 8. Success Metrics

- **Performance**: Lighthouse score 90+ across all categories
- **Accessibility**: WCAG AA compliance
- **SEO**: All pages indexed, proper meta tags
- **Mobile**: Fully responsive, touch-friendly
- **Forms**: All forms functional with validation
- **Analytics**: GA4 integration working

---

*Document Version: 1.0*
*Last Updated: 2026-01-20*
*Phase: 1 - Architecture & PRD*
