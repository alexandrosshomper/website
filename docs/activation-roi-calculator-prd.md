# Activation ROI Calculator — Product Requirements Document (PRD)

- **App Name:** Activation ROI Calculator
- **Owner:** Alex (Growth Advisor / Product-Led Growth Specialist)
- **Date:** October 2025
- **Version:** 1.0

## 1. Vision

Help product teams quantify the business impact of improving activation rates — bridging the gap between UX changes and revenue outcomes.

By connecting activation improvements to signups, conversions, and margins, teams can make the case for prioritizing onboarding and time-to-value.

**Elevator Pitch:** “A lightweight ChatGPT app that calculates the financial ROI of improving user activation — translating small UX wins into big revenue stories.”

## 2. Goals & Success Criteria

| Goal | Success Metric |
| --- | --- |
| Help PMs & Growth teams calculate ROI of activation lifts | ≥80% of beta users complete one full calculation |
| Reduce time to build an activation business case | <2 minutes to result |
| Drive thought leadership on PLG & activation ROI | 3K+ LinkedIn impressions per post demo |
| Launch a working ChatGPT App prototype | App callable inside ChatGPT (inline UI card) |

## 3. Target Users

**Primary:**

- Growth PMs and Product Managers
- Startup founders optimizing onboarding
- UX or Growth consultants preparing business cases

**Secondary:**

- Investors evaluating PLG startups
- Analysts or coaches teaching PLG frameworks

**User Needs:**

- Connect activation rate lifts to real € impact
- Quickly estimate payback periods for activation projects
- Support arguments in internal decks / investor memos

## 4. Problem Statement

Teams know activation is important but can’t quantify its ROI. Without a clear financial model, activation efforts lose priority to direct monetization features.

Growth experts need a tool that:

- Turns activation lifts into numbers CFOs understand
- Works instantly with just a few inputs
- Speaks the PLG language: “activation”, “Aha!”, “time-to-value”, “retention compounding”

## 5. Solution Overview

An interactive ROI calculator that takes product metrics and computes:

- Incremental activated users
- Incremental paying customers
- Monthly and total gross profit
- ROI % and payback months

The tool visualizes the result in a clean, inline card (ChatGPT app style) and generates a summary narrative you can copy to Slack or LinkedIn.

## 6. Core Features

**MVP Features**

1. Input form / prompt parsing (must-have)
2. ROI computation engine (must-have)
3. Inline visualization card (must-have)
4. Narrative summary (must-have)
5. LinkedIn-ready bullet output (nice-to-have)
6. ROI sensitivity hint (nice-to-have)

## 7. Core Calculation Logic

**Inputs**

- Monthly new signups (N)
- Current activation rate (A₁)
- Target activation rate (A₂)
- Free→paid conversion rate after activation (C)
- Average revenue per user (ARPU)
- Gross margin (GM)
- Average months retained post-activation (R)
- Project cost (€)

**Formulas**

1. Incremental Activated Users = N × (A₂ − A₁)
2. Incremental Paying Users = Incremental Activated × C
3. Monthly Gross Profit = Incremental Paying × ARPU × GM
4. Total Gross Profit = Monthly GP × R
5. ROI = (Total GP − Cost) / Cost
6. Payback = Cost / Monthly GP

**Outputs**

- Table of results
- ROI (%)
- Break-even months
- Short narrative summary
- Optional bullet summary

## 8. Example Calculation

**Inputs**

- N = 5,000
- A₁ = 25%, A₂ = 35%
- C = 12%
- ARPU = €30
- GM = 80%
- R = 8
- Cost = €15,000

**Outputs**

- Incremental Activated = 5,000 × (0.35 − 0.25) = 500 users
- Incremental Paying = 500 × 0.12 = 60 customers
- Monthly GP = 60 × 30 × 0.8 = €1,440
- Total GP = 1,440 × 8 = €11,520
- ROI = (11,520 − 15,000) / 15,000 = −23% (not profitable yet)
- Payback = 15,000 / 1,440 = 10.4 months

