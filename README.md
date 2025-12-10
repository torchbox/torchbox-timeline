# Torchbox Timeline
A small demo timeline showing the history of Torchbox. This section expands and adapts some older Vite notes to explain the project in the context of Next.js.

### Key points
- Inputs: source files live under `app/` (React/TSX pages/components), global styles under `app/globals.css` or `styles/`, and static assets in `public/`.
- Outputs: during development Next.js serves from its dev server; when built, Next.js writes production artifacts into the `.next/` folder. You can optionally export a static site with `next export` into an `out/` directory.
- Success: styles and pages render correctly during `npm run dev`; after `npm run build` the app can be served in production mode (`npm run start`) or exported as static HTML (`next export`) when appropriate.

### Tech stack
- Next.js (app router)
- React + TypeScript
- PostCSS + Autoprefixer
- Optional: Tailwind CSS 

### Project structure (important files)
- `app/` — Next.js app directory; `app/page.tsx` is the main page entry and `app/layout.tsx` sets shared layout.
- `app/globals.css` — global styles (imported by `layout.tsx`)
- `public/` — static assets served at the root (images, SVGs, icons)
- `next.config.ts` — Next.js configuration
- `package.json` — scripts and dependencies

> Note: this repo contains `postcss.config.mjs` and `globals.css` which indicates PostCSS is present; Tailwind usage is optional depending on whether a `tailwind.config.js`/`tailwind.config.cjs` or Tailwind directives are present in the CSS.

#### Getting started

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
# if your package.json has a preview script (create-next-app sometimes includes it)
npm run preview
# otherwise, serve the production build
npm run start
```

If you want a static export (only for fully static apps):

```bash
npm run build && npm run export
# this writes to `out/` when using `next export`
```
