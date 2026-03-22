# COORDINATION.md — Active Work Tracker

> Claude Code instances: read this before starting work. Update it as you go.
> Last updated: 2026-03-22

---

## Active Instances

| Instance | Branch | Focus | Status |
|----------|--------|-------|--------|
| A | `Page-Performance-Improvement` | Portfolio & index.html performance | In progress |
| B | `seo/public-foundation` | public/ files foundation (no src/ touches) | Complete ✓ |
| C | `seo/routes-and-sitemap` | Routes sync, sitemap, URL typo fix, 404 route | Complete ✓ |

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

Three waves. Wave 1 runs in parallel (3 sessions). Wave 2 waits for Wave 1 to merge.
Wave 3 waits for Wave 2 to merge.

```
Wave 1 (parallel):
  Session B  →  seo/public-foundation     (public/ files, no src/ touches)
  Session C  →  seo/routes-and-sitemap    (routes, URLs, sitemap — risky, isolated)
  Session D  →  seo/image-alt-text        (alt attributes only — no other changes)

Wave 2 (after all Wave 1 branches merged to master):
  Session E  →  seo/meta-and-schema       (per-page OG tags + JSON-LD structured data)
                                           ↑ depends on corrected URLs from Session C

Wave 3 (after Wave 2 merged):
  Session F  →  seo/pre-rendering         (react-snap or SSR — pre-renders final app)
```

---

### WAVE 1 — SESSION B: Public Files Foundation
**Branch:** `seo/public-foundation`
**Effort:** Small — no logic changes, config/content only
**Files claimed:**
- `public/index.html`
- `public/manifest.json`
- `public/robots.txt`
- `public/llms.txt` *(new file)*

**Do NOT touch:** Any file in `src/`

**What to do:**

1. `public/index.html` — fix the placeholder meta description (line 10):
   - Change `content="Web site created using create-react-app"` to:
     `"Alexandros Shomper — Product Lead & Designer with 15+ years experience in B2B and B2C, specialising in product-led growth, onboarding, and design systems."`
   - Add a fallback `og:title`, `og:description`, `og:type`, `og:url` in the `<head>` as static fallbacks for when JS hasn't rendered yet. These will be overridden by react-helmet per-page but serve as safe defaults for crawlers.

2. `public/manifest.json` — fix CRA placeholders:
   - `"name"` → `"Alexandros Shomper"`
   - `"short_name"` → `"Shomper"`
   - Add `"description"` field

3. `public/robots.txt` — add Sitemap directive:
   ```
   User-agent: *
   Disallow:
   Sitemap: https://www.alexandrosshomper.de/sitemap.xml
   ```

4. `public/llms.txt` *(create new file)* — AI crawler guidance:
   ```
   # Alexandros Shomper — alexandrosshomper.de

   > Product Lead and Designer with 15+ years of experience in B2B and B2C.
   > Specialising in product-led growth, user onboarding, activation, and design systems.

   ## Key pages
   - Homepage / Portfolio: https://www.alexandrosshomper.de/
   - Profile / About: https://www.alexandrosshomper.de/about
   - Case Studies: https://www.alexandrosshomper.de/case-studies
   - Reports: https://www.alexandrosshomper.de/reports
   - Writing: https://www.alexandrosshomper.de/writing
   - Contact: https://www.alexandrosshomper.de/contact

   ## Reports (long-form content)
   - Why Onboarding & Activation Are The Ultimate Levers for SaaS Growth:
     https://www.alexandrosshomper.de/reports/why-onboarding-and-activation-are-the-ultimate-levers-for-saas-growth
   - Four Industry Shifts Making Onboarding and Activation Indispensable:
     https://www.alexandrosshomper.de/reports/four-industry-shifts-making-onboarding-and-activation-indispensable

   ## Case Studies
   - Asana Onboarding Case Study: https://www.alexandrosshomper.de/case-studies/asana
   ```