**Interpretation:** “If we lift activation by 10pp, we add 60 new paying customers monthly. At €30 ARPU, that’s €1.4k profit per month — breakeven in ~10 months.”

## 9. Architecture Overview

**Frontend (in ChatGPT)**

- Inline card UI built with Apps SDK `window.openai` bridge
- React component showing key KPIs + CTA “Try new numbers”
- Option to expand fullscreen

**Backend (App logic)**

- Node.js MCP server using `@modelcontextprotocol/sdk`
- Endpoint `/mcp` registered as Connector
- ROI computation executed on tool invocation
- Structured response (JSON) for ChatGPT

**Data Privacy:** All computation happens statelessly — no data storage.

## 10. User Flow

1. User prompt: “Calculate ROI for improving activation from 25%→35% with 5000 signups.”
2. App asks for inputs (if missing) to fill ARPU, margin, cost, etc.
3. Computation runs server-side via MCP tool.
4. Inline output card displays KPIs + ROI summary.
5. Follow-up options:
   - “Try new numbers” → input changes
   - “Explain this metric” → ChatGPT elaborates

## 11. Design Principles

- Clarity: Results in under 2 seconds, no graphs, just key KPIs.
- Scannability: Activation ROI table mirrors CFO dashboards.
- Conversational: Feels like talking to a Growth Analyst, not Excel.
- Composability: Future updates can chain with “Activation Self-Check”.

## 12. Constraints & Assumptions

- Single-user stateless interactions
- No data persistence
- Results are approximations, not forecasts
- Built for ChatGPT Web UI (App SDK preview)
- Mobile-friendly inline card

## 13. Deliverables

| Feature | Description | Priority |
| --- | --- | --- |
| Input form / prompt parsing | Users enter 7–8 core metrics via chat or inline form | Must-have |
| ROI computation engine | Applies core formulas to produce KPIs and ROI | Must-have |
| Inline visualization card | Displays clean table with metrics and a brief insight paragraph | Must-have |
| Narrative summary | Generates a human-readable summary (3 sentences) | Must-have |
| LinkedIn-ready bullet output | Outputs 3 concise bullets (for posting) | Nice-to-have |
| ROI sensitivity hint | Suggests how much ROI changes with small activation lifts | Nice-to-have |

**Deliverable Checklist**

- MCP Server Code (TypeScript): ROI logic & schema registration
- React Component (App SDK): Inline KPI card + fullscreen
- Connector Config: JSON for ChatGPT Developer mode
- Demo Script: 60-second walkthrough
- LinkedIn Launch Post Draft: Hook → demo → insight → CTA

## 14. Roadmap

| Phase | Deliverable | Time |
| --- | --- | --- |
| Phase 1: MVP Build | ROI formulas + inline text output | 1 day |
| Phase 2: UI Card | React component via `window.openai` | 2 days |
| Phase 3: Fullscreen & Copy CTA | Enhanced visualization | 1 day |
| Phase 4: Launch + LinkedIn Demo | Post, short video, share prompt | 1 day |
| Phase 5: Add Self-check companion | Next app module | Next sprint |

## 15. LinkedIn Launch Angle

“Most teams can’t connect activation lifts to ROI — so I built an AI calculator that does. Enter your numbers, and it tells you exactly how much your activation project could pay back. Built inside ChatGPT using OpenAI’s new App SDK. DM me for the prompt 👇”

## 16. Success Criteria for v1 Launch

- ROI computation accurate to 1 decimal
- Inline card renders correctly in ChatGPT
- Average user completes full flow < 2 minutes
- Post garners >1k impressions or >10 comments

---

# Functional Specification — Activation ROI Calculator (v1)

## Purpose & Scope

Compute and visualize the financial impact of an activation lift using a single tool exposed from an MCP server, rendered inline in ChatGPT via an Apps SDK component (card with optional fullscreen). The app is read-only and stateless.

