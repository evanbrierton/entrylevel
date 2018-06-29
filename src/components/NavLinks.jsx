import React from 'react';
import { string, arrayOf, shape } from 'prop-types';

import NavLinkItem from './NavLinkItem';

import '../styles/NavLinks.css';

const NavLinks = ({ links }) => (
  <ul className="NavLinks">
    {links.map(link => <NavLinkItem {...link} key={link.text} />)}
  </ul>
);

NavLinks.propTypes = {
  links: arrayOf(shape({
    href: string.isRequired, text: string.isRequired,
  }).isRequired).isRequired,
};

export default NavLinks;
