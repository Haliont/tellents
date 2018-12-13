import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/main.css';

import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import App from './containers/App';

import { validateToken } from './store/user/actions';
import { getUserData, isSignedIn } from './store/user/selectors';

import configureStore from './store';

const preloadState = {
  user: {
    userData: JSON.parse(
      localStorage.userData || JSON.stringify({ full_name: 'Alan Kay' }),
    ),
    isSignedIn: JSON.parse(
      localStorage.isSignedIn || JSON.stringify(false),
    ),
  },
};

const store = configureStore(preloadState);

store.subscribe(() => {
  const currentState = store.getState();
  localStorage.isSignedIn = JSON.stringify(isSignedIn(currentState));
  localStorage.userData = JSON.stringify(getUserData(currentState));
});

if (isSignedIn(store.getState())) {
  store.dispatch(validateToken());
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
