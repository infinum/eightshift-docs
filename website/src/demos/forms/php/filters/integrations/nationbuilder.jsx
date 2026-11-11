import { IntegrationFilters } from '../../../../../docs/filters';

export function Example1() { return (<><IntegrationFilters name="NationBuilder" filter="nationbuilder" onlyUse={['overridePostRequestFilter', 'prePostParamsFilter', 'beforeSuccessResponseFilter', 'afterCustomResultOutputProcessFilter']} /></>); }
