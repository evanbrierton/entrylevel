import React from 'react';
import { bool, string, arrayOf, shape } from 'prop-types';

import NavLinkItem from './NavLinkItem';

import '../styles/NavLinks.css';

const NavLinks = ({ links, active }) => (
  <ul className="NavLinks">
    {links.map(link => <NavLinkItem {...link} key={link.text} active={active} />)}
  </ul>
);

NavLinks.propTypes = {
  active: bool,
  links: arrayOf(shape({
    href: string.isRequired, text: string.isRequired,
  }).isRequired).isRequired,
};

NavLinks.defaultProps = { active: false };

export default NavLinks;
