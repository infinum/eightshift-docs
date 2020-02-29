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

    const iconTheme = 'img/icons/admin-appearance.svg';
    const iconPlugin = 'img/icons/admin-plugins.svg';
    const iconCustom = 'img/icons/admin-generic.svg';
    const iconDocs = 'img/icons/book.svg';

    return (
      <div className="homeContent">
        <Container
          padding={['bottom', 'left', 'right']}
          className="myCustomClass"
        >
          <h1 className="center">Choose one of the options below to get started</h1>
          <div className="row-flex row-flex-2 row-flex-offest">
            <Card
              href="docs/theme"
              img={iconTheme}
              title="I want a new WordPress theme"
              modifierClass="theme"
            />
            <Card
              href="docs/plugin"
              img={iconPlugin}
              title="I want a new WordPress plugin"
              modifierClass="plugin"
            />
          </div>
        </Container>
      </div>
    );
  }
}

module.exports = Index;
