---
id: settings
title: Settings
---

## Computed fields setting

In this field, you write your program using a valid PHP language. Keep in mind that not all PHP features are available.

Under `Available field names, ` you can find a list of all fields defined inside your Block Editor and available as variables.

For example, if you have the field named `email`, you can use that field name as a variable to get the field value as `$email`.

:::caution
If your field name contains special characters or spaces, we will convert it to `camelCase` and remove any special characters.
:::

:::note
This field supports a `code editor` experience, where you can use `tabs`, `undo`, and `syntax highlight`.
:::

![Computed Fields settings 1 screen](/img/forms/addon-computed-fields-settings1.webp)

## Output variables setting

You must provide the variables you want to send as output data to prevent internal program variables from populating output data. The number of variables you can output is unlimited.

:::caution
Every variable must be defined with a `$` sign and in a separate row.
:::

![Computed Fields settings 2 screen](/img/forms/addon-computed-fields-settings2.webp)

## Fake fields setting

Fake fields will never be used on any front-end forms. They are here only for testing purposes. You can test all possible combinations for your program by providing different field values.

:::caution
Fake fields support `JSON` format data.
:::

:::note
This field supports a `code editor` experience, where you can use `tabs`, `undo`, and `syntax highlight`.
:::

![Computed Fields settings 3 screen](/img/forms/addon-computed-fields-settings3.webp)

## Test your program

The Addon plugin allows you to test your program without frontend forms from the WordPress admin.
To use it, you must:

* Populate the `Computed fields` program.
* Populate `Output variables` fields.
* Populate `Fake fields` in the settings.
* Save settings
* Click `Test Computed` and preview program output under the `Output log` field.

:::caution
To test the computed field program, save all the settings and click the test button.
:::

![Computed Fields settings 4 screen](/img/forms/addon-computed-fields-settings4.webp)
