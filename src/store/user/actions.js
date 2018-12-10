import Auth from 'j-toker';
import { createAction } from 'redux-actions';

Auth.configure({ apiUrl: 'https://floating-atoll-63112.herokuapp.com/api' });

export const signInRequest = createAction('SIGN_IN_REQUEST');
export const signInSuccess = createAction('SIGN_IN_SUCCESS');
export const signInFailure = createAction('SIGN_IN_FAILURE');

export const signUpRequest = createAction('SIGN_UP_REQUEST');
export const signUpSuccess = createAction('SIGN_UP_SUCCESS');
export const signUpFailure = createAction('SIGN_UP_FAILURE');

export const validateTokenRequest = createAction('VALIDATE_TOKEN_REQUEST');
export const validateTokenSuccess = createAction('VALIDATE_TOKEN_SUCCESS');
export const validateTokenFailure = createAction('VALIDATE_TOKEN_FAILURE');

export const signOutSuccess = createAction('SIGN_OUT_SUCCESS');

export const signIn = values => (dispatch) => {
  dispatch(signInRequest());
  Auth.emailSignIn(values)
    .then(({ data: userData }) => {
      dispatch(signInSuccess(userData));
    })
    .fail(() => {
      dispatch(signInFailure());
    });
};

export const signUp = values => (dispatch) => {
  dispatch(signUpRequest());
  Auth.emailSignUp(values)
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
    .then((userData) => {
      dispatch(validateTokenSuccess(userData));
    })
    .fail(() => {
      dispatch(validateTokenFailure());
    });
};

export const signOut = () => (dispatch) => {
  Auth.signOut();
  localStorage.clear();
  dispatch(signOutSuccess());
};
