const { themes } = require('prism-react-renderer');

const darkTheme = themes.dracula;

module.exports = {
	title: 'Eightshift Development kit',
	tagline:
		'All the tools you need to start building a modern WordPress project, using all the latest front end development tools.',
	url: 'https://eightshift.com',
	baseUrl: '/',
	favicon: '/img/favicon.png',
	organizationName: 'infinum',
	projectName: 'eightshift-docs',
	staticDirectories: ['static'],
	scripts: [
		{
			src: 'https://buttons.github.io/buttons.js',
			async: true,
			defer: true,
		},
	],
	themeConfig: {
		navbar: {
			logo: {
				alt: 'Eightshift DevKit Logo',
				src: '/img/logo.svg',
			},
			items: [
				{
					to: 'docs/welcome',
					activeBasePath: 'docs',
					label: 'DevKit',
					position: 'right',
				},
				{
					to: 'forms/welcome',
					activeBasePath: 'forms',
					label: 'Forms',
					position: 'right',
				},
				{
					to: '/components/welcome',
					activeBasePath: 'components',
					label: 'Components',
					position: 'right',
				},
				{
					to: '/playground/',
					activeBasePath: 'playground',
					label: 'Playground',
					position: 'right',
				},
				{
					to: '/blog',
					activeBasePath: 'blog',
					label: 'Blog',
					position: 'right',
				},
				{
					to: '/showcase',
					activeBasePath: 'showcase',
					label: 'Showcase',
					position: 'right',
				},
			],
		},
		footer: {
			links: [
				{
					title: 'Community',
					items: [
						{
							label: 'Facebook',
							href: 'https://facebook.com/infinumcom',
							icon: 'facebook',
						},
						{
							label: 'Instagram',
							href: 'https://instagram.com/infinumcom/',
							icon: 'instagram',
						},
						{
							label: 'Twitter',
							href: 'https://twitter.com/infinum',
							icon: 'twitter',
						},
						{
							label: 'Clutch',
							href: 'https://clutch.co/profile/infinum',
							icon: 'clutch',
						},
						{
							label: 'Dribbble',
							href: 'https://dribbble.com/infinum',
							icon: 'dribbble',
						},
						{
							label: 'LinkedIn',
							href: 'https://linkedin.com/company/infinum/',
							icon: 'linkedin',
						},
					],
				},
			],
			copyright: 'Made with ❤️ by Infinum team.',
		},
		algolia: {
			appId: 'CWB1S6U3C4',
			apiKey: 'cbae3fc769aee256328548eff1e91c1c',
			indexName: 'infinum_eightshift',
			startUrls: [
				'https://eightshift.com',
				'https://eightshift.com/docs',
				'https://eightshift.com/forms',
			],
			contextualSearch: false,
		},
		prism: {
			theme: darkTheme,
			additionalLanguages: ['php', 'scss', 'css', 'diff'],
		},
		colorMode: {
			defaultMode: 'light',
			disableSwitch: true,
			respectPrefersColorScheme: false,
		},
		docs: {
			sidebar: {
				autoCollapseCategories: true,
			},
		},
		trailingSlash: false,
	},
	presets: [
		[
			'@docusaurus/preset-classic',
			{
				docs: {
					sidebarPath: require.resolve('./sidebars.js'),
					sidebarCollapsible: true,
				},
				gtag: {
					trackingID: 'GTM-P5GG5DH',
					anonymizeIP: true,
				},
				theme: {
					customCss: [
						require.resolve('./src/theme/styles.css'),
						require.resolve('@infinum/docusaurus-theme/dist/style.css'),
					],
				},
				blog: {
					blogTitle: 'Tutorials and articles about Eightshift development kit',
					blogDescription:
						'Tutorials and articles about Eightshift development kit',
					blogSidebarTitle: 'Latest posts',
					showReadingTime: true,
					postsPerPage: 9,
				},
				sitemap: {
					changefreq: 'weekly',
					priority: 0.5,
				},
			},
		],
	],
	plugins: [
		[
			'@docusaurus/plugin-content-docs',
			{
				id: 'forms',
				path: 'forms',
				routeBasePath: 'forms',
				sidebarPath: require.resolve('./sidebars-forms.js'),
			},
		],
		[
			'@docusaurus/plugin-content-docs',
			{
				id: 'ui-components',
				path: 'ui-components',
				routeBasePath: 'components',
				sidebarPath: require.resolve('./sidebars-components.js'),
			},
		],
		'es-text-loader',
	],
	customFields: {
		keywords: [
			'wordpress tools',
			'development tools',
			'wordpress project',
			'Gutenberg blocks',
			'development kit',
			'wordpress kit',
			'devkit',
		],
		image: 'img-why-boilerplate@2x.png',
	},
};
