---
id: success-redirect
title: Success redirects
---
When you submit a form, it typically displays a success message on the same page. However, if you want to redirect the user to a different page, you can enable the success redirects feature. You can find this option in each integration's form settings or global settings.

Enabling success redirects allows you to enhance the user experience with variation and template tags.

## Template tags

To transfer data entered by the user in each field to the success page, template tags are utilized. They are used as a `GET` parameter added to the success URL. To access these tags, go to the form's settings, where you will find a complete list of available template tags that can be used as a magic variable.

All the tags are enclosed in curly brackets, and the value is the name of the field specified in your form, such as `{name}`, `{email}`, etc.
![Success redirects settings screen](/img/forms/success-redirects-settings.webp)

## Variations

Template tags and variations are features that allow passing data to the success page. However, variations are predetermined in the form settings and are used to differentiate between various versions of the success page.

The variation name is added as a `GET` parameter to the success URL named `es-variation`, with the predefined variation set in the form settings or block editor to utilize variations. The variation value is encoded, and to access it, you must use the `esFormsDecryptor` [helper](/forms/php/helpers#esformsdecryptor) in your project.

### How to use a variation

To use variations, you must first provide a list in the global settings. Once this is done, you can utilize the variation in both form settings and the block editor.

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

