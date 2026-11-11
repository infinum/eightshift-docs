import { ComponentShowcase } from '../../support/components/component-showcase.jsx';
import { MultiSelect } from '@eightshift/ui-components';
import { demoOptions } from '../../support/es-ui-components/select-helpers.jsx';

export function Example1() { return (<><ComponentShowcase defaultValue={[]}>
	{(data, setData) => (
		<MultiSelect
			value={data}
			onChange={setData}
			options={demoOptions}
		/>
	)}
</ComponentShowcase></>); }
