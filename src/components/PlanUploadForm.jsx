import React, { useRef, useState, useEffect } from 'react';

const tradeOptions = [
  'Commercial Estimating',
  'MEP Estimating',
  'Concrete Estimating / Takeoff',
  'Electrical',
  'Plumbing',
  'HVAC / Mechanical',
  'Sitework',
  'Rebar / Metals',
  'General Contractor Takeoffs',
  'All Trades / Full Scope',
  'Other'
];

const MAX_FILE_SIZE_BYTES = 500 * 1024 * 1024; // 500 MB

const ALLOWED_EXTENSIONS = ['.pdf', '.dwg', '.dxf', '.cad', '.zip', '.rar', '.png', '.jpg', '.jpeg', '.tiff'];

export default function PlanUploadForm({ 
  selectedTrade, 
  onTradeChange, 
  uploadedFiles, 
  onAddFiles, 
  onRemoveFile, 
  isDragOver, 
  setIsDragOver, 
  onSubmit, 
  isSubmitting 
}) {
  const fileInputRef = useRef(null);
  const today = new Date().toISOString().split('T')[0];
  const [uploadError, setUploadError] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service_trade: selectedTrade || '',
    location: '',
    bid_deadline: '',
    project_details: ''
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
    if (fieldName === 'company') {
      if (!trimmed) return 'Please enter your company name.';
      if (trimmed.length < 2) return 'Company name must be at least 2 characters.';
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
      if (!trimmed) return 'Please select your project trade or scope.';
    }
    if (fieldName === 'location') {
      if (!trimmed) return 'Please enter project location / state (e.g. Dallas, TX or NY).';
      if (trimmed.length < 2) return 'Location must be at least 2 characters.';
    }
    if (fieldName === 'bid_deadline') {
      if (!trimmed) return 'Please select your bid deadline.';
      const deadlineDate = new Date(trimmed + 'T00:00:00');
      const todayDate = new Date();
      todayDate.setHours(0, 0, 0, 0);
      if (deadlineDate < todayDate) {
        return 'Bid deadline cannot be in the past.';
      }
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
      company: validateField('company', currentValues.company),
      email: validateField('email', currentValues.email),
      phone: validateField('phone', currentValues.phone),
      service_trade: validateField('service_trade', currentValues.service_trade),
      location: validateField('location', currentValues.location),
      bid_deadline: validateField('bid_deadline', currentValues.bid_deadline)
    };

    setErrors(newErrors);
    setTouched({
      name: true,
      company: true,
      email: true,
      phone: true,
      service_trade: true,
      location: true,
      bid_deadline: true
    });

    const hasError = Object.values(newErrors).some(err => !!err);
    if (hasError) {
      setFormAlert('Please complete all required fields highlighted in red below.');
      const firstInvalidKey = Object.keys(newErrors).find(k => !!newErrors[k]);
      if (firstInvalidKey) {
        const inputEl = document.querySelector(`form[data-track-form="plan-upload-main"] [name="${firstInvalidKey}"]`);
        if (inputEl) {
          inputEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
          inputEl.focus();
        }
      }
      return;
    }

    setFormAlert('');
    onSubmit(e);
  };

  const formatSize = (bytes) => {
    if (!bytes) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
  };

  const handleDrag = (e, val) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(val);
  };

  const validateAndAddFiles = (files) => {
    setUploadError('');
    const valid = [];
    for (let f of files) {
      if (f.size > MAX_FILE_SIZE_BYTES) {
        setUploadError(`"${f.name}" exceeds the 500 MB limit. Please compress or link via project details.`);
        continue;
      }
      const ext = '.' + f.name.split('.').pop().toLowerCase();
      if (!ALLOWED_EXTENSIONS.includes(ext) && !f.type.includes('pdf')) {
        setUploadError(`"${f.name}" has an unsupported format. Supported formats: PDF, DWG, CAD, DXF, ZIP.`);
        continue;
      }
      valid.push(f);
    }
    if (valid.length > 0) {
      onAddFiles(valid);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(false);
    if (e.dataTransfer && e.dataTransfer.files) {
      validateAndAddFiles(Array.from(e.dataTransfer.files));
    }
  };

  return (
    <section id="upload-section" className="section section-full-upload">
      <div className="container">
        <div className="upload-card-wrapper">
          
          {/* Section Header */}
          <div className="text-center">
            <span className="badge-tag">PRIMARY QUOTE &amp; PLAN SUBMISSION</span>
            <h2 className="upload-heading">Have a Bid Deadline Coming Up?</h2>
            <p className="upload-subheading">
              Upload your plans and project details. Our estimating team will review your scope and provide your quote and turnaround information.
            </p>
          </div>

          <form onSubmit={handleSubmit} data-track-form="plan-upload-main" noValidate>
            {formAlert && (
              <div className="form-validation-alert" role="alert">
                <svg viewBox="0 0 20 20" width="16" height="16" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <span>{formAlert}</span>
              </div>
            )}
            
            {/* Step 1: Contact Information */}
            <div className="form-segment">
              <h3 className="segment-title">
                <span className="segment-badge">
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                </span>
                <span>1. Contact Information</span>
              </h3>

              <div className="grid-cols-2">
                <div className="form-field">
                  <label className="form-label" htmlFor="main-name">Full Name <span className="req-star">*</span></label>
                  <input 
                    id="main-name"
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
                  <label className="form-label" htmlFor="main-company">Company <span className="req-star">*</span></label>
                  <input 
                    id="main-company"
                    type="text" 
                    name="company" 
                    className={`form-input ${touched.company && errors.company ? 'is-invalid' : ''}`}
                    placeholder="e.g. Miller Contracting LLC" 
                    value={formData.company}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-invalid={touched.company && !!errors.company}
                  />
                  {touched.company && errors.company && (
                    <span className="form-error-msg" role="alert">
                      <svg viewBox="0 0 20 20" width="13" height="13" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      <span>{errors.company}</span>
                    </span>
                  )}
                </div>

                <div className="form-field">
                  <label className="form-label" htmlFor="main-email">Business Email <span className="req-star">*</span></label>
                  <input 
                    id="main-email"
                    type="email" 
                    name="email" 
                    className={`form-input ${touched.email && errors.email ? 'is-invalid' : ''}`}
                    placeholder="e.g. john@millercontracting.com" 
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

                <div className="form-field">
                  <label className="form-label" htmlFor="main-phone">Phone <span className="req-star">*</span></label>
                  <input 
                    id="main-phone"
                    type="tel" 
                    name="phone" 
                    className={`form-input ${touched.phone && errors.phone ? 'is-invalid' : ''}`}
                    placeholder="e.g. (718) 719-6171" 
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
              </div>
            </div>

            {/* Step 2: Project Information */}
            <div className="form-segment">
              <h3 className="segment-title">
                <span className="segment-badge">
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                  </svg>
                </span>
                <span>2. Project Information</span>
              </h3>

              <div className="grid-cols-3">
                <div className="form-field">
                  <label className="form-label" htmlFor="main-trade">Required Service / Trade <span className="req-star">*</span></label>
                  <select 
                    id="main-trade"
                    name="service_trade" 
                    className={`form-select ${touched.service_trade && errors.service_trade ? 'is-invalid' : ''}`}
                    value={formData.service_trade || selectedTrade} 
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-invalid={touched.service_trade && !!errors.service_trade}
                  >
                    <option value="" disabled>Select Trade / Scope</option>
                    {tradeOptions.map(t => (
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

                <div className="form-field">
                  <label className="form-label" htmlFor="main-location">Project Location / State <span className="req-star">*</span></label>
                  <input 
                    id="main-location"
                    type="text" 
                    name="location" 
                    className={`form-input ${touched.location && errors.location ? 'is-invalid' : ''}`}
                    placeholder="e.g. Dallas, TX or NY" 
                    value={formData.location}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-invalid={touched.location && !!errors.location}
                  />
                  {touched.location && errors.location && (
                    <span className="form-error-msg" role="alert">
                      <svg viewBox="0 0 20 20" width="13" height="13" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      <span>{errors.location}</span>
                    </span>
                  )}
                </div>

                <div className="form-field">
                  <label className="form-label" htmlFor="main-deadline">Bid Deadline <span className="req-star">*</span></label>
                  <input 
                    id="main-deadline"
                    type="date" 
                    name="bid_deadline" 
                    className={`form-input ${touched.bid_deadline && errors.bid_deadline ? 'is-invalid' : ''}`}
                    min={today} 
                    value={formData.bid_deadline}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-invalid={touched.bid_deadline && !!errors.bid_deadline}
                  />
                  {touched.bid_deadline && errors.bid_deadline && (
                    <span className="form-error-msg" role="alert">
                      <svg viewBox="0 0 20 20" width="13" height="13" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      <span>{errors.bid_deadline}</span>
                    </span>
                  )}
                </div>
              </div>

              <div className="form-field" style={{ marginTop: '1.25rem' }}>
                <label className="form-label" htmlFor="main-details">Project Details / Additional Requirements (Optional)</label>
                <textarea 
                  id="main-details"
                  name="project_details" 
                  rows="3" 
                  className="form-textarea" 
                  placeholder="Specify any addenda, inclusions, exclusions, CSI divisions, or file download links (Dropbox / Google Drive / BuildingConnected)..."
                  value={formData.project_details}
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>

            {/* Step 3: File Upload Area */}
            <div className="form-segment">
              <h3 className="segment-title">
                <span className="segment-badge">
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="17 8 12 3 7 8"/>
                    <line x1="12" y1="3" x2="12" y2="15"/>
                  </svg>
                </span>
                <span>3. Upload Plans / Drawings</span>
              </h3>

              <div 
                className={`drag-drop-zone ${isDragOver ? 'active-drag' : ''}`}
                onDragOver={(e) => handleDrag(e, true)}
                onDragLeave={(e) => handleDrag(e, false)}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current && fileInputRef.current.click()}
              >
                <input 
                  type="file" 
                  ref={fileInputRef}
                  multiple 
                  accept=".pdf,.dwg,.dxf,.cad,.zip,.rar,.png,.jpg,.jpeg,.tiff"
                  style={{ display: 'none' }}
                  onChange={(e) => {
                    if (e.target.files) {
                      validateAndAddFiles(Array.from(e.target.files));
                    }
                  }}
                />

                <div className="drop-icon-round">
                  <svg viewBox="0 0 24 24" width="34" height="34" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/>
                    <path d="M12 12v9"/>
                    <path d="m16 16-4-4-4 4"/>
                  </svg>
                </div>

                <h4 className="drop-prompt">
                  Drag &amp; drop your plans here, or <span className="browse-txt">browse files</span>
                </h4>
                <p className="drop-caption">PDF, DWG, CAD, DXF, or ZIP files (Multiple files allowed)</p>
                
                <div className="drop-supported-pill">
                  <span>Supported: PDF · DWG · CAD · DXF · ZIP</span>
                  <span className="pill-separator">•</span>
                  <span>Maximum File Size: 500 MB</span>
                </div>
              </div>

              {/* Upload Error Warning */}
              {uploadError && (
                <div className="upload-error-alert">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="12" y1="8" x2="12" y2="12"/>
                    <line x1="12" y1="16" x2="12.01" y2="16"/>
                  </svg>
                  <span>{uploadError}</span>
                </div>
              )}

              {/* Selected Files List */}
              {uploadedFiles.length > 0 && (
                <div className="file-chips-shelf">
                  <div className="chips-shelf-header">
                    <strong>Attached Plans ({uploadedFiles.length})</strong>
                    <span className="ready-indicator">✓ Ready for scope review</span>
                  </div>
                  {uploadedFiles.map((f, i) => (
                    <div key={i} className="file-chip">
                      <div className="file-chip-info">
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="var(--color-primary)" strokeWidth="2">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                          <polyline points="14 2 14 8 20 8"></polyline>
                        </svg>
                        <span className="file-chip-title">{f.name}</span>
                        <span className="file-chip-size">({formatSize(f.size)})</span>
                        <span className="file-status-badge">Attached</span>
                      </div>
                      <button 
                        type="button" 
                        className="btn-chip-del" 
                        onClick={(e) => {
                          e.stopPropagation();
                          onRemoveFile(i);
                        }} 
                        title="Remove file"
                        aria-label="Remove file"
                      >
                        &times;
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Submit Button & Confidentiality */}
            <div className="submit-foot-group">
              <button 
                type="submit" 
                className="btn btn-primary btn-xl submit-project-btn" 
                disabled={isSubmitting} 
                data-track-cta="submit-project-button"
              >
                {isSubmitting ? (
                  <span>Submitting Project &amp; Plans...</span>
                ) : (
                  <>
                    <span>Submit My Project</span>
                    <svg viewBox="0 0 20 20" width="20" height="20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                    </svg>
                  </>
                )}
              </button>

              {/* Supporting New Client Offer */}
              <div className="form-submit-offer-callout">
                <span>🎉 <strong>New clients save 20%</strong> on their first estimate.</span>
              </div>

              <p className="price-terms-note text-center">
                Estimates starting from <strong>$100</strong> • Guaranteed 24–48 hour turnaround or full revision
              </p>

              {/* Confidentiality & Security Message */}
              <div className="confidentiality-security-box">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="var(--color-success)">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
                </svg>
                <span>Your Project Plans and Information Are Handled Securely and Confidentially</span>
              </div>

              <div className="badges-bar">
                <div className="badge-unit">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="var(--color-success)">
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
                  </svg>
                  <span>Strict NDA Protection Available</span>
                </div>
                <div className="badge-unit">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="var(--color-success)">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                  <span>24–48h Guaranteed Turnaround</span>
                </div>
                <div className="badge-unit">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="var(--color-success)">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="m9 12 2 2 4-4"/>
                  </svg>
                  <span>Zero Hidden Fees</span>
                </div>
              </div>

            </div>

          </form>

        </div>
      </div>
    </section>
  );
}
