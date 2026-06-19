# dr_widget

dr_widget is a library of reusable AnyWidget components that can be dropped into Marimo notebooks. Widgets are organized into two tiers based on their physical shape:

- **Inline widgets** (`dr_widget.inline`) – pure-Python widgets whose JS is a short string literal. Zero build step, minimal deps. Useful for small browser-side helpers.
- **Bundled widgets** (`dr_widget.bundled`) – widgets backed by their own JS workspace (Svelte, React, etc.) that builds to a `static/` bundle. Useful when you need a component library or transpilation.

The top-level `dr_widget` package is intentionally empty so importing from one tier does not drag in the other.

## Quick Start

```bash
# Install JS dependencies (root + workspace)
bun install

# Live-reload the Config File Manager widget in a browser
bun run dev:config-file-manager

# Live-reload the shared dr-* runtime (dr-hello proof)
bun run dev:runtime

# Produce the optimized bundles used by AnyWidget + runtime loader
bun run build

# Build the Python distributions (wheel + sdist)
uv build

# Launch demo notebooks
marimo run notebooks/config_file_manager_widget.py
marimo run notebooks/runtime_hello_widget.py
```

Prerequisites: Bun ≥ 1.0, Node-compatible environment, Python ≥ 3.11 with `uv`, and Marimo ≥ 0.23.

## Repository Layout

- `src/dr_widget/` – Python package with two widget tiers.
  - `inline/` – pure-Python AnyWidgets (e.g., `ActiveHtml`, `load_dr_runtime()`).
  - `bundled/config_file_manager/` – Svelte widget workspace (source in `src/`, build output in `static/`).
  - `bundled/runtime/` – React custom-element runtime (`static/runtime.js`); proof element `<dr-hello>`.
- `docs/` – additional reference material (architecture, development workflows).
- `notebooks/config_file_manager_widget.py` – Marimo notebook for the Config File Manager widget.
- `notebooks/runtime_hello_widget.py` – Marimo notebook for `load_dr_runtime()` + `<dr-hello>`.

## Documentation

- [Architecture Overview](docs/architecture.md) – how Python, AnyWidget, and Svelte fit together.
- [Development Workflow](docs/development.md) – commands for widget builds, packaging, and notebooks.
- [Repository Guidelines](AGENTS.md) – coding standards, contracts, and contribution checklist.

## Contributing

1. Work inside a dedicated branch.
2. Run `bun run build`, `npx svelte-check`, and `uv build` before opening a PR.
3. Update the notebook and docs when you add or change widget behaviour.
4. Follow the commit and PR practices outlined in `AGENTS.md`.

Please open an issue if you hit build problems or want to discuss new widgets.
