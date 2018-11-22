import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import signingUpState from './signingUpState';
import signingInState from './signingInState';
import validationTokenState from './validationTokenState';
import isLoggedIn from './isLoggedIn';

export default combineReducers({
  form: formReducer,
  isLoggedIn,
  signingUpState,
  signingInState,
  validationTokenState,
});