- Discovery & UX patterns align with Apps SDK design guidelines.
- Component runs in a sandboxed iframe; data exchange via `window.openai`.
- Local testing & connection via Developer Mode → Connectors.

## Primary User Stories

- **US-1:** As a Growth PM, I give 7–8 inputs and get ROI% and payback months in < 2 minutes.
- **US-2:** As a founder, I want a scannable card with KPIs and a 3-sentence narrative I can paste into Slack/LinkedIn.
- **US-3:** As a consultant, I want to tweak inputs quickly (follow-up turn or in-component form) and rerun the calc inline.

**Non-goals (v1):** persistence, auth, external data pulls, multi-project comparisons.

## Inputs, Formulas, Outputs

### Inputs (numbers unless noted)

- `monthly_signups` (N, int ≥ 1)
- `current_activation_pct` (A₁, 0–100)
- `target_activation_pct` (A₂, 0–100, A₂ ≥ A₁)
- `free_to_paid_after_activation_pct` (C, 0–100)
- `arpu_eur` (ARPU, ≥ 0)
- `gross_margin_pct` (GM, 0–100)
- `avg_months_retained` (R, ≥ 1)
- `project_cost_eur` (Cost, ≥ 0)

### Calculations

- `incActivated = N × (A₂ − A₁)` (use decimals for pct)
- `incPaying = incActivated × C`
- `monthlyGP = incPaying × ARPU × GM`
- `totalGP = monthlyGP × R`
- `roi = (totalGP − Cost) / Cost` (if Cost > 0, else null)
- `breakeven = Cost / monthlyGP` (if monthlyGP > 0, else null)

### Outputs

- **KPIs:**
  - `incremental_activated` (int)
  - `incremental_paying` (int)
  - `monthly_gross_profit` (float)
  - `total_gross_profit` (float)
  - `roi_pct` (float or null)
  - `breakeven_months` (float or null)
- **Narrative:** ≤ 280 chars, one-line executive readout
- **Bullets:** Array of 3 short strings, copy-ready insights

## MCP Tool Contract

### Tool name & description

- **Name:** `activation.calculate_roi`
- **Description:** “Use this when a user wants to project ROI from an activation lift given signups, activation %, free→paid %, ARPU, margin, months retained, and project cost.”

### Input schema (Zod/JSON)

```json
{
  "monthly_signups": "number",
  "current_activation_pct": "number",
  "target_activation_pct": "number",
  "free_to_paid_after_activation_pct": "number",
  "arpu_eur": "number",
  "gross_margin_pct": "number",
  "avg_months_retained": "number",
  "project_cost_eur": "number"
}
```

Constraints: int and range validations as specified above.

### Output (tool response shape)

Return three siblings:

1. `structuredContent` → `{ kpis, narrative, bullets }` (consumed by UI)
2. `content` → `[ { "type": "text", "text": "Projected ROI based on your inputs." } ]` (chat text)
3. `_meta` → optional app-internal hints (not for the model)

Attach `_meta["openai/outputTemplate"] = "ui://widget/roi-card.html"` so ChatGPT renders the component for this tool output. Register a resource for the component HTML/JS bundle that the host can load (iframe).

## UI Component Contract (Apps SDK)

### Runtime & bridge

- Component runs in a sandboxed iframe; host injects `window.openai` for data exchange (tool input/output, actions, display mode).

### Data ingress

- Read results via `window.openai.toolOutput` (the `structuredContent` payload)
- Optionally echo inputs via `window.openai.toolInput` for transparency

### Actions

- Recalculate (follow-up turn): `window.openai.sendFollowupTurn({ prompt: "Recalculate with X…" })`
- Optional in-component form: call the tool directly with `window.openai.callTool("activation.calculate_roi", args)`
- Fullscreen: `window.openai.requestDisplayMode({ mode: "fullscreen" })`

### UI states

- **Loading:** skeleton KPI tiles (on tool call)
- **Ready:** KPI tiles (6), mini table of inputs, narrative, 3 bullets, “Try new numbers” button
- **Error:** friendly message + “Edit inputs” CTA
- **Empty:** guidance copy listing required inputs & example

