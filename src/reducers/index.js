import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import signingUpState from './signingUpState';

export default combineReducers({
  signingUpState,
  form: formReducer,
});
