import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function Why() {

  return (
  <section className="why">
    <div className="why__container">
      <div className="why__content">
        <h2 className="why__title">Why you would<br></br>love to use this?</h2>
        <p className="why__paragraph">Easily use our pre-made 100% customizable existing Gutenberg blocks & components or create your own designs. Browse the collection of useful frontend utility modules and all the tools you need to start building modern Gutenberg dynamic blocks. There’s a bunch of Helpers to write better code (automatic code linting). All code is written following the latest object-oriented programming paradigms.</p>
      </div>
      <div className="why__image">
        <img className="why__img" src={useBaseUrl('img/img-why-boilerplate@2x.png')} />
      </div>
    </div>
  </section>
  )
}
