import React from 'react';

const reviewsData = [
  {
    rating: 5,
    quote: "Their breakdowns were accurate, easy to understand, and delivered right on time. They helped me move forward with confidence.",
    author: "Jonathan Reyes",
    role: "General Contractor",
    logo: "/clients/client-1-color.avif"
  },
  {
    rating: 5,
    quote: "Electrical estimating can get complicated fast, but Paradise Estimating understood every part of my project and clarified the technical details.",
    author: "Karen Mitchell",
    role: "Electrical Contractor",
    logo: "/clients/client-12.avif"
  },
  {
    rating: 5,
    quote: "Our industrial project was complex. Their estimate helped us plan better, cut unnecessary costs, and stay ahead of schedule.",
    author: "Mark Hamilton",
    role: "Industrial Builder",
    logo: "/clients/client-13.avif"
  },
  {
    rating: 5,
    quote: "Fast turnaround and spot-on concrete quantities. Saved us hours during our bid submittal deadline!",
    author: "David Miller",
    role: "Concrete Subcontractor",
    logo: "/clients/client-14.avif"
  },
  {
    rating: 5,
    quote: "The line-by-line CSI takeoff sheets plug directly into our bid proposals. Excellent support and accuracy!",
    author: "Robert Vance",
    role: "Commercial GC",
    logo: "/clients/client-15.avif"
  }
];

export default function PreFAQSection({ onUploadClick, onGetQuoteClick }) {
  const scrollToUpload = () => {
    const el = document.getElementById('upload-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToQuote = () => {
    const el = document.getElementById('quote-card-target');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="pre-faq-wrapper" style={{ backgroundColor: '#ffffff', padding: '4.5rem 1.5rem', fontFamily: 'var(--font-main)' }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Trusted by Contractors Section (5 Reviews with Client Logos) */}
        <div className="trusted-reviews-block" style={{ marginBottom: '5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.5rem' }}>
              Trusted by contractors
            </h2>
            <p style={{ color: '#64748b', fontSize: '0.98rem' }}>
              See what general contractors and trade specialists say about our takeoff accuracy and speed.
            </p>
          </div>

          {/* Animated Scrolling Track Container (Left to Right, Pause on Hover) */}
          <div className="reviews-slider-track-wrap">
            <div className="reviews-slider-track">
              {[...reviewsData, ...reviewsData].map((item, idx) => (
                <div 
                  key={idx}
                  className="review-card-slide"
                  style={{
                    backgroundColor: '#f8fafc',
                    border: '1px solid #e2e8f0',
                    borderRadius: '16px',
                    padding: '1.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justify: 'space-between',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
                    minHeight: '220px'
                  }}
                >
                  <div>
                    {/* Stars */}
                    <div style={{ color: '#56b32b', fontSize: '1rem', letterSpacing: '2px', marginBottom: '0.75rem' }}>
                      ★★★★★
                    </div>
                    {/* Quote */}
                    <p style={{ fontSize: '0.86rem', color: '#334155', lineHeight: 1.5, marginBottom: '1.25rem', fontStyle: 'italic' }}>
                      "{item.quote}"
                    </p>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '0.75rem', borderTop: '1px solid #cbd5e1' }}>
                    <div>
                      <strong style={{ display: 'block', fontSize: '0.85rem', color: '#0f172a', fontWeight: 700 }}>
                        {item.author}
                      </strong>
                      <span style={{ fontSize: '0.73rem', color: '#64748b' }}>
                        {item.role}
                      </span>
                    </div>
                    {/* Company Logo Pic */}
                    <img 
                      src={item.logo} 
                      alt={`${item.author} Company`} 
                      style={{ height: '24px', maxWidth: '70px', objectFit: 'contain', opacity: 0.85 }} 
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Have a project coming up for bid? CTA Card (Matching exact screenshot design) */}
        <div 
          className="upcoming-bid-card"
          style={{
            backgroundColor: '#ffffff',
            borderRadius: '20px',
            padding: '2.5rem',
            display: 'flex',
            alignItems: 'center',
            justify: 'space-between',
            gap: '2rem',
            flexWrap: 'wrap',
            boxShadow: '0 10px 30px -5px rgba(0,0,0,0.05)',
            border: '1px solid #f1f5f9'
          }}
        >
          {/* Left Text & Actions */}
          <div style={{ maxWidth: '540px' }}>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#0f172a', lineHeight: 1.2, marginBottom: '0.75rem' }}>
              Have a project coming up for bid?
            </h2>
            <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              Don't let a full desk cost you the next job. Send your plans and get estimating support with a typical 24–48 hour turnaround.
            </p>

            <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap' }}>
              <button
                type="button"
                className="btn"
                onClick={onUploadClick || scrollToUpload}
                style={{
                  backgroundColor: '#56b32b',
                  color: '#ffffff',
                  borderRadius: '9999px',
                  padding: '0.75rem 1.6rem',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                Upload plans now
              </button>

              <button
                type="button"
                className="btn"
                onClick={onGetQuoteClick || scrollToQuote}
                style={{
                  backgroundColor: '#ffffff',
                  color: '#0f172a',
                  borderRadius: '9999px',
                  padding: '0.75rem 1.4rem',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  border: '1.5px solid #0f172a',
                  cursor: 'pointer'
                }}
              >
                Call an estimator
              </button>
            </div>
          </div>

          {/* Right Green Callout Card */}
          <div
            style={{
              backgroundColor: '#eef8ea',
              border: '1px solid #dcf0d3',
              borderRadius: '16px',
              padding: '1.75rem 2rem',
              minWidth: '280px',
              maxWidth: '360px',
              flex: '1'
            }}
          >
            <strong style={{ display: 'block', fontSize: '1rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.4rem' }}>
              Bid deadline within 48 hours?
            </strong>
            <p style={{ fontSize: '0.78rem', color: '#64748b', lineHeight: 1.4, marginBottom: '1rem' }}>
              Call us directly. Express delivery is available for urgent deadlines.
            </p>

            <a 
              href="tel:7187196171" 
              style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a', textDecoration: 'none', display: 'block' }}
            >
              (718) 719–6171
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
