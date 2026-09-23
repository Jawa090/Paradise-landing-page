import React from 'react';

const trades = [
  { name: "Electrical", icon: "<polygon points='13 2 3 14 12 14 11 22 21 10 12 10 13 2'/>" },
  { name: "Plumbing", icon: "<path d='M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z'/>" },
  { name: "MEP", icon: "<circle cx='12' cy='12' r='3'/><path d='M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z'/>" },
  { name: "Concrete", icon: "<rect x='2' y='7' width='20' height='14' rx='2' ry='2'/><path d='M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16'/>" },
  { name: "HVAC / Duct", icon: "<circle cx='12' cy='12' r='10'/><path d='M12 2a4.5 4.5 0 0 0 0 9 4.5 4.5 0 0 1 0 9'/><path d='M12 12a4.5 4.5 0 0 0 9 0 4.5 4.5 0 0 1-9 0'/>" },
  { name: "Sitework", icon: "<path d='M3 21h18'/><path d='M5 21V9l7-4 7 4v12'/><line x1='9' y1='21' x2='9' y2='13'/><line x1='15' y1='21' x2='15' y2='13'/>" },
  { name: "Rebar / Metals", icon: "<line x1='4' y1='4' x2='20' y2='20'/><line x1='20' y1='4' x2='4' y2='20'/><line x1='4' y1='12' x2='20' y2='12'/><line x1='12' y1='4' x2='12' y2='20'/>" },
  { name: "General Contractor Takeoffs", icon: "<path d='M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z'/><polyline points='14 2 14 8 20 8'/><line x1='16' y1='13' x2='8' y2='13'/><line x1='16' y1='17' x2='8' y2='17'/><polyline points='10 9 9 9 8 9'/>" }
];

export default function TradeCoverage({ selectedTrade, onSelectTrade, onUploadClick }) {
  return (
    <section className="section section-trades-view">
      <div className="container">
        <div className="section-head text-center">
          <span className="badge-tag">FULL TRADE COVERAGE</span>
          <h2 className="title-lg">One Estimating Partner for Every Trade</h2>
          <p className="title-desc">
            Get professional estimates and takeoffs across major construction trades without managing multiple estimating vendors.
          </p>
        </div>

        <div className="trade-matrix">
          {trades.map(t => (
            <div 
              key={t.name}
              className={`trade-tile ${selectedTrade === t.name ? 'active-selected' : ''}`}
              onClick={() => {
                onSelectTrade(t.name);
                onUploadClick();
              }}
            >
              <div className="trade-tile-icon">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" dangerouslySetInnerHTML={{ __html: t.icon }}></svg>
              </div>
              <span className="trade-tile-name">{t.name}</span>
            </div>
          ))}
        </div>

        <div className="trade-callout-box">
          <p className="trade-callout-msg">Need another trade? Send us your plans and we'll review the project.</p>
          <button type="button" className="btn btn-primary" onClick={onUploadClick} data-track-cta="trade-section-upload">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2">
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
