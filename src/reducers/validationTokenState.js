import { createAction, handleActions } from 'redux-actions';

export const validateTokenRequest = createAction('SIGN_IN_REQUEST');
export const validateTokenSuccess = createAction('SIGN_IN_SUCCESS');
export const validateTokenFailure = createAction('SIGN_IN_FAILURE');

export default handleActions({
  [validateTokenRequest]() {
    return 'requested';
  },
  [validateTokenSuccess]() {
    return 'success';
  },
  [validateTokenFailure]() {
    return 'failed';
  },
}, 'none');
