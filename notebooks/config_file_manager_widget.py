import marimo

__generated_with = "0.17.7"
app = marimo.App(width="columns")

with app.setup:
    import json
    import time

    import marimo as mo

    from dr_widget import ConfigFileManager


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
    _curr_cfg = json.loads(widget.selected_config) if widget.selected_config else {}
    _init_cfg = json.loads(widget.selected_config) if widget.selected_config else {}
    _field = "highlight_experimental"
    if _curr_cfg and (he_switch.value != _curr_cfg["selections"][_field]):
        _curr_cfg["selections"][_field] = he_switch.value
        widget.selected_config = json.dumps(_curr_cfg)
        mo.output.append(
            mo.vstack(
                [
                    mo.md(
                        f"Updated selected config based on switch value for `{_field}`: `{he_switch.value}`",
                    ),
                    mo.md("**Initial Config:**"),
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
    widget = mo.ui.anywidget(ConfigFileManager())
    widget
    return (widget,)


if __name__ == "__main__":
    app.run()
