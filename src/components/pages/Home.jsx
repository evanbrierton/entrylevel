import React from 'react';

import Background from '../Background';
import Hero from '../Hero';
import Card from '../Card';

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
