import { createSelector } from 'reselect';

export const getSkills = state => state.skills.skillsById;
export const getSkillsList = createSelector(
  getSkills,
  skills => Object.values(skills),
);

// export const getSkillsCategoriesBySkillId = (skills, skillId) => skills[skillId][];

export const getSelectedSkillsWithSelectedCategories = createSelector(
  getSkillsList,
  skills => skills
    .filter(({ selected }) => selected)
    .map(({ skill_categories: sc, ...rest }) => ({
      ...rest, skill_categories: sc.filter(({ selected }) => selected),
    })),
);

export const isFetchingSkills = createSelector(
  state => state.skills.skillsFetchingState,
  skillsFetchingState => skillsFetchingState === 'requested',
);

export const isUpdatingSkills = createSelector(
  state => state.skills.skillsUpdatingState,
  skillsUpdatingState => skillsUpdatingState === 'requested',
);
