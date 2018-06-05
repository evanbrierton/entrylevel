import React from 'react';
import PropTypes from 'prop-types';

import Badge from './Badge';

import '../stylesheets/Badges.css';

const Badges = ({ badges, icon, styles }) => (
  <div className="Badges">
    {badges.map(b => <Badge {...b} styles={styles} icon={!icon ? icon : b.icon} />)}
  </div>
);

Badges.propTypes = {
  badges: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string, PropTypes.number,
  ]))),
  styles: PropTypes.objectOf(PropTypes.string),
  icon: PropTypes.bool.isRequired,
};

Badges.defaultProps = {
  badges: [
    {
      colour: 'yellow', icon: 'hearing', key: 0,
    },
    {
      colour: 'red', icon: 'visibility_off', key: 1,
    },
    {
      colour: 'blue', icon: 'accessible_forward', key: 2,
    },
  ],
  styles: { width: '10em', height: '10em' },
};

export default Badges;

