import React from 'react';
import PropTypes from 'prop-types';

import '../stylesheets/Badge.css';

const Badge = ({
  colour, icon, styles, button,
}) => (
  <div className={`${colour} Badge`} style={styles}>
    {button ? (
      <button>
        <i className="material-icons">{icon}</i>
      </button>
    ) : null
      }
  </div>
);

Badge.propTypes = {
  colour: PropTypes.string.isRequired,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
  styles: PropTypes.objectOf(PropTypes.string).isRequired,
  button: PropTypes.bool.isRequired,
};

export default Badge;
