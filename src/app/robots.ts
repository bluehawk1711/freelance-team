import type { MetadataRoute } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://floattech.com';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/_next/'],
      },
      // Allow AI crawlers for better AI search visibility
      {
        userAgent: ['GPTBot', 'ChatGPT-User', 'OAI-SearchBot'],
        allow: '/',
      },
      {
        userAgent: ['PerplexityBot', 'ClaudeBot', 'Anthropic-ai'],
        allow: '/',
      },
      {
        userAgent: ['Google-Extended', 'GoogleOther'],
        allow: '/',
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
