import marimo

__generated_with = "0.17.6"
app = marimo.App(width="columns")

with app.setup:
    import marimo as mo
    from dr_widget import ConfigFileManager
    import json
    import time
    import inspect


@app.cell(hide_code=True)
def _(widget):
    if widget.value["selected_config"]:
        try:
            parsed = json.loads(widget.value["selected_config"])
            mo.output.append(
                mo.vstack(
                    [
                        mo.md("**Loaded config (parsed JSON):**"),
                        mo.json(parsed),
                    ]
                )
            )
        except json.JSONDecodeError:
            mo.output.append(
                mo.vstack(
                    [
                        mo.md("**Loaded config (raw string):**"),
                        mo.md(f"```json\n{widget.value['selected_config']}\n```"),
                    ]
                )
            )
    else:
        mo.output.append(mo.md("_No config loaded yet._"))
    return


@app.cell
def _():
    update_count = {"val": 0}
    update_count
    return (update_count,)


@app.cell
def _():
    widget = mo.ui.anywidget(ConfigFileManager())
    widget
    return (widget,)


@app.cell
def _(widget):
    (
        widget.value,
        json.loads(widget.value["selected_config"])
        if widget.value["selected_config"] != ""
        else "",
    )
    return


@app.cell
def _(widget):
    json.loads(widget.selected_config) if widget.selected_config else ""
    return


@app.cell
def _(widget):
    if widget.value["selected_config"]:
        sel = json.loads(widget.value["selected_config"])
        sel["selections"]["harvest_window_min"] = 1000000009
    else:
        sel = {}
    wval = widget.value
    new_sel = json.dumps(sel)
    new_value = {
        **{k: v for k, v in wval.items() if k != "selected_config"},
        "selected_config": new_sel,
    }
    wval, new_value
    return new_sel, new_value, sel


@app.cell
def _(new_sel, new_value, sel, update_count, widget):
    if "selections" in sel and update_count["val"] < 1:
        update_count["val"] += 1
        # The assignment triggers the update to the UI element and sets widget.widget.selected_configs
        widget.selected_config = new_sel
        # The _update call triggers the actual update of the widget.value
        widget._update(value=new_value)
        # This only changes the widget.widget (the internal anywidget), just like widget.selected_config = new_sel
        widget._args.on_change(change=new_value)
        print("After Update:")
        for _e in inspect.getmembers(widget):
            if _e[0] in ["value", "widget"]:
                print(_e[0])
                print(_e[1])
    else:
        print(f"Not updating: {update_count}")
    print(
        f"Exiting Fxn: {update_count} {type(widget.selected_config)} {widget.selected_config}"
    )
    for _e in inspect.getmembers(widget):
        if _e[0] in ["value", "widget"]:
            print(_e[0])
            print(_e[1])
    time.sleep(15)
    return


@app.cell
def _(widget):
    widget._args.functions[0].function
    return


@app.cell
def _():
    # Doesn't trigger any updates
    # widget._args.functions[0].function(widget._args.functions[0].arg_cls(content=new_value))
    return


@app.cell
def _(widget):
    widget._args.functions[0].arg_cls
    return


@app.cell
def _(widget):
    widget._update
    return


@app.cell
def _():
    return


@app.cell
def _():
    return


if __name__ == "__main__":
    app.run()
