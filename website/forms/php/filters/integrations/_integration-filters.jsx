import React from 'react';
import CodeBlock from '@theme/CodeBlock';
import { reformatCode } from './../../../../utils/shared.jsx';

export default function IntegrationFilters(props) {
	const {
		name,
		filter,
		onlyUse = [
			'dataFilter',
			'prePostParamsFilter',
			'successRedirectUrlFilter',
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
						return $data;
					}, 10, 2);
					`)}
					</CodeBlock>
				</>
			}

			{onlyUse.includes('prePostParamsFilter') &&
				<>
					<h2>Pre post params</h2>
					<p>Change form fields data before we send it to the external integration. This way you can manuipulate data and provide additional mapping to the data sent to the integration.</p>

					<CodeBlock language="php">
						{reformatCode(`
							add_filter('es_forms_integrations_${filter}_pre_post_params', function(array $params): array {
								return $params;
							});
						`)}
					</CodeBlock>
				</>
			}

			{onlyUse.includes('successRedirectUrlFilter') &&
				<>
					<h2>Success redirect url</h2>
					<p>Change integrations success redirection url globally for all {name} forms.</p>

					<CodeBlock language="php">
						{reformatCode(`
							add_filter('es_forms_integrations_${filter}_success_redirect_url', function(array $params): array {
								return $params;
							});
						`)}
					</CodeBlock>
				</>
			}
		</>
	);
}
