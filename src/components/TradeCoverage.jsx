import React from 'react';

const trades = [
  { 
    name: "Commercial Estimating", 
    // Commercial tower with structural grid & entrance
    icon: "<path d='M4 22h16M7 22V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v18M10 7h1M13 7h1M10 11h1M13 11h1M10 15h1M13 15h1M10 22v-3h4v3'/>" 
  },
  { 
    name: "MEP", 
    // MEP composite: mechanical gear & system node
    icon: "<circle cx='12' cy='12' r='3'/><path d='M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z'/>" 
  },
  { 
    name: "Electrical", 
    // High-voltage power flash & circuit
    icon: "<polygon points='13 2 3 14 12 14 11 22 21 10 12 10 13 2'/>" 
  },
  { 
    name: "Plumbing", 
    // Clean pipe fitting & fluid droplet
    icon: "<path d='M12 2v6M12 8a4 4 0 0 1-4 4H4M12 8a4 4 0 0 0 4 4h4M4 12v6M20 12v6M12 15a3 3 0 1 0 0 6 3 3 0 0 0 0-6z'/>" 
  },
  { 
    name: "HVAC / Mechanical", 
    // Ventilation blower fan with dynamic airflow
    icon: "<circle cx='12' cy='12' r='10'/><path d='M12 12c0-3 2.5-5 5-5s3 2.5 1 5-6 0-6 0z'/><path d='M12 12c-3 0-5-2.5-5-5s2.5-3 5-1 0 6 0 6z'/><path d='M12 12c0 3-2.5 5-5 5s-3-2.5-1-5 6 0 6 0z'/><path d='M12 12c3 0 5 2.5 5 5s-2.5 3-5 1 0-6 0-6z'/>" 
  },
  { 
    name: "Concrete", 
    // Concrete foundation block & reinforcement slab
    icon: "<rect x='2' y='7' width='20' height='14' rx='2'/><path d='M6 7v14M10 7v14M14 7v14M18 7v14M2 12h20M2 17h20'/>" 
  },
  { 
    name: "Sitework", 
    // Heavy earthmoving / site grading landscape
    icon: "<path d='M2 18h20M4 18l4-8 5 4 7-6M4 14l3-2 5 4 6-5'/>" 
  },
  { 
    name: "Rebar / Metals", 
    // Structural steel I-Beam profile
    icon: "<path d='M4 3h16v4H14v10h6v4H4v-4h6V7H4V3z'/>" 
  },
  { 
    name: "General Contractor Takeoffs", 
    // Architectural plan document & scale ruler
    icon: "<path d='M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z'/><polyline points='14 2 14 8 20 8'/><path d='M8 13h8M8 17h5M10 9h1'/>" 
  }
];

export default function TradeCoverage({ selectedTrade, onSelectTrade, onUploadClick }) {
  return (
    <section className="section section-trades-view" id="trade-coverage">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-head text-center">
          <span className="badge-tag">FULL TRADE COVERAGE</span>
          <h2 className="title-lg">One Estimating Partner for Multiple Construction Trades</h2>
          <p className="title-desc">
            Get professional estimates and takeoffs across major construction trades without coordinating multiple estimating providers.
          </p>
          <div className="brand-rule"></div>
        </div>

        {/* 9-Trade Visual Grid */}
        <div className="trade-matrix">
          {trades.map(t => (
            <div 
              key={t.name}
              className={`trade-tile ${selectedTrade === t.name ? 'active-selected' : ''}`}
              onClick={() => {
                onSelectTrade(t.name);
                onUploadClick();
              }}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  onSelectTrade(t.name);
                  onUploadClick();
                }
              }}
            >
              <div className="trade-tile-icon">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" dangerouslySetInnerHTML={{ __html: t.icon }}></svg>
              </div>
              <span className="trade-tile-name">{t.name}</span>
            </div>
          ))}
        </div>

        {/* CTA Under Trade Coverage */}
        <div className="trade-callout-box">
          <div className="trade-callout-content">
            <h3 className="trade-callout-title">Don't See Your Trade?</h3>
            <p className="trade-callout-msg">Send us your plans and our estimating team will review the project scope.</p>
          </div>
          <button 
            type="button" 
            className="btn btn-primary btn-lg" 
            onClick={onUploadClick} 
            data-track-cta="trade-section-upload"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="17 8 12 3 7 8"/>
              <line x1="12" y1="3" x2="12" y2="15"/>
            </svg>
            <span>Upload Your Plans</span>
          </button>
        </div>

      </div>
    </section>
  );
}
