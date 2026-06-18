# Chirag OS — Multi-Agent Build Plan

---

## Model Assignment

| Agent | Model |
|---|---|
| Planning | Opus |
| Agents 1–4 (all implementation) | Sonnet |

---

## Skills Assignment — ALL AGENTS

| Skill | When to invoke |
|---|---|
| `frontend-design` | Agent 1: before finalising UI primitives and design tokens. Agents 2 & 3: before building each section — invoke to get aesthetic direction before writing JSX. |
| `ui-ux-pro-max` | Agent 1: when configuring Tailwind theme, font pairings, and glassmorphism card styles. Agents 2 & 3: when making layout and spacing decisions for complex sections (Hero, Architecture Explorer, Braided Timeline, Capability Map). |
| `playwright-skill` | Agent 4: after the build gate passes — run browser automation to screenshot every section, check mobile viewport, verify no layout overflow. |
| `verify` | Agent 4: after fixes are applied — confirm the full homepage renders correctly in the browser before writing the final log entry. |
| `code-review` | Agent 4: run over the full diff after Agents 2 & 3 complete — catch correctness bugs and unnecessary complexity before QA. |
| `run` | Agent 4: launch the dev server to observe the live result before running Playwright. |

**Rule:** Skills are not optional. Each agent must invoke the listed skills at the specified points. If a skill returns a design recommendation that conflicts with a spec decision in this plan, the spec wins, but the skill's suggestion must be noted in the CLAUDE.md log entry.

---

## Token Conservation Directive — ALL AGENTS

- Write the minimum code needed to satisfy the requirement. No extras.
- No comments unless the WHY is non-obvious.
- No docstrings, no JSDoc, no `TODO` comments.
- No console statements or debug output.
- No fallback logic for impossible scenarios. Trust TypeScript and internal data.
- No over-abstraction. Three similar lines beats a premature helper.
- Content files: populate only fields the UI actually consumes.
- Never re-type a string that lives in `constants.ts`.
- Agent 4 output: checklist only (✅ / ⚠️ / ❌), no prose narration.

---

## Pre-Flight Decisions

1. **Tailwind v3.4 only** — scaffold with `--tailwind=false`, then install `tailwindcss@^3.4`. Next.js 15 may auto-scaffold v4 which has no `tailwind.config.ts`.
2. **Framer Motion** — always `import { motion } from "framer-motion"`, never `from "motion/react"`.
3. **Frozen Contract** — Agent 1 creates all foundation files + section stubs. Agents 2 & 3 fill only their assigned section bodies. No agent edits `page.tsx`, `globals.css`, `types.ts`, or any content file after Agent 1.
4. **Integration Gate** — Agent 1 done → Agents 2 & 3 run in parallel → `tsc --noEmit && next build && next lint` passes → Agent 4 runs.

---

## Agent 1 — Foundation & Orchestration `[Sonnet]`

Runs first, alone. Nothing else starts until Agent 1 is complete.

**Invoke `ui-ux-pro-max` before step 3. Invoke `frontend-design` before step 10.**

### Steps (in order)

1. Scaffold:
   ```bash
   npx create-next-app@latest . --typescript --eslint --src-dir --app --tailwind=false --import-alias="@/*"
   ```

2. Install all dependencies in one command:
   ```bash
   npm install tailwindcss@^3.4 postcss autoprefixer clsx tailwind-merge framer-motion@^11 lucide-react @radix-ui/react-tabs @radix-ui/react-dialog @radix-ui/react-tooltip @radix-ui/react-scroll-area fuse.js reactflow
   ```
   If `reactflow` has peer-dep issues with React 19, exclude it and implement a custom architecture explorer. Record the decision in CLAUDE.md.

3. `tailwind.config.ts` — extend theme with all design tokens as named Tailwind classes. Add `font-heading`, `font-mono` font families. Add `glow-pulse`, `float`, `fade-up` keyframes.

   Design token class names to define:
   ```
   bg-background-primary     #050816
   bg-background-secondary   #0A1020
   bg-background-tertiary    #111827
   bg-card-bg                rgba(255,255,255,0.05)
   bg-card-bg-strong         rgba(255,255,255,0.08)
   border-card-border        rgba(255,255,255,0.10)
   border-card-border-strong rgba(255,255,255,0.18)
   text-text-primary         #f8fafc
   text-text-secondary       #cbd5e1
   text-text-muted           #94a3b8
   text-text-faint           #64748b
   text-accent-engineering   #38bdf8
   text-accent-ai            #8b5cf6
   text-accent-venture       #10b981
   text-accent-research      #f472b6
   text-accent-warning       #f59e0b
   text-accent-danger        #ef4444
   ```

