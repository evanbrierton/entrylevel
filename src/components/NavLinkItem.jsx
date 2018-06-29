import React from 'react';
import { NavLink } from 'react-router-dom';
import { bool, string } from 'prop-types';

import '../styles/NavLinkItem.css';

const NavLinkItem = ({ href, text, active }) => (
  <li className="NavLink">
    <NavLink className="link" activeClassName={active ? 'activeLink' : null} to={href}>{text}</NavLink>
  </li>
);

NavLinkItem.propTypes = {
  href: string.isRequired,
  text: string.isRequired,
  active: bool.isRequired,
};

export default NavLinkItem;
