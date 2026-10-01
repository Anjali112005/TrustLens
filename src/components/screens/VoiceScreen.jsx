import React, { useState } from 'react';
import { Mic, Sparkles, FileText, RefreshCw, Volume2 } from 'lucide-react';

export default function VoiceScreen({ onNavigate }) {
  const [voiceState, setVoiceState] = useState('idle'); // 'idle' | 'listening' | 'analyzing' | 'answered'

  const handleStartVoice = () => {
    setVoiceState('listening');
    setTimeout(() => {
      setVoiceState('analyzing');
    }, 1200);
    setTimeout(() => {
      setVoiceState('answered');
    }, 2400);
  };

  return (
    <div className="voice-assistant-view">
      {/* Pulsing Voice Orb */}
      <div className="voice-orb" onClick={handleStartVoice} style={{ cursor: 'pointer' }}>
        <Mic size={42} />
      </div>

      <div>
        <span className="case-badge-pill" style={{ background: 'rgba(22, 119, 255, 0.15)', color: '#1677FF', fontSize: '11px' }}>
          VOICE INVESTIGATOR
        </span>
        <h3 style={{ fontSize: '20px', fontWeight: '800', marginTop: '6px', color: '#0F172A' }}>
          Ask TrustLens
        </h3>
      </div>

      {/* Voice Prompt Box */}
      <div className="voice-prompt-box">
        {voiceState === 'idle' && '"Is this internship genuine?"'}
        {voiceState === 'listening' && (
          <span style={{ color: '#1677FF', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Volume2 size={16} className="pulse" /> Listening to your prompt...
          </span>
        )}
        {voiceState === 'analyzing' && (
          <span style={{ color: '#7757E8', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Sparkles size={16} /> Analyzing your question against evidence...
          </span>
        )}
        {voiceState === 'answered' && (
          <div style={{ textAlign: 'left', fontSize: '13px', lineHeight: '1.5' }}>
            <div style={{ fontWeight: '800', color: '#E64E5A', marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Sparkles size={14} /> TrustLens Voice Response:
            </div>
            "The internship shows multiple high-risk signals. The recruiter email and payment recipient do not match the identified company."
          </div>
        )}
      </div>

      {/* Action Controls */}
      {voiceState === 'idle' && (
        <button className="btn-mobile-primary" onClick={handleStartVoice}>
          <Mic size={16} /> Tap Microhone to Speak
        </button>
      )}

      {voiceState === 'answered' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '100%' }}>
          <button className="btn-mobile-primary" onClick={() => onNavigate('trust_report')}>
            <FileText size={16} /> View Complete Evidence
          </button>

          <button className="btn-mobile-secondary" onClick={() => setVoiceState('idle')}>
            <RefreshCw size={16} /> Ask Another Question
          </button>
        </div>
      )}
    </div>
  );
}
