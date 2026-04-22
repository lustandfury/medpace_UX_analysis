# Initiative Context: AI Tools for UX Design Practice
> This document provides context for Claude Code when developing website content and features related to this design team's practice, company, and SDLC challenges.

---

## 1. Who This Is For

This context file supports a **UX design team at Medpace.com a company operating in clinical trial / life sciences software**. The primary audience for the website includes:

- UX designers
- Frontend developers 
- Clinical domain experts
- Designers working across discovery, prototyping, and handoff
- Product and clinical operations stakeholders

The team builds **internal enterprise tools** — not consumer products. Their flagship domain is **clinical trial monitoring software**, specifically platforms used by Clinical Research Associates (CRAs) and Site Coordinators managing patient enrollment across multiple hospital sites.

---

## 2. The Company and Its Domain

### Industry
Clinical research / life sciences software. The company builds platforms used in **Phase III oncology trials** and similar regulated environments. Their products must comply with **21 CFR Part 11** (electronic records in FDA-regulated trials), meaning audit logging, access control, and data integrity are non-negotiable.

### Representative Product: Clinical Trial Monitoring Platform
The team's current major feature is a **Patient Enrollment Management Table** for trial `ONCO-2024-003`. This is a useful reference case for any content on the website — it illustrates the real constraints the team works under:

- De-identified patient data (no PHI in table views)
- Role-based access: CRA, Site Coordinator, Clinical Ops Manager, Medical Monitor (read-only)
- Integration with EDC systems (Medidata Rave), visit management systems, SSO/identity providers
- WCAG 2.1 AA accessibility compliance required
- Color-blind-safe palettes (deuteranopia/protanopia) — icons and labels, not color alone
- Performance: 200-row table must load in <2 seconds; filters respond in <300ms
- Real-time data sync every 15 minutes; manual refresh available
- Desktop-only for v1.0 (1024px–1920px viewport range)

### Design Language
The team's visual style is **enterprise clinical**: white backgrounds, teal and navy accents, high data density. Reference products: Salesforce, Jira, Salesforce Health Cloud. Explicitly *not* consumer-app aesthetic — no decorative gradients, no rounded hero sections, no marketing softness.

---

## 3. The SDLC Problem: Where the Team Is Stuck

This is the core issue the initiative addresses. The team's current software development lifecycle has several compounding friction points:

### 3.1 Disconnected Discovery and Spec
- Stakeholder interviews produce meeting notes and email threads, not structured requirements
- PRDs are written manually, slowly, and often don't reflect the decisions made during design
- The handoff between discovery → spec → design → prototype → development involves lossy translation at every step

### 3.2 Prototyping Is Too Expensive to Explore
- Building a prototype in Figma is expensive enough that the team commits to a direction early
- They rarely prototype more than 1–2 directions before stakeholder review
- Stakeholder feedback is low-quality when reviewers see Lorem Ipsum wireframes — they suspend judgment until things "look real"

### 3.3 The Prototype-to-Spec Gap
- Once a prototype exists, the design decisions embedded in it are rarely formally documented
- Developers receive either Figma files (requiring interpretation) or verbal handoffs
- Design decisions made implicitly during prototyping — CSS variable choices, sort behaviors, interaction states — never make it back into the PRD
- This creates drift: what the spec says ≠ what gets built ≠ what the team intended

### 3.4 Tool Fragmentation
- Figma for visual design
- A separate system (Excel or EDC) for data tracking
- Cursor/VS Code for prototype-to-code work
- Claude.ai for ad hoc synthesis tasks
- No unified workflow connecting these tools

### 3.5 Documentation Bottleneck
- Post-prototype documentation (component inventories, evolved specs, updated acceptance criteria) takes 3–4 hours per feature
- This work is often skipped or done incompletely
- The team has no consistent practice for extracting design decisions from built artifacts

---

## 4. The Initiative: AI Tools for the Design Practice

### What It Is
A structured **workshop and workflow change initiative** introducing three AI tools into the team's design process. Launched April 2026. The workshop runs for 2 hours and demonstrates each tool on the same feature (Patient Enrollment Table) so the team can compare outputs directly.

