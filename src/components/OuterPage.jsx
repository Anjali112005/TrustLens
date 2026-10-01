import React from 'react';
import { Shield, Sparkles, ArrowRight, CheckCircle2, ChevronRight, Zap, RotateCcw } from 'lucide-react';
import { DEMO_CASES } from '../data/demoCases';

export default function OuterPage({
  children,
  onSelectCaseFromOuter,
  onNavigatePhone,
  onResetDemo,
  activeCaseId
}) {
  const activeCase = DEMO_CASES.find(c => c.id === activeCaseId) || DEMO_CASES[0];

  return (
    <div className="outer-page-container">
      {/* Outer Header Bar */}
      <header className="outer-header">
        <div className="brand-logo-group" onClick={() => onNavigatePhone('home')}>
          <div className="brand-icon-shield">
            <Shield size={20} />
          </div>
          <span className="brand-title">TrustLens</span>
        </div>

        <div className="outer-header-right">
          <div className="hackathon-badge">iQOO HACKATHON 2026 · DEMO</div>
          <div className="demo-mode-pill">
            <Zap size={12} /> ⚡ Live Demo Mode
          </div>
        </div>
      </header>

      {/* Main Split Grid */}
      <main className="outer-content-grid">
        {/* Left Side Presentation & Pitch */}
        <section className="presentation-area">
          <div className="tagline-badge">
            <Sparkles size={14} /> AI-POWERED MULTIMODAL TRUST INVESTIGATOR
          </div>

          <div>
            <h1 className="main-hero-title">
              DON’T TRUST THE NAME. <br />
              <span className="hero-highlight">INVESTIGATE THE EVIDENCE.</span>
            </h1>

            <p className="hero-subtext" style={{ marginTop: '16px' }}>
              “TrustLens helps you investigate opportunities, organizations, events and payment requests using evidence instead of assumptions.”
            </p>
          </div>

          {/* Workflow Pipeline */}
          <div className="workflow-pipeline">
            <div className="pipeline-step active">CAPTURE</div>
            <span className="pipeline-arrow">→</span>
            <div className="pipeline-step">EXTRACT</div>
            <span className="pipeline-arrow">→</span>
            <div className="pipeline-step">CROSS-CHECK</div>
            <span className="pipeline-arrow">→</span>
            <div className="pipeline-step">ASSESS</div>
            <span className="pipeline-arrow">→</span>
            <div className="pipeline-step active">EXPLAIN</div>
          </div>

          {/* Active Demo Case Banner */}
          <div className="active-case-banner">
            <div className="active-case-info">
              <h4>ACTIVE DEMO CASE</h4>
              <h3>{activeCase.title}</h3>
              <p>{activeCase.summary}</p>
            </div>

            <div className="risk-score-badge" style={{ borderColor: activeCase.riskColor, color: activeCase.riskColor }}>
              <span className="risk-num">{activeCase.riskScore}</span>
              <span className="risk-denom">/100</span>
            </div>
          </div>

          {/* Outer CTA Buttons & Reset */}
          <div className="outer-action-row">
            <button className="btn-primary-outer" onClick={() => onNavigatePhone('cases')}>
              Explore Demo Cases <ArrowRight size={18} />
            </button>

            <button className="btn-secondary-outer" onClick={() => onNavigatePhone('camera')}>
              Test Camera Scan
            </button>

            <button className="btn-secondary-outer" onClick={onResetDemo} title="Reset phone to Home screen">
              <RotateCcw size={16} /> Reset
            </button>
          </div>

          {/* Jury Demo Case Switcher */}
          <div className="quick-case-strip">
            <label>JURY DEMO SCENARIOS</label>
            <div className="case-buttons-grid">
              {DEMO_CASES.map((item) => (
                <button
                  key={item.id}
                  className={`case-chip-btn ${item.id === activeCaseId ? 'active' : ''}`}
                  onClick={() => onSelectCaseFromOuter(item.id)}
                >
                  <span className="case-chip-title">{item.title}</span>
                  <span className="case-chip-tag" style={{ background: item.riskColor + '25', color: item.riskColor }}>
                    {item.riskScore}/100
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Right Side Phone Wrapper */}
        <section className="phone-display-wrapper">
          {children}
        </section>
      </main>
    </div>
  );
}
