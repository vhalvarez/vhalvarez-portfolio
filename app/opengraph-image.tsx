import { ImageResponse } from 'next/og';
import { DATA } from '@/data/resume';

export const runtime = 'edge';

export const alt = `${DATA.en.name} - Full Stack Developer`;
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
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#000',
          backgroundImage: 'radial-gradient(circle at 25px 25px, #333 2%, transparent 0%), radial-gradient(circle at 75px 75px, #333 2%, transparent 0%)',
          backgroundSize: '100px 100px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '80px',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            borderRadius: '20px',
            border: '2px solid #444',
          }}
        >
          <h1
            style={{
              fontSize: '72px',
              fontWeight: 'bold',
              color: '#fff',
              margin: '0 0 20px 0',
              textAlign: 'center',
            }}
          >
            {DATA.en.name}
          </h1>
          <p
            style={{
              fontSize: '36px',
              color: '#aaa',
              margin: '0 0 40px 0',
              textAlign: 'center',
              maxWidth: '900px',
            }}
          >
            {DATA.en.description}
          </p>
          <div
            style={{
              display: 'flex',
              gap: '20px',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            {['React', 'Next.js', 'TypeScript', 'Node.js', 'NestJS', 'AWS'].map((tech) => (
              <div
                key={tech}
                style={{
                  padding: '12px 24px',
                  backgroundColor: '#222',
                  color: '#fff',
                  borderRadius: '8px',
                  fontSize: '24px',
                  border: '1px solid #444',
                }}
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
