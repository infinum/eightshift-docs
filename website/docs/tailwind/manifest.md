---
id: manifest
title: Manifest
---

Instead of using the CSS variable system from the standard Frontend libs, Frontend libs Tailwind includes a system that helps you avoid writing Tailwind classes twice, and allows reusing them between the Block editor and the frontend view.

All the magic happens within the component/block manifests, within the `tailwind` key.

:::tip
Your code editor will help you configure all the manifest options.
:::

:::note
If on Frontend libs Tailwind older than 1.4.0, refer to the Legacy section below.
:::


The Tailwind manifest configuration consists of several sections:
- `parts`
- `options`-based classes
- `combinations`

## Parts
Parts are used to add styles to various parts of your component or block. You may add as many styles as you need.
Classes can be added dynamically on top of part classes using `options` and `combinations`. More about that below.

The default style is the `base` style:
```json
...
"tailwind": {
	"parts": {
		"base": {
			"twClasses": "flex items-center gap-8"
		}
	}
},
...
```

## Options-based classes
Sometimes you may need to conditionally apply classes based on a value of an attribute. the `options` key allows you to do just that!

### Simplest example
In this case we're adding classes based on the `paragraphSize` and `paragraphFontWeight` attributes.

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
				"400": "font-normal",
				"700": "font-bold"
			}
		}
	}
},
...
```

For example, if `paragraphSize` is `md` `~sm/md:~text-lg/2xl` will be added to the `base` part's class output.
Likewise, if `paragraphFontWeight` is `700`, `font-bold` will be added to the `base` part's class output.

### Assigning to part(s)
Adding classes to the `base` part might not always be enough. With the `parts` attribute on the entry you can specify which part the class gets applied to.

```json
...
"tailwind": {
	"options": {
		"cardTextAlign": {
			// highlight-next-line
			"parts": "heading",
			"twClasses": {
				"start": "text-start",
				"center": "text-center",
				"end": "text-end"
			}
		}
	}
},
...
```

In this example, if `cardTextAlign` is `center`, the `text-center` class will be added to the `heading` part.

You can also specify multiple parts by separating them with a comma `,`.

```json
...
"tailwind": {
	"options": {
		"cardTextAlign": {
			// highlight-next-line
			"parts": "heading,text",
			"twClasses": {
				"start": "text-start",
				"center": "text-center",
				"end": "text-end"
			}
		}
	}
},
...
```

In this example, if `cardTextAlign` is `end`, the `text-end` class will be added both to the `heading` and the `text` part.

### Assign different classes to different parts
In some (more complex) cases, you may need to apply different classes to different parts, based on the value of an attribute.

This is easily achieved by adding objects whose keys are part names, and values are an object with a list of classes to apply.


```json
...
"tailwind": {
	"options": {
		"cardVariant": {
			// highlight-start
			"base": {
				"twClasses": {
					"basic": "border-gray-400 p-4 rounded",
					"featured": "border-green-500 p-6 rounded-lg"
				}
			},
			"text": {
				"twClasses": {
					"basic": "text-base",
					"featured": "text-lg"
				}
			}
			// highlight-end
		}
	}
},
...
```

In this example, if `cardVariant` is `basic`, `border-gray-400 p-4 rounded` will be added to the `base` part, and `text-base` will be added to the `text` part.

### Responsive attributes
If you're using attributes that have an ability to have different values set per-breakpoint, you can use the `responsive` option to ensure proper classes are added.

When defining an attribute, set its type to `object` and add the default keys

	```json
	...
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
	},
	...
	```
	(change `_default` value and `_desktopFirst` as desired)

After that, simply add `"responsive": true` to your `options` entry.

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

## Combinations
If adding classes based on just one value isn't enough, there's a solution for that as well!

With `combinations` you can define a set of attributes that need to be set on the block or
component, based on which classes will be applied.

```json
"tailwind": {
	// highlight-start
	"combinations": [
		{
			"attributes": {
				"buttonVariant": "primary",
				"buttonColor": "red"
			},
			"twClasses": "text-red-100 border-red-100 focus-visible:ring-red-500/30 hover:bg-red-100 hover:text-red-950"
		}
	],
	// highlight-end
},
```

### Multiple accepted values
You may specify the accepted values as a list. Condition for that attribute will be met if any of the values match.

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

### Parts
As with `options`, you can apply the classes to a specific part (or multiple parts):

```json
"tailwind": {
	"combinations": [
		{
			"attributes": {
				"buttonVariant": "primary",
				"buttonColor": "red"
			},
			"twClasses": "text-red-100 hover:text-red-950",
			// highlight-next-line
			"parts": "label"
		}
	],
},
```

Also, if you need to set different classes per-part, you can use the `output` key.
The data inside is in the same format as the one in `options`.

```json
"tailwind": {
	"combinations": [
		{
			"attributes": {
				"buttonVariant": "primary",
				"buttonColor": "red"
			},
			// highlight-start
			"output": {
				"base": {
					"twClasses": "border-red-100 hover:bg-red-100 focus-visible:ring-red-500/30"
				},
				"intro": {
					"twClasses": "text-red-100 hover:text-red-950"
				}
			}
			// highlight-end
		}
	],
},
```

## Editor-specific classes
Sometimes you may want to add classes that should be visible in the editor, or even have a totally different set of classes for the editor.

This can be accomplished by adding `twClassesEditorOnly`, or `twClassesEditor`, where `twClasses` are set (in `parts`, `options`, or `combinations`).

### `twClassesEditorOnly`
These classes will **override** `twClasses` that are set.
This could be useful if an element is hidden in the frontend view, but you may want to just fade it out in the editor:

```json
...
"tailwind": {
	"options": {
		"columnVisibility": {
			"twClasses": {
				"visible": "flex",
				"hidden": "hidden"
			},
			// highlight-start
			"twClassesEditorOnly": {
				"visible": "opacity-100",
				"hidden": "opacity-30"
			}
			// highlight-end
		}
	}
},
...
```

In this case, if `columnVisibility` is `hidden`, the `opacity-30` class will be applied in the editor, and `hidden` will be applied on frontend.

### `twClassesEditor`
These classes are **added** to the `twClassesEditorOnly`/`twClasses` that are set.
This could be useful if you need to add a couple of classes that are editor-specific, but not "major" enough to warrant re-writing the base list of classes.

```json
...
"tailwind": {
	"options": {
		"wrapperMarginBottom": {
			"twClasses": {
				"20": "mb-5",
				"40": "mb-10"
			},
			// highlight-start
			"twClassesEditor": {
				"20": "[&.selected]:!mb-20",
				"40": "[&.selected]:!mb-20"
			}
			// highlight-end
		}
	}
},
...
```

In this case, if `wrapperMarginBottom` is `20`, the `mb-5` class will be applied in the frontend, and `mb-5 [&.selected]:!mb-20` will be applied in the editor.

## Outputting classes
To output classes, simply call the `tailwindClasses` function.

```jsx
...
<div className={tailwindClasses('base', attributes, manifest)}>
	<p className={tailwindClasses('text', attributes, manifest)}>Lorem ipsum dolor sit amet</p>
	...
