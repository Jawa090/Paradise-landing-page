import React from 'react';

const projectItems = [
  {
    role: 'GENERAL CONTRACTOR',
    title: '75-unit affordable housing project',
    val: 'Estimated value $13.29M'
  },
  {
    role: 'CONCRETE',
    title: 'Flex warehouse',
    val: 'Estimated value $0.48M'
  },
  {
    role: 'MASONRY',
    title: 'Fire station',
    val: 'Estimated value $0.39M'
  },
  {
    role: 'ROOFING',
    title: 'Church renovation & expansion',
    val: 'Estimated value $0.32M'
  },
  {
    role: 'DRYWALL',
    title: 'Fitness center fit-out',
    val: 'Estimated value $0.32M'
  },
  {
    role: 'ELECTRICAL',
    title: 'Community center',
    val: 'Estimated value $0.16M'
  }
];

export default function ProjectsEstimatedSection() {
  return (
    <section className="projects-estimated-section" style={{ backgroundColor: '#ffffff', padding: '4.5rem 1.5rem', fontFamily: 'var(--font-main)' }}>
      <div className="container" style={{ maxWidth: '1150px', margin: '0 auto' }}>
        
        {/* Section Header */}
        <div style={{ marginBottom: '2.5rem' }}>
          <span style={{ backgroundColor: '#eef8ea', color: '#3d8618', borderRadius: '9999px', padding: '0.25rem 0.85rem', fontSize: '0.78rem', fontWeight: 600, display: 'inline-block', marginBottom: '0.75rem' }}>
            From plans to bid-ready estimate
          </span>
          <h2 style={{ fontSize: '2.4rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
            Projects we've estimated
          </h2>
        </div>

        {/* 4 Column / 2 Row Grid */}
        <div className="projects-estimated-grid">
          {projectItems.map((p, idx) => (
            <div key={idx} style={{ borderBottom: '1px solid #f1f5f9', paddingBottom: '1.25rem' }}>
              <span style={{ fontSize: '0.68rem', letterSpacing: '0.05em', textTransform: 'uppercase', color: '#94a3b8', fontWeight: 700, display: 'block', marginBottom: '0.4rem' }}>
                {p.role}
              </span>
              <strong style={{ display: 'block', fontSize: '0.95rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.3rem', lineHeight: 1.35 }}>
                {p.title}
              </strong>
              <span style={{ fontSize: '0.78rem', color: '#64748b' }}>
                {p.val}
              </span>
            </div>
          ))}
        </div>

        <div>
          <a 
            href="#deliverables-section" 
            style={{ fontSize: '0.88rem', fontWeight: 600, color: '#56b32b', textDecoration: 'underline', textUnderlineOffset: '3px' }}
          >
            See the full portfolio by trade &rarr;
          </a>
        </div>

      </div>
    </section>
  );
}
