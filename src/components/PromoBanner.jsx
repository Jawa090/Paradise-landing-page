import React from 'react';

export default function PromoBanner({ timeLeft }) {
  return (
    <div className="top-promo-bar">
      <div className="container top-promo-inner">
        <a href="tel:7187196171" className="top-phone-pill" data-track-cta="topbar-call">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
          </svg>
          <span>Call Now: <strong>(718) 719-6171</strong></span>
        </a>

        <div className="top-promo-offer">
          <span>✨ <strong>Save 20% on First Estimate</strong> — Bidding Season Special ✨</span>
        </div>

        <div className="countdown-box">
          <span style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Offer Ends In:</span>
          <span className="countdown-unit">{timeLeft.days}d</span>
          <span className="countdown-unit">{timeLeft.hours}h</span>
          <span className="countdown-unit">{timeLeft.minutes}m</span>
          <span className="countdown-unit">{timeLeft.seconds}s</span>
        </div>
      </div>
    </div>
  );
}
