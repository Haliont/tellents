import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.css';

import ReactDOM from 'react-dom';
import React from 'react';

import { Provider } from 'react-redux';
import App from './containers/App';

import { validateToken } from './reducers/user';

import store from './store';

store.subscribe(() => {
  const { isLoggedIn, user } = store.getState();
  localStorage.isLoggedIn = isLoggedIn;
  localStorage.user = JSON.stringify(user);
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
