---
id: library
title: SCSS Library
---

[![docs-source](https://img.shields.io/badge/source-eightshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a)](https://github.com/infinum/eightshift-frontend-libs)

Eightshift Frontend Libs contains a collection of useful SCSS mixins, functions and helpers you can use in projects.

For years, we have collected a list of them. At one point, we felt it was ineffective to copy-paste code across multiple projects, so we created Eightshift Frontend Libs. This allows you to use whatever we offer without all that unnecessary clutter.

Check out our documentation and import what you need from Eightshift Frontend Libs.

## How to use it

SCSS mixins, functions, and helpers are located in Eightshift Frontend Libs. Therefore, if you are using our Webpack build, you are all set. You can use it by importing it into your project like this:

```scss
@import '@eightshift/frontend-libs/styles/index.scss';
```

However, if you used our `wp boilerplate init theme` command, you are all set. Eightshift Frontend Libs are injected in the `_shared.scss` file in your project.

## Functions

### `global-config`
Function returns global config variable from Eightshift-frontend-libs setup. It expects `$global-config` key to be available. If the key is not available there is no warning nor error, just `null` returned.

| Name   | Description                      | Type     |
|--------|----------------------------------|----------|
| `$key` | Key from global manifest config. | `String` |

**Throws**
*ERROR*: $global-config variable doesnt exist!

**Example**
```scss
.test {
	@if (global-config(useRemBaseSize)) {
		width: 2rem;
		...
	}
}
```

Output
```css
.test {
	width: 2rem;
}
```

### `global-settings`
Function returns the `$global_settings` variable from Eightshift Frontend libs setup. It expects `$global-variables` key to be available.

| Name    | Description                    | Type     |
|---------|--------------------------------|----------|
| `$keys` | Map keys from global settings. | `String` |

**Throws**
*ERROR*: $global-config variable doesnt exist!

**Example**
```scss
.test {
	width: global-settings(containers, default);
}
```

Output
```css
.test {
	width: 1330px;
}
```

## Mixins

### `font-face`
Creates `@font-face` definitions. Ideally, should be included in a separate SCSS partial and relatively 'early' in SCSS structure.

| Name      | Description                                                        | Type     | Default value |
|-----------|--------------------------------------------------------------------|----------|---------------|
| `$name`   | Font family name                                                   | `String` |               |
| `$path`   | Path to the font variation file (relative to the `public/` folder) | `String` |               |
| `$weight` | Font variation weight                                              | `Number` | `400`         |
| `$style`  | Font variation style                                               | `String` | `normal`      |
| `$exts`   | File extensions of font files                                      | `String` | `woff2 woff`  |

**Example**
```scss
@include font-face('FontName', 'FontName-Regular');
@include font-face('FontName', 'FontName-Bold', 700);
@include font-face('FontName2', 'FontName2', 500, normal, woff);
```

Output
```css
@font-face {
	font-family: "FontName";
	font-weight: 400;
	font-style: normal;
	src: url("FontName-Regular.woff2") format("woff2"), url("FontName-Regular.woff") format("woff");
	font-display: swap;
}

@font-face {
	font-family: "FontName";
	font-weight: 700;
	font-style: normal;
	src: url("FontName-Bold.woff2") format("woff2"), url("FontName-Bold.woff") format("woff");
	font-display: swap;
}

@font-face {
	font-family: "FontName2";
	font-weight: 500;
	font-style: normal;
	src: url("FontName2.woff") format("woff");
	font-display: swap;
}
```

### `underline-text`
This mixin can work in two ways:
1. Include the mixin in the class you want to hover over. Text you want to underline needs to have attached class `.underline-text` (alternatively, provide a custom class name through the `$element` parameter). `$wrapper` should be set to `true`.
2. Include the mixin in any element. `$wrapper` shouldn't be set (= should be set to `false`)

Other parameters are optional and they allow you customize the transition.

| Name               | Description                                                          | Type              | Default value                          |
|--------------------|----------------------------------------------------------------------|-------------------|----------------------------------------|
| `$thickness`       | Thickness of the line (percentage relative to the current font size) | `String`          | `10%`                                  |
| `$duration`        | Duration of the animation                                            | `Seconds`         | `0.5s`                                 |
| `$timing-function` | Animation timing function                                            | `Timing-function` | `cubic-bezier(0.79, 0.01, 0.22, 0.99)` |
| `$color`           | Color of the underline                                               | `Color`           | `currentColor`                         |
| `$wrapper`         | If wrapper is used as the hover reference                            | `Boolean`         | `false`                                |
| `$element`         | Element which you want to add the underline to                       | `String`          | `.underline-text`                      |
| `$state`           | When to apply the underline (pseudoselector)                         | `String`          | `hover`                                |

**Example**
```scss
.test {
	@include underline-text();
}

.test2 {
	@include underline-text(5%, .7s, ease-in, #132031, true, ".link", hover);
}

.test3 {
	@include underline-text($timing-function: ease, $color: #000000, $wrapper: true, $element: ".target-text");
}
```

Output
```scss
.test {
	display: inline;
	transition: background-size 0.5s cubic-bezier(0.79, 0.01, 0.22, 0.99) 0s, background-position 0s step-end 0.5s;
	text-decoration: none;
	background-image: linear-gradient(transparent 90%, currentColor 90%, currentColor 100%);
	background-repeat: no-repeat;
	background-position-y: bottom;
	background-size: 0% 100%;

	&:hover {
		background-position-x: right;
		background-position-y: bottom;
		background-size: 100% 100%;
	}
}

.test2 {
	text-decoration: none;

	.link {
		display: inline;
		transition: background-size 0.7s ease-in 0s, background-position 0s step-end 0.7s;
		text-decoration: none;
		background-image: linear-gradient(transparent 95%, #132031 95%, #132031 100%);
		background-repeat: no-repeat;
		background-position-y: bottom;
		background-size: 0% 100%;
	}

	&:hover .link {
		background-position-x: right;
		background-position-y: bottom;
		background-size: 100% 100%;
	}
}

.test3 {
	text-decoration: none;

	.target-text {
		display: inline;
		transition: background-size 0.5s ease 0s, background-position 0s step-end 0.5s;
		text-decoration: none;
		background-image: linear-gradient(transparent 90%, #000000 90%, #000000 100%);
		background-repeat: no-repeat;
		background-position-y: bottom;
		background-size: 0% 100%;
	}

	&:hover .target-text {
		background-position-x: right;
		background-position-y: bottom;
		background-size: 100% 100%;
	}
}
```

## Placeholders

### `button-reset`
Resets the browser default button styles.

**Example**
```scss
.test {
	@extend %button-reset;
}
```

Output
```css
.test {
	padding: 0;
	border: 0;
	appearance: none;
	font-family: inherit;
}
```

### `link-reset`
Resets the browser default link styles.

**Example**
```scss
.test {
	@extend %link-reset;
}
```

Output
```scss
.test {
	padding: 0;
	margin: 0;
	color: unset;
	text-decoration: none;

	&:hover {
		color: unset;
	}
}
```

### `visually-hidden`
Hide information visually but keep it available to screen reader and other assistive technology. [More info](https://www.w3.org/WAI/tutorials/forms/labels/#hiding-the-label-element)

**Example**
```scss
.test {
	@extend %visually-hidden;
}
```

Output
```css
.test {
	border: 0;
	clip: rect(0 0 0 0);
	height: 1px;
	margin: -1px;
	overflow: hidden;
	padding: 0;
	position: absolute;
	width: 1px;
}
```
