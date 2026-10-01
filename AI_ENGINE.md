# TrustLens — AI Engine

## 1. Overview

The TrustLens AI Engine is the intelligence layer responsible for understanding user-provided evidence and helping the investigation system identify entities, relationships, inconsistencies, and risk signals.

The current repository contains a **demo/prototype**. The AI architecture described here represents the **planned implementation for the hackathon**.

The core idea is:

```text
User Evidence
      ↓
Multimodal AI
      ↓
Information Extraction
      ↓
Entity Resolution
      ↓
Evidence Analysis
      ↓
Risk Signals
      ↓
Explanation
```

---

# 2. AI Responsibilities

The planned AI engine will handle:

* Image understanding
* OCR / text extraction
* Document understanding
* Entity extraction
* Entity normalization
* Relationship identification
* Evidence comparison
* Risk signal detection
* Natural-language reasoning
* Trust report generation
* Voice query understanding

---

# 3. Multimodal Input

TrustLens is designed to work with different types of evidence.

```text
Camera
   │
Upload
   │
Screenshot
   │
PDF / Document
   │
Voice
   │
Text
   ↓
AI Processing Layer
```

### Example Inputs

```text
Internship Poster
Job Offer
Event Poster
QR Code
Website Screenshot
Email Screenshot
WhatsApp Conversation
Payment Screenshot
Offer Letter
```

---

# 4. Planned AI Stack

The primary AI technology planned for the hackathon is **Gemini multimodal AI**.

It will be used for:

* Image understanding
* Document understanding
* Text analysis
* Entity extraction
* Evidence interpretation
* Reasoning
* Report generation

Additional OCR or supporting AI services may be used where required.

---

# 5. AI Processing Pipeline

```text
Raw Evidence
      ↓
Input Classification
      ↓
Vision / OCR / Document Understanding
      ↓
Text & Entity Extraction
      ↓
Entity Normalization
      ↓
Relationship Identification
      ↓
Evidence Comparison
      ↓
Risk Signal Detection
      ↓
AI Reasoning
      ↓
Trust Report
```

---

# 6. Input Classification

The first stage determines what type of evidence has been provided.

Example:

```text
Image
 ├── Poster
 ├── QR Code
 ├── Screenshot
 ├── Document
 └── Website

Document
 ├── Offer Letter
 ├── Certificate
 └── Brochure

Voice
 └── Investigation Question
```

This helps determine the appropriate processing flow.

---

# 7. Information Extraction

The AI will convert unstructured evidence into structured information.

### Example

Input:

```text
Internship Poster
```

AI output:

```text
Company: ABC Technologies
Role: Data Science Intern
Recruiter: Rahul Sharma
Email: recruiter@gmail.com
Website: abc-technologies.example
Fee: ₹2,500
Location: Hyderabad
```

The extracted information becomes evidence for the investigation engine.

---

# 8. Entity Extraction

The AI will identify entities such as:

```text
Company
Person
Recruiter
Email
Website
Domain
Phone
Event
Organizer
Location
Payment
UPI ID
QR Code
Offer
Role
Fee
Registration Link
```

Example:

```text
"Rahul from ABC Technologies asked me to pay ₹2,500."

Entities:

Person → Rahul
Company → ABC Technologies
Amount → ₹2,500
Action → Payment Request
```

---

# 9. Entity Normalization

Different representations of the same entity should be normalized.

Example:

```text
ABC Technologies Pvt Ltd
ABC Technologies
abc technologies
abc-technologies.example
```

The system attempts to determine whether these references represent the same entity.

Normalization can include:

* Name normalization
* Email normalization
* Domain normalization
* URL normalization
* Phone normalization
* Organization matching

---

# 10. Relationship Extraction

The AI engine identifies relationships between entities.

Example:

```text
Company ↔ Recruiter
Company ↔ Website
Company ↔ Email
Company ↔ Offer
Recruiter ↔ Email
Payment ↔ Company
Event ↔ Organizer
QR ↔ Registration Link
```

The resulting structure can be represented as:

```text
Company
   │
   ├── Website
   ├── Recruiter
   │      └── Email
   ├── Offer
   └── Payment
```

---

# 11. Evidence Comparison

The investigation engine compares extracted evidence with available verification information.

Example:

```text
Evidence:

Company → ABC Technologies
Recruiter Email → recruiter@gmail.com

Verification:

Official Company Domain → abc-technologies.example
Official Contact → careers@abc-technologies.example
```

Possible signal:

```text
× Email Domain Mismatch
```

The AI should explain the difference rather than simply returning a negative label.

---

# 12. Risk Signal Detection

The planned system will detect signals such as:

### Positive Signals

```text
✓ Official Website Match
✓ Company Identity Match
✓ Official Registration Source
✓ Recruiter Relationship Match
```

