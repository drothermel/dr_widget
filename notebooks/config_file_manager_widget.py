import marimo

__generated_with = "0.17.7"
app = marimo.App(width="columns")

with app.setup:
    import json
    import time

    import marimo as mo

    from dr_widget import ConfigFileManager


@app.cell
def _():
    # TODOS
    # - make `config_file` always absolute
    # - make the config preview show what would be written right now including metadata
    # - easy copy + update method for the state
    return


@app.cell(hide_code=True)
def _():
    library_path = f"/Users/daniellerothermel/drotherm/data/config_library"
    library_path
    return (library_path,)


@app.cell
def _(library_path):
    widget = mo.ui.anywidget(ConfigFileManager(f"{library_path}/test_state-v1.json"))
    widget
    return (widget,)


@app.cell(hide_code=True)
def _():
    he_switch = mo.ui.switch(label="highlight_experimental", value=False)
    mo.vstack(
        [
            mo.md(
                "**Test Updating Config:** After loading a config, try toggling the field below."
            ),
            he_switch,
        ]
    )
    return (he_switch,)


@app.cell(hide_code=True)
def _(he_switch, widget):
    _curr_cfg = widget.current_data
    _init_cfg = widget.current_data
    _field = "highlight_experimental"
    current_value = (_curr_cfg or {})["selections"].get(_field, None)

    if current_value is None:
        mo.output.append(
            mo.md(
                f"_Load a config with `selections` and `{_field}` data before using the highlight toggle._"
            )
        )
    else:
        if he_switch.value != current_value:
            _curr_cfg['selections'][_field] = he_switch.value
            widget.current_state = json.dumps(_curr_cfg)
            mo.output.append(
                mo.vstack(
                    [
                        mo.md(
                            f"Updated current state for `{_field}` → `{he_switch.value}`",
                        ),
                        mo.md("**Baseline Config:**"),
                        _init_cfg,
                        mo.md("**Current Config:**"),
                        _curr_cfg,
                    ]
                )
            )
            print("(short 5sec sleep to read the message before reactive re-run)")
            time.sleep(5)
        else:
            mo.output.append(mo.md(f"No update needed, `{_field}`: `{he_switch.value}`"))
            mo.output.append(mo.vstack([mo.md("**Current Config:**"), _curr_cfg]))
    return


@app.cell(hide_code=True)
def _():
    mo.md("""
    ### Alt Initialization Examples

    ```python
    ConfigFileManager(config_dict={"harvest_window": 100}, version="exp_v1")
    ConfigFileManager(config_file="existing_config.json")
    ConfigFileManager(
        config_file="new_config.json",
        config_dict={"orchard": ["Cloudberry Basin"]},
        version="exp_v2"
    )
    ```

    Use `config_dict` for in-memory defaults, `config_file` to load an existing file, or both to create a new file on disk before the widget renders.
    """)
    return


@app.cell(hide_code=True)
def _(widget):
    mo.vstack([
        mo.md("**Useful accessors:**"),
        mo.hstack([mo.md("`widget.value`"), widget.value], justify="start"),
        mo.hstack([mo.md("`widget.current_data`"), widget.current_data], justify="start"),
        mo.hstack([mo.md('`widget.is_dirty`'), widget.is_dirty], justify="start"),
    ])
    return


@app.cell
def _():
    return


if __name__ == "__main__":
    app.run()
