import { combineReducers } from 'redux';

import signingUpState from './signingUpState';
import signingInState from './signingInState';
import validationTokenState from './validationTokenState';
import isLoggedIn from './isLoggedIn';
import user from './user';

export default combineReducers({
  user,
  isLoggedIn,
  signingUpState,
  signingInState,
  validationTokenState,
});
