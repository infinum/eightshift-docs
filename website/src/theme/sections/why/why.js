import React from 'react';
import Heading from './../../components/heading/heading';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function Why() {
  const component = 'why';

  return (
  <section className="why">
    <div className="why__container">
      <Heading
        componentClass={component}
        title={'Why you would love to use this?'}
        subtitle={'Easily use our pre-made 100% customizable existing Gutenberg blocks & components or create your own designs. Browse the collection of useful frontend utility modules and all the tools you need to start building modern Gutenberg dynamic blocks. There’s a bunch of Helpers to write better code (automatic code linting). All code is written following the latest object-oriented programming paradigms.'}
        align={'left'}
        
      />
      <div className="why__image">
        <img className="why__img" src={useBaseUrl('img/img-why-boilerplate@2x.png')} />
      </div>
    </div>
  </section>
  )
}
