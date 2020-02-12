/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');
const classNames = require('classnames');
const { GridBlock, MarkdownBlock } = require('../../core/CompLibrary.js');

class HomeSplash extends React.Component {
  render() {
    const { siteConfig } = this.props;

    const NarrowContainer = props => (
      <div className={classNames('narrow-container', props.dark ? 'dark-bg' : '', props.paddingLarge ? 'padding-large' : '')}>
        <div className="narrow-container-inner">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const ProjectTitle = props => (
      <h1 className="projectTitle">
        {props.title}
        <small>{props.tagline}</small>
      </h1>
    );

    const SectionTitle = props => (
      <div className="section-title-wrapper">
        <h2 className="section-title">
          {props.title}
        </h2>
      </div>
    );

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = props => (
      <div className="button-wrapper">
        <a className={classNames('button', props.color ? `button-${props.color}` : '')} href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <div>
        <NarrowContainer dark paddingLarge>
          <ProjectTitle
            title="Eightshift Boilerplate"
            tagline="A modern way of developing WordPress themes & plugins"
          />
          <div className="row-flex row-flex-2">
            <Button color="orange" href="getting-started">Get started</Button>
            <Button color="teal" href="documentation">Read docs</Button>
          </div>
        </NarrowContainer>
        <NarrowContainer>
          <SectionTitle title="Why should you use Eightshift Boilerplate for your next project?" />
          <MarkdownBlock>
            - **Custom Gutenberg blocks** - Easily use our pre-made 100% customizable [existing Gutenberg blocks](https://infinum.github.io/eightshift-frontend-libs/storybook/) & components or create your own.
          </MarkdownBlock>
          <MarkdownBlock>
            - **OOP** - All code is written following the latest object-oriented programming paradigms
          </MarkdownBlock>
          <MarkdownBlock>
            - **[Webpack](https://webpack.js.org/)** - Modern bundling & build process
          </MarkdownBlock>
          <MarkdownBlock>
            - **[SASS (scss)](https://sass-lang.com/)** - Easy to learn CSS on steroids
          </MarkdownBlock>
          <MarkdownBlock>
            - **[Autoprefixing](https://autoprefixer.github.io/)** - Automatically adds vendors prefixes to your CSS
          </MarkdownBlock>
          <MarkdownBlock>
            - **[JS Compiler (Babel)](https://babeljs.io/)** - Write JS using the latest features and let webpack worry about making it work accross all browsers
          </MarkdownBlock>
          <MarkdownBlock>
            - **Minifying** - Automatically minifies your production assets (JS / CSS) during build process
          </MarkdownBlock>
          <MarkdownBlock>
            - **Cache busting** - Each time you build assets, we generate a new URL for each asset file. This means you'll never see the old cached version while developing or after pushing your code to production.
          </MarkdownBlock>
          <MarkdownBlock>
            - **[Synchronised browser testing](https://www.browsersync.io/)**
          </MarkdownBlock>
          <MarkdownBlock>
            - **Helps you write better code (automatic code linting)** - [phpcs](https://github.com/squizlabs/PHP_CodeSniffer) | [eslint](https://eslint.org/) | [stylelint](https://stylelint.io/)
          </MarkdownBlock>
          <MarkdownBlock>
            - **[Easy SASS media queries](https://github.com/infinum/media-blender)**
          </MarkdownBlock>
          <MarkdownBlock>
            - **[Eightshift Libs](https://github.com/infinum/eightshift-libs)** - Library aimed at bringing the modern development tools to your project.
          </MarkdownBlock>
          <MarkdownBlock>
            - **[Eightshift Frontend Libs](https://github.com/infinum/eightshift-frontend-libs)** - A collection of useful frontend utility modules and all the tools you need to start building a modern Gutenberg dynamic blocks.
          </MarkdownBlock>
        </NarrowContainer>
      </div>
    );
  }
}

class Index extends React.Component {
  render() {
    const { config: siteConfig, language = '' } = this.props;
    const { baseUrl } = siteConfig;

    return (
      <div className="homeContent">
        <HomeSplash siteConfig={siteConfig} language={language} />
      </div>
    );
  }
}

module.exports = Index;
