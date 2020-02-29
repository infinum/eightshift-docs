/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    return `${baseUrl}${docsPart}${langPart}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : '') + doc;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="66"
              />
            )}
          </a>
          <div>
            <a href="https://github.com/infinum/eightshift-frontend-libs">
              <h5>Eightshift-frontend-libs</h5>
            </a>
            <a className="github-button" href="https://github.com/infinum/eightshift-frontend-libs" data-icon="octicon-star" data-size="large" aria-label="Star infinum/eightshift-frontend-libs on GitHub">Star</a>
          </div>
          <div>
            <a href="https://github.com/infinum/eightshift-libs">
              <h5>Eightshift-libs</h5>
            </a>
            <a className="github-button" href="https://github.com/infinum/eightshift-libs" data-icon="octicon-star" data-size="large" aria-label="Star infinum/eightshift-libs on GitHub">Star</a>
          </div>
          <div>
            <a href="https://github.com/infinum/eightshift-boilerplate">
              <h5>Eightshift-boilerplate</h5>
            </a>
            <a className="github-button" href="https://github.com/infinum/eightshift-boilerplate" data-icon="octicon-star" data-size="large" aria-label="Star infinum/eightshift-boilerplate on GitHub">Star</a>
          </div>
          <div>
            <a href="https://github.com/infinum/eightshift-boilerplate-plugin">
              <h5>Eightshift-boilerplate-plugin</h5>
            </a>
            <a className="github-button" href="https://github.com/infinum/eightshift-boilerplate-plugin" data-icon="octicon-star" data-size="large" aria-label="Star infinum/eightshift-boilerplate-plugin on GitHub">Star</a>
          </div>
        </section>
        <section className="copyright">{this.props.config.copyright}</section>
      </footer>
    );
  }
}

module.exports = Footer;
