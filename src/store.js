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

const isSignedIn = localStorage.isSignedIn || false;
const user = localStorage.user || JSON.stringify({ full_name: 'Alan Kay' });

const preloadState = {
  user: JSON.parse(user),
  isSignedIn: Boolean(isSignedIn),
};

export default createStore(
  rootReducer,
  preloadState,
  enhancer,
);
