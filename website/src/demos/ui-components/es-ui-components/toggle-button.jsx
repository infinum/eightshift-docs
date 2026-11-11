import { ComponentShowcase } from '../../support/components/component-showcase.jsx';
import { ToggleButton } from '@eightshift/ui-components';

export function Example1() { return (<><ComponentShowcase defaultValue={false}>
	{(data, setData) => {
		return (
			<ToggleButton
				selected={data}
				onChange={setData}
			>
				Toggle me
			</ToggleButton>
		);
	}}
</ComponentShowcase></>); }
