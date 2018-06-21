import React from 'react';
import { number, string, arrayOf, shape } from 'prop-types';

import { CardItem } from '../components';

import '../styles/Card.css';

const Card = ({ header, items }) => (
  <section className="Card">
    <h2>{header}</h2>
    <ul>
      {items.map(item => <CardItem item={item} key={item.key} />)}
    </ul>
  </section>
);

Card.propTypes = {
  header: string.isRequired,
  items: arrayOf(shape({
    alt: string.isRequired,
    caption: string.isRequired,
    href: string.isRequired,
    src: string.isRequired,
    key: number.isRequired,
  })).isRequired,
};

export default Card;
