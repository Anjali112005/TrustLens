import React, { useState } from 'react';
import { ShieldAlert, FileText, Mic, Download, Share2, CheckCircle, AlertCircle, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import StepJourneyBar from '../StepJourneyBar';
import { DEMO_CASES } from '../../data/demoCases';

export default function TrustReportScreen({ caseId = 'suspicious-internship', onNavigate, onSelectStep }) {
  const [toastMessage, setToastMessage] = useState('');
  const selectedCase = DEMO_CASES.find(c => c.id === caseId) || DEMO_CASES[0];

  const handleSave = () => {
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.8 }
    });
    setToastMessage('Report saved to Local History archive!');
    setTimeout(() => setToastMessage(''), 3000);
  };

  const handleShare = () => {
    navigator.clipboard?.writeText?.(window.location.href);
    setToastMessage('Report link copied to clipboard!');
    setTimeout(() => setToastMessage(''), 3000);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
      <StepJourneyBar currentStep="trust_report" onSelectStep={onSelectStep} />

      {/* Flagship Header */}
      <div className="report-card-full">
        <div className="report-header-badge">
          <div>
            <span className="case-badge-pill" style={{ background: selectedCase.riskColor + '20', color: selectedCase.riskColor, fontSize: '10px' }}>
              {selectedCase.badge}
            </span>
            <h3 style={{ fontSize: '17px', fontWeight: '800', marginTop: '4px', color: '#0F172A' }}>
              TRUSTLENS INVESTIGATION REPORT
            </h3>
          </div>

          <div className="mobile-risk-circle" style={{ background: selectedCase.riskColor + '15', color: selectedCase.riskColor, border: `2px solid ${selectedCase.riskColor}` }}>
            <span>{selectedCase.riskScore}</span>
            <span style={{ fontSize: '8px', opacity: 0.8 }}>/100</span>
          </div>
        </div>

        {/* SECTION 1: SUMMARY */}
        <div style={{ background: '#F8FAFC', padding: '12px', borderRadius: '10px', fontSize: '11px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <div style={{ fontWeight: '800', color: '#64748B', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.8px' }}>
            CASE SUMMARY
          </div>
          <div className="event-data-row">
            <span className="event-data-label">Target Entity</span>
            <span className="event-data-val">{selectedCase.entityName}</span>
          </div>
          <div className="event-data-row">
            <span className="event-data-label">Recruiter / Contact</span>
            <span className="event-data-val">{selectedCase.recruiter || selectedCase.entityName}</span>
          </div>
          <div className="event-data-row">
            <span className="event-data-label">Role / Context</span>
            <span className="event-data-val">{selectedCase.role || selectedCase.category}</span>
          </div>
          {selectedCase.paymentAmount && (
            <div className="event-data-row">
              <span className="event-data-label">Payment Requested</span>
              <span className="event-data-val" style={{ color: selectedCase.riskColor }}>{selectedCase.paymentAmount} ({selectedCase.paymentType})</span>
            </div>
          )}
        </div>

        {/* SECTION 2: KEY FINDINGS */}
        <div>
          <div style={{ fontSize: '11px', fontWeight: '800', color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: '8px' }}>
            KEY FINDINGS
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            {selectedCase.signals.map((sig, idx) => (
              <div key={idx} style={{ fontSize: '12px', color: '#0F172A', display: 'flex', alignItems: 'flex-start', gap: '6px' }}>
                <span style={{ color: sig.type === 'positive' ? '#16B98F' : selectedCase.riskColor, fontWeight: '800' }}>•</span>
                <span>{sig.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 3: CROSS-CHECK RESULTS & AI EXPLANATION */}
        <div className="report-ai-explanation">
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: '800', color: '#1E40AF', marginBottom: '4px' }}>
            <Sparkles size={14} color="#1677FF" /> AI REASONING & EXPLANATION
          </div>
          <div>"{selectedCase.aiExplanation}"</div>
        </div>

        {/* SECTION 4: RECOMMENDED ACTIONS */}
        <div>
          <div style={{ fontSize: '11px', fontWeight: '800', color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: '8px' }}>
            RECOMMENDED ACTION
          </div>
          <div className="report-actions-list">
            {selectedCase.recommendations.map((rec, idx) => (
              <div key={idx} className="report-action-item">
                <CheckCircle size={14} color="#16B98F" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>{rec}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Action Buttons Row */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px' }}>
        <button className="btn-mobile-secondary" style={{ padding: '10px 4px', fontSize: '11px' }} onClick={handleSave}>
          <Download size={14} /> Save
        </button>

        <button className="btn-mobile-secondary" style={{ padding: '10px 4px', fontSize: '11px' }} onClick={handleShare}>
          <Share2 size={14} /> Share
        </button>

        <button className="btn-mobile-primary" style={{ padding: '10px 4px', fontSize: '11px' }} onClick={() => onNavigate('voice')}>
          <Mic size={14} /> Ask AI
        </button>
      </div>

      {toastMessage && (
        <div style={{ background: '#16B98F', color: 'white', padding: '10px', borderRadius: '10px', fontSize: '12px', fontWeight: '700', textAlign: 'center' }}>
          {toastMessage}
        </div>
      )}
    </div>
  );
}
