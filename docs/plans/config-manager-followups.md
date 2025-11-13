# Config Manager Follow-Ups

**Created:** 2025-11-13
**Last Updated:** 2025-11-13 9:07 AM
**Status:** Multiple steps in progress, continually adding outstanding tasks
*Note: timestamp each element with last updated time in EST.*

## In Progress

1. **Unify SaveConfigPanel bindings** (2025-11-13 8:00 AM)
   - Current UI passes discrete callbacks (`onVersionChange`, `onSaveSuccess`) but not the binding object.  
   - Decide whether to follow the original plan (pass `bindings` so the panel can update `baseline_state`, `config_file`, etc.) or document why we’re keeping callbacks.  
   - Implement the chosen path and update docs/notebook accordingly.

2. **Normalize `config_file` to absolute paths**  (2025-11-13 9:07 AM)
   - **Solution implemented:** Python now resolves every `config_file` assignment through `_resolve_config_path`, ensuring traitlet values are absolute (and updating `config_file_display` via an observer). On the frontend, `SaveConfigPanel` receives the binding object, computes an absolute target path for both download + File System Access saves, and emits that path back in `onSaveSuccess`.  
   - **Expected behavior:** `widget.config_file` is always absolute regardless of how it was set (init args, UI loads, or saves). The UI continues to show only the basename via `config_file_display`, and post-save traitlet updates should reflect the canonical absolute location. Needs manual notebook validation on macOS/Linux paths and browser save flows.
   - **ISSUES FOUND**
        - When we initialize with a file then the "File name" input field shows `test_state-v0.json` as it should.  But if you load the same file after initialization the "File name" UI element shows `/Users/daniellerothermel/drotherm/repos/dr_widget/test_state-v0.json` which is likely caused by this change.
        - When we update the version in the save config panel then the config isn't marked dirty and the "Saved Payload" section doesn't show a diff for the version.  The isDirty should be based on all the data and metadata except for the saved at field.

## Needs Testing


## Outstanding Tasks

1. **Pull the metadata into its own sub-dict like the "data" field** (2025-11-13 9:07 AM)

2. **Add save path to the file written metadata** (2025-11-13 9:07 AM)

3. **Make it possible to "full height" the config preview** (2025-11-13 9:07 AM)

4. **Make it possible to edit the config in the config preview** (2025-11-13 9:07 AM)

5. **Easy copy/update helper for notebooks**   (2025-11-13 8:30 AM)
   - Notebook authors currently hand-roll `json.loads(widget.current_state)` → mutate → `json.dumps`.  
   - Provide a small helper (Python function or documented pattern) that copies `current_data`, applies updates, and writes back, making “UI element updates widget” demos cleaner.

## Completed

1. **Temporarily hide Complex preview mode**  (2025-11-13 8:10 AM)
   - ConfigViewerPanel now forces the Simple view, hides the toggle, drops the jsontree blurb, and keeps the complex implementation dormant for future re-enablement.  
   - UI copy no longer references graph mode; no other components needed changes.

2. **Metadata-aware preview** (2025-11-13 8:30 AM)
   - Added shared config-format helpers, captured wrapped payloads during load/save, and wired every preview surface with a two-tab toggle (Editable Data vs Saved Payload) so users can switch between editable JSON and the exact on-disk structure.  
   - “Saved Payload” view preserves metadata ordering (version/saved_at before data), ensuring the preview matches the saved file layout; all previews now rely on the same normalization logic.

