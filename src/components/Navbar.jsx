import React, { Component } from 'react';

import NavLinks from './NavLinks';

import '../stylesheets/Navbar.css';

class Navbar extends Component {
  state = {
    shadow: false,
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.scroll);
  }

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.scroll);
  }

  scroll = () => {
    if (window.pageYOffset &&
      this.state.shadow !== true &&
      window.matchMedia('(min-width: 900px)').matches) {
      this.setState({ shadow: true });
    } else if (!window.pageYOffset) this.setState({ shadow: false });
  };

  render() {
    return (
      <nav
        className="Navbar"
        style={{ boxShadow: this.state.shadow ? '0 8px 16px -2px rgba(155, 155, 155, 0.6)' : null }}
      >
        <div className="badges">
          <button className="yellow badge" />
          <button className="red badge" />
          <button className="blue badge" />
        </div>
        <NavLinks />
        <form>
          <label htmlFor="search">
            <input type="text" id="search" placeholder="Search..." />
          </label>
          <button type="submit"><i className="material-icons">search</i></button>
        </form>
      </nav>
    );
  }
}

export default Navbar;
