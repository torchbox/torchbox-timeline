# Torchbox Timeline

A small demo timeline showing the history of Torchbox, built with Next.js and TypeScript.

## Key points

- Inputs: source files live under `app/` (React/TSX pages/components), global styles under `app/globals.css`, and static assets in `public/`.
- Outputs: during development Next.js serves from its dev server; when built, Next.js writes production artifacts into the `.next/` folder. You can optionally export a static site with `next export` into an `out/` directory if your app is fully static.
- Success: styles and pages render correctly during `npm run dev`; after `npm run build` the app can be served in production mode (`npm run start`) or exported as static HTML (`next export`) when appropriate.

## Tech stack

- Next.js (app router)
- React + TypeScript
- GSAP (for scroll effects)
- PostCSS + Autoprefixer

## Project structure (important files)

- `app/` — Next.js app directory; `app/page.tsx` is the main page entry and `app/layout.tsx` sets shared layout.
- `app/components/` — React components used by the pages (timeline, carousel, effects, etc.).
- `app/globals.css` — global styles (imported by `layout.tsx`).
- `public/` — static assets served at the root (images, SVGs, icons).
- `next.config.ts` — Next.js configuration.
- `package.json` — scripts and dependencies.

## Getting started

Install dependencies:

```bash
npm install
```

Run the dev server (fast, HMR enabled):

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

Build for production:

```bash
npm run build
```

Serve the built app locally (production mode):

```bash
npm run start
```

Preview the built app using Next's preview (if you have a `preview` script configured or use `next start` after build):

```bash
# if your package.json has a preview script
npm run preview
# otherwise, serve the production build
npm run start
```

If you want a static export (only for fully static apps):

```bash
npm run build && npm run export
# this writes to `out/` when using `next export`
```

## Notes

- This project uses the Next.js app router and client components for interactive features (see `use client` usage in component files).
- GSAP ScrollTrigger is used for the horizontal timeline effects; there are scroll listeners, ResizeObserver usage, and image load handling to ensure the timeline length is recalculated when layouts change.

## Contributing

Small changes, bug fixes, and documentation improvements are welcome. Please open a pull request with a short description of the change.
