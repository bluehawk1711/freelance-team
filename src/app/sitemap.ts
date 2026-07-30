import type { MetadataRoute } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://floattech.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  // Note: Hash routes (#about, #services, etc.) are NOT valid in sitemaps
  // as search engines don't index hash fragments as separate URLs.
  // This site is a single-page application with all sections on one page.
  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
  ];
}
