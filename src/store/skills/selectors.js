import { createSelector } from 'reselect';

export const getSkills = state => state.skills.skillsById;
export const getSkillsList = createSelector(
  getSkills,
  skills => Object.values(skills),
);

export const getSelectedSkillCategories = skill => skill.skill_categories
  .map(({ selected }) => selected);

export const getSelectedSkillsWithSelectedCategories = createSelector(
  getSkillsList,
  skills => skills
    .filter(({ selected }) => selected)
    .map(({ skill_categories: sc, ...rest }) => ({
      ...rest, skill_categories: sc.filter(({ selected }) => selected),
    })),
);

export const prepareSkillsForSending = skills => Object.values(skills)
  .filter(({ selected }) => selected)
  .map(skill => ({
    id: skill.id,
    skill_tags: skill.skill_tags.map(st => st.id),
    skill_categories: skill.skill_categories
      .filter(({ selected }) => selected)
      .map(sc => sc.id),
  }));

export const isFetchingSkills = createSelector(
  state => state.skills.skillsFetchingState,
  skillsFetchingState => skillsFetchingState === 'requested',
);

export const isUpdatingSkills = createSelector(
  state => state.skills.skillsUpdatingState,
  skillsUpdatingState => skillsUpdatingState === 'requested',
);
