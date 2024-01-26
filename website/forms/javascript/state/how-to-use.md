---
id: how-to-use
title: How to use?
---

As mentioned earlier, Eightshift Forms utilizes the `esForms` global window object to manage the state. This approach ensures consistency across various functionalities and components. 

The `esForms` window object contains all the functions developers can use in their forms. Doing so makes all features available for your project, with minimal risk of future disruptions or changes.

To utilize the `esForms` object, call it directly from the window object:

```js	
window.esForms
```

or you can use built-in events which also contain all the state in the time of the event.

:::caution
Take caution when using state data outside of the `esFormsJsFormLoaded` event, as it may not be available at the time of use. To be sure the data is available, run code after the DOM is ready (`DOMContentLoaded` event), together with the `esFormsJsFormLoaded` event.

If your script is loaded before the main form script, you can use PHP hooks to make forms script dependent on you script to ensure that your script is loaded before the main form script and the events will fire.
:::

## Example

In this example we are using the `esFormsJsFormLoaded` event to initialize our form in JavaScript. 

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
			esForms = {
				store,
			},
		} = detail;

		// Do some actions with the form.
	});
});
```
