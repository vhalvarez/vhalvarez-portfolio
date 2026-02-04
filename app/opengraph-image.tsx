import { ImageResponse } from 'next/og';
import { DATA } from '@/data/resume';

export const runtime = 'edge';

export const alt = `${DATA.en.name} - Full Stack Developer & Backend Architect | NestJS, React, AWS`;
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
              margin: '0 0 10px 0',
              textAlign: 'center',
            }}
          >
            {DATA.en.name}
          </h1>
          <p
            style={{
              fontSize: '32px',
              color: '#ddd',
              margin: '0 0 10px 0',
              textAlign: 'center',
            }}
          >
            Full Stack Developer & Backend Architect
          </p>
          <p
            style={{
              fontSize: '24px',
              color: '#999',
              margin: '0 0 40px 0',
              textAlign: 'center',
              maxWidth: '900px',
            }}
          >
            Clean Architecture • DDD • CQRS • Microservices
          </p>
          <div
            style={{
              display: 'flex',
              gap: '15px',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            {['TypeScript', 'NestJS', 'Fastify', 'React', 'Next.js', 'PostgreSQL', 'Docker', 'AWS'].map((tech) => (
              <div
                key={tech}
                style={{
                  padding: '10px 20px',
                  backgroundColor: '#222',
                  color: '#fff',
                  borderRadius: '8px',
                  fontSize: '22px',
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
