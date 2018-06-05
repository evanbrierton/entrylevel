import React from 'react';

import NavLinkItem from './NavLinkItem';

import '../../stylesheets/Navbar/NavLinks.css';

const NavLinks = () => {
  const links = [
    { href: '/', text: 'Home' },
    { href: '/review', text: 'Review' },
    { href: '/register', text: 'Register' },
  ];
  return (
    <ul className="NavLinks">
      {links.map(l => <NavLinkItem {...l} key={l.href} />)}
    </ul>
  );
};

export default NavLinks;
