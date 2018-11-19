import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

const text = (state = 'Hello, react') => state;

export default combineReducers({
  text,
  form: formReducer,
});
