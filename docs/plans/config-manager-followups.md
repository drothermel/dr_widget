# Config Manager Follow-Ups

**Created:** 2025-11-13
**Status:** TODOs captured after divergence from the original initialization/state plan.

## In Progress

1. **Unify SaveConfigPanel bindings**  
   - Current UI passes discrete callbacks (`onVersionChange`, `onSaveSuccess`) but not the binding object.  
   - Decide whether to follow the original plan (pass `bindings` so the panel can update `baseline_state`, `config_file`, etc.) or document why we’re keeping callbacks.  
   - Implement the chosen path and update docs/notebook accordingly.

2. **Metadata-aware preview**  
   - Goal: give users a toggle between “editable data” and “would be saved” payloads.  
   - Steps: (a) capture both the wrapped payload and the data-only version when loading/saving; (b) extend `loadedConfigSummary` with wrapped JSON; (c) add a toggle in the preview components to switch between the two; (d) share normalization helpers so Browse, main card, and modal all render consistent metadata.  
   - Finish with docs updates once behavior lands.

## Needs Testing

1. **Normalize `config_file` to absolute paths**  
   - **Solution implemented:** Python now resolves every `config_file` assignment through `_resolve_config_path`, ensuring traitlet values are absolute (and updating `config_file_display` via an observer). On the frontend, `SaveConfigPanel` receives the binding object, computes an absolute target path for both download + File System Access saves, and emits that path back in `onSaveSuccess`.  
   - **Expected behavior:** `widget.config_file` is always absolute regardless of how it was set (init args, UI loads, or saves). The UI continues to show only the basename via `config_file_display`, and post-save traitlet updates should reflect the canonical absolute location. Needs manual notebook validation on macOS/Linux paths and browser save flows.

## Outstanding Tasks

1. **Easy copy/update helper for notebooks**  
   - Notebook authors currently hand-roll `json.loads(widget.current_state)` → mutate → `json.dumps`.  
   - Provide a small helper (Python function or documented pattern) that copies `current_data`, applies updates, and writes back, making “UI element updates widget” demos cleaner.

## Completed

1. **Temporarily hide Complex preview mode**  
   - ConfigViewerPanel now forces the Simple view, hides the toggle, drops the jsontree blurb, and keeps the complex implementation dormant for future re-enablement.  
   - UI copy no longer references graph mode; no other components needed changes.

## Next Steps

- Prioritize the SaveConfigPanel bindings decision before altering UI flows.  
- For each TODO, record manual test steps in `docs/plans/config-initialization-and-state-management.md` once addressed.  
- Keep README/CLAUDE/docs/development synchronized as changes land.
