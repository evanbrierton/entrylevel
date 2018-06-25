import React from 'react';
import { number, any, objectOf, shape } from 'prop-types';
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';

import { apiKey } from '../.env';

import '../styles/Map.css';

const MapContainer = ({ google, location }) => (
  <Map className="Map" onClick={() => console.log(location)} google={google} zoom={16} center={location}>
    <Marker position={location} name="Google" />
  </Map>
);

MapContainer.propTypes = {
  google: shape({ maps: objectOf(any).isRequired }).isRequired,
  location: shape({ lat: number.isRequired, lng: number.isRequired }).isRequired,
};

export default GoogleApiWrapper({ apiKey })(MapContainer);
