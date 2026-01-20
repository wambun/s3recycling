export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  shortDescription: string;
  icon: string;
  features: string[];
  image: string;
  ctaText: string;
}

export const services: Service[] = [
  {
    slug: 'data-destruction',
    title: 'Data Destruction',
    shortTitle: 'Data Destruction',
    description:
      'Security and compliance are guaranteed throughout S3\'s data and equipment destruction process. As a member of the National Association for Information Destruction, S3 adheres to all NAID data destruction guidelines.',
    shortDescription:
      'Secure, compliant data destruction with on-site shredding capabilities.',
    icon: 'shield-check',
    features: [
      'Hard Drive Shredding',
      'On-site Data Destruction',
      'Secure Facilities',
      'Overwriting/Wiping',
      'Physical Destruction',
      'Robust Reporting',
      'R2 Certified Process',
      'Certification of Destruction',
    ],
    image: '/static/images/services/data-destruction.jpg',
    ctaText: 'Request On-site Shredding',
  },
  {
    slug: 'itad',
    title: 'Information Technology Asset Disposition',
    shortTitle: 'IT Asset Disposition',
    description:
      'Information technology asset disposition involves receiving, sorting, testing, data destruction, remarketing and end-of-life recycling. S3 is a national leader in the ITAD industry, serving clients in more than 30 states across the U.S.',
    shortDescription:
      'Full life-cycle management for your IT assets with security and sustainability.',
    icon: 'server',
    features: [
      'Full Life-Cycle Management',
      'Data Wiping Standards Compliance',
      'Security and Reporting',
      'Logistics Support',
      'National Presence',
      'White Glove Pickup',
      'Remarketing Services',
      'ESG Reporting',
    ],
    image: '/static/images/services/itad.jpg',
    ctaText: 'Schedule a Pickup',
  },
  {
    slug: 'end-of-life-recycling',
    title: 'End-of-Life Recycling',
    shortTitle: 'E-Waste Recycling',
    description:
      'Because of S3\'s commitment to sustainable solutions, our first priority is to resale and reuse as many devices as possible. Equipment that has no resale value is demanufactured in accordance with environmental laws.',
    shortDescription:
      'Sustainable disposal with zero landfill policy and maximum reuse.',
    icon: 'recycle',
    features: [
      'Zero Landfill Policy',
      '95% Reuse/Recycle Rate',
      'Sustainable Practices',
      'Environmental Compliance',
      'R2 Certified',
      'Device Demanufacturing',
      'Material Recovery',
      'ESG Documentation',
    ],
    image: '/static/images/services/recycling.jpg',
    ctaText: 'Learn More',
  },
  {
    slug: 'data-center-decommissioning',
    title: 'Data Center Decommissioning',
    shortTitle: 'Data Center Services',
    description:
      'S3 provides comprehensive data center decommissioning services, handling everything from planning to secure removal and disposal of all IT equipment.',
    shortDescription:
      'Comprehensive data center decommissioning with secure handling.',
    icon: 'building',
    features: [
      'Project Planning',
      'Secure Removal',
      'Asset Tracking',
      'Data Destruction',
      'Equipment Disposal',
      'Logistics Coordination',
      'Documentation',
      'Compliance Reporting',
    ],
    image: '/static/images/services/data-center.jpg',
    ctaText: 'Get a Quote',
  },
  {
    slug: 'medical-equipment-disposal',
    title: 'Medical Equipment Disposal',
    shortTitle: 'Medical Disposal',
    description:
      'S3 specializes in the secure disposal of medical equipment, ensuring compliance with healthcare regulations and HIPAA requirements.',
    shortDescription:
      'HIPAA-compliant medical equipment disposal for healthcare facilities.',
    icon: 'heart-pulse',
    features: [
      'HIPAA Compliance',
      'Healthcare Expertise',
      'Secure Data Handling',
      'Equipment Disposal',
      'Regulatory Compliance',
      'Documentation',
      'National Coverage',
      'Certified Process',
    ],
    image: '/static/images/services/medical.jpg',
    ctaText: 'Contact Us',
  },
  {
    slug: 'reverse-logistics',
    title: 'Reverse Logistics',
    shortTitle: 'Reverse Logistics',
    description:
      'S3\'s reverse logistics services help businesses manage returns, repairs, and redistribution of electronic equipment efficiently.',
    shortDescription:
      'Efficient returns management and equipment redistribution.',
    icon: 'truck',
    features: [
      'Returns Management',
      'Equipment Redistribution',
      'Repair Services',
      'Inventory Management',
      'Logistics Coordination',
      'Tracking & Reporting',
      'Cost Optimization',
      'Nationwide Service',
    ],
    image: '/static/images/services/logistics.jpg',
    ctaText: 'Learn More',
  },
];

export const getServiceBySlug = (slug: string): Service | undefined => {
  return services.find((service) => service.slug === slug);
};
