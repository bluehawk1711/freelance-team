import { jsonLdSchema } from '@/lib/seo';
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json(jsonLdSchema, {
    headers: {
      'Content-Type': 'application/ld+json',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
