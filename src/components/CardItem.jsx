import React from 'react';
import PropTypes from 'prop-types';

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
  item: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])).isRequired,
};

export default CardItem;
