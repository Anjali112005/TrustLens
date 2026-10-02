# TrustLens 🔍

### AI-Powered Community Trust & Investigation Platform

> **Don't trust the name. Investigate the evidence.**

TrustLens is an **AI-powered multimodal trust and investigation platform** designed to help students, developers, professionals, job seekers, and technology communities investigate suspicious **internships, job offers, events, recruiters, websites, QR codes, documents, and payment requests**.

Instead of checking only one URL, company, or message, TrustLens connects multiple pieces of evidence, investigates their relationships, and aims to turn useful investigation results into **community trust intelligence**.

---

## 🚨 The Problem

Students and professionals increasingly discover opportunities through:

* WhatsApp
* LinkedIn
* Email
* Instagram
* Job platforms
* Community groups
* Event posters
* QR codes
* Websites

A real-world internship scam inspired this project: a friend paid **₹850 for an internship**, completed the work, and later discovered that the opportunity was fraudulent.

The problem is not simply:

> "Does this company exist?"

The bigger question is:

> **"Can I trust all the evidence surrounding this opportunity?"**

And if one person discovers something suspicious, **can that knowledge help others in the community?**

---

# 💡 Our Solution

TrustLens turns the smartphone into an **AI-powered investigation device** and aims to build a **community-powered trust layer**.

Users can investigate evidence through:

### 📷 Camera

Scan:

* Internship/job posters
* Event posters
* QR codes
* Business cards
* Websites
* Payment requests

### 📄 Upload

* Offer letters
* PDFs
* Email screenshots
* WhatsApp conversations
* LinkedIn screenshots
* Event invitations
* Payment screenshots

### 🎙️ Voice

Ask questions such as:

> "Is this internship genuine?"

> "Why is this suspicious?"

> "Show me the negative evidence."

> "Can I trust this registration link?"

---

# 👥 Community Vision

TrustLens is being developed toward the **Community App** direction of the iQOO Hackathon 2026 Grand Finale.

The goal is to connect people who encounter similar trust problems:

```text
Students
Developers
Professionals
Job Seekers
Event Participants
Tech Communities
        ↓
   TRUSTLENS COMMUNITY
        ↓
Share / Investigate / Verify
        ↓
AI-Powered Trust Intelligence
```

Users could share suspicious:

* Internship offers
* Job postings
* Recruiter profiles
* Events
* Websites
* QR codes
* Payment requests
* Digital documents

The community layer can help connect related reports and evidence so that **one person's investigation can potentially help another person**.

---

# 🧠 AI at the Core

AI is not intended to be just a chatbot inside the application.

It is planned to power the core investigation and community experience.

```text
Community Evidence
        ↓
Multimodal AI
        ↓
Evidence Extraction
        ↓
Entity Resolution
        ↓
Verification
        ↓
Community Signals
        ↓
Risk Analysis
        ↓
Evidence Graph
        ↓
Explainable Trust Report
```

Where technically feasible, the Grand Finale implementation will evaluate **on-device/local AI** for suitable tasks, while cloud AI and external verification services can be used where required.

---

# 🔎 How TrustLens Works

```text
Camera / Upload / Voice
          ↓
   Multimodal AI
          ↓
   Evidence Extraction
          ↓
    Entity Resolution
          ↓
      Verification
          ↓
 Relationship Analysis
          ↓
    Community Signals
          ↓
     Risk Analysis
          ↓
     Evidence Graph
          ↓
   Explainable Trust Report
```

TrustLens focuses on **relationships between evidence**, not just individual signals.

Example:

```text
Company
   │
   ├── Website
   ├── Recruiter
   │     └── Email
   ├── Internship Offer
   ├── Event
   └── Payment Request
```

The system investigates whether these pieces of information actually belong together.

---

# 🧠 What Makes TrustLens Different?

