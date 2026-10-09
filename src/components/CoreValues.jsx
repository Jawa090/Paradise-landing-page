import React from 'react';

export default function CoreValues() {
  const clientLogos = [
    { name: 'Tri-State Building logo', src: '/clients/client-1-color (1).avif' },
    { name: 'Murphy Kennedy Group', src: '/clients/client-12.avif' },
    { name: 'ABS Construction', src: '/clients/client-13.avif' },
    { name: 'T.B. Penick & Sons logo', src: '/clients/client-14.avif' },
    { name: 'Kilowatt Electric', src: '/clients/client-5.avif' },
    { name: 'Empire Steel Works logo', src: '/clients/client-2.avif' },
    { name: 'Lano Electric Co. logo', src: '/clients/client-4 (1).avif' },
        {name:'Floors Smart', src:'/clients/client-6.avif'},

    {name:'Kilowatt Electric', src:'/clients/client-7.avif'},
  ];

  return (
    <section className="hero-trust-strip" style={{ backgroundColor: '#ffffff', borderTop: '1px solid #e2e8f0', padding: '3rem 1.5rem 2.5rem 1.5rem', fontFamily: 'var(--font-main)' }}>
      <div className="container" style={{ maxWidth: '1150px', margin: '0 auto' }}>
        
        <p style={{ textAlign: 'center', fontSize: '0.72rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#64748b', fontWeight: 700, marginBottom: '2rem' }}>
          TRUSTED BY CONTRACTORS ACROSS THE UNITED STATES
        </p>

        {/* 5 Stat Columns */}
        <div className="core-stats-grid">
          
          <div className="stat-item">
            <strong className="stat-number">14+</strong>
            <span className="stat-label">
              YEARS EXPERIENCE
            </span>
          </div>

          <div className="stat-item">
            <strong className="stat-number">50,000+</strong>
            <span className="stat-label">
              CONTRACTORS SERVED
            </span>
          </div>

          <div className="stat-item">
            <strong className="stat-number">$1.5B+</strong>
            <span className="stat-label">
              PROJECT VALUE ESTIMATED
            </span>
          </div>

          <div className="stat-item">
            <strong className="stat-number">100+</strong>
            <span className="stat-label">
              ESTIMATING PROFESSIONALS
            </span>
          </div>

          <div className="stat-item">
            <strong className="stat-number">24–48 hr</strong>
            <span className="stat-label">
              TYPICAL TURNAROUND
            </span>
          </div>

        </div>

        {/* Client Logos Grid */}
        <div className="logo-marquee-container">
          <div className="logo-marquee-track">
            {[...clientLogos, ...clientLogos].map((logo, idx) => (
              <div key={idx} className="logo-marquee-item">
                <img 
                  src={logo.src} 
                  alt={logo.name} 
                  className="logo-marquee-img"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
