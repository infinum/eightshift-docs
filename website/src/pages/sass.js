import React from 'react';
import Layout from '@theme/Layout';
import Iframe from '../theme/sections/Iframe/Iframe';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function Sass(props) {

  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;

  return (
    <Layout
      title={'Sass'}
    >
        <Iframe src="https://infinum.github.io/eightshift-frontend-libs/sassdocs/" />
    </Layout>
  );
};
