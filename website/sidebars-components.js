module.exports = {
	components: [
		'welcome',
		{
			type: 'category',
			label: 'Eightshift UI components',
			items: [
				'es-ui-components/getting-started',
				{
					type: 'category',
					label: 'Icons',
					items: ['es-ui-components/ui-icons', 'es-ui-components/block-icons'],
				},
				'es-ui-components/base-control',
				{
					type: 'category',
					label: 'Simple components',
					items: [
						'es-ui-components/rich-label',
						'es-ui-components/button',
						'es-ui-components/notice',
						'es-ui-components/menu',
						'es-ui-components/tooltip',
						'es-ui-components/number-picker',
						'es-ui-components/placeholders',
						'es-ui-components/link-input',
						'es-ui-components/input-field',
						'es-ui-components/slider',
					],
				},
				{
					type: 'category',
					label: 'Toggles and toggle-related',
					items: [
						'es-ui-components/toggle-switch',
						'es-ui-components/checkbox',
						'es-ui-components/radio-button',
						'es-ui-components/toggle-button',
						'es-ui-components/component-toggle',
					],
				},
				{
					type: 'category',
					label: 'Layout components',
					items: [
						'es-ui-components/spacer',
						'es-ui-components/stacks',
						'es-ui-components/tabs',
						'es-ui-components/repeater',
						'es-ui-components/draggable-list',
					],
				},
				{
					type: 'category',
					label: 'Reveal components',
					items: [
						'es-ui-components/triggered-popover',
						'es-ui-components/animated-visibility',
						'es-ui-components/expandable',
					],
				},
				{
					type: 'category',
					label: 'Responsive components',
					items: [
						'es-ui-components/responsive',
						'es-ui-components/breakpoint-preview',
						'es-ui-components/responsive-preview',
					],
				},
				{
					type: 'category',
					label: 'Selection',
					items: [
						'es-ui-components/column-config-slider',
						'es-ui-components/matrix-align',
						{
							type: 'category',
							label: 'Select',
							items: [
								'es-ui-components/select',
								'es-ui-components/multi-select',
								'es-ui-components/async-select',
								'es-ui-components/async-multi-select',
								'es-ui-components/select-customization',
							],
						},
					],
				},

				{
					type: 'category',
					label: 'Colors and gradients',
					items: [
						'es-ui-components/color-picker',
						'es-ui-components/solid-color-picker',
						'es-ui-components/gradient-editor',
						'es-ui-components/color-swatch',
					],
				},
				{
					type: 'category',
					label: 'Panels',
					items: ['es-ui-components/container-panel', 'es-ui-components/options-panel'],
				},
				'es-ui-components/migrations',
			],
		},
		{
			type: 'category',
			label: 'Frontend libs components',
			items: [
				'fe-libs-components/introduction'
			],
		},
		'legacy-component-docs',
	],
};
