import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav className="Navbar">
    <NavLink to="/">Home</NavLink>
    <NavLink to="/">Review</NavLink>
    <NavLink to="/">Register</NavLink>
  </nav>
);

export default Navbar;
