import React from 'react';

export default function LegalModal({ type, onClose }) {
  const isPrivacy = type === 'privacy';

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-window" style={{ maxWidth: '620px' }} onClick={(e) => e.stopPropagation()}>
        <div className="modal-head">
          <h3 className="modal-head-title">{isPrivacy ? 'Privacy Policy' : 'Terms of Service'}</h3>
          <button type="button" className="modal-close-icon" onClick={onClose}>&times;</button>
        </div>
        <div className="modal-scrollable" style={{ fontSize: '0.92rem', color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
          {isPrivacy ? (
            <>
              <p><strong>Last Updated: January 2026</strong></p>
              <p style={{ marginTop: '0.5rem' }}>
                Paradise Estimating respects your privacy and is committed to protecting the confidential blueprints, bid documents, and personal contact information you share with us.
              </p>
              <h4 style={{ margin: '1rem 0 0.5rem', color: 'var(--color-dark)' }}>1. Plan Confidentiality &amp; Non-Disclosure</h4>
              <p>
                All drawings, project documents, addenda, and specifications submitted to Paradise Estimating are protected under strict confidentiality. We never sell, share, or disclose contractor bid details or project drawings to third parties or competing bidders.
              </p>
              <h4 style={{ margin: '1rem 0 0.5rem', color: 'var(--color-dark)' }}>2. Contact Information</h4>
              <p>
                Your contact information is only used by our team to provide takeoff turnaround updates and project quotes. For questions, email us at <a href="mailto:sales@paradiseestimating.com" style={{ color: 'var(--color-primary)' }}>sales@paradiseestimating.com</a> or call (718) 719-6171.
              </p>
            </>
          ) : (
            <>
              <p><strong>Last Updated: January 2026</strong></p>
              <h4 style={{ margin: '1rem 0 0.5rem', color: 'var(--color-dark)' }}>1. Estimating Services Scope</h4>
              <p>
                Paradise Estimating provides construction takeoff and material quantity estimations based on architectural drawings, addenda, and specifications supplied by the client. Turnaround times typically range between 24 and 48 business hours.
              </p>
              <h4 style={{ margin: '1rem 0 0.5rem', color: 'var(--color-dark)' }}>2. Pricing &amp; Estimates</h4>
              <p>
                Estimates start from $100. Formal fee quotes are provided after reviewing project scope, square footage, and trade complexity before any billing occurs.
              </p>
              <h4 style={{ margin: '1rem 0 0.5rem', color: 'var(--color-dark)' }}>3. Contractor Responsibility</h4>
              <p>
                Estimates and quantity takeoff reports are designed to assist contractors in bid preparation. The final bid submission remains the professional responsibility of the submitting contractor.
              </p>
            </>
          )}
        </div>
        <div className="modal-foot">
          <button type="button" className="btn btn-secondary" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
}
