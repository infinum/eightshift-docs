import React from 'react';
import CodeBlock from '@theme/CodeBlock';
import { reformatCode } from '../../utils/shared.jsx';

export function IntegrationActions({
	filter,
	onlyUse = [
		'submitSuccessAction',
	],
}) {
	return (
		<>
			{onlyUse.includes('submitSuccessAction') &&
				<SubmitSuccessAction filter={filter} />
			}
		</>
	);
}

function SubmitSuccessAction ({ filter }) {
	return (
		<>
			<h2>Submit success action</h2>
			<p>Fires after a form is successfully submitted. Runs after emails are sent, entries are saved, and all internal processing is complete.</p>
			<p>Use this to trigger side effects such as logging, third-party notifications, or custom workflows.</p>

			<CodeBlock language="php">
				{reformatCode(`
					add_action('es_forms_integrations_${filter}_submit_success', [$this, 'onFormSubmitSuccess'], 10, 2);

					/**
					 * Runs after a successful form submission.
					 *
					 * @param array<string, mixed> $formDetails Full form submission details including all field values, integration type, and form configuration.
					 * @param string $formId Form ID.
					 *
					 * @return void
					 */
					public function onFormSubmitSuccess(array $formDetails, string $formId): void
					{
						// Example: log the submission.
						\\error_log('Form ' . $formId . ' submitted successfully.');
					}
				`)}
			</CodeBlock>
		</>
	);
}
