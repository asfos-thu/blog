# GitHub Pages deployment

The blog is published at <https://asfos-thu.github.io/blog/>.

## One-time repository setting

In **Settings → Pages → Build and deployment**, set **Source** to
**GitHub Actions**. Do not select **Deploy from a branch**: that runs Jekyll
against the Astro source files instead of publishing the generated site.

## Publishing

Every push to `main` runs **Deploy to GitHub Pages** in
`.github/workflows/deploy.yml`. It installs the locked dependencies with the
pnpm version declared in `package.json`, uses Node.js 22, runs `pnpm build`
(Astro plus the Pagefind search index), and uploads only `dist/` to Pages.
The workflow can also be started manually from the Actions tab.

The deployment workflow runs `pnpm check` and the pinned Biome checks before
building. **Build and Check** and **Code quality** also run on pull requests.
All workflows use Node.js 22 and/or the same Biome version as `package.json`.

## Paths and local checks

`astro.config.mjs` sets `site` to `https://asfos-thu.github.io/` and `base` to
`/blog/`. Internal navigation uses the existing `url()` helper; do not add
`/blog` to `src/config.ts` navigation entries yourself, or it will be added twice.
For links written directly in Markdown/HTML, include `/blog/` in root-relative
URLs, or use a relative URL that resolves from the article's published route.

```sh
pnpm install --frozen-lockfile
pnpm build
pnpm preview
```

Open the preview's `/blog/` path. With no published articles, the homepage
shows an empty state and hides search and pagination. Archive and About have
been removed. Check the homepage, `/blog/rss.xml`, and `/blog/sitemap-index.xml`.
After adding an article to `src/content/posts/`, also check the article and
search results. Article metadata needs at least `title` and `published`.
