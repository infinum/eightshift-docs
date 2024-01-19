import React from 'react';
import CodeBlock from '@theme/CodeBlock';
import { reformatCode } from '../../utils/shared.jsx';

export function IntegrationFilters({
	filter,
	onlyUse = [
		'dataFilter',
		'orderFilter',
		'prePostIdFilter',
		'prePostParamsFilter',
	],
}) {
	return (
		<>
			{onlyUse.includes('dataFilter') &&
				<DataFilter filter={filter} />
			}

			{onlyUse.includes('orderFilter') &&
				<OrderFilter filter={filter} />
			}

			{onlyUse.includes('prePostIdFilter') &&
				<PrePostIdFilter filter={filter} />
			}

			{onlyUse.includes('prePostParamsFilter') &&
				<PrePostParamsFilter filter={filter} />
			}
		</>
	);
}

export function AdditionalContentFilter({ filter }) {
	return (
		<>
			<p>This filter allows to add custom content before the closing tag of the field element. Can be useful for additional markup, styles, etc.</p>

			<CodeBlock language="php">
			{reformatCode(`
			add_filter('es_forms_block_${filter}_additional_content', function(): string {
				return '<custom-string>';
			})
			`)}
			</CodeBlock>
		</>
	);
}

function DataFilter ({ filter }) {
	return (
		<>
			<h2>Data filter</h2>
			<p>This filter is used if you want to change form fields data before output. This way you can change components map before it is parsed inside Block Editor and on the frontend.</p>
			<p>For example if you want to force set all fields to have 2 columns layout this will be the filter to use.</p>
			<p>This field will override any Block Editor changes!</p>

			<CodeBlock language="php">
			{reformatCode(`
			add_filter('es_forms_integrations_${filter}_data', 'getIntegrationFilterData', 10, 2);

			/**
			 * Manipulate form fields data before it is sent to the Block Editor.
			 *
			 * @param array<mixed> $data Form fields data.
			 * @param string $formId Form ID.
			 *
			 * @return array<mixed>
			 */
			function getIntegrationFilterData(array $data, string $formId): array
			{
				foreach ($data as $index => $field) {
					$component = $field['component'] ?? '';

					if (!$component) {
						continue;
					}

					$name = $field["{$component}Name"] ?? '';

					if (!$name) {
						continue;
					}

					switch ($name) {
						case 'firstname':
						case 'lastname':
							$data[$index]["{$component}FieldWidthMobile"] = 12;
							$data[$index]["{$component}FieldWidthLarge"] = 6;
							$data[$index]["{$component}DisabledOptions"] = \array_merge(
								$data[$index]["{$component}DisabledOptions"],
								[
									"{$component}FieldWidthMobile",
									"{$component}FieldWidthLarge",
								]
							);
							break;
					}
				}

				return $data;
			}
			`)}
			</CodeBlock>
		</>
	);
}

function OrderFilter ({ filter }) {
	return (
		<>
			<h2>Order filter</h2>
			<p>Forces a specific form fields order, regardless of one set in the editor. Fields that are not defined here will follow the natural in-editor order.</p>
			<p>Not all fields need to have an order defined. For example, if you want to make sure <code>firstname</code>, <code>lastname</code> and <code>email</code> are displayed first, this filter can help.</p>

			<CodeBlock language="php">
				{reformatCode(`
					add_filter('es_forms_integrations_${filter}_order', 'getIntegrationOrder');

					/**
					 * Manipulate form fields order before it is sent to the Block Editor.
					 *
					 * @return array<string>
					 */
					function getIntegrationOrder(): array
					{
						return [
							'firstname',
							'lastname',
							'email',
						];
					}
				`)}
			</CodeBlock>
		</>
	);
}

function PrePostIdFilter ({ filter }) {
	return (
		<>
			<h2>Pre post id filter</h2>
			<p>This filter enables you to update the item ID for the external integration where your form data will be sent.</p>

			<CodeBlock language="php">
				{reformatCode(`
					add_filter('es_forms_integrations_${filter}_pre_post_id', 'getIntegrationPrePostId', 10, 3);

					/**
					 * Manipulate form fields order before it is sent to the Block Editor.
					 * 
					 * @param string $itemId Integration item ID.
					 * @param array<mixed> $params Params to be sent to the integration.
					 * @param string $formId Form ID.
					 * 
					 * @return array<mixed>
					 */
					function getIntegrationPrePostId(string $itemId, array $params, string $formId): array
					{
						return $itemId;
					}
				`)}
			</CodeBlock>
		</>
	);
}

function PrePostParamsFilter ({ filter }) {
	let text = '';

	switch (filter) {
		case 'mailer':
			text = 'mailer system';
			break;
		default:
			text = 'external integration';
			break;
	}
	return (
		<>
			<h2>Pre post params filter</h2>
			<p>Change form fields data before it is sent to the {text}. This way you can manipulate data and provide additional mapping to the data sent to the {text}.</p>

			<CodeBlock language="php">
				{reformatCode(`
					add_filter('es_forms_integrations_${filter}_pre_post_params', 'getIntegrationPrePostParams', 10, 2);

					/**
					 * Change form fields data before we send it to the ${text}.
					 *
					 * @param array<string, mixed> $params Array of params.
					 * @param string $formId Form ID.
					 *
					 * @return array<string, mixed>
					 */
					function getIntegrationPrePostParams(array $params, string $formId): array
					{
						$formSubmissionPageLt = $params['form_submission_page_lt']['value'] ?? '';

						if ($formSubmissionPageLt) {
							$params['ib-submission-source'] = [
								'name' => 'ib-submission-source',
								'value' => $formSubmissionPageLt,
								'type' => 'text',
								'internalType' => '',
							];
						}

						return $params;
					}
				`)}
			</CodeBlock>
		</>
	);
}
