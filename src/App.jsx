import React, { useState, useEffect } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import CoreValues from './components/CoreValues.jsx';
import TradeCoverage from './components/TradeCoverage.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import TrustProof from './components/TrustProof.jsx';
import PlanUploadForm from './components/PlanUploadForm.jsx';
import Footer from './components/Footer.jsx';
import MobileStickyCTA from './components/MobileStickyCTA.jsx';
import SampleModal from './components/SampleModal.jsx';
import LegalModal from './components/LegalModal.jsx';
import ThankYouView from './components/ThankYouView.jsx';

export default function App() {
  const [selectedTrade, setSelectedTrade] = useState('');
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [isDragOver, setIsDragOver] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sampleModalOpen, setSampleModalOpen] = useState(false);
  const [legalModalType, setLegalModalType] = useState(null); // 'privacy' | 'terms' | null
  const [thankYouData, setThankYouData] = useState(null);

  const [trackingParams, setTrackingParams] = useState({
    gclid: '',
    utm_source: '',
    utm_medium: '',
    utm_campaign: '',
    utm_term: '',
    utm_content: ''
  });

  // Capture UTM & GCLID parameters
  useEffect(() => {
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const keys = ['gclid', 'utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
      const captured = {};
      keys.forEach(k => {
        const val = urlParams.get(k) || sessionStorage.getItem('pe_' + k) || '';
        if (val) {
          sessionStorage.setItem('pe_' + k, val);
          captured[k] = val;
        }
      });
      setTrackingParams(prev => ({ ...prev, ...captured }));
    } catch (e) {
      console.warn('Tracking init:', e);
    }
  }, []);

  // Smooth scroll
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 85;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };

  const DEFAULT_THANK_YOU = {
    name: 'Valued Contractor',
    email: '',
    phone: '(718) 719-6171',
    company: '',
    trade: 'General Estimating / Takeoff',
    location: 'USA',
    deadline: 'Within 24–48 Hours',
    filesCount: 0,
    formType: 'direct'
  };

  const isThankYouPath = () => {
    const p = window.location.pathname.replace(/\/$/, '');
    return p === '/thank-you' || p.endsWith('/thank-you');
  };

  // Check initial URL slug on mount
  useEffect(() => {
    if (isThankYouPath()) {
      try {
        const cached = sessionStorage.getItem('pe_last_submission');
        setThankYouData(cached ? JSON.parse(cached) : DEFAULT_THANK_YOU);
      } catch {
        setThankYouData(DEFAULT_THANK_YOU);
      }
    }
  }, []);

  // Listen to browser Back / Forward buttons
  useEffect(() => {
    const handlePopState = () => {
      if (isThankYouPath()) {
        try {
          const cached = sessionStorage.getItem('pe_last_submission');
          setThankYouData(cached ? JSON.parse(cached) : DEFAULT_THANK_YOU);
        } catch {
          setThankYouData(DEFAULT_THANK_YOU);
        }
      } else {
        setThankYouData(null);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Return to home page
  const handleGoHome = () => {
    setThankYouData(null);
    const search = window.location.search || '';
    if (isThankYouPath()) {
      window.history.pushState({ page: 'home' }, '', `/${search}`);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAddFiles = (newFiles) => {
    setUploadedFiles(prev => {
      const list = [...prev];
      newFiles.forEach(nf => {
        if (!list.some(f => f.name === nf.name && f.size === nf.size)) {
          list.push(nf);
        }
      });
      return list;
    });
  };

  const handleRemoveFile = (index) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleFormSubmit = async (e, formType) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formElement = e.target;
    const fd = new FormData(formElement);
    
    fd.append('form_type', formType);
    if (!fd.get('service_trade') && selectedTrade) {
      fd.append('service_trade', selectedTrade);
    }

    // Attach files if any uploaded via drag-and-drop / file picker
    if (uploadedFiles && uploadedFiles.length > 0) {
      uploadedFiles.forEach(file => {
        fd.append('blueprints', file);
      });
    }

    const submission = {
      name: fd.get('name') || '',
      email: fd.get('email') || '',
      phone: fd.get('phone') || '',
      company: fd.get('company') || '',
      trade: fd.get('service_trade') || selectedTrade || 'General Estimating / Takeoff',
      location: fd.get('location') || 'USA',
      deadline: fd.get('bid_deadline') || 'Within 24–48 Hours',
      filesCount: uploadedFiles.length,
      formType: formType
    };

    try {
      const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:6060';
      await fetch(`${backendUrl}/api/send-email`, {
        method: 'POST',
        body: fd
      });
    } catch (err) {
      console.error('Failed to submit form to backend:', err);
    }

    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'lead_form_submitted',
        form_type: formType,
        lead_email: submission.email,
        lead_phone: submission.phone,
        service_trade: submission.trade,
        gclid: trackingParams.gclid,
        utm_source: trackingParams.utm_source,
        utm_medium: trackingParams.utm_medium,
        utm_campaign: trackingParams.utm_campaign,
        utm_term: trackingParams.utm_term,
        utm_content: trackingParams.utm_content
      });
      window.dataLayer.push({
        event: 'page_view',
        page_path: '/thank-you',
        page_title: 'Thank You | Paradise Estimating'
      });
    }

    try {
      sessionStorage.setItem('pe_last_submission', JSON.stringify(submission));
    } catch (err) {
      console.warn('SessionStorage save failed:', err);
    }

    setIsSubmitting(false);
    setThankYouData(submission);
    setUploadedFiles([]);

    // Update browser URL slug to /thank-you while keeping query/tracking parameters
    const search = window.location.search || '';
    if (!isThankYouPath()) {
      window.history.pushState({ page: 'thank-you' }, '', `/thank-you${search}`);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="react-landing-app">
      {/* HEADER: Original logo on left, Phone + Get a Free Quote on right, no navigation leaks */}
      <Header 
        onGetQuoteClick={() => {
          if (thankYouData) {
            handleGoHome();
            setTimeout(() => scrollTo('quote-card-target'), 100);
          } else {
            scrollTo('quote-card-target');
          }
        }} 
        onLogoClick={handleGoHome}
      />

      {thankYouData ? (
        <ThankYouView data={thankYouData} onReset={handleGoHome} />
      ) : (
        <main>
          {/* SECTION 1: HERO + SHORT QUOTE FORM + ECOSYSTEM BADGE + NEW CLIENT OFFER */}
          <Hero 
            selectedTrade={selectedTrade}
            onTradeChange={setSelectedTrade}
            onQuoteSubmit={(e) => handleFormSubmit(e, 'hero_quick_quote')}
            onUploadClick={() => scrollTo('upload-section')}
            onGetQuoteClick={() => scrollTo('quote-card-target')}
            isSubmitting={isSubmitting}
          />

          {/* SECTION 2: CORE VALUE + TRUST METRICS */}
          <CoreValues />

          {/* SECTION 3: ESTIMATING & TRADE COVERAGE */}
          <TradeCoverage 
            selectedTrade={selectedTrade}
            onSelectTrade={setSelectedTrade}
            onUploadClick={() => scrollTo('upload-section')}
          />

          {/* SECTION 4: HOW IT WORKS (4 SIMPLE STEPS) */}
          <HowItWorks />

          {/* SECTION 5: REAL DELIVERABLE + TRUST PROOF (Interactive Commercial/MEP/Concrete tabs & software workflows) */}
          <TrustProof 
            onOpenSample={() => setSampleModalOpen(true)} 
            onUploadClick={() => scrollTo('upload-section')}
          />

          {/* SECTION 6: FULL QUOTE + PLAN UPLOAD FORM */}
          <PlanUploadForm 
            selectedTrade={selectedTrade}
            onTradeChange={setSelectedTrade}
            uploadedFiles={uploadedFiles}
            onAddFiles={handleAddFiles}
            onRemoveFile={handleRemoveFile}
            isDragOver={isDragOver}
            setIsDragOver={setIsDragOver}
            onSubmit={(e) => handleFormSubmit(e, 'full_plan_upload')}
            isSubmitting={isSubmitting}
          />
        </main>
      )}

      {/* MINIMAL FOOTER */}
      <Footer onOpenLegal={setLegalModalType} onLogoClick={handleGoHome} />

      {/* MOBILE STICKY BOTTOM BAR: Get Quote + Call Now */}
      <MobileStickyCTA 
        onGetQuoteClick={() => {
          if (thankYouData) {
            handleGoHome();
            setTimeout(() => scrollTo('upload-section'), 100);
          } else {
            scrollTo('upload-section');
          }
        }} 
      />

      {/* Interactive Deliverable Sample Modal */}
      {sampleModalOpen && (
        <SampleModal 
          onClose={() => setSampleModalOpen(false)}
          onSubmitPlans={() => {
            setSampleModalOpen(false);
            scrollTo('upload-section');
          }}
        />
      )}

      {/* Legal Disclaimers Modal */}
      {legalModalType && (
        <LegalModal 
          type={legalModalType}
          onClose={() => setLegalModalType(null)}
        />
      )}
    </div>
  );
}
