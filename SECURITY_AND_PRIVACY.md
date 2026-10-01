# TrustLens — Security & Privacy

## 1. Overview

TrustLens may process information that can be sensitive, including:

* Offer letters
* Job and internship documents
* Email screenshots
* WhatsApp screenshots
* Recruiter information
* Phone numbers
* Websites and URLs
* QR codes
* Payment information
* Event registration details

Security and privacy are therefore important parts of the planned TrustLens architecture.

> **TrustLens should investigate evidence without unnecessarily exposing or retaining user data.**

---

# 2. Current Demo

The current TrustLens prototype uses **controlled/demo scenarios**.

It does not require users to provide real sensitive personal information for the demonstration.

Recommended demo data should use:

* Sample names
* Sample companies
* Sample email addresses
* Sample payment details
* Sample documents
* Sample events

Real personal information should not be used during demonstrations.

---

# 3. Planned Privacy Architecture

The hackathon implementation will follow a **data-minimization approach**.

```text id="nyq7qu"
User Evidence
      ↓
Secure Transmission
      ↓
AI / Processing
      ↓
Extract Required Information
      ↓
Investigation
      ↓
Return Result
      ↓
Minimize / Delete Temporary Data
```

Only information required for the investigation should be processed.

---

# 4. Data Protection

The planned system should protect data during:

### Transmission

Use secure HTTPS communication between:

```text id="s1l44x"
Android App
      ↕
FastAPI Backend
      ↕
External AI / Verification APIs
```

### Storage

Sensitive information should not be stored unnecessarily.

Where storage is required, appropriate access controls and database security should be applied.

---

# 5. Sensitive Data Handling

TrustLens may encounter information such as:

```text id="5j0e0d"
Name
Email
Phone
Address
Payment Details
Documents
Recruiter Information
```

The system should:

* Process only necessary information.
* Avoid unnecessary permanent storage.
* Restrict access to investigation data.
* Avoid exposing sensitive information in logs.
* Avoid using real personal information in demo scenarios.

---

# 6. AI Data Handling

The planned AI layer may process user-provided:

* Images
* Documents
* Text
* Screenshots
* Voice input

The application should clearly define what data is sent to external AI services.

Where possible:

```text id="5dgj31"
User Data
    ↓
Required Processing
    ↓
AI Analysis
    ↓
Result
```

Temporary data should not be retained longer than necessary.

---

# 7. Authentication & Authorization

If user accounts are introduced in the hackathon implementation, the backend should use authentication and authorization controls.

Users should only be able to access investigations associated with their account.

Conceptually:

```text id="zq4w8m"
User
 ↓
Authentication
 ↓
Authorization
 ↓
User's Investigations
```

---

# 8. Database Security

The planned MySQL database may contain:

```text id="9ld1cq"
Users
Investigations
Evidence Metadata
Entities
Relationships
Risk Signals
Reports
```

Security measures should include:

* Restricted database access
* Strong credentials
* Environment variables for secrets
* No hardcoded passwords
* Input validation
* Controlled database permissions

---

# 9. API Security

The FastAPI backend should protect API endpoints through:

* Input validation
* Authentication where required
* Rate limiting where appropriate
* Secure API keys
* HTTPS
* Error handling
* Request-size limits
* Protection against malformed input

API keys and secrets must never be committed to GitHub.

Example:

```text id="7x0ndm"
.env
API_KEY=********
DATABASE_URL=********
```

The `.env` file should be included in `.gitignore`.

---

# 10. File Upload Security

Since TrustLens is designed to process documents and images, uploaded files should be handled carefully.

Planned controls include:

* File-type validation
* File-size limits
* Safe temporary storage
* Restricted file access
* Temporary-file cleanup
* Protection against malicious uploads

Only supported file formats should be accepted.

---

# 11. QR & URL Safety

TrustLens may analyze QR codes and URLs.

A scanned URL should be treated as **untrusted input**.

The system should not automatically perform unsafe actions such as:

* Automatically submitting forms
* Automatically downloading unknown files
* Automatically executing content
* Automatically making payments

Instead, the URL should be analyzed and presented to the user for review.

---

# 12. Evidence Integrity

TrustLens should distinguish between:

```text id="qz0n7k"
USER-PROVIDED EVIDENCE
        ↓
VERIFIED INFORMATION
        ↓
AI INTERPRETATION
        ↓
SYSTEM CONCLUSION
```

The system should not present AI-generated assumptions as verified facts.

---

# 13. Explainability & Safety

TrustLens should clearly communicate uncertainty.

Possible states include:

```text id="qjp9t7"
✓ VERIFIED / MATCH
× MISMATCH
? UNVERIFIED
? INSUFFICIENT EVIDENCE
```

An unknown or unavailable source should not automatically be treated as proof of fraud.

The user should be able to understand which evidence contributed to an assessment.

---

# 14. Risk Score Disclaimer

TrustLens risk scoring is intended to support investigation.

It is **not**:

* A legal decision
* A financial decision
* A guaranteed fraud prediction
* An official company certification
* A regulatory determination

Example:

```text id="c6n6pm"
HIGH RISK
     ≠
PROVEN FRAUD
```

The final decision remains with the user.

---

# 15. Logging

Application logs should avoid storing sensitive information unnecessarily.

Avoid logging:

```text id="3pmcwj"
Passwords
API Keys
Full Documents
Payment Credentials
Private Messages
Personal Information
```

Logs should primarily contain technical information required for debugging and monitoring.

---

# 16. Secrets Management

Sensitive configuration should be stored using environment variables or secure secret-management mechanisms.

Never commit:

```text id="t7gdg1"
API Keys
Database Passwords
Access Tokens
Private Credentials
```

to the Git repository.

The repository should contain a safe example such as:

```text id="4kq5f5"
.env.example
```

with placeholder values.

---

# 17. Privacy by Design

The planned TrustLens architecture follows these principles:

### Data Minimization

Collect only what is necessary.

### Purpose Limitation

Use evidence only for the requested investigation.

### Transparency

Tell users what information is being processed.

### Security

Protect data during transmission and storage.

### User Control

Users should remain in control of their investigation data.

### Limited Retention

Avoid keeping temporary evidence longer than required.

---

# 18. Security Checklist

Before a hackathon deployment:

```text id="y1x3cv"
□ HTTPS enabled
□ API keys stored securely
□ .env excluded from Git
□ Database credentials protected
□ Input validation enabled
□ File upload limits configured
□ Sensitive data excluded from logs
□ Demo uses synthetic data
□ External API permissions reviewed
□ Temporary files cleaned
□ Authentication added where required
```

---

# 19. Current Status

### Current Demo

```text id="v8f7g0"
Controlled Data       → Yes
Real User Data        → Not Required
Production Security   → Not Implemented
External AI Security  → Not Fully Integrated
```

### Hackathon Plan

```text id="g8g4r8"
Secure API Communication
Data Minimization
Input Validation
Secret Management
Controlled Storage
Sensitive Logging Controls
Secure File Processing
```

These controls will be implemented according to the final architecture and services used during the hackathon.

---

## TrustLens Security Principle

> **Collect less. Protect what you collect. Explain what you use.**

TrustLens is designed to help users investigate suspicious digital opportunities while keeping privacy and security as core requirements of the planned implementation.