### The Three Tools

| Tool | Role in Workflow | Key Differentiator |
|------|-----------------|-------------------|
| **Claude Design** (claude.ai/design) | Idea → interactive prototype | Conversation-native; reads codebase/design files; exports to URL, HTML, PPTX, Canva; handoff bundle → Claude Code |
| **Figma Make** (figma.com/make) | Screen generation → Figma canvas | Design-native; output lands directly on Figma canvas; credit-based (300/prompt, 2,500/plan) |
| **Cursor + Claude Code** | Working prototype → shippable code | Code-native; Tailwind/Shadcn output; no per-prompt credits; code IS the handoff |

### Claude Design — Key Facts
- Launched **April 17, 2026**
- Powered by **Claude Opus 4.7** (vision model)
- Available on **Pro, Max, Team, Enterprise** plans (not free tier)
- Lives at `claude.ai/design`
- Can read the team's codebase and design files to apply brand automatically
- One-click bundle export to Claude Code
- Export formats: URL, HTML, PDF, PPTX, Canva

### The Four Workflows the Initiative Introduces

1. **Exploration to Stakeholder** — Claude Design for rapid multi-direction prototyping; share URL; refine in conversation
2. **Design-Native Screens** — Figma Make for data-heavy screens that need to live in Figma for team annotation
3. **Code-Native Prototype** — Cursor + Claude Code for prototypes that hand directly to Kelly as working Tailwind/React code
4. **Prototype → Evolved Spec** — Feed the working prototype back into Claude Code; extract all design decisions; generate structured documentation automatically

### The "Prototype → Evolved Spec" Workflow (Most Novel)
This is the workflow with the highest impact claim. After building a prototype in Cursor:
- Attach the HTML file to Claude Code via `@filename`
- Ask it to extract: design decisions (LOCK or REVISIT), new requirements discovered, component inventory, interaction specs, open questions, updated acceptance criteria
- Claude Code reads CSS variables, class names, JS interactions and produces a structured markdown document
- Replaces a **3–4 hour manual documentation pass** with ~45 seconds of AI extraction

---

## 5. Key Principles the Initiative Teaches

These should inform website tone and content framing:

1. **Specificity is the skill** — Vague prompts produce vague output. Real column names, real site names, real data distributions unlock quality.
2. **Think in iterations, not shots** — First prompt = structure. Second = visual refinement. Third = interaction states. Don't try to perfect in one go.
3. **Name the design language explicitly** — Without a reference (Salesforce, Jira, Linear, GOV.UK), AI defaults to generic consumer-app aesthetic.
4. **Real data is a design tool** — Lorem Ipsum prevents useful stakeholder feedback. Realistic data (patient IDs, site names, actual counts) produces actionable review reactions.
5. **Failure is a diagnostic signal** — Bad output means the prompt lacked context, style direction, or scope discipline. Diagnose and refine; don't abandon.
6. **Designer judgment is still the product** — AI generates options. The designer decides what's correct. This is a higher-order skill, not a lesser one.
7. **Prototype to discover, not confirm** — Use fast prototyping to explore directions you'd otherwise never have time to try.
8. **The prototype documents itself** — Once built, an AI can extract the spec. Building the prototype and writing the spec can happen simultaneously.

---

## 6. Team Roles and Named Commitments

| Person | Role | Post-Workshop Commitment |
|--------|------|--------------------------|
| Ahmed | UX / Design Lead | 3 Claude Design use cases from current projects this week |
| Kelly | Frontend Dev Lead | Cursor + Tailwind template for team use |
| Brittany | Designer | AI requirements synthesis on next feasibility project |
| Margaret | Designer | Cursor prototype for one sponsored portal feature before building in Figma |
| Daniel | Clinical domain / UX | MCP server setup with Kelly — week 3 |

### Week 3 Initiative: Figma MCP Integration
Daniel and Kelly are scoped to set up the **Figma MCP** (Model Context Protocol) connection so Claude Code can read directly from Figma frames — bypassing Figma Make credit costs for documentation extraction.

