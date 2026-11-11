import { IntegrationFilters } from '../../../../../docs/filters';

export function Example1() { return (<><IntegrationFilters name="Mailer" filter="mailer" onlyUse={['prePostParamsFilter', 'beforeSuccessResponseFilter', 'afterCustomResultOutputProcessFilter']} /></>); }
