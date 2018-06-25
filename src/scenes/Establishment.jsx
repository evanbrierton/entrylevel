import React from 'react';
import { match } from 'react-router-prop-types';

import { apiCall } from '../services/api';

const Establishment = ({ match: { params: { company, establishment } } }) => {
  apiCall(`companies/${company}/establishments/${establishment}`);
  return (
    <main className="Establishment">
      <section />
    </main>
  );
};

Establishment.propTypes = {
  match: match.isRequired,
};

export default Establishment;
