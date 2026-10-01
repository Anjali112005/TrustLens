import React from 'react';
import { Camera, Upload, Mic, ChevronRight, ShieldAlert, CheckCircle, AlertTriangle } from 'lucide-react';
import { DEMO_CASES } from '../../data/demoCases';

export default function HomeScreen({ onNavigate, onSelectCase }) {
  const mainSuspiciousCase = DEMO_CASES[0]; // Suspicious Internship
  const remainingCases = DEMO_CASES.slice(1);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {/* Top Hero Card */}
      <div className="home-hero-card">
        <span className="engine-pill">⚡ LOCAL DEMO ENGINE</span>
        <h3>What do you want to investigate?</h3>
        <p>Use evidence—not assumptions—to decide what to trust.</p>
      </div>

      {/* 3 Primary Action Buttons */}
      <div className="primary-actions-grid">
        <div className="action-card-mobile" onClick={() => onNavigate('camera')}>
          <div className="action-icon-wrap camera">
            <Camera size={20} />
          </div>
          <span className="action-card-title">Scan with Camera</span>
          <span className="action-card-sub">Poster, QR, logo or screen</span>
        </div>

        <div className="action-card-mobile" onClick={() => onNavigate('upload')}>
          <div className="action-icon-wrap upload">
            <Upload size={20} />
          </div>
          <span className="action-card-title">Upload Evidence</span>
          <span className="action-card-sub">PDF, offer, email or screenshot</span>
        </div>

        <div className="action-card-mobile" onClick={() => onNavigate('voice')}>
          <div className="action-icon-wrap voice">
            <Mic size={20} />
          </div>
          <span className="action-card-title">Ask with Voice</span>
          <span className="action-card-sub">Ask TrustLens a question</span>
        </div>
      </div>

      {/* Featured Active Demo Case */}
      <div className="section-header-mobile">
        <h4>DEMO INVESTIGATION</h4>
        <button className="view-all-link" onClick={() => onNavigate('cases')}>View All</button>
      </div>

      <div className="mobile-case-card" onClick={() => onSelectCase(mainSuspiciousCase.id, 'document_analysis')}>
        <div className="mobile-case-left">
          <span className="case-badge-pill" style={{ background: 'rgba(230, 78, 90, 0.15)', color: '#E64E5A' }}>
            {mainSuspiciousCase.badge}
          </span>
          <div className="mobile-case-title">{mainSuspiciousCase.title}</div>
          <div className="mobile-case-sub">{mainSuspiciousCase.summary}</div>
          <div style={{ fontSize: '10px', color: '#1677FF', fontWeight: '700', marginTop: '4px', display: 'flex', alignItems: 'center', gap: '2px' }}>
            See evidence trail <ChevronRight size={12} />
          </div>
        </div>

        <div className="mobile-risk-circle" style={{ background: 'rgba(230, 78, 90, 0.15)', color: '#E64E5A', border: '2px solid #E64E5A' }}>
          <span>{mainSuspiciousCase.riskScore}</span>
          <span style={{ fontSize: '8px', opacity: 0.8 }}>/100</span>
        </div>
      </div>

      {/* Other Demo Cases */}
      <div className="section-header-mobile">
        <h4>EXPLORE OTHER CASES</h4>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {remainingCases.map((item) => (
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
