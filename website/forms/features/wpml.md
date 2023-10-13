---
id: wpml
title: WPML
---

WPML is a language plugin that allows you to translate your website into multiple languages. It is compatible with Eightshift Forms and can be used to translate your forms.

![WPML screen](/img/forms/wpml.webp)

## How to use

If you are using this plugin you should turn on this feature in the Eightshift Forms settings page. This will allow your forms to correctly display forms in the listing and form selection depending on the language you are using.

## Features affected by WPML

WPML affects the following features:

### Forms listing

By default, we use the `get_locale()` function to retrieve the default language of your project. Once the WPML plugin is activated, we assign a new language tag to each setting and display forms only in the specific language.

### Forms selector

When selecting forms in your forms picker, you will only see forms available in your language.

### Forms settings

We will make each forms settings language specific.

### Global settings

Global settings will be language specific, except for API keys, tokens and etc.
