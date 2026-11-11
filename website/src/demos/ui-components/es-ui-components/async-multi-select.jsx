import { ComponentShowcase } from '../../support/components/component-showcase.jsx';
import { AsyncMultiSelect } from '@eightshift/ui-components';
import { demoGetData } from '../../support/es-ui-components/select-helpers.jsx';

export function Example1() { return (<><ComponentShowcase defaultValue={[]}>
	{(data, setData) => (
		<AsyncMultiSelect
			value={data}
			onChange={setData}
			fetchFunction={demoGetData}
		/>
	)}
</ComponentShowcase></>); }
