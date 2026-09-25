import React, { useState } from 'react';

const sampleCategories = {
  commercial: {
    id: 'commercial',
    label: 'Commercial',
    title: 'Commercial Multi-Trade Estimate & Takeoff',
    desc: 'Complete CSI MasterFormat divisions including finishes, drywall, framing, and commercial site packages.',
    img: '/sample-estimate.jpg',
    divisions: 'Divisions 01–14 (Commercial GC Package)',
    deliverableTypes: ['Excel Sheet (.XLSX)', 'Marked-Up Blueprints (PDF)', 'Executive Bid Summary']
  },
  mep: {
    id: 'mep',
    label: 'MEP',
    title: 'Mechanical, Electrical & Plumbing Takeoff',
    desc: 'Itemized fixture counts, ductwork poundage, conduit & wiring linear footage, and piping assemblies.',
    img: '/sample-estimate.jpg',
    divisions: 'Divisions 21, 22, 23, 26 (MEP Systems)',
    deliverableTypes: ['Material & Labor Takeoff', 'Color-Coded Bluebeam Markups', 'Vendor Pricing Matrix']
  },
  concrete: {
    id: 'concrete',
    label: 'Concrete',
    title: 'Concrete, Rebar & Foundation Takeoff',
    desc: 'Precise cubic yardage calculations for footings, grade beams, slabs-on-grade, rebar tonnage, and formwork.',
    img: '/sample-estimate.jpg',
    divisions: 'Division 03 (Concrete & Structural Rebar)',
    deliverableTypes: ['Volume Breakdown (CY / SF)', 'Rebar Schedule (Tons / LBS)', 'Formwork & Pour Sequence']
  }
};

