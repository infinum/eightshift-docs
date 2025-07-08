import {
	DraggableList,
	DraggableListItem,
	Switch,
	Draggable,
	DraggableHandle,
	RichLabel,
	VStack,
	HStack,
} from '@eightshift/ui-components';
import { icons } from '@eightshift/ui-components/icons';

export const draggableListDefaultItems = [
	{
		toggle: false,
		title: 'Item 1',
		icon: icons.num1Circle,
	},
	{
		toggle: true,
		title: 'Item 2',
		icon: icons.num2Circle,
	},
	{
		toggle: true,
		icon: icons.num3Circle,
	},
];

export const DraggableListDemo = ({ data, setData, ...rest }) => {
	return (
		<DraggableList
			items={data}
			onChange={setData}
			{...rest}
		>
			{(item) => {
				const { toggle, title, icon, updateData } = item;

				return (
					<DraggableListItem
						label={title ?? 'New item'}
						icon={icon ?? icons.emptyCircle}
					>
						<Switch
							aria-label='Title'
							checked={toggle}
							onChange={(value) => updateData({ toggle: value })}
						/>
					</DraggableListItem>
				);
			}}
		</DraggableList>
	);
};

export const DraggableDemo = ({ data, setData, ...rest }) => {
	return (
		<Draggable
			items={data}
			onChange={setData}
			className='es:grid es:grid-cols-2'
			{...rest}
		>
			{(item) => {
				const { toggle, title, icon, updateData } = item;

				return (
					<VStack className='es:border es:border-secondary-300 es:p-4 es:rounded-xl es:m-0.5'>
						<HStack>
							<DraggableHandle />

							<RichLabel
								icon={icon ?? icons.emptyCircle}
								label={title ?? 'New item'}
							/>
						</HStack>

						<Switch
							aria-label='Title'
							checked={toggle}
							onChange={(value) => updateData({ toggle: value })}
						/>
					</VStack>
				);
			}}
		</Draggable>
	);
};
