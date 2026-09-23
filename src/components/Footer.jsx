import React from 'react';

export default function Footer({ onOpenLegal }) {
  return (
    <footer className="page-footer">
      <div className="container footer-row">
        <div className="footer-brand-side">
          <img src="/logo.webp" alt="Paradise Estimating Logo" className="footer-logo-pic" width="54" height="54" />
          <div>
            <span className="footer-title-txt">Paradise Estimating</span>
            <p className="footer-sub-txt">Professional Construction Estimating &amp; Quantity Takeoffs across the USA.</p>
          </div>
        </div>

        <div className="footer-contact-side">
          <a href="tel:7187196171" className="footer-contact-link" data-track-cta="footer-phone">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            <span>(718) 719-6171</span>
          </a>

          <a href="mailto:info@paradiseestimating.com" className="footer-contact-link" data-track-cta="footer-email">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="4" width="20" height="16" rx="2"/>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
            </svg>
            <span>info@paradiseestimating.com</span>
          </a>
        </div>

        <div className="footer-meta-side">
          <div className="footer-nav-links">
            <a onClick={() => onOpenLegal('privacy')}>Privacy Policy</a>
            <span className="footer-dot">•</span>
            <a onClick={() => onOpenLegal('terms')}>Terms of Service</a>
          </div>
          <p className="footer-rights">&copy; 2026 Paradise Estimating. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
