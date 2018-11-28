import { handleActions, combineActions } from 'redux-actions';
import { signInSuccess } from './signingInState';
import { signUpSuccess } from './signingUpState';
import { validateTokenFailure } from './validationTokenState';
import { signOut } from './user';

export default handleActions({
  [combineActions(signInSuccess, signUpSuccess)]() {
    return true;
  },
  [combineActions(validateTokenFailure, signOut)]() {
    return false;
  },
}, false);
