---
id: data-flow
title: Data flow
---

Here, we will explain the data flow of the Computed Fields plugin.

1. **User input** - The user fills in and submits the form.
2. **Computed Fields** - The Computed Fields plugin takes the user input and processes it using the defined program.
3. **Output** - The Computed Fields plugin returns the result to the JavaScript using the custom key in the forms API response data.
4. **Frontend** - The JavaScript takes the result and redirects the user to the thank you page.
5. **Thank you page** - There should be a block displaying the result to the user on the Thank you page.
6. **Computed Fields Results block** - The Computed Fields Results block will take the result passed using the `GET` variable `es-data` and display it to the user if the conditions are met.

:::note
You can have multiple Computed Fields Results blocks on the thank you page, but you can only use one variable name per block.
:::
