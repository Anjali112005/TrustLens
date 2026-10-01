# TrustLens — System Architecture

## 1. Architecture Overview

TrustLens is designed as a **multimodal AI investigation system**.

The current repository contains a demo/prototype. The architecture below represents the **planned technical architecture for the hackathon implementation**.

```text
┌─────────────────────────────────────────────┐
│                 USER LAYER                  │
│                                             │
│     Camera     Upload      Voice            │
└──────────────────────┬──────────────────────┘
                       ↓
┌─────────────────────────────────────────────┐
│              CLIENT APPLICATION             │
│                                             │
│             Android / Kotlin                │
│      UI • Camera • Upload • Voice           │
└──────────────────────┬──────────────────────┘
                       ↓
┌─────────────────────────────────────────────┐
│                API LAYER                    │
│                                             │
│              FastAPI / REST                 │
└──────────────────────┬──────────────────────┘
                       ↓
┌─────────────────────────────────────────────┐
│          MULTIMODAL AI LAYER                │
│                                             │
│       Gemini • Vision • OCR • LLM           │
│                                             │
│   Image • Document • Text • Voice Input     │
└──────────────────────┬──────────────────────┘
                       ↓
┌─────────────────────────────────────────────┐
│            EVIDENCE PROCESSING              │
│                                             │
│     Extraction → Normalization              │
│              → Entity Resolution            │
└──────────────────────┬──────────────────────┘
                       ↓
┌─────────────────────────────────────────────┐
│          VERIFICATION LAYER                 │
│                                             │
│ Official Sources • Search/Web APIs          │
│ Domain • Company • Recruiter • Event        │
└──────────────────────┬──────────────────────┘
                       ↓
┌─────────────────────────────────────────────┐
│          INVESTIGATION ENGINE               │
│                                             │
│ Relationship Analysis • Rule Checks         │
│ Risk Signals • Confidence / Risk Score      │
└──────────────────────┬──────────────────────┘
                       ↓
┌─────────────────────────────────────────────┐
│             EXPLANATION LAYER               │
│                                             │
│ Evidence Graph • Trust Report • Reasoning   │
└──────────────────────┬──────────────────────┘
                       ↓
┌─────────────────────────────────────────────┐
│               DATA LAYER                    │
│                                             │
│                 MySQL                       │
│ Investigations • Entities • Results        │
└─────────────────────────────────────────────┘
```

---

# 2. Architecture Layers

## 2.1 User Layer

The user provides evidence through three primary inputs:

### Camera

Used for:

* Posters
* QR codes
* Advertisements
* Business cards
* Screens
* Physical documents

### Upload

Used for:

* PDFs
* Offer letters
* Screenshots
* Emails
* WhatsApp messages
* LinkedIn screenshots
* Payment screenshots

### Voice

Used for natural-language investigation queries such as:

```text
"Is this internship genuine?"

"Why is this suspicious?"

"Show me the negative evidence."

"Where can I officially register?"
```

---

# 3. Client Layer

The planned hackathon client is an **Android application built with Kotlin**.

Its responsibilities include:

* Camera access
* Image capture
* Document upload
* Voice input
* Investigation history
* Displaying investigation results
* Evidence graph visualization
* Trust report presentation

The client does not perform the complete investigation itself.

It communicates with the backend through REST APIs.

---

# 4. API Layer

The backend will use **Python + FastAPI**.

Responsibilities:

* Receive investigation requests
* Handle uploaded evidence
* Communicate with AI services
* Call verification services
* Run investigation logic
* Store investigation results
* Return structured results to the client

Example API flow:

```text
Android App
     ↓
POST /investigate
     ↓
FastAPI
     ↓
Investigation Engine
     ↓
AI + Verification
     ↓
Investigation Result
     ↓
Android App
```

---

# 5. Multimodal AI Layer

The planned AI layer will use **Gemini multimodal capabilities**.

It will help process:

* Images
* Documents
* Text
* Screenshots
* Extracted information
* Natural-language questions

Possible responsibilities:

```text
Image
  ↓
Vision Understanding
  ↓
OCR / Text Extraction
  ↓
Entity Extraction
  ↓
Structured Evidence
```

The LLM will also help interpret relationships and generate explanations.

---

# 6. Evidence Processing Layer

Raw user input is converted into structured evidence.

Example:

```text
Input:
Internship Poster

          ↓

Extracted Evidence:

Company → ABC Technologies
Role → Data Science Intern
Recruiter → Rahul Sharma
Email → recruiter@gmail.com
Website → abc-technologies.example
Fee → ₹2,500
```

The extracted information is normalized before verification.

---

# 7. Entity Resolution

Entities are identified and connected.

Example:

```text
ABC Technologies
       │
 ┌─────┼─────────────┐
 ↓     ↓             ↓
Web  Recruiter      Offer
       │
       ↓
     Email
       │
       ↓
    Payment
```

The purpose is to determine whether different pieces of evidence refer to the same real-world entity.

---

# 8. Verification Layer

The planned system will use trusted sources and available APIs/web sources where appropriate.

Possible verification targets include:

```text
Company
   ↓
Official Website
   ↓
Domain
   ↓
Recruiter
   ↓
Email
   ↓
Event
   ↓
Registration Link
   ↓
Payment Information
```

