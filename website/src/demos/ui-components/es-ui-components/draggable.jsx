import { ComponentShowcase } from '../../support/components/component-showcase.jsx';
import { emptyCircle } from '@eightshift/ui-components/icons';
import { DraggableDemo, draggableListDefaultItems } from '../../support/es-ui-components/draggable-list-helpers.jsx';

export function Example1() { return (<><ComponentShowcase defaultValue={draggableListDefaultItems}>
	{(data, setData) => (
		<DraggableDemo
			data={data}
			setData={setData}
		/>
	)}
</ComponentShowcase></>); }
