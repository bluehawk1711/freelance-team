import { Metadata } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://floattech.com';
const siteName = 'FloatTech - Digital Agency';
const description =
  'Building modern digital experiences with innovative solutions. Web design, development, and digital marketing services.';

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
    ],
    authors: [{ name: 'FloatTech' }],
    creator: 'FloatTech',
    publisher: 'FloatTech',
    formatDetection: {
      email: false,
      telephone: false,
      address: false,
    },
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
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: siteName,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: siteName,
      description,
      images: ['/og-image.png'],
      creator: '@floattech',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
    ...overrides,
  };
}

export const jsonLdSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'FloatTech',
  description,
  url: baseUrl,
  logo: `${baseUrl}/logo.png`,
  sameAs: [
    'https://twitter.com/floattech',
    'https://linkedin.com/company/floattech',
    'https://github.com/floattech',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-555-000-0000',
    contactType: 'Sales',
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: '123 Digital Street',
    addressLocality: 'San Francisco',
    addressRegion: 'CA',
    postalCode: '94105',
    addressCountry: 'US',
  },
};
