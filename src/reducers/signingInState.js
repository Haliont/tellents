import { createAction, handleActions } from 'redux-actions';

export const signInSuccess = createAction('SIGN_IN_SUCCESS');
export const signInRequest = createAction('SIGN_IN_REQUEST');
export const signInFailure = createAction('SIGN_IN_FAILURE');

export default handleActions({
  [signInRequest]() {
    return 'requested';
  },
  [signInSuccess]() {
    return 'success';
  },
  [signInFailure]() {
    return 'failed';
  },
}, 'none');
