# Development Workflow

## 1. Install Dependencies

```bash
bun install        # workspace deps (root + bundled workspaces)
uv sync            # optional: Python deps from pyproject
```

Prerequisites: Bun (package manager + script runner), Python ≥ 3.11 with `uv`,
and Marimo ≥ 0.23.

Bundled workspaces use **Vite** for transpilation and bundling. Root
`package.json` scripts invoke Vite via `bun --cwd … vite …` — do not replace
those with a separate bundler unless the whole repo is migrated together.

## 2. Frontend Development

| Command | Purpose |
| --- | --- |
| `bun run dev:config-file-manager` | Vite dev server for Config File Manager |
| `bun run dev:runtime` | Vite dev server for the `<dr-*>` runtime (`dr-hello` demo) |
| `bun run build:config-file-manager` | Build Config File Manager → `static/index.js` + `static/style.css` |
| `bun run build:runtime` | Build runtime IIFE → `static/runtime.js` |
| `bun run build` | Build all bundled workspaces |
| `npx svelte-check --tsconfig src/dr_widget/bundled/config_file_manager/tsconfig.json` | Type-check Svelte sources |

Widget state is synchronized via `$lib/hooks/use-file-bindings`. The helper
writers (`writeBindingBaselineState`, `writeBindingConfigFile`,
`writeBindingSavedAt`, etc.) are the single way UI components mutate traitlets
so AnyWidget sees consistent updates. Shared UI lives in `src/lib/components`.

## 3. Python Packaging & Notebook Loop

```bash
uv build
marimo run notebooks/config_file_manager_widget.py
marimo run notebooks/runtime_hello_widget.py
```

- `uv build` creates `dist/*.whl` and `dist/*.tar.gz` with the latest `static/` assets.
- Inspect the wheel if needed: `unzip -l dist/*.whl | grep static/`

The Config File Manager AnyWidget exposes helper properties (`current_data`,
`baseline_data`, `is_dirty`). Keep an eye on the `baseline_state` ↔
`current_state` comparison and the `version` badge inside the notebook to ensure
reactivity stayed intact after changes.

## 4. Adding a New Widget

Pick a tier based on what the widget's JS actually needs:

### 4a. Inline widget (pure Python, no JS build)

Use when the JS is short, self-contained, and does not need a bundler or component library.

1. Create `src/dr_widget/inline/<new_widget>.py` with the AnyWidget subclass. Set `_esm` to a module-level string literal.
2. Re-export the class from `src/dr_widget/inline/__init__.py`.

No changes to the root `package.json` or `pyproject.toml` are needed.

### 4b. Bundled widget (JS workspace + build step)

Use when the widget needs a component library (Svelte, React, etc.) or transpilation.

1. Copy the `config_file_manager` workspace structure into `src/dr_widget/bundled/<new_widget>`.
2. Update the root `package.json` scripts (`build:<name>`, `dev:<name>`).
3. Include the new widget's `static/**` folder in `pyproject.toml` (`[tool.uv.build-backend].source-include`).
4. Expose an AnyWidget subclass under `src/dr_widget/bundled/<new_widget>/__init__.py`, re-export it from `src/dr_widget/bundled/__init__.py`, and update notebooks/demos as needed. Do **not** re-export from `src/dr_widget/__init__.py`.

## 5. Testing Checklist

- Manual smoke test in the relevant Vite dev server.
- Config File Manager: drag/drop, error states, version editing, dirty badge; load legacy and new config shapes; save and verify `{metadata,data}` file shape.
- Runtime: `<dr-hello>` upgrades; attribute changes re-render in dev and in `notebooks/runtime_hello_widget.py`. Exercise `data-props` JSON and `data-ref` + `window.__drRuntime.data.set(...)` in the same notebook.
- `npx svelte-check` for Config File Manager type errors.
- `bun run build` — all bundled workspaces compile without warnings.
- `uv build` — wheel contains updated `static/` assets.

Automated tests are TODO; document manual steps in PRs until they exist.
