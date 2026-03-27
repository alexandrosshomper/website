# Case Studies Pre-rendering Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Fix case study pages so crawlers and AI scrapers receive fully-rendered HTML instead of a pre-rendered 404.

**Architecture:** react-snap runs after every CRA build via `postbuild`, visiting each route with Puppeteer and saving a static `index.html` per route. The fix is entirely in the `reactSnap` config in `package.json` — three key changes. No component or routing changes needed.

**Tech Stack:** react-snap, Puppeteer, Create React App, Emotion (CSS-in-JS)

---

### Task 1: Update reactSnap config in package.json

**Files:**
- Modify: `package.json` (the `reactSnap` block, lines 42–75)

- [ ] **Step 1: Open `package.json` and locate the `reactSnap` block**

It currently looks like this:

```json
"reactSnap": {
  "source": "build",
  "destination": "build",
  "fallbackPage": null,
  "include": [
    "/",
    "/about",
    ...
    "/case-studies",
    "/case-studies/asana",
    ...
  ],
  "puppeteerArgs": [
    "--no-sandbox",
    "--disable-setuid-sandbox"
  ],
  "waitFor": 500,
  "crawl": false
},
```

- [ ] **Step 2: Apply the three changes**

Replace the `reactSnap` block with:

```json
"reactSnap": {
  "source": "build",
  "destination": "build",
  "fallbackPage": null,
  "include": [
    "/",
    "/about",
    "/portfolio",
    "/contact",
    "/writing",
    "/reports",
    "/reports/why-onboarding-and-activation-are-the-ultimate-levers-for-saas-growth",
    "/reports/four-industry-shifts-making-onboarding-and-activation-indispensable",
    "/case-studies",
    "/case-studies/asana",
    "/flows",
    "/flows/asana",
    "/flows/linear",
    "/flows/wrike",
    "/flows/trello",
    "/portfolio/occhio",
    "/portfolio/knauf-explorations",
    "/portfolio/knauf-account",
    "/portfolio/knauf-order-overview",
    "/portfolio/knauf-material-calculator",
    "/portfolio/myknauf"
  ],
  "puppeteerArgs": [
    "--no-sandbox",
    "--disable-setuid-sandbox"
  ],
  "waitFor": 2000,
  "inlineCss": true,
  "minifyHtml": false,
  "crawl": false
},
```

Three changes:
- `waitFor: 500` → `waitFor: 2000` — gives Suspense/lazy components time to resolve
- Added `"inlineCss": true` — inlines Emotion CSS into each static file so crawlers see styled content
- Added `"minifyHtml": false` — prevents react-snap from stripping emoji and special characters in case study content

- [ ] **Step 3: Commit the config change**

```bash
git add package.json
git commit -m "fix: increase react-snap waitFor and enable inlineCss for case studies"
```

---

### Task 2: Build and verify locally

**Files:**
- No file changes — this task is build + inspection only

- [ ] **Step 1: Run the full build**

```bash
npm run build
```

This runs CRA build followed by `postbuild` (react-snap). It will take several minutes — react-snap opens Puppeteer for every route in the `include` list. Watch for errors in the output. Expected end:

```
✅ crawled 20 out of 20
```

If Puppeteer crashes, check that `puppeteer` is installed (`npm install` if needed).

- [ ] **Step 2: Verify the case study HTML file was created**

```bash
ls build/case-studies/asana/
```

Expected: `index.html` exists.

- [ ] **Step 3: Check the file contains actual case study content**

```bash
grep -c "Audit Walkthrough" build/case-studies/asana/index.html
```

Expected output: `1` (the string is present).

If output is `0`, the Suspense component still didn't resolve in time. Increase `waitFor` to `3000` in `package.json` and re-run `npm run build`.

- [ ] **Step 4: Check that Emotion styles are inlined**

```bash
grep -c "data-emotion" build/case-studies/asana/index.html
```

Expected output: `1` or higher (the `<style data-emotion>` tag is present).

If output is `0`, `inlineCss` didn't work — verify the key is spelled correctly in `package.json`.

- [ ] **Step 5: Check the case-studies index page**

```bash
grep -c "Case Study" build/case-studies/index.html
```

Expected output: `1` or higher.

- [ ] **Step 6: Commit nothing** — build output is gitignored. No commit needed here.

---

### Task 3: Deploy and verify in production

**Files:**
- No file changes — this task is deploy + smoke test only

- [ ] **Step 1: Push the branch and deploy**

Deploy however the project is currently deployed (push to the hosting branch or trigger a CI build). The `postbuild` script runs automatically as part of `npm run build` in the deploy pipeline.

- [ ] **Step 2: Smoke-test the case study page via curl (no JS)**

```bash
curl -s https://alexandrosshomper.de/case-studies/asana | grep "Audit Walkthrough"
```

Expected: the string is printed to stdout. If empty, the deploy hasn't finished or the static file wasn't served.

- [ ] **Step 3: Smoke-test the case studies index**

```bash
curl -s https://alexandrosshomper.de/case-studies | grep "Case Study"
```

Expected: the string is printed to stdout.

- [ ] **Step 4: Confirm no 404 in the HTML**

```bash
curl -s https://alexandrosshomper.de/case-studies/asana | grep "Page not found"
```

Expected: no output (the 404 string is gone).

- [ ] **Step 5: Commit any follow-up fixes if needed, then mark done**