4. `globals.css` — CSS custom properties, smooth scroll, custom scrollbar, `prefers-reduced-motion` rule. No unused rules.

5. `layout.tsx` — Inter, Space Grotesk, JetBrains Mono via `next/font`. Metadata from `SITE_CONFIG`. No extra wrappers.

6. `src/lib/types.ts` — all shared TypeScript types. Only fields sections actually render.

   Types to export:
   - `VerificationStatus` — `"verified-public" | "user-provided" | "needs-review" | "confidential" | "archived"`
   - `Visibility` — `"public" | "private" | "needs-approval"`
   - `ContentItem` — base type with id, title, subtitle, summary, description, status, dates, featured, visibility, sourceType, sourceUrl, verificationStatus, tags, capabilities, relatedProjects, media
   - `ProjectItem extends ContentItem` — adds architectureNodes, bestAngle, disclaimer, githubUrl, demoUrl
   - `VentureItem extends ContentItem` — adds stage, focus, ctaLabel, ctaHref
   - `ResearchItem extends ContentItem` — adds researchType, patentNumber
   - `ExperienceItem extends ContentItem` — adds organization, role, track
   - `CredentialItem extends ContentItem` — adds issuer, credentialId, verifyUrl, category
   - `CapabilitySkill` — name, evidence array (projectId + label)
   - `CapabilityCategory` — id, label, accentColor, skills
   - `ContactPath` — id, title, description, audiences, ctaLabel, ctaHref, accentColor, icon
   - `Post extends ContentItem` — adds category, readingTime, linkedinUrl
   - `ArchitectureNode` — id, label, responsibility, input, output, technology, failureMode, validationMethod
   - `NavLink` — label, href
   - `SiteConfig` — name, tagline, description, url, githubUrl, linkedinUrl, email

7. `src/lib/utils.ts` — `cn()` using clsx + tailwind-merge. `formatDate()` returning "MMM YYYY". Nothing else.

8. `src/lib/constants.ts` — `NAV_LINKS`, `SOCIAL_LINKS`, `SITE_CONFIG`, `SECTION_ANCHORS`.

   `NAV_LINKS` must be exactly:
   ```ts
   [
     { label: "Command Center", href: "#mission-control" },
     { label: "Ventures",       href: "#ventures" },
     { label: "AI Systems",     href: "#ai-systems" },
     { label: "Research",       href: "#research" },
     { label: "Journey",        href: "#journey" },
     { label: "Credentials",    href: "#credentials" },
     { label: "Contact",        href: "#contact" },
   ]
   ```

9. All 11 content files in `src/content/` — populated from context.md and CLAUDE.md. Only fields the UI consumes. `verificationStatus: "needs-review"` on Hilti, Bosch, FORWISS, patent number. Never invent facts.

   Files:
   - `profile.ts` — name, roles, heroHeading, heroDescription, currentMission, badges, bio, socialLinks
   - `ventures.ts` — Cellvara, ForgeFoundry, Afterz
   - `projects.ts` — `FEATURED_PROJECTS` (8 items) + `ALL_PROJECTS` (full catalogue); MedAssist must include `disclaimer` field
   - `research.ts` — 4 items + `RESEARCH_INTERESTS` array
   - `experience.ts` — Hilti, Bosch, FORWISS, Startup Ecosystem (all needs-review except Startup)
   - `education.ts` — PES, Passau, HNU
   - `credentials.ts` — grouped by category; credentialIds set to `"needs-review"` string
   - `capabilities.ts` — 6 categories each with skills linked to project IDs
   - `programs.ts` — Cyber Valley, UnternehmerTUM, hackathons
   - `posts.ts` — 6–8 placeholders; all `linkedinUrl: "needs-review"`, no invented URLs
   - `contactPaths.ts` — 5 paths matching context.md section 25

