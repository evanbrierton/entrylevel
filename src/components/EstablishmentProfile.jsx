import React from 'react';
import { string } from 'prop-types';

import TextCard from './TextCard';

const EstablishmentProfile = ({ address }) => (
  <section className="EstablishmentBody">
    <TextCard>
      <span>
        <i className="material-icons">location_on</i>
        {address}
      </span>
      <span>
        <i className="material-icons">web</i>
        <a href="https://www.google.com/" className="link">www.google.com</a>
      </span>
    </TextCard>
  </section>
);

EstablishmentProfile.propTypes = { address: string.isRequired };

export default EstablishmentProfile;
