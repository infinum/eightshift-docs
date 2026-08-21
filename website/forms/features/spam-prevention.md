---
id: spam-prevention
title: Spam prevention
---

Spam prevention protects your forms with a captcha service. Two providers are supported — [Google reCAPTCHA](https://www.google.com/recaptcha/about/) and [Friendly Captcha](https://friendlycaptcha.com/).

Go to the forms global settings, open **Advanced → Spam prevention**, turn the feature on and pick the provider. Switching the provider reloads the fields below it, and only the active provider validates your submissions.

## Google reCAPTCHA

With reCAPTCHA selected, you can use the free version or the Enterprise version of reCAPTCHA v3.

![Spam prevention screen](/img/forms/spam.webp)

### Free version

Go to the forms global settings, turn on the spam prevention, and provide the site and secret keys.

### Enterprise version

The process is the same as for the free version. You need to turn the Enterprise version on and provide the necessary credentials.

### Advanced

Under the advanced tab, multiple options allow you to customize the spam prevention feature.

#### Hide badge

As it is not recommended to hide the badge, we have added this option to allow you to hide it if you need to. Please use this option with caution as it goes against the [Google reCAPTCHA terms of service](https://developers.google.com/recaptcha/docs/faq#id-like-to-hide-the-recaptcha-badge.-what-is-allowed).

#### Spam threshold

Google reCaptcha estimates the probability that a user is a human or a bot. It will provide you with a score between 0.0 and 1.0. The higher the score, the more likely the user is a human. The default value is 0.5, but you can change it to 0.0 and 1.0.

#### On submit action name

You can send custom names to Google reCAPTCHA. This is useful to track the form submissions in Google Analytics or Google Tag Manager.

#### Load reCAPTCHA on web load

By default, the reCAPTCHA script is loaded when the form is shown. If you want to load it on page load, you can turn on this option and read the captcha score and custom action name from the `window` object.

![Spam prevention advanced screen](/img/forms/spam-advanced.webp)

## Friendly Captcha

Friendly Captcha is a privacy-focused, GDPR-compliant alternative to Google reCAPTCHA. It has no user tracking and, depending on the widget mode, no user interaction at all.

### Keys

Provide both the **site key** and the **API key** in the settings, or define them as [global variables](../php/global-variables/friendly-captcha). The feature stays inactive until both are set.

You can find them in the [Friendly Captcha dashboard](https://app.friendlycaptcha.eu/dashboard) — the site key on your application, and the API key under the `API Keys` section.

### Use EU endpoint

By default, submissions are verified against the global endpoint. Turning this option on verifies them against the EU endpoint hosted in Germany, so visitor data never leaves the EU.

:::note
The EU endpoint requires a Friendly Captcha Advanced or Enterprise plan.
:::

### Load widget on website load

By default, the widget is only loaded on pages that contain forms. Turn this option on to load it on every page.

### Widget mode

Pick between `Smart` (default), `Zero-click` and `One-click`.

:::caution
This must match the **Widget Mode** set on your sitekey in the Friendly Captcha dashboard, under your application's `Protection` tab. If the two don't match, the widget won't validate submissions.
:::

:::note
The reCAPTCHA-specific options — hide badge, spam threshold and the on submit action name — don't apply to Friendly Captcha. It returns a pass or fail result, not a score.
:::
