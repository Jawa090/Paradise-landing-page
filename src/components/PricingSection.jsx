import React from 'react';

const pricingTiers = [
  {
    tag: 'SINGLE TRADE',
    price: '$150–$250',
    desc: 'One trade, e.g. electrical, plumbing, drywall or concrete.',
    featured: false
  },
  {
    tag: 'MULTIPLE TRADES',
    price: '$400–$600',
    desc: 'Standard multi-trade or full-scope projects for GCs.',
    featured: true
  },
  {
    tag: 'DEDICATED ESTIMATOR',
    price: 'From $2,500/mo',
    desc: 'Ongoing capacity for high-volume contractors.',
    featured: false
  }
];

export default function PricingSection({ onUploadClick }) {
  const scrollToUpload = () => {
    const el = document.getElementById('upload-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="pricing-section" id="pricing-section" style={{ backgroundColor: '#f8fafc', padding: '4.5rem 1.5rem', fontFamily: 'var(--font-main)' }}>
      <div className="container" style={{ maxWidth: '1150px', margin: '0 auto' }}>
        
        {/* Section Header */}
        <div style={{ marginBottom: '2.5rem' }}>
          <span style={{ backgroundColor: '#eef8ea', color: '#3d8618', borderRadius: '9999px', padding: '0.25rem 0.85rem', fontSize: '0.78rem', fontWeight: 600, display: 'inline-block', marginBottom: '0.75rem' }}>
            Transparent pricing
          </span>
          <h2 style={{ fontSize: '2.4rem', fontWeight: 800, color: '#0f172a', margin: '0 0 0.5rem 0' }}>
            Know what you'll pay before you upload
          </h2>
          <p style={{ color: '#64748b', fontSize: '0.92rem', margin: 0 }}>
            Every project gets a fixed quote based on size, trade and complexity. You approve it before work begins, with no hidden fees.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
          {pricingTiers.map((tier, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: '#ffffff',
                border: tier.featured ? '2px solid #56b32b' : '1px solid #e2e8f0',
                borderRadius: '16px',
                padding: '2rem 1.5rem',
                boxShadow: tier.featured ? '0 10px 25px -5px rgba(86, 179, 43, 0.15)' : '0 2px 4px rgba(0,0,0,0.02)'
              }}
            >
              <span style={{ fontSize: '0.7rem', letterSpacing: '0.05em', textTransform: 'uppercase', color: '#64748b', fontWeight: 700, display: 'block', marginBottom: '0.75rem' }}>
                {tier.tag}
              </span>
              <strong style={{ display: 'block', fontSize: '2.2rem', fontWeight: 800, color: '#0f172a', lineHeight: 1, marginBottom: '0.75rem' }}>
                {tier.price}
              </strong>
              <p style={{ fontSize: '0.85rem', color: '#64748b', lineHeight: 1.5, margin: 0 }}>
                {tier.desc}
              </p>
            </div>
          ))}
        </div>

        <p style={{ fontSize: '0.75rem', color: '#94a3b8', marginBottom: '2.5rem' }}>
          Typical ranges. Large or complex projects are quoted individually.
        </p>

        {/* Green Offer Banner */}
        <div
          style={{
            backgroundColor: '#56b32b',
            color: '#ffffff',
            borderRadius: '20px',
            padding: '2.5rem',
            display: 'flex',
            alignItems: 'center',
            justify: 'space-between',
            gap: '2rem',
            flexWrap: 'wrap',
            boxShadow: '0 10px 30px -5px rgba(86, 179, 43, 0.3)'
          }}
        >
          <div>
            <span style={{ fontSize: '0.7rem', letterSpacing: '0.06em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.85)', fontWeight: 700, display: 'block', marginBottom: '0.4rem' }}>
              NEW CUSTOMER OFFER
            </span>
            <strong style={{ display: 'block', fontSize: '2.2rem', fontWeight: 800, color: '#ffffff', lineHeight: 1.1, marginBottom: '0.5rem' }}>
              Get 20% OFF your first estimate
            </strong>
            <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.9)', margin: '0 0 0.25rem 0' }}>
              Try us on your next bid without adding a full-time estimator.
            </p>
            <span style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.75)' }}>
              Valid for new clients on their first estimate. Discount shown on your quote.
            </span>
          </div>

          <button
            type="button"
            className="btn"
            onClick={onUploadClick || scrollToUpload}
            style={{
              backgroundColor: '#0f172a',
              color: '#ffffff',
              borderRadius: '9999px',
              padding: '0.85rem 1.8rem',
              fontWeight: 700,
              fontSize: '0.92rem',
              border: 'none',
              cursor: 'pointer',
              whiteSpace: 'nowrap'
            }}
          >
            Claim my 20% off
          </button>
        </div>

      </div>
    </section>
  );
}
