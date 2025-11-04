import marimo

__generated_with = "0.17.6"
app = marimo.App(width="columns")

with app.setup:
    import marimo as mo
    from dr_widget import FileDropWidget
    import json


@app.cell
def _():
    widget = mo.ui.anywidget(FileDropWidget(max_files=1))
    widget
    return (widget,)


@app.cell(hide_code=True)
def _(widget):
    if widget.selected_config:
        try:
            parsed = json.loads(widget.selected_config)
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
                        mo.md(f"```json\n{widget.selected_config}\n```"),
                    ]
                )
            )
    else:
        mo.output.append(mo.md("_No config loaded yet._"))
    return


if __name__ == "__main__":
    app.run()
