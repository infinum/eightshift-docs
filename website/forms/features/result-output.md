---
id: result-output
title: Result output
---

_Result output_ allows displaying user-defined blocks after the form is submitted successfully.

![Result output](/img/forms/result-output-1.webp)

## Configuration

Follow these steps:
1. Add a _Result output item_ and keep its name in mind. Result outputs are found in the WordPress admin sidebar.
2. Create a form
3. Add the form to the desired page
4. Add the _Result output_ block to the same page
5. In the _Result output_ block options select the form and the Result output block you created in step 1
6. (Optional) Disable the global messages in the form settings

Once the form is submitted the select block will be displayed.

![Result output settings](/img/forms/result-output-2.webp)

## _Result output item_ block

Alongside the _Result output_ block you will find the _Result output item_ block. It allows changing parts of the result output or showing things like custom messages, based on user input.

![Result output item block](/img/forms/result-output-3.webp)

:::caution
The block will not show anything by default. Some configuration by developers is required. For more details, check the chapter on [custom filters](/forms/php/filters/block/form/result-output-items).
:::

To configure the block, add it inside a _Result output_ block, and provide a name and a value that will match the data provided by the filter. Once the form is submitted and the condition matches, the selected block will be shown.

:::tip
Works great with the [Computed Fields Add-on](/forms/addons/premium/computed-fields/intro).
:::

## _Result output part_ shortcode

Similar to the _Result output item_ block, the shortcode version allows smaller, inline varations, e.g. simple pieces of text.

![Result output part shortcode](/img/forms/result-output-4.webp)

:::caution
The shortcode will not show anything by default. Some configuration by developers is required. For more details, check the chapter on [custom filters](/forms/php/filters/block/form/result-output-items).
:::

To configure the shortocde, add it somewhere inside the _Result output_ block. Provide a `name` and set the `default text`. The _default text_ will be shown after form submission if the _name_ matches the one in the configuration.

:::tip
Works great with the [Computed Fields Add-on](/forms/addons/premium/computed-fields/intro).
:::
