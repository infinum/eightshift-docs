---
id: tailwind-selectors
title: Tailwind selectors
---

Since version 5.0.7 Eightshift forms supports Tailwind CSS selectors. This means that you can use Tailwind CSS classes to style your forms.

To provide your own Tailwind CSS classes, you can use this filter with the correct key-value pair.

```php
\add_filter('es_forms_blocks_tailwind_selectors', 'getBlockFormsTailwindSelectors');

public function getBlockFormsTailwindSelectors(): array
{
	return [
		'forms' => [
			'base' => '',
		],
		'form' => [
			'base' => '',
			'parts' => [
				'fields' => '',
			],
		],
		'form-edit-actions' => [
			'base' => '',
			'parts' => [
				'link' => '',
			],
		],
		'loader' => [
			'base' => '',
		],
		'global-msg' => [
			'base' => '',
		],
		'field' => [
			'base' => '',
			'parts' => [
				'inner' => '',
				'label' => '',
				'label-inner' => '',
				'before-content' => '',
				'content' => '',
				'content-wrap' => '',
				'after-content' => '',
				'help' => '',
				'error' => '',
			],
		],
		'input' => [
			'base' => '',
			'parts' => [
				'field' => '',
				'field-inner' => '',
				'field-label' => '',
				'field-label-inner' => '',
				'field-before-content' => '',
				'field-content' => '',
				'field-content-wrap' => '',
				'field-after-content' => '',
				'field-suffix-content' => '',
				'field-help' => '',
				'field-error' => '',
			],
		],
		'range' => [
			'base' => '',
			'parts' => [
				'min' => '',
				'max' => '',
				'current' => '',
				'field' => '',
				'field-inner' => '',
				'field-label' => '',
				'field-label-inner' => '',
				'field-before-content' => '',
				'field-content' => '',
				'field-content-wrap' => '',
				'field-after-content' => '',
				'field-suffix-content' => '',
				'field-help' => '',
				'field-error' => '',
			],
		],
		'rating' => [
			'base' => '',
			'parts' => [
				'input' => '',
				'star' => '',
				'field' => '',
				'field-inner' => '',
				'field-label' => '',
				'field-label-inner' => '',
				'field-before-content' => '',
				'field-content' => '',
				'field-content-wrap' => '',
				'field-after-content' => '',
				'field-suffix-content' => '',
				'field-help' => '',
				'field-error' => '',
			],
		],
		'radios' => [
			'parts' => [
				'field' => '',
				'field-inner' => '',
				'field-label' => '',
				'field-label-inner' => '',
				'field-before-content' => '',
				'field-content' => '',
				'field-content-wrap' => '',
				'field-after-content' => '',
				'field-suffix-content' => '',
				'field-help' => '',
				'field-error' => '',
			],
		],
		'radio' => [
			'base' => '',
			'parts' => [
				'input' => '',
				'content' => '',
				'label' => '',
				'label-icon' => '',
				'label-inner' => '',
			],
		],
		'checkboxes' => [
			'parts' => [
				'field' => '',
				'field-inner' => '',
				'field-label' => '',
				'field-label-inner' => '',
				'field-before-content' => '',
				'field-content' => '',
				'field-content-wrap' => '',
				'field-after-content' => '',
				'field-suffix-content' => '',
				'field-help' => '',
				'field-error' => '',
			],
		],
		'checkbox' => [
			'base' => '',
			'parts' => [
				'input' => '',
				'content' => '',
				'label' => '',
				'label-icon' => '',
				'label-inner' => '',
				'help' => '',
			],
		],
		'file' => [
			'base' => '',
			'parts' => [
				'button' => '',
				'custom-wrap' => '',
				'info' => '',
				'field' => '',
				'field-inner' => '',
				'field-label' => '',
				'field-label-inner' => '',
				'field-before-content' => '',
				'field-content' => '',
				'field-content-wrap' => '',
				'field-after-content' => '',
				'field-suffix-content' => '',
				'field-help' => '',
				'field-error' => '',
			],
		],
		'phone' => [
			'base' => '',
			'parts' => [
				'field' => '',
				'field-inner' => '',
				'field-label' => '',
				'field-label-inner' => '',
				'field-before-content' => '',
				'field-content' => '',
				'field-content-wrap' => '',
				'field-after-content' => '',
				'field-suffix-content' => '',
				'field-help' => '',
				'field-error' => '',
			],
		],
		'textarea' => [
			'base' => '',
			'parts' => [
				'field' => '',
				'field-inner' => '',
				'field-label' => '',
				'field-label-inner' => '',
				'field-before-content' => '',
				'field-content' => '',
				'field-content-wrap' => '',
				'field-after-content' => '',
				'field-suffix-content' => '',
				'field-help' => '',
				'field-error' => '',
			],
		],
		'date' => [
			'base' => '',
			'parts' => [
				'field' => '',
				'field-inner' => '',
				'field-label' => '',
				'field-label-inner' => '',
				'field-before-content' => '',
				'field-content' => '',
				'field-content-wrap' => '',
				'field-after-content' => '',
				'field-suffix-content' => '',
				'field-help' => '',
				'field-error' => '',
			],
		],
		'submit' => [
			'base' => '',
			'parts' => [
				'inner' => '',
				'field' => '',
				'field-inner' => '',
				'field-label' => '',
				'field-label-inner' => '',
				'field-before-content' => '',
				'field-content' => '',
				'field-content-wrap' => '',
				'field-after-content' => '',
				'field-suffix-content' => '',
				'field-help' => '',
				'field-error' => '',
			],
		],
		'step' => [
			'base' => '',
			'parts' => [
				'debug-details' => '',
				'inner' => '',
				'navigation' => '',
				'navigation-inner' => '',
				'navigation-prev'	=> '',
				'navigation-next'	=> '',
			],
		],
		'step-navigation-prev' => [
			'base' => '',
			'parts' => [
				'inner' => '',
			],
		],
		'step-navigation-next' => [
			'base' => '',
			'parts' => [
				'inner' => '',
			],
		],
		'progress-bar' => [
			'base' => '',
			'parts' => [
				'item' => '',
				'item-inner' => '',
				'multiflow' => '',
				'multistep' => '',
			],
		],
	];
}
```
