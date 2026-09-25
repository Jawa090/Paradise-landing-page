import React from 'react';

export default function ThankYouView({ data, onReset }) {
  const safeData = data || {
    name: 'Valued Contractor',
    trade: 'General Construction Takeoff',
    phone: 'On File',
    filesCount: 0
  };

  return (
    <section className="section" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
      <div className="container">
        <div className="hero-quote-card" style={{ maxWidth: '640px', margin: '0 auto', textAlign: 'center', padding: '3.5rem 2.5rem' }}>
          <div className="success-pop">
            <svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
          </div>

          <h2 className="title-lg" style={{ marginBottom: '0.75rem' }}>Your Project Has Been Submitted</h2>
          
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1.05rem', lineHeight: '1.6', marginBottom: '1.75rem' }}>
            Our estimating team has received your information and will review the project scope and requirements.
          </p>

          <div className="thank-you-sheet">
            <div className="sheet-line">
              <span style={{ color: 'var(--color-text-light)' }}>Contact Name:</span>
              <strong style={{ color: 'var(--color-dark)' }}>{safeData.name || 'Valued Contractor'}</strong>
            </div>
            <div className="sheet-line">
              <span style={{ color: 'var(--color-text-light)' }}>Trade / Scope:</span>
              <strong style={{ color: 'var(--color-primary)' }}>{safeData.trade || 'General Construction Takeoff'}</strong>
            </div>
            <div className="sheet-line">
              <span style={{ color: 'var(--color-text-light)' }}>Phone:</span>
              <strong style={{ color: 'var(--color-dark)' }}>{safeData.phone || 'On File'}</strong>
            </div>
            {safeData.filesCount > 0 && (
              <div className="sheet-line">
                <span style={{ color: 'var(--color-text-light)' }}>Plans Attached:</span>
                <strong style={{ color: 'var(--color-dark)' }}>{safeData.filesCount} file(s)</strong>
              </div>
            )}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', marginTop: '1.5rem' }}>
            <a href="tel:7187196171" className="btn btn-primary btn-lg" style={{ width: '100%', maxWidth: '360px' }} data-track-cta="thank-you-call">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <span>Call (718) 719-6171</span>
            </a>

            <button 
              type="button" 
              className="btn btn-secondary" 
              onClick={onReset}
              style={{ width: '100%', maxWidth: '360px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                <polyline points="9 22 9 12 15 12 15 22"/>
              </svg>
              <span>Return to Main Page</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
