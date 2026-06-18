# CLAUDE.md — Chirag OS / AI Venture Operating System

This file defines the development rules, visual style, architecture, logging system, and implementation expectations for **Chirag OS**, a premium AI Venture Operating System website for **Chirag Natesh Vijay**.

This file must be treated as the main project memory for Claude Code.

---

# 1. Project Identity

## Project Name

**Chirag OS**

## Subtitle

**AI Venture Operating System**

## Core Concept

Build a premium, creative, technically impressive portfolio website that feels like a personal operating system for an AI engineer and venture builder.

This must not look like:

* A generic AI website
* A normal student portfolio
* A basic résumé page
* A template landing page
* A simple list of projects
* A generic “neon robot” AI site

It should feel like:

* A founder command center
* A personal AI systems lab
* A premium technical portfolio
* A venture-building dashboard
* A living operating system for Chirag’s AI engineering, research, ventures, and public projects

---

# 2. Main Positioning

## Person

**Chirag Natesh Vijay**

## Role

**AI Engineer × Venture Builder**

## Core Message

> I engineer intelligent systems and build ventures around real-world problems.

## Expanded Message

> I design and build AI systems across agentic AI, RAG, applied machine learning, explainability, multimodal AI, and AI-native product development. My work connects technical depth with entrepreneurship, especially around responsible AI adoption in complex and regulated environments.

## Current Mission

> Building Cellvara: an AI enablement and decision-intelligence platform helping pharma and biotech teams adopt AI faster, more safely, and with greater operational clarity.

---

# 3. Design Goal

The site should create the feeling that the visitor is entering Chirag’s personal AI operating system.

The design should be:

* Premium
* Dark
* Sharp
* Creative
* Experimental
* Serious
* Technical
* Founder-like
* Elegant
* Highly polished
* Visually memorable
* Easy to navigate

The website must balance creativity with credibility.

It should be impressive enough for startup people, but structured enough for recruiters and companies.

---

# 4. Recommended Tech Stack

Use a modern, production-grade frontend stack.

## Required

* Next.js latest stable version
* React latest stable version
* TypeScript
* Tailwind CSS latest stable version
* App Router
* HTML5 semantic structure
* CSS custom properties for design tokens
* Framer Motion or Motion for animation
* Lucide React for icons
* ESLint
* Prettier

## Recommended

* shadcn/ui for accessible base components, but heavily customised
* React Flow for architecture diagrams
* MDX or typed content files for structured content
* Fuse.js for local search
* next-seo or native metadata API for SEO
* clsx and tailwind-merge for class composition
* Zod for validating content objects
* next/image for images
* next/font for fonts

## Do Not Use

* Bootstrap
* Generic template libraries
* Heavy animation libraries that hurt performance
* Random AI-generated stock visuals
* Overly large dependencies without reason
* Inline styles everywhere
* One huge component file

---

# 5. Development Philosophy

Build this like a real AI product, not a portfolio template.

Every design and code decision should support the idea of an **AI Venture Operating System**.

## Engineering Principles

* Component-first architecture
* Strong TypeScript types
* Reusable content models
* Clear file structure
* Good naming conventions
* Accessible UI
* Responsive by default
* Performance-conscious animations
* No fake claims
* No private or confidential information
* Separate content from layout
* Make the site easy to update later

## Product Principles

* The visitor should understand Chirag’s story quickly
* The website should show proof, not just claims
* Technical depth should be visible but not overwhelming
* Ventures and AI systems should be separated clearly
* The site should communicate both engineering and entrepreneurship
* The homepage should feel like a command center
* Every major section should have a clear purpose

---

# 6. Visual Style Guide

## Core Visual Direction

Use a dark premium AI interface with:

* Deep navy / black background
* Subtle grid systems
* Glassmorphism cards
* Thin borders
* Light glow effects
* Soft gradients
* Monospace system labels
* Large bold headings
* Calm animations
* Architecture-like visuals
* Dashboard modules
* Interactive cards
* Floating panels
* Elegant microinteractions

## Color Tokens

Use these as base CSS variables or Tailwind theme values:

```css
:root {
  --background-primary: #050816;
  --background-secondary: #0a1020;
  --background-tertiary: #111827;

  --card-bg: rgba(255, 255, 255, 0.05);
  --card-bg-strong: rgba(255, 255, 255, 0.08);
  --card-border: rgba(255, 255, 255, 0.1);
  --card-border-strong: rgba(255, 255, 255, 0.18);

  --text-primary: #f8fafc;
  --text-secondary: #cbd5e1;
  --text-muted: #94a3b8;
  --text-faint: #64748b;

  --accent-engineering: #38bdf8;
  --accent-ai: #8b5cf6;
  --accent-venture: #10b981;
  --accent-research: #f472b6;
  --accent-warning: #f59e0b;
  --accent-danger: #ef4444;

  --glow-blue: rgba(56, 189, 248, 0.35);
  --glow-purple: rgba(139, 92, 246, 0.35);
  --glow-green: rgba(16, 185, 129, 0.3);
}
```

## Typography

Use a modern, premium type system.

Recommended:

* Headings: `Geist`, `Satoshi`, `Space Grotesk`, or `Inter`
* Body: `Inter`, `Geist Sans`, or similar
* Technical labels: `JetBrains Mono`, `Geist Mono`, or similar

Typography rules:

