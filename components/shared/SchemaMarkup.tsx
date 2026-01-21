import Script from 'next/script';

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'S3 Recycling Solutions',
  alternateName: 'S3RS',
  url: 'https://s3rs.com',
  logo: 'https://s3rs.com/static/images/s3-logo-dark.png',
  description:
    'S3 Recycling Solutions provides secure, sustainable e-waste recycling and IT asset disposition services. R2 certified with nationwide coverage across 30+ states.',
  foundingDate: '2011',
  sameAs: [
    'https://www.linkedin.com/company/s3-recycling-solutions',
    'https://www.facebook.com/s3recyclingsolutions',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-888-970-7377',
    contactType: 'customer service',
    availableLanguage: 'English',
    areaServed: 'US',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Springfield',
    addressRegion: 'TN',
    addressCountry: 'US',
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://s3rs.com/#localbusiness',
  name: 'S3 Recycling Solutions',
  image: 'https://s3rs.com/static/images/s3-logo-dark.png',
  url: 'https://s3rs.com',
  telephone: '+1-888-970-7377',
  email: 'info@s3rs.com',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Springfield',
    addressRegion: 'TN',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 36.5092,
    longitude: -86.885,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '07:00',
    closes: '16:00',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '500',
  },
  areaServed: {
    '@type': 'Country',
    name: 'United States',
  },
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'S3 Recycling Solutions',
  url: 'https://s3rs.com',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://s3rs.com/search?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
};

const servicesSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: [
    {
      '@type': 'Service',
      position: 1,
      name: 'IT Asset Disposition (ITAD)',
      description:
        'Comprehensive IT asset disposition services including data destruction, remarketing, and recycling of end-of-life IT equipment.',
      provider: {
        '@type': 'Organization',
        name: 'S3 Recycling Solutions',
      },
      serviceType: 'IT Asset Disposition',
      areaServed: 'United States',
    },
    {
      '@type': 'Service',
      position: 2,
      name: 'Data Destruction',
      description:
        'Certified data destruction services ensuring complete and secure removal of sensitive information from all storage devices.',
      provider: {
        '@type': 'Organization',
        name: 'S3 Recycling Solutions',
      },
      serviceType: 'Data Destruction',
      areaServed: 'United States',
    },
    {
      '@type': 'Service',
      position: 3,
      name: 'E-Waste Recycling',
      description:
        'Environmentally responsible e-waste recycling with zero landfill policy and 95% reuse/recycle rate.',
      provider: {
        '@type': 'Organization',
        name: 'S3 Recycling Solutions',
      },
      serviceType: 'E-Waste Recycling',
      areaServed: 'United States',
    },
    {
      '@type': 'Service',
      position: 4,
      name: 'Data Center Decommissioning',
      description:
        'Complete data center decommissioning services including asset removal, data destruction, and environmental compliance.',
      provider: {
        '@type': 'Organization',
        name: 'S3 Recycling Solutions',
      },
      serviceType: 'Data Center Decommissioning',
      areaServed: 'United States',
    },
    {
      '@type': 'Service',
      position: 5,
      name: 'Medical Equipment Disposal',
      description:
        'HIPAA-compliant disposal of medical equipment with proper handling of sensitive healthcare data.',
      provider: {
        '@type': 'Organization',
        name: 'S3 Recycling Solutions',
      },
      serviceType: 'Medical Equipment Disposal',
      areaServed: 'United States',
    },
    {
      '@type': 'Service',
      position: 6,
      name: 'Reverse Logistics',
      description:
        'End-to-end reverse logistics solutions for IT equipment returns, refurbishment, and redistribution.',
      provider: {
        '@type': 'Organization',
        name: 'S3 Recycling Solutions',
      },
      serviceType: 'Reverse Logistics',
      areaServed: 'United States',
    },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is IT Asset Disposition (ITAD)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'IT Asset Disposition (ITAD) is the process of properly disposing of obsolete or unwanted IT equipment in a secure, environmentally responsible manner. This includes data destruction, remarketing viable assets, and recycling materials that cannot be reused.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is S3 Recycling Solutions certified?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, S3 Recycling Solutions is R2 certified, which is the leading certification standard for electronics recyclers. This certification ensures we meet the highest standards for data security, environmental responsibility, and worker safety.',
      },
    },
    {
      '@type': 'Question',
      name: 'What areas does S3 Recycling Solutions serve?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'S3 Recycling Solutions provides nationwide service across more than 30 states in the United States. We offer white-glove pickup service at your location regardless of the volume of equipment.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does S3 ensure data security?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'S3 employs multiple layers of data security including secure chain of custody, certified data destruction methods (both physical and digital), and comprehensive documentation including Certificates of Destruction for all processed devices.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is S3\'s environmental policy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'S3 maintains a zero landfill policy with a 95% reuse/recycle rate. We ensure that all e-waste is processed responsibly, with viable equipment remarketed and materials properly recycled through our R2-certified processes.',
      },
    },
  ],
};

export function SchemaMarkup() {
  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
        strategy="afterInteractive"
      />
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
        strategy="afterInteractive"
      />
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
        strategy="afterInteractive"
      />
      <Script
        id="services-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(servicesSchema),
        }}
        strategy="afterInteractive"
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
        strategy="afterInteractive"
      />
    </>
  );
}

export default SchemaMarkup;