### Negative Signals

```text
× Domain Mismatch
× Recruiter Mismatch
× Payment Recipient Mismatch
× Suspicious Fee
× Unverified Claim
× Registration Link Mismatch
```

### Unknown Signals

```text
? Insufficient Evidence
? Source Not Available
? Relationship Cannot Be Verified
```

An unknown result should not automatically be treated as suspicious.

---

# 13. AI Reasoning

The AI reasoning layer combines evidence and investigation results.

Example:

```text
Evidence:
Company exists.

Evidence:
Recruiter uses Gmail.

Evidence:
Official company website uses a different domain.

Evidence:
User is asked for an upfront payment.

Conclusion:
Multiple inconsistencies require caution.
```

The AI should produce reasoning based on the available evidence rather than inventing missing information.

---

# 14. Risk Assessment

The investigation engine can convert detected signals into an overall risk assessment.

Example:

```text
Risk Score: 82 / 100

HIGH RISK

Reasons:
× Recruiter mismatch
× Email/domain mismatch
× Upfront payment request
× Payment relationship not verified
```

The exact scoring mechanism will be implemented during the hackathon.

The score should be treated as an **investigation aid**, not an absolute prediction of fraud.

---

# 15. Evidence-Based Prompting

The AI should be instructed to reason only from:

```text
User Evidence
+
Verified Information
+
Investigation Results
```

A simplified reasoning structure is:

```text
INPUT
  ↓
What information is present?
  ↓
What entities are identified?
  ↓
What relationships exist?
  ↓
What can be verified?
  ↓
What matches?
  ↓
What conflicts?
  ↓
What remains unknown?
  ↓
What risk signals exist?
  ↓
What should the user know?
```

This helps reduce unsupported conclusions.

---

# 16. Voice AI

Voice interaction will allow users to ask investigation questions naturally.

Examples:

```text
"Is this internship genuine?"

"Why is this suspicious?"

"What evidence did you find?"

"Show me the negative evidence."

"Can I trust this registration link?"

"Where can I officially register?"
```

Planned flow:

```text
User Voice
    ↓
Speech-to-Text
    ↓
Question Understanding
    ↓
Investigation Engine
    ↓
AI Response
    ↓
Text-to-Speech
```

---

# 17. Trust Report Generation

The AI will convert technical investigation results into a simple user-facing explanation.

Example:

```text
TRUST ASSESSMENT

Risk: HIGH

Evidence Found:
✓ Company identity found
✓ Official website found

Issues:
× Recruiter could not be verified
× Email domain does not match
× Upfront payment requested

Recommendation:
Verify the opportunity through the company's
official website before making any payment.
```

The report should remain understandable to a non-technical user.

---

# 18. Current Demo vs Planned AI

| AI Capability          | Current Demo  | Hackathon Plan            |
| ---------------------- | ------------- | ------------------------- |
| AI Investigation UI    | ✅             | Extend                    |
| Controlled Scenarios   | ✅             | Keep for testing          |
| Image Understanding    | Demo concept  | Gemini                    |
| OCR                    | Demonstration | AI/OCR integration        |
| Document Understanding | Demo concept  | Gemini                    |
| Entity Extraction      | Demonstration | Functional AI pipeline    |
| Entity Resolution      | Demonstration | Implement                 |
| Relationship Analysis  | Demonstration | Implement                 |
| Verification           | Controlled    | APIs / trusted sources    |
| Risk Analysis          | Demo          | Dynamic                   |
| AI Reasoning           | Demo concept  | Gemini                    |
| Voice AI               | Concept       | Speech-to-Text + AI + TTS |
| Trust Report           | Demo          | AI-generated              |

---

# 19. AI Safety and Reliability

TrustLens should avoid making unsupported claims.

The AI should:

* Clearly distinguish verified information from assumptions.
* Identify insufficient evidence.
* Avoid treating unknown information as proof of fraud.
* Explain important conclusions.
* Show supporting evidence where possible.
* Avoid fabricating company, recruiter, event, or payment information.

The final decision should remain with the user.

---

# 20. AI Engine Goal

The goal of the hackathon implementation is to move from:

```text
Demo Scenario
      ↓
Predefined Result
```

towards:

```text
Real User Evidence
      ↓
Multimodal AI
      ↓
Extracted Evidence
      ↓
Entity Relationships
      ↓
Verification
      ↓
Risk Signals
      ↓
AI Reasoning
      ↓
Explainable Trust Report
```

The AI engine is therefore not intended to be just a **"fake detector"**.

It is designed as an **evidence-driven investigation layer** that helps users understand what they can verify, what does not match, what remains unknown, and why caution may be required.

> **Don't trust the name. Investigate the evidence.**
