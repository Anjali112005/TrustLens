import React, { useMemo, useState } from 'react';
import { Search, MessageSquareText, ShieldCheck, ArrowRight } from 'lucide-react';
import { COMMUNITY_REPORTS } from '../../data/demoCases';

export default function CommunityScreen({ communityReports = COMMUNITY_REPORTS, communityToast = '', onOpenReport }) {
  const [search, setSearch] = useState('');

  const filteredReports = useMemo(() => {
    const query = search.trim().toLowerCase();
    if (!query) return communityReports;

    return communityReports.filter((report) => {
      const haystack = [
        report.title,
        report.entityName,
        report.opportunity,
        report.summary,
        report.tags?.join(' '),
        report.recruiter || '',
        report.website || '',
        report.category || ''
      ]
        .join(' ')
        .toLowerCase();

      return haystack.includes(query);
    });
  }, [communityReports, search]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
      {communityToast && (
        <div className="community-toast-banner">
          {communityToast}
        </div>
      )}

      <div className="section-header-mobile" style={{ marginTop: 0 }}>
        <h4>Community Feed</h4>
        <span className="community-demo-label">Demo Community Data</span>
      </div>

      <div className="community-signal-legend">
        <span><span className="legend-dot green"></span>Verified Signal</span>
        <span><span className="legend-dot amber"></span>Needs Verification</span>
        <span><span className="legend-dot red"></span>Risk Signal</span>
        <span><span className="legend-dot gray"></span>Unknown</span>
      </div>

      <div className="community-search-wrap">
        <Search size={14} color="#64748B" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search company, recruiter, website or opportunity..."
        />
      </div>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '11px', color: '#64748B', fontWeight: '700' }}>
        <span>{filteredReports.length} community investigations</span>
        <span>Trust signals</span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {filteredReports.map((report) => (
          <div
            key={report.id}
            className="community-report-card"
            onClick={() => onOpenReport(report.id)}
          >
            <div className="community-card-head">
              <div className="community-card-copy">
                <span className="case-badge-pill" style={{ background: report.riskColor + '20', color: report.riskColor }}>
                  {report.riskLevel}
                </span>
                <h3>{report.title}</h3>
                <div className="community-subline">{report.entityName} • {report.opportunity}</div>
              </div>

              <div className="mobile-risk-circle" style={{ background: report.riskColor + '15', color: report.riskColor, border: `2px solid ${report.riskColor}` }}>
                <span>{report.riskScore}</span>
                <span style={{ fontSize: '8px', opacity: 0.8 }}>/100</span>
              </div>
            </div>

            <div className="community-key-signals">
              {report.keySignals.slice(0, 3).map((signal, idx) => (
                <div key={idx} className="community-signal-pill">
                  {signal}
                </div>
              ))}
            </div>

            <div className="community-footer-row">
              <span>{report.investigationCount || 12} people investigated</span>
              <div className="community-action-row" onClick={(e) => e.stopPropagation()}>
                <button className="community-action-pill">Helpful</button>
                <button className="community-action-pill primary">Investigate</button>
                <button className="community-action-pill">Related</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredReports.length === 0 && (
        <div className="community-empty-state">
          <ShieldCheck size={18} color="#1677FF" />
          <div>
            <strong>No matching community reports</strong>
            <p>Try searching for a company, recruiter, website or opportunity.</p>
          </div>
        </div>
      )}

      <button className="btn-mobile-secondary" style={{ marginTop: '8px' }} onClick={() => onOpenReport(COMMUNITY_REPORTS[0]?.id)}>
        <MessageSquareText size={14} /> View Latest Community Evidence
      </button>
    </div>
  );
}
