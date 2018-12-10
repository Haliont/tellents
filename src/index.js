import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.css';

import ReactDOM from 'react-dom';
import React from 'react';
import Auth from 'j-toker';

import { Provider } from 'react-redux';
import App from './containers/App';

import { validateToken } from './reducers/user';

import store from './store';

Auth.configure({ apiUrl: 'https://floating-atoll-63112.herokuapp.com/api' });

store.subscribe(() => {
  const { isSignedIn, user } = store.getState();
  localStorage.isSignedIn = isSignedIn;
  localStorage.user = JSON.stringify(user);
});

if (store.getState().isSignedIn) {
  store.dispatch(validateToken());
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
