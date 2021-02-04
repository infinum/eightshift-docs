import React from 'react';
import Heading from './../../components/heading/heading';
import Container from './../../components/container/container';

export default function Features() {

  const component = 'shift-features';

  const data = [
    {
      icon: 'red',
      title: 'Custom Block Editor blocks',
      desc: 'Easily use our pre-made 100% customizable existing Block Editor blocks & components or create your own. We focus on dynamic blocks for developers.',
    },
    {
      icon: 'purple',
      title: 'OOP',
      desc: 'All code is written following the latest object-oriented programming paradigms (abstract classes, interfaces, dependency injection, namespacing).',
    },
    {
      icon: 'yellow',
      title: 'WP-CLI',
      desc: 'Build your application with all-ready pre-made features that you can access with a single command using the terminal.',
    },
    {
      icon: 'green',
      title: 'Webpack',
      desc: 'Modern assets & building process that you can customize.',
    },
    {
      icon: 'red',
      title: 'SASS',
      desc: 'Easy to learn CSS on steroids.',
    },
    {
      icon: 'purple',
      title: 'Autoprefixing',
      desc: 'You don\'t have to worry if your code will work on older browsers.',
    },
    {
      icon: 'yellow',
      title: 'JS Compiler (Babel)',
      desc: 'Write JS using the latest features and let Webpack worry about making it work across all browsers.',
    },
    {
      icon: 'red',
      title: 'Synchronised browser testing',
      desc: 'Automatically minifies your production assets (JS / CSS) during the build process.',
    },
    {
      icon: 'green',
      title: 'Minifying',
      desc: 'Automatically minifies your production assets (JS / CSS) during the build process.',
    },
    {
      icon: 'purple',
      title: 'PHPCS',
      desc: 'Helps you write better code with automatic code linting for PHP, SCSS, and JS.',
    },
    {
      icon: 'yellow',
      title: 'Easy SASS media queries',
      desc: 'Build your application with easy to use media queries that are connected to blocks.',
    },
    {
      icon: 'red',
      title: 'Cache busting',
      desc: 'Each time you build assets, we generate a new URL for each asset file. This means you\'ll never see the old cached version while developing or after pushing your code to production.',
    },
    {
      icon: 'green',
      title: 'Eightshift libs',
      desc: 'Library aimed at bringing the modern development tools to your project.',
    },
    {
      icon: 'purple',
      title: 'Eightshift Frontend Libs',
      desc: 'A collection of useful front-end utility modules and all the tools you need to start building modern Block Editor dynamic blocks.',
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
