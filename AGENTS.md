# Repository Guidelines

## Project Structure & Module Organization
The project packages a Python distribution (`pyproject.toml`) that exposes Svelte-based widgets under `src/dr_widget`. Widget implementations live in `src/dr_widget/widgets/<widget_name>`; the current `file_drop` widget uses a local Bun workspace with its own `package.json`, `src`, `public`, and `static` directories. Browser assets and stories belong in the widget’s `public/` or `static/` folders, while reusable Svelte helpers go in `src/lib/{components|hooks|utils}`. Treat top-level `node_modules/` and per-widget `node_modules/` as generated output—never check edits into them.

## Build, Test, and Development Commands
Use Bun for all JS build tooling: `bun run dev:file-drop` launches the file-drop widget dev server with hot reload, and `bun run build:file-drop` produces the optimized bundle. `bun run build` aggregates all widget builds and is what CI should call. For Python packaging, run `uv build` to emit wheels/sdists and verify the widget bundle is embedded correctly.

## Coding Style & Naming Conventions
Follow Prettier defaults (two-space indent, single quotes allowed) for TypeScript/Svelte; run `bunx prettier --write src/dr_widget/widgets/file_drop/src` before submitting. Svelte components stay in PascalCase (`FileDropWidget.svelte`), directories use kebab-case, and shared utilities adopt camelCase exports. Python modules under `src/dr_widget` follow PEP 8 snake_case naming and 4-space indents. Keep Tailwind classes sorted logically rather than alphabetically.

## Testing Guidelines
Automated tests are not yet configured. When adding features, include manual verification steps in the PR and consider scaffolding Vitest suites under `src/dr_widget/widgets/file_drop/src/lib/__tests__`. Snapshotting rendered widgets via `@testing-library/svelte` is preferred once the harness lands; target coverage for new logic should be 80%+. Until then, confirm drag/drop flows in the dev server across Chrome and Firefox before submitting.

## Commit & Pull Request Guidelines
Recent history favors short, imperative commit subjects (e.g., “fix build commands”) without trailing periods; continue that style and group logically related changes together. Every PR should summarize the user-visible impact, list manual test steps, and link relevant GitHub issues. Include before/after screenshots or GIFs when UI output changes, and keep PRs scoped to a single widget or module so reviewers can respond quickly.
