import React from 'react';
import Layout from '@theme/Layout';
import Iframe from '../theme/sections/Iframe/Iframe';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function Storybook(props) {

  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;

  return (
    <Layout
      title={'Storybook'}
    >
        <Iframe src="https://infinum.github.io/eightshift-frontend-libs/storybook/" />
    </Layout>
  );
};
