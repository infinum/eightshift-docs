import React from 'react';
import CodeBlock from '@theme/CodeBlock';
import { reformatCode } from '../../utils/shared.jsx';

export function IntegrationFilters({
	filter,
	onlyUse = [
		'dataFilter',
		'orderFilter',
		'prePostIdFilter',
		'overridePostRequestFilter',
		'prePostParamsFilter',
		'beforeSuccessResponseFilter',
		'afterCustomResultOutputProcessFilter',
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

			{onlyUse.includes('overridePostRequestFilter') &&
				<OverridePostRequestFilter filter={filter} />
			}

			{onlyUse.includes('prePostParamsFilter') &&
				<PrePostParamsFilter filter={filter} />
			}

			{onlyUse.includes('beforeSuccessResponseFilter') &&
				<BeforeSuccessResponseFilter filter={filter} />
			}

			{onlyUse.includes('afterCustomResultOutputProcessFilter') &&
				<AfterCustomResultOutputProcessFilter filter={filter} />
			}
		</>
	);
}

export function AdditionalContentFilter({ filter }) {
	return (
		<>
			<p>Allows adding custom content before the field element's closing tag. Useful for adding markup, styles, etc.</p>

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
			<p>Allows modifying form field data before it's shown in the Block Editor or output on the frontend.</p>
			<p>Useful if, for example, you want to ensure that all fields fit into a 2-column layout.</p>
			<p>Overrides any Block Editor changes!</p>

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
			<p>Forces a form field order, regardless of how it's set in the Block editor. Fields not modified through the filter will use order in which they're set in the Block editor.</p>
			<p>Not all fields need to have an order defined. For example, you may want to make sure <code>firstname</code>, <code>lastname</code> and <code>email</code> are displayed first, but other fields follow their Block editor order.</p>

			<CodeBlock language="php">
				{reformatCode(`
					add_filter('es_forms_integrations_${filter}_order', 'getIntegrationOrder');

					/**
					 * Forces form field order for the provided fields. For other fields, Block editor order is used.
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
			<h2>Pre-post ID filter</h2>
			<p>Allows updating item IDs sent to external integrations to which the form data is sent.</p>

			<CodeBlock language="php">
				{reformatCode(`
					add_filter('es_forms_integrations_${filter}_pre_post_id', 'getIntegrationPrePostId', 10, 3);

					/**
					 * Modifies integration item ID.
					 *
					 * @param string $itemId Integration item ID.
					 * @param array<mixed> $params Params to be sent to the integration.
					 * @param string $formId Form ID.
					 *
					 * @return string
					 */
					function getIntegrationPrePostId(string $itemId, array $params, string $formId): string
					{
						return $itemId;
					}
				`)}
			</CodeBlock>
		</>
	);
}

function OverridePostRequestFilter ({ filter }) {
	return (
		<>
			<h2>Override post request filter</h2>
			<p>Allows completely bypassing the integration's API request and returning a custom response instead. If the filter returns a non-empty array, it is used as the response and the API call is skipped.</p>
			<p>Useful for testing, mocking responses, or conditionally short-circuiting submissions.</p>

			<CodeBlock language="php">
				{reformatCode(`
					add_filter('es_forms_integrations_${filter}_override_post_request', 'getIntegrationOverridePostRequest', 10, 5);

					/**
					 * Override the integration API request with a custom response.
					 *
					 * @param array<mixed> $response Default response (empty array).
					 * @param string $itemId Integration item/list ID.
					 * @param array<string, mixed> $params Form submission parameters.
					 * @param array<mixed> $files Uploaded files.
					 * @param string $formId Form ID.
					 *
					 * @return array<mixed>
					 */
					function getIntegrationOverridePostRequest(array $response, string $itemId, array $params, array $files, string $formId): array
					{
						// Return a mock success response to bypass the API call.
						return [
							'status' => 'success',
							'code' => 200,
						];
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
		case 'calculator':
			text = 'calculator';
			break;
		default:
			text = 'external integration';
			break;
	}
	return (
		<>
			<h2>Pre-post parameters filter</h2>
			<p>Allows modifying form field data before it's sent to {text}. Useful if you want to make values derived from the sent data, or add new fields.</p>

			<CodeBlock language="php">
				{reformatCode(`
					add_filter('es_forms_integrations_${filter}_pre_post_params', 'getIntegrationPrePostParams', 10, 2);

					/**
					 * Modifies form field data before it's sent to ${text}.
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

function BeforeSuccessResponseFilter ({ filter }) {
	return (
		<>
			<h2>Before success response filter</h2>
			<p>Allows modifying the response data before it is sent back to the client after a successful form submission. Runs after all internal processing (entries, variations, redirects) is complete.</p>

			<CodeBlock language="php">
				{reformatCode(`
					add_filter('es_forms_integrations_${filter}_before_success_response', 'getIntegrationBeforeSuccessResponse', 10, 3);

					/**
					 * Modify the response before it is sent to the client.
					 *
					 * @param array<string, mixed> $response Response data with 'private', 'public', and 'additional' keys.
					 * @param array<string, mixed> $formDetails Full form submission details.
					 * @param string $formId Form ID.
					 *
					 * @return array<string, mixed>
					 */
					function getIntegrationBeforeSuccessResponse(array $response, array $formDetails, string $formId): array
					{
						$response['additional']['myCustomKey'] = 'myCustomValue';

						return $response;
					}
				`)}
			</CodeBlock>
		</>
	);
}

function AfterCustomResultOutputProcessFilter ({ filter }) {
	return (
		<>
			<h2>After custom result output process filter</h2>
			<p>Allows modifying the processed custom result output data after it has been prepared. Useful when using the custom result output feature to adjust the final output structure.</p>

			<CodeBlock language="php">
				{reformatCode(`
					add_filter('es_forms_integrations_${filter}_after_custom_result_output_process', 'getIntegrationAfterCustomResultOutputProcess', 10, 3);

					/**
					 * Modify the custom result output data after processing.
					 *
					 * @param array<string, mixed> $output Processed output with 't' (title), 'st' (subtitle), and 'd' (data) keys.
					 * @param array<string, mixed> $formDetails Full form submission details.
					 * @param string $formId Form ID.
					 *
					 * @return array<string, mixed>
					 */
					function getIntegrationAfterCustomResultOutputProcess(array $output, array $formDetails, string $formId): array
					{
						$output['t'] = \__('Custom title', 'text-domain');

						return $output;
					}
				`)}
			</CodeBlock>
		</>
	);
}
