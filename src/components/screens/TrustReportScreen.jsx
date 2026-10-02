import React, { useState } from 'react';
import { ShieldAlert, FileText, Mic, Download, Share2, CheckCircle, AlertCircle, Sparkles, Users } from 'lucide-react';
import confetti from 'canvas-confetti';
import StepJourneyBar from '../StepJourneyBar';
import { DEMO_CASES, COMMUNITY_REPORTS } from '../../data/demoCases';

export default function TrustReportScreen({ caseId = 'suspicious-internship', onNavigate, onSelectStep, onOpenCommunityReport, onPublishToCommunity }) {
  const [toastMessage, setToastMessage] = useState('');
  const [showShareSheet, setShowShareSheet] = useState(false);
  const [shareSignals, setShareSignals] = useState(true);
  const [shareSummary, setShareSummary] = useState(true);
  const [sharePersonalInfo, setSharePersonalInfo] = useState(false);
  const selectedCase = DEMO_CASES.find(c => c.id === caseId) || DEMO_CASES[0];
  const relatedReports = COMMUNITY_REPORTS.filter((report) => {
    const entityMatch = report.entityName === selectedCase.entityName;
    const tagMatch = (report.tags || []).some((tag) => {
      const haystack = [selectedCase.entityName, selectedCase.website, selectedCase.recruiter, selectedCase.role, selectedCase.category].filter(Boolean);
      return haystack.some((value) => value && tag.toLowerCase().includes(value.toLowerCase()));
    });
    return entityMatch || tagMatch;
  });

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

  const publishToCommunity = () => {
    if (onPublishToCommunity) {
      onPublishToCommunity(caseId);
      setShowShareSheet(false);
      setToastMessage('Investigation shared with the TrustLens community.');
      setTimeout(() => setToastMessage(''), 3000);
    }
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

      <div className="community-related-panel">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px', marginBottom: '8px' }}>
          <div style={{ fontSize: '11px', fontWeight: '800', color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.8px' }}>
            Community Check
          </div>
          <Users size={14} color="#1677FF" />
        </div>

        {relatedReports.length > 0 ? (
          <>
            <div style={{ fontSize: '12px', color: '#0F172A', fontWeight: '700', marginBottom: '6px' }}>
              {relatedReports.length} related community investigations found
            </div>
            <button className="btn-mobile-secondary" style={{ padding: '10px 12px', fontSize: '11px' }} onClick={() => onOpenCommunityReport?.(relatedReports[0].id)}>
              View Community Evidence
            </button>
          </>
        ) : (
          <>
            <div style={{ fontSize: '12px', color: '#0F172A', fontWeight: '600', marginBottom: '6px' }}>
              No related community investigations found yet.
            </div>
            <button className="btn-mobile-primary" style={{ padding: '10px 12px', fontSize: '11px' }} onClick={() => setShowShareSheet(true)}>
              Share with Community
            </button>
          </>
        )}
      </div>

      <div className="community-related-panel">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px', marginBottom: '10px' }}>
          <div style={{ fontSize: '11px', fontWeight: '800', color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.8px' }}>
            Share with Community
          </div>
          <Share2 size={14} color="#1677FF" />
        </div>

        <button className="btn-mobile-primary" style={{ padding: '10px 12px', fontSize: '12px' }} onClick={() => setShowShareSheet(true)}>
          Publish community insight
        </button>
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

      {showShareSheet && (
        <div className="share-modal-backdrop" onClick={() => setShowShareSheet(false)}>
          <div className="share-modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="community-detail-label" style={{ marginBottom: '8px' }}>Share Investigation</div>
            <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#0F172A', margin: '0 0 8px' }}>Help others who may encounter the same opportunity.</h3>

            <div className="share-summary-grid">
              <div><span>Entity</span><strong>{selectedCase.entityName}</strong></div>
              <div><span>Opportunity</span><strong>{selectedCase.role || selectedCase.category}</strong></div>
              <div><span>Risk level</span><strong style={{ color: selectedCase.riskColor }}>{selectedCase.riskLevel}</strong></div>
              <div><span>Evidence</span><strong>{selectedCase.signals[0]?.text || 'Trust signal detected'}</strong></div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '14px' }}>
              <label className="share-option-row">
                <input type="checkbox" checked={shareSignals} onChange={() => setShareSignals(!shareSignals)} />
                <span>Share risk signals</span>
              </label>
              <label className="share-option-row">
                <input type="checkbox" checked={shareSummary} onChange={() => setShareSummary(!shareSummary)} />
                <span>Share investigation summary</span>
              </label>
              <label className="share-option-row">
                <input type="checkbox" checked={sharePersonalInfo} onChange={() => setSharePersonalInfo(!sharePersonalInfo)} />
                <span>Share personal information</span>
              </label>
            </div>

            <button className="btn-mobile-primary" style={{ marginTop: '16px' }} onClick={publishToCommunity}>
              Publish to Community
            </button>
          </div>
        </div>
      )}

      {toastMessage && (
        <div style={{ background: '#16B98F', color: 'white', padding: '10px', borderRadius: '10px', fontSize: '12px', fontWeight: '700', textAlign: 'center' }}>
          {toastMessage}
        </div>
      )}
    </div>
  );
}
