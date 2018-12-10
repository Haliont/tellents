import { createAction, handleActions } from 'redux-actions';

export const updateSkillsRequest = createAction('UPDATE_SKILLS_REQUEST');
export const updateSkillsSuccess = createAction('UPDATE_SKILLS_SUCCESS');
export const updateSkillsFailure = createAction('UPDATE_SKILLS_FAILURE');

export default handleActions({
  [updateSkillsRequest]() {
    return 'requested';
  },
  [updateSkillsSuccess]() {
    return 'success';
  },
  [updateSkillsFailure]() {
    return 'failed';
  },
}, 'none');
