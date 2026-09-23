import React from 'react';

export default function HowItWorks() {
  return (
    <section className="section section-flow">
      <div className="container">
        <div className="section-head text-center">
          <span className="badge-tag">EASY 4-STEP PROCESS</span>
          <h2 className="title-lg">From Plans to Estimate in 4 Simple Steps</h2>
          <div className="brand-rule"></div>
        </div>

        <div className="flow-row">
          <div className="flow-card">
            <div className="flow-card-head">
              <span className="flow-step-num">01</span>
              <div className="flow-icon-bubble">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="17 8 12 3 7 8"/>
                  <line x1="12" y1="3" x2="12" y2="15"/>
                </svg>
              </div>
            </div>
            <h3 className="flow-card-title">Upload Your Plans</h3>
            <p className="flow-card-desc">Send your drawings and project documents.</p>
          </div>

          <div className="flow-card">
            <div className="flow-card-head">
              <span className="flow-step-num">02</span>
              <div className="flow-icon-bubble">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"/>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                  <line x1="11" y1="8" x2="11" y2="14"/>
                  <line x1="8" y1="11" x2="14" y2="11"/>
                </svg>
              </div>
            </div>
            <h3 className="flow-card-title">We Review the Scope</h3>
            <p className="flow-card-desc">Our team reviews the trade, project requirements and deadline.</p>
          </div>

          <div className="flow-card">
            <div className="flow-card-head">
              <span className="flow-step-num">03</span>
              <div className="flow-icon-bubble">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
              </div>
            </div>
            <h3 className="flow-card-title">Receive Your Quote</h3>
            <p className="flow-card-desc">Get project-specific pricing and turnaround information.</p>
          </div>

          <div className="flow-card">
            <div className="flow-card-head">
              <span className="flow-step-num">04</span>
              <div className="flow-icon-bubble">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
              </div>
            </div>
            <h3 className="flow-card-title">Get Your Estimate</h3>
            <p className="flow-card-desc">Receive the completed estimate or takeoff.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
