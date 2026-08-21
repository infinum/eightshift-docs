---
id: wp-rocket
title: WP Rocket
---

## What is WP Rocket?

WP Rocket is a WordPress caching plugin that speeds up your site by caching static content, minifying CSS and JavaScript, and optimizing images.

## How to use

After setting up WP Rocket, head to the Global settings, open **Miscellaneous → Rocket Cache** and enable it. This will set up all the necessary options in the backend for everything to function properly.

:::note
Eightshift Forms doesn't configure WP Rocket or any other third-party tool. Enabling this feature only adds the necessary configurations in the backend for everything to function correctly.
:::

## Features affected by WP Rocket

WP Rocket affects the following features:

### Forms cache

Clearing the Forms [cache](cache) will also clear the WP Rocket cache. This applies to every cache clear — a single cache type, all of them, or the clear button in the block editor sidebar.

:::note
The whole domain cache is purged (`rocket_clean_domain()`), not just the page the form is on. This makes sure a cached page never keeps serving stale integration data after you pull fresh data from the API.
:::

If WP Rocket is not active on the site, enabling the feature has no effect — the purge is skipped.
