---
id: how-to-use
title: How to use?
---

To use Computed Fields you must:

* Install and activate custom premium add-on plugin.
* Enable global settings for add-on computed field.
* Create a form using Eightshift forms builder. (You can use internal service or integration forms)
* Enable add-on feature in local forms setting.
* Populate `Computed fields` program.
* Populate `Output variables` fields.
* Set `computed fields results` block on your forms `thank you page`.

![Computed Fields screen](/img/forms/addon-computed-fields.webp)

## Computed fields setting

In this field you write your program using valid `PHP` language. Keep in mind that not all `PHP features` are available.

Under the `Available field names` you can find the list of all field names that are defined inside your Block Editor and are available as variables.

For example if you have field name `email` you can use that field name as a variable to get the field value as `$email`.

:::caution
If you field name contains special charachters or spaces we will convert it to `camelCase` and remove any special charachters.
:::

:::note
This field supports `code editor` experience where you can use `tabs`, `undo` and `syntax highlight`.
:::

## Output variables

In order to prevent internal program variables to populate output data you need to provide the list of variables you would like to send as an output data. There is no limit on the amount of variables you can output.

:::caution
Every variable must be defined with `$` sign and in a separate row.
:::

## Fake fields

Fake fields will never be used on any frontend forms, they are her only for testing prpuses. By providing different field values you will be able to test all combinations and possible combinations for you program.

:::caution
Fake fields supports `JSON` format data.
:::

:::note
This field supports `code editor` experience where you can use `tabs`, `undo` and `syntax highlight`.
:::

## Test your program

Addon plugin provides a option to test your program without frontend forms from WordPress admin.
To use it you must:

* Populate `Computed fields` program.
* Populate `Output variables` fields.
* Populate `Fake fields` in the settings.
* Save settings
* Click `Test Computed` and preview program output under the `Output log` field.

:::caution
To test the computed field program you must save all the settings and than click on the test button.
:::

## Computed fields results

Once you create your valid program and populate output variables you should provide a `thank you` page in the `General settings`. On that page you can add a new `computed fields results` block and provide condtition options.

Under `variable name` you can provide the name of any variable defined in the `output variables`.

Under `variable value` you can define the value of the selected variable.

When this block is used you can `show` any block or multiple blocks when `computed fields program` returns value for selected variable.

![Computed Fields screen](/img/forms/addon-computed-fields-results.webp)
