import { createSelector } from 'reselect';

export const getJobs = createSelector(
  state => state.find.jobs,
  jobs => jobs,
);

export const getTalents = createSelector(
  state => state.find.talents,
  talents => talents,
);

export const getCountries = createSelector(
  state => state.find.countries,
  countries => countries,
);

export const getLanguages = createSelector(
  state => state.find.languages,
  languages => languages,
);

export const getResultsCount = createSelector(
  state => state.find.resultsCount,
  resultsCount => resultsCount,
);

export const getNextPage = state => state.find.nextPage;
