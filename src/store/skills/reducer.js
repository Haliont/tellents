import { combineReducers } from 'redux';
import { handleActions, combineActions } from 'redux-actions';
import * as skillActions from './actions';

const skillsUpdatingState = handleActions({
  [skillActions.updateSkillsRequest]() {
    return 'requested';
  },
  [skillActions.updateSkillsSuccess]() {
    return 'success';
  },
  [skillActions.updateSkillsFailure]() {
    return 'failed';
  },
}, 'none');

const skillsFetchingState = handleActions({
  [skillActions.fetchSkillsRequest]() {
    return 'requested';
  },
  [skillActions.fetchSkillsSuccess]() {
    return 'success';
  },
  [skillActions.fetchSkillsFailure]() {
    return 'failed';
  },
}, 'none');

const skillsById = handleActions({
  [combineActions(
    skillActions.fetchSkillsSuccess,
    skillActions.updateSkillsSuccess,
  )](_, { payload: skills }) {
    return skills;
  },
}, {});

export default combineReducers({
  skillsById,
  skillsUpdatingState,
  skillsFetchingState,
});
