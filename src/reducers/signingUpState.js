import { createAction, handleActions } from 'redux-actions';

export const signUpRequest = createAction('SIGN_UP_REQUEST');
export const signUpSuccess = createAction('SIGN_UP_SUCCESS');
export const signUpFailure = createAction('SIGN_UP_FAILURE');

export default handleActions({
  [signUpRequest]() {
    return 'requested';
  },
  [signUpSuccess]() {
    return 'success';
  },
  [signUpFailure]() {
    return 'failed';
  },
}, 'none');
