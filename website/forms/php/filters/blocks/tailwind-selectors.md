---
id: tailwind-selectors
title: Tailwind selectors
---

Allows adding custom Tailwind CSS selector data used for block styling. This is used internally to pass Tailwind class mappings to block components.

```php
\add_filter('es_forms_blocks_tailwind_selectors', [$this, 'getBlocksTailwindSelectors'], 10, 2);

/**
 * Provide custom Tailwind selector data for blocks.
 *
 * @param array<mixed> $selectors Default selectors (empty array).
 * @param array<string, mixed> $attributes Block attributes.
 *
 * @return array<mixed>
 */
public function getBlocksTailwindSelectors(array $selectors, array $attributes): array
{
	return \array_merge(
		$selectors,
		[
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
						'parts' => [
							'overlay' => '',
							'spinner' => '',
						],
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
		]
	);
}
```
