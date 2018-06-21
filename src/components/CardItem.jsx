import React from 'react';
import { number, string, shape } from 'prop-types';

import '../stylesheets/CardItem.css';

const CardItem = ({ item }) => {
  const {
    href, src, alt, caption,
  } = item;
  return (
    <li className="CardItem">
      <a href={href} target="_blank" rel="noopener noreferrer">
        <img src={src} alt={alt} />
      </a>
      <p>{caption}</p>
    </li>
  );
};

CardItem.propTypes = {
  item: shape({
    alt: string.isRequired,
    caption: string.isRequired,
    href: string.isRequired,
    src: string.isRequired,
    key: number.isRequired,
  }).isRequired,
};

export default CardItem;
