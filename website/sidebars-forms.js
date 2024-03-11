module.exports = {
	forms: {
		'Getting Started': [
			'welcome',
			'basics',
			'first-form',
			{
				'type': 'category',
				'label': 'Features',
				'items': [
					[
						'features/dashboard',
						'features/conditional-tags',
						'features/enrichment',
						'features/geolocation',
						'features/validation',
						'features/multisteps-forms',
						'features/spam-prevention',
						'features/success-redirect',
						'features/tracking',
						'features/security',
						'features/labels',
						'features/locations',
						'features/cache',
						'features/debug',
						'features/fallback-emails',
						'features/import-export',
						'features/migrations',
						'features/cloudflare',
						'features/country-list',
						'features/wpml',
						'features/entries',
						'features/show-as',
						'features/result-output',
						'features/single-submit',
					],
				],
			},
			{
				'type': 'category',
				'label': 'Integrations',
				'items': [
					'integrations/intro',
					'integrations/active-campaign',
					'integrations/airtable',
					'integrations/calculator',
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
					'integrations/pipedrive',
				],
			},
			'known-issues',
		],
		'Customization': [
			{
				'type': 'category',
				'label': 'PHP',
				'items': [
					'php/intro',
					{
						'type': 'category',
						'label': 'Global variables',
						'items': [
							'php/global-variables/how-to-use',
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
									'php/global-variables/integrations/pipedrive',
								],
							},
						]
					},
					'php/helpers',
					{
						'type': 'category',
						'label': 'Filters',
						'items': [
							'php/filters/how-to-use',
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
											'php/filters/block/form/success-redirect-variation',
											'php/filters/block/form/success-redirect-variation-options',
											'php/filters/block/form/tracking-event-name',
											'php/filters/block/form/tracking-additional-data',
											'php/filters/block/form/data-type-selector',
											'php/filters/block/form/phone-sync',
											'php/filters/block/form/global-msg-headings',
											'php/filters/block/form/additional-content',
											'php/filters/block/form/pre-response-addon-data',
											'php/filters/block/form/pre-response-success-redirect-data',
											'php/filters/block/form/additional-hidden-fields',
											'php/filters/block/form/result-output-items',
											'php/filters/block/form/result-output-parts',
										],
									},
									{
										'type': 'category',
										'label': 'Form selector',
										'items': [
											'php/filters/block/form-selector/form-templates',
											'php/filters/block/form-selector/additional-content',
										],
									},
									{
										'type': 'category',
										'label': 'Field',
										'items': [
											'php/filters/block/field/style-options',
											'php/filters/block/field/style-classes',
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
										'label': 'Phone',
										'items': [
											'php/filters/block/phone/additional-content',
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
										'label': 'Date',
										'items': [
											'php/filters/block/date/additional-content',
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
									{
										'type': 'category',
										'label': 'Rating',
										'items': [
											'php/filters/block/rating/additional-content',
										],
									},
								],
							},
							{
								'type': 'category',
								'label': 'Blocks',
								'items': [
									'php/filters/blocks/allowed-blocks',
									'php/filters/blocks/additional-blocks',
									'php/filters/blocks/media-breakpoints',
								],
							},
							{
								'type': 'category',
								'label': 'General',
								'items': [
									'php/filters/general/http-request-timeout',
									'php/filters/general/locale',
								],
							},
							{
								'type': 'category',
								'label': 'Scripts',
								'items': [
									'php/filters/scripts/dependency-admin',
									'php/filters/scripts/dependency-theme',
									'php/filters/scripts/dependency-blocks-editor',
									'php/filters/scripts/dependency-blocks-frontend',
									'php/filters/scripts/routes-public',
									'php/filters/scripts/routes-private',
								],
							},
							{
								'type': 'category',
								'label': 'Geolocation',
								'items': [
									'php/filters/geolocation/db-location',
									'php/filters/geolocation/phar-location',
									'php/filters/geolocation/countries',
								],
							},
							{
								'type': 'category',
								'label': 'Integrations',
								'items': [
									'php/filters/integrations/active-campaign',
									'php/filters/integrations/airtable',
									'php/filters/integrations/calculator',
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
									'php/filters/integrations/pipedrive',
								],
							},
							{
								'type': 'category',
								'label': 'Entries',
								'items': [
									'php/filters/entries/pre-post-params',
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
								'label': 'Validation',
								'items': [
									'php/filters/validation/force-mimetype-from-fs',
								],
							},
							{
								'type': 'category',
								'label': 'Admin',
								'items': [
									'php/filters/admin/settings-data',
								],
							},
						],
					},
					{
						'type': 'category',
						'label': 'Actions',
						'items': [
							'php/actions/how-to-use',
							'php/actions/migrations',
						],
					},
					'php/shortcodes',
					'php/wp-cli',
				],
			},
			{
				'type': 'category',
				'label': 'JavaScript',
				'items': [
					'javascript/intro',
					{
						'type': 'category',
						'label': 'Events',
						'items': [
							'javascript/events/available-events',
							'javascript/events/how-to-use',
						]
					},
					{
						'type': 'category',
						'label': 'State',
						'items': [
							'javascript/state/how-to-use',
							'javascript/state/state',
							'javascript/state/store',
							'javascript/state/form',
							'javascript/state/utils',
							'javascript/state/conditional-tags',
							'javascript/state/enrichment',
							'javascript/state/step',
							'javascript/state/captcha',
						]
					},
					'javascript/manual-initiation',
				],
			},
		],
		'Tutorials': [
			'tutorials/playlist',
		],
		'Addon plugins': [
			'addons/intro',
			{
				'type': 'category',
				'label': 'Free',
				'items': [
					'addons/free/intro',
				],
			},
			{
				'type': 'category',
				'label': 'Premium',
				'items': [
					'addons/premium/intro',
					{
						'type': 'category',
						'label': 'Computed fields',
						'items': [
							'addons/premium/computed-fields/intro',
							'addons/premium/computed-fields/how-to-use',
							'addons/premium/computed-fields/settings',
							'addons/premium/computed-fields/blocks',
							'addons/premium/computed-fields/data-flow',
						],
					},
				],
			},
			{
				'type': 'category',
				'label': 'Create an addon',
				'items': [
					'addons/create/intro',
					'addons/create/utils-library',
					'addons/create/requirements',
					'addons/create/addon-boilerplate',
				],
			},
		],
	}
};
