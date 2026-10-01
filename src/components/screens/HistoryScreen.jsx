import React, { useState } from 'react';
import { History, Clock, ChevronRight } from 'lucide-react';
import { DEMO_CASES } from '../../data/demoCases';

export default function HistoryScreen({ onSelectCase, onNavigate }) {
  const [filter, setFilter] = useState('All');

  const historyItems = [
    { ...DEMO_CASES[0], timeAgo: '10 minutes ago' },
    { ...DEMO_CASES[1], timeAgo: '2 hours ago' },
    { ...DEMO_CASES[2], timeAgo: 'Yesterday' },
    { ...DEMO_CASES[3], timeAgo: '2 days ago' }
  ];

  const filtered = historyItems.filter((item) => {
    if (filter === 'All') return true;
    if (filter === 'High Risk') return item.riskScore >= 60;
    if (filter === 'Low Risk') return item.riskScore < 40;
    return true;
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
      <div>
        <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#0F172A' }}>My Investigations</h3>
        <p style={{ fontSize: '12px', color: '#64748B', marginTop: '2px' }}>
          Recent evidence scans and saved trust reports.
        </p>
      </div>

      {/* Filter Chips */}
      <div style={{ display: 'flex', gap: '8px' }}>
        {['All', 'High Risk', 'Low Risk'].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            style={{
              padding: '6px 14px',
              borderRadius: '20px',
              border: '1px solid',
              borderColor: filter === f ? '#1677FF' : '#E2E8F0',
              background: filter === f ? '#1677FF' : '#FFFFFF',
              color: filter === f ? '#FFFFFF' : '#64748B',
              fontSize: '12px',
              fontWeight: '700',
              cursor: 'pointer'
            }}
          >
            {f}
          </button>
        ))}
      </div>

      {/* History Items */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {filtered.map((item) => (
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
              <div style={{ fontSize: '10px', color: '#94A3B8', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Clock size={10} /> {item.timeAgo}
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div className="mobile-risk-circle" style={{ background: item.riskColor + '15', color: item.riskColor, border: `2px solid ${item.riskColor}` }}>
                <span>{item.riskScore}</span>
                <span style={{ fontSize: '8px', opacity: 0.8 }}>/100</span>
              </div>
              <ChevronRight size={16} color="#94A3B8" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
