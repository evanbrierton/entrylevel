import React, { Component } from 'react';

import Badges from './Badges';
import HeroCard from './HeroCard';

import '../../stylesheets/home/Hero.css';

class Hero extends Component {
  state = {
    parallax: false,
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.scroll);
  }

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.scroll);
  }

  scroll = () => {
    if (window.pageYOffset > 800 && window.pageYOffset < 1500) {
      this.setState({ parallax: true });
    } else {
      this.setState({ parallax: false });
    }
    console.log(window.pageYOffset);
  };

  render() {
    return (
      <section className={`Hero ${this.state.parallax ? 'parallax' : null}`}>
        <section className="content">
          <h1>Entry Level</h1>
          <p>
            Entry level helps people find accessible establishments and encourages positive
            improvements to those establishments.
          </p>
          <p>Click one of the badges to find out more.</p>
          <Badges badges={[
            { colour: 'yellow', icon: 'hearing', key: 0 },
            { colour: 'red', icon: 'visibility_off', key: 1 },
            { colour: 'blue', icon: 'accessible_forward', key: 2 },
          ]}
          />
        </section>
        <HeroCard />
      </section>
    );
  }
}

export default Hero;
