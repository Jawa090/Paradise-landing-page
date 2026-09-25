import React from 'react';

export default function HowItWorks() {
  return (
    <section className="section section-flow" id="how-it-works">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-head text-center">
          <span className="badge-tag">STREAMLINED 4-STEP PROCESS</span>
          <h2 className="title-lg">From Plans to Estimate in 4 Simple Steps</h2>
          <div className="brand-rule"></div>
        </div>

        {/* 4 Steps Grid */}
        <div className="flow-row">
          
          {/* Step 01 */}
          <div className="flow-card">
            <div className="flow-card-head">
              <span className="flow-step-num">01</span>
              <div className="flow-icon-bubble">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/>
                  <path d="M12 12v9"/>
                  <path d="m16 16-4-4-4 4"/>
                </svg>
              </div>
            </div>
            <h3 className="flow-card-title">Upload Your Plans</h3>
            <p className="flow-card-desc">Send your drawings, plans and available project documents.</p>
          </div>

          {/* Step 02 */}
          <div className="flow-card">
            <div className="flow-card-head">
              <span className="flow-step-num">02</span>
              <div className="flow-icon-bubble">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"/>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                  <path d="M8 11h6"/>
                  <path d="M11 8v6"/>
                </svg>
              </div>
            </div>
            <h3 className="flow-card-title">We Review Your Scope</h3>
            <p className="flow-card-desc">The Paradise team reviews project requirements, trade, scope and bid deadline.</p>
          </div>

          {/* Step 03 */}
          <div className="flow-card">
            <div className="flow-card-head">
              <span className="flow-step-num">03</span>
              <div className="flow-icon-bubble">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="5" width="20" height="14" rx="2"/>
                  <line x1="2" y1="10" x2="22" y2="10"/>
                  <path d="M7 15h2"/>
                  <path d="M15 15h2"/>
                </svg>
              </div>
            </div>
            <h3 className="flow-card-title">Receive Your Quote</h3>
            <p className="flow-card-desc">Get project-specific pricing and expected turnaround.</p>
          </div>

          {/* Step 04 */}
          <div className="flow-card">
            <div className="flow-card-head">
              <span className="flow-step-num">04</span>
              <div className="flow-icon-bubble">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14 2 14 8 20 8"/>
                  <path d="m9 15 2 2 4-4"/>
                </svg>
              </div>
            </div>
            <h3 className="flow-card-title">Receive Your Estimate</h3>
            <p className="flow-card-desc">Receive the completed estimate or quantity takeoff.</p>
          </div>

        </div>

      </div>
    </section>
  );
}
