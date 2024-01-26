---
id: form-templates
title: Form templates
---

This filter allows adding custom form templates to the form selector. This way you can predefine form templates and insert them with a single click.

```php
\add_filter('es_forms_block_form_selector_form_templates', [$this, 'getBlockFormSelectorFormTemplates']);

/**
 * Add additional forms templates in blocks form selector.
 *
 * @return array<int, mixed>
 */
public function getBlockFormSelectorFormTemplates(): array
{
	return [
		[
			"label" => "Test Forms",
			"slug" => "test-form",
			"blockName" => "eightshift-forms/mailer",
			'icon' => "<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20' fill='none'><path d='M7 1H2.5A1.5 1.5 0 0 0 1 2.5V7a1.5 1.5 0 0 0 1.5 1.5H7A1.5 1.5 0 0 0 8.5 7V2.5A1.5 1.5 0 0 0 7 1Zm0 10.5H2.5A1.5 1.5 0 0 0 1 13v4.5A1.5 1.5 0 0 0 2.5 19H7a1.5 1.5 0 0 0 1.5-1.5V13A1.5 1.5 0 0 0 7 11.5ZM17.5 1H13a1.5 1.5 0 0 0-1.5 1.5V7A1.5 1.5 0 0 0 13 8.5h4.5A1.5 1.5 0 0 0 19 7V2.5A1.5 1.5 0 0 0 17.5 1Zm0 10.5H13a1.5 1.5 0 0 0-1.5 1.5v4.5A1.5 1.5 0 0 0 13 19h4.5a1.5 1.5 0 0 0 1.5-1.5V13a1.5 1.5 0 0 0-1.5-1.5Z' stroke='currentColor' stroke-linecap='round' fill='none'/></svg>",
			"innerBlocks" => [
				[
					"eightshift-forms/input",
					[
						"inputInputFieldLabel" => "E-mail",
						"inputInputType" => "email",
						"inputInputName" => "email",
						"inputInputIsRequired" => true,
						"inputInputIsEmail" => true,
						"inputInputDisabledOptions" => [
							"inputInputIsRequired",
							"inputInputName"
						]
					],
				],
				[
					"eightshift-forms/textarea",
					[
						"textareaTextareaFieldLabel" => "Message",
						"textareaTextareaName" => "message",
					],
				],
				[
					"eightshift-forms/submit"
				],
			]
		],
	];
}
```