10. All 9 UI primitives in `src/components/ui/`:
    - `Badge.tsx` — variants: default, engineering, ai, venture, research, warning, danger, mono
    - `Button.tsx` — variants: primary, secondary, ghost, outline; sizes: sm, md, lg; asChild support
    - `Card.tsx` — base wrapper with bg-card-bg and border-card-border
    - `GlassCard.tsx` — extends Card with backdrop-blur-md, bg-card-bg-strong, hover glow via Framer Motion whileHover
    - `StatusPill.tsx` — reads verificationStatus; "needs-review" → amber; "verified-public" → green dot; "confidential" → muted; active status strings → pulsing green dot
    - `MetricCard.tsx` — value (large, heading font), label (mono muted), optional footnote
    - `Tabs.tsx` — wraps Radix Tabs with design system styling
    - `FilterPills.tsx` — multi-select toggle pills
    - `SearchBar.tsx` — controlled input with Lucide search icon

11. Layout components in `src/components/layout/`:
    - `SectionWrapper.tsx` — `<section id={id}>` with `py-20 md:py-28`, accepts background prop
    - `SectionHeading.tsx` — eyebrow (mono, uppercase, accent color) + title (font-heading) + description
    - `Container.tsx` — max-w-7xl with horizontal padding
    - `Grid.tsx` — responsive CSS grid with cols and gap props

12. Motion components in `src/components/motion/`:
    - `AnimatedGridBackground.tsx` — animated dot/line grid; `useReducedMotion()` guard; static when reduced motion
    - `ScrollReveal.tsx` — `whileInView` fade-up wrapper; `useReducedMotion()` guard; `once: true`
    - `MagneticButton.tsx` — mouse-tracking hover effect; `useReducedMotion()` guard

13. 16 empty section stubs in `src/components/sections/` — each exports a default component returning an empty div. Must compile cleanly.

    Stubs: NavbarSection, HeroSection, MissionControlSection, CellvaraSection, FeaturedSystemsSection, VenturePortfolioSection, ArchitectureExplorerSection, ProofMetricsSection, BraidedTimelineSection, ResearchSection, CapabilityMapSection, CredentialsSection, WritingSection, AboutSection, ContactSection, FooterSection

14. `src/app/page.tsx` — imports all 16 section components + CommandPalette + AnimatedGridBackground; renders in order. **FROZEN — never edit again.**

15. Run `tsc --noEmit` — must pass with zero errors before handoff.

### Token conservation for Agent 1
- Content files: no optional fields no section reads.
- UI primitives: trust TypeScript, no defensive prop checks.
- No animation in components unless the spec requires it.

---

## Agent 2 — Sections 1–8 `[Sonnet]`

Runs in parallel with Agent 3 after Agent 1 completes. Fills only assigned files. Does not edit any foundation file.

**Invoke `frontend-design` before starting. Invoke `ui-ux-pro-max` before Hero, Mission Control, and Architecture Explorer.**

### Files owned by Agent 2

**Sections:**
- `src/components/sections/NavbarSection.tsx`
- `src/components/sections/HeroSection.tsx`
- `src/components/sections/MissionControlSection.tsx`
- `src/components/sections/CellvaraSection.tsx`
- `src/components/sections/FeaturedSystemsSection.tsx`
- `src/components/sections/VenturePortfolioSection.tsx`
- `src/components/sections/ArchitectureExplorerSection.tsx`
- `src/components/sections/ProofMetricsSection.tsx`

**Cards:**
- `src/components/cards/FeaturedSystemCard.tsx`
- `src/components/cards/ProjectCard.tsx`
- `src/components/cards/VentureCard.tsx`

**Architecture:**
- `src/components/architecture/ArchitectureExplorer.tsx`
- `src/components/architecture/ArchitectureNode.tsx`

**Motion:**
- `src/components/motion/FloatingSystemCards.tsx`

**Global:**
- `src/components/CommandPalette.tsx`

### Section Specs

#### Navbar (`id: fixed header, not a scroll target`)
- `<header>` fixed top, z-50, backdrop-blur-md, border-b border-card-border, bg-background-primary/80
- Left: "Chirag OS" (font-heading bold) + "AI Venture Operating System" (font-mono text-xs text-text-muted)
- Right: nav links from `NAV_LINKS`; active section highlight via `useActiveSection` local hook
- Utilities: GitHub icon → `SOCIAL_LINKS.github`, LinkedIn icon, Download CV → `/cv.pdf`
- CTA: `<MagneticButton>` wrapping `<Button variant="primary">Let's Connect</Button>` → `#contact`
- Optional ⌘K badge that fires `chirag-os:open-palette` window event
- Mobile: hamburger toggle, Framer Motion slide-down menu

