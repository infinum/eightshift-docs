import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Heading from '../../components/heading/heading';
import Container from '../../components/container/container';

export default function Panels() {
  const component = 'panels';

  return (
    <div className={component}>
      <Container
        componentClass={component}
        size={'small'}
      >
        <Heading
          componentClass={component}
          title={'Still not sure about our setup?'}
          subtitle={'Other than the best developers experience, our blocks just look amazing because we invested a lot of time into making them user-friendly, so you editors can have the best user experience possible. Check out some of our panels yourself.'}
          titleSize={'medium'}
        />
      </Container>
      <Container
        componentClass={component}
        size={'medium'}
      >
        <div className={`${component}__content`}>
          <img className={`${component}__image`} src={useBaseUrl('img/img-panels@2x.png')} />
        </div>
      </Container>
    </div>
  )
}
