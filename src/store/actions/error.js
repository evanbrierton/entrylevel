import { ADD_ERROR, REMOVE_ERROR } from '../actionTypes';

export const addErrorAction = message => ({ type: ADD_ERROR, message });
export const removeErrorAction = () => ({ type: REMOVE_ERROR });
