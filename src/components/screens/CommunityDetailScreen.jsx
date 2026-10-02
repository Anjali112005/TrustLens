import React from 'react';
import { AlertTriangle, CheckCircle2, MessageSquareText, ShieldAlert, ArrowRight } from 'lucide-react';

export default function CommunityDetailScreen({ report, relatedReports = [] }) {
  if (!report) {
    return (
      <div className="community-detail-card">
        <h3>Community report unavailable</h3>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
      <div className="report-card-full">
        <div className="report-header-badge">
          <div>
            <span className="case-badge-pill" style={{ background: report.riskColor + '20', color: report.riskColor, fontSize: '10px' }}>
              {report.riskLevel}
            </span>
            <h3 style={{ fontSize: '17px', fontWeight: '800', marginTop: '6px', color: '#0F172A' }}>
              {report.title}
            </h3>
          </div>

          <div className="mobile-risk-circle" style={{ background: report.riskColor + '15', color: report.riskColor, border: `2px solid ${report.riskColor}` }}>
            <span>{report.riskScore}</span>
            <span style={{ fontSize: '8px', opacity: 0.8 }}>/100</span>
          </div>
        </div>

        <div className="community-detail-summary">
          <div className="community-detail-label">Community Investigation</div>
          <div className="community-detail-meta">{report.entityName}</div>
          <div className="community-detail-meta" style={{ color: '#64748B' }}>{report.opportunity}</div>
        </div>

        <div className="community-detail-section">
          <div className="community-detail-label">Evidence</div>
          <div className="community-evidence-list">
            {report.evidence.map((item, idx) => (
              <div key={idx} className="community-evidence-item">
                {item.type === 'positive' ? <CheckCircle2 size={14} color="#16B98F" /> : item.type === 'warning' ? <AlertTriangle size={14} color="#F5A12A" /> : <ShieldAlert size={14} color="#E64E5A" />}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                  <span style={{ fontSize: '10px', fontWeight: '800', color: item.type === 'positive' ? '#16B98F' : item.type === 'warning' ? '#F5A12A' : '#E64E5A', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    {item.type === 'positive' ? 'Verified Signal' : item.type === 'warning' ? 'Needs Verification' : 'Risk Signal'}
                  </span>
                  <span>{item.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="community-detail-section">
          <div className="community-detail-label">Community Signals</div>
          <div className="community-stats-grid">
            <div className="community-stat-box">
              <strong>{report.investigationCount || 12}</strong>
              <span>investigations</span>
            </div>
            <div className="community-stat-box">
              <strong>{report.similarReports || 7}</strong>
              <span>similar reports</span>
            </div>
            <div className="community-stat-box">
              <strong>{report.paymentFlagged || 5}</strong>
              <span>flagged payment requests</span>
            </div>
          </div>
        </div>

        <div className="community-detail-section">
          <div className="community-detail-label">Related entities</div>
          <div className="community-tag-list">
            {(report.tags || []).map((tag, idx) => (
              <span key={idx} className="community-tag-chip">{tag}</span>
            ))}
          </div>
        </div>
      </div>

      {relatedReports.length > 0 && (
        <div className="community-related-panel">
          <div className="community-detail-label">Related community evidence</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {relatedReports.map((item) => (
              <div key={item.id} className="community-related-item">
                <div>
                  <strong>{item.title}</strong>
                  <div style={{ color: '#64748B', fontSize: '11px', marginTop: '4px' }}>{item.riskLevel}</div>
                </div>
                <ArrowRight size={14} color="#1677FF" />
              </div>
            ))}
          </div>
        </div>
      )}

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
        <button className="btn-mobile-secondary" style={{ padding: '10px 4px', fontSize: '11px' }}>
          <MessageSquareText size={14} /> Helpful
        </button>
        <button className="btn-mobile-primary" style={{ padding: '10px 4px', fontSize: '11px' }}>
          Investigate this
        </button>
      </div>
    </div>
  );
}
