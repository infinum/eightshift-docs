import { IntegrationFilters } from '../../../../../docs/filters';

export function Example1() { return (<><IntegrationFilters name="Jira" filter="jira" onlyUse={['overridePostRequestFilter', 'prePostParamsFilter', 'beforeSuccessResponseFilter', 'afterCustomResultOutputProcessFilter']} /></>); }
