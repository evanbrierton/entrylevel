import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

/* eslint-disable no-underscore-dangle */
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);
/* eslint-enable */

export * from './actions';
export default store;