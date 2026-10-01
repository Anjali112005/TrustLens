import React from 'react';
import { ShieldCheck, ExternalLink, ArrowRight, MapPin, Calendar, Award } from 'lucide-react';
import { DEMO_CASES } from '../../data/demoCases';

export default function EventDetailsScreen({ onContinue }) {
  const iqooCase = DEMO_CASES.find(c => c.id === 'verified-hackathon');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {/* Title & Badge */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <span className="case-badge-pill" style={{ background: 'rgba(22, 185, 143, 0.15)', color: '#16B98F' }}>
            VERIFIED EVENT
          </span>
          <h3 style={{ fontSize: '18px', fontWeight: '800', marginTop: '4px' }}>{iqooCase.title}</h3>
        </div>

        <div className="mobile-risk-circle" style={{ background: 'rgba(22, 185, 143, 0.15)', color: '#16B98F', border: '2px solid #16B98F' }}>
          <span>18</span>
          <span style={{ fontSize: '8px', opacity: 0.8 }}>/100</span>
        </div>
      </div>

      {/* Extracted Details Card */}
      <div className="event-poster-card">
        <div style={{ fontSize: '11px', fontWeight: '800', color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.8px' }}>
          EXTRACTED EVENT CREDENTIALS
        </div>

        <div className="event-data-row">
          <span className="event-data-label">Organizer</span>
          <span className="event-data-val">{iqooCase.entityName}</span>
        </div>

        <div className="event-data-row">
          <span className="event-data-label">Format</span>
          <span className="event-data-val">{iqooCase.eventType}</span>
        </div>

        <div className="event-data-row">
          <span className="event-data-label">Location</span>
          <span className="event-data-val" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <MapPin size={12} color="#1677FF" /> {iqooCase.location}
          </span>
        </div>

        <div className="event-data-row">
          <span className="event-data-label">Dates</span>
          <span className="event-data-val" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Calendar size={12} color="#7757E8" /> {iqooCase.dates}
          </span>
        </div>

        <div className="event-data-row">
          <span className="event-data-label">Prize Pool</span>
          <span className="event-data-val" style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#16B98F' }}>
            <Award size={12} color="#16B98F" /> {iqooCase.prizePool}
          </span>
        </div>

        <div className="event-data-row">
          <span className="event-data-label">Registration</span>
          <span className="event-data-val" style={{ color: '#16B98F' }}>Official Source Matched</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <a
          href="https://iqoo.reskilll.com"
          target="_blank"
          rel="noreferrer"
          className="btn-mobile-secondary"
          style={{ textDecoration: 'none' }}
        >
          <ExternalLink size={16} /> View Official Website
        </a>

        <button className="btn-mobile-primary" onClick={onContinue}>
          Continue Verification <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}
