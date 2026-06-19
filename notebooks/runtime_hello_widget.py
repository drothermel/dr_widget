# Playwright verification (manual): run `marimo run notebooks/runtime_hello_widget.py
# --headless --no-token -p 2718`, drive with Playwright (channel="chrome"), assert
# dr-hello upgrades, slider changes update the name attribute in place (no
# disconnect/reconnect), and React re-renders the greeting text.

import marimo

__generated_with = "0.23.2"
app = marimo.App(width="medium")

with app.setup:
    import marimo as mo

    from dr_widget.inline import load_dr_runtime

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
    name = NAMES[name_index.value]
    mo.vstack(
        [
            mo.md(f"Selected name: **{name}**"),
            mo.Html(f'<dr-hello name="{name}"></dr-hello>'),
        ]
    )
    return


if __name__ == "__main__":
    app.run()
