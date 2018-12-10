import { combineReducers } from 'redux';
import skills from './skills/reducer';
import user from './user/reducer';

export default combineReducers({
  skills,
  user,
});
