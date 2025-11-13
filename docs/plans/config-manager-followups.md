# Config Manager Follow-Ups

**Created:** 2025-11-13
**Status:** TODOs captured after divergence from the original initialization/state plan.

## In Progress

1. **Unify SaveConfigPanel bindings**  
   - Current UI passes discrete callbacks (`onVersionChange`, `onSaveSuccess`) but not the binding object.  
   - Decide whether to follow the original plan (pass `bindings` so the panel can update `baseline_state`, `config_file`, etc.) or document why we’re keeping callbacks.  
   - Implement the chosen path and update docs/notebook accordingly.

## Needs Testing

1. **Normalize `config_file` to absolute paths**  
   - **Solution implemented:** Python now resolves every `config_file` assignment through `_resolve_config_path`, ensuring traitlet values are absolute (and updating `config_file_display` via an observer). On the frontend, `SaveConfigPanel` receives the binding object, computes an absolute target path for both download + File System Access saves, and emits that path back in `onSaveSuccess`.  
   - **Expected behavior:** `widget.config_file` is always absolute regardless of how it was set (init args, UI loads, or saves). The UI continues to show only the basename via `config_file_display`, and post-save traitlet updates should reflect the canonical absolute location. Needs manual notebook validation on macOS/Linux paths and browser save flows.

## Outstanding Tasks

1. **Metadata-aware preview**  
   - The “View Config” preview currently shows `current_state` (data only).  
   - Add an option/summary that displays the exact payload that would be saved, including `version`, `saved_at`, and `data` wrapper, so users can confirm the on-disk structure.

2. **Easy copy/update helper for notebooks**  
   - Notebook authors currently hand-roll `json.loads(widget.current_state)` → mutate → `json.dumps`.  
   - Provide a small helper (Python function or documented pattern) that copies `current_data`, applies updates, and writes back, making “UI element updates widget” demos cleaner.

3. **Remove Complex Mode from display until working**

## Next Steps

- Prioritize the SaveConfigPanel bindings decision before altering UI flows.  
- For each TODO, record manual test steps in `docs/plans/config-initialization-and-state-management.md` once addressed.  
- Keep README/CLAUDE/docs/development synchronized as changes land.
