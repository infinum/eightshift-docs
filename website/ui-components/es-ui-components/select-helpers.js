import {
	RSOption,
	RSSingleValue,
	RSMultiValue,
	RSDropdownIndicator,
	RSMultiValueRemove,
	RSClearIndicator,
	RSMultiValueContainer,
} from '@eightshift/ui-components';
import { icons } from '@eightshift/ui-components/icons';

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
	},
	{
		label: 'Item 4 with veeeery very long label',
		value: 'item-4',
	},
	{
		label: 'Item 5',
		value: 'item-5',
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
		}, 1500);
	});
};

export const CustomDropdownIndicator = (props) => {
	return (
		<RSDropdownIndicator {...props}>
			<div className='[&>svg]:es:text-red-500'>
				{props.selectProps.menuIsOpen ? icons.arrowUpCircleAlt : icons.arrowDownCircleAlt}
			</div>
		</RSDropdownIndicator>
	);
};

export const CustomMenuOption = (props) => (
	<RSOption {...props}>
		<>
			<span role='img'>{icons.emptyCircle}</span>
			<span>{props.label}</span>
		</>
	</RSOption>
);

export const CustomClearIndicator = (props) => {
	return <RSClearIndicator {...props}>{icons.errorCircleFill}</RSClearIndicator>;
};

export const CustomValueDisplay = (props) => {
	return (
		<RSSingleValue {...props}>
			<span className='es:text-red-500 es:font-mono es:font-semibold'>
				{props.children}
			</span>
		</RSSingleValue>
	);
};

export const CustomMultiValueRemoveButton = (props) => {
	return <RSMultiValueRemove {...props}>{icons.remove}</RSMultiValueRemove>;
};

export const CustomMultiValueDisplay = (props) => {
	const colors = ['es:bg-red-500', 'es:bg-blue-500', 'es:bg-green-500', 'es:bg-yellow-500', 'es:bg-slate-900'];
	const colorIndex = props.options.findIndex((option) => option.value === props.data.value) % colors.length;

	return (
		<RSMultiValue {...props}>
			<span className={`${colors[colorIndex]} es:font-semibold es:p-1 es:text-white`}>{props.children}</span>
		</RSMultiValue>
	);
};
