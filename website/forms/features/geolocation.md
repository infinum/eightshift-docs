---
id: geolocation
title: Geolocation
---

Geolocation is a feature that allows you to show different versions of the forms based on the user's geolocation location.

![Geolocation screen](/img/forms/geolocation.webp)

:::caution
Geolocation is never 100% accurate. It is based on the user's IP address, which can be spoofed or changed. We recommend using this feature as a way to provide a better user experience.
:::

## Where do you get the geolocation database from?

By default, our geolocation service uses the [GeoLite2 MaxMind ID database](https://www.maxmind.com/) to determine a user's location. However, our filters allow you to provide your database.

## Where do you get the country list from?

We use DataHub to list countries for the dropdown menu to select the country of usage.

[All releases are listed here](https://datahub.io/core/country-list) and our implementation is located on [this link](https://github.com/infinum/eightshift-forms/blob/develop/data/country/manifest.json).

With the default countries list, we have made a few groups:
* Europe
* European Union
* Ex Yugoslavia

but you can also provide your list by using our filters.

## How to configure geolocation?

If you want to set up a single form that can adapt to different versions based on the user's location, navigate to the form usage page (a page, post, custom post type, etc.) and select the "Geolocation" tab.

On this tab, you will see various settings that allow you to customize the form for different geographic regions.

![Geolocation block settings screen](/img/forms/geolocation-block-top.webp)

### Show only option

This feature will limit this form only to be shown to the users from the selected country.

![Geolocation only use screen](/img/forms/geolocation-only.webp)

### Advanced rules

This feature will allow you to create multiple geolocation rules using the Geolocation modal window.
Add a new rule, then a new form on the left, and provide one or multiple countries on the right.

![Geolocation modal screen](/img/forms/geolocation-modal.webp)

### Rule preview

This toggle is here to help you preview what you have configured so far. It will show you all the forms shown to the user based on the geolocation rules.

## Cloudflare

If you have Cloudflare turned on for your project, please make sure that you read the [Cloudflare documentation](cloudflare) to make sure that the geolocation feature works as expected.
