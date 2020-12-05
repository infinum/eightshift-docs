import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Heading from '../../components/heading/heading';
import Container from '../../components/container/container';
import Arrow from '../../components/arrow/arrow';

export default function ShowcaseGrid() {

  const component = 'showcase-grid';

  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    return array;
  }

  const itemsData = shuffleArray([
    {
      icon: useBaseUrl('img/showcase/infinum.jpg'),
      label: 'Infinum Web',
      desc: 'An independent design and development agency with offices in the US and Europe. We create beautiful apps people love to use.',
      link: 'https://infinum.com/',
      mask: 'purple',
    },
    {
      icon: useBaseUrl('img/showcase/solplanet.jpg'),
      label: 'Solplanet',
      desc: 'The power of the sun is the future of our planet. Solplanet makes solar for everybody. Easy-to-install, reliable and user-friendly inverters.',
      link: 'https://solplanet.net/',
      mask: 'yellow',
    },
    {
      icon: useBaseUrl('img/showcase/eightshift.jpg'),
      label: 'Eightshift',
      desc: 'We build fully-custom websites that are performant and beautiful. You need it, we have it.',
      link: 'https://eightshift.com/',
      mask: 'blue',
    },
    {
      icon: useBaseUrl('img/showcase/design-islands.jpg'),
      label: 'Design Islands',
      desc: 'Explore a world of failed concepts and projects gone wrong, wild iterations, forgotten illustrations, lessons learned, small tips and short reviews.',
      link: 'https://design.infinum.com/',
      mask: 'red',
    },
    {
      icon: useBaseUrl('img/showcase/academy.jpg'),
      label: 'Infinum Academy',
      desc: 'Learn how to build apps. For free. No practical experience? No problem. People who build apps every day are teaching how to create software from scratch. By the end of the course, you will have built your very own app.',
      link: 'https://academy.infinum.com/',
      mask: 'green',
    },
    {
      icon: useBaseUrl('img/showcase/raise-the-bar.jpg'),
      label: 'Raise The Bar',
      desc: 'Coca-Cola HBC is helps to align the skills and knowledge in tourism and hospitality through Raise the Bar education program.',
      link: 'https://raisethebar.hr/',
      mask: 'purple',
    },
    {
      icon: useBaseUrl('img/showcase/d66.jpg'),
      label: 'D66',
      desc: 'Democrats 66 is a social-liberal political party in the Netherlands. Its name originates from the year in which it was founded.',
      link: 'https://d66.nl/',
      mask: 'red',
    },
    {
      icon: useBaseUrl('img/showcase/a1-jobs.jpg'),
      label: 'A1 Jobs',
      desc: 'At A1 Group we are driving digitalization in order to make life easier, more enjoyable and more productive. Are you in? Come and join us!',
      link: 'https://jobs.a1.com/',
      mask: 'green',
    },
    {
      icon: useBaseUrl('img/showcase/a1-brand-portal.jpg'),
      label: 'A1 Brand Portal',
      desc: 'Welcome to A1. Understand, explore and create the world of A1. Play Video. Brand Strategy.',
      link: 'https://brand.a1.group/',
      mask: 'blue',
    },
  ]);

  const items = itemsData.map((item, index) => {
    const {
      icon,
      label,
      link,
      desc,
      mask,
    } = item;

    return (
      <div className={`${component}__item`} key={index}>
        <a className={`${component}__link`} href={link} target="_blank" rel="noopener noreferrer">
          <div className={`${component}__icon`}>
            <img className={`${component}__img`} src={icon} alt={label} title={label}/>
          </div>
          <div className={`${component}__label ${component}__label--${mask}`}>
            {label}
          </div>
          <div className={`${component}__desc`}>
            {desc}
          </div>
          <Arrow componentClass={component} />
        </a>
      </div>
    )
  });

  return (
    <div className={component}>
      <Container
        componentClass={component}
      >
        <Heading
          componentClass={component}
          title={'Showcase'}
          subtitle={'See the awesome websites people are building with Eightshift Boilerplate.'}
        />
        <div className={`${component}__content`}>
          {items}
        </div>
      </Container>
      <Container
        componentClass={component}
        size={'smaller'}
      >
        <Heading
          componentClass={component}
          title={'Want to showcase your project?'}
          subtitle={'If you want to show case your project on this list please open an issue on on the <a target="_blank" rel="noopener noreferrer" rel="nofollow" href="https://github.com/infinum/eightshift-docs/issues">Eightshift-Docs github</a>'}
        />
      </Container>
    </div>
  );
}
