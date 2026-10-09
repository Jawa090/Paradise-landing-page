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
              onClick={()=>{window.location.href='tel:+17187196171'}}
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
        <div className="container footer-main-container">
          
          {/* Left Column: Brand & Addresses */}
          <div className="footer-left-col">
            <img src="logo.webp" alt="Paradise Estimating" className="footer-logo-img" />
            <p className="footer-brand-intro">
              Construction estimating and quantity takeoff services for U.S. contractors since 2012.
            </p>

            {/* 5 USA Regional Locations Grid */}
            <div className="footer-locations-grid">
              <div className="footer-location-item">
                <strong className="footer-location-tag">
                  USA | NEW YORK
                </strong>
                <p className="footer-location-addr">
                  896 Bay Ridge Avenue<br />Brooklyn, NY 11220
                </p>
              </div>

              <div className="footer-location-item">
                <strong className="footer-location-tag">
                  USA | TEXAS
                </strong>
                <p className="footer-location-addr">
                  1001 McKinney St, Suite 1100<br />Houston, TX 77002
                </p>
              </div>

              <div className="footer-location-item">
                <strong className="footer-location-tag">
                  USA | FLORIDA
                </strong>
                <p className="footer-location-addr">
                  111 N Orange Ave, Suite 800<br />Orlando, FL 32801
                </p>
              </div>

              <div className="footer-location-item">
                <strong className="footer-location-tag">
                  USA | CALIFORNIA
                </strong>
                <p className="footer-location-addr">
                  400 S Hope St, Suite 900<br />Los Angeles, CA 90071
                </p>
              </div>

              <div className="footer-location-item">
                <strong className="footer-location-tag">
                  USA | ARIZONA
                </strong>
                <p className="footer-location-addr">
                  250 N Central Ave, Suite 400<br />Phoenix, AZ 85004
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Details */}
          <div className="footer-contact-box">
            <div style={{ marginBottom: '0.5rem' }}>
              <a href="tel:7187196171" className="footer-phone-link">
                (718) 719–6171
              </a>
            </div>
            <div>
              <a href="mailto:sales@paradiseestimating.com" className="footer-email-link">
                sales@paradiseestimating.com
              </a>
            </div>
          </div>
        </div>

        <div className="container footer-sub-container">
          <p className="footer-copyright-text">
            &copy; 2026 Paradise Estimating. All rights reserved.
          </p>

          <div className="footer-legal-links">
            <a onClick={() => onOpenLegal('privacy')} style={{ cursor: 'pointer', textDecoration: 'underline' }}>Privacy Policy</a>
            <a onClick={() => onOpenLegal('terms')} style={{ cursor: 'pointer', textDecoration: 'underline' }}>Terms</a>
            <a onClick={onGetQuoteClick || scrollToQuote} style={{ cursor: 'pointer', textDecoration: 'underline' }}>Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}