#### Hero (`id: "hero"`)
- Left column (60%): SYSTEM ONLINE typewriter label, main heading from `PROFILE.heroHeading`, description, pulsing status line with `PROFILE.currentMission`, CTA buttons row, badge row from `PROFILE.badges`
- Right column (40%): `<FloatingSystemCards>` — 7 floating GlassCards with slow `float` animation, staggered delays
- `FloatingSystemCards` card data is a local const in that file (visual decoration, not content data)

#### Mission Control (`id: "mission-control"`)
- Grid cols-3 desktop / cols-2 tablet / cols-1 mobile; 6 GlassCard panels
- Panel 1: Cellvara from `VENTURES`; status tags; CTA → `#ventures`
- Panel 2: Engineering Focus items — local const inside file (7 items)
- Panel 3: Hilti from `EXPERIENCE`; `<StatusPill status="needs-review"/>` prominent
- Panel 4: HNU from `EDUCATION`; degree + related tags as Badges
- Panel 5: PrepAI from `FEATURED_PROJECTS`; title, summary, tags, GitHub link
- Panel 6: Research question — local const string inside file

#### Cellvara (`id: "cellvara"`)
- Two-column: Problem list (left) + 3 capability pillar GlassCards (right)
- Pillar sub-content may be local const array inside the file
- Status badges from `cellvara.tags`; `<Lock/>` icon next to "Private Repository"
- 3 CTAs: "Explore Cellvara" (primary), "Discuss a Pilot" → `#contact`, "View Founder Thesis" → `#ventures`

#### Featured AI Systems (`id: "ai-systems"`)
- Filter pills: All, Agentic AI, RAG, Multimodal, Applied ML, Safety
- Grid cols-4 desktop / cols-2 tablet; 8 `<FeaturedSystemCard>` components
- Staggered scroll reveal: `<ScrollReveal delay={index * 0.08}>`
- FeaturedSystemCard: GlassCard, title, GitHub link, summary, tags as Badge mono, bestAngle in mono muted, disclaimer pill if `project.disclaimer` present

#### Venture Portfolio (`id: "ventures"`)
- 3 VentureCards stacked vertically, full width
- VentureCard: horizontal layout, colored accent bar (green=active, amber=experiment, red=paused), title, stage badge, description, focus tags, CTA button

#### Architecture Explorer (`id: "architecture"`)
- 4 system selector tabs: PrepAI, MedAssist MAS, Vidintel, DocChat
- Custom node diagram from `project.architectureNodes` — no React Flow dependency
- ArchitectureNode: rounded rect, glow on hover/select, scale on active
- Click node → slide-in detail panel showing responsibility, input, output, technology, failureMode, validationMethod

#### Proof & Metrics (`id: "proof"`)
- `DEFENSIBLE_METRICS` local const: 6 verified items (50+ repos, patent holder, published researcher, multiple AI systems, Cellvara founder, industrial ML)
- Grid cols-3: `<MetricCard>` for each
- Bosch metrics in a separate GlassCard with prominent `<StatusPill status="needs-review"/>` and subtitle "Industrial Context — Pending Verification"

#### CommandPalette (`src/components/CommandPalette.tsx`)
- Full-screen overlay, opens on `chirag-os:open-palette` event or Cmd+K / Ctrl+K
- Closes on Escape or outside click
- Auto-focused search input; keyboard navigation (arrow + Enter)
- 10 commands from CLAUDE.md: Open Cellvara, Show AI systems, Show agentic AI projects, Show RAG projects, Show venture projects, Show research, Show education, Download CV, Open GitHub, Open LinkedIn

### Token conservation for Agent 2
- FloatingSystemCards: local const for 7 items, no external data file.
- Mission Control Panel 2: local const inside file.
- CommandPalette: 10 commands only, no extensibility hooks.

---

## Agent 3 — Sections 9–16 `[Sonnet]`

Runs in parallel with Agent 2 after Agent 1 completes. Fills only assigned files. Does not edit any foundation file.

**Invoke `frontend-design` before starting. Invoke `ui-ux-pro-max` before Braided Timeline and Capability Map.**

