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
        <div className="header-brand-wrap">
          <a 
            href="/" 
            onClick={handleLogoClick} 
            className="brand-logo-link" 
            aria-label="Paradise Estimating Home"
          >
            <img src="/logo.webp" alt="Paradise Estimating Logo" className="brand-logo-img" width="58" height="58" />
          </a>
          <div className="proud-partner-badge">
            <span>Proudly part of</span>
            <img src="/logo11.png" alt="ContractorsList" style={{ height: '32px', width: 'auto' }} />
          </div>
        </div>

        <div className="header-right">
          <a href="tel:7187196171" className="header-call" data-track-cta="header-phone">
            <div className="header-phone-info">
              <span className="header-phone-label">TALK TO AN ESTIMATOR</span>
              <span className="header-phone-num">(718) 719-6171</span>
            </div>
          </a>

          <button type="button" className="btn btn-primary header-get-quote-btn" onClick={onGetQuoteClick} data-track-cta="header-get-quote">
            <span>Get my estimate</span>
          </button>
        </div>
      </div>
    </header>
  );
}
