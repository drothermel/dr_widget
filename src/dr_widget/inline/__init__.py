"""Inline anywidgets: pure-Python, _esm as string literal, no JS build step."""

from dr_widget.inline.active_html import ActiveHtml
from dr_widget.inline.runtime_loader import load_dr_runtime

__all__ = ["ActiveHtml", "load_dr_runtime"]
