import React from 'react';

export default function CoreValues() {
  return (
    <section className="section section-usps" id="why-choose-us">
      <div className="container">
        <div className="section-head text-center">
          <span className="badge-tag">WHY CHOOSE US</span>
          <h2 className="title-lg">Why Contractors Choose Paradise Estimating</h2>
          <div className="brand-rule"></div>
        </div>

        {/* 3 Main Cards */}
        <div className="usp-trio">
          {/* Card 1 */}
          <div className="usp-box">
            <div className="usp-icon-circle">
              <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="13" r="8"/>
                <path d="M12 9v4l2.5 2.5"/>
                <path d="M10 2h4"/>
                <path d="M12 2v3"/>
                <path d="M19 6l1.5-1.5"/>
              </svg>
            </div>
            <h3 className="usp-title">24–48 Hour Turnaround</h3>
            <p className="usp-copy">
              Get estimating support when bid deadlines are approaching and your internal estimating capacity is limited.
            </p>
          </div>

          {/* Card 2 */}
          <div className="usp-box featured">
            <div className="featured-pill">GUARANTEED ACCURACY</div>
            <div className="usp-icon-circle">
              <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <circle cx="12" cy="12" r="6"/>
                <circle cx="12" cy="12" r="2"/>
                <path d="M12 2v2M12 20v2M2 12h2M20 12h2"/>
              </svg>
            </div>
            <h3 className="usp-title">Accuracy Guaranteed</h3>
            <p className="usp-copy">
              Detailed estimates and takeoffs designed to reduce missed quantities and costly estimating mistakes.
            </p>
          </div>

          {/* Card 3 */}
          <div className="usp-box">
            <div className="usp-icon-circle">
              <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v20"/>
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                <path d="M3 10l3-3 3 3"/>
              </svg>
            </div>
            <h3 className="usp-title">All Trades. Lower Cost.</h3>
            <p className="usp-copy">
              Get professional estimating support across multiple construction trades at up to 50% lower cost than traditional estimating options.
            </p>
          </div>
        </div>

        {/* TRUST METRICS (Management-Approved with High-End Icons) */}
        <div className="trust-metrics-bar">
          
          <div className="metric-cell">
            <div className="metric-icon-wrap">
              <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="8" r="6"/>
                <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
              </svg>
            </div>
            <div className="metric-num">14+</div>
            <div className="metric-label">Years Experience</div>
            <div className="metric-sub">Dedicated USA estimating team</div>
          </div>

          <div className="metric-divider"></div>

          <div className="metric-cell">
            <div className="metric-icon-wrap">
              <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 21h18"/>
                <path d="M5 21V7l8-4v18"/>
                <path d="M19 21V11l-6-4"/>
                <path d="M9 9h1M9 13h1M9 17h1"/>
              </svg>
            </div>
            <div className="metric-num">$1.5B+</div>
            <div className="metric-label">Projects Valued</div>
            <div className="metric-sub">Across all construction trades</div>
          </div>

          <div className="metric-divider"></div>

          <div className="metric-cell">
            <div className="metric-icon-wrap">
              <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            </div>
            <div className="metric-num">50,000+</div>
            <div className="metric-label">Trusted by Contractors</div>
            <div className="metric-sub">Nationwide GC &amp; subcontractor network</div>
          </div>

        </div>

      </div>
    </section>
  );
}
