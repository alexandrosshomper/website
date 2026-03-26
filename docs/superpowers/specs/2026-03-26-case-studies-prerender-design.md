# Case Studies — Server-Side Pre-rendering

**Goal:** Make case study pages readable by crawlers and AI scrapers. Each URL should
serve fully-rendered HTML without requiring JavaScript execution.

---

## Problem

`/case-studies` and `/case-studies/asana` currently return a pre-rendered 404 page in
production. The react-snap infrastructure is working (homepage is correctly pre-rendered),
but the case study routes are broken in the deployed build. Additionally, the current
react-snap config has a `waitFor` of 500ms — too short for Suspense + lazy-loaded
components to resolve before the snapshot is taken.

---

## Approach

**Build-time pre-rendering via react-snap.** No new infrastructure.
After `npm run build`, react-snap (Puppeteer) visits each route, waits for React to
render, and saves a static HTML file. These files are served directly by the host.
`index.js` already does the correct `hydrate` pattern for rehydration.

---

## Changes

### 1. Fix `waitFor` in `package.json`

```json
"waitFor": 2000
```

Was 500ms. Suspense + lazy imports need more time to resolve before the snapshot.

### 2. Add `inlineCss` in `package.json`

```json
"inlineCss": true
```

Emotion generates class names at runtime. Without this, pre-rendered HTML has content
but no styles. With it, critical CSS is inlined into each static file's `<style>` tag.

### 3. Add `minifyHtml: false` in `package.json`

```json
"minifyHtml": false
```

Prevents react-snap from stripping content during minification (known issue with certain
HTML structures and emoji/special characters in the case study content).

No changes to `App.js`, `index.js`, or any component.

---

## Verification

After running `npm run build`:

1. Check `build/case-studies/asana/index.html` exists and contains the case study text
   (e.g. "In this case study we'll take a look at asana's onboarding").
2. Check `build/case-studies/index.html` exists with case study listing content.
3. Confirm Emotion styles are inlined in `<style data-emotion>` tags in both files.
4. Deploy and verify with `curl -s https://alexandrosshomper.de/case-studies/asana | grep "Audit Walkthrough"`.

---

## Files Changed

- `package.json` — `reactSnap` config only (`waitFor`, `inlineCss`, `minifyHtml`)

---

## Out of Scope

- True server-side rendering on every request (not needed; build-time is sufficient for crawlers)
- Next.js migration
- Adding new case study routes (routes already exist in `routes.js` and `App.js`)
