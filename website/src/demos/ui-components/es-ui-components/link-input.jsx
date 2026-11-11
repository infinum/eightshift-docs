import { ComponentShowcase } from '../../support/components/component-showcase.jsx';
import { LinkInput } from '@eightshift/ui-components';
import { magicAltFillTransparent, newspaper, troubleshootAlt } from '@eightshift/ui-components/icons';
import { getLinkData, getIconOverrides } from '../../support/es-ui-components/link-input-helpers.jsx';

export function Example1() { return (<><ComponentShowcase defaultValue=''>
	{(data, setData) => (
		<LinkInput
			label='URL'
			url={data}
			onChange={({ url }) => setData(url)}
			fetchSuggestions={getLinkData}
		/>
	)}
</ComponentShowcase></>); }

export function Example2() { return (<><ComponentShowcase defaultValue=''>
	{(data, setData) => (
		<LinkInput
			label='URL'
			url={data}
			onChange={({ url }) => setData(url)}
			fetchSuggestions={getLinkData}
			suggestionTypeIconOverride={getIconOverrides}
			help='Try searching for "demo"'
		/>
	)}
</ComponentShowcase></>); }
