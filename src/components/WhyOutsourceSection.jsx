import React from 'react';

export default function WhyOutsourceSection() {
  return (
    <section className="why-outsource-section" style={{ backgroundColor: '#ffffff', padding: '4.5rem 1.5rem', fontFamily: 'var(--font-main)' }}>
      <div className="container" style={{ maxWidth: '1150px', margin: '0 auto' }}>
        
        {/* Section Header */}
        <div style={{ marginBottom: '2.5rem' }}>
          <span style={{ backgroundColor: '#eef8ea', color: '#3d8618', borderRadius: '9999px', padding: '0.25rem 0.85rem', fontSize: '0.78rem', fontWeight: 600, display: 'inline-block', marginBottom: '0.75rem' }}>
            Built to help contractors bid faster
          </span>
          <h2 style={{ fontSize: '2.4rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
            Why outsource your construction<br />estimating?
          </h2>
        </div>

        {/* 2 Column Comparison Grid */}
        <div className="why-outsource-grid">
          
          {/* Left Box: Hiring in-house */}
          <div className="outsource-card left-card">
            <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a', marginBottom: '1.25rem' }}>
              Hiring in-house
            </h3>

            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <li style={{ fontSize: '0.88rem', color: '#64748b', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <span style={{ color: '#94a3b8' }}>—</span> Salary, benefits and recruiting time
              </li>
              <li style={{ fontSize: '0.88rem', color: '#64748b', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <span style={{ color: '#94a3b8' }}>—</span> Software licenses and training
              </li>
              <li style={{ fontSize: '0.88rem', color: '#64748b', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <span style={{ color: '#94a3b8' }}>—</span> Fixed capacity, even when bids pile up
              </li>
              <li style={{ fontSize: '0.88rem', color: '#64748b', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <span style={{ color: '#94a3b8' }}>—</span> Overhead even in slow months
              </li>
            </ul>
          </div>

          {/* Right Box: Paradise Estimating */}
          <div className="outsource-card right-card">
            <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a', marginBottom: '1.25rem' }}>
              Paradise Estimating
            </h3>

            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <li style={{ fontSize: '0.88rem', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '0.6rem', fontWeight: 500 }}>
                <span style={{ color: '#56b32b', fontWeight: 700 }}>✓</span> Pay per project. No payroll or software costs
              </li>
              <li style={{ fontSize: '0.88rem', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '0.6rem', fontWeight: 500 }}>
                <span style={{ color: '#56b32b', fontWeight: 700 }}>✓</span> 100+ estimators across residential, commercial and industrial work
              </li>
              <li style={{ fontSize: '0.88rem', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '0.6rem', fontWeight: 500 }}>
                <span style={{ color: '#56b32b', fontWeight: 700 }}>✓</span> Typical 24–48 hour turnaround, express available
              </li>
              <li style={{ fontSize: '0.88rem', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '0.6rem', fontWeight: 500 }}>
                <span style={{ color: '#56b32b', fontWeight: 700 }}>✓</span> Free minor revisions when drawings change
              </li>
              <li style={{ fontSize: '0.88rem', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '0.6rem', fontWeight: 500 }}>
                <span style={{ color: '#56b32b', fontWeight: 700 }}>✓</span> Senior-estimator QA on every estimate
              </li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}
