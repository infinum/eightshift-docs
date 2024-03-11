---
id: single-submit
title: Single submit
---

Single submit is a feature that allows dynamic processing of a form when user makes any change on the form. This is useful for forms that require users to perform calculations, such as a mortgage calculator or a loan calculator.

![Single submit](/img/forms/single-submit.webp)

You can turn on single submit in the settings of the form.

Single submit form can work with and without a submit button, but in general it is recommended not to use a submit button with single submit forms.

Not all form field are supported by single submit. The following fields are supported:
* Input range
* Checkbox
* Radio
* Rating
* Select

If you add any of the non-supported fields to a single submit form, the form will not submit when the user makes a change to the non-supported field.

:::caution
This feature may create a large number of request to your server. Use with caution!
:::
