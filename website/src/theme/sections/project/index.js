import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import '../../../scss/sections/project.scss'

function Project() {

  return (
  <section className="project">
    <div className="project__container">
      <div className="project__content">
        <h2 className="project__title">Why should you use this<br></br>for your next project?</h2>
      </div>
      <div className="project__lists">
        <div className="project__column">
          <ul className="project__list">
            <li className="project__item project__item--red">
              <span className="project__item--title">Custom Gutenberg blocks</span>
              <br></br>
              <span className="project__item--paragraph">Easily use our pre-made 100% customizable existing Gutenberg blocks & components or create your own.</span>
            </li>
            <li className="project__item project__item--yellow">
              <span className="project__item--title">Webpack</span>
              <br></br>
              <span className="project__item--paragraph">Modern bundling & build process</span>
            </li>
            <li className="project__item project__item--green">
              <span className="project__item--title">Autoprefixing</span>
              <br></br>
              <span className="project__item--paragraph">Automatically adds vendors prefixes to your CSS</span>
            </li>
            <li className="project__item project__item--yellow">
              <span className="project__item--title">Synchronised browser testing</span>
              <br></br>
              <span className="project__item--paragraph">Automatically minifies your production assets (JS / CSS) during build process</span>
            </li>
            <li className="project__item project__item--green">
              <span className="project__item--title">Minifying</span>
              <br></br>
              <span className="project__item--paragraph">Automatically minifies your production assets (JS / CSS) during build process</span>
            </li>
            <li className="project__item project__item--red">
              <span className="project__item--title">Easy SASS media queries</span>
              <br></br>
              <span className="project__item--paragraph">Automatically minifies your production assets (JS / CSS) during build process</span>
            </li>
            <li className="project__item project__item--purple">
              <span className="project__item--title">Eightshift Frontend Libs</span>
              <br></br>
              <span className="project__item--paragraph">A collection of useful frontend utility modules and all the tools you need to start building a modern Gutenberg dynamic blocks.</span>
            </li>
          </ul>
        </div>
        <div className="project__column">
          <ul className="project__list">
          <li className="project__item project__item--purple">
              <span className="project__item--title">OOP</span>
              <br></br>
              <span className="project__item--paragraph">All code is written following the latest object-oriented programming paradigms</span>
            </li>
            <li className="project__item project__item--green">
              <span className="project__item--title">SAAS - scss</span>
              <br></br>
              <span className="project__item--paragraph">Easy to learn CSS on steroids</span>
            </li>
            <li className="project__item project__item--purple">
              <span className="project__item--title">JS Compiler (Babel)</span>
              <br></br>
              <span className="project__item--paragraph">Write JS using the latest features and let webpack worry about making it work accross all browsers</span>
            </li>
            <li className="project__item project__item--red">
              <span className="project__item--title">Cache busting</span>
              <br></br>
              <span className="project__item--paragraph">Each time you build assets, we generate a new URL for each asset file. This means you'll never see the old cached version while developing or after pushing your code to production.</span>
            </li>
            <li className="project__item project__item--yellow">
              <span className="project__item--title">Helps you write better code</span>
              <br></br>
              <span className="project__item--paragraph">Automatic code linting</span>
            </li>
            <li className="project__item project__item--green">
              <span className="project__item--title">Eightshift libs</span>
              <br></br>
              <span className="project__item--paragraph">Library aimed at bringing the modern development tools to your project.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Project;
