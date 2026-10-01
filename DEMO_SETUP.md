# TrustLens — Demo Setup

## 1. About the Demo

The current TrustLens repository contains a **working prototype/demo** created to demonstrate the proposed TrustLens concept and user experience.

The demo focuses on:

* Multimodal investigation flow
* Camera-based investigation concept
* Upload flow
* Voice interaction concept
* Controlled investigation scenarios
* Risk assessment
* Evidence relationships
* Explainable trust reports
* Investigation history

> **Note:** This is a hackathon demo/prototype. It is not the complete production TrustLens system.

---

# 2. Demo Requirements

To run the current demo, you need:

* Node.js
* npm
* Git
* A modern web browser

Recommended:

```text
Node.js 18+
npm 9+
Chrome / Edge
```

---

# 3. Clone the Repository

```bash
git clone https://github.com/Anjali112005/TrustLens.git
cd TrustLens
```

---

# 4. Install Dependencies

Run:

```bash
npm install
```

This installs the dependencies required by the demo application.

---

# 5. Start the Demo

Run:

```bash
npm run dev
```

The development server will provide a local URL similar to:

```text
http://localhost:5173
```

Open the URL in a browser.

---

# 6. Demo Flow

The recommended demonstration flow is:

```text
Open TrustLens
      ↓
Start Investigation
      ↓
Select Camera / Upload / Voice
      ↓
Provide Demo Evidence
      ↓
Run Investigation
      ↓
View Extracted Information
      ↓
Review Risk Signals
      ↓
Explore Evidence Relationships
      ↓
View Trust Report
```

---

# 7. Recommended Demo Scenario

For the hackathon presentation, use the **Suspicious Internship** scenario.

Example evidence:

```text
Company: ABC Technologies
Role: Data Science Intern
Recruiter: Rahul Sharma
Email: recruiter@gmail.com
Website: abc-technologies.example
Fee: ₹2,500
```

The demo can show signals such as:

```text
✓ Company identity found

× Recruiter not verified
× Email/domain mismatch
× Registration fee detected
× Payment relationship not verified
```

Expected final result:

```text
HIGH RISK
```

The purpose is to demonstrate how TrustLens connects multiple pieces of evidence rather than checking only the company name.

---

# 8. Other Demo Scenarios

The prototype can also demonstrate scenarios such as:

### Verified Event

```text
Event
   ↓
Official Organizer
   ↓
Official Registration
   ↓
Verified Information
```

Expected result:

```text
LOWER RISK / VERIFIED SIGNALS
```

### Suspicious Job Offer

```text
Company
   ↓
Recruiter
   ↓
Job Offer
   ↓
Processing Fee
```

Possible signals:

```text
× Recruiter mismatch
× Domain mismatch
× Processing fee
```

### Payment Request

```text
Payment Request
       ↓
Recipient
       ↓
Related Company
       ↓
Verification
```

The demo can show how payment-related evidence can become part of an investigation.

---

# 9. Understanding the Demo Results

The demo may display:

```text
Risk Score
Risk Level
Positive Signals
Negative Signals
Unknown Signals
Evidence
Relationships
Recommendation
```

Example:

```text
Risk Score: 82 / 100

HIGH RISK

Positive:
✓ Company identified

Negative:
× Recruiter mismatch
× Email mismatch
× Payment issue

Unknown:
? Recruiter relationship not verified
```

The score is a **demo investigation result** and should not be interpreted as a guaranteed fraud determination.

---

# 10. Demo Architecture

The current demo is primarily focused on the user experience.

```text
User
 ↓
TrustLens Interface
 ↓
Demo Investigation Flow
 ↓
Controlled Evidence
 ↓
Investigation Result
 ↓
Risk / Evidence View
 ↓
Trust Report
```

The complete AI-powered backend described in `ARCHITECTURE.md` is part of the **planned hackathon implementation**.

---

# 11. Demo Data

The demo uses controlled scenarios so that the investigation flow can be demonstrated consistently.

No real user documents or sensitive personal information are required.

Recommended presentation data should use:

* Sample companies
* Sample recruiters
* Sample emails
* Sample payment information
* Sample event information
* Sample documents

Avoid using real personal information during demonstrations.

---

# 12. Camera / Upload Demonstration

If camera or upload interaction is demonstrated through the prototype UI, the purpose is to show the intended multimodal workflow.

The planned hackathon implementation will connect these inputs to actual:

```text
Camera
   ↓
Image Processing
   ↓
OCR / Vision AI
   ↓
Evidence Extraction
   ↓
Investigation Engine
```

and:

```text
Document
   ↓
Document Processing
   ↓
AI Understanding
   ↓
Evidence Extraction
   ↓
Investigation Engine
```

---

# 13. Voice Demonstration

The prototype may demonstrate the intended voice interaction experience.

Example questions:

```text
"Is this internship genuine?"

"Why is this suspicious?"

"Show me the negative evidence."

"What company is this?"

"Can I trust this registration link?"
```

The planned hackathon implementation will connect:

```text
Voice
 ↓
Speech-to-Text
 ↓
Investigation Query
 ↓
AI / Investigation Engine
 ↓
Response
 ↓
Text-to-Speech
```

---

# 14. Hackathon Implementation Direction

The demo is the starting point for the planned implementation.

The hackathon version is intended to add:

```text
Android / Kotlin
       ↓
FastAPI
       ↓
Gemini Multimodal AI
       ↓
OCR / Vision / Document Understanding
       ↓
Entity Extraction
       ↓
Verification APIs / Trusted Sources
       ↓
Investigation Engine
       ↓
Risk Analysis
       ↓
Evidence Graph
       ↓
Trust Report
```

See:

* `PROJECT.md`
* `ARCHITECTURE.md`
* `AI_ENGINE.md`

for the planned technical architecture.

---

# 15. Troubleshooting

### `npm` is not recognized

Install Node.js and restart the terminal.

Check:

```bash
node --version
npm --version
```

---

### Dependencies are missing

Run:

```bash
npm install
```

again.

---

### Port is already in use

Stop the process using the port or start the development server using another available port.

---

### Blank page

Check the terminal for build errors and verify that all dependencies were installed successfully.

---

# 16. Demo Presentation Checklist

Before presenting:

```text
□ Repository opens correctly
□ npm install completed
□ Demo starts successfully
□ Main screen loads
□ Investigation flow works
□ Sample scenario is ready
□ Risk result is visible
□ Evidence relationships are visible
□ Trust report is ready
□ No real personal data is used
```

---

# 17. Important Demo Note

TrustLens currently demonstrates the **concept, workflow, and user experience** through a controlled prototype.

The hackathon implementation will focus on building the underlying:

* Multimodal AI
* Evidence extraction
* Entity resolution
* Verification
* Investigation engine
* Risk analysis
* Evidence graph
* Explainable reporting

The repository should therefore distinguish clearly between:

```text
CURRENT DEMO
     ↓
What is demonstrated today

HACKATHON BUILD
     ↓
What we plan to implement
```

---

## TrustLens

> **Don't trust the name. Investigate the evidence.**
