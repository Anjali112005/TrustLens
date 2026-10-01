import React from 'react';
import { AlertTriangle, ArrowRight, FileCheck } from 'lucide-react';
import StepJourneyBar from '../StepJourneyBar';
import { DEMO_CASES } from '../../data/demoCases';

export default function DocumentAnalysisScreen({ caseId = 'suspicious-internship', onNextStep, onSelectStep }) {
  const selectedCase = DEMO_CASES.find(c => c.id === caseId) || DEMO_CASES[0];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
      <StepJourneyBar currentStep="document_analysis" onSelectStep={onSelectStep} />

      {/* Header & Risk Badge */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <span className="case-badge-pill" style={{ background: 'rgba(230, 78, 90, 0.15)', color: '#E64E5A' }}>
            {selectedCase.badge}
          </span>
          <h3 style={{ fontSize: '17px', fontWeight: '800', marginTop: '4px' }}>Document Analysis</h3>
        </div>

        <div className="mobile-risk-circle" style={{ background: 'rgba(230, 78, 90, 0.15)', color: '#E64E5A', border: '2px solid #E64E5A' }}>
          <span>{selectedCase.riskScore}</span>
          <span style={{ fontSize: '8px', opacity: 0.8 }}>/100</span>
        </div>
      </div>

      {/* Extracted Offer Data */}
      <div className="event-poster-card">
        <div style={{ fontSize: '11px', fontWeight: '800', color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <FileCheck size={14} color="#1677FF" /> EXTRACTED OFFER DETAILS
        </div>

        <div className="event-data-row">
          <span className="event-data-label">Company</span>
          <span className="event-data-val">{selectedCase.entityName}</span>
        </div>

        <div className="event-data-row">
          <span className="event-data-label">Role Offered</span>
          <span className="event-data-val">{selectedCase.role}</span>
        </div>

        <div className="event-data-row">
          <span className="event-data-label">Stipend</span>
          <span className="event-data-val" style={{ color: '#16B98F' }}>{selectedCase.stipend}</span>
        </div>

        <div className="event-data-row">
          <span className="event-data-label">Joining Date</span>
          <span className="event-data-val">{selectedCase.joiningDate}</span>
        </div>

        <div className="event-data-row">
          <span className="event-data-label">Duration</span>
          <span className="event-data-val">{selectedCase.duration}</span>
        </div>
      </div>

      {/* Highlight Registration Fee in RED */}
      <div className="doc-highlight-card">
        <AlertTriangle size={24} style={{ flexShrink: 0 }} />
        <div>
          <div style={{ fontSize: '13px', fontWeight: '800' }}>
            Upfront Registration Fee: {selectedCase.paymentAmount}
          </div>
          <div style={{ fontSize: '11px', fontWeight: '500', opacity: 0.9, marginTop: '2px' }}>
            {selectedCase.paymentType}
          </div>
        </div>
      </div>

      {/* Action Button */}
      <button className="btn-mobile-primary" onClick={() => onNextStep('recruiter_verification')}>
        Verify Recruiter Details <ArrowRight size={16} />
      </button>
    </div>
  );
}
