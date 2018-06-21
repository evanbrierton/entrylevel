import React from 'react';
import { bool, number, string, arrayOf, objectOf, shape } from 'prop-types';

import Badge from './Badge';

import '../stylesheets/Badges.css';

const Badges = ({ badges, styles, button }) => (
  <div className="Badges">
    {badges.map(badge => <Badge {...badge} styles={styles} button={button} />)}
  </div>
);

Badges.propTypes = {
  badges: arrayOf(shape({ colour: string, icon: string, key: number })),
  styles: objectOf(string),
  button: bool,
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
  button: true,
};

export default Badges;

