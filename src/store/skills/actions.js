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

export const addSkill = (id, categoriesIds) => async (dispatch, getState) => {
  dispatch(updateSkillsRequest());
  try {
    const skills = skillSelectors.getSkills(getState());
    const newSkills = skills.map((skill) => {
      if (skill.id === id) {
        return {
          ...skill,
          skill_categories: skill.skill_categories.map((sc) => {
            if (categoriesIds.includes(sc.id)) {
              return { ...sc, selected: true };
            }
            return { ...sc, selected: false };
          }),
          selected: true,
        };
      }
      return { ...skill };
    });
    const filtered = newSkills.filter(({ selected }) => selected)
      .map(({ skill_categories: sc, ...rest }) => ({
        ...rest, skill_categories: sc.filter(({ selected }) => selected),
      }));
    const mapped = filtered.map(skill => ({
      id: skill.id,
      skill_tags: [],
      skill_categories: skill.skill_categories.map(category => category.id),
    }));
    await http.post('v1/profile/skills', {
      categories: mapped,
    });
    dispatch(updateSkillsSuccess(newSkills));
  } catch (e) {
    dispatch(updateSkillsFailure());
    // (・∀・)ノ best practices
  }
};

export const removeSkill = id => async (dispatch, getState) => {
  dispatch(updateSkillsRequest());
  try {
    const skills = skillSelectors.getSkills(getState());
    const newSkills = skills.map((skill) => {
      if (skill.id === id) {
        return {
          ...skill,
          skill_categories: skill.skill_categories.map(sc => ({ ...sc, selected: false })),
          selected: false,
        };
      }
      return { ...skill };
    });
    const filtered = newSkills.filter(({ selected }) => selected)
      .map(({ skill_categories: sc, ...rest }) => ({
        ...rest, skill_categories: sc.filter(({ selected }) => selected),
      }));
    const mapped = filtered.map(skill => ({
      id: skill.id,
      skill_tags: [],
      skill_categories: skill.skill_categories.map(category => category.id),
    }));
    await http.post('v1/profile/skills', {
      categories: mapped,
    });
    dispatch(updateSkillsSuccess(newSkills));
  } catch (e) {
    dispatch(updateSkillsFailure());
    // (・∀・)ノ best practices
  }
};
