import React, { useState } from 'react';
import { DEMO_CASES } from '../../data/demoCases';

export default function CasesScreen({ onSelectCase, onNavigate }) {
  const [filter, setFilter] = useState('All');

  const filteredCases = DEMO_CASES.filter((c) => {
    if (filter === 'All') return true;
    if (filter === 'High Risk') return c.riskScore >= 60;
    if (filter === 'Low Risk') return c.riskScore < 40;
    return true;
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
      <div>
        <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#0F172A' }}>Investigate Demo Cases</h3>
        <p style={{ fontSize: '12px', color: '#64748B', marginTop: '2px' }}>
          Select a preloaded case to inspect evidence signals.
        </p>
      </div>

      {/* Filter Tabs */}
      <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '4px' }}>
        {['All', 'High Risk', 'Low Risk'].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            style={{
              padding: '6px 14px',
              borderRadius: '20px',
              border: '1px solid',
              borderColor: filter === cat ? '#1677FF' : '#E2E8F0',
              background: filter === cat ? '#1677FF' : '#FFFFFF',
              color: filter === cat ? '#FFFFFF' : '#64748B',
              fontSize: '12px',
              fontWeight: '700',
              cursor: 'pointer',
              whiteSpace: 'nowrap'
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Case List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {filteredCases.map((item) => (
          <div
            key={item.id}
            className="mobile-case-card"
            onClick={() => {
              if (item.id === 'verified-hackathon') {
                onNavigate('event_details');
              } else {
                onSelectCase(item.id, 'trust_report');
              }
            }}
          >
            <div className="mobile-case-left">
              <span className="case-badge-pill" style={{ background: item.riskColor + '20', color: item.riskColor }}>
                {item.badge}
              </span>
              <div className="mobile-case-title">{item.title}</div>
              <div className="mobile-case-sub">{item.entityName}</div>
            </div>

            <div className="mobile-risk-circle" style={{ background: item.riskColor + '15', color: item.riskColor, border: `2px solid ${item.riskColor}` }}>
              <span>{item.riskScore}</span>
              <span style={{ fontSize: '8px', opacity: 0.8 }}>/100</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
