import React from 'react';
import PropTypes from 'prop-types';

import Badge from './Badge';

const Badges = ({ badges }) => (
  <div className="Badges">
    {badges.map(b => <Badge {...b} />)}
  </div>
);

Badges.propTypes = {
  badges: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
};

export default Badges;