Setup:
```bash
npm install -g figma-mcp
# Add Figma Personal Access Token to ~/.claude/mcp.json
# Verify with /mcp in Claude Code — should see "figma" listed
```

---

## 7. Prompt Anatomy Reference (for Content Generation)

When generating workshop content, examples, or tutorial copy, follow this five-ingredient structure for any prompt example shown on the website:

| Ingredient | Purpose |
|------------|---------|
| ① Persona + Context | Who uses it and in what workflow moment |
| ② Specificity | Exact names, column names, real data distributions |
| ③ Constraints | Layout rules, required elements, exclusions |
| ④ Quality Signal | Reference product, domain language, anti-patterns |
| ⑤ Output Format | What format the output should take |

---

## 8. Tone and Voice Guidelines for Website Content

- **Enterprise, not consumer** — Same design language as the products the team builds: functional, dense, precise
- **Practitioner-to-practitioner** — Not marketing copy. The audience knows what a PRD is, what WCAG means, what a kebab menu is.
- **Honest about tradeoffs** — Every tool has real limitations. Name them. The team will trust content that acknowledges friction.
- **Action-oriented** — Each section should leave the reader knowing what to do next, not just what to think
- **Avoid AI hype language** — No "revolutionary," "game-changing," or "10x." Use: "replaces," "eliminates," "reduces from X hours to Y minutes"

---

## 9. Content Themes for the Website

These are the high-signal topics that emerge from the initiative context and should anchor the site's content architecture:

### Design Practice
- How to write prompts that produce enterprise-quality UI
- Iterative prompting patterns for data-heavy screens
- When to use Claude Design vs. Figma Make vs. Cursor
- Real data as a design tool (anti-Lorem Ipsum case)
- AI-assisted requirements synthesis from stakeholder transcripts

### SDLC Process Improvement
- The prototype-to-spec gap and how to close it
- Extracting evolved specs from working prototypes
- Acceptance criteria that emerge from building (not just speccing)
- Connecting PRD → prototype → evolved spec in one workflow
- Role-based handoff: what designers give to Kelly vs. what Claude Code generates directly

### Tool Guides
- Claude Design setup and first prompt guide
- Figma Make credit optimization (when to use it, when to switch tools)
- Cursor + Claude Code for designers who aren't developers
- Figma MCP integration walkthrough (week 3)

### Regulated / Clinical Context
- Designing for WCAG 2.1 AA in data-dense clinical applications
- Color-blind-safe status indicators (icon + label, not color alone)
- 21 CFR Part 11 implications for design decisions (audit logging, role gates)
- What "de-identified" means for UI display vs. panel views

---

## 10. Component Library and Design System

### Technology Stack
The team uses a **forked Angular Material UI** as their component library and design system. This is a critical constraint for any code generation, prototype-to-handoff workflows, and design system documentation on the website.

Key implications for Claude Code when generating content or features:
- Prototype output from Cursor (Tailwind/Shadcn) is **directionally useful but not directly shippable** — Kelly translates to Angular/Angular Material, not copy-pastes
- Any code examples on the website that show "handoff-ready" code should acknowledge this translation step rather than implying zero friction
- The design tokens (colors, spacing, typography) live in the Angular Material theme, not a Tailwind config — prompts should reference this when guiding users on design system integration

### Storybook — Active Uncertainty
The team currently uses **Storybook** to host and develop components, but this is **under review**. The core issue: Storybook's Angular support is significantly less mature than its React support. Specific friction areas include:
- Angular-specific decorators and module setup are more complex than React equivalents
- Hot module replacement and story rendering are less reliable with Angular
- The Storybook ecosystem (addons, community stories, AI integrations) skews heavily React

**What this means for website content:**
- Do not present Storybook as a settled part of the team's workflow — frame it as "currently used" with the caveat that alternatives are being evaluated
- The "Claude Code generates Storybook stories" capability mentioned in the workshop is valuable *if* they stay on Storybook, but should be framed as contingent
- Content covering the documentation loop (Workflow D / Prototype → Evolved Spec) should acknowledge that the component inventory output is tool-agnostic — useful whether they stay on Storybook, migrate to an alternative (e.g. Histoire, which has stronger Angular/Vite support), or build internal documentation tooling
- When the Figma MCP integration (Section 6, week 3 — Daniel + Kelly) is covered, note that it produces component specs that are format-agnostic and not tied to Storybook

