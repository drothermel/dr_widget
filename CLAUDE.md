---
description: Use Bun instead of Node.js, npm, pnpm, or vite.
globs: "*.ts, *.tsx, *.html, *.css, *.js, *.jsx, package.json"
alwaysApply: false
---

Default to using Bun instead of Node.js.

- Use `bun <file>` instead of `node <file>` or `ts-node <file>`
- Use `bun test` instead of `jest` or `vitest`
- Use `bun build <file.html|file.ts|file.css>` instead of `webpack` or `esbuild`
- Use `bun install` instead of `npm install` or `yarn install` or `pnpm install`
- Use `bun run <script>` instead of `npm run <script>` or `yarn run <script>` or `pnpm run <script>`
- Bun automatically loads .env, so don't use dotenv.

## APIs

- `Bun.serve()` supports WebSockets, HTTPS, and routes. Don't use `express`.
- `bun:sqlite` for SQLite. Don't use `better-sqlite3`.
- `Bun.redis` for Redis. Don't use `ioredis`.
- `Bun.sql` for Postgres. Don't use `pg` or `postgres.js`.
- `WebSocket` is built-in. Don't use `ws`.
- Prefer `Bun.file` over `node:fs`'s readFile/writeFile
- Bun.$`ls` instead of execa.

## Testing

Use `bun test` to run tests.

```ts#index.test.ts
import { test, expect } from "bun:test";

test("hello world", () => {
  expect(1).toBe(1);
});
```

## Frontend

Use HTML imports with `Bun.serve()`. Don't use `vite`. HTML imports fully support React, CSS, Tailwind.

Server:

```ts#index.ts
import index from "./index.html"

Bun.serve({
  routes: {
    "/": index,
    "/api/users/:id": {
      GET: (req) => {
        return new Response(JSON.stringify({ id: req.params.id }));
      },
    },
  },
  // optional websocket support
  websocket: {
    open: (ws) => {
      ws.send("Hello, world!");
    },
    message: (ws, message) => {
      ws.send(message);
    },
    close: (ws) => {
      // handle close
    }
  },
  development: {
    hmr: true,
    console: true,
  }
})
```

HTML files can import .tsx, .jsx or .js files directly and Bun's bundler will transpile & bundle automatically. `<link>` tags can point to stylesheets and Bun's CSS bundler will bundle.

```html#index.html
<html>
  <body>
    <h1>Hello, world!</h1>
    <script type="module" src="./frontend.tsx"></script>
  </body>
</html>
```

With the following `frontend.tsx`:

```tsx#frontend.tsx
import React from "react";

// import .css files directly and it works
import './index.css';

import { createRoot } from "react-dom/client";

const root = createRoot(document.body);

export default function Frontend() {
  return <h1>Hello, world!</h1>;
}

root.render(<Frontend />);
```

Then, run index.ts

```sh
bun --hot ./index.ts
```

For more information, read the Bun API docs in `node_modules/bun-types/docs/**.md`.

## Initialization Patterns

Use these snippets when demonstrating or testing the Config File Manager widget:

```python
ConfigFileManager()  # empty widget

ConfigFileManager(
    config_dict={"orchard": ["Cloudberry Basin"]},
    version="exp_v1",
)

ConfigFileManager(config_file="/abs/path/to/existing.json")

ConfigFileManager(
    config_file="/tmp/new.json",
    config_dict={"selections": {"foo": True}},
    version="v2",
)
```

- `config_dict` populates `current_state`, leaves `baseline_state` empty (dirty until saved).
- `config_file` loads metadata + user data; missing files raise `FileNotFoundError`.
- `config_file` + `config_dict` writes the wrapped `{version,saved_at,data}` file then loads it.

## AnyWidget Traitlet Contracts

Traitlets in `ConfigFileManager` (`src/dr_widget/widgets/config_file_manager/__init__.py`):

| Trait | Notes |
| --- | --- |
| `current_state` | JSON string of user data **only** (no metadata). |
| `baseline_state` | JSON string mirroring last saved state; compare to detect dirty UI. |
| `version` | Version metadata shown in badges + saves. |
| `config_file` | Path to backing file (may be relative today). |
| `config_file_display` | UI-friendly label derived from `config_file`. |
| `files` | JSON array of `{ name, size, type }` describing uploads. |
| `file_count` | Int derived from `files.length`; do not mutate in Svelte manually. |
| `error` | Short user-facing error message cleared on recovery. |

Helper properties (`current_data`, `baseline_data`, `is_dirty`) parse the JSON strings for notebooks—prefer those in docs or demos.
