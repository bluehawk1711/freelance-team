import { NextRequest, NextResponse } from 'next/server';
import { sendNewsletterNotification } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    await sendNewsletterNotification(email);

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for subscribing to our newsletter!',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Newsletter error:', error);
    return NextResponse.json(
      { error: 'Failed to subscribe' },
      { status: 500 }
    );
  }
}
