import React, { Component } from 'react';

import Badges from '../Badges';
import NavLinks from './NavLinks';

import '../../stylesheets/Navbar/Navbar.css';

class Navbar extends Component {
  state = { shadow: false }

  componentDidMount = () => window.addEventListener('scroll', this.scroll);

  componentWillUnmount = () => window.removeEventListener('scroll', this.scroll);

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
        <Badges styles={{ width: '2.5em', height: '2.5em', margin: '0.2em' }} icon={false} />
        <NavLinks />
        <form>
          <label htmlFor="search" aria-label="Search">
            <input type="text" id="search" placeholder="Search..." required />
          </label>
          <button type="submit"><i className="material-icons">search</i></button>
        </form>
      </nav>
    );
  }
}

export default Navbar;
