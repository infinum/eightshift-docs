---
id: success-redirect
title: Success redirects
---
By default, when you submit a form, a success message is displayed on the same page. If you want to redirect the user to a different page, you can enable the _Success redirects_ feature. This option can be found in each integration's Form settings, or in Global settings.

Variation and template tags can enrich the "thank you" pages, and make them more personal.

## Template tags

The data entered by the user is sent to the "Thank you" page in the form of `GET` parameters. By default, no parameters are sent, to prevent sending any data that is not meant to be forwarded. In the Form settings the parameters that are passed through can be selected.

Chosen parameters can be used as _magic variables_ on the destination side. They are wrapped inside curly brackets, with the field name inside, e.g. `{name}`, `{email}`, ...
![Success redirects settings screen](/img/forms/success-redirects-settings.webp)

## Variations

Just like Template tags, variations are also passed to the "Thank you" page as a `GET` parameter. However, instead of using the entered data, they are pre-defined in the form settings, and can be used to add more granular control to the design and/or content of the "Thank you" page.
Template tags and variations are features that allow passing data to the success page. However, variations are predetermined in the form settings and are used to differentiate between various versions of the success page.

When enabled, a `es-variation` GET parameter is added to the "Thank you" page URL, with the value being the ID of the chosen variation.

:::note
The value must be encoded, which can be done with the `esFormsDecryptor` [helper](/forms/php/helpers#esformsdecryptor).
:::

### How to use a variation

To use variations, a list of variations needs to be added in the Global settings. Then, the variations can be chosen both in Form settings and through the Block editor.

### Block editor options

When selecting a form in the Block Editor, you will find multiple additional options to enrich your user experience.

**Options available in the Block Editor:**

* **Variant** - this option will override the variant set in the form settings. This way, you can use one form in multiple places with different variants.
* **Enrichment** - this option will add additional data to your success URL.
* * **Url** - this option will set a simple URL to pass.
* * **Url title** - this option will set a title for the URL if you want to populate a button.
* * **Media** - this option will allow you to add unlimited media files to the success page. For example if you want a user to download a file after submitting a form.
* * **Media item conditional field**s - just like template tags, you can use simple conditional tags here to show or hide media items based on the user input. E.g., `field_name=filed_value`. If you want to show a media item in any case, you can use the `all` value.
* * **Media item title** - just like the url title, this option will set a title for the media item.

![Success redirects screen](/img/forms/success-redirects.webp)

:::caution
At this point, you must manually create a success page block that can use variations options. We are working on a solution to automate this process.
:::

