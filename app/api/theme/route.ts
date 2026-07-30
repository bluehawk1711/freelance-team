import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const theme = request.cookies.get('theme')?.value || 'system';

  return NextResponse.json({ theme });
}

export async function POST(request: NextRequest) {
  const { theme } = await request.json();

  const response = NextResponse.json({ success: true });
  response.cookies.set('theme', theme, {
    maxAge: 60 * 60 * 24 * 365, // 1 year
    sameSite: 'lax',
  });

  return response;
}
