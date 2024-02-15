---
id: settings
title: Settings
---

## Computed fields setting

Here you can input your FCL program. Check the _Computed fields intro_ chapter for the list of supported features.

_Available field names_ show all the form fields whose outputs are available as variables that can be used in an FCL program.

For example, if you have a field named `email`, you can use `$email` to get that field's value.

:::caution
If a field name contains special characters or spaces, use the `camelCased` version of the name for the variable. For example, `my-field` becomes `$myField`.
:::

:::note
The code editor supports syntax highlighting, undo and indenting with tabs.
:::

![Computed Fields settings 1 screen](/img/forms/addon-computed-fields-settings1.webp)

## Output variables setting

The variables sent as output data of an FCL program need to be specified manually. There is no limit for number of variables that can be output.

:::caution
Specify one variable per line and prefix each with `$`.
:::

![Computed Fields settings 2 screen](/img/forms/addon-computed-fields-settings2.webp)

## Fake fields setting

_Fake fields_ allow you to test an FCL program by providing test input data in JSON format. They will not be used on any user-facing forms.

:::note
The code editor supports syntax highlighting, undo and indenting with tabs.
:::

![Computed Fields settings 3 screen](/img/forms/addon-computed-fields-settings3.webp)

## Test your program

In order to test an FCL program without having to build a form follow these steps:

* Add the FCL program in the _Computed fields_ field.
* Populate _Output variables._
* Add test data into _Fake fields._
* Save the settings
* Click the _Test Computed_ button and check the _Output log._


![Computed Fields settings 4 screen](/img/forms/addon-computed-fields-settings4.webp)
