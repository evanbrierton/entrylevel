import React from 'react';

import '../../stylesheets/home/HeroCard.css';
import hackaccess from '../../stylesheets/img/hackaccess.png';

const HeroCard = () => (
  <section className="HeroCard">
    <h2>{'What\'s New?'}</h2>
    <img src={hackaccess} alt="Hack Access" />
  </section>
);

export default HeroCard;
