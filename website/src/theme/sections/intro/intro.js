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

export default function Intro() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;

  return (
    <section className="intro">
    <div className="intro__container">
      <div className="intro__column--content">
        <h1 className="intro__title">{siteConfig.title}</h1>
        <div className="intro__content">
          <div className="intro__one">
            <hr className="intro__line"></hr>
          </div>
          <div className="intro__two">
            <p className="intro__subtitle">{siteConfig.tagline}</p>
            <div className="intro__buttons">
              <Link
                className="intro__button"
                to={useBaseUrl('/get-started')}>
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="intro__column--image">
        <img className="intro__background" src={useBaseUrl('img/bg.svg')} />
        <img className="intro__image" src={useBaseUrl('img/img-boilerplate-intro.png')} />
      </div>
    </div>
  </section>
  );
}
