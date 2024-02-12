---
id: debug
title: Debugging
---

The debugging screen provides configuration options and overrides default functionalities for developers, but caution should be used as these options can break form functionality.

![Debug screen](/img/forms/debug.webp)


## Bypass validation

When a form is submitted, an internal validator is triggered to validate the form. Once all internal validations are successfully passed, the form data is sent to the integration. With this toggle, you have the option to bypass internal validation for all forms and directly send the data to the integration.

## Bypass captcha

This toggle allows sending the form without CAPTCHA validation while enabling the feature. It is helpful for testing or running automated tests.

## Don’t clear form after submission

After the form is successfully submitted, all fields will be reset to their original state. This toggle will allow duplicate submissions with the same data.

## Developer mode

Enabling the developer mode will provide various small yet helpful features to simplify the debugging process.

## Stop form syncing

When editing integration forms, a re-sync occurs whenever you open a block editor page. This ensures that forms are always up-to-date with external integrations whenever you want to edit them. However, if you prefer to sync your forms manually, you can use the toggle to prevent this automatic behavior.

## Skip internal cache

This option prevents storing integration data in the temporary internal cache to optimize load time and API calls. Turning on this option can cause many API calls in a short time, which may cause a temporary ban from the external integration service. Use with caution.

## Output Query Monitor log

If you encounter issues with PHP functions, you can debug them using an external Query Monitor plugin. This plugin allows you to log API data without the user being able to see it. However, you must first install and activate the Query Monitor plugin in your project to use this feature.

## Enable disabled fields admin overrides

The WP admin cannot modify global constants stored in wp-config.php. However, with this toggle, you can temporarily override these settings for debugging purposes. This is useful when debugging API connections on external servers.
