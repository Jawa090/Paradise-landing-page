import React from 'react';

export default function CoreValues() {
  const clientLogos = [
    { name: 'Tri-State Building logo', src: '/clients/client-1-color.avif' },
    { name: 'Murphy Kennedy Group', src: '/clients/client-12.avif' },
    { name: 'ABS Construction', src: '/clients/client-13.avif' },
    { name: 'T.B. Penick & Sons logo', src: '/clients/client-14.avif' },
    { name: 'Kilowatt Electric', src: '/clients/client-15.avif' },
    { name: 'Empire Steel Works logo', src: '/clients/client-2.avif' },
    { name: 'Lano Electric Co. logo', src: '/clients/client-4.avif' }
  ];

  return (
    <section className="hero-trust-strip" style={{ backgroundColor: '#ffffff', borderTop: '1px solid #e2e8f0', padding: '3rem 1.5rem 2.5rem 1.5rem', fontFamily: 'var(--font-main)' }}>
      <div className="container" style={{ maxWidth: '1150px', margin: '0 auto' }}>
        
        <p style={{ textAlign: 'center', fontSize: '0.72rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#64748b', fontWeight: 700, marginBottom: '2rem' }}>
          TRUSTED BY CONTRACTORS ACROSS THE UNITED STATES
        </p>

        {/* 5 Stat Columns */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))', gap: '1.5rem', textAlign: 'left', marginBottom: '2.5rem', borderBottom: '1px solid #f1f5f9', paddingBottom: '2.5rem' }}>
          
          <div style={{ borderLeft: '3px solid #e2e8f0', paddingLeft: '1rem' }}>
            <strong style={{ display: 'block', fontSize: '2.4rem', fontWeight: 800, color: '#0f172a', lineHeight: 1 }}>14+</strong>
            <span style={{ fontSize: '0.7rem', letterSpacing: '0.04em', textTransform: 'uppercase', color: '#64748b', fontWeight: 700, marginTop: '0.4rem', display: 'block' }}>
              YEARS EXPERIENCE
            </span>
          </div>

          <div style={{ borderLeft: '3px solid #e2e8f0', paddingLeft: '1rem' }}>
            <strong style={{ display: 'block', fontSize: '2.4rem', fontWeight: 800, color: '#0f172a', lineHeight: 1 }}>50,000+</strong>
            <span style={{ fontSize: '0.7rem', letterSpacing: '0.04em', textTransform: 'uppercase', color: '#64748b', fontWeight: 700, marginTop: '0.4rem', display: 'block' }}>
              CONTRACTORS SERVED
            </span>
          </div>

          <div style={{ borderLeft: '3px solid #e2e8f0', paddingLeft: '1rem' }}>
            <strong style={{ display: 'block', fontSize: '2.4rem', fontWeight: 800, color: '#0f172a', lineHeight: 1 }}>$1.5B+</strong>
            <span style={{ fontSize: '0.7rem', letterSpacing: '0.04em', textTransform: 'uppercase', color: '#64748b', fontWeight: 700, marginTop: '0.4rem', display: 'block' }}>
              PROJECT VALUE ESTIMATED
            </span>
          </div>

          <div style={{ borderLeft: '3px solid #e2e8f0', paddingLeft: '1rem' }}>
            <strong style={{ display: 'block', fontSize: '2.4rem', fontWeight: 800, color: '#0f172a', lineHeight: 1 }}>100+</strong>
            <span style={{ fontSize: '0.7rem', letterSpacing: '0.04em', textTransform: 'uppercase', color: '#64748b', fontWeight: 700, marginTop: '0.4rem', display: 'block' }}>
              ESTIMATING PROFESSIONALS
            </span>
          </div>

          <div style={{ borderLeft: '3px solid #e2e8f0', paddingLeft: '1rem' }}>
            <strong style={{ display: 'block', fontSize: '2.4rem', fontWeight: 800, color: '#0f172a', lineHeight: 1 }}>24–48 hr</strong>
            <span style={{ fontSize: '0.7rem', letterSpacing: '0.04em', textTransform: 'uppercase', color: '#64748b', fontWeight: 700, marginTop: '0.4rem', display: 'block' }}>
              TYPICAL TURNAROUND
            </span>
          </div>

        </div>

        {/* Client Logos Grid */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', gap: '2.5rem', opacity: 0.85 }}>
          {clientLogos.map((logo, idx) => (
            <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <img 
                src={logo.src} 
                alt={logo.name} 
                style={{ maxHeight: '28px', maxWidth: '110px', objectFit: 'contain' }} 
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
