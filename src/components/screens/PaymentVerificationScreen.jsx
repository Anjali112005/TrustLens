import React from 'react';
import { CreditCard, QrCode, AlertTriangle, ArrowRight } from 'lucide-react';
import StepJourneyBar from '../StepJourneyBar';
import { DEMO_CASES } from '../../data/demoCases';

export default function PaymentVerificationScreen({ caseId = 'suspicious-internship', onNextStep, onSelectStep }) {
  const selectedCase = DEMO_CASES.find(c => c.id === caseId) || DEMO_CASES[0];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
      <StepJourneyBar currentStep="payment_verification" onSelectStep={onSelectStep} />

      <div>
        <span className="case-badge-pill" style={{ background: 'rgba(230, 78, 90, 0.15)', color: '#E64E5A' }}>
          PERSONAL ACCOUNT RECIPIENT
        </span>
        <h3 style={{ fontSize: '17px', fontWeight: '800', marginTop: '4px' }}>Payment Verification</h3>
      </div>

      {/* Payment QR Preview Card */}
      <div className="event-poster-card" style={{ alignItems: 'center', textAlign: 'center' }}>
        <div style={{ width: '80px', height: '80px', background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '6px' }}>
          <QrCode size={68} color="#0F172A" />
        </div>

        <div style={{ width: '100%' }}>
          <div className="event-data-row">
            <span className="event-data-label">Claimed Purpose</span>
            <span className="event-data-val">{selectedCase.paymentType}</span>
          </div>

          <div className="event-data-row">
            <span className="event-data-label">Requested Amount</span>
            <span className="event-data-val" style={{ color: '#E64E5A', fontSize: '14px', fontWeight: '800' }}>
              {selectedCase.paymentAmount}
            </span>
          </div>

          <div className="event-data-row">
            <span className="event-data-label">UPI VPA Handle</span>
            <span className="event-data-val" style={{ color: '#E64E5A' }}>{selectedCase.upiId}</span>
          </div>

          <div className="event-data-row">
            <span className="event-data-label">Resolved Recipient</span>
            <span className="event-data-val" style={{ color: '#E64E5A' }}>
              {selectedCase.paymentRecipient}
            </span>
          </div>
        </div>
      </div>

      {/* Red Warning */}
      <div className="doc-highlight-card">
        <AlertTriangle size={24} style={{ flexShrink: 0 }} />
        <div>
          <div style={{ fontSize: '13px', fontWeight: '800' }}>
            Payment Recipient Mismatch
          </div>
          <div style={{ fontSize: '11px', fontWeight: '500', opacity: 0.9, marginTop: '2px' }}>
            Payment destination resolves to an individual personal UPI account rather than corporate merchant banking channels.
          </div>
        </div>
      </div>

      {/* Action Button */}
      <button className="btn-mobile-primary" onClick={() => onNextStep('cross_check')}>
        Run Cross-check Analysis <ArrowRight size={16} />
      </button>
    </div>
  );
}
