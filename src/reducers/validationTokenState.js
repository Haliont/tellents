import { createAction, handleActions } from 'redux-actions';

export const validateTokenRequest = createAction('VALIDATE_TOKEN_REQUEST');
export const validateTokenSuccess = createAction('VALIDATE_TOKEN_SUCCESS');
export const validateTokenFailure = createAction('VALIDATE_TOKEN_FAILURE');

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
