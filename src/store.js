import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

/* eslint-disable */
const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
/* eslint-enable */

const middleware = [thunk];

const enhancer = composeEnhancers(
  applyMiddleware(...middleware),
);

const isLoggedIn = localStorage.isLoggedIn || false;
const preloadState = { isLoggedIn: Boolean(isLoggedIn) };

export default createStore(
  rootReducer,
  preloadState,
  enhancer,
);
