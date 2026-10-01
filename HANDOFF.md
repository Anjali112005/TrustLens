# TrustLens — Developer Handoff

## 1. Project Status

TrustLens is currently a **demo/prototype** prepared for the iQOO Hackathon 2026 Grand Finale.

The current repository demonstrates the product concept and user flow.

The complete AI investigation backend is planned to be built/refined during the hackathon.

```text
CURRENT
Demo + UI + Concept

GRAND FINALE
Real AI + Verification + Investigation Engine
```

---

# 2. Project Goal

TrustLens is an **AI-powered multimodal trust investigation application**.

It helps users investigate:

* Internship offers
* Job offers
* Events
* Recruiters
* Websites
* QR codes
* Payment requests
* Digital documents

The core idea:

```text
Evidence
   ↓
AI Understanding
   ↓
Verification
   ↓
Relationship Analysis
   ↓
Risk Signals
   ↓
Explainable Trust Report
```

---

# 3. Current Demo

The current demo focuses on:

```text
✓ User interface
✓ Investigation workflow
✓ Camera/input concept
✓ Upload flow
✓ Voice interaction concept
✓ Controlled investigation scenarios
✓ Risk result
✓ Evidence relationships
✓ Trust report
```

Some of these are currently demonstrated through controlled/prototype flows rather than a complete production backend.

---

# 4. Grand Finale Build

The main implementation work should focus on:

### Mobile

```text
Android / Kotlin
```

### Backend

```text
Python
FastAPI
REST APIs
```

### AI

```text
Gemini Multimodal AI
OCR / Vision
Speech-to-Text
Text-to-Speech
```

### Data

```text
MySQL
```

### Investigation

```text
Entity Extraction
Entity Resolution
Verification
Relationship Analysis
Risk Scoring
Evidence Graph
Trust Report
```

---

# 5. Recommended Build Order

Do not build everything at once.

### Step 1 — Core Investigation

Build:

```text
Input
 ↓
AI Extraction
 ↓
Entity Information
 ↓
Investigation Result
```

### Step 2 — Verification

Add:

```text
Company
Website
Recruiter
Email
Event
Registration
Payment
```

verification.

### Step 3 — Risk Engine

Add:

```text
Positive Signals
Negative Signals
Unknown Signals
Risk Score
```

### Step 4 — Evidence Graph

Connect:

```text
Company
 ├── Website
 ├── Recruiter
 ├── Email
 ├── Offer
 └── Payment
```

### Step 5 — Phone Features

Implement:

```text
Camera
QR Scanner
Voice
Document Upload
```

### Step 6 — Final Polish

Focus on:

```text
UX
Performance
Error Handling
Demo Reliability
Presentation
```

---

# 6. Main Demo Scenario

Use the internship investigation as the primary demo.

```text
Internship Offer
      ↓
Recruiter
      ↓
Email
      ↓
Website
      ↓
Payment Request
      ↓
TrustLens Investigation
```

Expected investigation:

```text
✓ Company identified

× Recruiter mismatch
× Email/domain mismatch
× Payment risk

        ↓

HIGH RISK
```

The exact signals should come from the implemented verification system rather than hardcoded results in the final build.

---

# 7. Important Technical Principle

Do not make TrustLens just an LLM chatbot.

The AI should be one component of the investigation system.

```text
User Evidence
      ↓
AI
      ↓
Structured Evidence
      ↓
Verification
      ↓
Investigation Logic
      ↓
Risk Analysis
      ↓
AI Explanation
```

The system should distinguish between:

```text
VERIFIED
MISMATCH
UNVERIFIED
UNKNOWN
```

---

# 8. Important AI Rule

The AI must not invent evidence.

It should clearly separate:

```text
User-provided information
        +
Verified information
        +
AI interpretation
```

If information cannot be verified:

```text
UNKNOWN
```

should be returned instead of automatically treating it as suspicious.

---

# 9. Environment Variables

Never commit API keys or passwords.

Use:

```text
.env
```

Example:

```text
GEMINI_API_KEY=
DATABASE_URL=
```

Keep `.env` in `.gitignore`.

Provide:

```text
.env.example
```

for required configuration.

---

# 10. Git Workflow

Before making major changes:

```bash
git pull
```

Create a feature branch:

```bash
git checkout -b feature/<feature-name>
```

After implementation:

```bash
git add .
git commit -m "Add <feature>"
git push
```

Keep commits small and descriptive.

---

# 11. Repository Documentation

Important project documents:

```text
README.md
PROJECT.md
ARCHITECTURE.md
AI_ENGINE.md
DEMO_SETUP.md
SECURITY_AND_PRIVACY.md
HACKATHON.md
HANDOFF.md
```

Read the relevant document before changing the architecture or implementation direction.

---

# 12. What Not to Claim

Until actually implemented, do not claim that TrustLens has:

```text
❌ Complete real-time verification
❌ Production-grade fraud detection
❌ Fully autonomous investigation
❌ Guaranteed scam detection
❌ Complete local AI
❌ Production security
```

Use:

```text
Planned
Prototype
Demo
Under Development
```

where appropriate.

---

# 13. Final Demo Priority

If time becomes limited during the Grand Finale, prioritize this flow:

```text
iQOO Phone
    ↓
Camera / Upload
    ↓
AI Extraction
    ↓
Company + Recruiter + Website
    ↓
Verification
    ↓
Risk Signals
    ↓
Evidence Graph
    ↓
Trust Report
```

A reliable end-to-end flow is more important than adding many unfinished features.

---

# 14. Final Handoff Checklist

Before the final presentation:

```text
□ App launches correctly
□ Camera flow works
□ Upload flow works
□ AI extraction works
□ Verification works
□ Risk analysis works
□ Evidence relationships are visible
□ Trust report is generated
□ Voice interaction works if implemented
□ API keys are protected
□ No sensitive demo data is exposed
□ README is updated
□ Architecture documentation is updated
□ Final demo scenario is tested
□ Backup demo scenario is available
```

---

# 15. If You Are Joining the Project

Start here:

```text
1. README.md
       ↓
2. PROJECT.md
       ↓
3. ARCHITECTURE.md
       ↓
4. AI_ENGINE.md
       ↓
5. DEMO_SETUP.md
       ↓
6. HACKATHON.md
       ↓
7. This file
```

Then inspect the actual source code before making implementation decisions.

---

# 16. One-Line Project Direction

> **Build TrustLens as a phone-first AI investigation system that connects evidence, verifies relationships, identifies risk signals, and explains why something can or cannot be trusted.**

---

## TrustLens

**Don't trust the name. Investigate the evidence.**
