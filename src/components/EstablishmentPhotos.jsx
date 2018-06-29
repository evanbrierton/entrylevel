import React from 'react';
import { string, arrayOf } from 'prop-types';

import TextCard from './TextCard';

const EstablishmentPhotos = ({ photos }) => (
  <section className="EstablishmentBody">
    {photos.map(photo => <TextCard><img src={photo} alt="" /></TextCard>)}
  </section>
);

EstablishmentPhotos.propTypes = { photos: arrayOf(string.isRequired).isRequired };

export default EstablishmentPhotos;
