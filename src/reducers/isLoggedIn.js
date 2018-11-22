import { handleActions, combineActions } from 'redux-actions';
import { signInSuccess } from './signingInState';
import { signUpSuccess } from './signingUpState';

export default handleActions({
  [combineActions(signInSuccess, signUpSuccess)]() {
    return true;
  },
}, false);
