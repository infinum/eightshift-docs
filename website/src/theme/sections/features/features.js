import React from 'react';
import Heading from './../../components/heading/heading';
import Container from './../../components/container/container';

export default function Features() {

  const component = 'shift-features';

  const data = [
    {
      icon: 'red',
      title: 'Custom Gutenberg blocks',
      desc: 'Easily use our pre-made 100% customizable existing Gutenberg blocks & components or create your own.',
    },
    {
      icon: 'purple',
      title: 'OOP',
      desc: 'All code is written following the latest object-oriented programming paradigms',
    },
    {
      icon: 'yellow',
      title: 'Webpack',
      desc: 'Modern bundling & build process',
    },
    {
      icon: 'green',
      title: 'SAAS - scss',
      desc: 'Easy to learn CSS on steroids',
    },
    {
      icon: 'red',
      title: 'Autoprefixing',
      desc: 'Automatically adds vendors prefixes to your CSS',
    },
    {
      icon: 'purple',
      title: 'JS Compiler (Babel)',
      desc: 'Write JS using the latest features and let webpack worry about making it work accross all browsers',
    },
    {
      icon: 'yellow',
      title: 'Synchronised browser testing',
      desc: 'Automatically minifies your production assets (JS / CSS) during build process',
    },
    {
      icon: 'red',
      title: 'Minifying',
      desc: 'Automatically minifies your production assets (JS / CSS) during build process',
    },
    {
      icon: 'purple',
      title: 'Helps you write better code',
      desc: 'Automatic code linting',
    },
    {
      icon: 'yellow',
      title: 'Easy SASS media queries',
      desc: 'Automatically minifies your production assets (JS / CSS) during build process',
    },
    {
      icon: 'green',
      title: 'Eightshift libs',
      desc: 'Library aimed at bringing the modern development tools to your project.',
    },
    {
      icon: 'red',
      title: 'Eightshift Frontend Libs',
      desc: 'A collection of useful frontend utility modules and all the tools you need to start building a modern Gutenberg dynamic blocks.',
    },
    {
      icon: 'green',
      title: 'Cache busting',
      desc: 'Each time you build assets, we generate a new URL for each asset file. This means you\'ll never see the old cached version while developing or after pushing your code to production.',
    },
  ];

  const items = data.map((item, index) => {
    const {
      icon,
      title,
      desc,
    } = item;

    return (
      <div className={`${component}__item`} key={index}>
        <div className={`${component}__title ${component}__title--${icon}`}>
          {title}
        </div>
        <div className={`${component}__desc`}>
          {desc}
        </div>
      </div>
    )
  });

  return (
    <div className={component}>
      <Container
        componentClass={component}
        size={'medium'}
      >
        <Heading
          componentClass={component}
          title={'Why should you use this for your next project?'}
          align={'left'}
        />
        <div className={`${component}__content`}>
          {items}
        </div>
      </Container>
    </div>
  )
}
