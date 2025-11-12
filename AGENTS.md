# Repository Guidelines

## Project Structure & Module Organization
The Python package in `src/dr_widget` exposes AnyWidget classes, while each widget lives in `src/dr_widget/widgets/<name>`. Workspaces include their own `package.json`, Svelte source under `src/`, and Vite output in `static/`. Shared hooks/components belong in `src/lib/{hooks|components|utils}` so multiple widgets can reuse them. Treat every `node_modules/` directory as generated output—never edit or commit contents.

## Widget Data Contracts
Traitlets mirror the JSON passed between Python and Svelte:
- `files` – JSON string of `{ name, size, type }[]`; the `use-file-bindings` hook keeps this in sync.
- `file_count` – integer derived from `files.length`; stay read-only unless you update the JSON.
- `error` – short user-facing message; clear it when the UI recovers.

When you add new traits, document them in `docs/architecture.md` and keep the hook resilient to missing data (defensive parsing, defaults).

## Build, Test, and Development Commands
Use Bun for all JS build tooling: `bun run dev:config-file-manager` launches the Config File Manager dev server with hot reload, and `bun run build:config-file-manager` produces the optimized bundle. `bun run build` aggregates all widget builds and is what CI should call. For Python packaging, run `uv build` to emit wheels/sdists and verify the widget bundle is embedded correctly.

## Coding Style & Naming Conventions
Follow Prettier defaults (two-space indent, single quotes allowed) for TypeScript/Svelte; run `bunx prettier --write src/dr_widget/widgets/config_file_manager/src` before submitting. Svelte components stay in PascalCase (`ConfigFileManager.svelte`), directories use kebab-case, and shared utilities adopt camelCase exports. Python modules under `src/dr_widget` follow PEP 8 snake_case naming and 4-space indents. Keep Tailwind classes sorted logically rather than alphabetically.

## UI Component Catalog
- `src/lib/hooks/use-file-bindings.ts` – centralizes AnyWidget binding logic (`read/write`, dedupe, upload/remove).
- `src/lib/components/file-drop/*` – higher-level panels (`BrowseConfigsPanel`, `SaveConfigPanel`, `SelectedFilesList`, `SelectedFileRow`).
- `src/lib/components/ui/*` – shadcn-svelte primitives (cards, dialogs, tabs, etc.) in local copies for customization.
Import from `$lib/...` so Vite aliases resolve correctly. Whenever you scaffold new shadcn components, stage the files (remember `.gitignore` no longer hides `lib/`).

## Testing Guidelines
Automated tests are not yet configured. When adding features, include manual verification steps in the PR and consider scaffolding Vitest suites under `src/dr_widget/widgets/config_file_manager/src/lib/__tests__`. Snapshotting rendered widgets via `@testing-library/svelte` is preferred once the harness lands; target coverage for new logic should be 80%+. Until then, confirm drag/drop flows in the dev server across Chrome and Firefox before submitting.

## Commit & Pull Request Guidelines
Recent history favors short, imperative commit subjects (e.g., “fix build commands”) without trailing periods; continue that style and group logically related changes together. Every PR should summarize the user-visible impact, list manual test steps, and link relevant GitHub issues. Include before/after screenshots or GIFs when UI output changes, and keep PRs scoped to a single widget or module so reviewers can respond quickly.

## Contribution Checklist
1. `bun run build` and `npx svelte-check` report no errors.
2. `uv build` succeeds and the wheel contains updated `static/` assets (`unzip -l dist/*.whl` if unsure).
3. Notebook demo still works (`marimo run notebooks/config_file_manager_widget.py`).
4. Docs touched by your change are updated (README, `docs/` references, or this file).
5. Traitlet contracts remain backward compatible; call out incompatible changes in the PR description.
