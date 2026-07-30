import { NextRequest, NextResponse } from 'next/server';
import { sendContactNotification } from '@/lib/email';
import { checkRateLimit } from '@/lib/rate-limit';

export async function POST(request: NextRequest) {
  try {
    const rateLimit = checkRateLimit(request);

    if (!rateLimit.allowed) {
      return NextResponse.json(
        { error: 'Too many requests. You can send up to 5 messages per day.' },
        {
          status: 429,
          headers: {
            'Retry-After': Math.ceil(
              (new Date(rateLimit.reset).getTime() - Date.now()) / 1000
            ).toString(),
          },
        }
      );
    }

    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    await sendContactNotification({ name, email, phone, subject, message });

    return NextResponse.json(
      {
        success: true,
        message: 'Your message has been received. We will get back to you soon!',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to process your request' },
      { status: 500 }
    );
  }
}
