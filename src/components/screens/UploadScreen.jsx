import React from 'react';
import { Upload, FileText, Image, File, ChevronRight } from 'lucide-react';

export default function UploadScreen({ onSelectFile }) {
  const demoFiles = [
    {
      name: 'offer_letter.pdf',
      type: 'PDF Document',
      size: '1.2 MB',
      caseId: 'suspicious-internship',
      tag: 'Suspicious Fee',
      tagColor: '#E64E5A'
    },
    {
      name: 'internship_email.png',
      type: 'PNG Image',
      size: '840 KB',
      caseId: 'suspicious-job-offer',
      tag: 'Domain Mismatch',
      tagColor: '#F5A12A'
    },
    {
      name: 'payment_qr.png',
      type: 'PNG Image',
      size: '620 KB',
      caseId: 'payment-request',
      tag: 'UPI Request',
      tagColor: '#E64E5A'
    }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div>
        <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#0F172A' }}>Upload Evidence</h3>
        <p style={{ fontSize: '12px', color: '#64748B', marginTop: '2px' }}>
          Upload offer letter, email, PDF, screenshot or document.
        </p>
      </div>

      {/* Two Large Dropzone Buttons */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
        <div
          className="action-card-mobile"
          style={{ padding: '20px 10px' }}
          onClick={() => onSelectFile('suspicious-internship')}
        >
          <div className="action-icon-wrap camera">
            <Image size={24} />
          </div>
          <span className="action-card-title">Gallery / Images</span>
          <span className="action-card-sub">JPG, PNG screenshots</span>
        </div>

        <div
          className="action-card-mobile"
          style={{ padding: '20px 10px' }}
          onClick={() => onSelectFile('suspicious-internship')}
        >
          <div className="action-icon-wrap upload">
            <FileText size={24} />
          </div>
          <span className="action-card-title">Documents / PDF</span>
          <span className="action-card-sub">Offer letters, contracts</span>
        </div>
      </div>

      {/* Recent Files List */}
      <div className="section-header-mobile">
        <h4>DEMO EVIDENCE FILES</h4>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {demoFiles.map((f, i) => (
          <div
            key={i}
            className="mobile-case-card"
            onClick={() => onSelectFile(f.caseId)}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{
                width: '38px',
                height: '38px',
                borderRadius: '10px',
                background: '#F1F5F9',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#1677FF'
              }}>
                <File size={20} />
              </div>

              <div>
                <div style={{ fontSize: '13px', fontWeight: '700', color: '#0F172A' }}>{f.name}</div>
                <div style={{ fontSize: '11px', color: '#64748B' }}>{f.type} • {f.size}</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span className="case-badge-pill" style={{ background: f.tagColor + '20', color: f.tagColor }}>
                {f.tag}
              </span>
              <ChevronRight size={16} color="#94A3B8" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
