# Caique de Castro Personal Website

[www.caiquecastro.com](https://www.caiquecastro.com/)

## Local development

From the repository root, initialize the PaperMod theme and start the Hugo preview server with Docker Compose.

```sh
git submodule update --init themes/PaperMod
docker compose up
```

Open [localhost:1313](http://localhost:1313) to preview the site. The illustrated notebook uses site layouts in `layouts/`, styles and scripts in `assets/notebook/`, and local illustrations and fonts in `static/notebook/`. PaperMod provides the feed and social metadata templates.

To check the build locally, use the Hugo version pinned in [netlify.toml](netlify.toml) and run `hugo --gc` from the repository root. The generated site is written to `public/`. When upgrading Hugo, update the version in both [netlify.toml](netlify.toml) and [docker-compose.yml](docker-compose.yml).

## Try the WebMCP example

A reader can ask a browser assistant “Which post explains why Yarn disappeared inside a Docker container?” The `search_notebook` tool searches the published blog posts using the keywords the assistant supplies. It loads Hugo's JSON index on the first search.

To try it locally, enable `chrome://flags/#enable-webmcp-testing` in Chrome, relaunch, and open any page of the local preview. Run this in the DevTools console.

```js
const tools = await document.modelContext.getTools();
const search = tools.find((tool) => tool.name === "search_notebook");
await document.modelContext.executeTool(search, { query: "Yarn mount" });
```

The first result should be “Dockerized commands, part 2”, with an excerpt and a link. Try `quantum entanglement` to see an empty result list. See [Chrome's WebMCP guide](https://developer.chrome.com/docs/ai/webmcp) for browser setup.
