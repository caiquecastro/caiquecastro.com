# Caique de Castro Personal Website

[www.caiquecastro.com](https://www.caiquecastro.com/)

## Local development

From the repository root, initialize the PaperMod theme and start the Hugo preview server with Docker Compose.

```sh
git submodule update --init themes/PaperMod
docker compose up
```

Open [localhost:1313](http://localhost:1313) to preview the site. The illustrated notebook uses site layouts in `layouts/`, styles and scripts in `assets/notebook/`, and local illustrations and fonts in `static/notebook/`. PaperMod provides the feed, JSON index, and social metadata templates.

To check the build locally, use the Hugo version pinned in [netlify.toml](netlify.toml) and run `hugo --gc` from the repository root. The generated site is written to `public/`. When upgrading Hugo, update the version in both [netlify.toml](netlify.toml) and [docker-compose.yml](docker-compose.yml).