* Headings should be large, confident, and clean
* Body text should be readable and not too small
* Monospace should be used for system labels, statuses, timestamps, tags, and metadata
* Avoid decorative fonts
* Avoid excessive uppercase paragraphs

---

# 7. Animation Rules

Use animation to make the website feel alive, but not chaotic.

## Good Animation

* Soft fade-up on scroll
* Slow-moving background grid
* Hover glow on cards
* Smooth tab transitions
* Architecture nodes lighting up
* Command palette opening
* Status indicators pulsing subtly
* Floating cards moving very slowly
* Section reveals with staggered children

## Bad Animation

* Spinning robots
* Constant bouncing elements
* Excessive parallax
* Flashing neon
* Too many things moving at once
* Animations that reduce readability
* Motion that feels like a gaming website

## Accessibility

Respect reduced motion.

If `prefers-reduced-motion` is enabled, reduce or remove decorative animations.

---

# 8. Website Structure

Build the site with these main sections.

```text
1. Sticky Navigation
2. Hero / System Startup Screen
3. Mission Control Dashboard
4. Current Mission: Cellvara
5. Featured AI Systems
6. Venture Portfolio
7. Architecture Explorer
8. Proof and Metrics Dashboard
9. Braided Journey Timeline
10. Research and Innovation
11. Capability Map
12. Credentials Preview
13. Writing / Public Thinking Preview
14. About Chirag
15. Contact and Collaboration Paths
16. Footer
```

The first version should focus on a complete homepage. Later, sections can become full pages.

---

# 9. Required Page Feel

The homepage should feel like this:

```text
CHIRAG OS
System online.

A modular operating system showing:
- Current venture
- AI systems
- Research nodes
- Engineering capabilities
- Founder journey
- Public builds
- Collaboration paths
```

The user should feel like they are exploring a living technical system.

---

# 10. Navigation

## Navbar Items

* Command Center
* Ventures
* AI Systems
* Research
* Journey
* Credentials
* Contact

## Utility Actions

* GitHub
* LinkedIn
* Download CV
* Let’s Connect

## Optional Advanced Feature

Add a command palette opened by:

```text
Cmd + K
Ctrl + K
```

Command palette actions:

* Open Cellvara
* Show AI systems
* Show agentic AI projects
* Show RAG projects
* Show venture projects
* Show research
* Show education
* Download CV
* Open GitHub
* Open LinkedIn
* Contact Chirag

---

# 11. Hero Section

## Label

```text
SYSTEM ONLINE
CHIRAG OS / AI VENTURE OPERATING SYSTEM
```

## Main Heading

```text
I engineer intelligent systems and build ventures around real-world problems.
```

## Description

```text
AI engineer, researcher, and entrepreneur working across agentic AI, RAG, applied machine learning, explainable systems, multimodal AI, and AI-native product development.
```

## Current Status

```text
CURRENTLY BUILDING: Cellvara — responsible AI adoption infrastructure for pharma and biotech teams.
```

## CTA Buttons

Primary:

```text
Explore AI Systems
```

Secondary:

```text
Explore Ventures
```

Other:

```text
View Journey
Download CV
Contact Chirag
```

## Hero Badges

* Agentic AI
* RAG
* Applied ML
* Explainable AI
* Multimodal Systems
* AI Product Strategy
* Startup Building

## Hero Visual

Create a right-side animated dashboard with floating cards:

* Agentic AI Systems
* Applied ML
* Founder Ventures
* RAG + LLM Products
* Responsible AI
* Research
* Product Strategy

Do not use a generic avatar unless the user provides a specific image.

---

# 12. Mission Control Dashboard

Create a dashboard grid with six panels.

## Panel 1 — Current Venture

Title:

```text
Cellvara
```

Description:

```text
AI enablement and governance infrastructure for pharma and biotech SMEs.
```

Status pills:

* Active Venture
* Customer Discovery
* Prototype Development
* Pilot Exploration
* Private Repository

## Panel 2 — Engineering Focus

Items:

* Agent orchestration
* Enterprise RAG
* Structured outputs
* Human-in-the-loop workflows
* AI evaluation
* Explainable implementation guidance
* Responsible AI adoption

## Panel 3 — Professional Role

Title:

```text
Hilti — Working Student AI
```

Mark exact public title, dates, and responsibilities as:

```text
needs verification
```

Do not invent internal company work.

## Panel 4 — Current Education

Title:

```text
Hochschule Neu-Ulm
```

Subtitle:

```text
M.Sc. International Entrepreneurship, Digitalization and Sustainability
```

Associated concepts:

* Entrepreneurship
* Digital transformation
* Business models
* Sustainability
* Impact measurement
* Venture development

## Panel 5 — Latest Public Build

Rotate or feature one of:

* PrepAI
* ForgeFoundry
* MedAssist MAS
* DocChat
* Speech Analyzer AI
* Vidintel

## Panel 6 — Research Question

Text:

```text
How can organisations adopt advanced AI systems without sacrificing explainability, governance, operational trust, or human accountability?
```

---

# 13. Current Mission: Cellvara

This is one of the most important sections.

## Section Title

```text
Current Mission: Cellvara
```

## Subtitle

```text
Responsible AI adoption infrastructure for pharma and biotech teams.
```

## Problem

Many smaller and mid-sized regulated companies want to use AI but face:

