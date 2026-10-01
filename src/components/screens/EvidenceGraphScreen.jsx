import React, { useState } from 'react';
import { Network, CheckCircle, XCircle, HelpCircle, ArrowRight, X, ShieldAlert, Sparkles, ExternalLink } from 'lucide-react';
import StepJourneyBar from '../StepJourneyBar';
import { DEMO_CASES } from '../../data/demoCases';

export default function EvidenceGraphScreen({ caseId = 'suspicious-internship', onNextStep, onSelectStep }) {
  const selectedCase = DEMO_CASES.find(c => c.id === caseId) || DEMO_CASES[0];
  const [selectedNode, setSelectedNode] = useState(null);

  // Detailed evidence drawer metadata per node type
  const getDrawerDetails = (node) => {
    if (node.id === 'center') {
      return {
        title: selectedCase.entityName,
        status: 'Central Entity',
        statusColor: '#1677FF',
        found: `Official target company: ${selectedCase.entityName}`,
        matters: 'Serves as the root entity for all cross-verification checks.',
        sourceStatus: 'Verified against MCA Business Register.'
      };
    }
    if (node.type === 'website') {
      return {
        title: 'Company Website Domain',
        status: node.status === 'match' ? 'Verified Domain' : 'Domain Mismatch',
        statusColor: node.status === 'match' ? '#16B98F' : '#E64E5A',
        found: `Domain: ${node.label}`,
        matters: 'Validates whether communications originate from an authorized domain.',
        sourceStatus: node.status === 'match' ? 'SSL & WHOIS credentials match corporate entity.' : 'Domain registered recently via anonymized registrar.'
      };
    }
    if (node.type === 'recruiter') {
      return {
        title: 'Recruiter Contact Channel',
        status: node.status === 'mismatch' ? 'High-Risk Mismatch' : 'Verified Recruiter',
        statusColor: node.status === 'mismatch' ? '#E64E5A' : '#16B98F',
        found: `Sender: ${node.label}`,
        matters: 'Unverified email domains indicate spoofed HR identities.',
        sourceStatus: 'Domain (abc-careers.example) differs from official website domain.'
      };
    }
    if (node.type === 'offer') {
      return {
        title: 'Offer Letter Document',
        status: 'Unconfirmed Listing',
        statusColor: '#F5A12A',
        found: `Stipend: ${selectedCase.stipend || 'Specified'} | Fee: ${selectedCase.paymentAmount || 'None'}`,
        matters: 'Standard corporate internships never request non-refundable registration fees.',
        sourceStatus: 'Offer ID not indexed in official corporate vacancy database.'
      };
    }
    if (node.type === 'payment') {
      return {
        title: 'UPI Payment Destination',
        status: 'Personal Account Mismatch',
        statusColor: '#E64E5A',
        found: `VPA Handle: ${selectedCase.upiId || node.label}`,
        matters: 'Paying personal accounts instead of merchant accounts removes fraud protection.',
        sourceStatus: 'Resolves to individual personal UPI account rather than corporate merchant.'
      };
    }

    return {
      title: node.label,
      status: node.status.toUpperCase(),
      statusColor: node.status === 'match' ? '#16B98F' : '#E64E5A',
      found: `Extracted evidence: ${node.label}`,
      matters: 'Cross-checked against verified registries.',
      sourceStatus: 'Analyzed by TrustLens Evidence Engine.'
    };
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', position: 'relative' }}>
      <StepJourneyBar currentStep="evidence_graph" onSelectStep={onSelectStep} />

      <div>
        <span className="case-badge-pill" style={{ background: 'rgba(22, 119, 255, 0.15)', color: '#1677FF' }}>
          MULTIMODAL GRAPH
        </span>
        <h3 style={{ fontSize: '17px', fontWeight: '800', marginTop: '4px', color: '#0F172A' }}>
          Evidence Relationship Graph
        </h3>
        <p style={{ fontSize: '11px', color: '#64748B', marginTop: '2px' }}>
          Tap any node below to inspect evidence drawer details.
        </p>
      </div>

      {/* Visual Graph Viewport */}
      <div className="evidence-graph-viewport" style={{ position: 'relative', overflow: 'hidden' }}>
        {/* SVG Connection Lines */}
        <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 1 }}>
          <line x1="50%" y1="35%" x2="25%" y2="70%" stroke="#16B98F" strokeWidth="2" strokeDasharray="4 2" />
          <line x1="50%" y1="35%" x2="50%" y2="70%" stroke="#E64E5A" strokeWidth="2" />
          <line x1="50%" y1="35%" x2="75%" y2="70%" stroke="#F5A12A" strokeWidth="2" strokeDasharray="4 2" />
        </svg>

        {/* Central Company Node */}
        <div
          className="node-element company"
          style={{ zIndex: 10, marginBottom: '24px', cursor: 'pointer' }}
          onClick={() => setSelectedNode(selectedCase.graphNodes[0])}
        >
          <Network size={14} /> {selectedCase.entityName}
        </div>

        {/* Dynamic Nodes Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px', width: '100%', zIndex: 10 }}>
          {selectedCase.graphNodes.slice(1).map((node) => {
            let className = 'node-element ';
            let Icon = CheckCircle;
            let labelTag = 'MATCH';

            if (node.status === 'match') {
              className += 'match';
              Icon = CheckCircle;
              labelTag = 'MATCH';
            } else if (node.status === 'mismatch') {
              className += 'mismatch';
              Icon = XCircle;
              labelTag = 'MISMATCH';
            } else {
              className += 'uncertain';
              Icon = HelpCircle;
              labelTag = 'UNVERIFIED';
            }

            return (
              <div
                key={node.id}
                className={className}
                style={{ flexDirection: 'column', textAlign: 'center', gap: '4px', padding: '10px 8px', cursor: 'pointer' }}
                onClick={() => setSelectedNode(node)}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Icon size={12} />
                  <span>{labelTag}</span>
                </div>
                <div style={{ fontSize: '10px', opacity: 0.9, lineHeight: '1.2' }}>{node.label}</div>
              </div>
            );
          })}
        </div>

        {/* Legend */}
        <div style={{ display: 'flex', gap: '12px', marginTop: '16px', fontSize: '9px', color: '#94A3B8', fontWeight: '600', zIndex: 10 }}>
          <span style={{ color: '#16B98F' }}>● Verified Match</span>
          <span style={{ color: '#E64E5A' }}>● Mismatch</span>
          <span style={{ color: '#F5A12A' }}>● Uncertain</span>
        </div>
      </div>

      {/* Interactive Evidence Drawer (Slide-up Panel) */}
      {selectedNode && (() => {
        const details = getDrawerDetails(selectedNode);
        return (
          <div style={{
            position: 'absolute',
            bottom: '0',
            left: '0',
            right: '0',
            background: '#FFFFFF',
            borderRadius: '16px 16px 0 0',
            padding: '16px',
            boxShadow: '0 -10px 30px rgba(0,0,0,0.15)',
            borderTop: '2px solid ' + details.statusColor,
            zIndex: 100,
            display: 'flex',
            flexDirection: 'column',
            gap: '10px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span className="case-badge-pill" style={{ background: details.statusColor + '20', color: details.statusColor }}>
                  {details.status}
                </span>
                <span style={{ fontSize: '14px', fontWeight: '800', color: '#0F172A' }}>{details.title}</span>
              </div>
              <button onClick={() => setSelectedNode(null)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#64748B' }}>
                <X size={18} />
              </button>
            </div>

            <div style={{ fontSize: '11px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <div>
                <strong style={{ color: '#64748B', display: 'block', fontSize: '10px', textTransform: 'uppercase' }}>WHAT WAS FOUND:</strong>
                <span style={{ color: '#0F172A', fontWeight: '600' }}>{details.found}</span>
              </div>

              <div>
                <strong style={{ color: '#64748B', display: 'block', fontSize: '10px', textTransform: 'uppercase' }}>WHY IT MATTERS:</strong>
                <span style={{ color: '#E64E5A', fontWeight: '600' }}>{details.matters}</span>
              </div>

              <div>
                <strong style={{ color: '#64748B', display: 'block', fontSize: '10px', textTransform: 'uppercase' }}>SOURCE STATUS:</strong>
                <span style={{ color: '#1677FF', fontWeight: '600' }}>{details.sourceStatus}</span>
              </div>
            </div>

            <button className="btn-mobile-secondary" style={{ padding: '8px', fontSize: '11px', marginTop: '4px' }} onClick={() => setSelectedNode(null)}>
              Close Drawer
            </button>
          </div>
        );
      })()}

      {/* Action Button */}
      <button className="btn-mobile-primary" onClick={() => onNextStep('risk_screen')}>
        Calculate Risk Assessment <ArrowRight size={16} />
      </button>
    </div>
  );
}
