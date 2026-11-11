![image](https://repository-images.githubusercontent.com/236449101/e89c31b2-a180-4258-9f67-608b4050c484)

[![GitHub tag](https://img.shields.io/github/tag/infinum/eightshift-docs.svg?style=for-the-badge)](https://github.com/infinum/eightshift-docs)
[![GitHub stars](https://img.shields.io/github/stars/infinum/eightshift-docs.svg?style=for-the-badge&label=Stars)](https://github.com/infinum/eightshift-docs/)
[![license](https://img.shields.io/github/license/infinum/eightshift-docs.svg?style=for-the-badge)](https://github.com/infinum/eightshift-docs)

# Eightshift Docs

A documentation website for Eightshift open source projects.

Visit:

[https://eightshift.com/](https://eightshift.com/).

The site uses [Astro](https://astro.build/) and [Starlight](https://starlight.astro.build/) with static output and Pagefind search.

## Local development

Use Node.js 24 LTS and Bun 1.4.4 (also used by CI).

```sh
cd website
bun install --frozen-lockfile
bun start
```

To build and preview the production site:

```sh
bun run build
bun run serve
```

The build writes to `website/build`. Search is generated during the production build, so use the production preview to validate search results.

## Content

- Documentation lives in `website/src/content/docs`, grouped under `docs`, `forms`, and `components` to preserve the public URL prefixes.
- Blog posts live in `website/src/content/blog`. Their existing slugs and metadata determine public blog URLs.
- Every documentation page needs a frontmatter `title`. Use MDX when importing components; use ordinary Markdown for prose and code examples.
- `website/sidebar.mjs` defines the documentation navigation and its ordering. `website/src/sidebar-middleware.ts` shows only the current DevKit, Forms, or Components section; other pages have no documentation sidebar. Navbar links switch sections, while search remains site-wide.
- Interactive demos are imported React islands. Keep hooks, callbacks, render functions, and interactive children inside the React module; do not pass functions from MDX across a `client:*` boundary.
- Public images, downloads, domain configuration, and verification files remain in `website/static` and retain their URLs.

Use Starlight's default components and styles for documentation. Tailwind CSS 4 utilities are available in custom Astro pages and React components through `website/src/styles/global.css`, using the Vite plugin and Starlight's Tailwind integration. The stylesheet scans `website/src`; use complete literal class names so utilities can be discovered. Standalone pages that do not use `StarlightPage` must import this stylesheet themselves.

The Tailwind `font-sans` token uses Inter Variable, and `dark:` follows Starlight's theme switch. Full Tailwind Preflight is intentionally omitted to preserve the documentation layout. Eightshift demos retain their separate `es:` utilities and scoped reset; do not replace them with site utilities. Demo-specific styles should stay scoped so they do not affect the site shell.

## Starlight plugins

The plugin configuration lives in `website/astro.config.mjs`:

- **UI Tweaks** owns the three primary navbar links and theme toggle. `website/src/components/NavbarLinks.astro` wraps its links and adds Blog and Showcase in a More dropdown. On mobile, links appear in Starlight's menu. It replaces the former custom header; its links do not provide the old custom active-section underline.
- **Icons** supplies the icon-aware sublist used by `website/src/components/Sidebar.astro`. The custom renderer displays a static section heading and lifts its child groups up one level; the plugin's automatic sidebar override is disabled. Sidebar icons use `attrs: { 'data-icon': 'i-mdi-file-document-outline' }`. UnoCSS runs only its icon preset, alongside Tailwind; add required icon classes to its safelist. Code-block icon fetching is not enabled.
- **MD TXT** emits documentation exports such as `/docs/welcome.md.txt`. React demos are not interactive in these exports, and the separate blog/custom pages are not exported. Absolute-link rewriting and automatic alternate links are disabled: the latter would advertise nonexistent exports on custom pages.
- **SEO** adds metadata and structured data. Documentation frontmatter accepts `seo` through the extended schema. Build audits are disabled initially, pending a separate metadata-cleanup pass.

## Analytics and sharing metadata

Google Tag Manager (`GTM-P5GG5DH`) loads immediately using the standard head bootstrap. Consent is managed inside the GTM container; this site does not add a separate consent interface. The installed Starlight version has no Body override: its first body component is `SkipLink`, so our override inserts the noscript iframe before wrapping the default accessible skip link. Recheck this placement after Starlight upgrades. Container publication, consent rules, and actual GA4 event delivery must be verified separately in GTM/GA4.

The default social preview is `website/static/img/social-preview.png` (1200 × 630), generated from the local Eightshift SVG logo with the red brand palette. Both the head metadata and SEO plugin use it.

Descriptions explicitly supplied by content authors are preserved. Missing descriptions are derived from Markdown prose in the route middleware, excluding code, imports, JSX tags, headings, and admonition markers. For component-only pages and the default 404, the Astro middleware uses the first meaningful rendered paragraph in the main content, excluding code and aside content, and fills description/Open Graph/Twitter metadata during the static build. Add an explicit frontmatter description when editorial wording is preferable. Existing placeholder descriptions such as `docs-source` are intentionally preserved and need a separate editorial cleanup.

## Deployment

GitHub Actions builds pull requests and pushes to `develop`. Pushes to `main`, including Markdown-only changes, build and publish `website/build` to the `gh-pages` branch using the existing `GH_PAGES_DEPLOY` SSH deploy key. The Pages source remains the `gh-pages` branch, served at `https://eightshift.com` with the existing `CNAME`. No server runtime is required.

Deployment is performed by the workflow, not a local deploy command. `bun run build` and `bun run serve` never publish the site.

## Who do I talk to?

If you have any questions or problems, please [open an issue](https://github.com/infinum/eightshift-docs/issues) on github and we will do our best to give you a timely answer.

## Maintainers

Eightshift Docs is maintained and sponsored by
[Eightshift](https://eightshift.com) and [Infinum](https://infinum.com).

## License

Eightshift Docs [Eightshift](https://eightshift.com) and [Infinum](https://infinum.com). It is free software, and may be redistributed under the terms specified in the LICENSE file.
