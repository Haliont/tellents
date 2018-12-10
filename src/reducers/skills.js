import { createSelector } from 'reselect';
import { handleActions, combineActions } from 'redux-actions';
import http from '../http';

import {
  fetchSkillsRequest,
  fetchSkillsSuccess,
  fetchSkillsFailure,
} from './skillsFetchingState';

import {
  updateSkillsRequest,
  updateSkillsSuccess,
  updateSkillsFailure,
} from './skillsUpdatingState';


export const getSkills = state => state.skills;
export const getSelectedSkillsWithSelectedCategories = createSelector(
  getSkills,
  skills => skills
    .filter(({ selected }) => selected)
    .map(({ skill_categories: sc, ...rest }) => ({
      ...rest, skill_categories: sc.filter(({ selected }) => selected),
    })),
);

export const fetchSkills = () => async (dispatch) => {
  dispatch(fetchSkillsRequest());
  try {
    const { data } = await http.get('v1/profile/skills/user');
    const { profession_categories: skills } = data;
    dispatch(fetchSkillsSuccess(skills));
  } catch (e) {
    dispatch(fetchSkillsFailure());
  }
};

export const addSkill = (id, categoriesIds) => async (dispatch, getState) => {
  dispatch(updateSkillsRequest());
  try {
    const skills = getSkills(getState());
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
    const skills = getSkills(getState());
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

export default handleActions({
  [combineActions(
    fetchSkillsSuccess,
    updateSkillsSuccess,
  )](_, { payload: skills }) {
    return skills;
  },
}, []);