</div>
```

and similarly in PHP:

```php
<div class="<?php echo esc_attr(Helpers::tailwindClasses('base', $attributes, $manifest)); ?>">
	<p class="<?php echo esc_attr(Helpers::tailwindClasses('text', $attributes, $manifest)); ?>">
		Lorem ipsum dolor sit amet
	</p>
	...
</div>
```

You may also specify custom classes as a list of arguments after the main arguments:
`tailwindClasses('base', attributes, manifest, 'my-beautiful-class')`

## Legacy (version < 1.4.0)

The Tailwind manifest configuration consists of a couple of main parts:
- `base` classes
- `parts`
- `options`-based classes
- `combinations`

### Base part

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

#### Editor-only
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

### Options-based classes
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

#### Editor-only
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

#### Responsive attributes
If you need an attribute that is allowed to be changed per-breakpoint, do this:

1. When defining an attribute, make it an object and add the default keys

	```json
	...
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

#### Parts
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

### Combinations
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

#### Multiple accepted values
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

#### Editor-only
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

### Outputting classes

#### Base part

Use `getTwClasses` in JavaScript, or `Helpers::getTwClasses` in PHP.

Output class list will include:
- the `base` classes
- `options` (that don't have a part assigned)
- `combinations`

#### Static parts

Use `getTwPart` in JavaScript, or `Helpers::getTwPart` in PHP.

Output class list will include:
- the `part` classes

#### Dynamic parts

Use `getTwDynamicPart` in JavaScript, or `Helpers::getTwDynamicPart` in PHP.

Output class list will include:
- the `part` classes
- `options` that have a part with the same name assigned
