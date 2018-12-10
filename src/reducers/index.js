import { combineReducers } from 'redux';

import signingUpState from './signingUpState';
import signingInState from './signingInState';
import validationTokenState from './validationTokenState';
import skillsFetchingState from './skillsFetchingState';

import isSignedIn from './isSignedIn';
import user from './user';
import skills from './skills';

export default combineReducers({
  user,
  skills,
  isSignedIn,
  signingUpState,
  signingInState,
  validationTokenState,
  skillsFetchingState,
});
