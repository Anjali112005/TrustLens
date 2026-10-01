import React from 'react';

export default function StepJourneyBar({ currentStep, onSelectStep }) {
  const steps = [
    { id: 'document_analysis', label: '1. Document' },
    { id: 'recruiter_verification', label: '2. Recruiter' },
    { id: 'payment_verification', label: '3. Payment' },
    { id: 'cross_check', label: '4. Cross-check' },
    { id: 'evidence_graph', label: '5. Graph' },
    { id: 'risk_screen', label: '6. Risk' },
    { id: 'trust_report', label: '7. Trust Report' },
  ];

  return (
    <div className="step-journey-bar">
      {steps.map((s) => (
        <div
          key={s.id}
          className={`journey-step-chip ${currentStep === s.id ? 'active' : ''}`}
          onClick={() => onSelectStep(s.id)}
        >
          {s.label}
        </div>
      ))}
    </div>
  );
}
