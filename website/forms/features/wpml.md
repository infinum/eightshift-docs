---
id: wpml
title: WPML
---

WPML is plugin that allows multi-lingual functionality for the website, allowing features like post and media translations. Eightshift Forms is fully compatible with WPML, and allows adding language variants (_translations_) to forms.

![WPML screen](/img/forms/wpml.webp)

## How to use

If using WPML, enable the _WPML_ feature in form settings. This will ensure the forms is displayed correctly in the form listing page, and that all the multi-language features work.

## Features affected by WPML

WPML affects the following features:

### Forms listing

By default, we use `get_locale()`to retrieve the default language of the project. Once WPML is activated, a new language tag is assigned to each setting, and the forms display only in the language they're assigned to.

### Forms selector

When selecting forms in the Forms picker, only the forms in the current editing language are visible.

### Forms settings

Forms settings are unique for each language variant of the form.

### Global settings

Global settings, similar to form settings, are unique for each language variation, with the exception of API keys, tokens, etc.
