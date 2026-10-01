import React, { useState, useEffect } from 'react';
import { ShieldAlert, CheckCircle2, XCircle, ArrowRight } from 'lucide-react';
import StepJourneyBar from '../StepJourneyBar';
import { DEMO_CASES } from '../../data/demoCases';

export default function RiskScreen({ caseId = 'suspicious-internship', onNextStep, onSelectStep }) {
  const selectedCase = DEMO_CASES.find(c => c.id === caseId) || DEMO_CASES[0];
  const [animatedScore, setAnimatedScore] = useState(0);

  // Smooth count-up animation 0 -> target risk score
  useEffect(() => {
    setAnimatedScore(0);
    const target = selectedCase.riskScore;
    let current = 0;
    const increment = Math.max(1, Math.floor(target / 25));
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setAnimatedScore(target);
        clearInterval(timer);
      } else {
        setAnimatedScore(current);
      }
    }, 30);

    return () => clearInterval(timer);
  }, [caseId, selectedCase.riskScore]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
      <StepJourneyBar currentStep="risk_screen" onSelectStep={onSelectStep} />

      {/* Large Circular Gauge */}
      <div className="risk-meter-container">
        <div className="large-risk-gauge" style={{ borderColor: selectedCase.riskColor, background: selectedCase.riskColor + '12' }}>
          <span className="gauge-val" style={{ color: selectedCase.riskColor }}>{animatedScore}</span>
          <span className="gauge-total">/100</span>
        </div>

        <div>
          <span className="case-badge-pill" style={{ background: selectedCase.riskColor + '20', color: selectedCase.riskColor, fontSize: '11px' }}>
            {selectedCase.riskLevel}
          </span>
          <h3 style={{ fontSize: '18px', fontWeight: '800', marginTop: '4px', color: '#0F172A' }}>
            Risk Signals Detected
          </h3>
        </div>
      </div>

      {/* Signal Breakdown List */}
      <div className="profile-spec-card">
        <div style={{ fontSize: '11px', fontWeight: '800', color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.8px' }}>
          EVIDENCE AUDIT TRAIL
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {selectedCase.signals.map((sig, idx) => {
            const isPos = sig.type === 'positive';
            return (
              <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '12px', color: '#0F172A', fontWeight: '500' }}>
                {isPos ? (
                  <CheckCircle2 size={16} color="#16B98F" style={{ flexShrink: 0, marginTop: '1px' }} />
                ) : (
                  <XCircle size={16} color="#E64E5A" style={{ flexShrink: 0, marginTop: '1px' }} />
                )}
                <span>{sig.text}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Recommendation Banner */}
      <div style={{
        padding: '12px',
        background: selectedCase.riskScore >= 50 ? '#FFF5F5' : '#F0FDF4',
        border: '1px solid ' + (selectedCase.riskScore >= 50 ? 'rgba(230,78,90,0.3)' : 'rgba(22,185,143,0.3)'),
        borderRadius: '10px',
        fontSize: '12px',
        fontWeight: '700',
        color: selectedCase.riskScore >= 50 ? '#E64E5A' : '#16B98F',
        textAlign: 'center'
      }}>
        {selectedCase.riskScore >= 50 ? 'TrustLens recommends verification before proceeding or making payments.' : 'TrustLens confirmed official event credentials.'}
      </div>

      {/* Action Button */}
      <button className="btn-mobile-primary" onClick={() => onNextStep('trust_report')}>
        View Final Trust Report <ArrowRight size={16} />
      </button>
    </div>
  );
}
