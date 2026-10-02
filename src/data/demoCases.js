export const DEMO_CASES = [
  {
    id: 'suspicious-internship',
    title: 'Suspicious Internship Offer',
    badge: 'HIGH RISK',
    riskScore: 82,
    riskLevel: 'HIGH RISK',
    riskColor: '#E64E5A',
    category: 'Internship',
    entityName: 'ABC Technologies Pvt Ltd',
    role: 'Data Science Intern',
    recruiter: 'Rahul Sharma',
    recruiterTitle: 'HR Executive',
    email: 'rahul@abc-careers.example',
    website: 'abc-technologies.example',
    stipend: '₹15,000 / month',
    duration: '3 Months',
    joiningDate: '15 Sep 2026',
    paymentRequired: true,
    paymentAmount: '₹2,500',
    paymentType: 'Registration Fee (NON-REFUNDABLE)',
    paymentRecipient: 'Rahul Sharma (Personal UPI Account)',
    upiId: 'rahul.sharma@okaxis',
    summary: 'Upfront fee + recruiter mismatch detected',
    description: 'Data Science Intern offer letter requesting a ₹2,500 upfront registration fee to be paid via personal UPI prior to onboarding.',

    // Extracted signals
    signals: [
      { text: 'Upfront non-refundable registration fee required', type: 'negative' },
      { text: 'Recruiter email domain (abc-careers.example) mismatches official company domain', type: 'negative' },
      { text: 'Payment recipient is a personal account, not corporate bank/UPI', type: 'negative' },
      { text: 'Offer details not indexed on official corporate portal', type: 'negative' },
      { text: 'Company registration number verified on MCA portal', type: 'positive' }
    ],

    // Relationship Matrix
    matrix: [
      { pair: 'Company ↔ Website', status: 'MATCH', color: '#16B98F' },
      { pair: 'Company ↔ Recruiter', status: 'MISMATCH', color: '#E64E5A' },
      { pair: 'Company ↔ Offer Letter', status: 'NOT VERIFIED', color: '#F5A12A' },
      { pair: 'Recruiter ↔ Email Domain', status: 'MISMATCH', color: '#E64E5A' },
      { pair: 'Payment ↔ Corporate Account', status: 'MISMATCH', color: '#E64E5A' }
    ],

    // Graph Nodes & Edges
    graphNodes: [
      { id: 'center', label: 'ABC Technologies Pvt Ltd', type: 'company', status: 'verified', x: 50, y: 30 },
      { id: 'web', label: 'abc-technologies.example', type: 'website', status: 'match', x: 20, y: 65, icon: 'Globe' },
      { id: 'rec', label: 'Rahul Sharma (rahul@abc-careers.example)', type: 'recruiter', status: 'mismatch', x: 50, y: 70, icon: 'UserX' },
      { id: 'off', label: 'Offer Letter (₹15,000/mo)', type: 'offer', status: 'uncertain', x: 80, y: 65, icon: 'FileText' },
      { id: 'pay', label: 'UPI: rahul.sharma@okaxis (₹2,500)', type: 'payment', status: 'mismatch', x: 50, y: 92, icon: 'CreditCard' }
    ],
    graphEdges: [
      { from: 'center', to: 'web', label: 'MATCH', status: 'green' },
      { from: 'center', to: 'rec', label: 'MISMATCH', status: 'red' },
      { from: 'center', to: 'off', label: 'UNVERIFIED', status: 'orange' },
      { from: 'rec', to: 'pay', label: 'PERSONAL RECIPIENT', status: 'red' }
    ],

    // AI Explanation
    aiExplanation: 'TrustLens found multiple independent inconsistencies across the company, recruiter, offer and payment evidence. The risk score of 82/100 is driven primarily by the personal account payment recipient and domain spoofing on recruiter contact channels.',

    // Actions
    recommendations: [
      'Do NOT pay the ₹2,500 registration fee under any circumstances.',
      'Verify the job offer directly via the official website (abc-technologies.example).',
      'Contact official HR helpline to confirm whether Rahul Sharma is an authorized recruiter.',
      'Report suspicious offer letter to campus placement cell or Cyber Crime Portal.'
    ]
  },

  {
    id: 'verified-hackathon',
    title: 'iQOO Hackathon 2026',
    badge: 'VERIFIED EVENT',
    riskScore: 18,
    riskLevel: 'LOW RISK',
    riskColor: '#16B98F',
    category: 'Event / Hackathon',
    entityName: 'iQOO × Reskill',
    role: 'Hackathon Participant',
    eventTitle: 'iQOO Hackathon 2026',
    eventType: '30-Hour City Battle',
    location: 'Hyderabad',
    dates: 'Sep 26–27, 2026',
    prizePool: '₹40,00,000',
    website: 'iqoo.reskilll.com',
    paymentRequired: false,
    paymentAmount: 'Free Registration',
    paymentType: 'No fee required',
    summary: 'Official registration & event credentials confirmed',
    description: 'Official 30-Hour City Battle Grand Finale hackathon poster scanned with verified organizer identity and zero mandatory fee.',

    signals: [
      { text: 'Official event domain matched with Reskill platform', type: 'positive' },
      { text: 'Organizer identity (iQOO × Reskill) cross-verified', type: 'positive' },
      { text: 'Valid QR code resolves directly to official portal', type: 'positive' },
      { text: 'No hidden registration or processing fees requested', type: 'positive' },
      { text: 'Event venue and dates matched official schedule', type: 'positive' }
    ],

    matrix: [
      { pair: 'Poster ↔ Official Event Portal', status: 'MATCH', color: '#16B98F' },
      { pair: 'Organizer ↔ Reskill Domain', status: 'MATCH', color: '#16B98F' },
      { pair: 'QR Code ↔ Registration URL', status: 'MATCH', color: '#16B98F' },
      { pair: 'Venue ↔ Registered Location', status: 'MATCH', color: '#16B98F' },
      { pair: 'Payment Requirement', status: 'FREE', color: '#16B98F' }
    ],

    graphNodes: [
      { id: 'center', label: 'iQOO Hackathon 2026', type: 'event', status: 'verified', x: 50, y: 30 },
      { id: 'org', label: 'iQOO × Reskill', type: 'organizer', status: 'match', x: 25, y: 65, icon: 'ShieldCheck' },
      { id: 'qr', label: 'QR Code (Official Link)', type: 'qr', status: 'match', x: 50, y: 70, icon: 'QrCode' },
      { id: 'loc', label: 'Hyderabad (City Battle)', type: 'location', status: 'match', x: 75, y: 65, icon: 'MapPin' }
    ],
    graphEdges: [
      { from: 'center', to: 'org', label: 'VERIFIED', status: 'green' },
      { from: 'center', to: 'qr', label: 'VALID URL', status: 'green' },
      { from: 'center', to: 'loc', label: 'MATCH', status: 'green' }
    ],

    aiExplanation: 'TrustLens cross-checked the scanned event poster and embedded QR code against verified event registries. All parameters including organizers, venue, dates, and registration portal are 100% authentic.',

    recommendations: [
      'Proceed with registration on the official Reskill portal.',
      'Check submission requirements and team formation deadlines.',
      'Verify team member details before Grand Finale check-in.'
    ]
  },

  {
    id: 'suspicious-job-offer',
    title: 'TechNova Job Offer',
    badge: 'HIGH RISK',
    riskScore: 67,
    riskLevel: 'HIGH / MEDIUM-HIGH',
    riskColor: '#F5A12A',
    category: 'Job Offer',
    entityName: 'TechNova Solutions',
    role: 'Software Engineer',
    recruiter: 'Unknown Recruiter',
    email: 'careers@technova-jobs.example',
    website: 'technova.example',
    stipend: '₹8,50,000 / year',
    paymentRequired: true,
    paymentAmount: '₹999',
    paymentType: 'Document Verification & ID Badge Fee',
    summary: 'Recruiter domain mismatch & processing fee',
    description: 'Software Engineer job offer requesting ₹999 for background verification badge processing before issuing appointment letter.',

    signals: [
      { text: 'Mandatory ₹999 background check badge fee requested', type: 'negative' },
      { text: 'Email domain (technova-jobs.example) registered 4 days ago', type: 'negative' },
      { text: 'Recruiter name missing from official LinkedIn directory', type: 'negative' },
      { text: 'Company registration exists on public registrar', type: 'positive' }
    ],

    matrix: [
      { pair: 'Company ↔ Official Domain', status: 'MISMATCH', color: '#E64E5A' },
      { pair: 'Recruiter ↔ Corporate Identity', status: 'UNVERIFIED', color: '#F5A12A' },
      { pair: 'Verification Fee ↔ Policy Standard', status: 'SUSPICIOUS', color: '#E64E5A' },
      { pair: 'Offer Letter ↔ Digital Signature', status: 'INVALID', color: '#E64E5A' }
    ],

    graphNodes: [
      { id: 'center', label: 'TechNova Solutions', type: 'company', status: 'verified', x: 50, y: 30 },
      { id: 'rec', label: 'careers@technova-jobs.example', type: 'recruiter', status: 'mismatch', x: 30, y: 65, icon: 'Mail' },
      { id: 'fee', label: 'Processing Fee: ₹999', type: 'payment', status: 'mismatch', x: 70, y: 65, icon: 'AlertCircle' }
    ],
    graphEdges: [
      { from: 'center', to: 'rec', label: 'NEW DOMAIN', status: 'red' },
      { from: 'center', to: 'fee', label: 'UNUSUAL FEE', status: 'red' }
    ],

    aiExplanation: 'The recruiter domain was registered extremely recently and differs from TechNova\'s legitimate web domain. Genuine engineering offers never charge candidates for background processing.',

    recommendations: [
      'Refuse payment for background check fees.',
      'Contact TechNova HR through their official website contact form.',
      'Check WHOIS records for domain creation dates.'
    ]
  },

  {
    id: 'payment-request',
    title: 'Suspicious Payment Request',
    badge: 'CRITICAL RISK',
    riskScore: 91,
    riskLevel: 'CRITICAL',
    riskColor: '#E64E5A',
    category: 'Payment Request',
    entityName: 'Unknown Merchant',
    role: 'Payment Collection',
    recruiter: 'Unverified Merchant',
    paymentRequired: true,
    paymentAmount: '₹4,999',
    paymentType: 'Emergency Refund Security Deposit',
    paymentRecipient: 'Merchant Account (Unverified UPI ID)',
    upiId: 'instant-refund-pay@ybl',
    summary: 'Unverified merchant & mismatched recipient',
    description: 'Urgent SMS/WhatsApp payment link demanding ₹4,999 to release a pending refund cashback, using spoofed banking wording.',

    signals: [
      { text: 'High urgency phishing tactics detected in message text', type: 'negative' },
      { text: 'Merchant identity not registered on National Payments Portal', type: 'negative' },
      { text: 'Recipient UPI ID uses disposable handle format', type: 'negative' },
      { text: 'Request type involves paying money to receive a refund', type: 'negative' }
    ],

    matrix: [
      { pair: 'Merchant ↔ Business Registry', status: 'NOT FOUND', color: '#E64E5A' },
      { pair: 'UPI Handle ↔ Bank Entity', status: 'UNVERIFIED', color: '#E64E5A' },
      { pair: 'Claimed Refund ↔ Transaction Log', status: 'MISMATCH', color: '#E64E5A' }
    ],

    graphNodes: [
      { id: 'center', label: 'Unknown Merchant', type: 'entity', status: 'mismatch', x: 50, y: 30 },
      { id: 'pay', label: 'UPI: instant-refund-pay@ybl', type: 'payment', status: 'mismatch', x: 50, y: 70, icon: 'Zap' }
    ],
    graphEdges: [
      { from: 'center', to: 'pay', label: 'HIGH RISK PHISHING', status: 'red' }
    ],

    aiExplanation: 'Classic reverse-phishing scam pattern: requesting money under the guise of receiving a refund. The UPI account is unverified and associated with reported fraud incidents.',

    recommendations: [
      'Do NOT enter your UPI PIN or approve the collect request.',
      'Block and report the sender on WhatsApp/SMS.',
      'Report the UPI handle to your bank fraud division immediately.'
    ]
  }
];

