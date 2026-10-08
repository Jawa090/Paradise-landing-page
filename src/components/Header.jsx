import React from 'react';

export default function Header({ onGetQuoteClick, onLogoClick }) {
  const handleLogoClick = (e) => {
    e.preventDefault();
    if (onLogoClick) {
      onLogoClick();
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="header-brand-wrap" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <a 
            href="/" 
            onClick={handleLogoClick} 
            className="brand-logo-link" 
            aria-label="Paradise Estimating Home"
          >
            <img src="/logo.webp" alt="Paradise Estimating Logo" className="brand-logo-img" width="58" height="58" />
          </a>
          <div className="proud-partner-badge" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', color: '#64748b', borderLeft: '1px solid #e2e8f0', paddingLeft: '0.8rem' }}>
            <span>Proudly part of</span>
            <img src="/logo11.png" alt="ContractorsList" style={{ height: '32px', width: 'auto' }} />
          </div>
        </div>

        <div className="header-right">
          <a href="tel:7187196171" className="header-call" data-track-cta="header-phone">
            <div className="header-phone-info" style={{ textAlign: 'right' }}>
              <span className="header-phone-label" style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#64748b', fontWeight: 600, display: 'block' }}>TALK TO AN ESTIMATOR</span>
              <span className="header-phone-num" style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0f172a' }}>(718) 719-6171</span>
            </div>
          </a>

          <button type="button" className="btn btn-primary" onClick={onGetQuoteClick} data-track-cta="header-get-quote" style={{ backgroundColor: '#56b32b', borderColor: '#56b32b', color: '#ffffff', borderRadius: '9999px', padding: '0.65rem 1.4rem', fontWeight: 700 }}>
            <span>Get my estimate</span>
          </button>
        </div>
      </div>
    </header>
  );
}
