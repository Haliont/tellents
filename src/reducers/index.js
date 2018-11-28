import { combineReducers } from 'redux';

import signingUpState from './signingUpState';
import signingInState from './signingInState';
import validationTokenState from './validationTokenState';
import isSignedIn from './isSignedIn';
import user from './user';

export default combineReducers({
  user,
  isSignedIn,
  signingUpState,
  signingInState,
  validationTokenState,
});
