import React, { useRef } from 'react';

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

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(false);
    if (e.dataTransfer && e.dataTransfer.files) {
      onAddFiles(Array.from(e.dataTransfer.files));
    }
  };

  return (
    <section id="upload-section" className="section section-full-upload">
      <div className="container">
        <div className="upload-card-wrapper">
          
          <div className="text-center">
            <span className="badge-tag">FAST PROJECT SUBMISSION</span>
            <h2 className="upload-heading">Have a Bid Deadline Coming Up?</h2>
            <p className="upload-subheading">
              Upload your plans and project details. Our estimating team will review the scope and provide your quote and turnaround information.
            </p>
          </div>

          <form onSubmit={onSubmit} data-track-form="plan-upload-main">
            
            {/* Step 1: Contact Information */}
            <div className="form-segment">
              <h3 className="segment-title">
                <span className="segment-badge">1</span>
                <span>Contact Information</span>
              </h3>

              <div className="grid-cols-2">
                <div className="form-field">
                  <label className="form-label">Full Name <span className="req-star">*</span></label>
                  <input type="text" name="name" className="form-input" placeholder="John Miller" required />
                </div>

                <div className="form-field">
                  <label className="form-label">Company <span className="req-star">*</span></label>
                  <input type="text" name="company" className="form-input" placeholder="Miller Contracting LLC" required />
                </div>

                <div className="form-field">
                  <label className="form-label">Business Email <span className="req-star">*</span></label>
                  <input type="email" name="email" className="form-input" placeholder="john@millercontracting.com" required />
                </div>

                <div className="form-field">
                  <label className="form-label">Phone <span className="req-star">*</span></label>
                  <input type="tel" name="phone" className="form-input" placeholder="(718) 719-6171" required />
                </div>
              </div>
            </div>

            {/* Step 2: Project Information */}
            <div className="form-segment">
              <h3 className="segment-title">
                <span className="segment-badge">2</span>
                <span>Project Information</span>
              </h3>

              <div className="grid-cols-3">
                <div className="form-field">
                  <label className="form-label">Trade / Service <span className="req-star">*</span></label>
                  <select 
                    name="service_trade" 
                    className="form-select" 
                    value={selectedTrade} 
                    onChange={(e) => onTradeChange(e.target.value)} 
                    required
                  >
                    <option value="" disabled>Select Trade / Scope</option>
                    {['Electrical', 'Plumbing', 'MEP', 'Concrete', 'HVAC / Duct', 'Sitework', 'Rebar / Metals', 'General Contractor Takeoffs', 'Full Project / All Trades', 'Other'].map(t => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>

                <div className="form-field">
                  <label className="form-label">Project Location / State <span className="req-star">*</span></label>
                  <input type="text" name="location" className="form-input" placeholder="e.g. New York, NY or Texas" required />
                </div>

                <div className="form-field">
                  <label className="form-label">Bid Deadline <span className="req-star">*</span></label>
                  <input type="date" name="bid_deadline" className="form-input" min={today} required />
                </div>
              </div>
            </div>

            {/* Step 3: Drag & Drop File Upload Area */}
            <div className="form-segment">
              <h3 className="segment-title">
                <span className="segment-badge">3</span>
                <span>Upload Plans / Drawings</span>
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
                  accept=".pdf,.dwg,.dxf,.zip,.rar,.png,.jpg,.jpeg,.tiff"
                  style={{ display: 'none' }}
                  onChange={(e) => {
                    if (e.target.files) {
                      onAddFiles(Array.from(e.target.files));
                    }
                  }}
                />

                <div className="drop-icon-round">
                  <svg viewBox="0 0 24 24" width="34" height="34" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="17 8 12 3 7 8"/>
                    <line x1="12" y1="3" x2="12" y2="15"/>
                  </svg>
                </div>

                <h4 className="drop-prompt">
                  Drag &amp; drop your plans here, or <span className="browse-txt">browse files</span>
                </h4>
                <p className="drop-caption">PDF, drawings or other project documents (Multiple files allowed)</p>
                <span className="drop-badge-info">Supports PDF, DWG, DXF, ZIP up to 500MB</span>
              </div>

              {/* Attached File Chips */}
              {uploadedFiles.length > 0 && (
                <div className="file-chips-shelf">
                  {uploadedFiles.map((f, i) => (
                    <div key={i} className="file-chip">
                      <div className="file-chip-info">
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="var(--color-primary)" strokeWidth="2">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                          <polyline points="14 2 14 8 20 8"></polyline>
                        </svg>
                        <span className="file-chip-title">{f.name}</span>
                        <span className="file-chip-size">({formatSize(f.size)})</span>
                      </div>
                      <button 
                        type="button" 
                        className="btn-chip-del" 
                        onClick={(e) => {
                          e.stopPropagation();
                          onRemoveFile(i);
                        }} 
                        title="Remove file"
                      >
                        &times;
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Step 4: Optional Notes */}
            <div className="form-segment">
              <div className="form-field">
                <label className="form-label">Project Details / Additional Requirements (Optional)</label>
                <textarea 
                  name="project_details" 
                  rows="3" 
                  className="form-textarea" 
                  placeholder="Please specify any specific CSI divisions, addenda, inclusions or exclusions you need..."
                ></textarea>
              </div>
            </div>

            {/* Submit Button & Disclaimers */}
            <div className="submit-foot-group">
              <button type="submit" className="btn btn-primary btn-xl" disabled={isSubmitting} data-track-cta="submit-project-button">
                {isSubmitting ? (
                  <span>Submitting Your Project...</span>
                ) : (
                  <>
                    <span>Submit My Project</span>
                    <svg viewBox="0 0 20 20" width="20" height="20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                    </svg>
                  </>
                )}
              </button>

              <p className="price-terms-note text-center">
                Estimates starting from <strong>$100</strong>. Final pricing depends on project scope, size and complexity.
              </p>

              <div className="badges-bar">
                <div className="badge-unit">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="var(--color-success)"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/></svg>
                  <span>Confidential &amp; NDA Protected</span>
                </div>
                <div className="badge-unit">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="var(--color-success)"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                  <span>Guaranteed Turnaround</span>
                </div>
                <div className="badge-unit">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="var(--color-success)"><path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/></svg>
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
