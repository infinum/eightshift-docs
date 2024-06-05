module.exports = {
	docs: {
		'Getting Started': [
			'welcome',
			'eightshift-libs',
			'eightshift-frontend-libs',
			'requirements',
			'versions',
			'theme',
			'plugin',
		],
		'Basics': [
			'basics/basics-intro',
			'basics/wp-cli',
			'basics/architecture-concepts',
			{
				'type': 'category',
				'label': 'Backend',
				'items': [
					'basics/backend',
					'basics/namespaces',
					'basics/extending-classes',
					'basics/autowiring',
					'basics/example-class',
					'basics/manifest',
					{
						'type': 'category',
						'label': 'Rest',
						'items': [
							'basics/rest',
							'basics/rest-field',
							'basics/rest-route',
						]
					},
				]
			},
			{
				'type': 'category',
				'label': 'Frontend',
				'items': [
					'basics/frontend',
					'basics/webpack',
					'basics/library',
					'basics/global-settings',
					'basics/writing-styles',
					'basics/fonts',
					'basics/browser-sync',
					'basics/dynamic-import',
				]
			},
			{
				'type': 'category',
				'label': 'Blocks',
				'items': [
					'basics/blocks',
					'basics/blocks-important',
					'basics/blocks-faq',
					'basics/blocks-registration',
					'basics/blocks-structure',
					'basics/blocks-global-manifest',
					'basics/block-structure',
					'basics/blocks-component-structure',
					'basics/block-manifest',
					'basics/blocks-component-manifest',
					'basics/blocks-attributes',
					'basics/blocks-component-in-block',
					'basics/blocks-wrapper',
					'basics/blocks-variations',
					'basics/blocks-patterns',
					'basics/blocks-transforms',
					'basics/blocks-hooks',
					'basics/blocks-special-use-cases',
					'basics/blocks-reusable',
					'basics/blocks-styles',
					'basics/blocks-storybook',
				]
			},
			{
				'type': 'category',
				'label': 'Helpers',
				'items': [
					'basics/helpers',
					'basics/helpers-javascript',
					'basics/helpers-scss',
					'basics/helpers-php',
				]
			},
			'basics/tips-tricks',
		],
		'Tutorials': [
			'tutorials/intro',
		],
		'Migrations': [
			'migrations/10-11',
			'migrations/9-10',
			'migrations/8-9',
			'migrations/7-8',
			'migrations/6-7',
			'migrations/5-6',
		],
		'Additional Libraries': [
			'additional-libraries/boilerplate',
			'additional-libraries/boilerplate-plugin',
			'additional-libraries/frontend-libs',
			'additional-libraries/libs',
			'additional-libraries/forms',
			'additional-libraries/docs',
			'additional-libraries/coding-standards',
			'additional-libraries/storybook',
			'additional-libraries/stubs',
		],
		'Legacy': [
			{
				'type': 'category',
				'label': 'v8',
				'items': [
					'legacy/v8/versions',
					{
						'type': 'category',
						'label': 'Basics',
						'items': [
							'legacy/v8/basics/basics-intro',
							'legacy/v8/basics/wp-cli',
							'legacy/v8/basics/architecture-concepts',
							{
								'type': 'category',
								'label': 'Backend',
								'items': [
									'legacy/v8/basics/backend',
									'legacy/v8/basics/namespaces',
									'legacy/v8/basics/extending-classes',
									'legacy/v8/basics/autowiring',
									'legacy/v8/basics/example-class',
									'legacy/v8/basics/manifest',
									{
										'type': 'category',
										'label': 'Rest',
										'items': [
											'legacy/v8/basics/rest',
											'legacy/v8/basics/rest-field',
											'legacy/v8/basics/rest-route',
										]
									},
								]
							},
							{
								'type': 'category',
								'label': 'Frontend',
								'items': [
									'legacy/v8/basics/frontend',
									'legacy/v8/basics/webpack',
									'legacy/v8/basics/library',
									'legacy/v8/basics/global-settings',
									'legacy/v8/basics/writing-styles',
									'legacy/v8/basics/fonts',
									'legacy/v8/basics/browser-sync',
									'legacy/v8/basics/dynamic-import',
								]
							},
							{
								'type': 'category',
								'label': 'Blocks',
								'items': [
									'legacy/v8/basics/blocks',
									'legacy/v8/basics/blocks-important',
									'legacy/v8/basics/blocks-faq',
									'legacy/v8/basics/blocks-registration',
									'legacy/v8/basics/blocks-structure',
									'legacy/v8/basics/blocks-global-manifest',
									'legacy/v8/basics/block-structure',
									'legacy/v8/basics/blocks-component-structure',
									'legacy/v8/basics/block-manifest',
									'legacy/v8/basics/blocks-component-manifest',
									'legacy/v8/basics/blocks-attributes',
									'legacy/v8/basics/blocks-component-in-block',
									'legacy/v8/basics/blocks-wrapper',
									'legacy/v8/basics/blocks-variations',
									'legacy/v8/basics/blocks-patterns',
									'legacy/v8/basics/blocks-transforms',
									'legacy/v8/basics/blocks-hooks',
									'legacy/v8/basics/blocks-special-use-cases',
									'legacy/v8/basics/blocks-reusable',
									'legacy/v8/basics/blocks-styles',
									'legacy/v8/basics/blocks-storybook',
								]
							},
							{
								'type': 'category',
								'label': 'Helpers',
								'items': [
									'legacy/v8/basics/helpers',
									'legacy/v8/basics/helpers-javascript',
									'legacy/v8/basics/helpers-scss',
									'legacy/v8/basics/helpers-php',
								]
							},
							'legacy/v8/basics/tips-tricks',
						],
					}
				]
			},
			{
				'type': 'category',
				'label': 'v7',
				'items': [
					'legacy/v7/versions',
					{
						'type': 'category',
						'label': 'Basics',
						'items': [
							'legacy/v7/basics/basics-intro',
							'legacy/v7/basics/wp-cli',
							'legacy/v7/basics/architecture-concepts',
							{
								'type': 'category',
								'label': 'Backend',
								'items': [
									'legacy/v7/basics/backend',
									'legacy/v7/basics/namespaces',
									'legacy/v7/basics/extending-classes',
									'legacy/v7/basics/autowiring',
									'legacy/v7/basics/example-class',
									'legacy/v7/basics/manifest',
									{
										'type': 'category',
										'label': 'Rest',
										'items': [
											'legacy/v7/basics/rest',
											'legacy/v7/basics/rest-field',
											'legacy/v7/basics/rest-route',
										]
									},
								]
							},
							{
								'type': 'category',
								'label': 'Frontend',
								'items': [
									'legacy/v7/basics/frontend',
									'legacy/v7/basics/webpack',
									'legacy/v7/basics/library',
									'legacy/v7/basics/global-settings',
									'legacy/v7/basics/writing-styles',
									'legacy/v7/basics/fonts',
									'legacy/v7/basics/browser-sync',
									'legacy/v7/basics/dynamic-import',
								]
							},
							{
								'type': 'category',
								'label': 'Blocks',
								'items': [
									'legacy/v7/basics/blocks',
									'legacy/v7/basics/blocks-important',
									'legacy/v7/basics/blocks-faq',
									'legacy/v7/basics/blocks-registration',
									'legacy/v7/basics/blocks-structure',
									'legacy/v7/basics/blocks-global-manifest',
									'legacy/v7/basics/block-structure',
									'legacy/v7/basics/blocks-component-structure',
									'legacy/v7/basics/block-manifest',
									'legacy/v7/basics/blocks-component-manifest',
									'legacy/v7/basics/blocks-attributes',
									'legacy/v7/basics/blocks-component-in-block',
									'legacy/v7/basics/blocks-wrapper',
									'legacy/v7/basics/blocks-variations',
									'legacy/v7/basics/blocks-patterns',
									'legacy/v7/basics/blocks-transforms',
									'legacy/v7/basics/blocks-hooks',
									'legacy/v7/basics/blocks-special-use-cases',
									'legacy/v7/basics/blocks-reusable',
									'legacy/v7/basics/blocks-styles',
									'legacy/v7/basics/blocks-storybook',
								]
							},
							{
								'type': 'category',
								'label': 'Helpers',
								'items': [
									'legacy/v7/basics/helpers',
									'legacy/v7/basics/helpers-javascript',
									'legacy/v7/basics/helpers-scss',
									'legacy/v7/basics/helpers-php',
								]
							},
							'legacy/v7/basics/tips-tricks',
						],
					}
				]
			},
			{
				'type': 'category',
				'label': 'v6',
				'items': [
					'legacy/v6/versions',
					{
						'type': 'category',
						'label': 'Basics',
						'items': [
							'legacy/v6/basics/basics-intro',
							'legacy/v6/basics/wp-cli',
							'legacy/v6/basics/architecture-concepts',
							{
								'type': 'category',
								'label': 'Backend',
								'items': [
									'legacy/v6/basics/backend',
									'legacy/v6/basics/namespaces',
									'legacy/v6/basics/extending-classes',
									'legacy/v6/basics/autowiring',
									'legacy/v6/basics/example-class',
									'legacy/v6/basics/manifest',
									{
										'type': 'category',
										'label': 'Rest',
										'items': [
											'legacy/v6/basics/rest',
											'legacy/v6/basics/rest-field',
											'legacy/v6/basics/rest-route',
										]
									},
								]
							},
							{
								'type': 'category',
								'label': 'Frontend',
								'items': [
									'legacy/v6/basics/frontend',
									'legacy/v6/basics/webpack',
									'legacy/v6/basics/library',
									'legacy/v6/basics/global-settings',
									'legacy/v6/basics/writing-styles',
									'legacy/v6/basics/fonts',
									'legacy/v6/basics/browser-sync',
									'legacy/v6/basics/dynamic-import',
								]
							},
							{
								'type': 'category',
								'label': 'Blocks',
								'items': [
									'legacy/v6/basics/blocks',
									'legacy/v6/basics/blocks-important',
									'legacy/v6/basics/blocks-faq',
									'legacy/v6/basics/blocks-registration',
									'legacy/v6/basics/blocks-structure',
									'legacy/v6/basics/blocks-global-manifest',
									'legacy/v6/basics/block-structure',
									'legacy/v6/basics/blocks-component-structure',
									'legacy/v6/basics/block-manifest',
									'legacy/v6/basics/blocks-component-manifest',
									'legacy/v6/basics/blocks-attributes',
									'legacy/v6/basics/blocks-component-in-block',
									'legacy/v6/basics/blocks-wrapper',
									'legacy/v6/basics/blocks-variations',
									'legacy/v6/basics/blocks-patterns',
									'legacy/v6/basics/blocks-transforms',
									'legacy/v6/basics/blocks-hooks',
									'legacy/v6/basics/blocks-special-use-cases',
									'legacy/v6/basics/blocks-reusable',
									'legacy/v6/basics/blocks-styles',
									'legacy/v6/basics/blocks-storybook',
								]
							},
							{
								'type': 'category',
								'label': 'Helpers',
								'items': [
									'legacy/v6/basics/helpers',
									'legacy/v6/basics/helpers-javascript',
									'legacy/v6/basics/helpers-scss',
									'legacy/v6/basics/helpers-php',
								]
							},
							'legacy/v6/basics/tips-tricks',
						],
					}
				],
			},
			{
				'type': 'category',
				'label': 'v5',
				'items': [
					'legacy/v5/versions',
					{
						'type': 'category',
						'label': 'Basics',
						'items': [
							'legacy/v5/basics/basics-intro',
							'legacy/v5/basics/wp-cli',
							{
								'type': 'category',
								'label': 'Backend Stuff',
								'items': [
									'legacy/v5/basics/backend',
									'legacy/v5/basics/namespaces',
									'legacy/v5/basics/extending-classes',
									'legacy/v5/basics/autowiring',
									'legacy/v5/basics/example-class',
									'legacy/v5/basics/the-structure',
									'legacy/v5/basics/manifest',
									{
										'type': 'category',
										'label': 'Rest',
										'items': [
											'legacy/v5/basics/rest',
											'legacy/v5/basics/rest-field',
											'legacy/v5/basics/rest-route',
										]
									},
								]
							},
							{
								'type': 'category',
								'label': 'Frontend Stuff',
								'items': [
									'legacy/v5/basics/frontend',
									'legacy/v5/basics/webpack',
									'legacy/v5/basics/library',
									'legacy/v5/basics/global-settings',
									'legacy/v5/basics/writing-styles',
									'legacy/v5/basics/fonts',
									'legacy/v5/basics/browser-sync',
									'legacy/v5/basics/dynamic-import',
								]
							},
							{
								'type': 'category',
								'label': 'Blocks',
								'items': [
									'legacy/v5/basics/blocks',
									'legacy/v5/basics/blocks-important',
									'legacy/v5/basics/blocks-intro',
									'legacy/v5/basics/blocks-registration',
									'legacy/v5/basics/blocks-structure',
									'legacy/v5/basics/blocks-global-manifest',
									'legacy/v5/basics/block-structure',
									'legacy/v5/basics/blocks-component-structure',
									'legacy/v5/basics/block-manifest',
									'legacy/v5/basics/blocks-component-manifest',
									'legacy/v5/basics/blocks-attributes',
									'legacy/v5/basics/blocks-component-in-block',
									'legacy/v5/basics/blocks-wrapper',
									'legacy/v5/basics/blocks-variations',
									'legacy/v5/basics/blocks-patterns',
									'legacy/v5/basics/blocks-transforms',
									'legacy/v5/basics/blocks-hooks',
									'legacy/v5/basics/blocks-special-use-cases',
									'legacy/v5/basics/blocks-reusable',
									'legacy/v5/basics/blocks-styles',
									'legacy/v5/basics/blocks-storybook',
								]
							},
							{
								'type': 'category',
								'label': 'Helpers',
								'items': [
									'legacy/v5/basics/helpers',
									'legacy/v5/basics/helpers-javascript',
									'legacy/v5/basics/helpers-scss',
									'legacy/v5/basics/helpers-php',
								]
							},
						]
					},
				]
			},
			{
				'type': 'category',
				'label': 'v4',
				'items': [
					'legacy/v4/versions',
					{
						'type': 'category',
						'label': 'Guides',
						'items': [
							'legacy/v4/guides/extending-classes',
							'legacy/v4/guides/di-container',
							'legacy/v4/guides/config',
							'legacy/v4/guides/manifest',
							'legacy/v4/guides/enqueue',
							'legacy/v4/guides/post-type',
							'legacy/v4/guides/taxonomy',
							{
								'type': 'category',
								'label': 'Blocks',
								'items': [
									'legacy/v4/guides/blocks-registration',
									'legacy/v4/guides/blocks-structure',
									'legacy/v4/guides/blocks-structure-block-item',
									'legacy/v4/guides/blocks-structure-component',
									'legacy/v4/guides/blocks-structure-manifest',
									'legacy/v4/guides/blocks-block-from-components',
									'legacy/v4/guides/blocks-render-block-view-helper',
									'legacy/v4/guides/blocks-get-actions-helper',
									'legacy/v4/guides/blocks-filter-block-attributes-override'
								]
							},
							'legacy/v4/guides/i18n',
							'legacy/v4/guides/media',
							'legacy/v4/guides/menu',
							{
								'type': 'category',
								'label': 'Rest API',
								'items': [
									'legacy/v4/guides/rest-intro',
									'legacy/v4/guides/rest-field-example',
									'legacy/v4/guides/rest-route-example'
								]
							},
							{
								'type': 'category',
								'label': 'Listing Columns',
								'items': [
									'legacy/v4/guides/columns-post-type',
									'legacy/v4/guides/columns-taxonomy',
									'legacy/v4/guides/columns-user'
								]
							},
							'legacy/v4/guides/login',
							{
								'type': 'category',
								'label': 'Fonts',
								'items': [
									'legacy/v4/guides/fonts-custom',
									'legacy/v4/guides/fonts-icon'
								]
							}
						],
					},
					{
						'type': 'category',
						'label': 'Advanced',
						'items': [
							'legacy/v4/advanced/docs-sass',
							'legacy/v4/advanced/webpack',
							'legacy/v4/advanced/browsersync',
							{
								'type': 'category',
								'label': 'Helpers',
								'items': [
									'legacy/v4/advanced/helpers-aliases-helpers',
									'legacy/v4/advanced/helpers-object-helpers',
									'legacy/v4/advanced/helpers-components-helpers',
									'legacy/v4/advanced/helpers-shortcode-helpers',
									'legacy/v4/advanced/helpers-error-logger-helpers'
								]
							},
							{
								'type': 'category',
								'label': 'Custom Components',
								'items': [
									'legacy/v4/advanced/components-color-palette',
									'legacy/v4/advanced/components-heading-level'
								]
							},
						]
					},
				]
			},
		],
		'Crash Course': [
			'crash-course/intro',
		],
	},
};
