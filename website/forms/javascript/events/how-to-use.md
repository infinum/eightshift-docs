---
id: how-to-use
title: How to use?
---

### esFormsAfterCaptchaInit

In this example the event is hooked to the window object and in event details you have:
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

In this example the event is hooked to the window object and in event details you have:
* `esForms` - object.
* `formId` - form Id this event is a part of.
* `additional` - not available because this is a not API response event.

```js
window.addEventListener('esFormsJsFormLoaded', ({detail}) => {
	const {
		formId,
		esForms,
	} = detail;

	// Do some actions with the form.
});
```

### esFormsAfterFormSubmitReset

In this example the event is hooked to the `form` element and in event details you have:
* `esForms` - object.
* `formId` - form Id this event is a part of.
* `additional` - object from the API response.

```js
const { store } = window.esForms.store;

[...document.querySelectorAll(store.getStateSelectorsForm())].forEach((form) => {
	form.addEventListener('esFormsAfterFormSubmitReset', ({detail}) => {
		// Do some actions with the form.
	});
});
```
