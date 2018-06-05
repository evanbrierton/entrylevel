import React from 'react';

import Badges from './Badges';
import Card from './Card';

import '../stylesheets/home/Hero.css';

const Hero = () => {
  const cardItems = [
    {
      href: 'http://www.hackaccessdublin.ie/',
      src: 'https://firebasestorage.googleapis.com/v0/b/entrylevel-ie.appspot.com/o/logo-placeholder.png?alt=media&token=5a1e190f-b16f-4be0-961b-0736e501ec8f',
      alt: 'Lorem Ipsum',
      caption: 'Lorem ipsum dolor sit amet.',
    },
    {
      href: 'https://businessbanking.bankofireland.com/campaigns/bank-of-ireland-workbench/',
      src: 'https://firebasestorage.googleapis.com/v0/b/entrylevel-ie.appspot.com/o/logo-placeholder.png?alt=media&token=5a1e190f-b16f-4be0-961b-0736e501ec8f',
      alt: 'Lorem Ipsum',
      caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut placerat, ipsum in tempor.',
    },
    {
      href: 'http://smartdublin.ie/',
      src: 'https://firebasestorage.googleapis.com/v0/b/entrylevel-ie.appspot.com/o/logo-placeholder.png?alt=media&token=5a1e190f-b16f-4be0-961b-0736e501ec8f',
      alt: 'Lorem Ipsum',
      caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
    },
  ];

  return (
    <section className="Hero">
      <section className="content">
        <h1>Entry Level</h1>
        <p>
          Entry level helps people find accessible establishments and encourages positive
          improvements to those establishments.
        </p>
        <p>Click one of the badges to find out more.</p>
        <Badges icon styles={{ width: '10em', height: '10em', margin: '1em' }} />
      </section>
      <Card header="What's New?" cardItems={cardItems} />
    </section>
  );
};

export default Hero;
