import React from 'react';
import { Camera, Image, QrCode, FileText, X } from 'lucide-react';

export default function CameraScreen({ onShutter, onClose }) {
  return (
    <div className="camera-container">
      {/* Top Overlay Bar */}
      <div style={{ padding: '12px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', zIndex: 10, color: 'white' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', fontWeight: '700' }}>
          <Camera size={16} color="#1677FF" />
          <span>Camera Scan — Demo</span>
        </div>
        <button onClick={onClose} style={{ background: 'rgba(255,255,255,0.2)', border: 'none', color: 'white', borderRadius: '50%', padding: '4px', cursor: 'pointer' }}>
          <X size={16} />
        </button>
      </div>

      {/* Camera Preview with Simulated iQOO Poster */}
      <div className="camera-preview-area">
        <div className="poster-mockup">
          <div className="poster-header-iqoo">iQOO HACKATHON 2026</div>
          <div className="poster-title-iqoo">30-HOUR CITY BATTLE</div>
          
          <div className="poster-details-iqoo">
            <div>📍 HYDERABAD | SEP 26–27, 2026</div>
            <div style={{ fontWeight: '800', color: '#16B98F', marginTop: '4px' }}>PRIZE POOL: ₹40,00,000</div>
            <div style={{ fontSize: '9px', color: '#94A3B8' }}>ORGANIZER: iQOO × Reskill</div>
          </div>

          <div className="poster-qr-area">
            <QrCode size={48} color="#061226" />
          </div>

          <div style={{ fontSize: '9px', color: '#4D94FF', fontWeight: '700' }}>
            SCAN TO REGISTER OFFICIALLY
          </div>
        </div>

        {/* HUD Scanner Box */}
        <div className="camera-scanner-hud" />
      </div>

      {/* Bottom Camera Controls Bar */}
      <div className="camera-controls-bar">
        <button className="camera-mode-btn" onClick={onShutter}>
          <Image size={18} style={{ marginBottom: '2px' }} />
          <div>Gallery</div>
        </button>

        <button className="shutter-btn" onClick={onShutter} title="Capture Evidence">
          <div className="shutter-inner"></div>
        </button>

        <button className="camera-mode-btn" onClick={onShutter}>
          <QrCode size={18} style={{ marginBottom: '2px' }} />
          <div>Scan QR</div>
        </button>
      </div>
    </div>
  );
}
