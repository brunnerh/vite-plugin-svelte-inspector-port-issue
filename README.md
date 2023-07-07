# `vite-plugin-svelte` Inspector Port Issue Reproduction

Run scripts in two *separate* terminals:

```shell
npm run server
npm run vite
```

Open http://localhost:3000 in your browser.

Ctrl + Shift click an element on the page.

Observe `__open-in-editor` command being sent to `http-server` rather than `vite`.
