import React from 'react';
import { bool, string } from 'prop-types';

import Badges from '../components/Badges';

import '../styles/Hero.css';

const Hero = ({
  header, p1, p2, badges,
}) => (
  <section className="Hero">
    <h1>{header}</h1>
    <p>{p1}</p>
    <p>{p2}</p>
    {badges ? <Badges styles={{ width: '8em', height: '8em', margin: '1em' }} /> : null}
  </section>
);

Hero.propTypes = {
  header: string.isRequired,
  p1: string.isRequired,
  p2: string.isRequired,
  badges: bool,
};

Hero.defaultProps = {
  badges: false,
};

export default Hero;
