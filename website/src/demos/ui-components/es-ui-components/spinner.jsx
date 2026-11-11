import { ComponentShowcase } from '../../support/components/component-showcase.jsx';
import { Spinner } from '@eightshift/ui-components/icons';

export function Example1() { return (<><ComponentShowcase>
	<Spinner />
</ComponentShowcase></>); }

export function Example2() { return (<><ComponentShowcase>
	<Spinner className='es:size-4 es:text-surface-600' />
</ComponentShowcase></>); }
