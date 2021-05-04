import { Fragment } from "react";
import React from 'react';

export default function Heading(props) {

  const component = 'shift-heading';

  const {
    componentClass,
    title,
    subtitle,
    align='center',
    titleSize='default',
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
            <div className={`${component}__title ${component}__title-size--${titleSize}`}>
              {title}
            </div>
          }
          {subtitle &&
            <div className={`${component}__subtitle`} dangerouslySetInnerHTML={{__html: subtitle}}></div>
          }
        </div>
      }
    </Fragment>
  );
}
