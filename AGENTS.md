# Repository Guidelines

## Project Structure & Module Organization
- `src/` is the main codebase for the Astro site. Pages live in `src/pages/`, shared UI in `src/components/`, layouts in `src/layouts/`, and site styling in `src/styles/`.
- Content-driven pages are stored in `src/content/` (blog posts, docs, MDX/Markdown).
- Static assets are in `public/` and are copied as-is to the built site.
- Build output goes to `dist/`.
- Key config files: `astro.config.mjs`, `tailwind.config.cjs`, `biome.json`, `tsconfig.json`, `wrangler.jsonc`.

## Build, Test, and Development Commands
- `npm install`: install dependencies.
- `npm run dev`: start the local dev server (Astro).
- `npm run build`: type-check + Astro build (runs `astro check` and `vue-tsc --noEmit`).
- `npm run preview`: serve the production build from `dist/` locally.
- `npm run lint`: format and lint with Biome (auto-fixes).

## Coding Style & Naming Conventions
- Indentation: 2 spaces (no tabs) across Astro/TS/CSS.
- Formatting/linting: Biome (`npm run lint`).
- Naming: components are `PascalCase` (`src/components/...`), files and routes use `kebab-case` in `src/pages/` (e.g., `src/pages/privacy-protection.astro`).
- Keep Astro templates readable: prefer small, focused components over large inline markup.

## Testing Guidelines
- No dedicated test framework is configured in this repo yet.
- For changes affecting content or layouts, verify locally with `npm run dev` and `npm run build`.
- If you add tests, document the runner and add scripts to `package.json`.

## Commit & Pull Request Guidelines
- Recent commits use short, lowercase, imperative messages (e.g., `fix build command`).
- Keep commits focused; prefer one logical change per commit.
- PRs should include: a concise description, linked issues (if any), and screenshots for UI changes.

## Deployment & Configuration Notes
- Cloudflare Workers/Pages configuration lives in `wrangler.jsonc`; the built site is served from `dist/`.
- Do not commit secrets. Keep environment-specific values in local tooling or deployment config.
