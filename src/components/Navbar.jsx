import React from 'react';
import { NavLink } from 'react-router-dom';

import '../stylesheets/Navbar.css';

const Navbar = () => (
  <nav className="Navbar">
    <div className="badges">
      <button className="yellow badge" />
      <button className="red badge" />
      <button className="blue badge" />
    </div>
    <ul>
      <NavLink to="/" className="link">Home</NavLink>
      <NavLink to="/" className="link">Review</NavLink>
      <NavLink to="/" className="link">Register</NavLink>
    </ul>
    <form>
      <input type="text" />
    </form>
    <i className="material-icons">search</i>
  </nav>
);

export default Navbar;
