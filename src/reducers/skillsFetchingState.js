import { createAction, handleActions } from 'redux-actions';

export const fetchSkillsRequest = createAction('FETCH_SKILLS_REQUEST');
export const fetchSkillsSuccess = createAction('FETCH_SKILLS_SUCCESS');
export const fetchSkillsFailure = createAction('FETCH_SKILLS_FAILURE');

export default handleActions({
  [fetchSkillsRequest]() {
    return 'requested';
  },
  [fetchSkillsSuccess]() {
    return 'success';
  },
  [fetchSkillsFailure]() {
    return 'failed';
  },
}, 'none');