* Fragmented AI tooling
* Unclear implementation pathways
* Compliance concerns
* Limited internal AI expertise
* Expensive external consulting
* Difficulty matching AI tools to real workflows
* Lack of traceable implementation evidence

## Solution

Cellvara offers three connected capabilities.

### 1. AI Consultant-Grade Recommendations

* Explainable implementation steps
* Evidence-backed recommendations
* Traceable reasoning
* Action-oriented workflow guidance
* Tool and process suggestions mapped to business goals

### 2. Role-Specific Compliance-Aware Enablement

Target roles:

* R&D
* Quality assurance
* Regulatory affairs
* Pharmacovigilance
* Operations
* Leadership / innovation teams

### 3. Workflow Mapping and Tool Orchestration

* Map workflows to appropriate AI tools
* Evaluate tool fit and readiness
* Connect tools into coherent operating workflows
* Reduce disconnected AI experimentation
* Support human review and governance

## Important Rules

* Do not expose private Cellvara code
* Do not invent pilots or customers
* Do not show confidential interviews
* Do not make unsupported compliance claims
* Use careful language such as “designed to support” rather than “fully compliant”

---

# 14. Featured AI Systems

Show six to eight strong systems. Do not show every GitHub repository here.

## Featured Systems

### 1. DocChat

Summary:

```text
Verified multi-agent RAG for reliable document intelligence.
```

Tags:

* RAG
* LangChain
* Vector DB
* Verification
* Document AI
* Multi-Agent

### 2. PrepAI / InterviewPrep

Summary:

```text
AI interview-preparation platform that converts a résumé and job description into a personalised mock interview and coach-style report.
```

Tags:

* LangGraph
* FastAPI
* Gradio
* LangChain
* Whisper
* ElevenLabs
* Pydantic

### 3. MedAssist MAS

Summary:

```text
Safety-oriented multi-agent educational triage assistant with structured outputs and deterministic red-flag checks.
```

Tags:

* AutoGen
* Gradio
* Pydantic
* Healthcare AI
* Multi-Agent
* Safety

Required disclaimer:

```text
Educational decision-support demo only. Not a diagnostic or medical-care system.
```

### 4. Speech Analyzer AI

Summary:

```text
AI meeting assistant that transcribes spoken content, normalises domain terminology, and creates structured minutes and action items.
```

Tags:

* Whisper
* Speech AI
* LangChain
* IBM watsonx
* Meeting Automation

### 5. AI NourishBot

Summary:

```text
Multimodal nutrition assistant that interprets food images and generates ingredient, nutritional, and recipe insights.
```

Tags:

* Multimodal AI
* Vision
* CrewAI
* WatsonX
* Nutrition AI

### 6. Banking Fraud Detector

Summary:

```text
Production-oriented fraud-detection architecture designed around latency, recall, throughput, drift, and security constraints.
```

Important:

Show metrics as design targets unless verified as achieved.

### 7. Vidintel

Summary:

```text
YouTube intelligence application for transcript extraction, summarisation, and grounded video question answering.
```

Tags:

* YouTube transcripts
* FAISS
* WatsonX
* RAG
* Summarisation

### 8. Job Applying Buddy

Summary:

```text
CrewAI-based workflow that generates tailored job-application materials from a vacancy, résumé, GitHub profile, and personal summary.
```

Tags:

* CrewAI
* Gradio
* Resume AI
* Cover Letter AI
* PDF Generation

---

# 15. Venture Portfolio

Separate ventures from technical projects.

## Cellvara

Status:

```text
Active Venture
```

Description:

```text
AI enablement and governance infrastructure for pharma and biotech SMEs.
```

## ForgeFoundry

Status:

```text
Public Build / Venture Experiment
```

Description:

```text
AI co-founder platform that turns raw startup ideas into structured business narratives, GTM plans, landing pages, and investor-ready pitch decks.
```

## Afterz

Status:

```text
Prototype / Paused / Archived Experiment
```

Description:

```text
A nightlife discovery and social-connections concept helping people discover nearby events, understand who is attending, and form spontaneous plans.
```

If exact status is unclear, mark as:

```text
needs verification
```

---

# 16. Architecture Explorer

This should be a signature feature.

## Purpose

Show how Chirag thinks about systems, not just what he built.

## Systems to Include

* DocChat
* PrepAI
* MedAssist MAS
* Speech Analyzer AI
* Vidintel
* ForgeFoundry
* Cellvara conceptual architecture

## Node Details

Each architecture node should show:

* Responsibility
* Input
* Output
* Technology
* Failure mode
* Validation method

## Example: PrepAI

```text
Resume + Job Description
        ↓
Profile Extraction Agent
        ↓
Gap Analysis
        ↓
Interview Script Builder
        ↓
Candidate Response
        ↓
Evaluator Agent
        ↓
Coach Agent
        ↓
Final Report
```

## Example: MedAssist MAS

```text
User Symptoms
        ↓
Red-Flag Pre-Check
        ↓
Diagnosis Agent
        ↓
Pharmacy Agent
        ↓
Consultation Agent
        ↓
Structured JSON Output
        ↓
Validated UI Response
```

## Example: Vidintel

```text
YouTube URL
        ↓
Transcript Extraction
        ↓
Chunking
        ↓
Embedding
        ↓
FAISS Index
        ↓
Similarity Retrieval
        ↓
Summary / Q&A Generation
```

Use React Flow if it fits well. Otherwise build custom interactive cards.

---

# 17. Project Explorer

Use filters and categories.

