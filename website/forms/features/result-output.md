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
The block will not show anything by default. Some configuration by developers is required. For more details, check the chapter on [custom filters](/forms/php/filters/block/forms/use-custom-result-output-feature).
:::

To configure the block, add it inside a _Result output_ block, and provide a name, an operator and a value that will match the data provided by the filter. Once the form is submitted and the condition matches, the selected block will be shown.

### Operators

The value doesn't have to match exactly — the block options include an _Operator_ select, so the condition can be a comparison, a text check or a numeric range.

| Operator                       | Condition is true when                                       |
| ------------------------------ | ------------------------------------------------------------ |
| is                             | the value is exactly the same as the provided value          |
| is not                         | the value is different from the provided value               |
| greater than                   | the value is greater than the provided value                 |
| greater than or equal          | the value is greater than or equal to the provided value     |
| less than                      | the value is less than the provided value                    |
| less than or equal             | the value is less than or equal to the provided value        |
| contains                       | the value contains the provided value                        |
| not contains                   | the value doesn't contain the provided value                 |
| starts with                    | the value starts with the provided value                     |
| ends with                      | the value ends with the provided value                       |
| in range                       | the value is between the start and end value, excluding both |
| in range (including value)     | the value is between the start and end value, including both |
| not in range                   | the value is outside the start and end value, excluding both |
| not in range (including value) | the value is outside the start and end value, including both |

The four range operators show an additional _End value_ field, so the condition is checked against a `start` – `end` interval. The other operators use a single _Value_ field.

:::note
All numeric operators — the comparisons and the ranges — cast both sides to a number. The `is`, `is not`, `contains`, `not contains`, `starts with` and `ends with` operators compare strings.
:::

:::caution
Provide both a name and a value. A _Result output item_ without them is not rendered at all.
:::

Multiple items can target the same name with different operators, so one value can drive several outputs — e.g. show one block for a score below 50 and another for a score in the 50 – 80 range.

:::tip
Works great with the [Computed Fields Add-on](/forms/addons/premium/computed-fields/intro).
:::

## _Result output part_ shortcode

Similar to the _Result output item_ block, the shortcode version allows smaller, inline varations, e.g. simple pieces of text.

![Result output part shortcode](/img/forms/result-output-4.webp)

:::caution
The shortcode will not show anything by default. Some configuration by developers is required. For more details, check the chapter on [custom filters](/forms/php/filters/block/forms/use-custom-result-output-feature).
:::

To configure the shortocde, add it somewhere inside the _Result output_ block. Provide a `name` and set the `default text`. Once the form is submitted, the shortcode is replaced with the value that matches the provided _name_, and the _default text_ is kept if there is no matching value.

:::note
Unlike the _Result output item_ block, the shortcode has no operator — it always outputs the value for the matching name, it doesn't compare it.
:::

:::tip
Works great with the [Computed Fields Add-on](/forms/addons/premium/computed-fields/intro).
:::
