import { Metadata } from 'next';

const env = (key: string) => {
  const value = process.env[key];
  return value && value.trim() !== '' ? value : undefined;
};

const baseUrl = env('NEXT_PUBLIC_BASE_URL');
const siteName = env('SITE_NAME');
const description = env('SITE_DESCRIPTION');
const twitterHandle = env('SITE_TWITTER_HANDLE');
const social = {
  twitter: env('SOCIAL_TWITTER'),
  linkedin: env('SOCIAL_LINKEDIN'),
  github: env('SOCIAL_GITHUB'),
  facebook: env('SOCIAL_FACEBOOK'),
  instagram: env('INSTAGRAM_URL'),
};
const socialLinks = Object.values(social).filter(
  (url): url is string => typeof url === 'string'
);
const contactEmail = env('CONTACT_EMAIL');
const contactPhone = env('CONTACT_PHONE');
const address = {
  streetAddress: env('ADDRESS_STREET'),
  addressLocality: env('ADDRESS_CITY'),
  addressRegion: env('ADDRESS_REGION'),
  postalCode: env('ADDRESS_POSTAL_CODE'),
  addressCountry: env('ADDRESS_COUNTRY'),
};
const addressFields = Object.entries(address).filter(
  (entry): entry is [string, string] => entry[1] !== undefined
);
const addressObject = Object.fromEntries(addressFields);
const hasAddress = addressFields.length > 0;
const foundingDate = env('SITE_FOUNDING_YEAR');
const geo = {
  latitude: env('GEO_LATITUDE'),
  longitude: env('GEO_LONGITUDE'),
};
const hasGeo = geo.latitude !== undefined && geo.longitude !== undefined;
const contactWays = [
  contactEmail ? `email us at ${contactEmail}` : null,
  contactPhone ? `call ${contactPhone}` : null,
].filter(Boolean).join(' or ');

export function generateMetadata(overrides?: Partial<Metadata>): Metadata {
  const metadata: Metadata = {
    ...(siteName
      ? { title: { default: siteName, template: `%s | ${siteName}` } }
      : {}),
    ...(description ? { description } : {}),
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
    ...(siteName
      ? {
          authors: siteName && baseUrl ? [{ name: siteName, url: baseUrl }] : [{ name: siteName }],
          creator: siteName,
          publisher: siteName,
        }
      : {}),
    ...(baseUrl
      ? {
          metadataBase: new URL(baseUrl),
          alternates: { canonical: baseUrl },
        }
      : {}),
    openGraph: {
      type: 'website',
      locale: 'en_US',
      ...(baseUrl ? { url: baseUrl } : {}),
      ...(siteName ? { siteName, title: siteName } : {}),
      ...(description ? { description } : {}),
      ...(baseUrl && siteName
        ? {
            images: [
              {
                url: `${baseUrl}/og-image.png`,
                width: 1200,
                height: 630,
                alt: siteName,
                type: 'image/png',
              },
            ],
          }
        : {}),
    },
    twitter: {
      ...(siteName ? { title: siteName } : {}),
      ...(description ? { description } : {}),
      ...(baseUrl ? { images: [`${baseUrl}/og-image.png`] } : {}),
      ...(twitterHandle ? { creator: twitterHandle, site: twitterHandle } : {}),
      card: 'summary_large_image',
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
    ...(() => {
      const verification: Record<string, string> = {};
      const google = env('NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION');
      const yandex = env('NEXT_PUBLIC_YANDEX_VERIFICATION');
      const yahoo = env('NEXT_PUBLIC_YAHOO_VERIFICATION');
      if (google) verification.google = google;
      if (yandex) verification.yandex = yandex;
      if (yahoo) verification.yahoo = yahoo;
      return Object.keys(verification).length ? { verification } : {};
    })(),
    ...overrides,
  };
  return metadata;
}

// WebSite schema with SearchAction for Google Sitelinks Searchbox
export const webSiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  ...(siteName ? { name: siteName } : {}),
  ...(baseUrl ? { url: baseUrl } : {}),
  ...(description ? { description } : {}),
  ...(siteName || baseUrl
    ? {
        publisher: {
          '@type': 'Organization',
          ...(siteName ? { name: siteName } : {}),
          ...(baseUrl
            ? { logo: { '@type': 'ImageObject', url: `${baseUrl}/logo.png` } }
            : {}),
        },
      }
    : {}),
  ...(baseUrl
    ? {
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: `${baseUrl}/search?q={search_term_string}`,
          },
          'query-input': 'required name=search_term_string',
        },
      }
    : {}),
};

// Organization schema with detailed business info
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  ...(siteName ? { name: siteName } : {}),
  ...(description ? { description } : {}),
  ...(baseUrl
    ? {
        url: baseUrl,
        logo: `${baseUrl}/logo.png`,
        image: `${baseUrl}/og-image.png`,
      }
    : {}),
  ...(socialLinks.length ? { sameAs: socialLinks } : {}),
  ...(contactPhone
    ? {
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: contactPhone,
          contactType: 'customer service',
          availableLanguage: ['English'],
        },
      }
    : {}),
  ...(hasAddress ? { address: { '@type': 'PostalAddress', ...addressObject } } : {}),
  ...(foundingDate ? { foundingDate } : {}),
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
  ...(siteName ? { name: siteName } : {}),
  ...(description ? { description } : {}),
  ...(baseUrl ? { url: baseUrl } : {}),
  ...(contactPhone ? { telephone: contactPhone } : {}),
  ...(contactEmail ? { email: contactEmail } : {}),
  ...(hasAddress ? { address: { '@type': 'PostalAddress', ...addressObject } } : {}),
  ...(hasGeo ? { geo: { '@type': 'GeoCoordinates', ...geo } } : {}),
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
  ...(baseUrl
    ? { image: `${baseUrl}/og-image.png`, logo: `${baseUrl}/logo.png` }
    : {}),
};

// Service schemas for each service offered
export const serviceSchemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'UI/UX Design',
    provider: {
      '@type': 'Organization',
      ...(siteName ? { name: siteName } : {}),
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
      ...(siteName ? { name: siteName } : {}),
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
      ...(siteName ? { name: siteName } : {}),
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
      name: `What services does ${siteName ?? 'this agency'} offer?`,
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'UI/UX design, website design, frontend development, landing pages, business websites, and website redesign services.',
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
      name: 'What technologies are used?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'React, Next.js, Tailwind CSS, and modern web technologies to build fast, scalable applications.',
      },
    },
    ...(contactWays
      ? [
          {
            '@type': 'Question',
            name: 'How can I contact you?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: `You can ${contactWays}. You can also fill out the contact form on our website.`,
            },
          },
        ]
      : []),
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
      ...(baseUrl ? { item: baseUrl } : {}),
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
