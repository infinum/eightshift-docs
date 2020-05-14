/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {useCallback, useState, useEffect} from 'react';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';


function NavLink(props) {
  return (
    <Link
      {...props}
      {...(props.href
        ? {
            target: '_blank',
            rel: 'noopener noreferrer',
            href: props.href,
          }
        : {
            // activeClassName: "navbar__link--active",
            to: useBaseUrl(props.to),
          })}>
      {props.label}
    </Link>
  );
}

function Navbar() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  const {baseUrl, themeConfig = {}} = siteConfig;
  const {navbar = {}} = themeConfig;
  const {title, logo, links = []} = navbar;

  return (
    <header role="navigation">
      <Link to={baseUrl}>
        {logo != null && <img src={useBaseUrl(logo.src)} alt={logo.alt} />}
        {title != null && <strong>{title}</strong>}
      </Link>
      {links
        .filter(linkItem => linkItem.position !== 'right')
        .map((linkItem, i) => (
          <NavLink {...linkItem} key={i} />
        ))}
      {links
        .filter(linkItem => linkItem.position === 'right')
        .map((linkItem, i) => (
          <NavLink {...linkItem} key={i} />
        ))}
    </header>
  );
}

export default Navbar;