## Categories

### Agentic AI and RAG

* PrepAI / InterviewPrep
* DocChat
* MedAssist MAS
* Job Applying Buddy
* Simple Agent
* Medical Chatbot
* Chatbots

### Generative and Multimodal AI

* AI NourishBot
* FoodieBot
* Vidintel
* Speech Analyzer AI
* Artificial Art Generation
* Diffusers
* Jazz Music Generation

### Computer Vision

* YOLO Car Detection
* Image Segmentation
* COVID-19 Detection using ResNets
* Artificial Art Generation
* Agriculture Drone

### Machine Learning and Data

* Banking Fraud Detector
* Stock Prediction
* Data Mining Hack
* Data Cleaning
* Data Visualisation Practice
* DSC
* Big Data IPL Simulation

### IoT and Embedded Systems

* Agriculture Drone
* Connected Living Spaces
* Arduino ESP32
* Blynk-related work
* Home Automation

### Software Engineering Foundations

* E-Voting DBMS
* Compiler Design
* Android Me
* Online Grocery Store
* Web Store
* Web Technology projects
* Telegram Bot
* IPL Match Simulator
* Cryptocurrency Projects
* Data Structures
* HackerRank Solutions

---

# 18. Proof and Metrics

Use only defensible metrics.

Allowed if verified or labelled clearly:

* 50+ public GitHub repositories
* Multiple public agentic AI and RAG systems
* Patent holder
* Published researcher
* Applied ML experience in industrial contexts
* Experience with production-scale data workflows
* Founder of Cellvara
* Builder of multiple AI product prototypes

Use Bosch-related metrics only after verification:

* 100,000+ rows/day industrial data workflows
* ETL pipeline improved from 3 hours to 8 minutes
* Applied ML and explainability for e-bike acoustic/vibration data

Do not use fake metrics.

Avoid:

* “World-class”
* “10x engineer”
* “Guaranteed results”
* “Fully compliant”
* “Clinically accurate”
* “Production-ready” unless verified

---

# 19. Braided Journey Timeline

Create a modern multi-track timeline.

## Tracks

* Engineering
* Research
* Entrepreneurship
* Education

## Timeline Entries

### PES University

* B.Tech. Computer Science and Engineering
* Graduated with distinction
* Technical foundations
* Entrepreneurship courses
* Early engineering projects

### University of Passau

* M.Sc. Computer Science
* Artificial Intelligence specialisation
* Machine learning
* Deep learning
* Explainability
* Applied thesis work

### FORWISS / Research Assistant

* Signal and data-processing research
* NetCDF / HDF5
* Compression of wavelet-based signals
* Research software
* Publication contribution

Mark exact title and dates as `needs verification`.

### Bosch eBike Systems

* Applied ML and data science work
* Master’s thesis
* Acoustic and vibration data
* Explainable machine learning
* Industrial-scale data pipeline
* Model interpretation

Mark exact title, dates, and approved metrics as `needs verification`.

### Startup Ecosystem

* Cyber Valley AI Incubator
* UnternehmerTUM Startup Launchpad
* Hackathons
* Makeathons
* AI builder programmes
* Founder experiments

### Hochschule Neu-Ulm

* M.Sc. International Entrepreneurship, Digitalization and Sustainability
* Entrepreneurship
* Digital transformation
* Business models
* Sustainability
* Impact measurement
* Venture development

### Hilti

* Working Student AI
* Current professional role
* Industrial AI context
* Applied AI and workflow thinking

Mark exact public title and responsibilities as `needs verification`.

### Cellvara

* Current venture
* Responsible AI adoption
* Pharma and biotech SMEs
* Workflow mapping
* AI enablement
* Governance-aware recommendations

---

# 20. Capability Map

Do not build a generic skill logo wall.

Every skill should connect to proof.

## Agent Orchestration

* LangGraph → PrepAI
* CrewAI → Job Applying Buddy, NourishBot
* AutoGen → MedAssist MAS
* Specialist-agent workflows → DocChat, ForgeFoundry

## Retrieval and Knowledge Systems

* FAISS → Vidintel
* ChromaDB → DocChat
* BM25 and vector retrieval → DocChat
* Document processing → DocChat, PrepAI
* Retrieval verification → DocChat

## Speech and Multimodal AI

* Whisper → PrepAI, Speech Analyzer
* Image understanding → NourishBot
* Audio and signal ML → Bosch work
* Video transcript intelligence → Vidintel

## Applied ML and Data

* Python
* PyTorch
* TensorFlow
* Scikit-learn
* Pandas
* NumPy
* Optuna
* Explainable Boosting Machines
* XGBoost
* LightGBM
* Model evaluation
* Interpretability
* ETL pipelines

## Backend and Deployment

* FastAPI
* Gradio
* Streamlit
* Docker
* REST APIs
* Pydantic
* SQL
* Supabase
* Azure
* GitHub
* Vercel

## Product and Entrepreneurship

* Customer discovery
* Problem framing
* Value propositions
* Business models
* Market analysis
* GTM strategy
* Rapid prototyping
* Financial planning
* Pitch development
* Venture experimentation

---

# 21. Content Architecture

Separate content from components.

Recommended structure:

