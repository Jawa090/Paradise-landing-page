import React from 'react';

const contractorTypes = [
  {
    title: 'GENERAL CONTRACTORS',
    desc: 'Full-scope estimates across every CSI division.',
    arrow: true
  },
  {
    title: 'SUBCONTRACTORS',
    desc: 'Trade-specific takeoffs and pricing for your scope.',
    arrow: true
  },
  {
    title: 'HOME BUILDERS',
    desc: 'Single-family, custom homes and multi-family.',
    arrow: true
  },
  {
    title: 'COMMERCIAL CONTRACTORS',
    desc: 'Offices, retail, warehouses, schools and healthcare.',
    arrow: true
  },
  {
    title: 'DEVELOPERS',
    desc: 'Preliminary and budget estimates for feasibility.',
    arrow: true
  },
  {
    title: 'REMODELING CONTRACTORS',
    desc: 'Renovations, additions and tenant fit-outs.',
    arrow: true
  }
];

const tradesList = [
  'Concrete', 'Electrical', 'Plumbing', 'HVAC', 'MEP', 'Mechanical', 'Drywall', 
  'Roofing', 'Lumber & Framing', 'Masonry', 'Metal & Structural Steel', 
  'Ductwork', 'Painting', 'Sitework', 'General Construction'
];

export default function EstimatingSupportSection({ onUploadClick }) {
  const scrollToUpload = () => {
    const el = document.getElementById('upload-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="estimating-support-section" style={{ backgroundColor: '#f8fafc', padding: '4.5rem 1.5rem', fontFamily: 'var(--font-main)' }}>
      <div className="container" style={{ maxWidth: '1150px', margin: '0 auto' }}>
        
        {/* Section Header */}
        <div style={{ marginBottom: '2.5rem' }}>
          <span style={{ backgroundColor: '#eef8ea', color: '#3d8618', borderRadius: '9999px', padding: '0.25rem 0.85rem', fontSize: '0.78rem', fontWeight: 600, display: 'inline-block', marginBottom: '0.75rem' }}>
            Can you estimate my project?
          </span>
          <h2 style={{ fontSize: '2.4rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
            Estimating support for every type<br />of contractor
          </h2>
        </div>

        {/* Contractor Types Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem', marginBottom: '3rem' }}>
          {contractorTypes.map((type, idx) => (
            <div 
              key={idx}
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '12px',
                padding: '1.5rem',
                position: 'relative'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <strong style={{ fontSize: '0.82rem', letterSpacing: '0.04em', textTransform: 'uppercase', color: '#0f172a' }}>
                  {type.title}
                </strong>
                <span style={{ color: '#56b32b', fontSize: '1rem' }}>&rarr;</span>
              </div>
              <p style={{ fontSize: '0.82rem', color: '#64748b', lineHeight: 1.45, margin: 0 }}>
                {type.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Trades We Estimate Pills */}
        <div style={{ marginBottom: '2rem' }}>
          <span style={{ fontSize: '0.7rem', letterSpacing: '0.06em', textTransform: 'uppercase', color: '#94a3b8', fontWeight: 700, display: 'block', marginBottom: '0.85rem' }}>
            TRADES WE ESTIMATE
          </span>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {tradesList.map((t, idx) => (
              <span 
                key={idx}
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '9999px',
                  padding: '0.4rem 0.9rem',
                  fontSize: '0.78rem',
                  color: '#334155',
                  fontWeight: 500
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div>
          <button
            type="button"
            className="btn"
            onClick={onUploadClick || scrollToUpload}
            style={{ backgroundColor: '#56b32b', color: '#ffffff', borderRadius: '9999px', padding: '0.75rem 1.6rem', fontWeight: 700, fontSize: '0.9rem', border: 'none', cursor: 'pointer' }}
          >
            I need an estimate
          </button>
        </div>

      </div>
    </section>
  );
}
