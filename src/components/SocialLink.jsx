import React from 'react';
import PropTypes from 'prop-types';

import '../stylesheets/SocialLink.css';

const SocialLink = ({ href, icon }) => (
  <li className="SocialLink">
    <a className={icon} href={href}>
      <i className={`icon-${icon}`} />
    </a>
  </li>
);

SocialLink.propTypes = {
  href: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default SocialLink;
