# Repository Guidelines

## Project Structure & Module Organization
- Entry point: `src/main.js` imports the global stylesheet and is bundled by Vite.
- Styles live in `src/css/style.css`, currently just the Tailwind layer import; extend it with utilities or components as needed.
- Static assets go in `public` (served at root) or colocated with code in `src` when imported.
- Build configuration sits at `vite.config,.js`; adjust Vite plugins or Tailwind/Vite options there.

## Build, Test, and Development Commands
- Install deps: `npm install` (uses `package-lock.json` and Vite 7 via the rolldown compatibility build).
- Dev server with hot reload: `npm run dev` (default: http://localhost:5173).
- Production build: `npm run build` outputs to `dist/`.
- Preview built assets locally: `npm run preview` serves the `dist/` bundle.

## Coding Style & Naming Conventions
- JavaScript is ESM (`"type": "module"`); keep imports relative and avoid implicit globals.
- Prefer small, focused modules; name files in `kebab-case` (e.g., `timeline-section.js`) and CSS layers in a similar style.
- Tailwind 4 is enabled via `@import "tailwindcss";`; add utilities/components rather than ad-hoc inline styles when possible.
- No formatter is enforced; align on 2-space indentation and consistent trailing commas to reduce diff noise.

## Testing Guidelines
- No automated tests are configured yet. When adding tests, colocate them near source (e.g., `src/foo.test.js`) and document any new commands.
- Aim for coverage on data transforms and interactive behavior; include regression cases for timeline ordering or rendering logic as it emerges.

## Commit & Pull Request Guidelines
- Commit messages: use concise, imperative subjects (e.g., `Add timeline intro layout`); include context in the body when changing build or CSS defaults.
- PRs should describe the change, list any visual/UX impacts, and link related tickets. Add screenshots or short clips for UI updates when possible.
- Keep changes scoped; separate styling refactors from functional updates to ease review.

## Security & Configuration Notes
- Dependencies are pinned via `package-lock.json` and override Vite to `npm:rolldown-vite@7.2.5`; review build output after upgrades.
- Avoid committing secrets; environment configuration is not required for local dev by default.***
