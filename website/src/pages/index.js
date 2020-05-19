import React from 'react';
import Layout from '@theme/Layout';
import Intro from '../theme/sections/intro/intro';
import Why from '../theme/sections/why/why';
import GetStarted from '../theme/sections/get-started/get-started';
import Project from '../theme/sections/project/project';
import Footer from '../theme/sections/Footer/Footer';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;

  return (
    <Layout
      title={siteConfig.title}
      description="All the tools you need to start building a modern WordPress project, using all the latest front end development tools.">
      <Intro />
      <Why />
      <GetStarted />
      <Project />
      <div className="footer__heading">
        <h2 className="footer__title">Start exploring</h2>
      </div>
      <Footer />
    </Layout>
  );
}
