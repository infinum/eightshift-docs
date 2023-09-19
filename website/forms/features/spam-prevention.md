---
id: spam-prevention
title: Spam prevention
---

We use [Google reCAPTCHA](https://www.google.com/recaptcha/about/) service for spam prevention. You can use the free version or the Enterprise version of reCAPTCHA v3.


![Spam prevention screen](/img/forms/spam.webp)

## Free version

Go to the forms global settings, turn on the spam prevention, and provide the site and secret keys.


## Enterprise version

The process is the same as for the free version. You need to turn the Enterprise version on and provide the necessary credentials.

## Advanced

Under the advanced tab, multiple options allow you to customize the spam prevention feature.

### Hide badge

As it is not recommended to hide the badge, we have added this option to allow you to hide it if you need to. Please use this option with caution as it goes against the [Google reCAPTCHA terms of service](https://developers.google.com/recaptcha/docs/faq#id-like-to-hide-the-recaptcha-badge.-what-is-allowed).

### Spam threshold

Google reCaptcha estimates the probability that a user is a human or a bot. It will provide you with a score between 0.0 and 1.0. The higher the score, the more likely the user is a human. The default value is 0.5, but you can change it to 0.0 and 1.0.

### On submit action name

You can send custom names to Google reCAPTCHA. This is useful to track the form submissions in Google Analytics or Google Tag Manager.

### Load reCAPTCHA on web load

By default, the reCAPTCHA script is loaded when the form is shown. If you want to load it on page load, you can turn on this option and read the captcha score and custom action name from the `window` object.

![Spam prevention advanced screen](/img/forms/spam-advanced.webp)
