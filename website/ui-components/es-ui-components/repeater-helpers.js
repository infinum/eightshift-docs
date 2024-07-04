import { Repeater, RepeaterItem, InputField, Toggle } from '@eightshift/ui-components';
import { icons } from '@eightshift/ui-components/icons';

export const RepeaterDemo = ({ data, setData, ...rest }) => {
	return (
		<Repeater
			label='Items'
			items={data}
			onChange={setData}
			addDefaultItem={{
				title: `New item ${data.length + 1}`,
			}}
			{...rest}
		>
			{(item) => {
				const { title, toggledOption, updateData, itemIndex } = item;

				return (
					<RepeaterItem
						label={title ?? `New item ${itemIndex + 1}`}
						icon={icons.magicAlt}
					>
						<Toggle
							icon={icons.emptyCircle}
							label='Toggle me'
							checked={toggledOption}
							onChange={(value) => updateData({ toggledOption: value })}
						/>

						<InputField
							label='Title'
							type='text'
							value={title}
							onChange={(value) => updateData({ title: value })}
						/>
					</RepeaterItem>
				);
			}}
		</Repeater>
	);
};
