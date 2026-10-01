import React, { useEffect, useState } from 'react';
import { Cpu, CheckCircle2 } from 'lucide-react';

export default function ProcessingScreen({ onComplete, targetScreen = 'event_details' }) {
  const [completedSteps, setCompletedSteps] = useState([0]);

  const stages = [
    'Extracting text (OCR)',
    'Identifying event / company',
    'Reading QR code',
    'Resolving official information',
    'Cross-checking relationships',
    'Calculating risk score'
  ];

  useEffect(() => {
    const intervals = stages.map((_, index) => {
      return setTimeout(() => {
        setCompletedSteps(prev => [...new Set([...prev, index])]);
      }, (index + 1) * 220);
    });

    const finishTimeout = setTimeout(() => {
      onComplete(targetScreen);
    }, 1600);

    return () => {
      intervals.forEach(clearTimeout);
      clearTimeout(finishTimeout);
    };
  }, [onComplete, targetScreen]);

  return (
    <div className="processing-container">
      <div className="pulse-radar-icon">
        <Cpu size={36} />
      </div>

      <div>
        <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#0F172A' }}>Analyzing the evidence...</h3>
        <p style={{ fontSize: '12px', color: '#64748B', marginTop: '4px' }}>
          Multimodal engines cross-checking scanned poster & QR code
        </p>
      </div>

      <div className="checklist-mobile">
        {stages.map((stage, idx) => {
          const isDone = completedSteps.includes(idx);
          return (
            <div key={idx} className={`checklist-item ${isDone ? 'done' : ''}`}>
              <CheckCircle2 size={16} color={isDone ? '#16B98F' : '#CBD5E1'} />
              <span>{stage}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
