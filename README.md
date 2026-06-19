# dr_widget

dr_widget is a library of reusable AnyWidget components that can be dropped into Marimo notebooks. Widgets are organized into two tiers based on their physical shape:

- **Inline widgets** (`dr_widget.inline`) – pure-Python widgets whose JS is a short string literal. Zero build step, minimal deps. Useful for small browser-side helpers.
- **Bundled widgets** (`dr_widget.bundled`) – widgets backed by their own JS workspace (Svelte, React, etc.) that builds to a `static/` bundle. Useful when you need a component library or transpilation.

The top-level `dr_widget` package is intentionally empty so importing from one tier does not drag in the other.

## Quick Start

See [Development Workflow](docs/development.md) for install, build, packaging, and
notebook commands.

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
2. Follow [docs/development.md](docs/development.md) and [AGENTS.md](AGENTS.md) before opening a PR.
3. Update notebooks and docs when you add or change widget behaviour.

Please open an issue if you hit build problems or want to discuss new widgets.
