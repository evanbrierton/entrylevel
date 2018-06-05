import React from 'react';
import PropTypes from 'prop-types';

import Badges from './Badges';

import '../../stylesheets/globals/Hero.css';

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
  header: PropTypes.string.isRequired,
  p1: PropTypes.string.isRequired,
  p2: PropTypes.string.isRequired,
  badges: PropTypes.bool,
};

Hero.defaultProps = {
  badges: false,
};

export default Hero;
