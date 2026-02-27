export const demoOptions = [
	{
		label: 'Item 1',
		value: 'item-1',
	},
	{
		label: 'Item 2',
		value: 'item-2',
	},
	{
		label: 'Item 3',
		value: 'item-3',
		icon: 'loader',
	},
	{
		label: 'Item 4 with veeeery very long label',
		value: 'item-4',
	},
	{
		label: 'Item 5',
		value: 'item-5',
		subtitle: 'The fifth item.'
	},
	{
		label: 'Item 6',
		value: 'item-6',
	},
];

export const demoGetData = (inputValue) => {
	const filterData = ({ label }) => label.toLowerCase().includes(inputValue.toLowerCase());

	return new Promise((resolve) => {
		setTimeout(() => {
			if (!inputValue) {
				resolve(demoOptions.slice(0, 3));
			}

			resolve(demoOptions.filter(filterData));
		}, 500);
	});
};
