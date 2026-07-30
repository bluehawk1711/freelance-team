import { Metadata } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://floattech.com';
const siteName = 'FloatTech - Digital Agency';
const description =
  'Building modern digital experiences with innovative solutions. Web design, development, and digital marketing services for businesses worldwide.';

export function generateMetadata(overrides?: Partial<Metadata>): Metadata {
  return {
    title: {
      default: siteName,
      template: `%s | ${siteName}`,
    },
    description,
    keywords: [
      'digital agency',
      'web design',
      'web development',
      'digital marketing',
      'UI/UX design',
      'mobile apps',
      'creative agency',
      'frontend development',
      'React development',
      'Next.js development',
      'branding',
      'landing pages',
      'SEO optimization',
      'web redesign',
      'business websites',
    ],
    authors: [{ name: 'FloatTech', url: baseUrl }],
    creator: 'FloatTech',
    publisher: 'FloatTech',
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: baseUrl,
    },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: baseUrl,
      siteName,
      title: siteName,
      description,
      images: [
        {
          url: `${baseUrl}/og-image.png`,
          width: 1200,
          height: 630,
          alt: 'FloatTech - Digital Agency',
          type: 'image/png',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: siteName,
      description,
      images: [`${baseUrl}/og-image.png`],
      creator: '@floattech',
      site: '@floattech',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || '',
      yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION || '',
      yahoo: process.env.NEXT_PUBLIC_YAHOO_VERIFICATION || '',
    },
    ...overrides,
  };
}

// WebSite schema with SearchAction for Google Sitelinks Searchbox
export const webSiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: siteName,
  url: baseUrl,
  description,
  publisher: {
    '@type': 'Organization',
    name: 'FloatTech',
    logo: {
      '@type': 'ImageObject',
      url: `${baseUrl}/logo.png`,
    },
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${baseUrl}/search?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
};

// Organization schema with detailed business info
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'FloatTech',
  description,
  url: baseUrl,
  logo: `${baseUrl}/logo.png`,
  image: `${baseUrl}/og-image.png`,
  sameAs: [
    'https://twitter.com/floattech',
    'https://linkedin.com/company/floattech',
    'https://github.com/floattech',
    'https://facebook.com/floattech',
    'https://instagram.com/floattech',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-555-123-4567',
    contactType: 'customer service',
    availableLanguage: ['English'],
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: '123 Digital Ave',
    addressLocality: 'Tech City',
    addressRegion: 'TC',
    postalCode: '12345',
    addressCountry: 'US',
  },
  foundingDate: '2016',
  dateModified: new Date().toISOString(),
  numberOfEmployees: {
    '@type': 'QuantitativeValue',
    minValue: 50,
    maxValue: 100,
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '150',
    bestRating: '5',
  },
};

// LocalBusiness schema for local SEO
export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'FloatTech',
  description,
  url: baseUrl,
  telephone: '+1-555-123-4567',
  email: 'hello@floattech.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '123 Digital Ave',
    addressLocality: 'Tech City',
    addressRegion: 'TC',
    postalCode: '12345',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '37.7749',
    longitude: '-122.4194',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '10:00',
      closes: '16:00',
    },
  ],
  priceRange: '$$$',
  image: `${baseUrl}/og-image.png`,
  logo: `${baseUrl}/logo.png`,
};

// Service schemas for each service offered
export const serviceSchemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'UI/UX Design',
    provider: {
      '@type': 'Organization',
      name: 'FloatTech',
    },
    description: 'Immersive digital journeys crafted with attention to every micro-interaction and pixel.',
    areaServed: 'US',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Design Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'UI/UX Design',
          },
        },
      ],
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Web Development',
    provider: {
      '@type': 'Organization',
      name: 'FloatTech',
    },
    description: 'React, Next.js, and Tailwind based architectures for lightning-fast performance.',
    areaServed: 'US',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Digital Marketing',
    provider: {
      '@type': 'Organization',
      name: 'FloatTech',
    },
    description: 'We implement proven growth tactics including SEO, analytics, and conversion optimization.',
    areaServed: 'US',
  },
];

// FAQ schema for rich snippets
export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What services does FloatTech offer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'FloatTech offers UI/UX design, website design, frontend development, landing pages, business websites, and website redesign services.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to build a website?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Project timelines vary based on complexity. A typical website takes 4-8 weeks from discovery to launch.',
      },
    },
    {
      '@type': 'Question',
      name: 'What technologies does FloatTech use?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We use React, Next.js, Tailwind CSS, and modern web technologies to build fast, scalable applications.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can I contact FloatTech?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can reach us at hello@floattech.com or call +1 (555) 123-4567. You can also fill out the contact form on our website.',
      },
    },
  ],
};

// BreadcrumbList schema
export const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: baseUrl,
    },
  ],
};

// Combined JSON-LD for the main page
export const jsonLdSchema = [
  webSiteSchema,
  organizationSchema,
  localBusinessSchema,
  faqSchema,
  breadcrumbSchema,
  ...serviceSchemas,
];
