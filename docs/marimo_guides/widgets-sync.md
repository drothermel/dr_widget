# Python ↔ Svelte Reactivity Pattern

This document explains the bidirectional reactivity pattern used in the Config File Manager widget to keep Python (Marimo) and Svelte UI in sync.

## Context

- **Python widget class** (`ConfigFileManager`): exposes traitlets such as `current_state` that live in the notebook runtime.
- **Svelte widget component** (`ConfigFileManager.svelte`): renders the UI and stores `lastWritten*` variables via `$state`.
- **Shared helpers** (`use-file-bindings.ts`, `createFileBindingHandlers`): own the `writeCurrentState` logic that actually touches traitlets.

Throughout this guide, “widget” refers to the Python `ConfigFileManager` class, while “component” refers to the Svelte implementation.

## Table of Contents

1. [Quick start wiring](#quick-start-wiring)
2. [The Problem](#the-problem)
3. [Why We Need the Write-Back Pattern](#why-we-need-the-write-back-pattern)
4. [The Implementation](#the-implementation)
5. [The Complete Flow](#the-complete-flow)
6. [Why Each Part is Necessary](#why-each-part-is-necessary)
7. [Common Pitfalls to Avoid](#common-pitfalls-to-avoid)
8. [Future Considerations](#future-considerations)

## Quick start wiring

Use this minimal setup as a template before diving into the details below.

```python
# Python notebook cell
from widgets import ConfigFileManager

widget = ConfigFileManager()
widget.current_state  # traitlet that will stay synced via write-back
```

```svelte
<!-- ConfigFileManager.svelte -->
<script lang="ts">
  import { createFileBindingHandlers } from "./use-file-bindings";

  const bindings = $props.bindings; // traitlets from Python
  let lastWrittenCurrentState = $state<string | null | undefined>(undefined);

  const bindingHandlers = createFileBindingHandlers({
    bindings,
    writeCurrentStateCallback: (contents) => {
      lastWrittenCurrentState = contents;
    },
  });

  $effect(() => {
    if (lastWrittenCurrentState !== bindings.current_state) {
      bindingHandlers.writeCurrentState(bindings.current_state);
    }
  });
</script>
```

This snippet highlights the only moving parts: track the last value, call the callback before touching the traitlet, and gate the write-back in `$effect`.

## The Problem

When building AnyWidget components for Marimo notebooks, we need **bidirectional reactivity**:

1. **Svelte → Python**: User interacts with widget UI → Python notebook cells should re-run
2. **Python → Svelte**: Notebook code updates widget state → UI should reflect changes

AnyWidget provides traitlet syncing that handles data transfer, but there's a subtle issue with **Marimo's reactivity system**.

## Why We Need the Write-Back Pattern

### The Issue: Python Updates Don't Always Trigger Reactivity

Consider this Marimo notebook:

```python
# Cell 1: Create widget
widget = ConfigFileManager()

# Cell 2: Update config from Python
config = {"harvest_window": 100}
widget.current_state = json.dumps(config)

# Cell 3: Display config (should re-run when Cell 2 runs)
display(json.loads(widget.current_state))
```

**What should happen**: When Cell 2 runs, Cell 3 should detect the change and re-run.

**What might happen without write-back**: Marimo might not detect the change in Cell 3 because:
- The traitlet value changed on the Python side
- But Marimo's dependency graph may not register this as a "reactive update"
- Cell 3 doesn't re-run, showing stale data

### The Solution: Svelte Writes Back to Trigger Reactivity

The pattern ensures that **any change to the traitlet, even from Python, gets written back through Svelte**, which guarantees Marimo's reactivity system sees it as a change.

## The Implementation

### 1. Track Last Written Value (Svelte-side only)

```typescript
let lastWrittenCurrentState = $state<string | undefined | null>(undefined);
```

This variable lives **only in Svelte**, not synced as a traitlet. It tracks the last value Svelte wrote to the binding.

### 2. Write Callback (Update Tracker Before Writing)

```typescript
const writeCurrentStateCallback = (contents?: string | null) => {
    lastWrittenCurrentState = contents;
};

const bindingHandlers = createFileBindingHandlers({
    bindings,
    maxFiles,
    writeCurrentStateCallback,
});
```

Whenever we write to the traitlet, we **first** record what we're about to write in `lastWrittenCurrentState`.

### 3. The Write Function (use-file-bindings.ts)

```typescript
const writeCurrentState = (contents: string | null | undefined): void => {
    writeCurrentStateCallback?.(contents);           // ← Update lastWrittenCurrentState FIRST
    bindings.current_state = contents ?? "";  // ← THEN update traitlet
};
```

**Critical order**: We update `lastWrittenCurrentState` **before** updating the traitlet binding.

### 4. The Reactive Effect (Detect Changes and Write Back)

```typescript
$effect(() => {
    console.log("CHECK NEW === LAST WRITTEN: current state updated")
    console.log("NEW:", bindings.current_state);
    console.log("OLD:", lastWrittenCurrentState);
    if (lastWrittenCurrentState !== bindings.current_state) {
        console.log("WRITING THE CURRENT STATE TO FIX MISMATCH")
        bindingHandlers.writeCurrentState(bindings.current_state);
    }
});
```

This effect runs whenever `bindings.current_state` changes. It asks: "Did I write this value myself, or did it come from Python?"

## The Complete Flow

### Scenario A: Python Updates the Config

```
1. Python (Cell 2): widget.current_state = json.dumps({"new": "data"})

2. AnyWidget traitlet sync → Svelte receives update
   bindings.current_state = '{"new": "data"}'

3. $effect fires (bindings changed)
   lastWrittenCurrentState = undefined (or old value)
   bindings.current_state = '{"new": "data"}'
   They don't match!

4. Call writeCurrentState('{"new": "data"}')
   a. writeCurrentStateCallback sets: lastWrittenCurrentState = '{"new": "data"}'
   b. Then sets: bindings.current_state = '{"new": "data"}'

5. Traitlet update (from step 4b) triggers Marimo reactivity
   → Cell 3 detects dependency change → re-runs

6. $effect fires again (bindings changed from step 4b)
   lastWrittenCurrentState = '{"new": "data"}'
   bindings.current_state = '{"new": "data"}'
   They match! Do nothing (prevents infinite loop)
```

### Scenario B: Svelte UI Updates the Config

```
1. User clicks "Load Config" → handleLoadConfig() runs

2. Calls bindingHandlers.writeCurrentState(previewText)
   a. writeCurrentStateCallback sets: lastWrittenCurrentState = previewText
   b. Then sets: bindings.current_state = previewText

3. Traitlet sync → Python receives update
   widget.current_state = previewText

4. Marimo detects change → dependent cells re-run

5. $effect fires (bindings changed)
   lastWrittenCurrentState = previewText (we set this in step 2a)
   bindings.current_state = previewText
   They match! Do nothing (no unnecessary write-back)
```

### Scenario C: Widget Initialization with Data

```
1. Python: widget = ConfigFileManager(config_dict={"initial": "data"})
   Python __init__ sets: self.current_state = '{"initial": "data"}'

2. Svelte component mounts
   Receives: bindings.current_state = '{"initial": "data"}'
   Initializes: lastWrittenCurrentState = undefined

3. $effect fires (on mount)
   lastWrittenCurrentState = undefined
   bindings.current_state = '{"initial": "data"}'
   They don't match!

4. Call writeCurrentState('{"initial": "data"}')
   a. Sets: lastWrittenCurrentState = '{"initial": "data"}'
   b. Sets: bindings.current_state = '{"initial": "data"}'

5. Initial write-back triggers Marimo reactivity
   → Ensures dependent cells know about initial widget state

6. $effect fires again
   lastWrittenCurrentState = '{"initial": "data"}'
   bindings.current_state = '{"initial": "data"}'
   They match! Stabilizes (no infinite loop)
```

## Why Each Part is Necessary

### Q: "Why not just use bindings.current_state directly? Why track lastWrittenCurrentState?"

**A:** Without `lastWrittenCurrentState`, we get an infinite loop:

```typescript
// BAD: Without lastWrittenCurrentState
$effect(() => {
    bindingHandlers.writeCurrentState(bindings.current_state);
    // This updates bindings.current_state
    // Which triggers this $effect again
    // Which updates bindings.current_state again
    // → INFINITE LOOP
});
```

The `lastWrittenCurrentState` variable breaks the loop by letting us detect: "I just wrote this value, so I should ignore this change."

### Q: "Why write back at all? We're just writing the same value we received!"

**A:** The write-back **triggers Marimo's reactivity system**. Without it:

```python
# Cell 1
widget = ConfigFileManager()

# Cell 2
widget.current_state = json.dumps({"a": 1})

# Cell 3 - expects to see {"a": 1} but might show stale data
display(json.loads(widget.current_state))
```

When Cell 2 runs, it sets the traitlet value. But Marimo's reactive dependency tracking needs to see a "change event" to know Cell 3 should re-run. The Svelte write-back ensures this event fires.

### Q: "Why update lastWrittenCurrentState BEFORE updating the binding?"

**A:** Order matters for the comparison in `$effect`:

```typescript
// CORRECT ORDER (what we do)
const writeCurrentState = (contents) => {
    writeCurrentStateCallback(contents);           // lastWrittenCurrentState = contents
    bindings.current_state = contents;  // Trigger sync
};

$effect(() => {
    if (lastWrittenCurrentState !== bindings.current_state) {
        // When we write, lastWrittenCurrentState is already set
        // So this condition will be false, preventing re-trigger
    }
});

// WRONG ORDER
const writeCurrentState = (contents) => {
    bindings.current_state = contents;  // Trigger sync
    writeCurrentStateCallback(contents);           // lastWrittenCurrentState = contents (too late!)
};

$effect(() => {
    if (lastWrittenCurrentState !== bindings.current_state) {
        // lastWrittenCurrentState still has old value when this runs
        // Condition is true → writes again → infinite loop
    }
});
```

If we update `lastWrittenCurrentState` **after** the binding, the `$effect` will see a mismatch and trigger another write.

### Q: "Can we simplify by removing the write callback pattern?"

**A:** No. The callback is what lets us update `lastWrittenCurrentState` **synchronously before** the binding update. Without it:

```typescript
// WRONG: No callback
const writeCurrentState = (contents) => {
    lastWrittenCurrentState = contents;  // This is in ConfigFileManager.svelte
    bindings.current_state = contents;  // This triggers $effect
};

// But writeCurrentState is in use-file-bindings.ts!
// It doesn't have access to lastWrittenCurrentState
// We need the callback to communicate between files
```

The callback pattern lets the shared `use-file-bindings` hook communicate with the component-specific reactive state.

## Common Pitfalls to Avoid

### ❌ DON'T: Remove lastWrittenCurrentState

```typescript
// This causes infinite loops
$effect(() => {
    bindingHandlers.writeCurrentState(bindings.current_state);
});
```

### ❌ DON'T: Update lastWrittenCurrentState after the binding

```typescript
const writeCurrentState = (contents) => {
    bindings.current_state = contents;
    writeCurrentStateCallback(contents);  // Too late!
};
```

### ❌ DON'T: Skip the write-back

```typescript
// This breaks Python → Svelte → Python reactivity
$effect(() => {
    // Just update local state, don't write back
    previewText = bindings.current_state;
});
```

### ✅ DO: Follow the pattern exactly

1. Track last written value in component state
2. Provide callback that updates tracker
3. In write function: call callback FIRST, then update binding
4. In effect: compare and write back only if values differ

## Future Considerations

When adding new synchronized state (like `current_state`, `baseline_state`), apply this same pattern:

```typescript
// For each synced traitlet:
let lastWrittenCurrentState = $state<string | undefined>(undefined);
let lastWrittenBaselineState = $state<string | undefined>(undefined);

// Provide callbacks:
const writeCurrentStateCallback = (contents) => {
    lastWrittenCurrentState = contents;
};
const writeBaselineStateCallback = (contents) => {
    lastWrittenBaselineState = contents;
};

// Use in binding handlers:
const writeCurrentState = (contents) => {
    writeCurrentStateCallback(contents);
    bindings.current_state = contents;
};

// Check in effects:
$effect(() => {
    if (lastWrittenCurrentState !== bindings.current_state) {
        writeCurrentState(bindings.current_state);
    }
});
```

This ensures all Python ↔ Svelte state stays reactive in both directions.

### Additional edge cases to plan for

- **Batch traitlet updates:** if you set multiple bindings in a single action, ensure **each traitlet has its own `lastWritten*` tracker and callback** before the shared helper writes to Python. Never reuse one tracker across bindings or only the first change will short-circuit the effect.
- **Large payloads (e.g., >1 MB configs):** serialization still occurs twice (Python → Svelte → Python). Keep the write-back but consider compressing/streaming payloads and throttling user-triggered writes to avoid UI jank.
- **Error handling:** if `writeCurrentState` can throw (network interruption, validation failure), surface the error to the component and reset `lastWritten*` so the effect retries once the underlying issue is resolved; otherwise you can get stuck with mismatched values.
- **Initialization defaults:** when the widget creates default data in Python, explicitly document in the component that the first `$effect` will fire and perform a write-back—avoid adding other `bindings.*` mutations inside the same mount frame or you may interleave trackers.
