import { IntegrationFilters } from '../../../../../docs/filters';

export function Example1() { return (<><IntegrationFilters
	name='Pardot'
	filter='pardot'
	onlyUse={[
		'overridePostRequestFilter',
		'prePostParamsFilter',
		'beforeSuccessResponseFilter',
		'afterCustomResultOutputProcessFilter',
	]}
/></>); }
