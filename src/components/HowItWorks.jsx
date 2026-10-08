import React from 'react';

export default function HowItWorks() {
  return (
    <section className="how-it-works-section" id="how-it-works" style={{ backgroundColor: '#ffffff', padding: '4.5rem 1.5rem', fontFamily: 'var(--font-main)' }}>
      <div className="container" style={{ maxWidth: '1150px', margin: '0 auto' }}>
        
        <div style={{ marginBottom: '2.5rem' }}>
          <span style={{ backgroundColor: '#eef8ea', color: '#3d8618', borderRadius: '9999px', padding: '0.25rem 0.85rem', fontSize: '0.78rem', fontWeight: 600, display: 'inline-block', marginBottom: '0.75rem' }}>
            How it works
          </span>
          <h2 style={{ fontSize: '2.4rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
            Get your estimate in 3 simple steps
          </h2>
        </div>

        {/* 3 Steps Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem', marginBottom: '2.5rem' }}>
          
          {/* Step 01 */}
          <div style={{ borderTop: '2px solid #0f172a', paddingTop: '1.25rem' }}>
            <span style={{ fontSize: '2.2rem', fontWeight: 800, color: '#56b32b', display: 'block', lineHeight: 1, marginBottom: '0.75rem' }}>01</span>
            <strong style={{ fontSize: '0.9rem', letterSpacing: '0.04em', textTransform: 'uppercase', color: '#0f172a', display: 'block', marginBottom: '0.5rem' }}>
              UPLOAD YOUR PLANS
            </strong>
            <p style={{ fontSize: '0.88rem', color: '#64748b', lineHeight: 1.55, margin: 0 }}>
              Send drawings, specifications or project documents — PDF, DWG or CAD.
            </p>
          </div>

          {/* Step 02 */}
          <div style={{ borderTop: '2px solid #e2e8f0', paddingTop: '1.25rem' }}>
            <span style={{ fontSize: '2.2rem', fontWeight: 800, color: '#56b32b', display: 'block', lineHeight: 1, marginBottom: '0.75rem' }}>02</span>
            <strong style={{ fontSize: '0.9rem', letterSpacing: '0.04em', textTransform: 'uppercase', color: '#0f172a', display: 'block', marginBottom: '0.5rem' }}>
              WE BUILD YOUR ESTIMATE
            </strong>
            <p style={{ fontSize: '0.88rem', color: '#64748b', lineHeight: 1.55, margin: 0 }}>
              We confirm scope and price, then a specialist estimator performs the takeoff and pricing. A senior estimator reviews it before delivery.
            </p>
          </div>

          {/* Step 03 */}
          <div style={{ borderTop: '2px solid #e2e8f0', paddingTop: '1.25rem' }}>
            <span style={{ fontSize: '2.2rem', fontWeight: 800, color: '#56b32b', display: 'block', lineHeight: 1, marginBottom: '0.75rem' }}>03</span>
            <strong style={{ fontSize: '0.9rem', letterSpacing: '0.04em', textTransform: 'uppercase', color: '#0f172a', display: 'block', marginBottom: '0.5rem' }}>
              RECEIVE A BID-READY ESTIMATE
            </strong>
            <p style={{ fontSize: '0.88rem', color: '#64748b', lineHeight: 1.55, margin: 0 }}>
              Get an organized Excel and PDF estimate, typically within 24–48 hours.
            </p>
          </div>

        </div>

        <div>
          <button 
            type="button" 
            className="btn"
            onClick={() => {
              const el = document.getElementById('upload-section');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            style={{ backgroundColor: '#56b32b', color: '#ffffff', borderRadius: '9999px', padding: '0.75rem 1.6rem', fontWeight: 700, fontSize: '0.9rem', border: 'none', cursor: 'pointer' }}
          >
            Upload my plans
          </button>
        </div>

      </div>
    </section>
  );
}