**CAUTION:** `public/index.html` is currently claimed by Instance A (performance work).
Coordinate with Instance A before starting — merge their branch first OR confirm they are not touching `<head>` meta tags.

---

### WAVE 1 — SESSION C: Routes & Sitemap
**Branch:** `seo/routes-and-sitemap`
**Effort:** Medium — URL changes require redirect setup. Take care.
**Files claimed:**
- `src/routes.js`
- `src/App.js` *(route path strings only — do not touch Helmet or component logic)*
- `src/components/Pages/Reports/FourIndustryShifts.js` *(slug reference only)*
- `public/sitemap.xml`

**Do NOT touch:** Any Helmet tags, any styling, any component logic

**What to do:**

1. **Fix typo URL slug** — the broken URL that is already indexed by Google:
   - Old: `/reports/four-indsutry-shifts-making-onboarding-and-activation-indispensible`
   - New: `/reports/four-industry-shifts-making-onboarding-and-activation-indispensable`
   - Update in: `src/App.js` (Route path), `src/routes.js`, `public/sitemap.xml`
   - Add a redirect from old → new URL in `server.js` (Express `res.redirect(301, ...)`)
   - Update any internal links referencing the old slug

2. **Sync `routes.js` with `App.js`** — routes.js has stale paths that server uses for sitemap:
   - Remove: `/occhio`, `/knauf-explorations`, `/knauf-account`, `/knauf-orderoverview`, `/myknauf`
   - Add: `/portfolio/occhio`, `/portfolio/knauf-explorations`, `/portfolio/knauf-account`, `/portfolio/knauf-order-overview`, `/portfolio/knauf-material-calculator`, `/portfolio/myknauf`
   - Add missing: `/flows/wrike`, `/flows/trello`
   - Add: `/about` (currently listed as `/profile` in routes.js but App.js uses `/about`)

3. **Fix `public/sitemap.xml`**:
   - Fix the typo URL (match the new corrected slug)
   - Add missing URLs from step 2
   - Set differentiated `priority` values: homepage `1.0`, reports `0.9`, case-studies `0.8`, profile/contact `0.7`, flow sub-pages `0.5`
   - Add `<lastmod>2026-03-22</lastmod>` to all entries

4. **Add 404 catch-all route** in `src/App.js`:
   - Add a final `<Route component={NotFound} />` with a simple inline 404 component

---

### WAVE 1 — SESSION D: Image Alt Text
**Branch:** `seo/image-alt-text`
**Effort:** Small-medium — repetitive but low risk
**Files claimed:** All component files containing `<img>` tags (identify with grep first)
**Do NOT touch:** Any logic, styling, or routing

**What to do:**

1. Find every `<img>` tag in `src/components/` without a meaningful `alt` attribute
2. Add descriptive alt text to content images (describe what the image shows)
3. Add `alt=""` to purely decorative images (tells screen readers to skip)
4. For portfolio/case study screenshots: use format `"[Company] [screen description], e.g. "Asana onboarding flow step 2 — task creation screen"`
5. For profile/identity images: use `"Alexandros Shomper — Product Lead"`

**Start by running:**
```bash
grep -rn "<img" src/components --include="*.js" | grep -v 'alt='
```

---

### WAVE 2 — SESSION E: Per-Page Meta + Structured Data
**Branch:** `seo/meta-and-schema`
**Effort:** Large — touches every page component
**WAIT FOR:** Sessions B and C to be merged to master first
**Why:** OG canonical URLs and JSON-LD `@id` fields must use the corrected slugs from Session C

**Files claimed:**
- `src/App.js` *(Helmet global schema only)*
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

**What to do:**

1. **Switch `react-helmet` → `react-helmet-async`**:
   - `npm install react-helmet-async`
   - `npm uninstall react-helmet`
   - Wrap `<App>` in `<HelmetProvider>` in `src/index.js`
   - Update all `import { Helmet } from 'react-helmet'` → `import { Helmet } from 'react-helmet-async'`

