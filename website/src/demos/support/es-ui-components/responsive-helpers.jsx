export const responsiveOptions = [
	{
		label: 'Sans',
		value: 'sans',
	},
	{
		label: 'Serif',
		value: 'serif',
	},
	{
		label: 'Monospace',
		value: 'mono',
	},
];

export const globalManifest = {
	globalVariables: {
		breakpoints: {
			mobile: 480,
			tablet: 960,
			desktop: 1440,
			large: 1920,
		},
	},
};

export const globalManifest2 = {
	globalVariables: {
		breakpoints: {
			sm: 480,
			md: 960,
			lg: 1440,
			xl: 1920,
		},
	},
};

export const breakpointNames = ['mobile', 'tablet', 'desktop', 'large'];

export const responsiveLegacyAttr = {
	large: 'myAttrLarge',
	desktop: 'myAttrDesktop',
	tablet: 'myAttrTablet',
	mobile: 'myAttrMobile',
};
