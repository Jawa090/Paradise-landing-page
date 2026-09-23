import React, { useState, useEffect } from 'react';
import PromoBanner from './components/PromoBanner.jsx';
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

  const [timeLeft, setTimeLeft] = useState({
    days: '07',
    hours: '09',
    minutes: '44',
    seconds: '24'
  });

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

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let s = parseInt(prev.seconds, 10) - 1;
        let m = parseInt(prev.minutes, 10);
        let h = parseInt(prev.hours, 10);
        let d = parseInt(prev.days, 10);

        if (s < 0) {
          s = 59;
          m -= 1;
          if (m < 0) {
            m = 59;
            h -= 1;
            if (h < 0) {
              h = 23;
              d = Math.max(0, d - 1);
            }
          }
        }

        return {
          days: String(d).padStart(2, '0'),
          hours: String(h).padStart(2, '0'),
          minutes: String(m).padStart(2, '0'),
          seconds: String(s).padStart(2, '0')
        };
      });
    }, 1000);

    return () => clearInterval(timer);
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
      deadline: fd.get('bid_deadline') || 'Within 48 Hours',
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
    }

    setIsSubmitting(false);
    setThankYouData(submission);
    setUploadedFiles([]);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="react-landing-app">
      <PromoBanner timeLeft={timeLeft} />
      <Header onGetQuoteClick={() => scrollTo('quote-card-target')} />

      {thankYouData ? (
        <ThankYouView data={thankYouData} onReset={() => setThankYouData(null)} />
      ) : (
        <main>
          <Hero 
            selectedTrade={selectedTrade}
            onTradeChange={setSelectedTrade}
            onQuoteSubmit={(e) => handleFormSubmit(e, 'hero_quick_quote')}
            onUploadClick={() => scrollTo('upload-section')}
            isSubmitting={isSubmitting}
          />

          <CoreValues />

          <TradeCoverage 
            selectedTrade={selectedTrade}
            onSelectTrade={setSelectedTrade}
            onUploadClick={() => scrollTo('upload-section')}
          />

          <HowItWorks />

          <TrustProof onOpenSample={() => setSampleModalOpen(true)} />

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

      <Footer onOpenLegal={setLegalModalType} />

      <MobileStickyCTA onGetQuoteClick={() => scrollTo('upload-section')} />

      {sampleModalOpen && (
        <SampleModal 
          onClose={() => setSampleModalOpen(false)}
          onSubmitPlans={() => {
            setSampleModalOpen(false);
            scrollTo('upload-section');
          }}
        />
      )}

      {legalModalType && (
        <LegalModal 
          type={legalModalType}
          onClose={() => setLegalModalType(null)}
        />
      )}
    </div>
  );
}
