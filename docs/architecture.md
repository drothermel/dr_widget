# Architecture Overview

This project glues together three layers:

1. **Python package (`src/dr_widget`)**  
   - Exposes AnyWidget subclasses (e.g., `FileDropWidget`) that notebooks instantiate.  
   - Ship the compiled frontend bundle by pointing `_esm`/`_css` at files under `static/`.  
   - Traitlets (`files`, `file_count`, `error`, `max_files`) are the single source of truth for state moving between Python and Svelte.

2. **Widget workspace (`src/dr_widget/widgets/file_drop`)**  
   - Bun workspace with its own `package.json`, Vite config, and Tailwind CSS.  
   - `src/FileDropWidget.svelte` orchestrates the notebook bindings and re-exports composed panels.  
   - Shared logic lives under `src/lib/` (hooks + UI components) so multiple widgets can reuse the same patterns.

3. **Build + packaging pipeline**  
   - `bun run dev:file-drop` / `bun run build:file-drop` run Vite to emit `static/index.js` + `static/style.css`.  
   - `uv build` creates wheels/sdists that include the `static/` assets (see `pyproject.toml` include rules).  
   - Marimo pulls the wheel straight off disk; the notebook demo is the final integration test.

### Data Flow

```text
Marimo Notebook (Python)
        │ traitlets (files, max_files, …)
        ▼
FileDropWidget (AnyWidget)  ── embeds ──▶  static/index.js (Svelte bundle)
        │                                │
        └── JSON bindings <──────────────┘
```

- Python updates traitlets → AnyWidget serializes to JSON → Svelte reads via `bindings`.  
- User actions in Svelte update bindings → AnyWidget pushes changes back to Python automatically.

### Extending the Architecture

- New widgets live under `src/dr_widget/widgets/<name>` with their own `package.json` and Vite entry.  
- Keep shared UI/logic in `src/lib/` (e.g., additional hooks or components) so future widgets stay consistent.  
- When you add a widget, wire scripts in the root `package.json` (`build:<name>`, `dev:<name>`) and include its `static/` folder in `pyproject.toml`.  
- For heavier apps, promote reusable components into a dedicated library workspace so SvelteKit projects can import them directly.
