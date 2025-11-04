import marimo

__generated_with = "0.17.6"
app = marimo.App(width="columns")

with app.setup:
    import marimo as mo
    from dr_widget import FileDropWidget
    import json


@app.cell(hide_code=True)
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


@app.cell
def _(widget):
    sel = json.loads(widget.selected_config)
    sel["selections"]["harvest_window_min"] = 10000000000000
    # widget.selected_config = json.dumps(sel)
    return


@app.cell
def _():
    return


@app.cell(hide_code=True)
def _():
    slightly_modified_example = json.loads("""
    {
      "saved_at": "2025-11-04T00:25:58.747765+00:00",
      "selections": {
        "active_panel": [
          "summary"
        ],
        "harvest_window_min": 1,
        "highlight_experimental": false,
        "notes": "Monitor harvest cadence",
        "orchard": [
          "Cloudberry Basin",
          "THE BESTEST ORCHARD EVER!!!!!"
        ],
        "orchard_query": "Cloudberry",
        "region": [
          "Emerald Belt"
        ],
        "show_outliers": true,
        "view_mode": [
          "Overview"
        ],
        "yield_target": 40.0
      },
      "version": "stores_nb_state-init-v0"
    }
    """)
    slightly_modified_example
    return


if __name__ == "__main__":
    app.run()
