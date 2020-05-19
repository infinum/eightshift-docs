/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import classnames from 'classnames';

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';

function Footer() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  const {themeConfig = {}} = siteConfig;
  const {footer} = themeConfig;

  if (!footer) {
    return null;
  }

  return (
    <footer
      className={classnames('footer', {
        'footer--dark': footer.style === 'dark',
      })}>
      <div className="footer__container">
        <div className="footer__top">
          <div className="footer__content">
            <div className="footer__column">
              <div className="footer__image">
                <img src={useBaseUrl('img/ic-boilerplate.svg')} alt="Eightshift Boilerplate" />
              </div>
              <div className="footer__text">
                <p>Eightshift<br></br>Boilerplate</p>
              </div>
              <div className="footer__arrow">
                <a href="https://github.com/infinum/eightshift-boilerplate">
                  <img src={useBaseUrl('img/ic-arrow-up.svg')} alt="Arrow" />
                </a>
              </div>
              <div className="footer__link">
                <div>
                  <a className="github-button" href="https://github.com/infinum/eightshift-boilerplate" data-icon="octicon-star" aria-label="Star ntkme/github-buttons on GitHub">Star</a>
                </div>
              </div>
            </div>
            <div className="footer__column">
              <div className="footer__image">
                <img src={useBaseUrl('img/ic-boilerplate-plugin.svg')} alt="Eightshift Boilerplate Plugin" />
              </div>
              <div className="footer__text">
                <p>Eightshift<br></br>Boilerplate Plugin</p>
              </div>
              <div className="footer__arrow">
                <a href="https://github.com/infinum/eightshift-boilerplate-plugin">
                  <img src={useBaseUrl('img/ic-arrow-up.svg')} alt="Arrow" />
                </a>
              </div>
              <div className="footer__link">
                <div>
                  <a className="github-button" href="https://github.com/infinum/eightshift-boilerplate-plugin" data-icon="octicon-star" aria-label="Star ntkme/github-buttons on GitHub">Star</a>
                </div>
              </div>
            </div>
            <div className="footer__column">
              <div className="footer__image">
                <img src={useBaseUrl('img/ic-eightshift-frontend-libs.svg')} alt="Eightshift Frontend Libs" />
              </div>
              <div className="footer__text">
                <p>Eightshift<br></br>Frontend Libs</p>
              </div>
              <div className="footer__arrow">
                <a href="https://github.com/infinum/eightshift-frontend-libs">
                  <img src={useBaseUrl('img/ic-arrow-up.svg')} alt="Arrow" />
                </a>
              </div>
              <div className="footer__link">
                <div>
                  <a className="github-button" href="https://github.com/infinum/eightshift-frontend-libs" data-icon="octicon-star" aria-label="Star ntkme/github-buttons on GitHub">Star</a>
                </div>
              </div>
            </div>
            <div className="footer__column">
              <div className="footer__image">
                <img src={useBaseUrl('img/ic-eightshift-libs.svg')} alt="Eightshift Libs" />
              </div>
              <div className="footer__text">
                <p>Eightshift<br></br>Libs</p>
              </div>
              <div className="footer__arrow">
                <a href="https://github.com/infinum/eightshift-libs">
                  <img src={useBaseUrl('img/ic-arrow-up.svg')} alt="Arrow" />
                </a>
              </div>
              <div className="footer__link">
                <div>
                  <a className="github-button" href="https://github.com/infinum/eightshift-libs" data-icon="octicon-star" aria-label="Star ntkme/github-buttons on GitHub">Star</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <div className="footer__left">Made with <span>🧡</span> by <a href="https://eightshift.com/"><span className="footer__eightshift">Eightshift</span></a> team.</div>
          <div className="footer__right">© Eightshift. All rights reserved <span className="footer__dot">・</span> Part of <a href="https://infinum.com/"><img className="footer__logo" src={useBaseUrl('img/img-infinum-mark.svg')} alt="Infinum Logo" /></a></div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
