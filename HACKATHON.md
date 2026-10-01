# TrustLens — iQOO Hackathon 2026

## 1. Hackathon Context

**TrustLens** is being prepared for the **iQOO Hackathon 2026 Grand Finale**.

### Event

```text
Hackathon: iQOO Hackathon 2026
Stage: Grand Finale
Location: Bengaluru
Date: October 9–11, 2026
Duration: 48 Hours
Organizers: iQOO × Reskilll
Prize Pool: ₹40,00,000 across the series
```

The Grand Finale brings together top teams from the four City Battles along with eligible direct Finale registrations.

---

# 2. Grand Finale Tracks

The Grand Finale has six tracks:

| Track               | Scope                                                                   |
| ------------------- | ----------------------------------------------------------------------- |
| **Mobility**        | Navigation, EVs, public transport, parking and travel                   |
| **Community App**   | AI-powered communities for developers, professionals or interest groups |
| **Smart Living**    | Smart homes, IoT, connected devices and everyday convenience            |
| **Productivity**    | AI-powered work, automation, information and workflow solutions         |
| **Developer Tools** | AI tools for development, testing, deployment and collaboration         |
| **Open Innovation** | Any domain or idea outside the defined tracks                           |

TrustLens is best positioned under **Open Innovation**, because it addresses digital trust and investigation rather than a specific domain track.

---

# 3. Why TrustLens Fits the Grand Finale

TrustLens addresses a real-world problem:

> **How can a user determine whether a digital opportunity can actually be trusted?**

Users increasingly encounter:

```text
Internship
Job Offer
Event
Recruiter
Website
QR Code
Payment Request
Document
```

through their phones.

TrustLens turns the phone into an **AI-powered investigation device**.

```text
Phone Camera / Upload / Voice
              ↓
       Multimodal AI
              ↓
      Evidence Extraction
              ↓
       Cross Verification
              ↓
       Risk Analysis
              ↓
      Evidence Graph
              ↓
      Trust Report
```

---

# 4. Official Evaluation Criteria

The official scoring system contains **six evaluation dimensions totaling 100%**.

| Evaluation Criterion    |   Weight |
| ----------------------- | -------: |
| **End Product Quality** |  **30%** |
| **Novelty & Impact**    |  **20%** |
| **Creative Phone Use**  |  **15%** |
| **Technical Depth**     |  **15%** |
| **Office Kit Usage**    |  **10%** |
| **Demo & Presentation** |  **10%** |
| **Total**               | **100%** |

The rubric combines jury evaluation with device-based HackTracker measurements for creative phone use and Office Kit usage.

---

# 5. TrustLens Scoring Strategy

## 5.1 End Product Quality — 30%

### Judge Focus

* Does it work?
* Is it useful?
* Would people actually use it?

### TrustLens Approach

The product should provide one complete workflow:

```text
Capture Evidence
      ↓
Understand Evidence
      ↓
Verify Evidence
      ↓
Find Relationships
      ↓
Identify Risk
      ↓
Explain Result
```

Instead of presenting multiple disconnected AI features, the final build should demonstrate a reliable end-to-end investigation.

### Target

```text
✓ Working core workflow
✓ Smooth phone experience
✓ Clear investigation result
✓ Useful recommendations
✓ Explainable output
```

---

# 6. Novelty & Impact — 20%

TrustLens should not position itself as simply a:

```text
URL Checker
Spam Detector
QR Scanner
Company Search
Chatbot
```

The key idea is **relationship-based investigation**.

Example:

```text
Company
 ├── Website
 ├── Recruiter
 │     └── Email
 ├── Offer
 ├── Event
 └── Payment
```

TrustLens asks:

> **Do these pieces of evidence actually belong together?**

This allows the system to identify inconsistencies that may not be visible when checking only one signal.

---

# 7. Creative Phone Use — 15%

This is a major part of the iQOO Hackathon.

The official rules require the iQOO phone to be the build and demo surface, with camera, voice and on-device AI contributing to the creative-phone-use score.

TrustLens will use:

### Camera

```text
Scan Poster
     ↓
Extract Information
     ↓
Investigate
```

### QR

```text
Scan QR
     ↓
Extract URL
     ↓
Verify Registration Source
```

### Voice

```text
"Why is this suspicious?"
          ↓
Speech-to-Text
          ↓
Investigation
          ↓
AI Response
```

### Mobile AI

The phone should be an actual part of the investigation workflow, not simply a screen for a web application.

---

# 8. Technical Depth — 15%

TrustLens is designed as more than a single LLM prompt.

### Planned Architecture

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

### Technical Components

```text
Android / Kotlin
Python
FastAPI
Gemini Multimodal AI
OCR / Vision
REST APIs
MySQL
Verification APIs
Evidence Relationship Model
Risk Analysis
```

The technical depth comes from combining multimodal AI with structured evidence processing, verification and explainable reasoning.

---

# 9. Local / Open-Source AI

The official hackathon guide gives brownie points for having a **local or open-source model at the core**, with the phone in the loop through Office Kit.

Therefore, the final implementation should evaluate whether a local/open-source model can be incorporated into TrustLens where technically practical.

Possible architecture:

```text
                TrustLens
                    │
          ┌─────────┴─────────┐
          ↓                   ↓
   Local/Open Model       Cloud AI
          │                   │
          └─────────┬─────────┘
                    ↓
             Investigation
```

