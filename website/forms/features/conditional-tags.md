---
id: conditional-tags
title: Conditional tags
---

Conditional tags are a useful tool that enables you to display or hide form fields based on various conditions.

To utilize this feature, navigate to the form builder and select the desired field. You will find the conditional tags section in the block options.

![Conditional tags screen](/img/forms/conditional-tags.webp)

## How to use

To begin, you must choose whether you want the field to be visible or hidden by default. If you select the field to be hidden by default, it will remain hidden until the specified conditions are met. Similarly, if you choose the field to be visible by default, it will be displayed until the conditions are met.

Then, you need to add exception rules to create conditions. You can choose between using `OR` or `AND` conditions, which can be combined to create complex conditions.

:::tip
In order to add a conditional tag to a field, the field must have a name attribute.
:::

:::caution
If you change the name of a field, you must save the form and update any conditional tags.
:::

## Inner fields

When you include a rule that includes a `checkbox`, `radio`, or `select` field, you have the option to check if the field is `checked` or `unchecked`, or if it has a specific `value`.

To do this, you can add conditional tags to the entire field or each option/field within by selecting that option and providing the necessary rules.

:::note
For example, if you hide all inner options of the `select` field, the entire field will be hidden, and vice versa.
:::
