---
id: manifest
title: Manifest
---

Instead of using the CSS variable system from the standard Frontend libs, Frontend libs Tailwind includes a system that helps you avoid writing Tailwind classes twice, and allows reusing them between the Block editor and the frontend view.

All the magic happens within the component/block manifests, within the `tailwind` key.

:::tip
Your code editor will help you configure all the manifest options.
:::

The Tailwind manifest configuration consists of a couple of main parts:
- `base` classes
- `parts`
- `options`-based classes
- `combinations`

## Base part

These classes should be applied to the *main* part of your block/component.
This does not necessarily mean the top-most element of your component, though.

```json
...
"tailwind": {
	"base": {
		"twClasses": "font-sans [&>a]:underline"
	}
},
...
```

### Editor-only
If needed, you can also separately specify classes that will be applied in the editor.
**These will override all the `twClasses`.**

```json
...
"tailwind": {
	"base": {
		"twClasses": "absolute top-0 inset-x-0 flex flex-col gap-4",
		// highlight-next-line
		"twClassesEditor": "flex flex-col gap-4"
	}
},
...
```

## Options-based classes
This part of the config allows outputting different classes, based on attributes set in the block/component.

```json
...
"tailwind": {
	"options": {
		"paragraphSize": {
			"twClasses": {
				"sm": "text-sm",
				"base": "~sm/md:~text-sm/base",
				"md": "~sm/md:~text-lg/2xl",
				"lg": "~sm/md:~text-xl/3xl"
			}
		},
		"paragraphFontWeight": {
			"twClasses": {
				"700": "font-bold"
			}
		}
	}
},
...
```

### Editor-only
If needed, you can also separately specify classes that will be applied in the editor.
**These will override all the `twClasses`.**

```json
...
"tailwind": {
	"options": {
		"columnHide": {
			"twClasses": {
				"true": "hidden"
			},
			// highlight-start
			"twClassesEditor": {
				"true": "opacity-50"
			}
			// highlight-end
		}
	}
},
...
```

### Responsive attributes
If you need an attribute that is allowed to be changed per-breakpoint, do this:

1. When defining an attribute, make it an object and add the default keys

	```json
	...
	"tailwind": {
		"attributes": {
			// highlight-start
			"demoSpacing": {
				"type": "object",
				"default": {
					"_default": "base",
					"_desktopFirst": false
				},
			},
			// highlight-end
		}
	},
	...
	```
	(change `_default` value and `_desktopFirst` as desired)

2. Mark the option class as responsive

	```json
	...
	"tailwind": {
		"options": {
			"demoSpacing": {
				"twClasses": {
					"sm": "p-4",
					"base": "p-8",
					"md": "p-12",
					"lg": "p-20"
				},
				// highlight-next-line
				"responsive": true
			},
		}
	},
	...
	```

3. Add the appropriate option component in the admin (use it within the `Responsive` component)

### Parts
By default, the options classes are added to the base class. If you want a certain attribute's classes to be added to a part,
specify the part name with the `part` property.

```json
...
"tailwind": {
	"options": {
		"demoSpacing": {
			"twClasses": {
				"sm": "p-4",
				"base": "p-8",
				"md": "p-12",
				"lg": "p-20"
			},
			// highlight-next-line
			"part": "myPartName"
		},
	}
},
...
```

## Combinations
If you have a more complex design or functionality that can't be implemented with just base classes and options,
combinations are here to save the day!

With `combinations` you can define a set of attributes that need to be set on the block/component,
and an accompanying list of classes to be applied.

```json
"tailwind": {
	"combinations": [
		{
			"attributes": {
				"buttonVariant": "primary",
				"buttonColor": "red"
			},
			"twClasses": "text-red-100 border-red-100 focus-visible:ring-red-500/30 hover:bg-red-100 hover:text-red-950"
		}
	],
},
```

### Multiple accepted values
When specifying conditions, you may want to specify multiple values that will be accepted.

```json
"tailwind": {
	"combinations": [
		{
			"attributes": {
				// highlight-start
				"buttonVariant": [
					"primary",
					"secondary"
				],
				// highlight-end
				"buttonColor": "red"
			},
			"twClasses": "text-red-100 border-red-100 focus-visible:ring-red-500/30 hover:bg-red-100 hover:text-red-950"
		}
	],
},
```

### Editor-only
If needed, you can also separately specify classes that will be applied in the editor.
**These will override all the `twClasses`.**

```json
"tailwind": {
	"combinations": [
		{
			"attributes": {
				"buttonVariant": "primary",
				"buttonFixedPosition": true
			},
			"twClasses": "absolute top-0 left-0 m-2",
			// highlight-next-line
			"twClassesEditor": "m-2"
		}
	],
},
```

## Outputting classes

### Base part

Use `getTwClasses` in JavaScript, or `Helpers::getTwClasses` in PHP.

Output class list will include:
- the `base` classes
- `options` (that don't have a part assigned)
- `combinations`

### Static parts

Use `getTwPart` in JavaScript, or `Helpers::getTwPart` in PHP.

Output class list will include:
- the `part` classes

### Dynamic parts

Use `getTwDynamicPart` in JavaScript, or `Helpers::getTwDynamicPart` in PHP.

Output class list will include:
- the `part` classes
- `options` that have a part with the same name assigned
