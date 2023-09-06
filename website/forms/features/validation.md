---
id: validation
title: Validation
---

Validation is used to ensure that the form is populated in the correct way and that the data is valid. Every field has a set of validation rules that can be configured from the form builder.

## Integration validation rules

If you are using an integration, validation rules set on the integration will be automatically set in your form in the sync process, and you will not be able to change them from the form builder. You can always add additional validation rules, but external rules can't be changed.

For example, on the HubSpot form, the field email is set as required, so you can't change that from the form builder, but you can add additional validation rules like limiting the number of characters.

## Email validation

Eightshift Form provides a set of validation rules for email fields, like validating the email format and adding checks for top-level domains.

Top-level domains are provided using [Iana](https://www.iana.org/domains/root/db) website database.

## Custom validation patterns

With all the native validations provided, you can also add your own custom validation patterns. This is useful if you want to add custom validation for a field that is not provided by default.

For example, you want an email field not to allow emails with a `.org` domain. You can provide a custom validation pattern using a regular expression to check if the email has a `.org` domain. 

![Validation screen](/img/forms/validation.webp)
