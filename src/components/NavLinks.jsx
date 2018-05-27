import React from 'react';
import { NavLink } from 'react-router-dom';

import '../stylesheets/NavLinks.css';

const NavLinks = () => (
  <ul className="NavLinks">
    <li>
      <NavLink to="/" className="link">Home</NavLink>
    </li>
    <li>
      <NavLink to="/" className="link">Review</NavLink>
    </li>
    <li>
      <NavLink to="/register" className="link">Register</NavLink>
    </li>
  </ul>
);

export default NavLinks;
