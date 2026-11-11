import { ComponentShowcase } from '../../support/components/component-showcase.jsx';
import { GradientEditor } from '@eightshift/ui-components';

export function Example1() { return (<><ComponentShowcase defaultValue='linear-gradient(30deg, #0D3636, #0D363600)'>
	{(data, setData) => {
		return (
			<GradientEditor
				value={data}
				onChange={setData}
				aria-label='Gradient editor'
			/>
		);
	}}
</ComponentShowcase></>); }
