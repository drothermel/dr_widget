import marimo

__generated_with = "0.17.6"
app = marimo.App(width="columns")


@app.cell
def _():
    import marimo as mo
    return (mo,)


@app.cell
def _(mo):
    from dr_widget import FileDropWidget

    widget = FileDropWidget(max_files=3)
    mo.vstack(
        [
            mo.md("### File Drop Demo"),
            mo.md("Drag files into the drop zone and inspect the synced metadata."),
            widget,
        ]
    )
    return (widget,)


@app.cell
def _(widget):
    widget.max_files
    return


@app.cell
def _(widget):
    widget.file_count
    return


@app.cell
def _(widget):
    widget.files
    return


@app.cell
def _():
    return


if __name__ == "__main__":
    app.run()
