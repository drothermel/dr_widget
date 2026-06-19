# dr_widget agent notes

Widget-specific context for agents working in this repo. Build, packaging, and
frontend workflow live in [docs/development.md](docs/development.md).

## Initialization Patterns

Use these snippets when demonstrating or testing the Config File Manager widget:

```python
ConfigFileManager()  # empty widget

ConfigFileManager(
    config_dict={"orchard": ["Cloudberry Basin"]},
    version="exp_v1",
)

ConfigFileManager(config_file="/abs/path/to/existing.json")

ConfigFileManager(
    config_file="/tmp/new.json",
    config_dict={"selections": {"foo": True}},
    version="v2",
)
```

- `config_dict` populates `current_state`, leaves `baseline_state` empty (dirty until saved).
- `config_file` loads metadata + user data; missing files raise `FileNotFoundError`.
- `config_file` + `config_dict` writes the wrapped `{version,saved_at,data}` file then loads it.

## AnyWidget Traitlet Contracts

Traitlets in `ConfigFileManager` (`src/dr_widget/bundled/config_file_manager/__init__.py`):

| Trait | Notes |
| --- | --- |
| `current_state` | JSON string of user data **only** (no metadata). |
| `baseline_state` | JSON string mirroring last saved state; compare to detect dirty UI. |
| `version` | Version metadata shown in badges + saves. |
| `config_file` | Path to backing file (may be relative today). |
| `config_file_display` | UI-friendly label derived from `config_file`. |
| `files` | JSON array of `{ name, size, type }` describing uploads. |
| `file_count` | Int derived from `files.length`; do not mutate in Svelte manually. |
| `error` | Short user-facing error message cleared on recovery. |

Helper properties (`current_data`, `baseline_data`, `is_dirty`) parse the JSON strings for notebooks—prefer those in docs or demos.