### Visual guidelines

- Inline card first, concise and scannable; optional fullscreen table for CFO-style view—aligned with design guidelines on clarity and conversational tone.

## Validation & Error Handling

### Client-side (component form, when enabled)

- Numeric inputs only; enforce ranges with inline hints
- Format percent inputs as 0–100 (display %)

### Server-side (tool)

- Zod validation with precise messages:
  - A₂ ≥ A₁ else error “Target activation must be ≥ current”
  - Reject extreme values (e.g., ARPU > 10,000) with sanity message
- Calculation guards:
  - If Cost == 0 → `roi_pct = null` but show breakeven if computable
  - If `monthlyGP == 0` → `breakeven = null`

### Error surfaces

- Return `content[0].text` with a short, actionable error
- Component renders error card with the same message + “Try again” button

## Performance

- Tool execution < 200ms for typical inputs (pure math)
- Bundle size target < 80KB gz (single card, no design system)
- Fast-path re-render on follow-ups (no network beyond tool call)

## Security & Privacy

- Stateless: no persistence; inputs/outputs exist only for the active conversation
- No third-party calls; no PII inference
- Runs within ChatGPT’s sandboxed iframe; component only talks via `window.openai`

## Telemetry (optional, anonymized)

- Count of tool invocations, average latency (server logs)
- No user data stored; log only aggregate metrics and error codes
- Toggleable via environment variable

## Connector & Dev-mode Setup (for testing)

- Enable Developer Mode → Connectors in ChatGPT; create a connector pointing to the MCP server’s `/mcp` endpoint (HTTPS).
- Plus/Pro personal accounts: custom connectors require developer mode.

## Acceptance Criteria & Tests

### Functional

- **AC-1:** Given valid inputs, tool returns all 6 KPIs, narrative, and 3 bullets.
- **AC-2:** Card renders inline; fullscreen works.
- **AC-3:** Follow-up “Try new numbers” produces a new tool run with updated values.
- **AC-4:** Validations trigger correct error states; errors are human-readable.

### Example test cases

- **TC-A (Happy path):** Inputs: `N=5000`, `A₁=25`, `A₂=35`, `C=12`, `ARPU=30`, `GM=80`, `R=8`, `Cost=15000`. Expect: `incActivated=500`, `incPaying=60`, `monthlyGP=1440`, `totalGP=11520`, `roi_pct≈-23.2`, `breakeven≈10.4`.
- **TC-B (Zero cost):** ROI null, breakeven computed.
- **TC-C (No margin or no paying):** breakeven null, ROI negative or zero.
- **TC-D (Invalid):** `A₂ < A₁` → validation error.

## Prompts & Copy

### Discovery prompt

“Use Activation ROI Calculator to project ROI with 5,000 signups, activation 25%→35%, free→paid 12%, ARPU €30, margin 80%, retention 8 months, and project cost €15,000.”

### Narrative template

“Lifting activation from {A₁}%→{A₂}% adds ~{incActivated}/mo at Aha! and ~{incPaying} payers/mo, worth €{monthlyGP}/mo gross profit. Over {R} months, that’s €{totalGP}, giving ROI {roi_pct}% and payback {breakeven} months.”

### Bullets (examples)

- “Small activation lifts compound downstream”
- “Cut time-to-value; remove top friction step”
- “Track activation % + median TTV weekly”

## Implementation Notes

- Server: Node/TS, `@modelcontextprotocol/sdk` to expose `activation.calculate_roi`.
- UI: React component bundled to a single HTML+JS resource that ChatGPT loads; communicate via `window.openai`.
- Design: Follow App design guidelines for clean, conversational visuals.

## Launch Readiness Checklist

- Tool returns valid structured content for all test cases
- Card and fullscreen modes verified in Developer Mode
- Descriptions optimized for app suggestion
- Demo script recorded (30–60s)
- LinkedIn post draft ready
