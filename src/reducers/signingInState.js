import { createAction, handleActions } from 'redux-actions';
import Auth from 'j-toker';

const signInRequest = createAction('SIGN_IN_REQUEST');
const signInSuccess = createAction('SIGN_IN_SUCCESS');
const signInFailure = createAction('SIGN_IN_FAILURE');

Auth.configure({ apiUrl: 'https://floating-atoll-63112.herokuapp.com/api' });

export const signIn = userData => (dispatch) => {
  dispatch(signInRequest());
  Auth.emailSignIn({
    ...userData,
    config_name: 'default',
  })
    .then((res) => {
      console.log(res);
      dispatch(signInSuccess());
    })
    .fail((res) => {
      console.log(res);
      dispatch(signInFailure());
    });
};

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
