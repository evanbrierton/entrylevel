import React from 'react';
import PropTypes from 'prop-types';

import CardItem from './CardItem';

import '../../stylesheets/globals/Card.css';

const Card = ({ header, items }) => (
  <section className="Card">
    <h2>{header}</h2>
    <ul>
      {items.map(item => <CardItem item={item} key={item.key} />)}
    </ul>
  </section>
);

Card.propTypes = {
  header: PropTypes.string.isRequired,
  items: PropTypes
    .arrayOf(PropTypes.objectOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])))
    .isRequired,
};

export default Card;
