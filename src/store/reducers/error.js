import { ADD_ERROR, REMOVE_ERROR } from '../actionTypes';

const error = (state = { message: String() }, { type, message }) => {
  switch (type) {
    case ADD_ERROR:
      return { ...state, ...message };
    case REMOVE_ERROR:
      return { ...state, error: null };
    default:
      return state;
  }
};

export default error;
