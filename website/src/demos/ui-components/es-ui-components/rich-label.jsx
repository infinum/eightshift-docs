import { ComponentShowcase } from '../../support/components/component-showcase.jsx';
import { RichLabel } from '@eightshift/ui-components';
import { emptyCircle, solidCircleFilled } from '@eightshift/ui-components/icons';
import { globalManifest, responsiveOptions, breakpointNames } from '../../support/es-ui-components/responsive-helpers.jsx';

export function Example1() { return (<><ComponentShowcase fitWidth>
	<RichLabel
		label='Label ipsum dolor sit amet'
		subtitle='Subtitle ipsum dolor sit amet'
		icon={emptyCircle}
	/>
</ComponentShowcase></>); }

export function Example2() { return (<><ComponentShowcase>
	<RichLabel
		label='Label ipsum dolor sit amet'
		subtitle='Subtitle ipsum dolor sit amet'
		icon={emptyCircle}
		fullWidth
	/>
</ComponentShowcase></>); }

export function Example3() { return (<><ComponentShowcase className='es:text-red-500'>
	<RichLabel
		label='Label ipsum dolor sit amet'
		subtitle='Subtitle ipsum dolor sit amet'
		icon={solidCircleFilled}
	/>
</ComponentShowcase></>); }

export function Example4() { return (<><ComponentShowcase className='es:text-red-500'>
	<RichLabel
		label='Label ipsum dolor sit amet'
		subtitle='Subtitle ipsum dolor sit amet'
		icon={solidCircleFilled}

    	noColor
    />

</ComponentShowcase></>); }
