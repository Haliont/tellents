import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import signingUpState from './signingUpState';
import signingInState from './signingInState';
import isLoggedIn from './isLoggedIn';

export default combineReducers({
  signingUpState,
  signingInState,
  isLoggedIn,
  form: formReducer,
});
