import React from 'react';

export default function Header({ onGetQuoteClick }) {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="#hero" className="brand-logo-link" aria-label="Paradise Estimating">
          <img src="/logo.webp" alt="Paradise Estimating" className="brand-logo-img" width="68" height="68" />
        </a>

        <div className="header-right">
          <a href="tel:7187196171" className="header-call" data-track-cta="header-phone">
            <div className="phone-bubble">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </div>
            <div className="header-phone-info">
              <span className="header-phone-label">Need urgent turnaround?</span>
              <span className="header-phone-num">(718) 719-6171</span>
            </div>
          </a>

          <button type="button" className="btn btn-primary" onClick={onGetQuoteClick} data-track-cta="header-get-quote">
            <span>Get a Free Quote</span>
            <svg viewBox="0 0 20 20" width="16" height="16" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
