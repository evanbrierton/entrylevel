import React from 'react';
import PropTypes from 'prop-types';

import '../stylesheets/Badge.css';

const Badge = ({ colour, icon, styles }) => (
  <button className={`${colour} Badge`} style={styles}>
    <i className="material-icons">{icon}</i>
  </button>
);

Badge.propTypes = {
  colour: PropTypes.string.isRequired,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
  styles: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Badge;
