# Playwright verification (manual): run `marimo run notebooks/runtime_hello_widget.py
# --headless --no-token -p 2718`, drive with Playwright (channel="chrome"), assert
# dr-hello upgrades, slider changes update the name attribute in place (no
# disconnect/reconnect), and React re-renders the greeting text. Also assert
# dr-props-panel renders data-props items and updates when __drRuntime.data.set
# is called for the data-ref id.

import marimo

__generated_with = "0.23.2"
app = marimo.App(width="medium")

with app.setup:
    import marimo as mo

    from dr_widget.inline import ActiveHtml, load_dr_runtime

    NAMES = ["Ada", "Grace", "Alan", "Katherine", "Tim", "World"]


@app.cell(hide_code=True)
def _():
    load_dr_runtime()
    return


@app.cell(hide_code=True)
def _():
    name_index = mo.ui.slider(
        0,
        len(NAMES) - 1,
        value=0,
        label="name index",
        show_value=True,
    )
    name_index
    return (name_index,)


@app.cell(hide_code=True)
def _(name_index):
    import json

    name = NAMES[name_index.value]
    DATA_REF = "demo-props-panel"
    small_props = json.dumps({"title": "Small data-props demo", "items": [name]})
    channel_seed = json.dumps(
        {
            "title": "Large data-ref demo",
            "items": ["alpha", "beta", "gamma", "delta"],
        }
    )

    mo.vstack(
        [
            mo.md(f"Selected name: **{name}**"),
            mo.Html(f'<dr-hello name="{name}"></dr-hello>'),
            mo.Html(f"<dr-props-panel data-props='{small_props}'></dr-props-panel>"),
            mo.Html(f'<dr-props-panel data-ref="{DATA_REF}"></dr-props-panel>'),
            ActiveHtml(
                html=(
                    "<script>"
                    f"window.__drRuntime?.data.set({json.dumps(DATA_REF)}, {channel_seed});"
                    "</script>"
                )
            ),
        ]
    )
    return


if __name__ == "__main__":
    app.run()
