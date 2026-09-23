import React from 'react';

export default function SampleModal({ onClose, onSubmitPlans }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-window" onClick={(e) => e.stopPropagation()}>
        <div className="modal-head">
          <div>
            <span className="modal-badge-label">SAMPLE ESTIMATE REPORT</span>
            <h3 className="modal-head-title">Paradise Estimating Itemized Takeoff Sample</h3>
          </div>
          <button type="button" className="modal-close-icon" onClick={onClose}>&times;</button>
        </div>
        <div className="modal-scrollable">
          <div style={{ border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', overflow: 'hidden', marginBottom: '1rem' }}>
            <img src="/sample-estimate.jpg" alt="High Resolution CSI Division Takeoff Sample Report by Paradise Estimating" />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.65rem', backgroundColor: 'var(--color-bg-light)', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
            <div style={{ fontSize: '0.82rem', fontWeight: '600', color: 'var(--color-dark)' }}>✓ CSI MasterFormat 16/50 Divisions</div>
            <div style={{ fontSize: '0.82rem', fontWeight: '600', color: 'var(--color-dark)' }}>✓ Quantities, Unit Material &amp; Labor Costs</div>
            <div style={{ fontSize: '0.82rem', fontWeight: '600', color: 'var(--color-dark)' }}>✓ Bluebeam &amp; PlanSwift Markups Included</div>
            <div style={{ fontSize: '0.82rem', fontWeight: '600', color: 'var(--color-dark)' }}>✓ Excel (.XLSX) &amp; PDF Deliverables</div>
          </div>
        </div>
        <div className="modal-foot">
          <button type="button" className="btn btn-secondary" onClick={onClose}>Close Preview</button>
          <button type="button" className="btn btn-primary" onClick={onSubmitPlans}>
            Submit My Plans for Estimate
          </button>
        </div>
      </div>
    </div>
  );
}
