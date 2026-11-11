import { IntegrationFilters } from '../../../../../docs/filters';

export function Example1() { return (<><IntegrationFilters name="Calculator" filter="calculator" onlyUse={['overridePostRequestFilter', 'prePostParamsFilter', 'beforeSuccessResponseFilter', 'afterCustomResultOutputProcessFilter']} /></>); }
