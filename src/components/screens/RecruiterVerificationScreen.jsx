import React from 'react';
import { UserX, Mail, Phone, Linkedin, AlertCircle, ArrowRight } from 'lucide-react';
import StepJourneyBar from '../StepJourneyBar';
import { DEMO_CASES } from '../../data/demoCases';

export default function RecruiterVerificationScreen({ caseId = 'suspicious-internship', onNextStep, onSelectStep }) {
  const selectedCase = DEMO_CASES.find(c => c.id === caseId) || DEMO_CASES[0];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
      <StepJourneyBar currentStep="recruiter_verification" onSelectStep={onSelectStep} />

      <div>
        <span className="case-badge-pill" style={{ background: 'rgba(230, 78, 90, 0.15)', color: '#E64E5A' }}>
          RECRUITER MISMATCH
        </span>
        <h3 style={{ fontSize: '17px', fontWeight: '800', marginTop: '4px' }}>Recruiter Verification</h3>
      </div>

      {/* Recruiter Profile Card */}
      <div className="profile-spec-card">
        <div className="profile-avatar-row">
          <div className="avatar-circle">RS</div>
          <div>
            <div style={{ fontSize: '15px', fontWeight: '800', color: '#0F172A' }}>{selectedCase.recruiter}</div>
            <div style={{ fontSize: '12px', color: '#64748B' }}>{selectedCase.recruiterTitle}</div>
          </div>
        </div>

        <div className="event-data-row" style={{ marginTop: '8px' }}>
          <span className="event-data-label" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Mail size={13} color="#E64E5A" /> Email
          </span>
          <span className="event-data-val" style={{ color: '#E64E5A' }}>{selectedCase.email}</span>
        </div>

        <div className="event-data-row">
          <span className="event-data-label" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Phone size={13} color="#64748B" /> Phone
          </span>
          <span className="event-data-val">+91 98765 43210</span>
        </div>

        <div className="event-data-row">
          <span className="event-data-label" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Linkedin size={13} color="#1677FF" /> Profile
          </span>
          <span className="event-data-val" style={{ color: '#1677FF' }}>linkedin.com/in/rahulsharma</span>
        </div>
      </div>

      {/* Red Domain Mismatch Warning */}
      <div className="doc-highlight-card">
        <AlertCircle size={24} style={{ flexShrink: 0 }} />
        <div>
          <div style={{ fontSize: '13px', fontWeight: '800' }}>
            Email Domain Mismatch
          </div>
          <div style={{ fontSize: '11px', fontWeight: '500', opacity: 0.9, marginTop: '2px' }}>
            Recruiter email domain (abc-careers.example) does not match official company domain (abc-technologies.example).
          </div>
        </div>
      </div>

      {/* Action Button */}
      <button className="btn-mobile-primary" onClick={() => onNextStep('payment_verification')}>
        Verify Payment Details <ArrowRight size={16} />
      </button>
    </div>
  );
}
