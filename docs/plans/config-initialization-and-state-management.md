# Implementation Plan: Config Initialization & State Management

**Status**: Ready for Implementation
**Created**: 2025-11-12
**Breaking Changes**: Yes (traitlet renames, data structure changes)

## Overview
Add support for initializing widgets with config data/files and restructure the data model to separate user data from metadata, while maintaining the existing reactivity pattern.

## Design Decisions Summary

### Mental Model
- **"dirty"**: Config is different from a configuration file
  - If there is no file → config is dirty by definition
  - If there is a change from the specified config file → config is dirty
  - Upon loading a file and before changes → config is not dirty

- **"diff"**: Comparison is from the configuration file
  - If there is no configuration file → diff is from an empty config
  - If there is a configuration file → diff is from the original loaded value

### API Design
```python
ConfigFileManager(
    version: str = "default_v0",      # Version metadata
    config_file: str | Path | None,   # File path for load/save
    config_dict: dict | None          # Initial config data
)
```

**Behaviors**:
- `config_file` only → load existing file (error if file doesn't exist)
- `config_file + config_dict` → write dict to new file (error if file exists), then load (clean state)
- `config_dict` only → always dirty until saved, default filename = `"{version}.json"`
- No parameters → existing behavior (start empty, user loads via UI)

### Data Structure
Configs separate metadata from user data:

**New format** (what we're implementing):
```json
{
  "version": "v1.0",
  "saved_at": "2025-11-12T10:30:00Z",
  "data": {
    "harvest_window": 100,
    "orchard": ["Cloudberry Basin"],
    ...
  }
}
```

**Old format** (migrate on load):
```json
{
  "version": "v1.0",
  "saved_at": "2025-11-12T10:30:00Z",
  "selections": {
    "harvest_window": 100,
    ...
  }
}
```

Migration: `{..., "selections": {...}}` → `{..., "data": {"selections": {...}}}`

### Traitlet Changes
- **Rename**: `selected_config` → `current_state` (contains only user data, no metadata)
- **New**: `baseline_state` (last saved state, for dirty detection)
- **New**: `version` (version metadata)
- **New**: `config_file` (save target path)
- **Unchanged**: `files`, `file_count`, `error`

### Reactivity Pattern
The existing Python ↔ Svelte reactivity pattern (documented in `docs/reactivity-notes/python-svelte-sync.md`) will be extended to all new traitlets. Each synced traitlet needs:
1. A `lastWritten{Name}` tracker variable
2. A write callback
3. A reactive `$effect` that writes back to ensure Marimo reactivity

---

## Phase 1: Python-Side Changes

### Step 1.1: Update Traitlet Definitions
**File**: `src/dr_widget/widgets/config_file_manager/__init__.py`

**Actions**:
- Rename `selected_config` → `current_state` (breaking change)
- Add new traitlet: `baseline_state = traitlets.Unicode("").tag(sync=True)`
- Add new traitlet: `config_file = traitlets.Unicode("").tag(sync=True)`
- Add new traitlet: `version = traitlets.Unicode("default_v0").tag(sync=True)`
- Keep existing: `files`, `file_count`, `error` (unchanged)

**Example**:
```python
class ConfigFileManager(anywidget.AnyWidget):
    _esm = _STATIC_DIR / "index.js"
    _css = _STATIC_DIR / "style.css"

    current_state = traitlets.Unicode("").tag(sync=True)
    baseline_state = traitlets.Unicode("").tag(sync=True)
    config_file = traitlets.Unicode("").tag(sync=True)
    version = traitlets.Unicode("default_v0").tag(sync=True)
    files = traitlets.Unicode("[]").tag(sync=True)
    file_count = traitlets.Int(0).tag(sync=True)
    error = traitlets.Unicode("").tag(sync=True)
```

### Step 1.2: Add Initialization Parameters
**File**: `src/dr_widget/widgets/config_file_manager/__init__.py`

**Actions**:
Update `__init__` method signature to accept:
```python
def __init__(
    self,
    config_file: str | Path | None = None,
    config_dict: dict | None = None,
    version: str = "default_v0",
    **kwargs
):
    super().__init__(**kwargs)
    # ... initialization logic
```

### Step 1.3: Implement Initialization Logic
**File**: `src/dr_widget/widgets/config_file_manager/__init__.py`

**Actions**:
Implement logic in `__init__` to handle four scenarios:

#### Scenario A: config_file only (load existing)
```python
if config_file is not None and config_dict is None:
    file_path = Path(config_file)
    if not file_path.exists():
        raise FileNotFoundError(f"Config file not found: {config_file}")

    # Read and parse file
    file_contents = file_path.read_text()
    parsed = json.loads(file_contents)

    # Migrate old format if needed
    if "selections" in parsed and "data" not in parsed:
        # Old format: {..., "selections": {...}}
        # Migrate to: {..., "data": {"selections": {...}}}
        parsed["data"] = {"selections": parsed.pop("selections")}

    # Extract metadata and data
    extracted_version = parsed.get("version", version)
    data_only = parsed.get("data", {})

    # Set traitlets
    self.current_state = json.dumps(data_only, indent=2)
    self.baseline_state = json.dumps(data_only, indent=2)  # Clean state
    self.version = extracted_version
    self.config_file = str(file_path)
```

#### Scenario B: config_dict only (new unsaved config)
```python
elif config_dict is not None and config_file is None:
    if not isinstance(config_dict, dict):
        raise TypeError("config_dict must be a dictionary")

    # Set traitlets
    self.current_state = json.dumps(config_dict, indent=2)
    self.baseline_state = ""  # Empty = dirty state
    self.version = version
    self.config_file = f"{version}.json"  # Default save target
```

#### Scenario C: config_file + config_dict (create new file)
```python
elif config_file is not None and config_dict is not None:
    file_path = Path(config_file)
    if file_path.exists():
        raise FileExistsError(
            f"Config file already exists: {config_file}. "
            "Cannot initialize with both config_file and config_dict "
            "when file already exists."
        )

    if not isinstance(config_dict, dict):
        raise TypeError("config_dict must be a dictionary")

    # Create wrapped structure with metadata
    wrapped_config = {
        "version": version,
        "saved_at": datetime.now(timezone.utc).isoformat(),
        "data": config_dict
    }

    # Write to file
    file_path.parent.mkdir(parents=True, exist_ok=True)
    file_path.write_text(json.dumps(wrapped_config, indent=2))

    # Set traitlets
    data_json = json.dumps(config_dict, indent=2)
    self.current_state = data_json
    self.baseline_state = data_json  # Clean state (just saved)
    self.version = version
    self.config_file = str(file_path)
```

#### Scenario D: No parameters (existing behavior)
```python
else:
    # All traitlets remain at their default values
    # User will load files through UI
    pass
```

### Step 1.4: Add Helper Methods (Optional but Recommended)
**File**: `src/dr_widget/widgets/config_file_manager/__init__.py`

**Actions**:
Add convenience properties:
```python
@property
def is_dirty(self) -> bool:
    """Returns True if current state differs from baseline."""
    return self.current_state != self.baseline_state

@property
def current_data(self) -> dict:
    """Parse and return current_state as a dictionary."""
    if not self.current_state:
        return {}
    try:
        return json.loads(self.current_state)
    except json.JSONDecodeError:
        return {}
```

**Dependencies to add**:
```python
from __future__ import annotations
import json
from datetime import datetime, timezone
from pathlib import Path
```

---

## Phase 2: TypeScript Type Updates

### Step 2.1: Update FileBinding Type
**File**: `src/dr_widget/widgets/config_file_manager/src/lib/hooks/use-file-bindings.ts`

**Actions**:
Update the `FileBinding` interface:
```typescript
export type FileBinding = {
  file_count: number;
  files: string;
  error: string;
  current_state?: string | null;      // Renamed from selected_config
  baseline_state?: string | null;     // New
  config_file?: string | null;        // New
  version?: string | null;            // New
};
```

### Step 2.2: Update Binding Handler Functions
**File**: `src/dr_widget/widgets/config_file_manager/src/lib/hooks/use-file-bindings.ts`

**Actions**:
1. Rename `writeSelectedConfig` → `writeCurrentState`
2. Add new write functions for the new traitlets
3. Update function signature to accept multiple callbacks

**Updated signature**:
```typescript
export function createFileBindingHandlers({
  bindings,
  maxFiles,
  writeCurrentStateCallback,
  writeBaselineStateCallback,
  writeVersionCallback,
}: {
  bindings: FileBinding;
  maxFiles?: number;
  writeCurrentStateCallback?: (contents?: string | null) => void;
  writeBaselineStateCallback?: (contents?: string | null) => void;
  writeVersionCallback?: (version?: string | null) => void;
})
```

**New write functions**:
```typescript
const writeCurrentState = (contents: string | null | undefined): void => {
  writeCurrentStateCallback?.(contents);
  bindings.current_state = contents ?? "";
};

const writeBaselineState = (contents: string | null | undefined): void => {
  writeBaselineStateCallback?.(contents);
  bindings.baseline_state = contents ?? "";
};

const writeVersion = (version: string | null | undefined): void => {
  writeVersionCallback?.(version);
  bindings.version = version ?? "";
};

const writeError = (error: string): void => {
  bindings.error = error;
};
```

**Update return object**:
```typescript
return {
  bindings,
  readBoundFiles,
  writeBoundFiles,
  handleUpload,
  handleFileRejected,
  removeFile,
  writeCurrentState,      // Renamed
  writeBaselineState,     // New
  writeVersion,           // New
  writeError,
};
```

---

## Phase 3: Svelte Component Updates

### Step 3.1: Update Reactive State Variables
**File**: `src/dr_widget/widgets/config_file_manager/src/ConfigFileManager.svelte`

**Actions**:
1. Rename `lastWrittenConfig` → `lastWrittenCurrentState`
2. Add trackers for new traitlets
3. Update all references throughout the file

**Changes**:
```typescript
// Old:
let lastWrittenConfig = $state<string | undefined | null>(undefined);
const writeConfigCallback = (contents?: string | null) => {
  lastWrittenConfig = contents;
};

// New:
let lastWrittenCurrentState = $state<string | undefined | null>(undefined);
let lastWrittenBaselineState = $state<string | undefined | null>(undefined);
let lastWrittenVersion = $state<string | undefined | null>(undefined);

const writeCurrentStateCallback = (contents?: string | null) => {
  lastWrittenCurrentState = contents;
};

const writeBaselineStateCallback = (contents?: string | null) => {
  lastWrittenBaselineState = contents;
};

const writeVersionCallback = (version?: string | null) => {
  lastWrittenVersion = version;
};
```

### Step 3.2: Update Write Callbacks
**File**: `src/dr_widget/widgets/config_file_manager/src/ConfigFileManager.svelte`

**Actions**:
Update the `createFileBindingHandlers` call to pass all callbacks:
```typescript
const bindingHandlers = createFileBindingHandlers({
  bindings,
  maxFiles,
  writeCurrentStateCallback,
  writeBaselineStateCallback,
  writeVersionCallback,
});
```

### Step 3.3: Add Reactive Effects for New Traitlets
**File**: `src/dr_widget/widgets/config_file_manager/src/ConfigFileManager.svelte`

**Actions**:
Add new `$effect` blocks following the existing pattern. Replace the old `selected_config` effect with these three:

**For `current_state`**:
```typescript
$effect(() => {
  console.log("CHECK NEW === LAST WRITTEN: current_state updated");
  console.log("NEW:", bindings.current_state);
  console.log("OLD:", lastWrittenCurrentState);
  if (lastWrittenCurrentState !== bindings.current_state) {
    console.log("WRITING THE CURRENT STATE TO FIX MISMATCH");
    bindingHandlers.writeCurrentState(bindings.current_state);
  }
});
```

**For `baseline_state`**:
```typescript
$effect(() => {
  console.log("CHECK NEW === LAST WRITTEN: baseline_state updated");
  console.log("NEW:", bindings.baseline_state);
  console.log("OLD:", lastWrittenBaselineState);
  if (lastWrittenBaselineState !== bindings.baseline_state) {
    console.log("WRITING THE BASELINE STATE TO FIX MISMATCH");
    bindingHandlers.writeBaselineState(bindings.baseline_state);
  }
});
```

**For `version`**:
```typescript
$effect(() => {
  console.log("CHECK NEW === LAST WRITTEN: version updated");
  console.log("NEW:", bindings.version);
  console.log("OLD:", lastWrittenVersion);
  if (lastWrittenVersion !== bindings.version) {
    console.log("WRITING THE VERSION TO FIX MISMATCH");
    bindingHandlers.writeVersion(bindings.version);
  }
});
```

**Note**: Remove the old `selected_config` effect entirely.

### Step 3.4: Update Dirty State Logic
**File**: `src/dr_widget/widgets/config_file_manager/src/ConfigFileManager.svelte`

**Actions**:
1. Remove the `loadedConfigRaw` state variable (line 75)
2. Remove the manual `isDirty = $state(false)` declaration (line 78)
3. Remove all manual `isDirty` assignments throughout the file
4. Replace with a derived value based on traitlets

**Add this**:
```typescript
const isDirty = $derived(
  bindings.current_state !== bindings.baseline_state
);
```

**Remove**:
- All instances of `isDirty = false`
- All instances of `isDirty = true`
- All instances of `isDirty = raw !== loadedConfigRaw`
- The `loadedConfigRaw` state variable and its associated `$effect` (lines 306-319)

### Step 3.5: Update Diff Baseline
**File**: `src/dr_widget/widgets/config_file_manager/src/ConfigFileManager.svelte`

**Actions**:
1. Remove `loadedConfigBaselineParsed` state variable and its effect
2. Add derived baseline parsing from `bindings.baseline_state`

**Replace**:
```typescript
// Old:
let loadedConfigBaselineParsed = $state<unknown | undefined>(undefined);

$effect(() => {
  const raw = loadedConfigRaw;
  if (!raw) {
    loadedConfigBaselineParsed = undefined;
    return;
  }
  try {
    loadedConfigBaselineParsed = JSON.parse(raw);
  } catch {
    loadedConfigBaselineParsed = undefined;
  }
});

// New:
const baselineParsed = $derived.by(() => {
  if (!bindings.baseline_state) return undefined;
  try {
    return JSON.parse(bindings.baseline_state);
  } catch {
    return undefined;
  }
});
```

**Update all references**:
- Change `loadedConfigBaselineParsed` → `baselineParsed` throughout the file
- This affects props passed to `BrowseConfigsPanel`, `SaveConfigPanel`, and `LoadedConfigPreview`

### Step 3.6: Update Data Structure Handling
**File**: `src/dr_widget/widgets/config_file_manager/src/ConfigFileManager.svelte`

**Actions**:
Since `current_state` now contains only user data (not metadata), update extraction logic:

**Remove version extraction from current_state**:
```typescript
// OLD: Delete these functions/deriveds
const readSelectedConfigObject = () => {
  const raw = bindings.selected_config;
  // ... parsing logic
};

const selectedConfigVersion = $derived.by(() => {
  const parsed = readSelectedConfigObject();
  if (!parsed) return "";
  const value = parsed["version"];
  // ...
});

const canEditSelectedConfigVersion = $derived.by(() =>
  Boolean(readSelectedConfigObject())
);
```

**Replace with direct binding access**:
```typescript
// NEW: Version comes directly from binding
const selectedConfigVersion = $derived(bindings.version ?? "");
const canEditSelectedConfigVersion = $derived(
  bindings.current_state !== "" && bindings.current_state !== null
);
```

**Update version change handler**:
```typescript
// OLD: Parse current_state, modify, re-serialize
const handleSelectedVersionChange = (nextVersion: string) => {
  const raw = bindings.selected_config;
  // ... complex parsing and modification
  bindingHandlers.writeSelectedConfig(serialized);
};

// NEW: Just update the version binding directly
const handleSelectedVersionChange = (nextVersion: string) => {
  bindingHandlers.writeVersion(nextVersion);
};
```

**Update the large effect that processes selected_config**:
Find the effect starting around line 247 that begins with:
```typescript
$effect(() => {
  const raw = bindings.selected_config;
  // ... lots of parsing and state updates
});
```

**Replace with simpler version**:
```typescript
$effect(() => {
  const raw = bindings.current_state;
  if (!raw || raw.trim().length === 0) {
    loadedConfigSummary = undefined;
    previewFromLoaded = false;
    showLoadedPreview = false;
    lastLoadedFileName = undefined;
    if (!managerOpen) {
      resetPreviewState();
    }
    return;
  }

  let parsed: unknown;
  try {
    parsed = JSON.parse(raw);
  } catch {
    parsed = undefined;
  }

  // Note: saved_at is no longer in current_state, it's tracked separately
  // We'll handle this in loadedConfigSummary updates elsewhere

  loadedConfigSummary = {
    name: lastLoadedFileName ?? loadedConfigSummary?.name ?? "Config loaded",
    savedAt: undefined,  // Will be set when we load from file
    version: bindings.version,
    rawText: raw,
    parsed,
  };

  if (!previewFromLoaded && !managerOpen) {
    previewText = raw;
    previewJson = parsed;
  }
});
```

### Step 3.7: Update Save Logic
**File**: `src/dr_widget/widgets/config_file_manager/src/lib/components/file-drop/SaveConfigPanel.svelte`

**Actions**:
Modify the `handleSave` function to wrap data with metadata before writing to file.

**In the save success path**, update:
```typescript
// After writing to file successfully
const writable = await handle.createWritable();

// OLD: Write rawConfig directly
await writable.write(rawConfig);

// NEW: Wrap with metadata structure
const wrapped = {
  version: bindings.version ?? "default_v0",
  saved_at: new Date().toISOString(),
  data: JSON.parse(rawConfig)  // rawConfig is current_state (data only)
};
await writable.write(JSON.stringify(wrapped, null, 2));
await writable.close();

// After successful save, update baseline to match current
const timestamp = new Date().toISOString();
bindings.baseline_state = bindings.current_state;  // Now clean!
onSaveSuccess?.({ fileName: handle.name, timestamp });
```

**Update component props** to receive bindings:
```typescript
const {
  bindings,        // Add this - need access to baseline_state
  rawConfig,       // This is current_state
  baselineConfig,  // This is baselineParsed
  defaultFileName = "config.json",
  dirty = false,
  currentVersion = "",
  canEditVersion = false,
  onSaveSuccess,
  onSaveError,
  onVersionChange,
} = $props<{
  bindings: FileBinding;  // Add this
  rawConfig?: string;
  baselineConfig?: unknown;
  defaultFileName?: string;
  dirty?: boolean;
  currentVersion?: string;
  canEditVersion?: boolean;
  onSaveSuccess?: (result: SaveResult) => void;
  onSaveError?: (message: string) => void;
  onVersionChange?: (version: string) => void;
}>();
```

**Update the call site** in `ConfigFileManager.svelte`:
```typescript
<SaveConfigPanel
  bindings={bindings}          // Add this
  rawConfig={bindings.current_state}
  baselineConfig={baselineParsed}
  defaultFileName={bindings.config_file || lastLoadedFileName || "config.json"}
  dirty={isDirty}
  currentVersion={selectedConfigVersion}
  canEditVersion={canEditSelectedConfigVersion}
  onSaveSuccess={handleSaveSuccess}
  onSaveError={handleSaveError}
  onVersionChange={handleSelectedVersionChange}
/>
```

### Step 3.8: Update Load Logic
**File**: `src/dr_widget/widgets/config_file_manager/src/ConfigFileManager.svelte`

**Actions**:
Update `handleLoadConfig` to parse file, extract metadata, and set traitlets correctly:

```typescript
const handleLoadConfig = () => {
  if (!previewText) {
    bindingHandlers.writeError("Unable to load config: missing file contents.");
    return;
  }

  lastLoadedFileName = previewFile?.name ?? lastLoadedFileName;
  const summaryName = lastLoadedFileName ?? previewFile?.name ?? "Config loaded";

  let parsed: unknown;
  try {
    parsed = JSON.parse(previewText);
  } catch {
    bindingHandlers.writeError("Config is not valid JSON.");
    return;
  }

  if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
    bindingHandlers.writeError("Config must be a JSON object.");
    return;
  }

  const config = parsed as Record<string, unknown>;

  // Migrate old format if needed
  let data: unknown;
  let extractedVersion: string | undefined;
  let savedAt: string | undefined;

  if ("data" in config) {
    // New format: {"version": ..., "saved_at": ..., "data": {...}}
    data = config.data;
    extractedVersion = typeof config.version === "string" ? config.version : undefined;
    savedAt = typeof config.saved_at === "string" ? config.saved_at : undefined;
  } else if ("selections" in config) {
    // Old format: {"version": ..., "saved_at": ..., "selections": {...}}
    // Migrate to: data = {"selections": {...}}
    data = { selections: config.selections };
    extractedVersion = typeof config.version === "string" ? config.version : undefined;
    savedAt = typeof config.saved_at === "string" ? config.saved_at : undefined;
  } else {
    // Unknown format, treat entire object as data
    data = config;
  }

  const dataJson = JSON.stringify(data, null, 2);

  // Update traitlets
  bindingHandlers.writeCurrentState(dataJson);
  bindingHandlers.writeBaselineState(dataJson);  // Clean state after load
  if (extractedVersion) {
    bindingHandlers.writeVersion(extractedVersion);
  }

  // Update UI state
  loadedConfigSummary = {
    name: summaryName,
    savedAt: savedAt ? formatSavedAt(savedAt) : undefined,
    version: extractedVersion,
    rawText: dataJson,  // Store data only, not full file
    parsed: data,
  };

  loadedConfigPath = summaryName;

  // Clean up preview
  if (parsedFiles.length > 0) {
    bindingHandlers.removeFile(0);
  }

  bindingHandlers.writeError("");
  resetPreviewState();
  managerOpen = false;
  showLoadedPreview = false;
  previewFromLoaded = false;
};
```

**Update preview parsing** to handle both formats:
In the section that parses `previewText` for display (before loading), add migration logic similar to above so the preview works correctly for old-format files.

### Step 3.9: Update Display Components
**File**: `src/dr_widget/widgets/config_file_manager/src/ConfigFileManager.svelte`

**Actions**:
Update UI display logic to use the new traitlet structure:

**Version badge** (around line 527):
```typescript
// OLD:
{#if loadedConfigSummary.version}
  <Badge variant="secondary" class="px-2 py-0.5 text-[0.65rem]">
    v{loadedConfigSummary.version}
  </Badge>
{/if}

// NEW: Use bindings.version directly
{#if bindings.version}
  <Badge variant="secondary" class="px-2 py-0.5 text-[0.65rem]">
    v{bindings.version}
  </Badge>
{/if}
```

**Config file name display**:
```typescript
// Use bindings.config_file or fallback
<p class="text-base font-semibold text-zinc-900 dark:text-zinc-100">
  {bindings.config_file || loadedConfigSummary?.name || "No config loaded"}
</p>
```

**Update `handleSaveSuccess`** to not set a new baseline (that's done in SaveConfigPanel now):
```typescript
const handleSaveSuccess = ({
  fileName,
  timestamp,
}: {
  fileName?: string;
  timestamp: string;
}) => {
  // Note: baseline_state is already updated in SaveConfigPanel
  // We just need to update UI state here

  if (fileName) {
    bindingHandlers.config_file = fileName;  // Update save target
    lastLoadedFileName = fileName;
  }

  const formattedSavedAt = formatSavedAt(timestamp) ?? timestamp;

  loadedConfigSummary = {
    name: fileName ?? loadedConfigSummary?.name ?? "Config saved",
    savedAt: formattedSavedAt,
    version: bindings.version,
    rawText: bindings.current_state,
    parsed: undefined,  // Will be re-parsed by other effects
  };

  previewFromLoaded = false;
  showLoadedPreview = false;
  bindingHandlers.writeError("");
};
```

**Update `handleRemove`** to clear baseline:
```typescript
const handleRemove = () => {
  if (previewFromLoaded) {
    bindingHandlers.writeCurrentState(null);
    bindingHandlers.writeBaselineState("");  // Clear baseline too
    loadedConfigSummary = undefined;
    previewFromLoaded = false;
    showLoadedPreview = false;
    lastLoadedFileName = undefined;
    loadedConfigPath = undefined;
    bindingHandlers.writeError("");
    resetPreviewState();
    return;
  }

  if (parsedFiles.length > 0) {
    bindingHandlers.removeFile(0);
  }
  bindingHandlers.writeError("");
  resetPreviewState();
  loadedConfigPath = undefined;
};
```

---

## Phase 4: Migration & Backward Compatibility

### Step 4.1: Handle Old Config Format
**Locations**:
- Python: `src/dr_widget/widgets/config_file_manager/__init__.py` (in Scenario A)
- Svelte: `ConfigFileManager.svelte` (in `handleLoadConfig`)

**Actions**:
Both locations need the same migration logic:

```typescript
// When reading a file
const config = JSON.parse(fileContents) as Record<string, unknown>;

if ("data" in config) {
  // New format - use as-is
  data = config.data;
} else if ("selections" in config) {
  // Old format - migrate
  console.log("Migrating old config format: selections → data.selections");
  data = { selections: config.selections };
} else {
  // Unknown format - treat whole object as data
  data = config;
}
```

**Key points**:
- Always read both formats
- Always save in new format (with `"data"` key)
- Log migration for debugging (optional in Python, console.log in Svelte)
- Preserve all metadata fields (`version`, `saved_at`)

### Step 4.2: Update Notebook Example
**File**: `notebooks/config_file_manager_widget.py`

**Actions**:
1. Update all `widget.selected_config` → `widget.current_state`
2. Add examples of new initialization patterns
3. Update reactive cells

**New example cells to add**:

```python
@app.cell
def _(mo):
    mo.md("""
    ## Initialization Examples

    ### Example 1: Initialize with dict (dirty state)
    ```python
    widget1 = mo.ui.anywidget(ConfigFileManager(
        config_dict={"harvest_window": 100, "orchard": ["Basin A"]},
        version="exp_v1"
    ))
    ```

    ### Example 2: Load existing file
    ```python
    widget2 = mo.ui.anywidget(ConfigFileManager(
        config_file="my_config.json"
    ))
    ```

    ### Example 3: Create new file
    ```python
    widget3 = mo.ui.anywidget(ConfigFileManager(
        config_file="new_exp.json",
        config_dict={"data": "here"},
        version="v2.0"
    ))
    ```
    """)
    return

@app.cell(hide_code=True)
def _(mo, ConfigFileManager):
    # Update existing widget creation
    widget = mo.ui.anywidget(ConfigFileManager())
    widget
    return (widget,)

@app.cell(hide_code=True)
def _(widget):
    # Update to use current_state instead of selected_config
    if widget.current_state:
        try:
            parsed = json.loads(widget.current_state)
            mo.output.append(
                mo.vstack([
                    mo.md("**Loaded config (parsed JSON):**"),
                    mo.json(parsed),
                ])
            )
        except json.JSONDecodeError:
            mo.output.append(
                mo.vstack([
                    mo.md("**Loaded config (raw string):**"),
                    mo.md(f"```json\n{widget.current_state}\n```"),
                ])
            )
    else:
        mo.output.append(mo.md("_No config loaded yet._"))
    return

@app.cell(hide_code=True)
def _(he_switch, widget):
    # Update reactive update cell
    _curr_cfg = json.loads(widget.current_state) if widget.current_state else {}
    _init_cfg = json.loads(widget.current_state) if widget.current_state else {}
    _field = "highlight_experimental"
    if _curr_cfg and (he_switch.value != _curr_cfg.get(_field)):
        _curr_cfg[_field] = he_switch.value
        widget.current_state = json.dumps(_curr_cfg)
        mo.output.append(
            mo.vstack([
                mo.md(f"Updated current state based on switch value for `{_field}`: `{he_switch.value}`"),
                mo.md("**Initial Config:**"),
                _init_cfg,
                mo.md("**Current Config:**"),
                _curr_cfg,
            ])
        )
        print("(short 5sec sleep to read the message before reactive re-run)")
        time.sleep(5)
    else:
        mo.output.append(mo.md(f"No update needed, `{_field}`: `{he_switch.value}`"))
        mo.output.append(mo.vstack([mo.md("**Current Config:**"), _curr_cfg]))
    return

@app.cell
def _(widget):
    # Example of programmatic update
    if widget.current_state:
        sel = json.loads(widget.current_state)
        sel["harvest_window_min"] = 10000000000000
        # Uncomment to test:
        # widget.current_state = json.dumps(sel)
    return
```

### Step 4.3: Update Widget README
**File**: `src/dr_widget/widgets/config_file_manager/README.md`

**Actions**:
1. Update all references to `selected_config` → `current_state`
2. Add initialization section
3. Update data structure documentation
4. Add migration notes

**Sections to update**:

**State Synchronization table**:
```markdown
| Traitlet | Type | Direction | Description |
|----------|------|-----------|-------------|
| `current_state` | Unicode (JSON) | ↔ | Active config data (user data only, no metadata) |
| `baseline_state` | Unicode (JSON) | ↔ | Last saved state for dirty detection and diffs |
| `version` | Unicode | ↔ | Config version metadata |
| `config_file` | Unicode | ↔ | File path for save target |
| `files` | Unicode (JSON) | ↔ | Array of `{ name, size, type }` objects for uploaded files |
| `file_count` | Int | → | Derived from `files.length`, read-only on frontend |
| `error` | Unicode | ↔ | User-facing error messages (e.g., upload failures) |
```

**Add initialization section**:
```markdown
## Initialization

The widget supports three initialization patterns:

### 1. Load Existing File
```python
widget = ConfigFileManager(config_file="experiment.json")
```
- Loads and parses the file
- Extracts metadata (`version`, `saved_at`)
- Widget starts in clean state (not dirty)
- Migrates old format automatically

### 2. Initialize with Data
```python
widget = ConfigFileManager(
    config_dict={"harvest_window": 100, "orchard": ["Basin A"]},
    version="exp_v1"
)
```
- Widget starts in dirty state (no file backing)
- Default save filename: `"exp_v1.json"`
- No `saved_at` until first save

### 3. Create New File
```python
widget = ConfigFileManager(
    config_file="new_experiment.json",
    config_dict={"data": "here"},
    version="v2.0"
)
```
- Creates file with metadata wrapper
- Widget starts in clean state (just saved)
- Errors if file already exists

### 4. Empty Widget
```python
widget = ConfigFileManager()
```
- Traditional behavior
- User loads files via UI
```

**Add data structure section**:
```markdown
## Data Structure

### File Format (on disk)
```json
{
  "version": "v1.0",
  "saved_at": "2025-11-12T10:30:00Z",
  "data": {
    "harvest_window": 100,
    "orchard": ["Cloudberry Basin"]
  }
}
```

### Traitlet Contents
- `current_state`: Contains only the `"data"` portion (no metadata)
- `version`: Separate traitlet for version metadata
- `baseline_state`: Last saved `"data"` for dirty detection

### Migration from Old Format
Files with this structure are automatically migrated:
```json
{
  "version": "v1.0",
  "saved_at": "2025-11-12T10:30:00Z",
  "selections": {
    "harvest_window": 100
  }
}
```

Becomes:
```json
{
  "version": "v1.0",
  "saved_at": "2025-11-12T10:30:00Z",
  "data": {
    "selections": {
      "harvest_window": 100
    }
  }
}
```
```

**Update code examples**:
```markdown
**Accessing config data:**
```python
import json

if widget.current_state:  # Changed from selected_config
    config = json.loads(widget.current_state)
    # Use config data in your analysis
    harvest_window = config["harvest_window"]
    orchard = config["orchard"]
```

**Programmatic updates:**
```python
config = json.loads(widget.current_state)  # Changed
config["harvest_window"] = 10000
widget.current_state = json.dumps(config)  # Changed
```

**Check if dirty:**
```python
if widget.is_dirty:
    print("Config has unsaved changes!")
```
```

---

## Phase 5: Testing & Validation

### Step 5.1: Manual Test Scenarios

Create a test script or notebook cells to validate each scenario:

#### Test 1: Init with config_dict
```python
widget = ConfigFileManager(
    config_dict={"harvest_window": 100},
    version="test_v1"
)

# Verify:
assert widget.is_dirty == True, "Should be dirty (no file backing)"
assert widget.version == "test_v1"
assert widget.config_file == "test_v1.json"
assert json.loads(widget.current_state)["harvest_window"] == 100
assert widget.baseline_state == "", "Baseline should be empty"
```

**UI checks**:
- Widget shows dirty state badge
- Save panel suggests "test_v1.json"
- After save, dirty badge disappears
- File on disk has correct metadata wrapper

#### Test 2: Init with existing file
First, create a test file:
```python
test_config = {
    "version": "file_v1",
    "saved_at": "2025-11-12T10:00:00Z",
    "data": {"existing": "data"}
}
Path("test_existing.json").write_text(json.dumps(test_config, indent=2))
```

Then:
```python
widget = ConfigFileManager(config_file="test_existing.json")

# Verify:
assert widget.is_dirty == False, "Should be clean (just loaded)"
assert widget.version == "file_v1"
assert json.loads(widget.current_state)["existing"] == "data"
assert widget.current_state == widget.baseline_state
```

#### Test 3: Init with new file
```python
widget = ConfigFileManager(
    config_file="new_config.json",
    config_dict={"new": "data"},
    version="v2.0"
)

# Verify:
assert Path("new_config.json").exists(), "File should be created"
file_data = json.loads(Path("new_config.json").read_text())
assert file_data["version"] == "v2.0"
assert file_data["data"]["new"] == "data"
assert "saved_at" in file_data
assert widget.is_dirty == False, "Should be clean (just saved)"
```

**Error case**:
```python
# Should raise FileExistsError
try:
    widget = ConfigFileManager(
        config_file="new_config.json",  # Already exists!
        config_dict={"more": "data"}
    )
    assert False, "Should have raised error"
except FileExistsError:
    pass  # Expected
```

#### Test 4: Old format migration
Create old-format file:
```python
old_config = {
    "version": "old_v1",
    "saved_at": "2025-11-11T10:00:00Z",
    "selections": {"harvest_window": 50}
}
Path("old_format.json").write_text(json.dumps(old_config, indent=2))
```

Load and save:
```python
widget = ConfigFileManager(config_file="old_format.json")

# Verify data loaded correctly
data = json.loads(widget.current_state)
assert "selections" in data
assert data["selections"]["harvest_window"] == 50

# Make a change and save
data["selections"]["harvest_window"] = 100
widget.current_state = json.dumps(data)

# Save via UI, then check file
# (need to trigger save through UI interaction or programmatically)
# After save:
saved_data = json.loads(Path("old_format.json").read_text())
assert "data" in saved_data, "Should have new format"
assert "data" in saved_data["data"], "Selections should be nested"
assert saved_data["data"]["selections"]["harvest_window"] == 100
```

#### Test 5: Reactive updates
```python
# Cell 1
widget = ConfigFileManager(config_dict={"value": 1})

# Cell 2
state = json.loads(widget.current_state)
state["value"] = 999
widget.current_state = json.dumps(state)

# Cell 3 (should re-run when Cell 2 runs)
display(json.loads(widget.current_state))
# Verify this cell re-ran by checking output
```

**Verify**:
- Cell 3 shows updated value (999)
- Widget shows dirty state
- Diff viewer shows change: `value: 1 → 999`
- Baseline still shows `{"value": 1}`

#### Test 6: Version editing
```python
widget = ConfigFileManager(
    config_dict={"data": "here"},
    version="v1.0"
)

# Change version in UI
widget.version = "v2.0"

# Verify:
assert widget.version == "v2.0"
assert widget.is_dirty == True  # Changing version makes it dirty
```

### Step 5.2: Build & Type Check

Create a checklist to run before committing:

```bash
# 1. Type check Svelte
npx svelte-check --tsconfig src/dr_widget/widgets/config_file_manager/tsconfig.json

# 2. Build widget
bun run build:config-file-manager

# 3. Check build output
ls -lh src/dr_widget/widgets/config_file_manager/static/
# Should see index.js and style.css

# 4. Build Python package
uv build

# 5. Inspect wheel contents
unzip -l dist/*.whl | grep static
# Should see static/index.js and static/style.css

# 6. Test in notebook
marimo run notebooks/config_file_manager_widget.py
```

### Step 5.3: Edge Cases to Test

1. **Empty config_dict**: `ConfigFileManager(config_dict={})`
   - Should work, creates empty config

2. **Invalid JSON in current_state**:
   ```python
   widget.current_state = "not json"
   # UI should handle gracefully
   ```

3. **File permissions**: Create file without write permissions
   - Save should show appropriate error

4. **Large config**: Test with deeply nested JSON (10+ levels)
   - Diff calculation performance
   - Tree view rendering

5. **Special characters in filename**: `config_file="my config (v1).json"`
   - Should handle spaces and special chars

6. **Concurrent edits**: Open widget in two notebooks
   - File system locking behavior

---

## Phase 6: Documentation Updates

### Step 6.1: Update Repository CLAUDE.md
**File**: `CLAUDE.md`

**Actions**:
Add a new section after "AnyWidget Traitlet Contracts":

```markdown
## Initialization Patterns

The Config File Manager supports flexible initialization:

### Load Existing Config
```python
widget = ConfigFileManager(config_file="path/to/config.json")
```
Loads file, extracts metadata, starts clean (not dirty).

### Initialize with Data
```python
widget = ConfigFileManager(
    config_dict={"param": "value"},
    version="exp_v1"
)
```
Starts dirty, default save target: `"{version}.json"`.

### Create New File
```python
widget = ConfigFileManager(
    config_file="new.json",
    config_dict={"data": "here"},
    version="v1.0"
)
```
Writes file immediately, starts clean.

### Data Structure
- **On disk**: `{"version": "...", "saved_at": "...", "data": {...}}`
- **In traitlet**: `current_state` contains only the `data` portion
- **Metadata**: Stored in separate traitlets (`version`, `baseline_state`)

Old format (`selections` key) is auto-migrated to new format (`data.selections`).
```

Update the traitlet contracts section:
```markdown
## AnyWidget Traitlet Contracts

Traitlets in `ConfigFileManager` class (src/dr_widget/widgets/config_file_manager/__init__.py:15):
- `current_state` (Unicode) - Active config data (user data only, no metadata)
- `baseline_state` (Unicode) - Last saved state for dirty detection
- `version` (Unicode) - Config version metadata
- `config_file` (Unicode) - Save target file path
- `files` (Unicode) - JSON string of `{ name, size, type }[]` array
- `file_count` (Int) - Derived from `files.length`, stay read-only on frontend
- `error` (Unicode) - User-facing error message, cleared when UI recovers

All traitlets tagged with `sync=True` for bidirectional Python ↔ Svelte binding.
```

### Step 6.2: Update Architecture Docs
**File**: `docs/architecture.md`

**Actions**:
Update the "Data Flow" section:

```markdown
### Data Flow

```text
Marimo Notebook (Python)
        │ traitlets (current_state, baseline_state, version, ...)
        ▼
ConfigFileManager (AnyWidget)  ── embeds ──▶  static/index.js (Svelte bundle)
        │                                │
        └── JSON bindings <──────────────┘
```

- Python updates traitlets → AnyWidget serializes to JSON → Svelte reads via `bindings`.
- User actions in Svelte update bindings → AnyWidget pushes changes back to Python automatically.
- Write-back pattern ensures Marimo reactivity (see `docs/reactivity-notes/python-svelte-sync.md`).

### Traitlet Structure

**current_state**: Contains only user data (no metadata)
```json
{
  "harvest_window": 100,
  "orchard": ["Basin A"]
}
```

**File on disk**: Wrapped with metadata
```json
{
  "version": "v1.0",
  "saved_at": "2025-11-12T10:00:00Z",
  "data": {
    "harvest_window": 100,
    "orchard": ["Basin A"]
  }
}
```

**baseline_state**: Same structure as `current_state`, represents last saved state

**Dirty detection**: `is_dirty = (current_state != baseline_state)`

**Diff calculation**: Compare `current_state` vs `baseline_state`
```

### Step 6.3: Update Development Docs
**File**: `docs/development.md`

**Actions**:
Add testing section:

```markdown
## 5. Testing Initialization Scenarios

### Test with config_dict
```python
from dr_widget import ConfigFileManager

widget = ConfigFileManager(
    config_dict={"test": "data"},
    version="test_v1"
)

assert widget.is_dirty == True
assert widget.version == "test_v1"
```

### Test with existing file
```python
# First create a test file
import json
from pathlib import Path

test_config = {
    "version": "v1.0",
    "saved_at": "2025-11-12T10:00:00Z",
    "data": {"example": "data"}
}
Path("test.json").write_text(json.dumps(test_config))

# Then load it
widget = ConfigFileManager(config_file="test.json")
assert widget.is_dirty == False
assert widget.version == "v1.0"
```

### Test old format migration
```python
# Create old-format file
old_format = {
    "version": "old_v1",
    "selections": {"param": "value"}
}
Path("old.json").write_text(json.dumps(old_format))

# Load and verify migration
widget = ConfigFileManager(config_file="old.json")
data = json.loads(widget.current_state)
assert "selections" in data  # Migrated to data.selections
```

### Manual UI Testing
1. Load widget in Marimo notebook
2. Initialize with various patterns
3. Verify dirty state indicators
4. Test save flow and file creation
5. Verify diffs display correctly
6. Test version editing
7. Verify reactive updates trigger Marimo cell re-runs
```

---

## Summary of Breaking Changes

### For Widget Users

1. **Traitlet rename**: `selected_config` → `current_state`
   ```python
   # OLD
   config = json.loads(widget.selected_config)
   widget.selected_config = json.dumps(new_config)

   # NEW
   config = json.loads(widget.current_state)
   widget.current_state = json.dumps(new_config)
   ```

2. **Data structure change**: `current_state` contains only user data
   ```python
   # OLD: current_state had metadata
   {"version": "v1", "saved_at": "...", "selections": {...}}

   # NEW: current_state is data only
   {"selections": {...}}

   # Access version separately:
   version = widget.version
   ```

3. **File format**: New configs use `"data"` key instead of `"selections"`
   - Old files are auto-migrated on load
   - All saves use new format
   - No action required from users (handled automatically)

### Migration Path for Existing Users

**Step 1**: Update code to use `current_state`
```python
# Find and replace in notebooks:
widget.selected_config → widget.current_state
```

**Step 2**: Update data access patterns
```python
# If you were extracting version from config:
# OLD
config = json.loads(widget.selected_config)
version = config.get("version")

# NEW
version = widget.version  # Direct access
```

**Step 3**: Existing config files work automatically
- Widget will read old format
- Widget will save in new format
- No manual file conversion needed

---

## Non-Breaking Additions

1. **Initialization support**: New optional parameters
   - `config_file`: Load/save target
   - `config_dict`: Initial data
   - `version`: Version metadata

2. **New traitlets**: Additional state tracking
   - `baseline_state`: For dirty detection
   - `version`: Version metadata
   - `config_file`: Save target path

3. **Convenience properties** (Python):
   - `widget.is_dirty`: Boolean dirty state
   - `widget.current_data`: Parsed dict

4. **Automatic dirty tracking**: No manual state management needed

---

## Implementation Checklist

Use this checklist while implementing:

### Phase 1: Python
- [ ] Update traitlet definitions
- [ ] Add initialization parameters
- [ ] Implement Scenario A (load existing file)
- [ ] Implement Scenario B (config_dict only)
- [ ] Implement Scenario C (create new file)
- [ ] Implement Scenario D (no params)
- [ ] Add helper properties (`is_dirty`, `current_data`)
- [ ] Add necessary imports (`json`, `Path`, `datetime`)

### Phase 2: TypeScript Types
- [ ] Update `FileBinding` interface
- [ ] Rename `writeSelectedConfig` → `writeCurrentState`
- [ ] Add `writeBaselineState` function
- [ ] Add `writeVersion` function
- [ ] Update function signature for multiple callbacks
- [ ] Update return object

### Phase 3: Svelte Component
- [ ] Rename `lastWrittenConfig` → `lastWrittenCurrentState`
- [ ] Add `lastWrittenBaselineState` tracker
- [ ] Add `lastWrittenVersion` tracker
- [ ] Create write callbacks for each
- [ ] Update `createFileBindingHandlers` call
- [ ] Add reactive effects for `current_state`
- [ ] Add reactive effects for `baseline_state`
- [ ] Add reactive effects for `version`
- [ ] Replace dirty state logic with derived value
- [ ] Update diff baseline to use `baselineParsed`
- [ ] Remove version extraction from `current_state`
- [ ] Simplify version change handler
- [ ] Update save logic to wrap with metadata
- [ ] Update load logic to unwrap and migrate
- [ ] Update display components

### Phase 4: SaveConfigPanel
- [ ] Add `bindings` prop
- [ ] Update save to wrap data with metadata
- [ ] Update baseline after successful save
- [ ] Update call site in ConfigFileManager

### Phase 5: Migration
- [ ] Implement old format detection (Python)
- [ ] Implement old format detection (Svelte)
- [ ] Test migration with sample old files
- [ ] Update notebook examples
- [ ] Update widget README

### Phase 6: Documentation
- [ ] Update CLAUDE.md
- [ ] Update architecture.md
- [ ] Update development.md
- [ ] Update widget README

### Phase 7: Testing
- [ ] Test init with config_dict
- [ ] Test init with existing file
- [ ] Test init with new file
- [ ] Test old format migration
- [ ] Test reactive updates
- [ ] Test version editing
- [ ] Test edge cases
- [ ] Run build and type check
- [ ] Test in Marimo notebook

---

## Notes for Implementer

1. **Read reactivity docs first**: Review `docs/reactivity-notes/python-svelte-sync.md` to understand the write-back pattern before modifying reactive effects.

2. **Preserve existing patterns**: When adding new traitlets, follow the exact same pattern as the existing `current_state` (formerly `selected_config`) implementation.

3. **Test incrementally**: After each phase, run `bun run build` and `npx svelte-check` to catch errors early.

4. **Console logs**: The reactive effects include console.log statements for debugging. These can be removed or commented out after testing.

5. **Type safety**: TypeScript will catch many errors. Pay attention to type errors from `svelte-check`.

6. **File format consistency**: Always save in new format (`"data"` key), always support reading old format (`"selections"` key).

7. **Marimo reactivity**: The write-back pattern is critical for Marimo cell re-runs. Don't skip or modify the `$effect` blocks without understanding why they're needed.

8. **Breaking changes**: This is a breaking change release. Update version number appropriately and document migration path for users.

---

## Success Criteria

Implementation is complete when:

1. ✅ All initialization scenarios work as specified
2. ✅ Old format files migrate automatically
3. ✅ Dirty state tracking works correctly
4. ✅ Diffs compare against baseline
5. ✅ Save wraps data with metadata
6. ✅ Load unwraps and sets baseline
7. ✅ Marimo reactivity works for all traitlets
8. ✅ Type checking passes
9. ✅ Build succeeds
10. ✅ Notebook example works
11. ✅ All documentation updated
12. ✅ Manual tests pass

---

## Questions?

If anything is unclear during implementation:
- Check `docs/reactivity-notes/python-svelte-sync.md` for reactivity patterns
- Check existing code for similar patterns
- Test each change incrementally
- Document any deviations from this plan
