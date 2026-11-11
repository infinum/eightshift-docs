import { ComponentShowcase } from '../../support/components/component-showcase.jsx';
import { Button, Tooltip, DecorativeTooltip, HStack } from '@eightshift/ui-components';

export function Example1() { return (<><ComponentShowcase>
	<Tooltip text='This is a tooltip'>
		<Button>Hover me</Button>
	</Tooltip>
</ComponentShowcase></>); }

export function Example2() { return (<><ComponentShowcase>
	<HStack>
		<Tooltip text='Bet you did not...'>
			<Button>Hello</Button>
		</Tooltip>
		<Tooltip text='expect an Adele song...'>
			<Button>from the</Button>
		</Tooltip>
		<Tooltip text='in the examples?'>
			<Button>other side</Button>
		</Tooltip>
	</HStack>
</ComponentShowcase></>); }

export function Example3() { return (<><ComponentShowcase fitWidth>
	<DecorativeTooltip text='This is a tooltip'>
		<p>This is a paragraph with a tooltip</p>
	</DecorativeTooltip>
</ComponentShowcase></>); }

export function Example4() { return (<><ComponentShowcase>
	<HStack>
		<Tooltip
			text='This is a tooltip'
			theme='dark'
		>
			<Button>Dark theme (default)</Button>
		</Tooltip>
		<Tooltip
			text='This is a tooltip'
			theme='light'
		>
			<Button>Light theme</Button>
		</Tooltip>
	</HStack>
</ComponentShowcase></>); }

export function Example5() { return (<><ComponentShowcase>
	<HStack>
		<Tooltip text='This is a tooltip'>
			<Button>No arrow (default)</Button>
		</Tooltip>
		<Tooltip
			text='This is a tooltip'
			arrow
		>
			<Button>Arrow</Button>
		</Tooltip>
	</HStack>
</ComponentShowcase></>); }

export function Example6() { return (<><ComponentShowcase>
	<HStack>
		<Tooltip
			text='This is a tooltip'
			placement='right'
		>
			<Button>Tooltip on the right</Button>
		</Tooltip>
	</HStack>
</ComponentShowcase></>); }
