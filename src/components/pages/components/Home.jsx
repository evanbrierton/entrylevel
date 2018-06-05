import React from 'react';

import Background from '../../globals/Background';
import Hero from '../../globals/Hero';
import Card from '../../globals/Card';

import { card, hero, background } from '../data/Home';

const Home = () => (
  <main className="Home">
    <Background {...background} >
      <Hero {...hero} />
      <Card {...card} />
    </Background>
  </main>
);

export default Home;
