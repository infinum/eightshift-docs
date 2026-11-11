import { IntegrationFilters } from '../../../../../docs/filters';

export function Example1() { return (<><IntegrationFilters name="Paycek" filter="paycek" onlyUse={['prePostParamsFilter', 'beforeSuccessResponseFilter', 'afterCustomResultOutputProcessFilter']} /></>); }
