import React from 'react';
import { number, string, any, objectOf, shape } from 'prop-types';
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';

import { apiKey } from '../.env';

import { Badges, NavLinks } from '../components';

import { establishmentLinks } from '../data';

import '../styles/Map.css';

const MapContainer = ({
  google, location, name, image, pathname,
}) => (
  <div className="MapContainer">
    <Map className="Map" onClick={() => console.log(location)} google={google} zoom={16} center={location}>
      <Marker position={location} name="Google" />
    </Map>
    <div className="info">
      <img src={image} alt={name} />
      <div className="column">
        <h2>{name}</h2>
        <Badges button={false} styles={{ width: '2.5em', height: '2.5em', margin: '0.2em' }} icon={false} />
      </div>
    </div>
    <NavLinks
      links={establishmentLinks.map(({ href, text }) => ({ href: pathname + href, text }))}
      active
    />
  </div>
);

MapContainer.propTypes = {
  google: shape({ maps: objectOf(any).isRequired }).isRequired,
  location: shape({ lat: number.isRequired, lng: number.isRequired }).isRequired,
  name: string.isRequired,
  image: string.isRequired,
  pathname: string.isRequired,
};

export default GoogleApiWrapper({ apiKey })(MapContainer);