| **Existing Approach** | **TrustLens**                      |
| --------------------- | ---------------------------------- |
| URL checker           | Multimodal investigation           |
| Spam detector         | Evidence-based analysis            |
| Company lookup        | Entity + relationship verification |
| QR scanner            | QR + destination investigation     |
| Generic chatbot       | Structured investigation engine    |
| Individual reports    | Community trust intelligence       |
| Single signal         | Multiple connected signals         |

### Core Difference

> **TrustLens investigates relationships between evidence and aims to make useful trust intelligence available to the community.**

---

# 📱 Phone-First Experience

The phone is an important part of the TrustLens experience.

```text
                 iQOO PHONE
                     │
          ┌──────────┼──────────┐
          ↓          ↓          ↓
       Camera      Voice       QR
          │          │          │
          └──────────┼──────────┘
                     ↓
                TrustLens
                     ↓
              AI Investigation
                     ↓
             Community Signal
                     ↓
               Trust Report
```

The phone is not simply used to display the final result.

It is the primary device through which users **capture, investigate, understand, and contribute evidence**.

---

# 🏗️ Planned Technical Architecture

```text
Android / Kotlin
       ↓
FastAPI / REST API
       ↓
Multimodal AI
       ↓
Evidence Processing
       ↓
Entity Resolution
       ↓
Verification Sources
       ↓
Community Intelligence
       ↓
Investigation Engine
       ↓
Risk Analysis
       ↓
Evidence Graph
       ↓
MySQL
       ↓
Trust Report
```

### Planned Technology

* Android / Kotlin
* Python
* FastAPI
* Gemini Multimodal AI
* OCR / Vision
* Speech-to-Text
* Text-to-Speech
* MySQL
* REST APIs
* Verification APIs / trusted sources
* Evidence relationship model
* Risk analysis
* Community data layer
* Local / on-device AI evaluation

---

# 🎯 Current Status

The current repository contains a **demo/prototype** prepared as the starting point for the Grand Finale.

### Current Demo

```text
✓ Product concept
✓ UI / prototype
✓ Investigation workflow
✓ Controlled scenarios
✓ Risk/result demonstration
✓ Evidence relationship concept
```

### Grand Finale Build

```text
→ Real Android application
→ Real camera processing
→ Multimodal AI
→ OCR / document understanding
→ Voice interaction
→ Entity resolution
→ Verification
→ Investigation engine
→ Community layer
→ Community evidence signals
→ Dynamic risk analysis
→ Evidence graph
→ Explainable trust report
→ Evaluation of on-device/local AI
```

**Important:** Planned features are not represented as already implemented.

---

# 🧪 Demo Scenario

The recommended demo uses a suspicious internship:

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

Example investigation result:

```text
✓ Company identity found

× Recruiter mismatch
× Email/domain mismatch
× Upfront payment requested
? Payment relationship not verified

        ↓

     HIGH RISK
```

**HIGH RISK does not mean proven fraud.**

TrustLens is designed to present evidence, signals, and explanations so users can make better decisions.

---

# 🌐 Community Intelligence

The planned community layer can turn individual investigations into useful shared intelligence.

Example:

```text
User A
   ↓
Reports suspicious internship
   ↓
TrustLens extracts entities
   ↓
Company / Recruiter / Website identified
   ↓
Evidence becomes structured signals
   ↓
User B encounters the same recruiter
   ↓
TrustLens finds related community evidence
   ↓
Relevant trust signals are shown
```

This creates a feedback loop:

```text
Investigate
     ↓
Contribute
     ↓
Connect Evidence
     ↓
Help Others
     ↓
Improve Community Trust Intelligence
```

The community should be focused on **useful evidence and investigation**, rather than becoming a generic social feed.

---

# 🏆 iQOO Hackathon 2026 — Grand Finale

TrustLens is being prepared for the **iQOO Hackathon 2026 Grand Finale**.

## Target Track — Community App

The target track focuses on:

> **Building a community app, not specific to iQOO, that connects developers, professionals, or interest groups, with AI — preferably on-device — at the core.**

