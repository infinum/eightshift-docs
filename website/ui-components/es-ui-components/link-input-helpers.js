import { icons } from '@eightshift/ui-components/icons';

const linkData = [
	{ label: 'Eightshift', value: 'https://eightshift.com', metadata: { subtype: 'url' } },
	{
		label: 'This is a demo post',
		value: 'https://your-website.com/blog/demo-post',
		metadata: { subtype: 'post' },
	},
	{
		label: 'This is a demo page',
		value: 'https://your-website.com/demo-page',
		metadata: { subtype: 'page' },
	},
	{ label: 'Homepage', value: 'https://your-website.com/', metadata: { subtype: 'page' } },
	{
		label: '2023 top secret report',
		value: 'https://your-website.com/2023-top-secret-report.pdf',
		metadata: { subtype: 'attachment' },
	},
	{
		label: 'Services archive',
		value: 'https://your-website.com/services/',
		metadata: { subtype: 'category' },
	},
	{
		label: 'Sign up form',
		value: 'https://your-website.com/forms/signup',
		metadata: { subtype: 'eightshift-forms' },
	},
	{
		label: 'How to lorem ipsum?',
		value: 'https://your-website.com/help-articles/how-to-lorem-ipsum',
		metadata: { subtype: 'help-article' },
	},
];

export const getLinkData = async (searchTerm) => {
	if (!searchTerm) {
		return linkData;
	}

	const filtered = linkData.filter(
		({ label, value }) =>
			label.toLowerCase().includes(searchTerm.toLowerCase().trim()) ||
			value.toLowerCase().includes(searchTerm.toLowerCase().trim())
	);

	await new Promise((resolve) => setTimeout(resolve, 500));

	if (filtered.length > 0) {
		return filtered;
	}

	return [];
};

export const getIconOverrides = (type) => {
	if (type === 'page') {
		return icons.magicAltFillTransparent;
	}

	if (type === 'post') {
		return icons.newspaper;
	}

	if (type === 'help-article') {
		return icons.troubleshootAlt;
	}

	return null;
}
