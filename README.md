## Torchbox Timeline

A small demo timeline showing the history of Torchbox.

This repository is a Vite-powered front-end demo that uses Tailwind CSS (via the @tailwindcss/vite plugin) and PostCSS. It includes a simple HTML entry (`index.html`), a JS entry (`src/main.js`) which imports the project's CSS, and static assets under `public/`.

### Key points 
- Inputs: source files in `src/`, `index.html`, and assets in `public/`.
- Outputs: when built, Vite writes a production bundle into `dist/` (HTML, JS and extracted CSS under `dist/assets/`).
- Success: styles appear correctly in dev (`npm run dev`) and after `npm run build` the generated `dist/index.html` contains correct links to hashed CSS files in `dist/assets/`.

### Tech stack
- Vite (dev server & build)
- Tailwind CSS via `@tailwindcss/vite` plugin
- PostCSS + Autoprefixer

### Project structure (important files)
- `index.html` — app entry HTML (includes dev links and script tag to `src/main.js`)
- `src/main.js` — JS entry; imports `./css/style.css` so Vite includes CSS in the bundle
- `src/css/style.css` — project CSS (should include Tailwind directives if using Tailwind)
- `vite.config.js` — Vite config and plugins
- `package.json` — scripts and dependencies

#### Getting started 
**Install dependencies:**

```bash
npm install
```

Run the dev server (fast, HMR enabled):

```bash
npm run dev
```

Open the URL printed by Vite (usually http://localhost:5173).

Build for production:

```bash
npm run build
```

Preview the built site locally (serves the `dist/` output):

```bash
npm run preview
```
