import { ComponentShowcase } from '../../support/components/component-showcase.jsx';
import { AsyncSelect } from '@eightshift/ui-components';
import { demoGetData } from '../../support/es-ui-components/select-helpers.jsx';

export function Example1() { return (<><ComponentShowcase>
	{(data, setData) => (
		<AsyncSelect
			value={data}
			onChange={setData}
			fetchFunction={demoGetData}
		/>
	)}
</ComponentShowcase></>); }