### Files owned by Agent 3

**Sections:**
- `src/components/sections/BraidedTimelineSection.tsx`
- `src/components/sections/ResearchSection.tsx`
- `src/components/sections/CapabilityMapSection.tsx`
- `src/components/sections/CredentialsSection.tsx`
- `src/components/sections/WritingSection.tsx`
- `src/components/sections/AboutSection.tsx`
- `src/components/sections/ContactSection.tsx`
- `src/components/sections/FooterSection.tsx`

**Cards:**
- `src/components/cards/ResearchCard.tsx`
- `src/components/cards/CredentialCard.tsx`
- `src/components/cards/CapabilityCard.tsx`
- `src/components/cards/ContactPathCard.tsx`

**Timeline:**
- `src/components/timeline/BraidedTimeline.tsx`
- `src/components/timeline/ExperienceTimelineItem.tsx`

### Section Specs

#### Braided Timeline (`id: "journey"`)
- 4 parallel vertical tracks: Engineering, Research, Entrepreneurship, Education
- Items from `[...EXPERIENCE, ...EDUCATION]` sorted chronologically, placed by `item.track`
- Vertical connector line per track in that track's accent color
- Bosch spans Engineering + Research tracks with horizontal link visual
- `ExperienceTimelineItem`: GlassCard node, click to expand bullet list; if `verificationStatus === "needs-review"` show StatusPill and replace specific dates/metrics with `[Pending Verification]`

#### Research & Innovation (`id: "research"`)
- Grid cols-2: `RESEARCH_ITEMS.map(item => <ResearchCard>)`
- ResearchCard: icon by type (thesis → BookOpen, patent → Award), title, summary, tags; patent shows StatusPill on number
- Below grid: `RESEARCH_INTERESTS` badges row

#### Capability Map (`id: "capabilities"`)
- 6 category tabs from `CAPABILITY_CATEGORIES`
- Active category: Grid cols-2 of `<CapabilityCard>` per skill
- CapabilityCard: skill name (mono bold) + evidence links (small badge → project title on hover tooltip)
- Build `projectMap = new Map(FEATURED_PROJECTS.map(p => [p.id, p]))` for evidence linking
- NOT a logo wall — every skill must show at least one evidence link

#### Credentials (`id: "credentials"`)
- SearchBar + FilterPills + Fuse.js on `{keys: ["title", "issuer", "category"]}`
- Show 8 by default, `useState showAll` toggle
- Grid cols-3 desktop / cols-2 tablet / cols-1 mobile
- CredentialCard: issuer (mono muted), course name (bold), category badge, verify link if `verifyUrl !== "needs-review"`

#### Writing (`id: "writing"`)
- `POSTS.filter(p => p.featured).slice(0, 4)` — Grid cols-2
- Post card: GlassCard, category badge, title, summary, StatusPill on linkedinUrl if "needs-review"
- If `post.linkedinUrl === "needs-review"`: link icon shown with `href="#"` and Radix Tooltip "Link pending"

#### About (`id: "about"`)
- Two-column: bio paragraph (left) + animated geometric avatar (right, CSS/SVG only, no robot)
- 4 interest tiles: Photography, Travel, Creative Writing & Poetry, Music — local const in file
- Tile: icon + label + one-line flavor text

#### Contact Paths (`id: "contact"`)
- Grid cols-3 desktop (first 3), cols-2 below (last 2 centered)
- ContactPathCard: icon, title, description, audience tags, `<MagneticButton>` CTA
- Primary variant on "Hire Chirag" card; secondary on others
- Email line below grid: Lucide Mail + `SOCIAL_LINKS.email`

#### Footer (`id: "footer"`)
- `<footer>` bg-background-secondary border-t border-card-border
- 3-column: branding + tagline, link groups (nav + social + CV), "Currently Building" mini GlassCard pulling Cellvara from `VENTURES`
- Copyright: `© {year} Chirag Natesh Vijay. All rights reserved.`

### Token conservation for Agent 3
- About interests: local const in file, no content file entry.
- Writing: plain `filter()`, no Fuse.js.
- BraidedTimeline: CSS Grid layout, no timeline library.
- Footer Cellvara string: pull from `VENTURES`, never re-typed.

---

## Agent 4 — Verification & QA `[Sonnet]`

