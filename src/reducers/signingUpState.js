import { createAction, handleActions } from 'redux-actions';
import Auth from 'j-toker';

const signUpRequest = createAction('SIGN_UP_REQUEST');
const signUpSuccess = createAction('SIGN_UP_SUCCESS');
const signUpFailure = createAction('SIGN_UP_FAILURE');

Auth.configure({ apiUrl: 'https://floating-atoll-63112.herokuapp.com/api' });

export const signUp = userData => (dispatch) => {
  dispatch(signUpRequest());
  Auth.emailSignUp({
    ...userData,
    config_name: 'default',
  })
    .then((res) => {
      console.log(res);
      dispatch(signUpSuccess());
    })
    .fail((res) => {
      console.log(res);
      dispatch(signUpFailure());
    });
};

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