```text
src/
  app/
    page.tsx
    layout.tsx
    globals.css

  components/
    layout/
    sections/
    ui/
    cards/
    architecture/
    timeline/

  content/
    profile.ts
    ventures.ts
    projects.ts
    research.ts
    experience.ts
    education.ts
    credentials.ts
    capabilities.ts
    programs.ts
    posts.ts
    contactPaths.ts

  lib/
    utils.ts
    constants.ts
    types.ts
```

## Shared Content Type

Use a shared type like:

```ts
export type VerificationStatus =
  | "verified-public"
  | "user-provided"
  | "needs-review"
  | "confidential"
  | "archived"

export type Visibility =
  | "public"
  | "private"
  | "needs-approval"

export type ContentItem = {
  id: string
  title: string
  subtitle?: string
  summary: string
  description?: string
  status?: string
  startDate?: string
  endDate?: string
  featured?: boolean
  visibility?: Visibility
  sourceType?: "github" | "linkedin" | "wix" | "user-provided" | "manual"
  sourceUrl?: string
  verificationStatus?: VerificationStatus
  tags?: string[]
  capabilities?: string[]
  relatedProjects?: string[]
  media?: {
    image?: string
    video?: string
    demo?: string
  }
}
```

---

# 22. Required Components

## Layout Components

* Navbar
* Footer
* SectionWrapper
* SectionHeading
* Container
* Grid

## UI Components

* Badge
* Button
* Card
* GlassCard
* StatusPill
* MetricCard
* CommandPalette
* SearchBar
* Tabs
* FilterPills

## Portfolio Components

* VentureCard
* ProjectCard
* FeaturedSystemCard
* ResearchCard
* CredentialCard
* CapabilityCard
* ExperienceTimelineItem
* ArchitectureExplorer
* ArchitectureNode
* ContactPathCard

## Motion Components

* AnimatedGridBackground
* FloatingSystemCards
* ScrollReveal
* MagneticButton
* ProjectFilter
* CapabilityMap

---

# 23. Implementation Priority

## Phase 1 — Foundation

* Create Next.js app
* Configure TypeScript
* Configure Tailwind
* Set up global design tokens
* Add font system
* Add base layout
* Create reusable components
* Add content files

## Phase 2 — Homepage Core

Build:

* Navbar
* Hero
* Mission Control Dashboard
* Cellvara Section
* Featured AI Systems
* Venture Portfolio
* Architecture Explorer
* Contact Paths
* Footer

## Phase 3 — Depth Sections

Build:

* Project Explorer
* Journey Timeline
* Research Section
* Capability Map
* Credentials Preview
* About Section

## Phase 4 — Polish

Add:

* Animations
* Command palette
* Filtering
* Responsive polish
* SEO metadata
* Accessibility checks
* Performance checks
* Final copy cleanup

---

# 24. Verification Rules

Do not invent facts.

Use verification labels.

## Mark as `needs-review`

* Exact Hilti role title and dates
* Exact Bosch role title and dates
* Exact FORWISS role title and dates
* Exact publication citation
* Exact patent number and official link
* Exact LinkedIn post content
* Exact certification IDs and links
* Exact private project details
* Exact Cellvara customer discovery details

## Mark as `confidential`

* Private repositories
* Internal company code
* Confidential Hilti work
* Confidential Bosch data
* Private customer discovery notes
* Unapproved company names
* API keys
* Internal business documents

---

# 25. Do and Do Not

## Do

* Make it visually distinctive
* Make it feel like an AI operating system
* Use clean code
* Use reusable components
* Keep content structured
* Use strong visual hierarchy
* Make it responsive
* Make it accessible
* Use subtle but premium animations
* Show proof wherever possible
* Mark unverified facts clearly
* Keep private repositories hidden

## Do Not

* Do not make a generic portfolio
* Do not use generic AI robot visuals
* Do not overuse neon effects
* Do not clutter the UI
* Do not invent achievements
* Do not expose private code
* Do not overstate medical, financial, or compliance claims
* Do not show all GitHub repos as equally important
* Do not hardcode all content into page components
* Do not create a boring résumé website
* Do not make the design look like a normal SaaS landing page
* Do not sacrifice readability for visual effects

---

# 26. Logging System

This file must also act as the project log.

Whenever a meaningful change is made, append a new entry to the **Development Log** section at the bottom of this file.

Do not delete old log entries.

Keep logs short but useful.

## When to Log

Create a log entry after:

* Creating the project
* Installing dependencies
* Adding major components
* Building a new section
* Changing design direction
* Refactoring architecture
* Fixing important bugs
* Changing content structure
* Adding data files
* Updating project strategy
* Removing or replacing libraries
* Making deployment changes

## Log Entry Format

Use this format:

```md
## YYYY-MM-DD — Short Title

**Type:** setup / feature / fix / refactor / design / content / decision / deployment  
**Status:** done / partial / blocked / needs-review  

### What changed
- ...

### Files changed
- ...

### Reason
- ...

### Notes / next steps
- ...
```

## Log Rules

* Keep each entry clear and short
* Always mention important files changed
* Mention if something is incomplete
* Mention if something needs user review
* Mention if a design or technical decision was made
* Do not log every tiny Tailwind class change
* Do not delete the log history
* If a task is blocked, explain why

---

# 27. Current Open Questions

These items need later confirmation from the user.