TrustLens aligns with this direction by connecting students, professionals, developers, job seekers, and technology communities around **shared trust and investigation intelligence**.

---

## Evaluation Criteria

| **Criterion**       | **Weight** |
| ------------------- | ---------: |
| End Product Quality |        30% |
| Novelty & Impact    |        20% |
| Creative Phone Use  |        15% |
| Technical Depth     |        15% |
| Office Kit Usage    |        10% |
| Demo & Presentation |        10% |
| **Total**           |   **100%** |

### TrustLens Alignment

**End Product Quality — 30%**

Complete community → investigation → result workflow.

**Novelty & Impact — 20%**

Community-powered trust intelligence instead of isolated checking.

**Creative Phone Use — 15%**

Camera + QR + Voice + phone-first investigation.

**Technical Depth — 15%**

Multimodal AI + entity resolution + verification + investigation engine + evidence graph.

**Office Kit Usage — 10%**

Phone ↔ laptop workflow during development and demonstration.

**Demo & Presentation — 10%**

A clear real-world investigation story showing how one investigation can help others.

For complete details, see [`HACKATHON.md`](HACKATHON.md).

---

# 📚 Documentation

| **Document**                                         | **Purpose**                                         |
| ---------------------------------------------------- | --------------------------------------------------- |
| [`PROJECT.md`](PROJECT.md)                           | Project concept, scope and direction                |
| [`ARCHITECTURE.md`](ARCHITECTURE.md)                 | System architecture and data flow                   |
| [`AI_ENGINE.md`](AI_ENGINE.md)                       | AI and investigation engine direction               |
| [`DEMO_SETUP.md`](DEMO_SETUP.md)                     | How to run and demonstrate the prototype            |
| [`SECURITY_AND_PRIVACY.md`](SECURITY_AND_PRIVACY.md) | Security and privacy principles                     |
| [`HACKATHON.md`](HACKATHON.md)                       | Grand Finale context, track and evaluation strategy |
| [`HANDOFF.md`](HANDOFF.md)                           | Development handoff and build priorities            |

---

# 🔐 Security & Privacy

TrustLens may process sensitive information such as documents, emails, recruiter details, and payment-related evidence.

The planned system follows:

* Data minimization
* Secure API communication
* Input validation
* Protected secrets
* Controlled file processing
* Limited data retention
* Sensitive logging controls

> **Unknown information should not automatically be treated as fraud.**

See [`SECURITY_AND_PRIVACY.md`](SECURITY_AND_PRIVACY.md).

---

# 🚀 Product Evolution

### Current Prototype

```text
Individual User
      ↓
Evidence
      ↓
AI Investigation
      ↓
Risk Result
```

### Grand Finale Direction

```text
Community
    ↓
Shared Evidence
    ↓
Multimodal AI
    ↓
Investigation
    ↓
Verification
    ↓
Community Signals
    ↓
Evidence Graph
    ↓
Trust Intelligence
```

The goal is to evolve TrustLens from an individual investigation prototype into a **community-powered AI trust platform**.

---

# 👥 Development Direction

The current prototype is the foundation for the Grand Finale implementation.

Development priority:

```text
1. Core Investigation
        ↓
2. Verification
        ↓
3. Risk Engine
        ↓
4. Evidence Graph
        ↓
5. Community Layer
        ↓
6. Phone Features
        ↓
7. On-Device AI Evaluation
        ↓
8. Final UX + Demo
```

A reliable end-to-end workflow is prioritized over adding many unfinished features.

---

# ⚠️ Disclaimer

TrustLens is an **investigation-support system**.

It does **not** provide:

* Guaranteed fraud detection
* Legal certification
* Official company verification
* Financial advice
* A definitive fraud verdict

The system presents evidence, signals, and explanations to help users make more informed decisions.

---

# TrustLens 🔍

### **Investigate before you trust.**

**Camera. Voice. AI. Community. Evidence.**
