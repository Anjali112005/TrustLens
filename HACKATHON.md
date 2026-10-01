# TrustLens — Hackathon Context

## 1. Hackathon

**iQOO Hackathon 2026 — City Battles**

TrustLens was designed for the iQOO Hackathon 2026, a phone-first AI hackathon organized by **iQOO × Reskilll**.

The competition includes city battles across Bengaluru, Pune, Chennai, and Hyderabad, followed by a Grand Finale in Bengaluru. Each City Battle is a 30-hour build focused on creating practical AI-powered solutions using the phone as an important part of the build and demo experience.

### Hyderabad Battle

```text
City: Hyderabad
Dates: 26–27 September 2026
Format: 30-hour City Battle
Track: Open Innovation / Community-oriented solution
Project: TrustLens
```

---

# 2. Hackathon Philosophy

The iQOO Hackathon is designed around a **phone-first development approach**.

The phone is not only the device used to present the final product.

It should become part of the actual solution through capabilities such as:

* Camera
* Voice
* On-device AI
* Mobile interaction
* iQOO hardware capabilities
* Office Kit integration

A local or open-source model at the core also earns additional recognition.

This directly influences the TrustLens architecture.

---

# 3. TrustLens × iQOO

TrustLens is designed around the idea that users often encounter suspicious opportunities directly through their phones.

Examples:

```text
WhatsApp Message
       ↓
Internship Offer
       ↓
Recruiter
       ↓
Website
       ↓
QR Code
       ↓
Payment Request
```

Therefore, the smartphone itself becomes the natural investigation device.

### Phone-first TrustLens

```text
Camera
   ↓
Capture Evidence
   ↓
AI Investigation
   ↓
Voice Questions
   ↓
Risk Analysis
   ↓
Trust Report
```

The planned implementation will make the iQOO phone a core part of both the user experience and the investigation workflow.

---

# 4. Official Evaluation Criteria

The published iQOO Hackathon 2026 City Battle scoring rubric contains **six evaluation dimensions totaling 100%**.

| Criterion           |   Weight |
| ------------------- | -------: |
| End Product Quality |  **30%** |
| Novelty & Impact    |  **20%** |
| Creative Phone Use  |  **15%** |
| Technical Depth     |  **15%** |
| Office Kit Usage    |  **10%** |
| Demo & Presentation |  **10%** |
| **Total**           | **100%** |

---

# 5. How TrustLens Targets Each Criterion

## 5.1 End Product Quality — 30%

### What the judges look for

* Does it work?
* Is it useful?
* Would someone actually use it?
* Is the experience polished?

### TrustLens Strategy

We will focus on delivering a complete investigation workflow instead of many disconnected features.

```text
Input
 ↓
AI Processing
 ↓
Evidence
 ↓
Verification
 ↓
Risk Analysis
 ↓
Trust Report
```

The goal is to make the final demo feel like a real product rather than a collection of AI experiments.

### Target

```text
✓ Working core workflow
✓ Reliable demo
✓ Clear UX
✓ Useful output
✓ Explainable results
```

---

# 6. Novelty & Impact — 20%

TrustLens is not intended to be only a:

```text
URL Checker
Spam Detector
Company Search
QR Scanner
```

Instead, it connects multiple pieces of evidence.

```text
Company
   │
   ├── Website
   ├── Recruiter
   ├── Email
   ├── Offer
   ├── Event
   └── Payment
          ↓
     Investigation
```

The key idea is:

> **Do these pieces of evidence actually belong together?**

This relationship-based investigation is the main differentiator of TrustLens.

---

# 7. Creative Phone Use — 15%

This is one of the most important criteria for TrustLens.

The planned product will use the phone for:

### Camera

```text
Scan Poster
Scan QR
Capture Offer
Capture Screenshot
        ↓
AI Investigation
```

### Voice

```text
"Why is this suspicious?"
        ↓
Speech-to-Text
        ↓
Investigation
        ↓
Voice / Text Response
```

### Mobile AI

The phone will be the primary interaction surface for the investigation.

The final implementation should demonstrate that TrustLens is not simply a web application displayed on a phone.

---

# 8. Technical Depth — 15%

The planned architecture goes beyond a simple LLM chatbot.

```text
Android / Mobile
       ↓
FastAPI
       ↓
Multimodal AI
       ↓
Evidence Extraction
       ↓
Entity Resolution
       ↓
Verification
       ↓
Investigation Engine
       ↓
Risk Analysis
       ↓
Evidence Graph
       ↓
Trust Report
```

### Planned technologies

