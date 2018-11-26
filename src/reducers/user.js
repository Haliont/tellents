import Auth from 'j-toker';
import { combineActions, handleActions, createAction } from 'redux-actions';
import { signInSuccess, signInFailure, signInRequest } from './signingInState';
import { signUpSuccess, signUpFailure, signUpRequest } from './signingUpState';
import { validateTokenSuccess, validateTokenFailure, validateTokenRequest } from './validationTokenState';

Auth.configure({ apiUrl: 'https://floating-atoll-63112.herokuapp.com/api' });

export const signIn = userData => (dispatch) => {
  dispatch(signInRequest());
  Auth.emailSignIn(userData)
    .then((res) => {
      dispatch(signInSuccess(res.data));
    })
    .fail(() => {
      dispatch(signInFailure());
    });
};

export const signUp = userData => (dispatch) => {
  dispatch(signUpRequest());
  Auth.emailSignUp(userData)
    .then((res) => {
      dispatch(signUpSuccess(res.data));
    })
    .fail(() => {
      dispatch(signUpFailure());
    });
};

export const validateToken = () => (dispatch) => {
  dispatch(validateTokenRequest());
  Auth.validateToken()
    .then((data) => {
      dispatch(validateTokenSuccess(data));
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
    return {};
  },
}, {});
