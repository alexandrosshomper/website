# COORDINATION.md — Active Work Tracker

> Claude Code instances: read this before starting work. Update it as you go.
> Last updated: 2026-03-22

---

## Active Instances

| Instance | Branch | Focus | Status |
|----------|--------|-------|--------|
| A | `Page-Performance-Improvement` | Portfolio & index.html performance | In progress |

---

## File Claims

> List every file you are actively editing. Others must not touch claimed files.

| File | Claimed by | Since |
|------|------------|-------|
| `src/components/Pages/Portfolio/Portfolio.js` | Instance A | 2026-03-22 |
| `public/index.html` | Instance A | 2026-03-22 |

---

## SEO Task Queue

### Execution Plan

```
Wave 1 (parallel):
  Session B  →  seo/public-foundation     ✓ MERGED
  Session C  →  seo/routes-and-sitemap    ✓ MERGED
  Session D  →  seo/image-alt-text        ✓ MERGED

Wave 2 (after all Wave 1 branches merged to master):
  Session E  →  seo/meta-and-schema       ✓ COMPLETE — ready to merge

Wave 3 (after Wave 2 merged):
  Session F  →  seo/pre-rendering
```

---

### WAVE 2 — SESSION E: Per-Page Meta + Structured Data
**Branch:** `seo/meta-and-schema`
**Effort:** Large — touches every page component
**WAIT FOR:** Sessions B, C, D merged ✓ — READY TO START

**Files claimed:**
- `src/index.js`
- `src/App.js`
- `src/components/Pages/Home/HomeJob.js`
- `src/components/Pages/Profile/Profile.js`
- `src/components/Pages/Portfolio/Portfolio.js`
- `src/components/Pages/Contact/Contact.js`
- `src/components/Pages/Writing/Writing.js`
- `src/components/Pages/Reports/ReportTemplate.js`
- `src/components/Pages/Reports/createReportPage.js`
- `src/components/Pages/CaseStudies/CaseTemplate.js`
- `src/components/Pages/Flows/FlowPageTemplate.js`

**Do NOT touch:** `src/routes.js`, `public/` files, any styling

---

### WAVE 3 — SESSION F: Pre-Rendering
**Branch:** `seo/pre-rendering`
**Effort:** Large — architectural change
**WAIT FOR:** Session E to be merged to master first

**Files claimed:** `package.json`, `src/index.js`, `server.js`
**Do NOT touch:** Any component files

---

## Completed / Ready to Merge

| Branch | What it does | Status |
|--------|-------------|--------|
| `seo/public-foundation` | Fix meta description, add OG fallback tags, update manifest.json, add Sitemap to robots.txt, create llms.txt | Merged ✓ |
| `seo/routes-and-sitemap` | Sync routes.js with App.js, fix "indsutry" URL typo + 301 redirect, update sitemap priorities + lastmod, add 404 route | Merged ✓ |
| `seo/image-alt-text` | Alt text for all img tags — 12 files updated, 0 logic changes. Note: `Portfolio.js:439 CaseBlockImage` left for Instance A | Merged ✓ |
| `seo/meta-and-schema` | react-helmet→react-helmet-async migration; global Person+WebSite JSON-LD in App.js; per-page Helmet (title, description, canonical, OG, Twitter) on 5 pages; Article JSON-LD in ReportTemplate; BreadcrumbList JSON-LD in CaseTemplate + FlowPageTemplate; fix "Purpouse" typo | Ready to merge ✓ |

---

## Notes & Blockers

- Instance A: Performance branch in progress — claims `Portfolio.js` and `public/index.html`
- Session D note: `Portfolio.js:439` has `<CaseBlockImage>` missing `alt` — claimed by Instance A, left for them to add (e.g., `alt={caseStudy.name || ""}`) when they finish
- `HomeJob.js`: typo "Purpouse" → "Purpose" fixed by Session E ✓

---

## How to Use This File

**Starting work:**
1. Read the full task brief for your session above
2. Add a row to "Active Instances" at the top
3. Add rows to "File Claims" for every file you plan to edit
4. Update your status as you progress

**Finishing work:**
1. Remove your file claims
2. Move your branch to "Completed / Ready to Merge"
3. Remove yourself from "Active Instances"

**Conflicts:**
- If two instances need the same file, coordinate via git (one finishes and merges first, the other rebases)
- All Wave 1 branches off `master`. Wave 2 branches off `master` after Wave 1 merges. Wave 3 same.
