import React from 'react';
import CodeBlock from '@theme/CodeBlock';
import { reformatCode } from '../../utils/shared.jsx';

export function IntegrationFilters(props) {
	const {
		filter,
		onlyUse = [
			'dataFilter',
			'prePostParamsFilter',
			'order',
		],
	} = props;

	return (
		<>
			{onlyUse.includes('dataFilter') &&
				<>
					<h2>Data</h2>
					<p>This filter is used if you want to change form fields data before output. This way you can change components map before it is parsed inside Block Editor.</p>
					<p>For example if you want to set all fields to have 2 columns layout this will be the filter to use.</p>

					<CodeBlock language="php">
					{reformatCode(`
					add_filter('es_forms_integrations_${filter}_data', function(array $data, string $formId): array {
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
					}, 10, 2);
					`)}
					</CodeBlock>
				</>
			}

			{onlyUse.includes('prePostParamsFilter') &&
				<>
					<h2>Pre post params</h2>
					<p>Change form fields data before it is sent to the external integration. This way you can manipulate data and provide additional mapping to the data sent to the integration.</p>

					<CodeBlock language="php">
						{reformatCode(`
							add_filter('es_forms_integrations_${filter}_pre_post_params', function(array $params): array {
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
							});
						`)}
					</CodeBlock>
				</>
			}

			{onlyUse.includes('order') &&
				<>
					<h2>Order fields</h2>
					<p>Forces a specific form fields order, regardless of one set in the editor. Fields that are not defined here will follow the natural in-editor order.</p>
					<p>Not all fields need to have an order defined. For example, if you want to make sure <code>firstname</code>, <code>lastname</code> and <code>email</code> are displayed first, this filter can help.</p>

					<CodeBlock language="php">
						{reformatCode(`
							add_filter('es_forms_integrations_${filter}_order', function(): array {
								return [
									'firstname',
									'lastname',
									'email',
								];
							});
						`)}
					</CodeBlock>
				</>
			}
		</>
	);
}
