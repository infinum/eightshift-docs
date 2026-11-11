import { ComponentShowcase } from '../../support/components/component-showcase.jsx';
import { ResponsivePreview } from '@eightshift/ui-components';
import { globalManifest, responsiveOptions, breakpointNames } from '../../support/es-ui-components/responsive-helpers.jsx';

export function Example1() { return (<><ComponentShowcase
	className='es:text-sm'
	fitWidth
>
	<ResponsivePreview
		value={{
			_default: 'sans',
			_desktopFirst: false,
			desktop: 'serif',
		}}
		options={responsiveOptions}
		breakpoints={breakpointNames}
		breakpointData={globalManifest.globalVariables.breakpoints}
	/>
</ComponentShowcase></>); }
