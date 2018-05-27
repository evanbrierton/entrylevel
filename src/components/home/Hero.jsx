import React from 'react';

import Badges from './Badges';
import HeroCard from './HeroCard';

import '../../stylesheets/home/Hero.css';

const Hero = () => (
  <section className="Hero">
    <section className="content">
      <h1>Entry Level</h1>
      <p>
        Entry level helps people find accessible establishments and encourages positive
        improvements to those establishments.
      </p>
      <p>Click one of the badges to find out more.</p>
      <Badges badges={[
        { colour: 'yellow', icon: 'accessible_forward' },
        { colour: 'red', icon: 'visibility_off' },
        { colour: 'blue', icon: 'hearing' },
      ]}
      />
    </section>
    <HeroCard />
  </section>
);

export default Hero;