export const COMMUNITY_REPORTS = [
  {
    id: 'abc-technologies-internship',
    title: 'ABC Technologies Internship',
    entityName: 'ABC Technologies',
    opportunity: 'Internship Offer',
    riskLevel: 'HIGH RISK',
    riskScore: 82,
    riskColor: '#E64E5A',
    category: 'Internship',
    recruiter: 'Rahul Sharma',
    website: 'abc-technologies.example',
    investigationCount: 12,
    similarReports: 7,
    paymentFlagged: 5,
    summary: 'Recruiter mismatch and upfront payment request flagged by the community.',
    tags: ['ABC Technologies', 'abc-technologies.example', 'Rahul Sharma', 'Internship'],
    keySignals: ['Recruiter email mismatch', 'Upfront payment requested', 'Website relationship unclear'],
    evidence: [
      { label: 'Company identity found', type: 'positive' },
      { label: 'Recruiter mismatch', type: 'negative' },
      { label: 'Email/domain mismatch', type: 'negative' },
      { label: 'Upfront payment requested', type: 'negative' },
      { label: 'Payment relationship not verified', type: 'warning' }
    ]
  },
  {
    id: 'techconnect-hyderabad-2026',
    title: 'TechConnect Hyderabad 2026',
    entityName: 'TechConnect Hyderabad',
    opportunity: 'Tech Event',
    riskLevel: 'LOW RISK',
    riskScore: 18,
    riskColor: '#16B98F',
    category: 'Event',
    recruiter: 'Organizer team',
    website: 'techconnect-hyderabad.example',
    investigationCount: 8,
    similarReports: 3,
    paymentFlagged: 0,
    summary: 'Official website and organizer details matched across the community dataset.',
    tags: ['TechConnect Hyderabad', 'techconnect-hyderabad.example', 'Organizer team', 'Event'],
    keySignals: ['Official website found', 'Organizer information matched', 'Registration link verified'],
    evidence: [
      { label: 'Official domain found', type: 'positive' },
      { label: 'Organizer information matched', type: 'positive' },
      { label: 'Registration link verified', type: 'positive' },
      { label: 'No hidden payment requests', type: 'positive' },
      { label: 'Participation details consistent', type: 'positive' }
    ]
  },
  {
    id: 'remote-software-internship',
    title: 'Remote Software Internship',
    entityName: 'NovaBuild Labs',
    opportunity: 'Software Internship',
    riskLevel: 'MEDIUM RISK',
    riskScore: 52,
    riskColor: '#F5A12A',
    category: 'Internship',
    recruiter: 'John Recruiter',
    website: 'novabuild.ai',
    investigationCount: 5,
    similarReports: 2,
    paymentFlagged: 1,
    summary: 'Company exists but recruiter identity and registration source need more verification.',
    tags: ['NovaBuild Labs', 'novabuild.ai', 'John Recruiter', 'Internship'],
    keySignals: ['Company found', 'Recruiter identity unclear', 'Registration source needs verification'],
    evidence: [
      { label: 'Company was identified in public records', type: 'positive' },
      { label: 'Recruiter identity is still unclear', type: 'warning' },
      { label: 'Registration source needs verification', type: 'warning' },
      { label: 'No obvious payment request detected', type: 'positive' }
    ]
  },
  {
    id: 'recruiter-opportunity',
    title: 'Recruiter Opportunity',
    entityName: 'Northstar Consulting',
    opportunity: 'Recruitment Call',
    riskLevel: 'MEDIUM RISK',
    riskScore: 47,
    riskColor: '#F5A12A',
    category: 'Recruitment',
    recruiter: 'John Recruiter',
    website: 'northstar-careers.example',
    investigationCount: 6,
    similarReports: 4,
    paymentFlagged: 2,
    summary: 'Recruiter identity and call process raise questions though the company image is plausible.',
    tags: ['Northstar Consulting', 'northstar-careers.example', 'John Recruiter', 'Recruitment'],
    keySignals: ['Company found', 'Recruiter identity unclear', 'Call process may need verification'],
    evidence: [
      { label: 'Company identity exists', type: 'positive' },
      { label: 'Recruiter identity is partially verified', type: 'warning' },
      { label: 'Offer flow is not yet fully validated', type: 'warning' },
      { label: 'No direct payment request in sample record', type: 'positive' }
    ]
  },
  {
    id: 'student-portal-access',
    title: 'Student Portal Access',
    entityName: 'CampusLink',
    opportunity: 'Student Verification Portal',
    riskLevel: 'LOW RISK',
    riskScore: 26,
    riskColor: '#16B98F',
    category: 'Portal',
    recruiter: 'Portal support',
    website: 'campuslink.example',
    investigationCount: 4,
    similarReports: 1,
    paymentFlagged: 0,
    summary: 'Strong verification pattern with clear support paths and no unusual payment steps.',
    tags: ['CampusLink', 'campuslink.example', 'Portal support', 'Student Verification'],
    keySignals: ['Portal verified', 'Support contact matched', 'No suspicious fee flow'],
    evidence: [
      { label: 'Portal is linked to official institution contact', type: 'positive' },
      { label: 'Support route was found in official app', type: 'positive' },
      { label: 'Verification steps match expectations', type: 'positive' },
      { label: 'No unusual payment requirement', type: 'positive' }
    ]
  }
];

export const COMMUNITY_ENTITY_GRAPH = [
  {
    entity: 'ABC Technologies',
    relatedTo: ['abc-technologies.example', 'Rahul Sharma', 'Internship Offer'],
    reports: ['abc-technologies-internship']
  },
  {
    entity: 'TechConnect Hyderabad',
    relatedTo: ['techconnect-hyderabad.example', 'Organizer team', 'Tech Event'],
    reports: ['techconnect-hyderabad-2026']
  },
  {
    entity: 'John Recruiter',
    relatedTo: ['NovaBuild Labs', 'Northstar Consulting', 'Recruitment Call'],
    reports: ['remote-software-internship', 'recruiter-opportunity']
  }
];
