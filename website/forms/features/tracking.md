---
id: tracking
title: Tracking
---

The tracking feature allows you to track form submissions by pushing the dataLayer event to Google Tag Manager. To activate this feature, you must provide the custom event name using the individual form setting page.

![Tracking screen](/img/forms/tracking.webp)

## How to use it?

The dataLayer event is pushed to Google Tag Manager with custom parameters and form submission data using the event name provided.

### Additional parameters

You can include custom parameters in the dataLayer event in addition to the default form submission data. These custom parameters will be added to every form event, whether a success or an error.

![Tracking custom screen](/img/forms/tracking-custom.webp)

### Additional success parameters

You can add custom parameters to the dataLayer on the success event, similar to additional parameters.

![Tracking success screen](/img/forms/tracking-success.webp)

### Additional error parameters

You can add custom parameters to the dataLayer on the error event, similar to additional parameters.

With this event, you have some custom magic constants that you can use to provide additional information to the dataLayer event.

* `{invalidFieldsString}` - This will provide a string of all invalid fields separated by a comma.
* `{invalidFieldsArray}` - This will provide you with an array of all invalid fields.

![Tracking error screen](/img/forms/tracking-error.webp)
