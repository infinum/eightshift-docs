import { Fragment } from "react";
import React from 'react';

export default function Container(props) {

  const component = 'shift-container';

  const {
    componentClass,
    size='default',
    children,
  } = props;

  return (
    <Fragment>
      {children &&
        <div className={`
          ${component}
          ${component}__size--${size}
          ${componentClass}__${component}
        `}>
         {children}
        </div>
      }
    </Fragment>
  );
}