```text
1. Exact Hilti role title, start date, and public responsibilities
2. Exact Bosch title, dates, and metrics approved for public use
3. Exact FORWISS role title and dates
4. Final Cellvara description and public positioning
5. Whether ZestLearn should be shown as historical or hidden
6. Whether Afterz is active, paused, or archived
7. Which private repositories can later be made visible
8. Which LinkedIn posts should be included
9. Which certificates should be featured on the homepage
10. Whether the website should include a downloadable PDF CV
11. Whether to add a live Ask Chirag AI assistant later
```

---

# 28. Final Experience Goal

The website should make a visitor think:

> This is not just a developer portfolio. This is the operating system of someone who understands AI engineering, product thinking, research, and venture building.

The final website should communicate:

```text
Computer Science Foundations
        ↓
Research and Intelligent Systems
        ↓
Industrial Applied Machine Learning
        ↓
Agentic AI and RAG Systems
        ↓
AI Product Development
        ↓
Entrepreneurship and Venture Building
        ↓
Cellvara and Responsible AI Adoption
```

---

# 29. Development Log

Append new log entries below this line.

---

## 2026-06-18 — Initial CLAUDE.md Created

**Type:** setup
**Status:** done

### What changed

* Created the first project instruction file for Chirag OS.
* Defined the website identity, design direction, stack, content structure, implementation phases, and logging system.

### Files changed

* `CLAUDE.md`

### Reason

* The project needs a persistent instruction and memory file for Claude Code.

### Notes / next steps

* Next step is to initialise the Next.js project and build the homepage foundation.

---

## 2026-06-19 — Agent 1: Foundation & Orchestration Complete

**Type:** setup
**Status:** done

### What changed

- Created Next.js 16 project with TypeScript, ESLint, src/ dir, App Router in worktree
- Installed Tailwind CSS v3.4.19 (Tailwind v4 auto-installed by scaffold was removed and replaced)
- Fixed `postcss.config.mjs` to use `tailwindcss` + `autoprefixer` (not `@tailwindcss/postcss`)
- Created `tailwind.config.ts` with all design tokens as named Tailwind classes, font families, glow-pulse/float/fade-up keyframes
- Created `src/app/globals.css` with CSS custom properties, smooth scroll, custom scrollbar, prefers-reduced-motion rule
- Created `src/app/layout.tsx` with Inter, Space Grotesk, JetBrains Mono fonts via next/font/google
- Created `src/lib/types.ts` with all shared TypeScript types (VerificationStatus, Visibility, ContentItem, ProjectItem, VentureItem, ResearchItem, ExperienceItem, CredentialItem, CapabilitySkill, CapabilityCategory, ContactPath, Post, ArchitectureNode, NavLink, SiteConfig)
- Created `src/lib/utils.ts` with cn() and formatDate()
- Created `src/lib/constants.ts` with NAV_LINKS (7 items), SOCIAL_LINKS, SITE_CONFIG, SECTION_ANCHORS
- Created all 11 content files in `src/content/`
- Created all 9 UI primitives in `src/components/ui/`
- Created layout components (SectionWrapper, SectionHeading, Container, Grid)
- Created motion components (AnimatedGridBackground, ScrollReveal, MagneticButton) with useReducedMotion() guards
- Created 16 empty section stubs in `src/components/sections/`
- Created `src/components/CommandPalette.tsx` stub
- Created `src/app/page.tsx` (FROZEN) importing all 16 sections
- `tsc --noEmit` passes with zero errors

### Files changed

- `package.json`, `next.config.ts`, `tsconfig.json`, `postcss.config.mjs`, `tailwind.config.ts`
- `src/app/globals.css`, `src/app/layout.tsx`, `src/app/page.tsx`
- `src/lib/types.ts`, `src/lib/utils.ts`, `src/lib/constants.ts`
- `src/content/profile.ts`, `ventures.ts`, `projects.ts`, `research.ts`, `experience.ts`, `education.ts`, `credentials.ts`, `capabilities.ts`, `programs.ts`, `posts.ts`, `contactPaths.ts`
- `src/components/ui/Badge.tsx`, `Button.tsx`, `Card.tsx`, `GlassCard.tsx`, `StatusPill.tsx`, `MetricCard.tsx`, `Tabs.tsx`, `FilterPills.tsx`, `SearchBar.tsx`
- `src/components/layout/SectionWrapper.tsx`, `SectionHeading.tsx`, `Container.tsx`, `Grid.tsx`
- `src/components/motion/AnimatedGridBackground.tsx`, `ScrollReveal.tsx`, `MagneticButton.tsx`
- 16 section stubs + CommandPalette.tsx stub

### Reason

- Foundation required for parallel Agent 2 and Agent 3 builds.

### Notes / next steps

- **Decision: reactflow excluded** — no peer-dep issues but the plan instructed to implement a custom architecture explorer. Architecture explorer will be custom-built by Agent 2. Logged per PLAN.md instructions.
- **ui-ux-pro-max recommendation noted:** Skill suggested Inter-only typography. Spec overrides with Space Grotesk (headings) + Inter (body) + JetBrains Mono — spec wins per PLAN.md rule. Skill design direction (Liquid Glass style, morphing elements, fluid animations) is consistent with the spec.
- **ContentItem.summary made optional** — CredentialItem entries don't need a summary field per "only fields the UI renders" rule. This is a type-level fix, not a design decision.
- Agents 2 and 3 can now run in parallel filling section bodies.

---

## 2026-06-19 — Agent 1: Build Gate Passed + Handoff Hardening

**Type:** fix / decision
**Status:** done

### What changed

