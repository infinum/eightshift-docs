import React from 'react';
import Layout from '@theme/Layout';
import Intro from '../theme/sections/intro/intro';
import Why from '../theme/sections/why/why';
import GetStarted from '../theme/sections/get-started/get-started';
import Features from '../theme/sections/features/features';
import Footer from '../theme/sections/Footer/Footer';
import Foot from '../theme/sections/Foot/Foot';
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
      <Features />
      <Footer />
      <Foot />
    </Layout>
  );
}
