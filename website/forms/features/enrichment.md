---
id: enrichment
title: Enrichment
---

## Enrichment

This feature considers various user data elements to create a comprehensive and precise representation of their activity. To activate enrichment, map the `URL` or `cookie` values with the relevant form fields.

### How will this help me?

With this feature, users can visit your form and leave without submitting it. You will know where they originated if they return to the same form. This way, you can increase your conversion rate.

### How does it work?

By providing a parameters map in settings, forms can read users `cookies` and `URL` parameters and store that data in the users `localStorage`. This data is updated every time the user lands on any pages containing the forms. 

For example, if the user first time lands on this page:
```
 https://infinum.com/?utm_content=test
```

and you have provided the corresponding parameter mapping in the settings. Forms will store the GET parameters in the `local storage` and use it to prefill the form fields.

:::note
Forms only store parameters defined in the mapping.
:::

Next time, if the user returns to the same page without this parameter, forms will use the value from `local storage` if the storage is still valid.

### How long does the data stay in the storage?

By default, the data is stored for 30 days. You can change this value in the settings.

![Enrichment screen](/img/forms/enrichment.webp)

### How to map parameters?

First, you provide the list of all the `cookies` and `URL` parameters you want to use.

![Enrichment params screen](/img/forms/enrichment-params.webp)

Next, you need to map them with the corresponding form fields by providing the field names.

![Enrichment map screen](/img/forms/enrichment-map.webp)

You can map multiple fields with the same parameter by separating the field names with a comma.

:::caution
The field name will match the mapped fields on every form in your project.
:::

## Prefill from storage

If a user doesn't finish submitting a form, the enrichment prefill feature remembers their inputs in localStorage. When they visit the form again, the prefill feature will automatically input the previous data. However, if the form is successfully submitted, this data will be erased.

:::caution
It is important to disclose this in your site's Privacy policy.
:::

![Enrichment prefill storage map screen](/img/forms/enrichment-storage.webp)

## Prefill from URL

The same as prefill from storage, prefill from URL will prefill the form fields if the user has data in the URL. This way, your form can be shared with prefilled data.

:::caution
It is important to disclose this in your site's Privacy policy.
:::

![Enrichment prefill url map screen](/img/forms/enrichment-url.webp)
