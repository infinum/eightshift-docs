import { ComponentShowcase } from '../../support/components/component-showcase.jsx';
import { MatrixAlign } from '@eightshift/ui-components';
import { emptyRect } from '@eightshift/ui-components/icons';

export function Example1() { return (<><ComponentShowcase defaultValue='center center'>
	{(data, setData) => (
		<MatrixAlign
			onChange={setData}
			value={data}
		/>
	)}
</ComponentShowcase></>); }

export function Example2() { return (<><ComponentShowcase defaultValue='top left'>
	{(data, setData) => (
		<MatrixAlign
			onChange={setData}
			value={data}
			size='2x2'
		/>
	)}
</ComponentShowcase></>); }

export function Example3() { return (<><ComponentShowcase defaultValue='center center'>
	{(data, setData) => (
		<MatrixAlign
			onChange={setData}
			value={data}
			label='Alignment'
			icon={emptyRect}
		/>
	)}
</ComponentShowcase></>); }
