import React, { Component } from 'react';

import Badges from '../components/Badges';
import { NavForm, NavLinks } from '../components';

import '../styles/Navbar.css';

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

  render = () => (
    <nav
      className="Navbar"
      style={{ boxShadow: this.state.shadow ? '0 8px 16px -2px rgba(155, 155, 155, 0.6)' : null }}
    >
      <Badges button={false} styles={{ width: '2em', height: '2em', margin: '0.2em' }} icon={false} />
      <NavLinks />
      <NavForm />
    </nav>
  );
}

export default Navbar;
