import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import { Provider } from 'react-redux';
import App from './containers/App';

import { validateToken } from './reducers/user';

import store from './store';

store.subscribe(() => {
  localStorage.isLoggedIn = store.getState().isLoggedIn;
});

if (store.getState().isLoggedIn) {
  store.dispatch(validateToken());
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
