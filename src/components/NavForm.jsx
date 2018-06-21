import React from 'react';

import '../styles/NavForm.css';

const NavForm = () => (
  <form className="NavForm">
    <label htmlFor="search" aria-label="Search">
      <input type="text" id="search" placeholder="Search..." required />
    </label>
    <button type="submit"><i className="material-icons">search</i></button>
  </form>
);

export default NavForm;
