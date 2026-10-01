# TrustLens — Project Definition

## 1. Project Overview

**TrustLens** is an AI-powered multimodal trust and investigation platform designed to help users investigate digital opportunities before making a decision.

TrustLens focuses on situations such as:

* Internship offers
* Job offers
* Companies and recruiters
* Events and hackathons
* Registration links
* QR codes
* Payment requests
* Digital documents
* Emails and screenshots

> **Don't trust the name. Investigate the evidence.**

The current repository contains a **working demo/prototype** that demonstrates the proposed TrustLens experience and investigation workflow.

---

## 2. Problem Statement

Digital opportunities are increasingly received through WhatsApp, email, social media, websites, posters, and QR codes.

They may look legitimate while containing inconsistencies.

For example:

```text
Company
   ↓
Recruiter
   ↓
Email
   ↓
Website
   ↓
Offer
   ↓
Payment
```

A company may be real, but the recruiter, email, website, offer, or payment account may not actually belong to that organization.

Therefore, the problem is not only:

> **"Does this company exist?"**

It is:

> **"Do these pieces of evidence actually belong together?"**

TrustLens is designed to investigate these relationships.

---

## 3. Proposed Solution

TrustLens acts as a **multimodal investigation assistant**.

Users will be able to provide evidence through:

```text
Camera
Upload
Voice
```

The proposed investigation flow is:

```text
User Evidence
      ↓
Evidence Extraction
      ↓
Entity Identification
      ↓
Cross Verification
      ↓
Relationship Analysis
      ↓
Risk Assessment
      ↓
Evidence Graph
      ↓
Explainable Trust Report
```

The goal is not simply to classify something as "real" or "fake", but to explain the evidence behind the assessment.

---

## 4. What We Built for the Demo

The current version is a **prototype/demo**, not the complete production system.

The demo focuses on demonstrating the intended user experience and investigation workflow.

### Current Demo

* Mobile-style TrustLens interface
* Camera investigation flow
* Upload investigation flow
* Voice interaction concept
* Controlled investigation scenarios
* Evidence extraction screens
* Cross-checking flow
* Risk assessment screen
* Evidence graph concept
* Explainable trust report
* Investigation history
* Interactive navigation

The demo uses **controlled/preloaded scenarios** to keep the presentation reliable and repeatable.

---

## 5. What We Plan to Build During the Hackathon

The hackathon implementation will focus on converting the current demo concept into a functional AI-powered investigation prototype.

### 5.1 Multimodal Evidence Processing

The system will accept:

* Images from camera
* Uploaded documents
* Screenshots
* Text
* Voice queries

AI will be used to understand and extract information from these inputs.

---

### 5.2 Evidence Extraction

The system will extract entities such as:

```text
Company
Recruiter
Email
Website
Domain
Phone Number
Event
Date
Location
Payment
UPI ID
QR Code
Offer
Role
Fee
Registration Link
```

---

### 5.3 Entity Resolution

Extracted entities will be connected to understand their relationships.

Example:

```text
Company
 ├── Website
 ├── Recruiter
 ├── Email
 ├── Offer
 └── Payment
```

---

### 5.4 Evidence Verification

The investigation engine will check relationships such as:

```text
Company ↔ Website
Company ↔ Recruiter
Company ↔ Email
Company ↔ Offer
Recruiter ↔ Email
Payment ↔ Company
Event ↔ Organizer
QR ↔ Registration Link
```

The system will use available trusted sources, official websites, search/web APIs, and other verification services where appropriate.

---

### 5.5 Risk Analysis

The system will identify signals such as:

```text
✓ Official Source Match
✓ Evidence Match

× Domain Mismatch
× Recruiter Mismatch
× Payment Recipient Mismatch
× Unverified Claim
× Suspicious Fee
```

These signals will contribute to an explainable risk assessment.

---

### 5.6 Evidence Graph

The system will represent relationships between evidence.

```text
                    COMPANY
                       │
          ┌────────────┼────────────┐
          ↓            ↓            ↓
       WEBSITE      RECRUITER      OFFER
                       │
                       ↓
                     EMAIL
                       │
                       ↓
                    PAYMENT
```

This allows the user to understand how different pieces of evidence are connected.

---

### 5.7 Explainable Trust Report

The final output will show:

```text
Risk Level
     +
Evidence
     +
Matching Signals
     +
Mismatching Signals
     +
Reason
     +
Recommended Action
```

Instead of only showing:

```text
SAFE / UNSAFE
```

TrustLens will explain **why** the result was produced.

---

# 6. Technical Direction

The planned hackathon architecture is:

```text
Android / Mobile UI
        ↓
FastAPI Backend
        ↓
Multimodal AI Layer
   ┌────┼───────────┐
   ↓    ↓           ↓
 OCR  Vision       LLM
   └────┼───────────┘
        ↓
Evidence Extraction
        ↓
Entity Resolution
        ↓
Verification APIs / Trusted Web Sources
        ↓
Investigation Engine
        ↓
Risk Scoring
        ↓
Evidence Graph
        ↓
Explainable Trust Report
```

## Technology Stack

