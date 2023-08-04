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
					<p>Change form fields data before output.</p>
					<p>This filter is used if you want to change form fields data before output. By changing the name of the filter you will target different integrations.</p>
					
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
					<p>Change form fields data before we send it to the external integration.</p>

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
