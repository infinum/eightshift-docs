---
id: data-flow
title: Data flow
---

Here's how data flow in the Computed fields add-on works:

1. **User input** - User fills in and submits the form.
2. **Computed Fields** - Computed Fields add-on takes the user input and processes it using the defined program.
3. **Output** - Result is returned to JavaScript through the custom key in the Forms API response data.
4. **Frontend** - JavaScript takes the result and redirects the user to the _Thank you_ page.
5. **Thank you page** - A block displays the result to the user on the Thank you page.
6. **Computed Fields Results block** - Computed Fields Results block takes the result using the `GET` variable `es-data` and displays it to the user if the conditions are met.

:::note
Multiple Computed Fields Results blocks can be used on a _Thank you_ page, but only one variable name can be used per block.
:::
