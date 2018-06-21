import React from 'react';
import { bool, string, oneOfType, objectOf } from 'prop-types';

import '../stylesheets/Badge.css';

const Badge = ({
  colour, icon, styles, button,
}) => (
  <div className={`${colour} ${button ? 'button' : null} Badge`} style={styles}>
    {button ? (
      <button>
        <i className="material-icons">{icon}</i>
      </button>
    ) : null
      }
  </div>
);

Badge.propTypes = {
  colour: string.isRequired,
  icon: oneOfType([string, bool]).isRequired,
  styles: objectOf(string).isRequired,
  button: bool.isRequired,
};

export default Badge;
