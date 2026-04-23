# Architecture Overview

This project glues together three layers, with AnyWidget classes organized into two tiers by **physical shape**:

1. **Python package (`src/dr_widget`)**
   - Exposes AnyWidget subclasses in two tiers:
     - `src/dr_widget/inline/<name>.py` – pure-Python widgets whose `_esm` is a string literal. Zero JS build; only deps are `anywidget` + `traitlets`. Example: `ActiveHtml`, which mounts HTML and executes embedded `<script>` tags so libraries like Plotly work when composed into other widgets.
     - `src/dr_widget/bundled/<name>/` – widgets whose `_esm` points at a built bundle on disk (`static/index.js`). Example: `ConfigFileManager`.
   - The top-level `src/dr_widget/__init__.py` is intentionally empty so `from dr_widget.inline import …` does not pull in bundled modules and vice versa.
   - Bundled widgets ship the compiled frontend by pointing `_esm`/`_css` at files under `static/`.
   - For `ConfigFileManager`, traitlets (`current_state`, `baseline_state`, `version`, `config_file`, `config_file_display`, `saved_at`, `files`, `file_count`, `error`) are the single source of truth for state moving between Python and Svelte. `current_state` mirrors the user-editable data, `baseline_state` tracks the last persisted payload for dirty detection, `saved_at` exposes the last save timestamp, and `version`/`config_file` surface metadata directly to notebooks.

2. **Widget workspace (`src/dr_widget/bundled/config_file_manager`)**
   - Bun workspace with its own `package.json`, Vite config, and Tailwind CSS.
   - `src/ConfigFileManager.svelte` orchestrates the notebook bindings and re-exports composed panels.
   - Shared logic lives under `src/lib/` (hooks + UI components) so multiple bundled widgets can reuse the same patterns.

3. **Build + packaging pipeline**  
- `bun run dev:config-file-manager` / `bun run build:config-file-manager` run Vite to emit `static/index.js` + `static/style.css`.
- `uv build` creates wheels/sdists that include the `static/` assets (see `pyproject.toml` include rules).  
- Marimo pulls the wheel straight off disk; the notebook demo is the final integration test.
- The widget ships with a `ConfigViewerPanel` that renders both a simple tree view and a graph-style visualisation of JSON configs so notebook users can inspect uploads inline. The simple view is implemented in Svelte, while the graph view is bridged through a lightweight React wrapper rendered via Vite’s React plugin.

### Data Flow

```text
Marimo Notebook (Python)
        │ traitlets (files, …)
        ▼
ConfigFileManager (AnyWidget)  ── embeds ──▶  static/index.js (Svelte bundle)
        │                                │
        └── JSON bindings <──────────────┘
```

- Python updates traitlets → AnyWidget serializes to JSON → Svelte reads via `bindings`.  
- User actions in Svelte update bindings → AnyWidget pushes changes back to Python automatically. Frontend code calls the helper writers in `use-file-bindings.ts` so panels such as `SaveConfigPanel` can update `baseline_state`, `config_file(_display)`, `version`, and `saved_at` without bespoke callbacks.

### Extending the Architecture

Pick a tier based on what the widget's JS actually needs:

- **Inline** – a single `.py` file under `src/dr_widget/inline/` with `_esm` as a string literal. Use when the JS is short, has no dependencies beyond the browser, and doesn't need a bundler. Re-export the class from `src/dr_widget/inline/__init__.py`. No changes needed in the root `package.json` or `pyproject.toml`.
- **Bundled** – a JS workspace under `src/dr_widget/bundled/<name>/` with its own `package.json` and Vite entry. Use when the widget needs a component library (Svelte, React, etc.) or a build step.
  - Keep shared UI/logic in `src/lib/` (hooks or components) so future bundled widgets stay consistent.
  - Wire scripts in the root `package.json` (`build:<name>`, `dev:<name>`) and include its `static/**` folder in `pyproject.toml`.
  - For heavier apps, promote reusable components into a dedicated library workspace so SvelteKit projects can import them directly.
