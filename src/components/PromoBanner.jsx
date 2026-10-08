import React from 'react';

export default function PromoBanner({ timeLeft }) {
  return (
    <div className="top-promo-bar">
      <div className="container top-promo-inner" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="tel:7187196171" className="top-phone-pill" data-track-cta="topbar-call">
          <span>Call Now: <strong>(718) 719-6171</strong></span>
        </a>

        <div className="top-promo-offer">
          <span><strong>Save 20% on your first estimate</strong> — new clients</span>
        </div>
      </div>
    </div>
  );
}
