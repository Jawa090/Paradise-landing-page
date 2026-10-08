import React, { useState, useEffect } from 'react';
import CustomVideoPlayer from './CustomVideoPlayer';

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
          <div className="hero-tag" style={{ backgroundColor: '#eef8ea', color: '#3d8618', borderRadius: '9999px', padding: '0.25rem 0.85rem', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', fontWeight: 600 }}>
            <span>Professional construction estimating</span>
          </div>

          <h1 className="hero-heading" style={{ fontSize: '2.75rem', fontWeight: 800, lineHeight: 1.15, marginTop: '0.75rem', color: '#0f172a' }}>
            Get Accurate Construction Estimates &amp; Takeoffs in <span style={{ color: '#56b32b', backgroundColor: '#eef8ea', padding: '0 0.3rem', borderRadius: '4px' }}>24–48 Hours</span>
          </h1>

          <p className="hero-intro" style={{ fontSize: '1rem', color: '#475569', marginTop: '1rem', lineHeight: 1.6 }}>
            Professional construction estimating and quantity takeoff services for contractors, subcontractors, builders and developers across the U.S.
          </p>

          <p className="hero-subintro" style={{ fontSize: '0.88rem', color: '#64748b', marginTop: '0.5rem', lineHeight: 1.5 }}>
            Upload your plans and our estimating team will prepare a detailed, bid-ready estimate with material quantities, labor and pricing — delivered in Excel and PDF.
          </p>

          {/* New Customer Offer Box & Action Row */}
          <div className="hero-offer-cta-box" style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '1.5rem', marginBottom: '1.25rem', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', padding: '1rem', borderRadius: '12px' }}>
            <div className="offer-pill-badge" style={{ backgroundColor: '#0f172a', color: '#ffffff', padding: '0.5rem 0.75rem', borderRadius: '6px', textAlign: 'center', flexShrink: 0 }}>
              <span style={{ fontSize: '0.65rem', display: 'block', letterSpacing: '0.05em', textTransform: 'uppercase', opacity: 0.8 }}>NEW CUSTOMER OFFER</span>
              <strong style={{ fontSize: '0.85rem', fontWeight: 700 }}>20% OFF your first estimate</strong>
            </div>
            <p style={{ fontSize: '0.8rem', color: '#475569', margin: 0 }}>
              For new clients, applied to your first project.
            </p>
          </div>

          {/* CTAs */}
          <div className="hero-actions" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1rem' }}>
            <button
              type="button"
              className="btn btn-primary"
              onClick={onUploadClick || (() => {
                const el = document.getElementById('upload-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              })}
              data-track-cta="hero-get-quote"
              style={{ backgroundColor: '#56b32b', borderColor: '#56b32b', color: '#ffffff', borderRadius: '9999px', padding: '0.75rem 1.6rem', fontWeight: 700 }}
            >
              <span>Upload plans — Get my quote</span>
            </button>

            <button
              type="button"
              className="btn"
              onClick={() => {
                window.location.href = 'tel:7187196171';
              }}
              data-track-cta="hero-talk-estimator"
              style={{ borderRadius: '9999px', padding: '0.75rem 1.4rem', fontWeight: 600, borderColor: '#cbd5e1', color: '#0f172a' }}
            >
              <span>Talk to an estimator</span>
            </button>
          </div>

          <div className="hero-bullets" style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem', fontSize: '0.78rem', color: '#475569', marginTop: '0.75rem' }}>
            <span>✓ 24–48 hour turnaround</span>
            <span>✓ 50,000+ contractors served</span>
            <span>✓ 100+ estimators</span>
            <span>✓ NDA available</span>
          </div>

          <div className="hero-video-ad-box" style={{ marginTop: '1.5rem' }}>
            <CustomVideoPlayer src="/video.mp4" />
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
                width="275"
                height="44"
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

              <button type="submit" className="btn btn-primary btn-block quote-submit-btn" disabled={isSubmitting} data-track-cta="hero-submit-quote" style={{ backgroundColor: '#56b32b', borderColor: '#56b32b', color: '#ffffff', borderRadius: '9999px', padding: '0.85rem 1.5rem', fontWeight: 700, fontSize: '1.05rem' }}>
                {isSubmitting ? (
                  <span>Processing Quote...</span>
                ) : (
                  <span>Get My Quote &rarr;</span>
                )}
              </button>

              <div className="quote-discount-notice" style={{ backgroundColor: '#eef8ea', border: '1px solid #dcf0d3', color: '#3d8618', padding: '0.5rem 0.75rem', borderRadius: '8px', textAlign: 'center', fontSize: '0.8rem', marginTop: '0.75rem' }}>
                <span>🌱 <strong>New clients save 20%</strong> on their first estimate.</span>
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
