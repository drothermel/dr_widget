import marimo

__generated_with = "0.17.7"
app = marimo.App(width="columns")

with app.setup:
    import json
    import time
    from typing import Any

    import marimo as mo
    from pydantic import BaseModel, computed_field, field_validator, model_validator

    from dr_widget import ConfigFileManager

    # Hardcode for testing notebook
    library_path = "/Users/daniellerothermel/drotherm/data/config_library"


@app.cell(hide_code=True)
def _():
    widget = mo.ui.anywidget(ConfigFileManager(f"{library_path}/test_state-v0.json"))
    widget
    return (widget,)


@app.cell(hide_code=True)
def _(widget):
    mo.vstack(
        [
            mo.md("**Useful accessors:**"),
            mo.hstack([mo.md("`widget.value`"), widget.value], justify="start"),
            mo.hstack(
                [mo.md("`widget.current_data`"), widget.current_data], justify="start"
            ),
            mo.hstack(
                [mo.md("`widget.current_state`"), widget.current_state], justify="start"
            ),
            mo.hstack([mo.md("`widget.is_dirty`"), widget.is_dirty], justify="start"),
        ]
    )
    return


@app.cell(column=1, hide_code=True)
def _():
    mo.md(r"""
    ## Config Updating Example
    """)
    return


@app.cell(hide_code=True)
def _(UIField):
    he_target_path = ["selections", "highlight_experimental"]
    he_switch_cfg = UIField(
        field_path=he_target_path,
        init_value=False,
    )
    he_switch = make_switch(**he_switch_cfg.model_dump())
    mo.md("Make the switch in a different cell than you use it.")
    return he_switch, he_switch_cfg


@app.cell(hide_code=True)
def _(he_switch, he_switch_cfg):
    mo.vstack(
        [
            mo.md(
                "**Test Updating Config:** After loading a config, a switch will appear below that you can try toggling."
            ),
            he_switch,
            mo.md("---"),
            mo.accordion({"**Switch UIField Config** *(accordion)*": he_switch_cfg}),
        ]
    )
    return


@app.cell(hide_code=True)
def _(
    deep_get,
    deep_set,
    he_switch,
    he_switch_cfg,
    should_update_elem,
    widget,
):
    if he_switch is not None:
        should_update, index_key_list, new_val = should_update_elem(
            field_path=he_switch_cfg.field_path,
            field_target_value=he_switch.value,
            state_dict=widget.current_data,
            strict=True,  # True =>  throw if path is invalid in data
        )
        mo.output.append(mo.vstack([
            mo.hstack([
                mo.md("**Should update**"),
                should_update,
            ], justify="start", align="center"),
            mo.hstack([
                mo.md("**Index key list**"),
                index_key_list, 
            ], justify="start", align="center"),
            mo.hstack([
                mo.md("**New Val**"),
                new_val,
            ], justify="start", align="center"),
            mo.hstack([
                mo.md("**Curr Val**"),
                deep_get(widget.current_data, index_key_list),
            ], justify="start", align="center"),
        ]))
        if should_update:
            new_data = deep_set(widget.current_data, index_key_list, new_val)
            widget.current_state = json.dumps(new_data)
            mo.output.append(mo.vstack([
                mo.md("**Updated the config, new data**"),
                new_data,
            ]))
        else:
            print("No update needed")
        mo.output.append(
            mo.vstack(
                [
                    mo.md("**Current Config:**"),
                    widget.current_data,
                ]
            )
        )
        print("Sleeping for 5s to see")
        time.sleep(5)
    else:
        print("No switch yet, load a config to see what happens")
    return


@app.cell(column=2, hide_code=True)
def _():
    mo.md(r"""
    ## UI Update Helpers
    """)
    return


