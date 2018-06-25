import { LOAD_ESTABLISHMENT } from '../actionTypes';

const defaultState = {
  name: String(), address: String(), location: { lat: Number(), lng: Number() },
};

const establishment = (state = defaultState, { type, establishmentData }) => {
  switch (type) {
    case LOAD_ESTABLISHMENT:
      return {
        ...state,
        ...establishmentData,
        location: {
          lat: establishmentData.location.latitude, lng: establishmentData.location.longitude,
        },
      };
    default:
      return state;
  }
};

export default establishment;
