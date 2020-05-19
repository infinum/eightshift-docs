import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function GetStarted() {
  return (
    <section className="get-started">
      <div className="get-started__heading">
        <h2 className="get-started__title">Choose one of the<br></br>options to get started</h2>
        <p className="get-started__subtitle">We’ve built a bot to automate the tedious process of adding project contributors, so you can focus on your project instead of managing your ReadMe.</p>
      </div>
      <div className="get-started__container">
        <div className="get-started__column get-started__content--theme">
          <div className="get-started__image">
            <img className="get-started__background" src={useBaseUrl('img/img-fill-bg-blue.svg')} />
            <img className="get-started__icon" src={useBaseUrl('img/img-wp-theme-color.svg')} />
          </div>
          <div className="get-started__content">
            <h3 className="get-started__paragraph">I want a new<br></br>WordPress <span className="get-started__theme">theme</span></h3>
            <img src={useBaseUrl('img/ic-arrow-up.svg')} alt="Arrow" />
          </div>
        </div>
        <div className="get-started__column get-started__column--plugin">
          <div className="get-started__image">
            <img className="get-started__background" src={useBaseUrl('img/img-fill-bg-red.svg')} />
            <img className="get-started__icon" src={useBaseUrl('img/img-wp-plugin-color.svg')} />
          </div>
          <div className="get-started__content">
            <h3 className="get-started__paragraph">I want a new<br></br>WordPress <span className="get-started__plugin">plugin</span></h3>
            <img src={useBaseUrl('img/ic-arrow-up.svg')} alt="Arrow" />
          </div>
        </div>
      </div>
    </section>
  );
};
