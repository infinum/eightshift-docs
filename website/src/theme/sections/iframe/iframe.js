import React from 'react';

export default function iFrame(props) {

  const component = 'shift-iframe';

  const {
    src
  } = props;

  return (
    <div className={component}>
      <iframe className={`${component}__frame`} src={src} />
    </div>
  );
};
