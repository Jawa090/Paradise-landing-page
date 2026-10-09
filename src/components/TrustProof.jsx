import React from 'react';

export default function TrustProof({ onOpenSample, onUploadClick }) {
  return (
    <section className="deliverables-dark-showcase" id="deliverables-section" style={{ backgroundColor: '#0b1320', color: '#ffffff', padding: '4.5rem 1.5rem', fontFamily: 'var(--font-main)' }}>
      <div className="container" style={{ maxWidth: '1150px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '3rem', flexWrap: 'wrap' }}>
        
        {/* Left Side: Window Mockup */}
        <div style={{ flex: '1', minWidth: '320px', maxWidth: '540px' }}>
          <div style={{ backgroundColor: '#1e293b', borderRadius: '12px 12px 0 0', padding: '0.6rem 1rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#ef4444' }}></span>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#f59e0b' }}></span>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#10b981' }}></span>
            <span style={{ fontSize: '0.72rem', color: '#94a3b8', marginLeft: '0.5rem' }}>sample-estimate.xlsx</span>
          </div>
          <div style={{ backgroundColor: '#0f172a', borderRadius: '0 0 12px 12px', padding: '1rem', border: '1px solid #1e293b', borderTop: 'none', height: '320px', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src="/sample-estimate.jpg" alt="Sample Takeoff Sheet" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '6px' }} />
          </div>
        </div>

        {/* Right Side: Features & Buttons */}
        <div style={{ flex: '1', minWidth: '320px', maxWidth: '520px' }}>
          <span style={{ backgroundColor: '#1e293b', color: '#56b32b', borderRadius: '9999px', padding: '0.25rem 0.85rem', fontSize: '0.78rem', fontWeight: 600, display: 'inline-block', marginBottom: '1rem' }}>
            What you receive
          </span>

          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#ffffff', lineHeight: 1.15, marginBottom: '2rem' }}>
            See what your estimate<br />looks like
          </h2>

          <div className="trust-proof-grid">
            <div>
              <strong style={{ display: 'block', fontSize: '0.9rem', color: '#ffffff', marginBottom: '0.3rem' }}>
                Detailed quantity takeoffs
              </strong>
              <p style={{ fontSize: '0.8rem', color: '#94a3b8', lineHeight: 1.45, margin: 0 }}>
                Areas, lengths, counts and volumes for every trade.
              </p>
            </div>

            <div>
              <strong style={{ display: 'block', fontSize: '0.9rem', color: '#ffffff', marginBottom: '0.3rem' }}>
                Material & labor pricing
              </strong>
              <p style={{ fontSize: '0.8rem', color: '#94a3b8', lineHeight: 1.45, margin: 0 }}>
                ZIP-code-based pricing using regional cost data, including RSMeans.
              </p>
            </div>

            <div>
              <strong style={{ display: 'block', fontSize: '0.9rem', color: '#ffffff', marginBottom: '0.3rem' }}>
                Organized by CSI division
              </strong>
              <p style={{ fontSize: '0.8rem', color: '#94a3b8', lineHeight: 1.45, margin: 0 }}>
                Line items and cost summaries ready for your bid.
              </p>
            </div>

            <div>
              <strong style={{ display: 'block', fontSize: '0.9rem', color: '#ffffff', marginBottom: '0.3rem' }}>
                Excel & PDF deliverables
              </strong>
              <p style={{ fontSize: '0.8rem', color: '#94a3b8', lineHeight: 1.45, margin: 0 }}>
                Editable Excel plus a PDF report. Built in Bluebeam, PlanSwift and CostX.
              </p>
            </div>
          </div>

          <div className="trust-proof-buttons">
            <button
              type="button"
              className="btn"
              onClick={onOpenSample}
              style={{ backgroundColor: 'transparent', color: '#ffffff', borderRadius: '9999px', padding: '0.75rem 1.4rem', fontWeight: 600, fontSize: '0.88rem', border: '1px solid #475569', cursor: 'pointer' }}
            >
              View sample estimate
            </button>
            <button
              type="button"
              className="btn"
              onClick={onUploadClick}
              style={{ backgroundColor: '#56b32b', color: '#ffffff', borderRadius: '9999px', padding: '0.75rem 1.6rem', fontWeight: 700, fontSize: '0.88rem', border: 'none', cursor: 'pointer' }}
            >
              Upload plans — Get my quote
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
