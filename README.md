# TrustLens 🔍

### AI-Powered Multimodal Trust Investigation

> **Don't trust the name. Investigate the evidence.**

TrustLens is an AI-powered multimodal investigation system designed to help users evaluate suspicious **internships, job offers, events, recruiters, websites, QR codes, documents, and payment requests**.

Instead of checking a single URL, company, or message, TrustLens connects multiple pieces of evidence and investigates whether they are consistent with each other.

---

## 🚨 The Problem

Students and everyday users increasingly receive opportunities through:

* WhatsApp
* LinkedIn
* Email
* Instagram
* Job platforms
* Event posters
* QR codes
* Websites

A real-world internship scam inspired this project: a friend paid **₹850 for an internship**, completed the work, and later discovered that the opportunity was fraudulent.

The problem is not simply identifying whether a company exists.

The real question is:

> **Can I trust all the evidence surrounding this opportunity?**

---

## 💡 Our Solution

TrustLens turns the smartphone into an **AI-powered investigation device**.

Users can provide evidence through:

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

## 🔎 How TrustLens Works

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
     Risk Signals
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
   └── Payment Request
```

The system investigates whether these pieces of information actually belong together.

---

## 🧠 What Makes TrustLens Different?

| Existing Approach | TrustLens                          |
| ----------------- | ---------------------------------- |
| URL checker       | Multimodal investigation           |
| Spam detector     | Evidence-based analysis            |
| Company lookup    | Entity + relationship verification |
| QR scanner        | QR + destination investigation     |
| Generic chatbot   | Structured investigation engine    |
| Single signal     | Multiple connected signals         |

### Core Difference

> **TrustLens investigates the relationship between evidence.**

---

## 📱 Phone-First Vision

TrustLens is designed for the **iQOO Hackathon 2026 Grand Finale** with the phone as an important part of the actual solution.

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
            Trust Report
```

The phone is not just used to display the final result.

It is the primary device through which the investigation begins.

---

## 🏗️ Planned Technical Architecture

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

---

## 🎯 Current Status

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
→ Dynamic risk analysis
→ Evidence graph
→ Explainable trust report
```

Planned features are clearly distinguished from the current prototype throughout the documentation.

---

## 🧪 Demo Scenario

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

TrustLens is designed to explain the evidence and help the user make a better decision.

---

## 🏆 iQOO Hackathon 2026 — Grand Finale

TrustLens is being prepared for the **iQOO Hackathon 2026 Grand Finale**.

### Evaluation Criteria

| Criterion           |   Weight |
| ------------------- | -------: |
| End Product Quality |      30% |
| Novelty & Impact    |      20% |
| Creative Phone Use  |      15% |
| Technical Depth     |      15% |
| Office Kit Usage    |      10% |
| Demo & Presentation |      10% |
| **Total**           | **100%** |

TrustLens is designed around these criteria through:

* Complete investigation workflow
* Evidence relationship analysis
* Camera + QR + Voice interaction
* Multimodal AI
* Technical investigation pipeline
* iQOO phone-first experience
* Office Kit integration
* Strong real-world demo

For complete details, see [`HACKATHON.md`](HACKATHON.md).

---

## 📚 Documentation

| Document                                             | Purpose                                      |
| ---------------------------------------------------- | -------------------------------------------- |
| [`PROJECT.md`](PROJECT.md)                           | Project concept, scope and direction         |
| [`ARCHITECTURE.md`](ARCHITECTURE.md)                 | System architecture and data flow            |
| [`AI_ENGINE.md`](AI_ENGINE.md)                       | AI and investigation engine direction        |
| [`DEMO_SETUP.md`](DEMO_SETUP.md)                     | How to run and demonstrate the prototype     |
| [`SECURITY_AND_PRIVACY.md`](SECURITY_AND_PRIVACY.md) | Security and privacy principles              |
| [`HACKATHON.md`](HACKATHON.md)                       | Grand Finale context and evaluation strategy |
| [`HANDOFF.md`](HANDOFF.md)                           | Development handoff and build priorities     |

---

## 🔐 Security & Privacy

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

## 🚀 Future Direction

The long-term vision is to make TrustLens a **personal AI trust investigation assistant** available directly on the phone.

```text
See something suspicious?
          ↓
Capture it
          ↓
Ask TrustLens
          ↓
Investigate the evidence
          ↓
Understand the risk
          ↓
Make a better decision
```

---

## 👥 Development Direction

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
5. Phone Features
        ↓
6. Final UX + Demo
```

A reliable end-to-end workflow is prioritized over adding many unfinished features.

---

## ⚠️ Disclaimer

TrustLens is an investigation-support system.

It does **not** provide:

* Guaranteed fraud detection
* Legal certification
* Official company verification
* Financial advice
* A definitive fraud verdict

The system presents evidence, signals, and explanations to help users make more informed decisions.

---

# TrustLens

### **Investigate before you trust.**

**Camera. Voice. AI. Evidence.**
