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
- `npx svelte-check --tsconfig src/dr_widget/widgets/config_file_manager/tsconfig.json` – Type-check `.svelte` files.
- The Config File Manager workspace also enables Vite’s React plugin to support the graph-style JSON preview. `bun install` pulls in `react`, `react-dom`, `reaflow`, and `react-zoom-pan-pinch`; no extra setup is required beyond the standard Bun install.

The widget uses Tailwind v4, shadcn-svelte components, and the helper `use-file-bindings` hook for AnyWidget bindings. Shared UI lives in `src/lib/components`.

## 3. Python Packaging & Notebook Loop

- `uv build` – Creates `dist/*.whl` and `dist/*.tar.gz` that include the latest `static/` assets.
- `marimo run notebooks/config_file_manager_widget.py` – Runs the notebook demo inside the repo. This is the quickest integration test.

Traitlet updates (`files`, `file_count`, `error`, `max_files`) automatically sync between Python and Svelte; use the notebook to validate that syncing works end-to-end.

## 4. Adding a New Widget

1. Copy the `config_file_manager` workspace structure into `src/dr_widget/widgets/<new_widget>`.
2. Update the root `package.json` scripts (`build:<name>`, `dev:<name>`).
3. Include the new widget’s `static/**` folder in `pyproject.toml` (`[tool.uv.build-backend].source-include`).
4. Expose an AnyWidget subclass under `src/dr_widget/widgets/<new_widget>/__init__.py`, re-export it from `src/dr_widget/__init__.py`, and update notebooks/demos as needed.

## 5. Testing Checklist

- Manual smoke test in the Vite dev server (drag/drop interactions, error states).
- `npx svelte-check` for type errors.
- `bun run build` to ensure the bundle compiles without warnings.
- `uv build` and inspect the wheel (`unzip -l dist/*.whl`) to confirm assets are packaged.

Automated tests (Vitest, notebook regressions) are TODO; document manual steps in PRs until they exist.
