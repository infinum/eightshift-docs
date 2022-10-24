---
id: dynamic-import
title: Dynamic Import
sidebar_label: Dynamic Import
---

[![docs-source](https://img.shields.io/badge/source-eigthshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a)](https://github.com/infinum/eightshift-frontend-libs/tree/4.0.0)

When writing all our JavaScript code we like to make it as fast and optimized as possible and there is no better way of doing that other than utilizing one powerful tool from Webpack called [dynamic imports](https://webpack.js.org/guides/code-splitting/#dynamic-imports).

This method provides us the ability to write all our JavaScript code but load them in the DOM only when it is used, basically, this is what all JavaScript libraries use out of the box.

By writing all our JavaScript code like this we can:
* optimize loading time.
* reduce the size of finished bundled JavaScript code.
* have websites that are fast and this can positively impact your Seo rating.

## How does it work?

In a nutshell, you load all your code using JavaScript promises and Webpack splits all these promises into separate file chinks. Once the condition to resolve the promise is set (generally we check if the selector is present in the DOM), Webpack automatically injects your chunk in the DOM and loads it up. This is why you will see in your public folder a bunch of smaller files called (`0.js`, `1.js`, `2.js`, etc).

You don't need to think about this. Webpack just does it for you.

## Example

For example, let's make a carousel. We like to write all our JavaScript code in classes so we will provide an example for that but you can use this with functions as well.

**We have to files:**
* **index.js** - the main entry point for your JavaScript feature.
* **className.js** - class with your JavaScript features that you can reuse.


### index.js

This is a version where you have multiple instances of this feature on one page. If you are creating a feature for your block/component you will use the following example.

```js
import domReady from '@wordpress/dom-ready';

// Use this helper to make sure this code is executed when everything in DOM is set.
domReady(() => {

  // Provide selectors to check.
  const selector = '.js-block-carousel';
  const elements = document.querySelectorAll(selector);

  // This is the important part because if this condition is true this promise will resolve and your chink will be loaded in the DOM.
  if (elements.length) {

    // Normally load and resolve a promise on file import.
    import('./carousel-slider').then(({ CarouselSlider }) => {

      // Loop possible multiple iterations.
      [...elements].forEach((element) => {

        // Load a class for all sliders
        const carouselSlider = new CarouselSlider({
          element,
          nextElement: `${selector}-next-arrow`,
          prevElement: `${selector}-prev-arrow`,
        });

        // Run and init function that starts everything in your class.
        carouselSlider.init();
      });
    });
  }
});
```

If you are sure you will have only one instance of this feature on one-page use the following code in your `index.js` file.

```js
import domReady from '@wordpress/dom-ready';

// Use this helper to make sure this code is executed when everything in DOM is set.
domReady(() => {

  // Provide selectors to check.
  const selector = '.js-block-carousel';
  const element = document.querySelector(selector);

  // This is the important part. Because of it, your code will only be imported when there's an element on the page that uses it.
  if (element) {

    // Normally load and resolve a promise on file import.
    import('./carousel-slider').then(({ CarouselSlider }) => {
      // Load a class for each iteration.
      const carouselSlider = new CarouselSlider({
        element,
        nextElement: `${selector}-next-arrow`,
        prevElement: `${selector}-prev-arrow`,
      });

      // Run and init function that starts everything in your class.
      carouselSlider.init();
    });
  }
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