Verification results can be:

```text
MATCH
MISMATCH
UNVERIFIED
UNKNOWN
```

The system should not treat lack of information as automatic proof of fraud.

---

# 9. Investigation Engine

The investigation engine combines extracted evidence and verification results.

It checks relationships such as:

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

It then identifies risk signals.

Example:

```text
✓ Company identity found
✓ Official website found

× Recruiter mismatch
× Email/domain mismatch
× Payment recipient mismatch
```

---

# 10. Risk Assessment

Risk assessment combines investigation signals into an understandable result.

Example:

```text
Risk Score: 82 / 100

HIGH RISK

Reasons:
× Recruiter mismatch
× Email/domain mismatch
× Registration fee
× Payment relationship not verified
```

The risk score is an **investigation aid**, not a guaranteed statement that something is fraudulent.

---

# 11. Evidence Graph

TrustLens uses a graph-style model to represent relationships between evidence.

Example:

```text
                     COMPANY
                        │
          ┌─────────────┼─────────────┐
          ↓             ↓             ↓
       WEBSITE       RECRUITER       OFFER
                        │
                        ↓
                      EMAIL
                        │
                        ↓
                     PAYMENT
```

Each relationship can contain information such as:

```text
Entity A
Relationship
Entity B
Verification Status
Evidence Source
Confidence
```

This makes the investigation easier to understand.

---

# 12. Explanation Layer

The system converts investigation results into a user-friendly report.

Example:

```text
┌─────────────────────────────┐
│       TRUST REPORT          │
├─────────────────────────────┤
│ Risk: HIGH                  │
│ Score: 82 / 100             │
│                             │
│ ✓ Company identified        │
│ × Recruiter mismatch        │
│ × Email mismatch            │
│ × Payment mismatch          │
│                             │
│ Recommendation:             │
│ Verify through the official │
│ company website before      │
│ making any payment.         │
└─────────────────────────────┘
```

The objective is to explain **why** the system reached its assessment.

---

# 13. Data Layer

The planned backend will use **MySQL**.

Possible data entities include:

```text
Users
Investigations
Evidence
Entities
Relationships
Verification Results
Risk Signals
Reports
```

Example relationship:

```text
Investigation
      │
      ├── Evidence
      ├── Entities
      ├── Relationships
      ├── Risk Signals
      └── Final Report
```

---

# 14. End-to-End Flow

```text
┌───────────────┐
│     User      │
└───────┬───────┘
        ↓
┌───────────────┐
│ Camera/Upload │
│     /Voice    │
└───────┬───────┘
        ↓
┌───────────────┐
│ Android App   │
└───────┬───────┘
        ↓
┌───────────────┐
│    FastAPI    │
└───────┬───────┘
        ↓
┌───────────────┐
│ Multimodal AI │
└───────┬───────┘
        ↓
┌───────────────┐
│Evidence       │
│Extraction     │
└───────┬───────┘
        ↓
┌───────────────┐
│Entity         │
│Resolution     │
└───────┬───────┘
        ↓
┌───────────────┐
│Verification   │
│Sources/APIs   │
└───────┬───────┘
        ↓
┌───────────────┐
│Investigation  │
│Engine         │
└───────┬───────┘
        ↓
┌───────────────┐
│Risk Analysis  │
└───────┬───────┘
        ↓
┌───────────────┐
│Evidence Graph │
└───────┬───────┘
        ↓
┌───────────────┐
│Trust Report   │
└───────────────┘
```

---

# 15. Current Demo Architecture vs Planned Architecture

| Layer                | Current Demo         | Hackathon Implementation       |
| -------------------- | -------------------- | ------------------------------ |
| UI                   | ✅ Prototype          | Android/Kotlin                 |
| Camera               | ✅ Demo flow          | Real camera input              |
| Upload               | ✅ Demo flow          | Real document/image processing |
| Voice                | Concept              | Speech-to-Text + AI            |
| AI                   | Demo/controlled      | Gemini multimodal              |
| OCR                  | Demonstration        | AI/OCR integration             |
| Backend              | Demo-oriented        | FastAPI                        |
| Verification         | Controlled scenarios | APIs + trusted sources         |
| Investigation Engine | Demonstration        | Python implementation          |
| Risk Analysis        | Demonstration        | Dynamic analysis               |
| Evidence Graph       | Concept              | Dynamic relationships          |
| Database             | Not complete         | MySQL                          |
| Trust Report         | Demo                 | AI-generated report            |

---

# 16. Design Principles

### Evidence First

The system should prioritize evidence over assumptions.

### Explainability

Every important risk signal should have an understandable reason.

### Multimodal

Different types of evidence should be usable together.

### Relationship-Based

Trust should be evaluated across connected entities rather than one isolated signal.

### Human-in-the-Loop

TrustLens provides investigation support. The final decision remains with the user.

### Privacy

Only necessary information should be processed and stored.

---

# 17. Architecture Goal

The final hackathon implementation should transform:

```text
User Evidence
      ↓
AI Understanding
      ↓
Evidence Relationships
      ↓
Verification
      ↓
Risk Analysis
      ↓
Explainable Trust
```

into a practical investigation workflow that a user can interact with through a mobile application.

> **TrustLens is not just a detector. It is an investigation workflow that connects evidence and explains the result.**
