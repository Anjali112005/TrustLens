import React from 'react';
import { ShieldCheck, CheckCircle2, Mic, Home } from 'lucide-react';

export default function VerificationSummaryScreen({ onNavigate }) {
  const verifiedSignals = [
    'Event name detected from poster',
    'Organizer logo recognized (iQOO × Reskill)',
    'Official QR code extracted',
    'Official web domain matched',
    'Event details cross-checked with registry'
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', textAlign: 'center' }}>
      {/* Large Green Badge */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', marginTop: '10px' }}>
        <div style={{
          width: '80px',
          height: '80px',
          borderRadius: '50%',
          background: 'rgba(22, 185, 143, 0.15)',
          border: '4px solid #16B98F',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#16B98F'
        }}>
          <ShieldCheck size={44} />
        </div>

        <div>
          <span className="case-badge-pill" style={{ background: 'rgba(22, 185, 143, 0.15)', color: '#16B98F', fontSize: '11px' }}>
            LOW RISK — 18/100
          </span>
          <h3 style={{ fontSize: '20px', fontWeight: '800', marginTop: '6px', color: '#0F172A' }}>
            Official Event Verified
          </h3>
        </div>
      </div>

      {/* Checklist Card */}
      <div className="profile-spec-card" style={{ textAlign: 'left' }}>
        <div style={{ fontSize: '11px', fontWeight: '800', color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.8px' }}>
          VERIFICATION SIGNALS
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {verifiedSignals.map((sig, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: '#0F172A', fontWeight: '600' }}>
              <CheckCircle2 size={16} color="#16B98F" />
              <span>{sig}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Buttons */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <button className="btn-mobile-primary" onClick={() => onNavigate('voice')}>
          <Mic size={16} /> Ask TrustLens a Question
        </button>

        <button className="btn-mobile-secondary" onClick={() => onNavigate('home')}>
          <Home size={16} /> Back to Home
        </button>
      </div>
    </div>
  );
}
