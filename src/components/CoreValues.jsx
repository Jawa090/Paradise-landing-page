import React from 'react';

export default function CoreValues() {
  return (
    <section className="section section-usps">
      <div className="container">
        <div className="section-head text-center">
          <span className="badge-tag">WHY US</span>
          <h2 className="title-lg">Why Contractors Use Paradise Estimating</h2>
          <div className="brand-rule"></div>
        </div>

        <div className="usp-trio">
          {/* Card 1 */}
          <div className="usp-box">
            <div className="usp-icon-circle">
              <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
            </div>
            <h3 className="usp-title">24–48 Hour Turnaround</h3>
            <p className="usp-copy">Keep your bids moving without waiting days for estimating support.</p>
          </div>

          {/* Card 2 */}
          <div className="usp-box featured">
            <div className="featured-pill">MOST TRUSTED</div>
            <div className="usp-icon-circle">
              <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <circle cx="12" cy="12" r="6"/>
                <circle cx="12" cy="12" r="2"/>
              </svg>
            </div>
            <h3 className="usp-title">99% Accuracy — Guaranteed</h3>
            <p className="usp-copy">Detailed estimates and takeoffs designed to help reduce missed quantities and costly mistakes.</p>
          </div>

          {/* Card 3 */}
          <div className="usp-box">
            <div className="usp-icon-circle">
              <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="1" x2="12" y2="23"/>
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
              </svg>
            </div>
            <h3 className="usp-title">All Trades. Lower Cost.</h3>
            <p className="usp-copy">Get estimating support across multiple trades at up to 50% lower cost than traditional estimating options.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