- Added `.gitignore` to worktree (standard Next.js template) — scaffold created it in the main repo, not the worktree. Without it, `git add` would have staged all of `node_modules/` and `.next/`.
- **Next.js version deviation logged:** `create-next-app` installed Next.js 16.2.9 (not 15 as specified in PLAN.md). This is the current stable version at build time. `next build` passes cleanly on 16.2.9 with React 19.2 — keeping 16, not downgrading. Framer Motion 11 required `--legacy-peer-deps` during install; no runtime impact.
- Ran `next build` (Turbopack) — passed with zero errors. Route `/` prerendered as static. This is the real build gate before frozen files lock down.

### Files changed

- `.gitignore` (created)
- `CLAUDE.md` (this log entry)

### Reason

- Advisor flagged: tsc alone is insufficient gate; `next build` exercises App Router, server/client boundaries, PostCSS/Tailwind resolution. All foundation files freeze after handoff — any build error must be fixed now by Agent 1.
- `.gitignore` missing would corrupt any future `git add` with node_modules.
- Next.js version deviation needed to be logged so Agents 2-4 know the baseline.

### Notes / next steps

- Foundation files are NOW frozen. Agents 2 and 3 may fill section stubs only.
- Do not edit: `globals.css`, `tailwind.config.ts`, `layout.tsx`, all `src/lib/*`, all `src/content/*`, all `src/components/ui/*`, all `src/components/layout/*`, all `src/components/motion/*`, `page.tsx`.
- Agent 2: build section bodies (Navbar, Hero, MissionControl, Cellvara, FeaturedSystems, VenturePortfolio, ArchitectureExplorer, ProofMetrics, Footer).
- Agent 3: build section bodies (BraidedTimeline, Research, CapabilityMap, Credentials, Writing, About, Contact) + CommandPalette.

---

## 2026-06-19 — Agent 2: Sections 1–8 + Supporting Components Complete

**Type:** feature
**Status:** done

### What changed

- Built `NavbarSection.tsx`: fixed header, backdrop-blur, active section hook via IntersectionObserver, NAV_LINKS, utility icons (inline SVG for GitHub/LinkedIn — lucide-react in this install has no Github/Linkedin exports), MagneticButton CTA, ⌘K palette button dispatching `chirag-os:open-palette`, mobile hamburger with Framer Motion slide-down, responsive desktop/mobile split.
- Built `HeroSection.tsx`: full-viewport, typewriter "SYSTEM ONLINE" label, gradient heading, pulsing status line from PROFILE.currentMission, 5-CTA row, badge row from PROFILE.badges, FloatingSystemCards right column (hidden on mobile).
- Built `MissionControlSection.tsx`: 6-panel grid (cols-3/2/1) — Cellvara venture, engineering focus list, Hilti with StatusPill needs-review, HNU education with badges, PrepAI featured build with GitHub link, research question. All data from content files.
- Built `CellvaraSection.tsx`: two-column problem/solution layout; 7 problem items with AlertCircle amber icons; 3 GlassCard pillars (list + badges variants); status badges from cellvara.tags with Lock icon on Private Repository; 3-CTA row.
- Built `FeaturedSystemsSection.tsx`: FilterPills with "All" toggle logic + label→tag matching map; 4-col grid; staggered ScrollReveal.
- Built `VenturePortfolioSection.tsx`: VENTURES.map → VentureCard stacked vertically.
- Built `ArchitectureExplorerSection.tsx`: 4-tab system selector (PrepAI/MedAssist MAS/Vidintel/DocChat); ArchitectureExplorer renders nodes from project.architectureNodes.
- Built `ProofMetricsSection.tsx`: 6 DEFENSIBLE_METRICS as GlassCard+MetricCard grid; Bosch items in separate GlassCard with StatusPill needs-review.
- Built `FeaturedSystemCard.tsx`: title, GitHub link, summary, tags (mono badges), bestAngle, disclaimer amber pill, needs-review StatusPill.
- Built `ProjectCard.tsx`: compact card for project explorer use.
- Built `VentureCard.tsx`: horizontal card with colored accent bar (venture/warning/danger per venture.id), stage badge, focus tags, CTA.
- Built `ArchitectureNode.tsx`: button node with index label, hover scale, active engineering glow.
- Built `ArchitectureExplorer.tsx`: vertical node list with SVG arrow connectors; AnimatePresence slide-in detail panel; sticky detail panel on desktop.
- Built `FloatingSystemCards.tsx`: 7 floating GlassCards with staggered entrance + continuous y-keyframe float, useReducedMotion guard.
- Built `CommandPalette.tsx`: full implementation replacing stub — window event + Cmd/Ctrl+K open, Escape/outside close, auto-focused search, arrow+Enter keyboard nav, 10 commands in Navigate/Actions groups, scale+spring entrance.

### Files changed (created/replaced)

- `src/components/sections/NavbarSection.tsx`
- `src/components/sections/HeroSection.tsx`
- `src/components/sections/MissionControlSection.tsx`
- `src/components/sections/CellvaraSection.tsx`
- `src/components/sections/FeaturedSystemsSection.tsx`
- `src/components/sections/VenturePortfolioSection.tsx`
- `src/components/sections/ArchitectureExplorerSection.tsx`
- `src/components/sections/ProofMetricsSection.tsx`
- `src/components/cards/FeaturedSystemCard.tsx`
- `src/components/cards/ProjectCard.tsx`
- `src/components/cards/VentureCard.tsx`
- `src/components/architecture/ArchitectureExplorer.tsx`
- `src/components/architecture/ArchitectureNode.tsx`
- `src/components/motion/FloatingSystemCards.tsx`
- `src/components/CommandPalette.tsx`

