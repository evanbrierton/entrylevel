import { LOAD_ESTABLISHMENT } from '../actionTypes';

const defaultState = {
  name: String(),
  address: String(),
  coordinates: { lat: Number(), lng: Number() },
  profileImage: String(),
};

const establishment = (state = defaultState, { type, establishmentData }) => {
  switch (type) {
    case LOAD_ESTABLISHMENT:
      return {
        ...state,
        ...establishmentData,
        coordinates: {
          lat: establishmentData.coordinates.latitude, lng: establishmentData.coordinates.longitude,
        },
      };
    default:
      return state;
  }
};

export default establishment;
