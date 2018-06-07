import React from 'react';
import PropTypes from 'prop-types';

import '../stylesheets/Background.css';

const Background = ({ backgroundImage, children }) => (
  <section className="Background" style={{ backgroundImage }}>
    {children}
  </section>
);

Background.propTypes = {
  backgroundImage: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.node),
};

Background.defaultProps = {
  backgroundImage: null,
  children: null,
};

export default Background;

