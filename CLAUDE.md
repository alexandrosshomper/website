# CLAUDE.md — Website Project

## Project Overview

Personal website built with **Create React App** (React, Emotion, MUI). Served via `server.js` (likely Express). Has separate `production-public` and `stage-public` build targets.

## Key Commands

```bash
npm start        # Dev server
npm run build    # Production build
npm test         # Run tests
```

## Project Structure

```
src/
  App.js           # Root component
  components/      # All UI components (Pages/, shared, etc.)
  hooks/           # Custom React hooks
  utils/           # Utility functions
  routes.js        # Route definitions
public/
  index.html       # HTML shell
server.js          # Express server
```

## Coding Conventions

- Components live in `src/components/`
- Styling via Emotion (`@emotion/react`, `@emotion/styled`)
- No unnecessary abstractions — keep components focused
- Avoid adding comments unless logic is non-obvious
- Do not add error handling for scenarios that can't happen

## Multi-Instance Coordination

When multiple Claude Code sessions are active simultaneously:

1. **Always read `COORDINATION.md` before starting work**
2. **Claim your files** — add yourself to the Active Work table before editing
3. **Respect claimed files** — do not edit files claimed by another instance
4. **Update status** as you progress (in-progress → complete → merged)
5. **Release claims** when work is merged or abandoned

See `COORDINATION.md` for current active work.

## Branch Strategy

- `master` — production
- `staging` — pre-production
- Feature branches off `master`, named descriptively (e.g. `Page-Performance-Improvement`)
- Worktrees go in `.worktrees/` (gitignored)
