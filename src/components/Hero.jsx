import React from 'react';

export default function Hero({ 
  selectedTrade, 
  onTradeChange, 
  onQuoteSubmit, 
  onUploadClick, 
  isSubmitting 
}) {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-bg-grid"></div>
      <div className="container hero-layout">
        
        {/* Left Column: Headlines & Proof points */}
        <div className="hero-content-col">
          <div className="hero-tag">
            <span className="tag-dot"></span>
            <span>Professional Construction Estimating &amp; Takeoff Services</span>
          </div>

          <h1 className="hero-heading">
            Get Accurate Construction Estimates in <span className="text-green">24–48 Hours</span>
          </h1>

          <p className="hero-intro">
            Professional estimating and quantity takeoff services for contractors, subcontractors and construction companies across the USA.
          </p>

          {/* 3 Horizontal Proof Points */}
          <div className="hero-proof-bar">
            <div className="proof-cell">
              <div className="proof-icon">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
              </div>
              <div className="proof-info">
                <strong>24–48 Hour Turnaround</strong>
                <span>Fast bid submittals</span>
              </div>
            </div>

            <div className="proof-cell">
              <div className="proof-icon">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
              </div>
              <div className="proof-info">
                <strong>99% Accuracy — Guaranteed</strong>
                <span>Certified quality</span>
              </div>
            </div>

            <div className="proof-cell">
              <div className="proof-icon">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <line x1="12" y1="1" x2="12" y2="23"/>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                </svg>
              </div>
              <div className="proof-info">
                <strong>Up to 50% Lower Cost</strong>
                <span>Fraction of in-house</span>
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="hero-actions">
            <button type="button" className="btn btn-primary btn-lg" onClick={() => {
              const el = document.getElementById('quote-card-target');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }} data-track-cta="hero-get-quote">
              <span>Get a Free Quote</span>
              <svg viewBox="0 0 20 20" width="18" height="18" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
              </svg>
            </button>

            <button type="button" className="btn btn-secondary btn-lg" onClick={onUploadClick} data-track-cta="hero-upload-plans">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="17 8 12 3 7 8"/>
                <line x1="12" y1="3" x2="12" y2="15"/>
              </svg>
              <span>Upload Your Plans</span>
            </button>
          </div>

          <div className="hero-sub-cta">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="var(--color-primary)">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h2v2h-2v-2zm0-10h2v8h-2V7z"/>
            </svg>
            <span>Estimates starting from <strong>$100</strong> • Turnaround guaranteed or full revision</span>
          </div>

          {/* Actual Takeoff Work Image */}
          <div className="hero-image-wrap">
            <img src="/hero-blueprint.jpg" alt="Actual Construction Blueprint Quantity Takeoff Drawings by Paradise Estimating" width="580" height="326" />
            <div className="hero-image-badge">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="var(--color-primary)" strokeWidth="2.5">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              <span>PlanSwift &amp; Bluebeam Certified Takeoffs</span>
            </div>
          </div>

        </div>

        {/* Right Column: Hero Short Quote Form */}
        <div className="hero-form-col" id="quote-card-target">
          <div className="hero-quote-card">
            <div className="text-center" style={{ marginBottom: '1.5rem' }}>
              <span className="card-top-tag">FAST 30-MIN RESPONSE</span>
              <h2 className="quote-card-heading">Get My Free Quote</h2>
              <p className="quote-card-sub">Fill in your details below for project pricing &amp; turnaround time.</p>
            </div>

            <form onSubmit={onQuoteSubmit} data-track-form="hero-short-form">
              <div className="form-field">
                <label className="form-label">Full Name <span className="req-star">*</span></label>
                <input type="text" name="name" className="form-input" placeholder="e.g. John Miller" required />
              </div>

              <div className="form-field">
                <label className="form-label">Business Email <span className="req-star">*</span></label>
                <input type="email" name="email" className="form-input" placeholder="john@contractors.com" required />
              </div>

              <div className="form-split">
                <div className="form-field">
                  <label className="form-label">Phone <span className="req-star">*</span></label>
                  <input type="tel" name="phone" className="form-input" placeholder="(718) 000-0000" required />
                </div>
                <div className="form-field">
                  <label className="form-label">Company</label>
                  <input type="text" name="company" className="form-input" placeholder="ABC Construction" />
                </div>
              </div>

              <div className="form-field">
                <label className="form-label">Service / Trade <span className="req-star">*</span></label>
                <select 
                  name="service_trade" 
                  className="form-select" 
                  value={selectedTrade} 
                  onChange={(e) => onTradeChange(e.target.value)} 
                  required
                >
                  <option value="" disabled>Select Trade</option>
                  {['Electrical', 'Plumbing', 'MEP', 'Concrete', 'HVAC / Duct', 'Sitework', 'Rebar / Metals', 'General Estimating / Takeoff', 'Other'].map(t => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>

              <button type="submit" className="btn btn-primary btn-block quote-submit-btn" disabled={isSubmitting}>
                {isSubmitting ? (
                  <span>Processing Quote...</span>
                ) : (
                  <>
                    <span>Get My Quote</span>
                    <svg viewBox="0 0 20 20" width="18" height="18" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                    </svg>
                  </>
                )}
              </button>

              <div className="quote-card-footer">
                <span className="link-next-step" onClick={onUploadClick}>
                  Have plans ready? <strong>Upload them in the next step &rarr;</strong>
                </span>
              </div>

              <div className="security-seal">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="var(--color-success)">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
                </svg>
                <span>Strict 100% Privacy &amp; Non-Disclosure Protected</span>
              </div>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
}
