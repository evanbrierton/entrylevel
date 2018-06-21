import React from 'react';
import { string } from 'prop-types';

import '../stylesheets/SocialLink.css';

const SocialLink = ({ href, icon }) => (
  <li className="SocialLink">
    <a className={icon} href={href}>
      <i className={`icon-${icon}`} />
    </a>
  </li>
);

SocialLink.propTypes = {
  href: string.isRequired,
  icon: string.isRequired,
};

export default SocialLink;
