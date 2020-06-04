import { Fragment } from "react";
import React from 'react';

export default function Heading(props) {

  const component = 'shift-heading';

  const {
    componentClass,
    title,
    subtitle,
    align,
  } = props;

  return (
    <Fragment>
      {title &&
        <div className={`
          ${component}
          ${componentClass}__${component}
          ${component}__align--${align}
        `}>
          {title &&
            <div className={`${component}__title`}>
              {title}
            </div>
          }
          {subtitle &&
            <div className={`${component}__subtitle`}>
              {subtitle}
            </div>
          }
        </div>
      }
    </Fragment>
  );
}
