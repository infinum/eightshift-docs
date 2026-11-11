import { ComponentShowcase } from '../../support/components/component-showcase.jsx';
import { ColorSwatch } from '@eightshift/ui-components';

export function Example1() { return (<><ComponentShowcase fitWidth>
	<ColorSwatch color='#0D3636' />
</ComponentShowcase></>); }

export function Example2() { return (<><ComponentShowcase fitWidth>
	<ColorSwatch />
</ComponentShowcase></>); }

export function Example3() { return (<><ComponentShowcase fitWidth>
	<ColorSwatch color='#4433EE80' />
</ComponentShowcase></>); }

export function Example4() { return (<><ComponentShowcase fitWidth>
	<ColorSwatch
		gradient='linear-gradient(#0D3636, rgb(249 250 251))'
		colorName='Linear gradient'
	/>
	<ColorSwatch
		gradient='radial-gradient(#0D3636, rgb(249 250 251))'
		colorName='Radial gradient'
	/>
	<ColorSwatch
		gradient='conic-gradient(#0D3636, rgb(249 250 251))'
		colorName='Conic gradient'
	/>
</ComponentShowcase></>); }

export function Example5() { return (<><ComponentShowcase fitWidth>
	<ColorSwatch
		color='#0D3636'
		colorName='Eightshift dark green'
	/>
</ComponentShowcase></>); }
