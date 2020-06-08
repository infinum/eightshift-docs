import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Container from './../../components/container/container';
import Button from './../../components/button/button';

export default function Intro() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;

  const component = 'shift-intro';

  const BgIcon = () => (
    <svg className={`${component}__image-bg`} viewBox="0 0 666 563" xmlns="http://www.w3.org/2000/svg" width="666" height="563"><path fill="#9973E3" fillRule="evenodd" d="M736.953 134.96c-72.1-243.387-320.843-111.65-440.22 36.556C177.353 319.72 12.834 296.353.402 416.683c-12.432 120.33 265.264 176.68 477.131 129.93C689.4 499.864 809.051 378.345 736.952 134.959z" /></svg>
  );

  return (
    <div className={component}>
      <Container
        componentClass={component}
        size={'medium'}
      >
        <div className={`${component}__title`} dangerouslySetInnerHTML={{__html: 'Eightshit<br/>Development<br/>kit'}}></div>
        <div className={`${component}__image`}>
          <BgIcon />
          <img className={`${component}__image-img`} src={useBaseUrl('img/img-boilerplate-intro@2x.png')} />
        </div>
        <div className={`${component}__content`}>
          {siteConfig.tagline}
        </div>
        <Button 
          componentClass={component}
          label={'Get Started'}
          href={useBaseUrl('/get-started')}
        />
      </Container>
    </div>
  );
}
