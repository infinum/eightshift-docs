---
id: blocks
title: Blocks
---

## Computed fields results block

Once you create your valid program and populate output variables, you should provide a [thank you](/forms/features/success-redirect) page in the `General settings`.

You can add a new `computed fields results` block on the `thank you` page and provide condition options.

Under `variable name`, you can provide the name of any variable defined in the `output variables`.

Under `variable value`, you can define the value of the selected variable.

When the results block is used, you can `show` any block or multiple blocks when the `computed fields program` returns a value for the selected variable.

![Computed Fields screen](/img/forms/addon-computed-fields-results.webp)

:::note
Computed fields program result is passed to the thank you page using `GET` variable `es-data`.
The value passed using the `GET` variable is encoded and can be decoded using the `esFormsDecryptor` function.
:::
