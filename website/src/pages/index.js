import React from 'react';
import Layout from '@theme/Layout';
import Hero from '../theme/sections/hero'
import Why from '../theme/sections/why'
import GetStarted from '../theme/sections/get-started'
import Project from '../theme/sections/project'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import '../scss/index.scss';


function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={siteConfig.title}
      description="All the tools you need to start building a modern WordPress project, using all the latest front end development tools.">
      <Hero />
      <Why />
      <GetStarted />
      <Project />
      <div className="footer__heading">
        <h2 className="footer__title">Start exploring</h2>
      </div>
    </Layout>
  );
}

export default Home;