### How Claude Code and Cursor Close the Angular Material Gap

This is an underexplored capability that should be surfaced explicitly in website content. The common assumption is that AI prototyping tools produce React/Tailwind output and Angular teams are left to translate manually. That's not accurate when Claude Code is in the loop.

**Cursor alone:** Claude Code in Cursor can generate Angular Material components directly — not Tailwind stubs — when the prompt specifies the stack. A prompt like *"Build this enrollment table as an Angular 17 component using Angular Material `mat-table`, `mat-chip`, and `mat-menu`. Use the team's existing theme tokens for teal and navy."* produces Angular-idiomatic output Kelly can work with directly, not a React prototype she has to reverse-engineer.

**Claude Code reading the existing codebase:** Because Claude Code can be pointed at the team's actual forked Angular Material source (via `@filename` or MCP), it can:
- Infer the team's custom theme tokens and component overrides
- Generate new components that match the fork's conventions, not vanilla Angular Material defaults
- Identify when a prototype decision conflicts with how the fork has modified a base component (e.g. if the fork's `mat-chip` has a non-standard variant API)

**Cursor + Claude Design in combination:** Claude Design generates the interactive prototype for exploration and stakeholder review (fast, shareable, no Angular knowledge required). Once a direction is approved, that prototype — plus the evolved spec extracted from it — becomes the brief fed into Cursor + Claude Code, which then generates the Angular Material implementation. The two tools operate in sequence: Claude Design owns the *what*, Cursor + Claude Code owns the *how in Angular*.

**The practical workflow for Kelly:**
1. Ahmed uses Claude Design to get stakeholder sign-off on a direction
2. Claude Code extracts the evolved spec from the prototype (component inventory, interaction specs, design decisions)
3. Kelly opens Cursor, attaches the spec and the relevant section of the forked component library
4. Claude Code generates Angular Material components aligned to the fork — not generic Material, not Tailwind
5. Kelly reviews, adjusts, and integrates — rather than translating from scratch

This reframes the prototyping tools from "useful for designers but creates Angular debt" to "a complete pipeline that terminates in Angular Material output." That framing is important for Kelly's buy-in and for website content aimed at development-side readers.

### Implications for the "Prototype → Evolved Spec" Workflow
The evolved spec output from Claude Code (component inventory, interaction specs, design decisions) is the most Storybook-independent artifact in the workflow. If the team moves away from Storybook, the spec document remains valuable as input to whatever component documentation system they adopt. Website content should position the *extraction workflow* as durable, and the *Storybook story generation* as one optional output of it.

---

## 11. Reference Feature: Patient Enrollment Table

When Claude Code needs a concrete example for any website content — tutorials, prompt examples, case studies — use this feature as the canonical reference:

- **Trial:** ONCO-2024-003
- **Sites:** Cedars-Sinai Medical Center LA, Mayo Clinic Rochester MN, Johns Hopkins Hospital Baltimore MD
- **Patient count:** 12 patients
- **Status distribution:** Screened ×2, Enrolled ×3–5, On Treatment ×3–5, Withdrawn ×1, Completed ×1
- **Risk flags:** 1 Protocol Deviation (red), 2 At Risk (amber)
- **Header:** Study code, 8/15 enrolled, 53% progress bar, four stat cards
- **Filters:** Status dropdown, Site dropdown, "Show flagged only" toggle
- **Actions per row:** View Record, Schedule Visit, Flag for Review (three-dot menu)
- **Design style:** White background, teal (`#028090`) and navy (`#0D1B2A`) accents, high data density

---

*Last updated: April 2026. Source documents: Workshop_Facilitator_Runbook_v2.docx, PRD_Patient_Enrollment_Table.docx, vibe-coding-guide.html, cursor-demo-prompt.py*
