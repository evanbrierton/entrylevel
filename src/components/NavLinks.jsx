import React from 'react';

import NavLinkItem from './NavLinkItem';

import links from './data/Navbar';

import '../stylesheets/NavLinks.css';

const NavLinks = () => (
  <ul className="NavLinks">
    {links.map(link => <NavLinkItem {...link} key={link.text} />)}
  </ul>
);

export default NavLinks;
