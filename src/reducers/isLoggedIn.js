import { handleActions, combineActions } from 'redux-actions';
import { signInSuccess, signInFailure } from './signingInState';
import { signUpSuccess, signUpFailure } from './signingUpState';
import { validateTokenFailure } from './validationTokenState';

export default handleActions({
  [combineActions(signInSuccess, signUpSuccess)]() {
    return true;
  },
  [combineActions(
    signInFailure,
    signUpFailure,
    validateTokenFailure,
  )]() {
    return false;
  },
}, false);
