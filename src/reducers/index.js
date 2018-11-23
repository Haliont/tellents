import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import signingUpState from './signingUpState';
import signingInState from './signingInState';
import validationTokenState from './validationTokenState';
import isLoggedIn from './isLoggedIn';
import user from './user';

export default combineReducers({
  form: formReducer,
  user,
  isLoggedIn,
  signingUpState,
  signingInState,
  validationTokenState,
});
