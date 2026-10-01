import React from 'react';
import { GitCompare, AlertTriangle, ArrowRight } from 'lucide-react';
import StepJourneyBar from '../StepJourneyBar';
import { DEMO_CASES } from '../../data/demoCases';

export default function CrossCheckScreen({ caseId = 'suspicious-internship', onNextStep, onSelectStep }) {
  const selectedCase = DEMO_CASES.find(c => c.id === caseId) || DEMO_CASES[0];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
      <StepJourneyBar currentStep="cross_check" onSelectStep={onSelectStep} />

      <div>
        <span className="case-badge-pill" style={{ background: 'rgba(230, 78, 90, 0.15)', color: '#E64E5A' }}>
          RELATIONSHIP MATRIX
        </span>
        <h3 style={{ fontSize: '17px', fontWeight: '800', marginTop: '4px' }}>Cross-check Analysis</h3>
      </div>

      {/* Relationship Matrix List */}
      <div className="cross-matrix-list">
        {selectedCase.matrix.map((item, idx) => (
          <div key={idx} className="matrix-row-item">
            <span className="matrix-pair-title">{item.pair}</span>
            <span
              className="matrix-status-pill"
              style={{ background: item.color }}
            >
              {item.status}
            </span>
          </div>
        ))}
      </div>

      {/* Bottom Summary Banner */}
      <div className="doc-highlight-card" style={{ background: 'rgba(245, 161, 42, 0.12)', borderColor: 'rgba(245, 161, 42, 0.4)', color: '#D97706' }}>
        <AlertTriangle size={20} style={{ flexShrink: 0 }} />
        <div style={{ fontSize: '13px', fontWeight: '800' }}>
          3 High-Risk Inconsistencies Detected
        </div>
      </div>

      {/* Action Button */}
      <button className="btn-mobile-primary" onClick={() => onNextStep('evidence_graph')}>
        View Evidence Graph <ArrowRight size={16} />
      </button>
    </div>
  );
}