* Android / Kotlin
* Python
* FastAPI
* Gemini Multimodal AI
* OCR / Vision
* REST APIs
* MySQL
* Verification APIs / trusted sources
* Evidence relationship model
* Risk analysis engine

The technical depth will come from combining AI with structured evidence processing and verification rather than relying on a single LLM response.

---

# 9. Office Kit Usage — 10%

iQOO Office Kit is designed to bridge the phone and laptop into a shared build environment.

TrustLens can use this during development and the hackathon workflow for:

```text
iQOO Phone
     ↕
Office Kit
     ↕
Laptop
```

Potential usage includes:

* Phone-first application testing
* Screen mirroring
* File transfer
* Development workflow
* Testing phone ↔ backend interaction
* Demonstrating the phone as the primary device

Office Kit usage is tracked as part of the hackathon evaluation.

---

# 10. Demo & Presentation — 10%

The final pitch is expected to be approximately **3–5 minutes**.

TrustLens will use a simple story:

```text
1. Problem
       ↓
2. Real-world Scam Scenario
       ↓
3. TrustLens Investigation
       ↓
4. Evidence Extraction
       ↓
5. Cross Verification
       ↓
6. Risk Signals
       ↓
7. Trust Report
       ↓
8. Why TrustLens is Different
```

### Recommended Demo Scenario

Use the internship scam scenario:

```text
Internship Offer
      ↓
Recruiter
      ↓
Email
      ↓
Website
      ↓
₹2,500 Fee
      ↓
TrustLens Investigation
```

Then demonstrate:

```text
✓ Company found

× Recruiter mismatch
× Email/domain mismatch
× Payment risk

        ↓

HIGH RISK
```

The presentation should focus on the **investigation journey**, not on explaining every technical component.

---

# 11. TrustLens Evaluation Strategy

Our development priorities should follow the scoring weight.

```text
30%  End Product Quality
       ↓
20%  Novelty & Impact
       ↓
15%  Creative Phone Use
       ↓
15%  Technical Depth
       ↓
10%  Office Kit Usage
       ↓
10%  Demo & Presentation
```

### Priority Order

**1. Make the core product work.**

**2. Make the investigation concept clearly different.**

**3. Make the phone an actual part of the product.**

**4. Add meaningful technical depth.**

**5. Use Office Kit properly.**

**6. Polish the final pitch and demo.**

---

# 12. What We Should NOT Do

TrustLens should avoid becoming:

```text
❌ Just a chatbot
❌ Just a website checker
❌ Just an OCR application
❌ Just a fake/scam classifier
❌ A dashboard with no real phone interaction
❌ A collection of disconnected AI features
```

Instead:

```text
Evidence
   ↓
AI Understanding
   ↓
Cross Verification
   ↓
Relationship Analysis
   ↓
Risk
   ↓
Explanation
```

---

# 13. Hackathon Build Goal

The current repository contains the **TrustLens demo/prototype**.

During the actual hackathon, the goal is to evolve it into a functional phone-first AI investigation prototype.

### Current

```text
Controlled Demo
      ↓
Predefined Scenarios
      ↓
Demonstration Result
```

### Hackathon

```text
Real User Evidence
      ↓
Camera / Upload / Voice
      ↓
Multimodal AI
      ↓
Evidence Extraction
      ↓
Verification
      ↓
Investigation Engine
      ↓
Risk Analysis
      ↓
Evidence Graph
      ↓
Explainable Trust Report
```

---

# 14. Expected Final Product

The ideal final TrustLens demo should allow a user to:

```text
1. Open TrustLens on the iQOO phone
             ↓
2. Scan or upload suspicious evidence
             ↓
3. Ask a question using voice
             ↓
4. Let AI extract the evidence
             ↓
5. Cross-check related entities
             ↓
6. Identify positive and negative signals
             ↓
7. View the evidence graph
             ↓
8. Receive an explainable trust assessment
```

The user should leave the investigation knowing:

> **What was found, what matched, what did not match, and what they should verify next.**

---

# 15. Competition Goal

TrustLens is being designed not only to demonstrate an AI concept, but to align with the core philosophy of the iQOO Hackathon:

```text
PHONE-FIRST
     +
AI-NATIVE
     +
REAL-WORLD PROBLEM
     +
TECHNICAL DEPTH
     +
STRONG DEMO
```

The objective is to build a product that feels **useful on the phone, technically meaningful underneath, and easy to understand in a short live demonstration**.

---

## TrustLens × iQOO Hackathon 2026

> **Don't trust the name. Investigate the evidence.**

### Build for the phone.

### Investigate with AI.

### Trust the evidence.
