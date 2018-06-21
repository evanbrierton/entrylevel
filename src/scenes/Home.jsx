import React from 'react';

import { Background, Hero, Card } from '../containers';

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
