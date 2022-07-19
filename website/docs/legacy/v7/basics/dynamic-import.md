---
id: dynamic-import
title: Dynamic Import
---

[![docs-source](https://img.shields.io/badge/source-eightshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a)](https://github.com/infinum/eightshift-frontend-libs)

As JavaScript code runs on the visitor's device, it's crucial that it's as fast and optimized as possible. A powerful tool from Webpack called [dynamic imports](https://webpack.js.org/guides/code-splitting/#dynamic-imports) helps with that.

Dynamic imports provide us the ability to load our JavaScript code only when it's used. 

By writing all JavaScript code using dynamic imports, we can reap significant benefits:
* optimize loading time
* reduce the size of finished bundled JavaScript code
* have websites that are fast, which can positively impact your SEO rating

## How does it work?

In a nutshell, you load all your code using JavaScript promises. Webpack splits all these promises into separate file chunks. Once the condition to resolve the promise is set (generally, if a selector is present in the DOM), Webpack automatically injects your chunk in the DOM and loads it up. This is why you will see a bunch of smaller files (`0.js`, `1.js`, `2.js`, etc) in your public folder instead of a single large file.

You don't need to think about this. Webpack just does it for you.

## Example

For example, let's make a carousel. An Eightshift convention is to write JavaScript code using classes, so we'll provide an example for that. However, you can use this approach with functions as well.

**We have two files:**
* **index.js** - the main entry point for your JavaScript feature.
* **className.js** - class with your JavaScript features that you can reuse.


### index.js

This is a version where you have multiple instances of a feature on one page. If you are creating a feature for your block/component, you'll use something along these lines.

```js
import domReady from '@wordpress/dom-ready';
import { blockJsClass, blockName } from '../manifest.json';

// Use this helper to make sure this code is executed when everything in DOM is set.
domReady(() => {

  // Provide selectors to check.
  const selector = `.${blockJsClass}`;
  const elements = document.querySelectorAll(selector);

  // This is the important part - if this condition is true, this promise will resolve and your chunk will be loaded in the DOM.
  if (!elements.length) {
    return;
  }

  // Normally load and resolve a promise on file import.
  const { CarouselSlider } = await import('./carousel-slider');

  // Loop possible multiple iterations.
  [...elements].forEach((element) => {
    const carouselSlider = new CarouselSlider({
      element,
      nextElement: `${selector}-next-arrow`,
      prevElement: `${selector}-prev-arrow`,
    });

    // Run and init function that starts everything in your class.
    carouselSlider.init();
  });
});
```

If you are sure you will have only one instance of this feature on one-page, you can use the following code in your `index.js` file.

```js
import domReady from '@wordpress/dom-ready';
import { blockJsClass, blockName } from '../manifest.json';

// Use this helper to make sure this code is executed when everything in DOM is set.
domReady(() => {

  // Provide selectors to check.
  const selector = `.${blockJsClass}`;
  const element = document.querySelector(selector);

  // This is the important part. Because of it, your code will only be imported when there's an element on the page that uses it.
  if (!element) {
    return;
  }

  // Normally load and resolve a promise on file import.
  const { CarouselSlider } = await import('./carousel-slider');

  const carouselSlider = new CarouselSlider({
    element,
    nextElement: `${selector}-next-arrow`,
    prevElement: `${selector}-prev-arrow`,
  });

  // Run and init function that starts everything in your class.
  carouselSlider.init();
});
```

### carousel-slider.js

This is a normal class with some JavaScript functionality.

```js
import Swiper from 'swiper';

export class CarouselSlider {
  constructor(options) {
    this.element = options.element;
    this.nextElement = options.nextElement;
    this.prevElement = options.prevElement;
  }

  init() {
    new Swiper(
      this.element,
      {
        // ...
        navigation: {
          nextEl: this.nextElement,
          prevEl: this.prevElement,
        },
        // ...
      }
    );
  }
}
```