Runs after build gate passes.

**Invoke `code-review` first. Then `run` to start dev server. Then `playwright-skill` for visual checks. Then `verify` to confirm golden path.**

Output is a checklist only — no prose.

### Checks

| Category | Check | Method |
|---|---|---|
| Build | `tsc --noEmit` exits 0 | Run command |
| Build | `next build` exits 0 | Run command |
| Content | No raw strings in section files | `grep -n '"Cellvara"' src/components/sections/` |
| Content | No hardcoded URLs in components | `grep -rn 'https://' src/components/sections/ src/components/cards/` |
| Design | No raw hex in JSX | `grep -rE '#[0-9a-fA-F]{3,6}' src/components/` |
| Verification | Hilti shows StatusPill | Read MissionControlSection |
| Verification | Bosch metrics isolated + needs-review | Read ProofMetricsSection |
| Verification | MedAssist disclaimer visible | Read FeaturedSystemCard |
| Verification | No invented LinkedIn URLs | Read `posts.ts` |
| Responsive | All grids have `grid-cols-1 md:grid-cols-N` | `grep -rn "grid-cols-" src/components/sections/` |
| Responsive | Navbar has mobile menu | Read NavbarSection |
| Accessibility | All images have `alt` | `grep -rn "<Image" src/components/` |
| Accessibility | Icon-only buttons have `aria-label` | Manual scan |
| Motion | `useReducedMotion` in AnimatedGridBackground, ScrollReveal, MagneticButton | `grep -rn "useReducedMotion" src/components/motion/` |
| Nav | All 7 `href` values match section `id` attributes | Cross-reference constants.ts vs page.tsx |
| Security | No API keys | `grep -rn "sk-\|API_KEY" src/` |
| Visual | All 16 sections render, no overflow | Playwright: screenshots at 1440px and 375px |
| Visual | Animations fire on scroll | Playwright: scroll test |

### Fixes
Apply inline for any ❌. Re-run `tsc --noEmit && next build`. Write one log entry in `CLAUDE.md`.

---

## Frozen File Contract

These files must not be edited after Agent 1 creates them:

- `src/app/page.tsx`
- `src/app/layout.tsx`
- `src/app/globals.css`
- `tailwind.config.ts`
- `src/lib/types.ts`
- `src/lib/utils.ts`
- `src/lib/constants.ts`
- All `src/content/*.ts` files
- All `src/components/ui/*.tsx` files
- All `src/components/layout/*.tsx` files
- `src/components/motion/AnimatedGridBackground.tsx`
- `src/components/motion/ScrollReveal.tsx`
- `src/components/motion/MagneticButton.tsx`

---

## Tailwind Class Name Contract

Agents 2 and 3 use only these token class names. Never raw hex, never CSS var syntax in className strings.

```
bg-background-primary    bg-background-secondary    bg-background-tertiary
bg-card-bg               bg-card-bg-strong
border-card-border       border-card-border-strong
text-text-primary        text-text-secondary        text-text-muted        text-text-faint
text-accent-engineering  text-accent-ai             text-accent-venture    text-accent-research
text-accent-warning      text-accent-danger
bg-accent-engineering    bg-accent-ai               bg-accent-venture      bg-accent-research
font-sans                font-heading               font-mono
```

---

## Section-to-Anchor-ID Map

| Nav Label | Section Component | `id` attribute |
|---|---|---|
| *(navbar)* | NavbarSection | *(fixed, not scrolled to)* |
| *(hero)* | HeroSection | `hero` |
| Command Center | MissionControlSection | `mission-control` |
| *(cellvara)* | CellvaraSection | `cellvara` |
| AI Systems | FeaturedSystemsSection | `ai-systems` |
| Ventures | VenturePortfolioSection | `ventures` |
| *(architecture)* | ArchitectureExplorerSection | `architecture` |
| *(proof)* | ProofMetricsSection | `proof` |
| Journey | BraidedTimelineSection | `journey` |
| Research | ResearchSection | `research` |
| *(capabilities)* | CapabilityMapSection | `capabilities` |
| Credentials | CredentialsSection | `credentials` |
| *(writing)* | WritingSection | `writing` |
| *(about)* | AboutSection | `about` |
| Contact | ContactSection | `contact` |
| *(footer)* | FooterSection | `footer` |
