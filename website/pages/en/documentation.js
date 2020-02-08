/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');
const {Container} = require('../../core/CompLibrary.js');
const {Card} = require(process.cwd() +'/core/components/card.js');

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl} = siteConfig;

    const imgLibs = 'img/php-logo-300x156.png';
    const imgFrontendLibs = 'img/frontend-libs-logo-300x300.png';

    return (
      <div className="homeContent">
        <Container
          padding={['bottom', 'left', 'right']}
          className="myCustomClass"
        >
          <h1 class="center">Which docs are you looking for?</h1>
          <div class="row-flex row-flex-2">
            <Card
              href="docs/libs-index"
              img={imgLibs}
              title="Eightshift libs"
              modifierClass="libs"
            />
            <Card
              href="docs/frontend-libs-index"
              img={imgFrontendLibs}
              title="Eightshift frontend libs"
              modifierClass="frontend-libs"
            />
          </div>
        </Container>
      </div>
    );
  }
}

module.exports = Index;
