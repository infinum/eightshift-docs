---
id: how-to-use
title: How to use?
---

### esFormsAfterCaptchaInit

In this example the event is hooked to the `window` object and in event details you have:
* `esForms` - object.
* `formId` - not available because this is a global event.
* `additional` - object from the API response.

```js
window.addEventListener('esFormsAfterCaptchaInit', ({detail}) => {
	const {
		additional: {
			status,
		},
	} = detail;

	if (status === 'success') {
		const score = data?.response?.score?.toString();

		if (score) {
			// Do some actions with the score.

			window.dataLayer.push({
				event: 'recaptcha',
				recaptchaScore: score,
			});
		}
	}
});
```

### esFormsJsFormLoaded

In this example the event is hooked to the `form` element and in event details you have:
* `esForms` - object.
* `formId` - form Id this event is a part of.

```js
import domReady from '@wordpress/dom-ready';

domReady(() => {
	const element = document.querySelector('.js-es-block-form');

	if (!element) {
		return;
	}

	element?.addEventListener('esFormsJsFormLoaded', ({detail}) => {
		const {
			formId,
			esForms,
		} = detail;

		// Do some actions with the form.
	});
});
```

### esFormsAfterFormSubmitReset

In this example the event is hooked to the `form` element and in event details you have:
* `esForms` - object.
* `formId` - form Id this event is a part of.
* `additional` - object from the API response.

```js
const { store } = window.esForms.store;

[...document.querySelectorAll(store.getStateSelector('form'))].forEach((form) => {
	form.addEventListener('esFormsAfterFormSubmitReset', ({detail}) => {
		const {
			formId,
			esForms,
			additional
		} = detail;
		// Do some actions with the form.
	});
});
```
