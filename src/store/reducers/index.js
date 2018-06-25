import { combineReducers } from 'redux';

import error from './error';
import establishment from './establishment';

const rootReducer = combineReducers({ error, establishment });

export default rootReducer;