### Reason

- Agent 2 responsibility per PLAN.md — sections 1–8, cards, architecture components, FloatingSystemCards, CommandPalette.

### Notes / next steps

- **Decision: lucide-react has no Github/Linkedin exports in this install.** Used inline SVG paths (official GitHub/LinkedIn brand SVGs) instead. Agent 4 should verify icon rendering visually.
- `tsc --noEmit` passes with zero errors after all files built.
- No frozen files were modified.
- Agent 3 can now fill remaining section stubs in parallel.
- Agent 4: run `next build` gate, then Playwright visual check.
- Frozen files: page.tsx, layout.tsx, globals.css, tailwind.config.ts, all types/utils/constants, all content files, all UI primitives, all layout components, all motion components.

---

## 2026-06-19 — Agent 3: Sections 9–16 + Supporting Components Complete

**Type:** feature
**Status:** done

### What changed

- Built `ExperienceTimelineItem.tsx`: expandable GlassCard node with track badge variant mapping, needs-review StatusPill, formatted dates.
- Built `BraidedTimeline.tsx`: 4-column CSS Grid with vertical connector lines, colored dot nodes, staggered ScrollReveal, cross-track braid visual marker (dual-ring dot + "SPANS ENGINEERING + RESEARCH" label) for items with `relatedProjects`.
- Built `BraidedTimelineSection.tsx`: includes synthetic `BOSCH_THESIS_RESEARCH` ExperienceItem (research track, mirrors bosch-ebike engineering node) and `CELLVARA_VENTURE` (entrepreneurship track) to implement the braided timeline as specified.
- Built `ResearchCard.tsx`: icon map as `Record<string, React.ComponentType<...>>` (avoids TS7053), patent number display, needs-review StatusPill.
- Built `ResearchSection.tsx`: Grid of ResearchCard + RESEARCH_INTERESTS badge row.
- Built `CapabilityCard.tsx`: skill name in mono, evidence badges with tooltip, projectMap prop.
- Built `CapabilityMapSection.tsx`: Radix Tabs with per-category accentColor border on active trigger via `data-[state=active]:border-b-2 data-[state=active]:border-${cat.accentColor}`, projectMap at module level.
- Built `CredentialCard.tsx`: issuer in mono, category Badge, verify link only when not needs-review.
- Built `CredentialsSection.tsx`: Fuse.js search (keys: title/issuer/category, threshold 0.35), useMemo filter, show-all toggle, 3-col grid.
- Built `WritingSection.tsx`: featured posts filter, needs-review link handling, StatusPill.
- Built `AboutSection.tsx`: two-column layout, GeometricAvatar SVG with useReducedMotion guards, 2×2 interests grid.
- Built `ContactPathCard.tsx`: ICON_MAP and GLOW_MAP and ICON_COLOR_MAP as static Records (no dynamic Tailwind class strings), MagneticButton wrapping Button.
- Built `ContactSection.tsx`: 3+2 grid layout, email line.
- Built `FooterSection.tsx`: 3-col grid, cellvara GlassCard, inline SVG avoided — uses Code2/ExternalLink (lucide-react has no brand icons), copyright line.

### Files changed

- `src/components/timeline/ExperienceTimelineItem.tsx` (created)
- `src/components/timeline/BraidedTimeline.tsx` (created)
- `src/components/sections/BraidedTimelineSection.tsx` (filled)
- `src/components/cards/ResearchCard.tsx` (created)
- `src/components/sections/ResearchSection.tsx` (filled)
- `src/components/cards/CapabilityCard.tsx` (created)
- `src/components/sections/CapabilityMapSection.tsx` (filled)
- `src/components/cards/CredentialCard.tsx` (created)
- `src/components/sections/CredentialsSection.tsx` (filled)
- `src/components/sections/WritingSection.tsx` (filled)
- `src/components/sections/AboutSection.tsx` (filled)
- `src/components/cards/ContactPathCard.tsx` (created)
- `src/components/sections/ContactSection.tsx` (filled)
- `src/components/sections/FooterSection.tsx` (filled)

### Reason

- Agent 3 responsibility per PLAN.md — sections 9–16, timeline, research, capability, credentials, writing, about, contact, footer.

### Notes / next steps

- `tsc --noEmit` passes with zero errors across all Agent 3 files.
- **NavbarSection.tsx (Agent 2)**: Uses inline SVG for GitHub/LinkedIn brand icons — no TSC errors. This is correct and intentional per Agent 2 notes.
- **Bosch dual-track braid**: Implemented via synthetic `BOSCH_THESIS_RESEARCH` ExperienceItem (research track) in BraidedTimelineSection and visual dual-ring dot marker in BraidedTimeline for items with `relatedProjects`. This is the primary "braid" the spec describes.
- **CapabilityMap accentColor**: Active tab trigger now gets `data-[state=active]:border-b-2` with per-category accent border.
- **ContactPathCard icon color**: Uses static `ICON_COLOR_MAP` (not dynamic `text-${accentColor}`) so Tailwind JIT can purge safely.
- Agent 4: run `next build`, then visual check. All frozen files untouched.
