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

export const getNextPage = state => state.find.nextPage;

export const getLanguages = createSelector(
  state => state.find.languages,
  languages => languages,
);

export const getResultsCount = createSelector(
  state => state.find.resultsCount,
  resultsCount => resultsCount,
);

export const isTalentsRequested = createSelector(
  state => state.find.talentsFetchingState,
  talentsFetchingState => talentsFetchingState === 'requested',
);

export const isFirstTalentsRequest = createSelector(
  [isTalentsRequested, getNextPage],
  (requested, nextPage) => requested && nextPage === 1,
);

export const isJobsRequested = createSelector(
  state => state.find.jobsFetchingState,
  jobsFetchingState => jobsFetchingState === 'requested',
);

export const isFirstJobsRequest = createSelector(
  [isJobsRequested, getNextPage],
  (requested, nextPage) => requested && nextPage === 1,
);
