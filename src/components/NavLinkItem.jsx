import React from 'react';
import { NavLink } from 'react-router-dom';
import { string } from 'prop-types';

import '../styles/NavLinkItem.css';

const NavLinkItem = ({ href, text }) => (
  <li className="NavLink">
    <NavLink className="link" to={href}>{text}</NavLink>
  </li>
);

NavLinkItem.propTypes = {
  href: string.isRequired,
  text: string.isRequired,
};

export default NavLinkItem;