export default function TrustProof({ onOpenSample, onUploadClick }) {
  const [activeTab, setActiveTab] = useState('commercial');
  const currentSample = sampleCategories[activeTab];

  return (
    <section className="section section-evidence" id="deliverables-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-head text-center">
          <span className="badge-tag">VERIFIED DELIVERABLES</span>
          <h2 className="title-lg">See What You'll Receive</h2>
          <p className="title-desc">
            Contractor-grade deliverables built for winning bids, accurate material ordering, and complete scope coverage.
          </p>
          <div className="brand-rule"></div>
        </div>

        {/* Workflow Progression: Plans -> Takeoff -> Breakdown -> Estimate */}
        <div className="deliverable-pipeline">
          <div className="pipeline-step">
            <span className="pipeline-num">
              <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.4">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              </svg>
            </span>
            <div className="pipeline-label">Plans &amp; Drawings</div>
          </div>
          <div className="pipeline-arrow">&rarr;</div>
          <div className="pipeline-step">
            <span className="pipeline-num">
              <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.4">
                <path d="m18 2 4 4-14 14H4v-4L18 2z"/>
              </svg>
            </span>
            <div className="pipeline-label">Marked-Up Takeoff</div>
          </div>
          <div className="pipeline-arrow">&rarr;</div>
          <div className="pipeline-step">
            <span className="pipeline-num">
              <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.4">
                <rect x="3" y="3" width="18" height="18" rx="2"/>
                <path d="M3 9h18M9 21V9"/>
              </svg>
            </span>
            <div className="pipeline-label">Quantity Breakdown</div>
          </div>
          <div className="pipeline-arrow">&rarr;</div>
          <div className="pipeline-step active">
            <span className="pipeline-num">
              <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.4">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                <polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
            </span>
            <div className="pipeline-label">Final Bid Estimate</div>
          </div>
        </div>

        {/* Main Deliverable Showroom Split */}
        <div className="deliverables-showroom-split">
          
          {/* Left Side: Interactive Preview with Tabs */}
          <div className="showroom-left">
            
            {/* Tabs: Commercial, MEP, Concrete */}
            <div className="sample-tabs-bar" role="tablist">
              {Object.keys(sampleCategories).map((key) => {
                const item = sampleCategories[key];
                return (
                  <button
                    key={item.id}
                    type="button"
                    role="tab"
                    aria-selected={activeTab === item.id}
                    className={`sample-tab-btn ${activeTab === item.id ? 'active-tab' : ''}`}
                    onClick={() => setActiveTab(item.id)}
                  >
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Preview Card */}
            <div className="sample-card-panel">
              <div className="sample-meta-row">
                <span className="sample-tag">{currentSample.divisions}</span>
                <span className="sample-format-pill">XLSX + PDF</span>
              </div>

              <div 
                className="sample-thumbnail-container" 
                onClick={onOpenSample}
                title="Click to preview full-size deliverable"
              >
                <img src={currentSample.img} alt={`Paradise Estimating ${currentSample.label} Deliverable Sample`} />
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

              <div className="sample-details-box">
                <h4 className="sample-details-title">{currentSample.title}</h4>
                <p className="sample-details-desc">{currentSample.desc}</p>
                <div className="sample-deliverables-tags">
                  {currentSample.deliverableTypes.map((type, idx) => (
                    <span key={idx} className="type-tag">✓ {type}</span>
                  ))}
                </div>
              </div>

              <button 
                type="button" 
                className="btn btn-secondary btn-block" 
                onClick={onOpenSample} 
                data-track-cta="view-sample-estimate"
              >
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                  <circle cx="12" cy="12" r="3"/>
                </svg>
                <span>View Full Sample Report</span>
              </button>
            </div>

          </div>

          {/* Right Side: What's Included & Action */}
          <div className="showroom-right">
            <div className="deliverables-list-card">
              <h3 className="deliverables-heading">Detailed Estimates Built for Real Bids</h3>
              <p className="deliverables-sub">
                Every Paradise takeoff is formatted to plug directly into your bid submittals and vendor negotiations:
              </p>

              <ul className="deliverables-checklist">
                <li>
                  <div className="check-icon">
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <div className="check-text">
                    <strong>Detailed Quantity Takeoffs</strong>
                    <span>Comprehensive line-by-line itemization with clear trade grouping</span>
                  </div>
                </li>
                <li>
                  <div className="check-icon">
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <div className="check-text">
                    <strong>Material Quantities</strong>
                    <span>Exact square footage, linear footage, count, and volume calculations</span>
                  </div>
                </li>
                <li>
                  <div className="check-icon">
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <div className="check-text">
                    <strong>Labor Quantities / Costs</strong>
                    <span>Crew production rates and man-hour breakdowns for each task</span>
                  </div>
                </li>
                <li>
                  <div className="check-icon">
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <div className="check-text">
                    <strong>Unit Pricing</strong>
                    <span>Market-calibrated material and labor rates aligned with your region</span>
                  </div>
                </li>
                <li>
                  <div className="check-icon">
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <div className="check-text">
                    <strong>Extended Pricing</strong>
                    <span>Fully multiplied sub-totals, trade totals, and overall project costs</span>
                  </div>
                </li>
                <li>
                  <div className="check-icon">
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <div className="check-text">
                    <strong>Bid Summary</strong>
                    <span>Clean executive summary ready for submittal to clients and lenders</span>
                  </div>
                </li>
                <li>
                  <div className="check-icon">
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <div className="check-text">
                    <strong>Excel / PDF Deliverables</strong>
                    <span>Editable .XLSX spreadsheets and high-resolution marked PDF plans</span>
                  </div>
                </li>
              </ul>

              <div className="showroom-cta-bar">
                <button 
                  type="button" 
                  className="btn btn-primary btn-block btn-lg" 
                  onClick={onUploadClick} 
                  data-track-cta="deliverables-upload-plans"
                >
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="17 8 12 3 7 8"/>
                    <line x1="12" y1="3" x2="12" y2="15"/>
                  </svg>
                  <span>Upload Your Plans for an Estimate</span>
                </button>
              </div>
            </div>

            {/* Software / Workflow Proof */}
            <div className="software-workflow-card">
              <div className="workflow-label-row">
                <span className="workflow-badge">CERTIFIED TOOLS</span>
                <span className="workflow-label">Professional Estimating Workflows</span>
              </div>
              <p className="workflow-desc">
                Our estimators utilize industry-standard takeoff software calibrated for precision digital measurement and CSI MasterFormat compliance:
              </p>
              <div className="software-pills-row">
                <div className="software-pill">
                  <div className="software-pill-top">
                    <span className="pill-dot"></span>
                    <strong>PlanSwift</strong>
                  </div>
                  <span className="pill-detail">Digital Blueprint Takeoff</span>
                </div>
                <div className="software-pill">
                  <div className="software-pill-top">
                    <span className="pill-dot"></span>
                    <strong>Bluebeam</strong>
                  </div>
                  <span className="pill-detail">Color-Coded Plan Markup &amp; Review</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
