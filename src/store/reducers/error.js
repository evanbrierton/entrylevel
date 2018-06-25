import { ADD_ERROR, REMOVE_ERROR } from '../actionTypes';

const error = (state = { error: { message: String() } }, { type, message }) => {
  switch (type) {
    case ADD_ERROR:
      return { ...state, message };
    case REMOVE_ERROR:
      return { ...state, message: null };
    default:
      return state;
  }
};

export default error;
