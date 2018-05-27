import React from 'react';
import PropTypes from 'prop-types';

import '../../stylesheets/home/Badge.css';

const Badge = ({ colour, icon }) => (
  <button className={`${colour} Badge`}>
    <i className="material-icons">{icon}</i>
  </button>
);

Badge.propTypes = {
  colour: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Badge;
