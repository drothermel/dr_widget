# Config Manager Follow-Ups

**Created:** 2025-11-13
**Status:** TODOs captured after divergence from the original initialization/state plan.

## Outstanding Tasks

1. **Unify SaveConfigPanel bindings**  
   - Current UI passes discrete callbacks (`onVersionChange`, `onSaveSuccess`) but not the binding object.  
   - Decide whether to follow the original plan (pass `bindings` so the panel can update `baseline_state`, `config_file`, etc.) or document why we’re keeping callbacks.  
   - Implement the chosen path and update docs/notebook accordingly.

2. [in progress] **Normalize `config_file` to absolute paths**  
   - Today `ConfigFileManager` may emit relative paths (e.g., default `exp_v1.json`).  
   - Normalize to `Path(...).resolve()` on initialization and after saves so notebooks can rely on absolute locations.  
   - Ensure `config_file_display` still surfaces just the basename.

3. **Metadata-aware preview**  
   - The “View Config” preview currently shows `current_state` (data only).  
   - Add an option/summary that displays the exact payload that would be saved, including `version`, `saved_at`, and `data` wrapper, so users can confirm the on-disk structure.

4. **Easy copy/update helper for notebooks**  
   - Notebook authors currently hand-roll `json.loads(widget.current_state)` → mutate → `json.dumps`.  
   - Provide a small helper (Python function or documented pattern) that copies `current_data`, applies updates, and writes back, making “UI element updates widget” demos cleaner.

5. **Remove Complex Mode from display until working**

## Next Steps

- Prioritize the SaveConfigPanel bindings decision before altering UI flows.  
- For each TODO, record manual test steps in `docs/plans/config-initialization-and-state-management.md` once addressed.  
- Keep README/CLAUDE/docs/development synchronized as changes land.
