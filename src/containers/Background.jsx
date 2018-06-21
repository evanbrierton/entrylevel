import React from 'react';
import { string, node, arrayOf } from 'prop-types';

import '../styles/Background.css';

const Background = ({ backgroundImage, children }) => (
  <section className="Background" style={{ backgroundImage }}>
    {children}
  </section>
);

Background.propTypes = { backgroundImage: string, children: arrayOf(node) };

Background.defaultProps = { backgroundImage: null, children: null };

export default Background;

