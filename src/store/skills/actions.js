import _ from 'lodash';
import { createAction } from 'redux-actions';
import http from '../../http';
import * as skillSelectors from './selectors';

export const fetchSkillsRequest = createAction('FETCH_SKILLS_REQUEST');
export const fetchSkillsSuccess = createAction('FETCH_SKILLS_SUCCESS');
export const fetchSkillsFailure = createAction('FETCH_SKILLS_FAILURE');

export const updateSkillsRequest = createAction('UPDATE_SKILLS_REQUEST');
export const updateSkillsSuccess = createAction('UPDATE_SKILLS_SUCCESS');
export const updateSkillsFailure = createAction('UPDATE_SKILLS_FAILURE');

export const fetchSkills = () => async (dispatch) => {
  dispatch(fetchSkillsRequest());
  try {
    const { data } = await http.get('v1/profile/skills/user');
    const { profession_categories: skillsArray } = data;
    const skills = _.keyBy(skillsArray, ({ id }) => id);
    dispatch(fetchSkillsSuccess(skills));
  } catch (e) {
    dispatch(fetchSkillsFailure());
  }
};

export const updateSkills = (
  updater = (skills => skills),
) => async (dispatch, getState) => {
  dispatch(updateSkillsRequest());
  try {
    const skillsById = skillSelectors.getSkills(getState());
    const newSkills = updater(skillsById);

    await http.post('v1/profile/skills', {
      categories: skillSelectors.prepareSkillsForSending(newSkills),
    });

    dispatch(updateSkillsSuccess(newSkills));
  } catch (e) {
    console.error(e);
    dispatch(updateSkillsFailure());
    // (・∀・)ノ best practices
  }
};

export const addSkill = (id, categoriesIds) => (dispatch) => {
  const updater = (skills) => {
    const selectedSkill = skills[id];
    return {
      ...skills,
      [id]: {
        ...selectedSkill,
        selected: true,
        skill_categories: selectedSkill.skill_categories
          .map(category => (categoriesIds.includes(category.id)
            ? { ...category, selected: true }
            : { ...category, selected: false })),
      },
    };
  };

  dispatch(updateSkills(updater));
};

export const removeSkill = id => (dispatch) => {
  const updater = (skills) => {
    const selectedSkill = skills[id];
    return {
      ...skills,
      [id]: {
        ...selectedSkill,
        selected: false,
        skill_categories: selectedSkill.skill_categories
          .map(category => ({ ...category, selected: false })),
      },
    };
  };

  dispatch(updateSkills(updater));
};
