import Auth from 'j-toker';
import { combineActions, handleActions, createAction } from 'redux-actions';

import { signInSuccess, signInFailure, signInRequest } from './signingInState';
import { signUpSuccess, signUpFailure, signUpRequest } from './signingUpState';
import { validateTokenSuccess, validateTokenFailure, validateTokenRequest } from './validationTokenState';

export const signIn = userData => (dispatch) => {
  dispatch(signInRequest());
  Auth.emailSignIn(userData)
    .then(({ data: user }) => {
      dispatch(signInSuccess(user));
    })
    .fail(() => {
      dispatch(signInFailure());
    });
};

export const signUp = userData => (dispatch) => {
  dispatch(signUpRequest());
  Auth.emailSignUp(userData)
    .then(({ data: user }) => {
      dispatch(signUpSuccess(user));
    })
    .fail(() => {
      dispatch(signUpFailure());
    });
};

export const validateToken = () => (dispatch) => {
  dispatch(validateTokenRequest());
  Auth.validateToken()
    .then((user) => {
      dispatch(validateTokenSuccess(user));
    })
    .fail(() => {
      dispatch(validateTokenFailure());
    });
};

export const signOut = createAction('SIGN_OUT');

export default handleActions({
  [combineActions(
    signInSuccess,
    signUpSuccess,
    validateTokenSuccess,
  )](
    _,
    { payload: userData },
  ) {
    return userData;
  },
  [signOut]() {
    Auth.signOut();
    localStorage.clear();
    return {};
  },
}, {});
