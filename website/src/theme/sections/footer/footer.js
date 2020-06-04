import React from 'react';
import Heading from './../../components/heading/heading';
import Container from './../../components/container/container';

export default function Footer() {

  const component = 'shift-footer';

  const BoilerplateIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="64" height="64"><defs><path id="a" d="M0 .04h3.96V4H0z"/><path id="c" d="M0 .794h3.96v3.96H0z"/></defs><g fill="none" fillRule="evenodd"><path fill="#30ADAD" d="M57.57 12.6l.3.322c4.937 5.415 10.526 18.792-5.533 26.285-17.36 8.1-28.142 8.509-34.132 2.18C5.029 27.464 38.373-7.32 57.57 12.6z"/><path fill="#FFF" d="M42.999 35.515c.907-4.998-2.59-10.04-3.75-12.745-.727-1.695.121-3.555 2.182-4.152 1.448-.42 4.702.144 4.702 4.777 0 1.799-1.382 6.577-3.134 12.12m-16.573-10.41l6.111-.011 6.71 22.107c-.635 1.856-1.238 3.48-1.675 4.74l-2.739.72-8.407-27.556zm-12.808 0l6.11-.011 6.71 22.107c-.634 1.856-1.237 3.48-1.674 4.74l-3.226-.876-7.92-25.96z"/><path stroke="#0C3636" strokeLinecap="square" strokeWidth="2" d="M51.226 32.781c0 11.192-9.073 20.264-20.265 20.264-11.191 0-20.264-9.072-20.264-20.264s9.073-20.264 20.264-20.264c11.192 0 20.265 9.072 20.265 20.264z"/><path stroke="#0C3636" strokeWidth="2" d="M42.763 36.367c1.749-5.408-2.265-10.686-3.513-13.597-.727-1.695.12-3.555 2.18-4.153 1.45-.419 4.704.145 4.704 4.778 0 3.748-6.224 21.712-8.597 28.546m-12.36.333c.94-2.63 3.375-9.631 5.02-14.7m4.602 15.088l-8.52-27.936"/><path stroke="#0C3636" strokeWidth="2" d="M23.275 25.094h9.228l6.745 22.118M13.412 24.726l7.995 26.214m-7.915-25.846h6.143l6.929 22.723"/><path fill="#0C3636" d="M52.772 53.045a1.98 1.98 0 11-3.959.001 1.98 1.98 0 013.959-.001"/><g transform="translate(9 51.025)"><mask id="b" fill="#fff"><use xlinkHref="#a"/></mask><path fill="#0C3636" d="M3.96 2.02a1.98 1.98 0 11-3.959.001A1.98 1.98 0 013.96 2.02" mask="url(#b)"/></g><path fill="#0C3636" d="M52.772 12.799a1.98 1.98 0 11-3.96 0 1.98 1.98 0 013.96 0"/><g transform="translate(9 10.025)"><mask id="d" fill="#fff"><use xlinkHref="#c"/></mask><path fill="#0C3636" d="M3.96 2.774a1.98 1.98 0 11-3.96 0 1.98 1.98 0 013.96 0" mask="url(#d)"/></g></g></svg>
  );

  const PluginIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64"><g fill="none" fillRule="evenodd"><path fill="#E84E4E" d="M40.219 40.275c-16.752 9.29-27.48 10.451-33.897 4.555-14.115-12.969 16.721-49.995 37.26-31.462 5.35 4.828 12.45 18.137-3.363 26.907z"/><path fill="#FFF" d="M30.072 40.535l-3.805 10.803-2.594-.913a5.727 5.727 0 013.804-10.804l2.595.914zM44 34.696c.906-4.998-2.59-10.04-3.75-12.745-.728-1.695.12-3.555 2.181-4.152 1.448-.42 4.702.144 4.702 4.777 0 1.799-1.382 6.577-3.134 12.12"/><path stroke="#0C3636" strokeWidth="2" d="M43.763 35.548c1.748-5.408-2.265-10.686-3.514-13.597-.726-1.695.12-3.555 2.182-4.153 1.449-.419 4.702.145 4.702 4.778 0 3.748-6.223 21.712-8.596 28.546m-7.936-16.313L27.28 23.908"/><path stroke="#0C3636" strokeWidth="2" d="M11.786 30.052c.962-10.296 9.628-18.354 20.176-18.354 11.192 0 20.264 9.072 20.264 20.264 0 9.878-7.07 18.096-16.425 19.89"/><path stroke="#0C3636" strokeWidth="2" d="M24.275 24.275h9.228l6.745 22.118M14.412 23.907l4.318 14.169m-4.238-13.801h6.143l3.682 12.085"/><path fill="#0C3636" d="M53.772 52.226a1.98 1.98 0 11-3.959.001 1.98 1.98 0 013.959-.001m-39.812 0a1.98 1.98 0 11-3.96 0 1.98 1.98 0 013.96 0M53.772 11.98a1.98 1.98 0 11-3.96 0 1.98 1.98 0 013.96 0m-39.812 0a1.98 1.98 0 11-3.961-.001 1.98 1.98 0 013.961.001"/><path stroke="#0C3636" strokeLinecap="round" strokeWidth="2" d="M31.704 50.437l-4.557-1.63m6.329-4.014l-4.296-1.537"/><path stroke="#0C3636" strokeWidth="2" d="M21.576 40.93l-.235-.083a2.533 2.533 0 00-1.682 4.777l.23.08"/><path stroke="#0C3636" strokeWidth="2" d="M26.268 51.338l-2.595-.914a5.727 5.727 0 113.805-10.803l2.595.914"/><path stroke="#0C3636" strokeLinecap="round" strokeWidth="2" d="M25.732 52.803l5.111-14.254"/><path stroke="#0C3636" strokeWidth="2" d="M19.278 42.833c-3.864-1.361-8.3-4.683-7.482-12.78"/></g></svg>
  );

  const FrontendLibsIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64"><g fill="none" fillRule="evenodd"><path fill="#F99922" d="M41.595 15.98c13.549 13.544 17.622 23.536 13.722 31.33-8.575 17.14-52.667-2.295-40.513-27.146C17.97 13.69 28.807 3.198 41.595 15.98z"/><path fill="#FFF" d="M34 15v10h10"/><g stroke="#0C3636" strokeWidth="2"><path d="M34 15v10h10"/><path d="M44 44.881V50H17V15h17l10 10v10.422"/></g><path fill="#FFF" d="M27.089 44.881h20.742v-9.459H27.089z"/><path stroke="#0C3636" strokeWidth="2" d="M27.089 44.881h20.742v-9.459H27.089z"/></g></svg>
  );

  const LibsIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64"><g fill="none" fillRule="evenodd"><path fill="#44AEDE" d="M46.276 34.514l-.701.956c-10.94 14.774-19.96 20.075-28.095 17.498C-.793 47.18 11.506.591 37.953 8.708c6.889 2.113 18.948 11.175 8.323 25.806z"/><path fill="#FFF" d="M37 16v10h10"/><path stroke="#0C3636" strokeWidth="2" d="M37 16v10h10"/><path stroke="#0C3636" strokeWidth="2" d="M47 45.881V51H20V16h17l10 10v10.422"/><path stroke="#0C3636" strokeWidth="2" d="M38.375 36.422h12.456v9.459h-7.855"/><path fill="#FFF" d="M38.375 36.23l-3.804 10.802-2.595-.913a5.728 5.728 0 013.804-10.804l2.595.915z"/><path stroke="#0C3636" strokeLinecap="round" strokeWidth="2" d="M40.006 46.131l-4.557-1.63m6.33-4.014l-4.296-1.537"/><path stroke="#0C3636" strokeWidth="2" d="M29.879 36.624l-.236-.083a2.533 2.533 0 00-1.681 4.777l.23.08"/><path stroke="#0C3636" strokeWidth="2" d="M34.57 47.032l-2.594-.914a5.727 5.727 0 113.804-10.803l2.595.914"/><path stroke="#0C3636" strokeLinecap="round" strokeWidth="2" d="M34.035 48.498l5.111-14.254"/><path stroke="#0C3636" strokeWidth="2" d="M27.58 38.527c-3.556-1.253-7.597-4.167-7.58-10.94"/></g></svg>
  );

  const itemsData = [
    {
      icon: <BoilerplateIcon />,
      label: 'Eightshift<br/ >Boilerplate',
      link: 'https://github.com/infinum/eightshift-boilerplate',
    },
    {
      icon: <PluginIcon />,
      label: 'Eightshift<br />Boilerplate Plugin',
      link: 'https://github.com/infinum/eightshift-boilerplate-plugin',
    },
    {
      icon: <FrontendLibsIcon />,
      label: 'Eightshift<br />Frontend Libs',
      link: 'https://github.com/infinum/eightshift-frontend-libs',
    },
    {
      icon: <LibsIcon />,
      label: 'Eightshift<br />Libs',
      link: 'https://github.com/infinum/eightshift-libs',
    }
  ];

  const items = itemsData.map((item, index) => {
    const {
      icon,
      label,
      link,
    } = item;

    return (
      <div className={`${component}__item`} key={index}>
        <div className={`${component}__icon`}>
          {icon}
        </div>
        <div className={`${component}__label`} dangerouslySetInnerHTML={{__html: label}}></div>
        <a className={`${component}__link`} href={link}>
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24"><path fill="#0C3636" d="M12.536 18.228l6.364-6.364L12.536 5.5l-1.414 1.414 3.912 3.914H5.172v2h9.936l-3.986 3.986 1.414 1.414z"/></svg>
        </a>
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
          title={'Start exploring'}
        />
        <div className={`${component}__content`}>
          {items}
        </div>
      </Container>
    </div>
  );
}
