import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import '../../stylesheets/Navbar/NavLinkItem.css';

const NavLinkItem = ({ href, text }) => (
  <li className="NavLink">
    <NavLink className="link" to={href}>{text}</NavLink>
  </li>
);

NavLinkItem.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default NavLinkItem;
