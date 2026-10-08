import React from 'react';

export default function Footer({ onOpenLegal, onLogoClick, onUploadClick, onGetQuoteClick }) {
  const handleHomeClick = (e) => {
    if (onLogoClick) {
      e.preventDefault();
      onLogoClick();
    }
  };

  const scrollToUpload = () => {
    const el = document.getElementById('upload-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToQuote = () => {
    const el = document.getElementById('quote-card-target');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer-wrapper" style={{ backgroundColor: '#0b1320', color: '#ffffff', fontFamily: 'var(--font-main)' }}>
      {/* Upper Ready to get your project estimated CTA section */}
      <div className="footer-cta-section" style={{ padding: '5rem 1.5rem 4rem 1.5rem', textAlign: 'center', borderBottom: '1px solid #1e293b' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.8rem', fontWeight: 800, color: '#ffffff', lineHeight: 1.15, marginBottom: '1rem' }}>
            Ready to get your<br />project estimated?
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#94a3b8', marginBottom: '2rem' }}>
            Upload your plans today and get your next bid ready.
          </p>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
            <button
              type="button"
              className="btn"
              onClick={onUploadClick || scrollToUpload}
              style={{ backgroundColor: '#56b32b', color: '#ffffff', borderRadius: '9999px', padding: '0.85rem 1.8rem', fontWeight: 700, fontSize: '0.95rem', border: 'none', cursor: 'pointer' }}
            >
              Upload plans — Get my quote
            </button>
            <button
              type="button"
              className="btn"
              onClick={onGetQuoteClick || scrollToQuote}
              style={{ backgroundColor: 'transparent', color: '#ffffff', borderRadius: '9999px', padding: '0.85rem 1.8rem', fontWeight: 600, fontSize: '0.95rem', border: '1px solid #475569', cursor: 'pointer' }}
            >
              Talk to an estimator
            </button>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap', fontSize: '0.82rem', color: '#94a3b8' }}>
            <span>✓ 24–48 hour turnaround</span>
            <span>✓ Professional estimators</span>
            <span>✓ U.S. project support</span>
            <span>✓ 20% off first estimate</span>
          </div>
        </div>
      </div>

      {/* Bottom Main Footer details */}
      <div className="footer-bottom-section" style={{ padding: '3.5rem 1.5rem 2.5rem 1.5rem', backgroundColor: '#070d18' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
          
          {/* Left Column: Brand & Addresses */}
          <div style={{ maxWidth: '650px' }}>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.75rem' }}>Paradise Estimating</h3>
            <p style={{ fontSize: '0.88rem', color: '#94a3b8', lineHeight: 1.5, marginBottom: '1.5rem' }}>
              Construction estimating and quantity takeoff services for U.S. contractors since 2012.
            </p>

            {/* 3 USA Regional Locations */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1.25rem', marginTop: '1rem' }}>
              <div>
                <strong style={{ display: 'block', fontSize: '0.72rem', letterSpacing: '0.05em', color: '#56b32b', marginBottom: '0.25rem' }}>
                  USA | NEW YORK
                </strong>
                <p style={{ fontSize: '0.82rem', color: '#64748b', lineHeight: 1.45, margin: 0 }}>
                  896 Bay Ridge Avenue<br />Brooklyn NY 11220
                </p>
              </div>

              <div>
                <strong style={{ display: 'block', fontSize: '0.72rem', letterSpacing: '0.05em', color: '#56b32b', marginBottom: '0.25rem' }}>
                  USA | TEXAS
                </strong>
                <p style={{ fontSize: '0.82rem', color: '#64748b', lineHeight: 1.45, margin: 0 }}>
                  1001 McKinney St, Suite 1100<br />Houston, TX 77002, USA
                </p>
              </div>

              <div>
                <strong style={{ display: 'block', fontSize: '0.72rem', letterSpacing: '0.05em', color: '#56b32b', marginBottom: '0.25rem' }}>
                  USA | FLORIDA
                </strong>
                <p style={{ fontSize: '0.82rem', color: '#64748b', lineHeight: 1.45, margin: 0 }}>
                  123 Construction Blvd, Suite 101<br />Orlando, FL 32801
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Details (Vertically Centered in Row) */}
          <div style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ marginBottom: '0.4rem' }}>
              <a href="tel:7187196171" style={{ fontSize: '1.1rem', fontWeight: 800, color: '#ffffff', textDecoration: 'none' }}>
                (718) 719–6171
              </a>
            </div>
            <div>
              <a href="mailto:sales@paradiseestimating.com" style={{ fontSize: '0.88rem', color: '#94a3b8', textDecoration: 'none' }}>
                sales@paradiseestimating.com
              </a>
            </div>
          </div>
        </div>

        <div className="container" style={{ maxWidth: '1200px', margin: '2.5rem auto 0 auto', paddingTop: '1.5rem', borderTop: '1px solid #1e293b', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <p style={{ fontSize: '0.78rem', color: '#475569', margin: 0 }}>
            &copy; 2026 Paradise Estimating. All rights reserved.
          </p>

          <div style={{ display: 'flex', gap: '1rem', fontSize: '0.82rem', color: '#64748b' }}>
            <a onClick={() => onOpenLegal('privacy')} style={{ cursor: 'pointer', textDecoration: 'underline' }}>Privacy Policy</a>
            <a onClick={() => onOpenLegal('terms')} style={{ cursor: 'pointer', textDecoration: 'underline' }}>Terms</a>
            <a onClick={onGetQuoteClick || scrollToQuote} style={{ cursor: 'pointer', textDecoration: 'underline' }}>Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
