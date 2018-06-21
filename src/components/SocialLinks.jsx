import React from 'react';
import { string, arrayOf, shape } from 'prop-types';

import SocialLink from './SocialLink';

import '../stylesheets/SocialLinks.css';

const SocialLinks = ({ links }) => (
  <ul className="SocialLinks">
    {links.map(link => <SocialLink {...link} key={link.icon} />)}
  </ul>
);

SocialLinks.propTypes = {
  links: arrayOf(shape({ href: string.isRequired, icon: string.isRequired })).isRequired,
};

export default SocialLinks;

