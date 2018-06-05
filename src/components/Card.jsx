import React from 'react';
import PropTypes from 'prop-types';

import CardItem from './CardItem';

import '../stylesheets/Card.css';

const Card = ({ header, cardItems }) => (
  <section className="Card">
    <h2>{header}</h2>
    <ul>
      {cardItems.map(item => <CardItem item={item} />)}
    </ul>
  </section>
);

Card.propTypes = {
  header: PropTypes.string.isRequired,
  cardItems: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
};

export default Card;