@app.cell
def _():
    def deep_get(source_dict, keys, strict=True):
        sd = source_dict
        for key in keys:
            if key not in sd:
                if strict:
                    raise KeyError(f"Key '{key}' not found in dictionary")
                else:
                    return None
            sd = sd[key]
        return sd

    def deep_set(target_dict, keys, value):
        """
        Return a new dict with `value` set at the path given by `keys`,
        creating intermediate dicts as needed.

        - `target_dict`: original dictionary (not mutated)
        - `keys`: iterable of keys representing the path
        - `value`: value to set
        """
        if not keys:
            raise ValueError("keys must be a non-empty sequence")

        # Ensure we can index into keys multiple times
        keys = list(keys)

        def _set(d, ks):
            k = ks[0]
            # shallow copy so we don't mutate the original at this level
            new_d = dict(d)

            if len(ks) == 1:
                # base case: set the final key
                new_d[k] = value
            else:
                # recursive case: go down one level
                child = d.get(k)
                if not isinstance(child, dict):
                    # if it's missing or not a dict, replace with fresh dict
                    child = {}
                new_d[k] = _set(child, ks[1:])

            return new_d

        return _set(target_dict, keys)
    return deep_get, deep_set


@app.cell
def _(deep_get):
    class UIField(BaseModel):
        field_path: list[str]

        example_cfg: dict[str, Any] | None = None
        label: str | None = None
        init_value: Any | None = None

        @computed_field
        @property
        def field_name(self) -> str:
            return self.field_path[-1]

        @field_validator("field_path", mode="before")
        @classmethod
        def normalize_field_path(cls, field_path: Any) -> str | list | None:
            if not isinstance(field_path, str | list):
                raise ValueError(
                    f"field_path must be str or list, curr type: {type(field_path)}"
                )
            if not field_path:
                raise ValueError(
                    f"field_path must be set, got: type {type(field_path)}, value {field_path}"
                )
            if isinstance(field_path, str):
                fp = field_path.strip()
                if "." in fp:
                    fp = fp.split(".")
                field_path = fp
            if isinstance(field_path, list):
                fp = [p.strip() for p in field_path]
                field_path = [p for p in fp if p != ""]
            else:
                field_path = [field_path]
            if not field_path:
                raise ValueError(
                    f"after normalizing field path, empty: type {type(field_path)}, value {field_path}"
                )
            return field_path

        @field_validator("example_cfg", mode="before")
        @classmethod
        def normalize_example_cfg(cls, example_cfg: Any) -> dict[str, Any] | None:
            if not isinstance(example_cfg, dict | str):
                raise ValueError(
                    f"example_cfg must be dict or str, curr type: {type(example_cfg)}"
                )
            if example_cfg and isinstance(example_cfg, str):
                example_cfg = json.loads(example_cfg)
            if not example_cfg:
                raise ValueError(
                    f"after normalizing example_cfg, empty: type {type(example_cfg)}, value {example_cfg}"
                )
            return example_cfg

        @model_validator(mode="after")
        def finalize_model(self) -> "UIField":
            # Set label to "" if you don't want one
            if self.label is None:
                self.label = self.field_name.replace("_", " ").title()

            # Ensure the example cfg contains the field path if provided
            if self.example_cfg is not None:
                deep_get(self.example_cfg, self.field_path, strict=True)
            return self

        def _display_(self):
            return self.model_dump()
    return (UIField,)


@app.function
def make_switch(**kwargs) -> mo.Html:
    return mo.ui.switch(
        **{k: v for k, v in kwargs.items() if k in ["label", "value"] if v is not None}
    )


@app.cell
def _(deep_get):
    def should_update_elem(
        field_path: list[str],
        field_target_value: Any,
        state_dict: dict[str, Any],
        strict=False,  # if false, mark missing to add
    ) -> tuple[bool, list[str] | None, Any]:
        dict_val = deep_get(state_dict, field_path, strict=False)
        if dict_val is None:
            if strict:
                raise ValueError(f"Expected state dict to have {field_path}")
            should_update = True
        else:
            should_update = dict_val != field_target_value
        return should_update, field_path, field_target_value
    return (should_update_elem,)


if __name__ == "__main__":
    app.run()
