import React from 'react';
import { node, arrayOf } from 'prop-types';

import '../styles/TextCard.css';

const TextCard = ({ children }) => (
  <div className="TextCard">
    {children}
  </div>
);

TextCard.propTypes = { children: arrayOf(node).isRequired };

export default TextCard;
