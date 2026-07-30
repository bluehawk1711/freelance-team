import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'FloatTech - Digital Agency';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #0F172A 100%)',
          padding: '80px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background gradient circles */}
        <div
          style={{
            position: 'absolute',
            top: '-200px',
            right: '-200px',
            width: '600px',
            height: '600px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0, 87, 255, 0.3) 0%, transparent 70%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-150px',
            left: '-150px',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(124, 58, 237, 0.25) 0%, transparent 70%)',
          }}
        />

        {/* Logo/Brand mark */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '40px',
          }}
        >
          <div
            style={{
              width: '60px',
              height: '60px',
              borderRadius: '16px',
              background: 'linear-gradient(135deg, #0057FF 0%, #7C3AED 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 10V3L4 14h7v7l9-11h-7z"
                fill="white"
              />
            </svg>
          </div>
          <span
            style={{
              fontSize: '32px',
              fontWeight: 'bold',
              color: 'white',
              letterSpacing: '-0.02em',
            }}
          >
            FloatTech
          </span>
        </div>

        {/* Main heading */}
        <h1
          style={{
            fontSize: '72px',
            fontWeight: 'bold',
            color: 'white',
            lineHeight: '1.1',
            margin: '0 0 24px 0',
            letterSpacing: '-0.03em',
            maxWidth: '800px',
          }}
        >
          Building Modern{'\n'}
          <span style={{ color: '#3B82F6' }}>Digital</span>{' '}
          Experiences
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontSize: '28px',
            color: '#94A3B8',
            margin: '0 0 40px 0',
            maxWidth: '700px',
            lineHeight: '1.4',
          }}
        >
          Web design, development, and digital marketing services for businesses worldwide.
        </p>

        {/* Tags */}
        <div
          style={{
            display: 'flex',
            gap: '12px',
          }}
        >
          {['UI/UX Design', 'Web Development', 'SEO'].map((tag) => (
            <div
              key={tag}
              style={{
                padding: '8px 20px',
                borderRadius: '100px',
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: 'white',
                fontSize: '18px',
                fontWeight: '500',
              }}
            >
              {tag}
            </div>
          ))}
        </div>

        {/* Bottom URL */}
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            left: '80px',
            color: '#64748B',
            fontSize: '20px',
          }}
        >
          floattech.com
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
