import { ImageResponse } from 'next/og';
import { DATA } from '@/data/resume';

export const runtime = 'edge';

export const alt = `${DATA.en.name} - Full Stack Developer & Backend Architect | NestJS, React, AWS | 4+ Years Experience`;
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
          justifyContent: 'space-between',
          backgroundColor: '#0a0a0a',
          backgroundImage: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)',
          padding: '60px',
          position: 'relative',
        }}
      >
        {/* Decorative gradient blob */}
        <div
          style={{
            position: 'absolute',
            top: '-100px',
            right: '-100px',
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
            borderRadius: '50%',
          }}
        />
        
        {/* Header with badge */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', zIndex: 1 }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '8px 16px',
              backgroundColor: 'rgba(59, 130, 246, 0.1)',
              border: '1px solid rgba(59, 130, 246, 0.3)',
              borderRadius: '24px',
              fontSize: '18px',
              color: '#60a5fa',
              fontWeight: '500',
              width: 'fit-content',
            }}
          >
            🚀 Available for Remote Opportunities
          </div>
          
          <h1
            style={{
              fontSize: '68px',
              fontWeight: 'bold',
              color: '#fff',
              margin: '0',
              lineHeight: '1.1',
              letterSpacing: '-0.02em',
            }}
          >
            {DATA.en.name}
          </h1>
          
          <p
            style={{
              fontSize: '36px',
              color: '#e5e5e5',
              margin: '0',
              fontWeight: '600',
            }}
          >
            Full Stack Developer & Backend Architect
          </p>
          
          <p
            style={{
              fontSize: '22px',
              color: '#a3a3a3',
              margin: '0',
              maxWidth: '800px',
              lineHeight: '1.4',
            }}
          >
            Specialized in Clean Architecture, DDD & CQRS patterns
          </p>
        </div>

        {/* Stats section */}
        <div style={{ display: 'flex', gap: '40px', zIndex: 1 }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontSize: '42px', fontWeight: 'bold', color: '#60a5fa' }}>4+</div>
            <div style={{ fontSize: '18px', color: '#a3a3a3' }}>Years Exp</div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontSize: '42px', fontWeight: 'bold', color: '#60a5fa' }}>8</div>
            <div style={{ fontSize: '18px', color: '#a3a3a3' }}>Microservices</div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontSize: '42px', fontWeight: 'bold', color: '#60a5fa' }}>100K+</div>
            <div style={{ fontSize: '18px', color: '#a3a3a3' }}>Daily Users</div>
          </div>
        </div>

        {/* Tech stack badges */}
        <div
          style={{
            display: 'flex',
            gap: '12px',
            flexWrap: 'wrap',
            zIndex: 1,
          }}
        >
          {['TypeScript', 'NestJS', 'React', 'Next.js', 'PostgreSQL', 'AWS', 'Docker'].map((tech) => (
            <div
              key={tech}
              style={{
                padding: '10px 20px',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                color: '#e5e5e5',
                borderRadius: '8px',
                fontSize: '18px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                fontWeight: '500',
              }}
            >
              {tech}
            </div>
          ))}
        </div>

        {/* Footer with URL */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            paddingTop: '20px',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            zIndex: 1,
          }}
        >
          <div style={{ fontSize: '24px', color: '#60a5fa', fontWeight: '600' }}>
            vhalvarez.com
          </div>
          <div style={{ fontSize: '18px', color: '#737373' }}>
            Caracas, VE • Remote
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
