# Repository Guidelines

## Project Structure & Module Organization
The Python package in `src/dr_widget` exposes AnyWidget classes in two tiers based on physical shape:
- `src/dr_widget/inline/<name>.py` – pure-Python widgets whose `_esm` is a string literal. No JS build step; deps are just `anywidget` + `traitlets`.
- `src/dr_widget/bundled/<name>/` – JS workspaces with their own `package.json`, Svelte/React source under `src/`, and Vite output in `static/`. Shared hooks/components belong in `src/lib/{hooks|components|utils}` so multiple bundled widgets can reuse them.
The top-level `src/dr_widget/__init__.py` is intentionally empty so importing `dr_widget.inline` does not drag in bundled widgets and vice versa. Treat every `node_modules/` directory as generated output—never edit or commit contents.

## Widget Data Contracts
Traitlets mirror the JSON passed between Python and Svelte:
- `files` – JSON string of `{ name, size, type }[]`; the `use-file-bindings` hook keeps this in sync.
- `file_count` – integer derived from `files.length`; stay read-only unless you update the JSON.
- `error` – short user-facing message; clear it when the UI recovers.

When you add new traits, document them in `docs/architecture.md` and keep the hook resilient to missing data (defensive parsing, defaults).

## Coding Style & Naming Conventions
Follow Prettier defaults (two-space indent, single quotes allowed) for TypeScript/Svelte. Svelte components stay in PascalCase (`ConfigFileManager.svelte`), directories use kebab-case, and shared utilities adopt camelCase exports. Python modules under `src/dr_widget` follow PEP 8 snake_case naming and 4-space indents. Keep Tailwind classes sorted logically rather than alphabetically.

## UI Component Catalog
- `src/lib/hooks/use-file-bindings.ts` – centralizes AnyWidget binding logic (`read/write`, dedupe, upload/remove).
- `src/lib/components/file-drop/*` – higher-level panels (`BrowseConfigsPanel`, `SaveConfigPanel`, `SelectedFilesList`, `SelectedFileRow`).
- `src/lib/components/ui/*` – shadcn-svelte primitives (cards, dialogs, tabs, etc.) in local copies for customization.
Whenever you scaffold new shadcn components, stage the files (remember `.gitignore` no longer hides `lib/`).

## Bundled widget imports
Each bundled workspace under `src/dr_widget/bundled/<name>/` is self-contained. Use the import style that matches where the module lives:

- **`src/lib/` shared code** (hooks, components, utils): import via `$lib/...` when the workspace defines that Vite alias (e.g. `config_file_manager`).
- **Same-workspace modules** under `src/` (siblings like `./data-channel`, `./components/Hello`): use relative paths. Do not rewrite these as `$lib/...`.
- **No blanket `$lib/` rule**: only workspaces with a `$lib` → `src/lib` alias in `vite.config.js` / `tsconfig.json` support it. `runtime/` has no `src/lib/` tree and uses relative imports throughout.

## Testing Guidelines
Automated tests are not yet configured. When adding features, include manual verification steps in the PR and consider scaffolding Vitest suites under `src/dr_widget/bundled/config_file_manager/src/lib/__tests__`. Snapshotting rendered widgets via `@testing-library/svelte` is preferred once the harness lands; target coverage for new logic should be 80%+. Until then, confirm drag/drop flows in the dev server across Chrome and Firefox before submitting.

## Commit & Pull Request Guidelines
Recent history favors short, imperative commit subjects (e.g., “fix build commands”) without trailing periods; continue that style and group logically related changes together. Every PR should summarize the user-visible impact, list manual test steps, and link relevant GitHub issues. Include before/after screenshots or GIFs when UI output changes, and keep PRs scoped to a single widget or module so reviewers can respond quickly.

## Contribution Checklist
1. Follow [docs/development.md](docs/development.md) for build, packaging, and manual verification.
2. Docs touched by your change are updated (README, `docs/` references, or this file).
3. Traitlet contracts remain backward compatible; call out incompatible changes in the PR description.
