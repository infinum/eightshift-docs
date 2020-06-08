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
    <Layout>
      <Intro />
      <Why />
      <GetStarted />
      <Features />
      <Footer />
      <Foot />
    </Layout>
  );
}
