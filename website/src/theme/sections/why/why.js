import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Heading from './../../components/heading/heading';
import Container from './../../components/container/container';

export default function Why() {
  const component = 'shift-why';

  return (
    <div className={component}>
      <Container
        componentClass={component}
        size={'small'}
      >
        <Heading
          componentClass={component}
          title={'Why you would love to use this?'}
          subtitle={'Easily use our pre-made 100% customizable existing Gutenberg blocks & components or create your own designs. Browse the collection of useful front-end utility modules and all the tools you need to start building modern Gutenberg dynamic blocks. There’s a bunch of helpers to write better code made by developers for developers. All code is written following the latest object-oriented programming paradigms.'}
          align={'left'}
          titleSize={'medium'}
        />
      </Container>
      <Container
        componentClass={component}
        size={'medium'}
      >
        <div className={`${component}__content`}>
          <img className={`${component}__image ${component}__image--desktop`} src={useBaseUrl('img/img-why-boilerplate@2x.png')} />
          <img className={`${component}__image ${component}__image--mobile`} src={useBaseUrl('img/img-why-boilerplate-mobile@2x.png')} />
        </div>
      </Container>
    </div>
  )
}
