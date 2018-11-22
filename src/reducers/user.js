import Auth from 'j-toker';
import { combineActions, handleActions } from 'redux-actions';
import { signInSuccess, signInFailure, signInRequest } from './signingInState';
import { signUpSuccess, signUpFailure, signUpRequest } from './signingUpState';

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

export default handleActions({
  [combineActions(signInSuccess, signUpSuccess)](
    _,
    { payload: userData },
  ) {
    return userData;
  },
}, {});
