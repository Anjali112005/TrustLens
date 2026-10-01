import React from 'react';
import { Shield, Info, CheckCircle2, Cpu, Layers } from 'lucide-react';

export default function ProfileScreen() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {/* Header Profile Info */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '8px', paddingTop: '10px' }}>
        <div style={{
          width: '64px',
          height: '64px',
          borderRadius: '16px',
          background: 'linear-gradient(135deg, #1677FF, #7757E8)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          boxShadow: '0 8px 20px rgba(22, 119, 255, 0.3)'
        }}>
          <Shield size={32} />
        </div>

        <div>
          <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#0F172A' }}>TrustLens</h3>
          <p style={{ fontSize: '12px', color: '#64748B', marginTop: '2px' }}>
            AI-powered multimodal trust investigator
          </p>
        </div>
      </div>

      {/* Settings Card */}
      <div className="profile-spec-card">
        <div style={{ fontSize: '11px', fontWeight: '800', color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.8px' }}>
          SYSTEM CONFIGURATION
        </div>

        <div className="event-data-row">
          <span className="event-data-label" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Cpu size={14} color="#1677FF" /> Demo Mode
          </span>
          <span className="event-data-val" style={{ color: '#16B98F', fontWeight: '800' }}>⚡ ON</span>
        </div>

        <div className="event-data-row">
          <span className="event-data-label" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Layers size={14} color="#7757E8" /> Engine
          </span>
          <span className="event-data-val">Local Demo Engine</span>
        </div>

        <div className="event-data-row">
          <span className="event-data-label" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Info size={14} color="#64748B" /> App Version
          </span>
          <span className="event-data-val">1.0 Demo</span>
        </div>
      </div>

      {/* Multimodal Sources */}
      <div className="profile-spec-card">
        <div style={{ fontSize: '11px', fontWeight: '800', color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.8px' }}>
          SUPPORTED EVIDENCE SOURCES
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px', fontSize: '12px', color: '#0F172A', fontWeight: '600' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <CheckCircle2 size={14} color="#16B98F" /> Camera Poster
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <CheckCircle2 size={14} color="#16B98F" /> PDF Documents
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <CheckCircle2 size={14} color="#16B98F" /> QR Code Scans
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <CheckCircle2 size={14} color="#16B98F" /> Voice Assistant
          </div>
        </div>
      </div>
    </div>
  );
}
