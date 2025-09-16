# Agent Workflow Guidelines

This repository hosts a Create React App project with an accompanying Express server used for sitemap generation. Follow the guidance below when working in this codebase.

## Environment Setup
- Use Node.js 16 or later.
- Install dependencies with `npm install` before running any project scripts.

## Coding Conventions
- Match the existing formatting style in the files you modify; prefer Prettier-style two-space indentation and double quotes.
- When updating React components, keep them functional and colocate related styles or assets alongside the component as in the rest of `src/`.
- Changes to routing should be reflected both in `src/routes.js` and any files that consume those routes.

## Required Checks
- When you modify JavaScript or JSX files, run `npm test -- --watchAll=false` to execute the unit test suite once in CI mode.
- When you change build configuration, routing, or server-side rendering code, run `npm run build` to ensure the production bundle and sitemap generation succeed. This command will also execute `node scripts/generate-sitemap.js` automatically.
- For documentation-only updates, the above checks are optional.

## Sitemap Maintenance
- If you update route definitions or the sitemap generator directly, run `node scripts/generate-sitemap.js` to refresh `public/sitemap.xml`. Commit any resulting changes.

Adhering to these instructions keeps the application consistent and prevents regressions in the generated sitemap and production bundle.
