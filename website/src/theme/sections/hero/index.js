/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import '../../../scss/sections/hero.scss'

function Hero() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;

  return (
    <section className="hero">
    <div className="hero__container">
      <div className="hero__column--content">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <div className="hero__content">
          <div className="hero__one">
            <hr className="hero__line"></hr>
          </div>
          <div className="hero__two">
            <p className="hero__subtitle">{siteConfig.tagline}</p>
            <div className="hero__buttons">
              <Link
                className="hero__button"
                to={useBaseUrl('/get-started')}>
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="hero__column--image">
        <img className="hero__background" src={useBaseUrl('img/bg.svg')} />
        <img className="hero__image" src={useBaseUrl('img/img-boilerplate-hero.png')} />
      </div>
    </div>
  </section>
  );
}

export default Hero;
