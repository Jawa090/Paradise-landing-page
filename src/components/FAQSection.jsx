import React, { useState } from 'react';

const faqData = [
  {
    question: "How quickly can I receive my estimate?",
    answer: "Most standard estimates and quantity takeoffs are completed and delivered within 24 to 48 hours. Larger or more complex commercial projects may require additional time, which will be confirmed prior to beginning."
  },
  {
    question: "What types of construction projects do you estimate?",
    answer: "We estimate commercial, residential, industrial, and civil construction projects — including new construction, additions, remodels, and trade-specific scopes."
  },
  {
    question: "What file types can I upload?",
    answer: "You can upload PDF drawings, DWG / CAD files, TIFF images, ZIP archives, or architectural plan sets."
  },
  {
    question: "Do you provide quantity takeoffs?",
    answer: "Yes, we provide itemized line-by-line quantity takeoffs covering material volumes, square footages, linear footages, and counts."
  },
  {
    question: "Do you provide material and labor pricing?",
    answer: "Yes, our estimates include material quantities alongside regionalized labor production rates and current unit costs."
  },
  {
    question: "Do you provide location-specific pricing?",
    answer: "Yes, pricing is calibrated using zip-code and state-specific cost data to reflect local market rates accurately."
  },
  {
    question: "Can you estimate multiple trades?",
    answer: "Absolutly. We cover all CSI divisions including Concrete, MEP, Electrical, Plumbing, HVAC, Drywall, Sitework, Framing, and Finishes."
  },
  {
    question: "Can you handle commercial projects?",
    answer: "Yes, we regularly support commercial general contractors, developers, and subcontractors with full-scope commercial estimating."
  },
  {
    question: "What happens if I need revisions?",
    answer: "We offer complimentary minor scope revisions when project addendums or plan updates occur."
  },
  {
    question: "How much does an estimate cost?",
    answer: "Estimates are quoted on a fixed flat-rate basis according to project scope, size, and trade requirement. New clients receive 20% off their first estimate."
  },
  {
    question: "Is my project information confidential?",
    answer: "Yes. All plans, documents, and client details are handled under strict confidentiality protocols. Non-disclosure agreements (NDAs) are available upon request."
  },
  {
    question: "What happens after I upload my plans?",
    answer: "Our estimating desk reviews your plans and sends you a fixed price quote and expected delivery time within 30 minutes."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section" style={{ backgroundColor: '#f8fafc', padding: '4.5rem 1.5rem', borderTop: '1px solid #e2e8f0' }}>
      <div className="container" style={{ maxWidth: '840px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0f172a', marginBottom: '2.5rem', fontFamily: 'var(--font-main)' }}>
          Frequently asked questions
        </h2>

        <div className="faq-list" style={{ display: 'flex', flexDirection: 'column' }}>
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className="faq-item" 
                style={{ borderBottom: '1px solid #e2e8f0', padding: '1.2rem 0' }}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between', // Fixed camelCase syntax here as well
                    alignItems: 'center',
                    background: 'none',
                    border: 'none',
                    textAlign: 'left',
                    cursor: 'pointer',
                    fontSize: '1.05rem',
                    fontWeight: 600,
                    color: '#0f172a',
                    padding: 0,
                  }}
                >
                  {/* Added paddingRight to create explicit buffer space before the icon */}
                  <span style={{ paddingRight: '1.5rem' }}>{item.question}</span>
                  
                  <span style={{ fontSize: '1.4rem', fontWeight: 400, color: '#56b32b', lineHeight: 1, flexShrink: 0 }}>
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                {isOpen && (
                  <div style={{ marginTop: '0.85rem', fontSize: '0.95rem', color: '#475569', lineHeight: 1.6, paddingRight: '2rem' }}>
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}