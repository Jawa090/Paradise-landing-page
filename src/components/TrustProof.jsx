import React from 'react';

export default function TrustProof({ onOpenSample }) {
  return (
    <section className="section section-evidence">
      <div className="container">
        <div className="section-head text-center">
          <span className="badge-tag">PROVEN TRACK RECORD</span>
          <h2 className="title-lg">Experienced Estimating Support You Can Rely On</h2>
          <div className="brand-rule"></div>
        </div>

        {/* 4 Proof Stats */}
        <div className="evidence-stats">
          <div className="stat-tile">
            <div className="stat-val">20 <span>Years</span></div>
            <div className="stat-caption">Experience</div>
          </div>

          <div className="stat-tile">
            <div className="stat-val">2,000+</div>
            <div className="stat-caption">Projects Completed</div>
          </div>

          <div className="stat-tile">
            <div className="stat-val">85%</div>
            <div className="stat-caption">Bid-Win Rate</div>
          </div>

          <div className="stat-tile">
            <div className="stat-software-title">PlanSwift &amp; Bluebeam</div>
            <div className="stat-caption">Experienced Estimators</div>
          </div>
        </div>

        {/* Testimonials & Sample Estimate Interactive Row */}
        <div className="evidence-split">
          <div className="testimonials-stack">
            <div className="quote-panel">
              <div className="stars-rating">★★★★★</div>
              <p className="quote-body">
                "Paradise Estimating cut our bid turnaround down to 36 hours. Their takeoffs for our electrical and drywall packages were thorough, accurate, and helped us win two multi-unit commercial bids."
              </p>
              <div className="quote-meta">
                <div className="quote-avatar">MC</div>
                <div className="quote-author">
                  <strong>Michael C.</strong>
                  <span>Commercial General Contractor • Texas</span>
                </div>
              </div>
            </div>

            <div className="quote-panel">
              <div className="stars-rating">★★★★★</div>
              <p className="quote-body">
                "We rely on Paradise for all our concrete and sitework quantity takeoffs. The itemized spreadsheet formats make bid day painless and completely mistake-free."
              </p>
              <div className="quote-meta">
                <div className="quote-avatar">DA</div>
                <div className="quote-author">
                  <strong>Dan A.</strong>
                  <span>Subcontractor • New York</span>
                </div>
              </div>
            </div>
          </div>

          {/* Sample Estimate Preview Box */}
          <div className="sample-card-panel">
            <span className="sample-tag">CSI FORMAT SAMPLE</span>
            <div className="sample-thumbnail-container" onClick={onOpenSample}>
              <img src="/sample-estimate.jpg" alt="Actual Construction Estimate Report Sample" />
              <div className="sample-zoom-overlay">
                <div className="sample-zoom-circle">
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <circle cx="11" cy="11" r="8"/>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                    <line x1="11" y1="8" x2="11" y2="14"/>
                    <line x1="8" y1="11" x2="14" y2="11"/>
                  </svg>
                </div>
                <span>Click to Preview Full Report</span>
              </div>
            </div>

            <p className="sample-note">
              Complete CSI MasterFormat divisions, itemized material &amp; labor takeoffs in Excel (.xlsx) and PDF format.
            </p>

            <button type="button" className="btn btn-secondary btn-block" onClick={onOpenSample} data-track-cta="view-sample-estimate">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                <circle cx="12" cy="12" r="3"/>
              </svg>
              <span>View Sample Estimate</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
