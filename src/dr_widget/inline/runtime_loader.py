from __future__ import annotations

from pathlib import Path

from dr_widget.inline.active_html import ActiveHtml

_RUNTIME_JS_PATH = (
    Path(__file__).resolve().parent.parent / "bundled/runtime/static/runtime.js"
)
_RUNTIME_GUARD_START = "(function(){if(window.__drRuntimeLoaded)return;window.__drRuntimeLoaded=true;\n"
_RUNTIME_GUARD_END = "\n})();"


def _read_runtime_bundle() -> str:
    if not _RUNTIME_JS_PATH.is_file():
        raise FileNotFoundError(
            f"Runtime bundle not found at {_RUNTIME_JS_PATH}. "
            "Run `bun run build:runtime` first."
        )

    runtime_js = _RUNTIME_JS_PATH.read_text(encoding="utf-8")
    if "</script>" in runtime_js.lower():
        msg = "Runtime bundle contains '</script>' and cannot be inlined safely."
        raise ValueError(msg)
    return runtime_js


def load_dr_runtime() -> ActiveHtml:
    """Load the dr_widget React runtime once per page (idempotent).

    Returns an ``ActiveHtml`` widget whose inline script registers ``<dr-*>``
    custom elements in the window-global registry. Safe to call multiple times
    per notebook — the outer guard and ``defineDrElement`` both no-op on repeat.
    """
    runtime_js = _read_runtime_bundle()
    script = f"{_RUNTIME_GUARD_START}{runtime_js}{_RUNTIME_GUARD_END}"
    return ActiveHtml(html=f"<script>{script}</script>")


__all__ = ["load_dr_runtime"]
