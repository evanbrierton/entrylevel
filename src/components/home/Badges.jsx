import React from 'react';
import PropTypes from 'prop-types';

import Badge from './Badge';

import '../../stylesheets/home/Badges.css';

const Badges = ({ badges }) => (
  <div className="Badges">
    {badges.map(b => <Badge {...b} />)}
  </div>
);

Badges.propTypes = {
  badges: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string, PropTypes.number,
  ]))).isRequired,
};

export default Badges;

