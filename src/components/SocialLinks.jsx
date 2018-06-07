import React from 'react';
import PropTypes from 'prop-types';

import SocialLink from './SocialLink';

import '../stylesheets/SocialLinks.css';

const SocialLinks = ({ links }) => (
  <ul className="SocialLinks">
    {links.map(link => <SocialLink {...link} key={link.icon} />)}
  </ul>
);

SocialLinks.propTypes = {
  links: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
};

export default SocialLinks;

