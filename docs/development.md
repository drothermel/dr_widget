# Development Workflow

## 1. Install Dependencies

```bash
bun install        # installs workspace deps (root + config_file_manager)
uv sync            # optional: sets up Python deps from pyproject
```

## 2. Frontend Development

- `bun run dev:config-file-manager` – Launch Vite with hot module reload. Visit the printed localhost URL to preview the widget.
- `bun run build:config-file-manager` – Produce the optimized bundle in `static/`.
- `bun run build` – Build all widgets (currently delegates to `config_file_manager`).
- `npx svelte-check --tsconfig src/dr_widget/bundled/config_file_manager/tsconfig.json` – Type-check `.svelte` files.
- The Config File Manager workspace also enables Vite’s React plugin to support the graph-style JSON preview. `bun install` pulls in `react`, `react-dom`, `reaflow`, and `react-zoom-pan-pinch`; no extra setup is required beyond the standard Bun install.

Widget state is synchronized via `$lib/hooks/use-file-bindings`. The helper writers (`writeBindingBaselineState`, `writeBindingConfigFile`, `writeBindingSavedAt`, etc.) are the single way UI components mutate traitlets (`current_state`, `baseline_state`, `version`, `config_file`, `config_file_display`, `saved_at`, `files`, `file_count`, `error`) so AnyWidget sees consistent updates. Shared UI lives in `src/lib/components`.

## 3. Python Packaging & Notebook Loop

- `uv build` – Creates `dist/*.whl` and `dist/*.tar.gz` that include the latest `static/` assets.
- `marimo run notebooks/config_file_manager_widget.py` – Runs the notebook demo inside the repo. This is the quickest integration test.

The AnyWidget exposes helper properties (`current_data`, `baseline_data`, `is_dirty`). Keep an eye on the `baseline_state` ↔ `current_state` comparison and the `version` badge inside the notebook to ensure reactivity stayed intact after changes.

## 4. Adding a New Widget

Pick a tier based on what the widget's JS actually needs:

### 4a. Inline widget (pure Python, no JS build)

Use when the JS is short, self-contained, and does not need a bundler or component library (e.g., widgets that just mount HTML or wrap a small browser API).

1. Create `src/dr_widget/inline/<new_widget>.py` with the AnyWidget subclass. Set `_esm` to a module-level string literal.
2. Re-export the class from `src/dr_widget/inline/__init__.py`.

No changes to the root `package.json` or `pyproject.toml` are needed.

### 4b. Bundled widget (JS workspace + build step)

Use when the widget needs a component library (Svelte, React, Lit, etc.) or any bundling/transpilation.

1. Copy the `config_file_manager` workspace structure into `src/dr_widget/bundled/<new_widget>`.
2. Update the root `package.json` scripts (`build:<name>`, `dev:<name>`).
3. Include the new widget’s `static/**` folder in `pyproject.toml` (`[tool.uv.build-backend].source-include`).
4. Expose an AnyWidget subclass under `src/dr_widget/bundled/<new_widget>/__init__.py`, re-export it from `src/dr_widget/bundled/__init__.py`, and update notebooks/demos as needed. Do **not** re-export from `src/dr_widget/__init__.py` — the top-level package is kept empty so consumers who only want an inline widget do not pay the cost of importing bundled ones.

## 5. Testing Checklist

- Manual smoke test in the Vite dev server (drag/drop interactions, error states, version editing, dirty badge toggling).
- Load both legacy (“`selections`”-style) and new (“`data`”-wrapped) configs via the notebook; verify migration.
- Create/save a config and confirm the downloaded/written file matches `{version,saved_at,data}`.
- `npx svelte-check` for type errors.
- `bun run build` to ensure the bundle compiles without warnings.
- `uv build` and inspect the wheel (`unzip -l dist/*.whl`) to confirm assets are packaged.

Automated tests (Vitest, notebook regressions) are TODO; document manual steps in PRs until they exist.