The exact model will depend on the available iQOO hardware and the performance achievable during the Finale.

---

# 10. Office Kit Usage — 10%

Office Kit connects the iQOO phone with the laptop through capabilities including:

* Screen mirroring
* Shared clipboard
* File transfer
* Remote control

The official rules state that Office Kit usage is measured through HackTracker device data.

TrustLens can use Office Kit for:

```text
iQOO Phone
     ↕
Office Kit
     ↕
Development Laptop
```

Possible usage:

```text
Phone
 ↓
Capture Evidence
 ↓
Office Kit
 ↓
Development / Processing Environment
 ↓
Investigation
 ↓
Phone
 ↓
Trust Report
```

The phone should remain central to the workflow rather than being used only at the end for presentation.

---

# 11. Demo & Presentation — 10%

The official judging criteria specify a **3–5 minute pitch**.

The TrustLens presentation should follow a simple story.

```text
1. Real Problem
       ↓
2. Suspicious Opportunity
       ↓
3. Capture Evidence
       ↓
4. AI Investigation
       ↓
5. Cross Verification
       ↓
6. Risk Signals
       ↓
7. Evidence Graph
       ↓
8. Trust Report
```

### Recommended Opening

Start with the real-world problem:

> "A friend paid ₹850 for an internship, completed the work, and later discovered that the opportunity was a scam."

Then demonstrate how TrustLens would investigate the evidence before the user commits time or money.

---

# 12. Recommended Grand Finale Demo

### Scenario

```text
Internship Offer
      ↓
Recruiter
      ↓
Email
      ↓
Website
      ↓
Registration / Payment Request
```

The user scans the offer using the iQOO phone.

TrustLens extracts:

```text
Company
Recruiter
Email
Website
Role
Fee
Registration Link
```

Then investigates their relationships.

Example result:

```text
TRUST ASSESSMENT

HIGH RISK

✓ Company identity found

× Recruiter relationship not verified
× Email/domain mismatch
× Upfront payment requested
× Payment relationship not verified
```

Then show:

```text
Evidence Graph
      ↓
Why It Is Suspicious
      ↓
Recommended Next Action
```

This demonstrates the complete product rather than a simple AI-generated answer.

---

# 13. Product Quality Priorities

Because **End Product Quality carries the highest weight (30%)**, development should prioritize a reliable core workflow over excessive features.

### Priority 1

```text
Camera → AI → Investigation → Result
```

### Priority 2

```text
Voice → Investigation → Explanation
```

### Priority 3

```text
QR → URL → Verification
```

### Priority 4

```text
Evidence Graph
```

### Priority 5

Additional advanced features.

> **A smaller working product is better than a large unfinished system.**

---

# 14. Grand Finale Build Direction

The current repository contains the **TrustLens demo/prototype**.

The Grand Finale implementation should focus on building the actual investigation engine.

### Current Demo

```text
Controlled Evidence
       ↓
Demo Investigation
       ↓
Demonstration Result
```

### Grand Finale Build

```text
Real User Evidence
       ↓
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
Investigation Engine
       ↓
Risk Analysis
       ↓
Evidence Graph
       ↓
Explainable Trust Report
```

---

# 15. Grand Finale Success Criteria

Our goal is to make TrustLens strong across all six evaluation dimensions.

| Area                 | TrustLens Goal                                      |
| -------------------- | --------------------------------------------------- |
| **Product Quality**  | Reliable end-to-end investigation                   |
| **Novelty & Impact** | Evidence relationship investigation                 |
| **Phone Use**        | Camera + QR + Voice + mobile AI                     |
| **Technical Depth**  | Multimodal AI + verification + investigation engine |
| **Office Kit**       | Meaningful phone ↔ laptop workflow                  |
| **Presentation**     | Clear 3–5 minute investigation story                |

---

# 16. Final Product Vision

TrustLens should demonstrate:

```text
              iQOO PHONE
                  │
       ┌──────────┼──────────┐
       ↓          ↓          ↓
    Camera      Voice       QR
       │          │          │
       └──────────┼──────────┘
                  ↓
          MULTIMODAL AI
                  ↓
         EVIDENCE ENGINE
                  ↓
          VERIFICATION
                  ↓
         RISK ANALYSIS
                  ↓
         EVIDENCE GRAPH
                  ↓
          TRUST REPORT
```

The objective is to build something that is:

**Phone-first. AI-native. Evidence-driven. Explainable. Useful.**

---

# 17. Important Hackathon Constraint

The official rules state that entries must be **original work built during the event window**. Open-source libraries and frameworks are allowed with attribution, but participants cannot bring in a completed application.

Therefore, the current TrustLens repository should be treated as:

```text
Design / Prototype / Preparation
```

The actual Grand Finale implementation should be developed according to the event's rules and build window.

---

# 18. TrustLens × iQOO Grand Finale

The Grand Finale opportunity is not simply about adding more features.

The goal is to demonstrate:

```text
REAL PROBLEM
     +
PHONE-FIRST EXPERIENCE
     +
MULTIMODAL AI
     +
TECHNICAL DEPTH
     +
NOVEL INVESTIGATION
     +
STRONG DEMO
```

> **Don't trust the name. Investigate the evidence.**

### TrustLens

**Investigate before you trust.**
