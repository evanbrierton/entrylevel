import React from 'react';
import { string } from 'prop-types';

import TextCard from './TextCard';

const EstablishmentProfile = ({ address }) => (
  <section className="EstablishmentProfile">
    <TextCard>
      <span>
        <i className="material-icons">location_on</i>
        {address}
      </span>
    </TextCard>
  </section>
);

EstablishmentProfile.propTypes = { address: string.isRequired };

export default EstablishmentProfile;
