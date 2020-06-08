import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function Arrow(props) {

  const component = 'shift-arrow';

  const {
    componentClass,
  } = props;

  return (
    <img className={` ${component} ${componentClass}__${component}`} src={useBaseUrl('img/ic-arrow.svg')} />
  );
}
