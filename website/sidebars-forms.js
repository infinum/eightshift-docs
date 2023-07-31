module.exports = {
	forms: {
		'Eightshift Forms': [
			'intro',
		],
		'PHP': [
			{
				'type': 'category',
				'label': 'Global variables',
				'items': [
					'php/global-variables/intro',
					'php/global-variables/geolocation',
					'php/global-variables/google-recaptcha',
					{
						'type': 'category',
						'label': 'Integrations',
						'items': [
							'php/global-variables/integrations/active-campaign',
							'php/global-variables/integrations/airtable',
							'php/global-variables/integrations/clearbit',
							'php/global-variables/integrations/goodbits',
							'php/global-variables/integrations/greenhouse',
							'php/global-variables/integrations/hubspot',
							'php/global-variables/integrations/jira',
							'php/global-variables/integrations/mailchimp',
							'php/global-variables/integrations/mailerlite',
							'php/global-variables/integrations/moments',
							'php/global-variables/integrations/workable',
						],
					},
				]
			},
			{
				'type': 'category',
				'label': 'Filters',
				'items': [
					'php/filters/intro',
					{
						'type': 'category',
						'label': 'Block',
						'items': [
							{
								'type': 'category',
								'label': 'Forms',
								'items': [
									'php/filters/block/forms/style-options',
								],
							},
							{
								'type': 'category',
								'label': 'Form',
								'items': [
									'php/filters/block/form/redirect-timeout',
									'php/filters/block/form/hide-global-msg-timeout',
									'php/filters/block/form/success-redirect-url',
									'php/filters/block/form/additional-content',
								],
							},
							{
								'type': 'category',
								'label': 'Form selector',
								'items': [
									'php/filters/block/form-selector/additional-content',
								],
							},
							{
								'type': 'category',
								'label': 'Field',
								'items': [
									'php/filters/block/field/style-options',
									'php/filters/block/field/additional-content',
								],
							},
							{
								'type': 'category',
								'label': 'Input',
								'items': [
									'php/filters/block/input/additional-content',
								],
							},
							{
								'type': 'category',
								'label': 'Textarea',
								'items': [
									'php/filters/block/textarea/additional-content',
								],
							},
							{
								'type': 'category',
								'label': 'Select',
								'items': [
									'php/filters/block/select/additional-content',
								],
							},
							{
								'type': 'category',
								'label': 'File',
								'items': [
									'php/filters/block/file/preview-remove-label',
									'php/filters/block/file/additional-content',
								],
							},
							{
								'type': 'category',
								'label': 'Country',
								'items': [
									'php/filters/block/country/alternative-data-set',
									'php/filters/block/country/additional-content',
								],
							},
							{
								'type': 'category',
								'label': 'Phone',
								'items': [
									'php/filters/block/phone/additional-content',
								],
							},
							{
								'type': 'category',
								'label': 'Date',
								'items': [
									'php/filters/block/date/additional-content',
								],
							},
							{
								'type': 'category',
								'label': 'Checkboxes',
								'items': [
									'php/filters/block/checkboxes/additional-content',
								],
							},
							{
								'type': 'category',
								'label': 'Radios',
								'items': [
									'php/filters/block/radios/additional-content',
								],
							},
							{
								'type': 'category',
								'label': 'Submit',
								'items': [
									'php/filters/block/submit/component',
									'php/filters/block/submit/additional-content',
								],
							},
							{
								'type': 'category',
								'label': 'Step',
								'items': [
									'php/filters/block/step/component-prev',
									'php/filters/block/step/component-next',
								],
							},
						],
					},
					{
						'type': 'category',
						'label': 'Blocks',
						'items': [
							'php/filters/blocks/additional-blocks',
							'php/filters/blocks/media-breakpoints',
						],
					},
					{
						'type': 'category',
						'label': 'Enrichment',
						'items': [
							'php/filters/enrichment/manual-map',
						],
					},
					{
						'type': 'category',
						'label': 'General',
						'items': [
							'php/filters/general/http-request-timeout',
							'php/filters/general/set-locale',
						],
					},
					{
						'type': 'category',
						'label': 'Geolocation',
						'items': [
							'php/filters/geolocation/disable',
							'php/filters/geolocation/cookie-name',
							'php/filters/geolocation/db-location',
							'php/filters/geolocation/phar-location',
							'php/filters/geolocation/countries',
							'php/filters/geolocation/wp-rocket-advanced-cache',
						],
					},
					{
						'type': 'category',
						'label': 'Troubleshooting',
						'items': [
							'php/filters/troubleshooting/output-log',
						],
					},
					{
						'type': 'category',
						'label': 'Validation',
						'items': [
							'php/filters/validation/fail-mimetype-validation-when-file-not-on-fs',
						],
					},
					{
						'type': 'category',
						'label': 'Integrations',
						'items': [
							'php/filters/integrations/active-campaign',
							'php/filters/integrations/airtable',
							'php/filters/integrations/clearbit',
							'php/filters/integrations/goodbits',
							'php/filters/integrations/greenhouse',
							'php/filters/integrations/hubspot',
							'php/filters/integrations/jira',
							'php/filters/integrations/mailchimp',
							'php/filters/integrations/mailer',
							'php/filters/integrations/mailerlite',
							'php/filters/integrations/moments',
							'php/filters/integrations/workable',
						],
					},
				],
			},
		],
		'JavaScript': [
			'javascript/intro',
			'javascript/examples',
			'javascript/manual-initiation',
			{
				'type': 'category',
				'label': 'Window object',
				'items': [
					'javascript/window/state',
					'javascript/window/events',
					'javascript/window/conditional-tags',
					'javascript/window/enrichment',
					'javascript/window/form',
					'javascript/window/step',
					'javascript/window/store',
					'javascript/window/utils',
				]
			},
		],
		'Features': [
			'features/cache',
			'features/conditional-tags',
			'features/debug',
			'features/enrichment',
			'features/fallback-emails',
			'features/geolocation',
			'features/import-export',
			'features/migrations',
			'features/multiflow-forms',
			'features/multistep-forms',
			'features/spam-prevention',
			'features/success-redirect',
			'features/tracking',
		],
		'Integrations': [
			'integrations/intro',
			'integrations/active-campaign',
			'integrations/airtable',
			'integrations/clearbit',
			'integrations/goodbits',
			'integrations/greenhouse',
			'integrations/hubspot',
			'integrations/jira',
			'integrations/mailchimp',
			'integrations/mailer',
			'integrations/mailerlite',
			'integrations/moments',
			'integrations/workable',
		]
	}
};
