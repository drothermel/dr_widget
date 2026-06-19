# Architecture Overview

This project glues together three layers, with AnyWidget classes organized into two tiers by **physical shape**:

1. **Python package (`src/dr_widget`)**
   - Exposes AnyWidget subclasses in two tiers:
     - `src/dr_widget/inline/<name>.py` – pure-Python widgets whose `_esm` is a string literal. Zero JS build; only deps are `anywidget` + `traitlets`. Examples: `ActiveHtml` (mounts HTML and executes embedded `<script>` tags) and `load_dr_runtime()` (inlines the built React runtime once per page).
     - `src/dr_widget/bundled/<name>/` – widgets whose `_esm` points at a built bundle on disk (`static/index.js`). Example: `ConfigFileManager`. The `runtime` workspace also lives here but is consumed by the inline loader rather than as its own AnyWidget.
   - The top-level `src/dr_widget/__init__.py` is intentionally empty so `from dr_widget.inline import …` does not pull in bundled modules and vice versa.
   - Bundled widgets ship the compiled frontend by pointing `_esm`/`_css` at files under `static/`.
   - For `ConfigFileManager`, traitlets (`current_state`, `baseline_state`, `version`, `config_file`, `config_file_display`, `saved_at`, `files`, `file_count`, `error`) are the single source of truth for state moving between Python and Svelte. `current_state` mirrors the user-editable data, `baseline_state` tracks the last persisted payload for dirty detection, `saved_at` exposes the last save timestamp, and `version`/`config_file` surface metadata directly to notebooks.

2. **Widget workspaces (`src/dr_widget/bundled/`)**
   - **`config_file_manager`** – Svelte + Tailwind workspace. `src/ConfigFileManager.svelte` orchestrates notebook bindings; shared logic lives under `src/lib/`. Vite emits `static/index.js` + `static/style.css`.
   - **`runtime`** – React workspace that builds `static/runtime.js` (IIFE). Defines `<dr-*>` custom elements via `defineDrElement()`. Loaded once per host through `load_dr_runtime()` in the inline tier.

3. **Packaging**
   - Built assets under each workspace's `static/` folder are included in the Python wheel (see `pyproject.toml`).
   - Marimo notebook demos are the integration test surface.
   - The Config File Manager ships with a `ConfigViewerPanel` that renders both a simple tree view and a graph-style visualisation of JSON configs. The simple view is implemented in Svelte; the graph view uses a React wrapper in the same Vite build.

### Component runtime data flow

```text
Marimo notebook
        │ load_dr_runtime() once (ActiveHtml inline script)
        ▼
static/runtime.js  ── defines ──▶  <dr-*> custom elements (window registry)
        ▲
        │ mo.Html('<dr-hello name="...">')  (pure markup, light DOM)
```

- `load_dr_runtime()` reads the built IIFE from disk and wraps it in a define-once guard before handing it to `ActiveHtml`.
- Each `<dr-*>` element mounts React in its own light DOM via `defineDrElement()`:
  - `connectedCallback` → `createRoot` + initial render
  - `attributeChangedCallback` → re-render (with `observedAttributes` declared)
  - `disconnectedCallback` → unmount + unsubscribe from the data channel
- **Design rules baked into the base pattern:** all render logic lives in a shared
  `#render()` called from both connect and attribute change (never only on connect);
  use `whenLayoutReady()` from the runtime for geometry — never measure in
  `connectedCallback`.
- **Data delivery contract:**
  - **Small/structured props** → JSON in `data-props`, parsed on each render.
  - **Large payloads** → `data-ref="<id>"` on the element; payload stored in
    `window.__drRuntime.data` (`set` / `get` / `subscribe`). Python (or host code)
    emits the id; the runtime holds the bytes. Channel updates re-render subscribed
    elements without a marimo attribute change.

### Config File Manager data flow

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
