# SEO Branch Coordination

## Completed / Ready to Merge

| Session | Branch | Status | Notes |
|---------|--------|--------|-------|
| Session C | `seo/routes-and-sitemap` | ✅ Complete | Session E must not start until this branch is merged — OG URLs depend on corrected slugs |

---

## Session C — WAVE 1: Routes & Sitemap

**Status:** ✅ Complete (2026-03-22)

### Files owned by Session C
_(claims released — work complete)_

- `src/routes.js`
- `src/App.js` (route path strings only)
- `src/components/Pages/Reports/FourIndustryShifts.js` (slug reference check — no internal slug reference found)
- `public/sitemap.xml`
- `server.js` (redirect only)

### Changes made

1. **Fixed misspelled slug** — old: `/reports/four-indsutry-shifts-making-onboarding-and-activation-indispensible`, new: `/reports/four-industry-shifts-making-onboarding-and-activation-indispensable`
   - Updated `<Route path=...>` in `src/App.js`
   - Updated path entry in `src/routes.js`
   - Updated `<loc>` in `public/sitemap.xml`
   - Added 301 redirect in `server.js`
   - Checked `FourIndustryShifts.js` — no internal route reference to old slug found

2. **Synced `src/routes.js` with `src/App.js`**
   - Removed stale paths: `/occhio`, `/knauf-explorations`, `/knauf-account`, `/knauf-orderoverview`, `/myknauf`
   - Fixed `/profile` → `/about`
   - Added: `/portfolio/occhio`, `/portfolio/knauf-explorations`, `/portfolio/knauf-account`, `/portfolio/knauf-order-overview`, `/portfolio/knauf-material-calculator`, `/portfolio/myknauf`, `/flows/wrike`, `/flows/trello`

3. **Added 404 catch-all route** in `src/App.js` — inline `NotFound` component, added as last route in `<Switch>`

4. **Updated `public/sitemap.xml`**
   - Fixed typo URL
   - Added all missing URLs
   - Applied priority tiers: `/` + `/portfolio` → 1.0; `/reports/*` + `/case-studies/*` → 0.9; `/about`, `/writing`, `/reports`, `/case-studies`, `/flows` → 0.8; `/contact` → 0.7; `/portfolio/*` + `/flows/*` sub-pages → 0.5
   - Added `<lastmod>2026-03-22</lastmod>` to every `<url>` entry
