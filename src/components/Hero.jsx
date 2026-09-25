import React, { useState, useEffect } from 'react';

const serviceOptions = [
  'Commercial Estimating',
  'MEP Estimating',
  'Concrete Estimating / Takeoff',
  'Electrical',
  'Plumbing',
  'HVAC / Mechanical',
  'General Estimating / Takeoff',
  'Other'
];

const heroImages = [
  {
    id: 'desk',
    label: 'Blueprint & CSI Sheet',
    src: '/hero-takeoff-desk.jpg',
    alt: 'Professional Architectural Blueprints and CSI MasterFormat Estimating Spreadsheet by Paradise Estimating',
    tag: 'Architectural Blueprint Takeoff'
  },
  {
    id: 'screen',
    label: 'Digital Software Screen',
    src: '/hero-takeoff-screen.jpg',
    alt: 'PlanSwift and Bluebeam Digital Quantity Takeoff Workstation Screen by Paradise Estimating',
    tag: 'Digital PlanSwift & Bluebeam Takeoff'
  }
];

export default function Hero({
  selectedTrade,
  onTradeChange,
  onQuoteSubmit,
  onUploadClick,
  onGetQuoteClick,
  isSubmitting
}) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const currentImage = heroImages[activeImageIndex];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service_trade: selectedTrade || ''
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [formAlert, setFormAlert] = useState('');

  // Synchronize trade selection from external state
  useEffect(() => {
    if (selectedTrade) {
      setFormData(prev => ({ ...prev, service_trade: selectedTrade }));
      if (errors.service_trade) {
        setErrors(prev => ({ ...prev, service_trade: '' }));
      }
    }
  }, [selectedTrade]);

  const validateField = (fieldName, value) => {
    const trimmed = (value || '').trim();
    if (fieldName === 'name') {
      if (!trimmed) return 'Please enter your full name.';
      if (trimmed.length < 2) return 'Full name must be at least 2 characters.';
    }
    if (fieldName === 'email') {
      if (!trimmed) return 'Please enter your business email.';
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(trimmed)) {
        return 'Please enter a valid email address (e.g. name@company.com).';
      }
    }
    if (fieldName === 'phone') {
      const digits = trimmed.replace(/\D/g, '');
      if (!trimmed) return 'Please enter your phone number.';
      if (digits.length < 10) return 'Please enter a valid phone number (at least 10 digits).';
    }
    if (fieldName === 'service_trade') {
      if (!trimmed) return 'Please select a required trade or service.';
    }
    return '';
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (name === 'service_trade') {
      onTradeChange(value);
    }
    if (touched[name] || errors[name]) {
      const err = validateField(name, value);
      setErrors(prev => ({ ...prev, [name]: err }));
    }
    if (formAlert) setFormAlert('');
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    const err = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: err }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const tradeVal = formData.service_trade || selectedTrade;
    const currentValues = { ...formData, service_trade: tradeVal };

    const newErrors = {
      name: validateField('name', currentValues.name),
      email: validateField('email', currentValues.email),
      phone: validateField('phone', currentValues.phone),
      service_trade: validateField('service_trade', currentValues.service_trade)
    };

    setErrors(newErrors);
    setTouched({
      name: true,
      email: true,
      phone: true,
      service_trade: true
    });

    const hasError = Object.values(newErrors).some(err => !!err);
    if (hasError) {
      setFormAlert('Please fix the highlighted fields before submitting.');
      const firstInvalidKey = Object.keys(newErrors).find(k => !!newErrors[k]);
      if (firstInvalidKey) {
        const inputEl = document.querySelector(`form[data-track-form="hero-short-form"] [name="${firstInvalidKey}"]`);
        if (inputEl) inputEl.focus();
      }
      return;
    }

    setFormAlert('');
    onQuoteSubmit(e);
  };

  return (
    <section id="hero" className="hero-section">
      <div className="hero-bg-grid"></div>
      <div className="container hero-layout">

        {/* Left Column: Headlines, USPs, Offers & Proof */}
        <div className="hero-content-col">
          <div className="hero-tag">
            <span className="tag-dot"></span>
            <span>Professional Construction Estimating &amp; Takeoff Services</span>
          </div>

          <h1 className="hero-heading">
            Get Accurate Construction Estimates in <span className="text-green">24–48 Hours</span>
          </h1>

          <p className="hero-intro">
            Professional construction estimating and quantity takeoff services for contractors, subcontractors and construction companies across the USA.
          </p>

          {/* CORE USP ROW (4 Items) */}
          <div className="hero-proof-bar hero-proof-grid-4">
            <div className="proof-cell">
              <div className="proof-icon">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <circle cx="12" cy="13" r="8" />
                  <path d="M12 9v4l2.5 2.5" />
                  <path d="M10 2h4" />
                  <path d="M12 2v3" />
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
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="6" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <div className="proof-info">
                <strong>Accuracy Guaranteed</strong>
                <span>Certified quality</span>
              </div>
            </div>

            <div className="proof-cell">
              <div className="proof-icon">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M3 7l9-4 9 4-9 4-9-4z" />
                  <path d="M3 12l9 4 9-4" />
                  <path d="M3 17l9 4 9-4" />
                </svg>
              </div>
              <div className="proof-info">
                <strong>All-Trades Coverage</strong>
                <span>Full scope support</span>
              </div>
            </div>

            <div className="proof-cell">
              <div className="proof-icon">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M12 2v20" />
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  <path d="M4 11l4-4 4 4" />
                </svg>
              </div>
              <div className="proof-info">
                <strong>Up to 50% Lower Cost</strong>
                <span>Fraction of in-house</span>
              </div>
            </div>
          </div>

          {/* New Client Offer Banner */}
          <div className="new-client-offer-banner">
            <div className="offer-badge-pill">SPECIAL OFFER</div>
            <div className="offer-content">
              <strong>New Clients Save 20% on Their First Estimate</strong>
              <p>Save 20% on your first estimate as a new Paradise Estimating client.</p>
            </div>
          </div>

          {/* CTAs */}
          <div className="hero-actions">
            <button
              type="button"
              className="btn btn-primary btn-lg"
              onClick={onGetQuoteClick || (() => {
                const el = document.getElementById('quote-card-target');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              })}
              data-track-cta="hero-get-quote"
            >
              <span>Get a Free Quote</span>
              <svg viewBox="0 0 20 20" width="18" height="18" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>

            <button
              type="button"
              className="btn btn-secondary btn-lg"
              onClick={onUploadClick}
              data-track-cta="hero-upload-plans"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="17 8 12 3 7 8" />
                <line x1="12" y1="3" x2="12" y2="15" />
              </svg>
              <span>Upload Your Plans</span>
            </button>
          </div>

          {/* Top-Notch Interactive Takeoff Showcase with Real Photos */}
          <div className="hero-showcase-container">
            <div className="hero-showcase-header">
              <div className="showcase-title-side">
                <span className="live-dot-pulse"></span>
                <strong>Live Project Takeoff Output</strong>
              </div>
              <div className="showcase-toggle-pills">
                {heroImages.map((img, idx) => (
                  <button
                    key={img.id}
                    type="button"
                    className={`showcase-toggle-btn ${activeImageIndex === idx ? 'active-pill' : ''}`}
                    onClick={() => setActiveImageIndex(idx)}
                  >
                    <span>{img.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="hero-image-wrap">
              <img
                src={currentImage.src}
                alt={currentImage.alt}
                width="640"
                height="360"
                key={currentImage.id}
                className="hero-main-photo"
              />

              {/* Floating Verified Trust Badges on Image */}
              <div className="hero-photo-floating-badge top-left">
                <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="var(--color-primary)" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>24–48h Turnaround Guaranteed</span>
              </div>

              <div className="hero-photo-floating-badge top-right">
                <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M3 9h18M9 21V9" />
                </svg>
                <span>CSI MasterFormat 16/50</span>
              </div>

              <div className="hero-image-badge">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="var(--color-primary)" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>PlanSwift &amp; Bluebeam Certified Workflows</span>
              </div>
            </div>
          </div>

        </div>

        {/* Right Column: Short Quote Form */}
        <div className="hero-form-col" id="quote-card-target">

          {/* AI / ContractorsList Ecosystem Trust Badge (Positioned Right Above Form) */}
          <div className="ecosystem-trust-badge form-top-badge">
            <div className="eco-badge-logo-wrap">
              <img
                src="/logo11.png"
                alt="ContractorsList.com"
                className="eco-contractors-logo"
                width="115"
                height="26"
              />
            </div>
            <div className="eco-badge-text">
              <span className="eco-title">
                Part of the <strong>AI-Vetted Construction Ecosystem</strong> Powered by{' '}
                <a
                  href="https://contractorslist.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="eco-link"
                  title="Visit ContractorsList.com"
                >
                  ContractorsList.com
                </a>
              </span>
              <span className="eco-sub">Expert Estimators + Technology-Assisted Workflows</span>
            </div>
          </div>

          <div className="hero-quote-card">
            <div className="text-center" style={{ marginBottom: '1.25rem' }}>
              <span className="card-top-tag">FAST 30-MIN RESPONSE</span>
              <h2 className="quote-card-heading">Get a Free Quote</h2>
              <p className="quote-card-sub">Fill in your details below for pricing &amp; turnaround time.</p>
            </div>

            <form onSubmit={handleSubmit} data-track-form="hero-short-form" noValidate>
              {formAlert && (
                <div className="form-validation-alert" role="alert">
                  <svg viewBox="0 0 20 20" width="16" height="16" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  <span>{formAlert}</span>
                </div>
              )}

              <div className="form-field">
                <label className="form-label" htmlFor="hero-name">Full Name <span className="req-star">*</span></label>
                <input 
                  id="hero-name"
                  type="text" 
                  name="name" 
                  className={`form-input ${touched.name && errors.name ? 'is-invalid' : ''}`} 
                  placeholder="e.g. John Miller" 
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  aria-invalid={touched.name && !!errors.name}
                />
                {touched.name && errors.name && (
                  <span className="form-error-msg" role="alert">
                    <svg viewBox="0 0 20 20" width="13" height="13" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    <span>{errors.name}</span>
                  </span>
                )}
              </div>

              <div className="form-field">
                <label className="form-label" htmlFor="hero-email">Business Email <span className="req-star">*</span></label>
                <input 
                  id="hero-email"
                  type="email" 
                  name="email" 
                  className={`form-input ${touched.email && errors.email ? 'is-invalid' : ''}`} 
                  placeholder="john@contractors.com" 
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  aria-invalid={touched.email && !!errors.email}
                />
                {touched.email && errors.email && (
                  <span className="form-error-msg" role="alert">
                    <svg viewBox="0 0 20 20" width="13" height="13" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    <span>{errors.email}</span>
                  </span>
                )}
              </div>

              <div className="form-split">
                <div className="form-field">
                  <label className="form-label" htmlFor="hero-phone">Phone <span className="req-star">*</span></label>
                  <input 
                    id="hero-phone"
                    type="tel" 
                    name="phone" 
                    className={`form-input ${touched.phone && errors.phone ? 'is-invalid' : ''}`} 
                    placeholder="(718) 719-6171" 
                    value={formData.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-invalid={touched.phone && !!errors.phone}
                  />
                  {touched.phone && errors.phone && (
                    <span className="form-error-msg" role="alert">
                      <svg viewBox="0 0 20 20" width="13" height="13" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      <span>{errors.phone}</span>
                    </span>
                  )}
                </div>
                <div className="form-field">
                  <label className="form-label" htmlFor="hero-company">Company</label>
                  <input 
                    id="hero-company"
                    type="text" 
                    name="company" 
                    className="form-input" 
                    placeholder="ABC Construction" 
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-field">
                <label className="form-label" htmlFor="hero-trade">Required Service / Trade <span className="req-star">*</span></label>
                <select
                  id="hero-trade"
                  name="service_trade"
                  className={`form-select ${touched.service_trade && errors.service_trade ? 'is-invalid' : ''}`}
                  value={formData.service_trade || selectedTrade}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  aria-invalid={touched.service_trade && !!errors.service_trade}
                >
                  <option value="" disabled>Select Trade / Service</option>
                  {serviceOptions.map(t => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
                {touched.service_trade && errors.service_trade && (
                  <span className="form-error-msg" role="alert">
                    <svg viewBox="0 0 20 20" width="13" height="13" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    <span>{errors.service_trade}</span>
                  </span>
                )}
              </div>

              <button type="submit" className="btn btn-primary btn-block quote-submit-btn" disabled={isSubmitting} data-track-cta="hero-submit-quote">
                {isSubmitting ? (
                  <span>Processing Quote...</span>
                ) : (
                  <>
                    <span>Get My Quote</span>
                    <svg viewBox="0 0 20 20" width="18" height="18" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </>
                )}
              </button>

              <div className="quote-discount-notice">
                <span>🎉 <strong>New clients save 20%</strong> on their first estimate.</span>
              </div>

              <div className="quote-card-footer">
                <button type="button" className="link-next-step" onClick={onUploadClick}>
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  <span>Have plans ready? <strong>Upload them below &darr;</strong></span>
                </button>
              </div>

              <div className="security-seal">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="var(--color-success)">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
                </svg>
                <span>Your Project Plans and Information Are Handled Securely and Confidentially</span>
              </div>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
}