2. **Add OG + Twitter + canonical to every page** via Helmet. Minimum per page:
   ```jsx
   <Helmet>
     <title>Page Title | Alexandros Shomper</title>
     <meta name="description" content="Unique description for this page" />
     <link rel="canonical" href="https://www.alexandrosshomper.de/[path]" />
     <meta property="og:title" content="Page Title | Alexandros Shomper" />
     <meta property="og:description" content="Unique description" />
     <meta property="og:url" content="https://www.alexandrosshomper.de/[path]" />
     <meta property="og:type" content="website" />
     <meta property="og:image" content="https://www.alexandrosshomper.de/img/social/og-default.jpg" />
     <meta name="twitter:card" content="summary_large_image" />
   </Helmet>
   ```

3. **Fix homepage canonical** — both `/` and `/portfolio` render `Portfolio.js`. Add `canonical` pointing to `/` on the homepage route, and `/portfolio` on the portfolio route.

4. **Add JSON-LD structured data** in `src/App.js` (global, always present):
   ```json
   {
     "@context": "https://schema.org",
     "@type": "Person",
     "name": "Alexandros Shomper",
     "url": "https://www.alexandrosshomper.de",
     "jobTitle": "Product Lead",
     "sameAs": [
       "https://www.linkedin.com/in/alexshomper/",
       "https://github.com/alexandrosshomper"
     ]
   }
   ```

5. **Add Article JSON-LD** in `ReportTemplate.js` for the two report pages

6. **Add BreadcrumbList JSON-LD** in `CaseTemplate.js` and `FlowPageTemplate.js`

7. **Fix content typos** while in these files:
   - `HomeJob.js` line ~457: `"Purpouse"` → `"Purpose"`

8. **Improve page `<title>` patterns** — change from `"Alexandros Shomper"` on every page to:
   - Homepage: `"Alexandros Shomper — Product Lead & Designer"`
   - Profile: `"About | Alexandros Shomper"`
   - Portfolio: `"Portfolio | Alexandros Shomper"`
   - Asana Case Study: `"Asana Onboarding Case Study | Alexandros Shomper"`
   - Reports index: `"Reports | Alexandros Shomper"`
   - Contact: `"Contact | Alexandros Shomper"`

---

### WAVE 3 — SESSION F: Pre-Rendering
**Branch:** `seo/pre-rendering`
**Effort:** Large — architectural change
**WAIT FOR:** Session E to be merged to master first
**Why:** Pre-rendering bakes the HTML at that point in time — all meta tags must be correct first

**Files claimed:** `package.json`, `server.js`, build configuration
**Do NOT touch:** Any component files

**What to do:**

1. Install and configure `react-snap` for static pre-rendering:
   ```bash
   npm install --save-dev react-snap
   ```
2. Add `"postbuild": "react-snap"` to package.json scripts
3. Update `src/index.js` to use `hydrate` instead of `render` when pre-rendered HTML is present
4. Test that all routes pre-render correctly
5. Verify pre-rendered HTML contains correct meta tags (check with `curl` — no JS)

---

## Completed / Ready to Merge

*(move entries here when your branch is ready for PR)*

| Branch | What it does | PR # |
|--------|-------------|------|
| `seo/public-foundation` | Fix meta description, add OG fallback tags, update manifest.json, add sitemap to robots.txt, create llms.txt | — |
| `seo/routes-and-sitemap` | Sync routes.js with App.js, fix "indsutry" URL typo + 301 redirect, update sitemap priorities + lastmod, add 404 route | — |

---

## Notes & Blockers

- Instance A: Performance branch in progress — claims `Portfolio.js` and `public/index.html`
- Session B cannot start until Instance A releases `public/index.html` (or A confirms they're not touching `<head>`)
- All SEO sessions must branch off `master`, not off each other

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
