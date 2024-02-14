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

After the form is successfully submitted, all fields will be reset to their original state. This toggle will prevent that from happening, allowing multiple submissions with the same data.

## Developer mode

Enabling the developer mode will provide various small yet helpful features to simplify the debugging process. List of all features is available on the plugin settings page.

## Stop form syncing

When editing integration-based forms, a synchronization happens every time the form editor is opened. This ensures that the form is always up-to-date with the external integrations. If you prefer syncing forms manually, you can use enable this option to prevent automatic synchronization.

## Skip internal cache

This option disables storage of integration data in a temporary internal storage (cache), which optimizes load time and prevents too many API calls. Turning on this option will bypass the cache and directly call APIs, which may cause a lot of API calls in short time, which can lead to a temporary suspension on some platforms. **Use with caution.**

## Output Query Monitor log

If you encounter issues with PHP functions, you can debug them using the Query Monitor plugin (3rd-party). This plugin allows you to log API data without the user being able to see it. Make sure Query Monitor is installed and enabled before enabling this option.

## Enable disabled fields admin overrides

Administrators usually cannot modify global constants stored in `wp-config.php`. However, enabling this toggle will bypass this restriction, allowing easier debugging.

## Debug Encrypt

We have implemented a custom encryption/decryption debug tool for sensitive data. This toggle will allow you to see the encrypted data in the browser console. This is useful for debugging and testing purposes when using variations on the success redirect pages.

![Debug encrypt screen](/img/forms/debug-encrypt.webp)
