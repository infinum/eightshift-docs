---
id: result-output
title: Result output
---

Result output is a feature that allows you to display and block or multiple blocks when the user successfully submits the form. This is useful for forms that require users to perform calculations or you want to display a message to the user after they submit the form.

![Result output](/img/forms/result-output-1.webp)

## Configuration

To configure the result output you must follow a few steps:

1. Add a result output item that you will reference later. Result outputs list can be found in the WordPress admin sidebar mene.

2. Create a new form.

3. Open a page where you want to use this form and add it using `forms` block.

4. On the same page you need to add a `result output` block.

5. Configure `result output` block by providing the form ID and the result output ID in the block settings.

6. It is useful to disable global message on form success for better user experience. This option can be found in the form settings.

7. Once the user has submitted the form the result output will be displayed.

![Result output settings](/img/forms/result-output-2.webp)

## Result output item block

In the result output editor you can find another block called `result output item`. This is useful if you want ot change bigger chunks of content based on the user input. Also this block can be used to show personalized message or blocks to the user based on the their input.

![Result output item block](/img/forms/result-output-3.webp)

:::caution
This block will not do anything by default as it requires some code configuration provided by the developer. To provide data used in this block you can use [custom filters](/forms/php/filters/block/form/result-output-items).
:::

To configure this block you need to add it to you result output builder and provide a name and value that will match the data provided by the filter. Once the use submits the form the corresponding block will be displayed if the condition is met.

:::tip
This block goes hand in hand with the [premium Computed Fields Add-on](/forms/addons/premium/computed-fields/intro).
:::

## Result output part shortcode

Just like result output item block, you can use the result output part shortcode to change small parts of text based on the users input. This is useful if you want to display different prices or messages to the user.

![Result output part shortcode](/img/forms/result-output-4.webp)

:::caution
This block will not do anything by default as it requires some code configuration provided by the developer. To provide data used in this block you can use [custom filters](/forms/php/filters/block/form/result-output-parts).
:::

To configure this shortcode you need to add it to you result output builder, add a `name` that the filter has provide and `default text` that will change based on the data provided by the filter. Once the use submits the form the corresponding shortcode will be updated if the `key:value` par is available.

:::tip
This block goes hand in hand with the [premium Computed Fields Add-on](/forms/addons/premium/computed-fields/intro).
:::
