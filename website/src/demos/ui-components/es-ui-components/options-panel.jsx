import { ComponentShowcase } from '../../support/components/component-showcase.jsx';
import { OptionsPanel, OptionsPanelSection, OptionsPanelHeader, Button } from '@eightshift/ui-components';
import { save } from '@eightshift/ui-components/icons';

export function Example1() { return (<><ComponentShowcase
	className='es:bg-gray-50 es:w-full'
	fitWidth
>
	<OptionsPanel>
		<OptionsPanelSection>
			<div className='es:w-full es:rounded-lg es:bg-violet-50 es:text-sm es:p-4 es:min-h-40'>
				<span>This is demo content</span>
			</div>
		</OptionsPanelSection>
	</OptionsPanel>
</ComponentShowcase></>); }

export function Example2() { return (<><ComponentShowcase
	className='es:bg-gray-50 es:w-full'
	fitWidth
>
	<OptionsPanel>
		<OptionsPanelSection>
			<div className='es:w-full es:rounded-lg es:bg-violet-50 es:text-sm es:p-4 es:min-h-40'>
				<span>Section 1 content</span>
			</div>
		</OptionsPanelSection>
		<OptionsPanelSection>
			<div className='es:w-full es:rounded-lg es:bg-violet-50 es:text-sm es:p-4 es:min-h-40'>
				<span>Section 2 content</span>
			</div>
		</OptionsPanelSection>
	</OptionsPanel>
</ComponentShowcase></>); }

export function Example3() { return (<><ComponentShowcase
	className='es:bg-gray-50 es:w-full'
	fitWidth
>
	<OptionsPanel
		title='Demo panel title'
		subtitle='Demo panel subtitle'
		help='Demo panel help'
	>
		<OptionsPanelSection>
			<div className='es:w-full es:rounded-lg es:bg-violet-50 es:text-sm es:p-4 es:min-h-40'>
				<span>Section content</span>
			</div>
		</OptionsPanelSection>
	</OptionsPanel>
</ComponentShowcase></>); }

export function Example4() { return (<><ComponentShowcase
	className='es:bg-gray-50 es:w-full'
	fitWidth
>
	<OptionsPanelHeader title='Global settings' />
</ComponentShowcase></>); }

export function Example5() { return (<><ComponentShowcase
	className='es:bg-gray-50 es:w-full'
	fitWidth
>
	<OptionsPanelHeader
		title='Global settings'
		actions={<Button icon={save}>Save</Button>}
	/>
</ComponentShowcase></>); }

export function Example6() { return (<><ComponentShowcase
	className='es:bg-gray-50 es:w-full'
	fitWidth
>
	<OptionsPanelHeader title='Global settings'>Lorem ipsum dolor sit amet.</OptionsPanelHeader>
</ComponentShowcase></>); }