| Layer                | Technology                         | Purpose                                                   |
| -------------------- | ---------------------------------- | --------------------------------------------------------- |
| Frontend             | Android / Kotlin                   | Camera, upload, voice and mobile experience               |
| Backend              | Python + FastAPI                   | APIs and investigation workflow                           |
| AI                   | Gemini Multimodal                  | Image, document, text understanding and reasoning         |
| OCR / Vision         | Gemini Vision / OCR                | Extract information from images and documents             |
| Voice                | Android Speech-to-Text + TTS       | Voice-based interaction                                   |
| Verification         | Search/Web APIs + official sources | Verify companies, domains, events and links               |
| Investigation Engine | Python                             | Evidence matching, relationship analysis and risk signals |
| Database             | MySQL                              | Investigation data, entities and results                  |
| API Communication    | REST APIs                          | Frontend ↔ Backend communication                          |
| Evidence Model       | Graph-style relationships          | Connect evidence and entities                             |
| Deployment           | Cloud Backend + Demo Client        | Hackathon demonstration                                   |

---

# 7. Planned System Workflow

```text
1. User receives an opportunity
              ↓
2. Opens TrustLens
              ↓
3. Captures / uploads evidence
              ↓
4. AI extracts information
              ↓
5. Entities are identified
              ↓
6. Evidence is cross-verified
              ↓
7. Risk signals are detected
              ↓
8. Relationships are represented
              ↓
9. Trust report is generated
              ↓
10. User makes an informed decision
```

---

# 8. Demo vs Hackathon Implementation

| Component           | Current Demo        | Hackathon Plan                 |
| ------------------- | ------------------- | ------------------------------ |
| Mobile UI           | ✅ Implemented       | Extend                         |
| Camera Flow         | ✅ Demo              | Real input processing          |
| Upload Flow         | ✅ Demo              | Real document/image processing |
| Voice               | ✅ Concept           | Speech + AI interaction        |
| Evidence Extraction | Demo                | AI-powered                     |
| Entity Resolution   | Demo                | Functional implementation      |
| Verification        | Controlled          | APIs / trusted sources         |
| Risk Analysis       | Demo                | Dynamic investigation engine   |
| Evidence Graph      | Concept/Demo        | Dynamic graph                  |
| Trust Report        | Demo                | AI-generated report            |
| Database            | Not complete        | MySQL                          |
| Backend             | Demo-oriented       | FastAPI                        |
| Multimodal AI       | Planned             | Gemini integration             |
| Native Mobile       | Prototype direction | Hackathon implementation       |

---

# 9. Example Investigation

A user receives an internship offer:

```text
Company: ABC Technologies
Recruiter: Rahul Sharma
Email: recruiter@gmail.com
Website: abc-technologies.example
Fee: ₹2,500
```

TrustLens will attempt to investigate:

```text
Company ↔ Website
Company ↔ Recruiter
Recruiter ↔ Email
Company ↔ Offer
Company ↔ Payment
```

Possible result:

```text
HIGH RISK

× Recruiter not verified
× Email/domain mismatch
× Registration fee detected
× Payment relationship not verified

✓ Company identity found
```

The system should explain the evidence instead of simply returning a label.

---

# 10. Target Users

TrustLens is primarily designed for:

* Students
* Internship seekers
* Job seekers
* Professionals
* Event participants
* General users receiving suspicious digital requests

The first focus is on **students and early-career users**, where internship, job, event, and registration scams can create significant risk.

---

# 11. Key Differentiator

Existing tools often focus on individual signals:

```text
URL Checker      → URL
Spam Detector    → Message
QR Scanner       → QR
Company Search   → Company
Review Platform  → Reviews
```

TrustLens focuses on connecting these signals.

```text
Company
   ↓
Recruiter
   ↓
Email
   ↓
Website
   ↓
Offer
   ↓
Payment
   ↓
Investigation
   ↓
Trust Report
```

> **TrustLens investigates relationships between evidence instead of judging a single signal in isolation.**

---

# 12. Limitations

The current demo has intentional limitations:

* Uses controlled/preloaded investigation scenarios.
* Does not represent a complete production verification system.
* Not every external source or API is connected.
* Risk scoring is an investigation aid, not a guarantee.
* Production AI requires additional validation and safeguards.

TrustLens is not intended to be a legal, financial, or regulatory authority.

---

# 13. Future Scope

After the hackathon, TrustLens can be expanded with:

* Real-time company verification
* Domain verification
* Recruiter verification
* Event verification
* Website analysis
* Email analysis
* Conversation analysis
* Advanced document intelligence
* Continuous evidence graphs
* Community scam intelligence
* Native Android application
* Secure document and QR scanning
* Personalized investigations

---

# 14. Expected Hackathon Outcome

The intended hackathon outcome is a functional prototype where a user can submit a suspicious digital opportunity and receive an evidence-based investigation.

```text
Camera / Upload / Voice
          ↓
       AI Analysis
          ↓
    Evidence Extraction
          ↓
    Cross Verification
          ↓
      Risk Signals
          ↓
     Evidence Graph
          ↓
    Trust Report
```

The system should help users understand:

> **What was found, what matches, what does not match, and why it matters.**

---

# 15. Project Vision

TrustLens is built around one simple principle:

> **Digital trust should be based on evidence, not appearance.**

The current demo demonstrates the concept and user experience.

The hackathon implementation will focus on building the AI, verification, investigation, and explanation layers behind that experience.

```text
DON'T TRUST THE NAME
          ↓
COLLECT THE EVIDENCE
          ↓
CONNECT THE ENTITIES
          ↓
CROSS-CHECK THE SIGNALS
          ↓
UNDERSTAND THE RISK
          ↓
EXPLAIN THE RESULT
          ↓
MAKE A DECISION
```

---

## TrustLens

### Don't trust the name. Investigate the evidence.

**Built for iQOO Hackathon 2026**
