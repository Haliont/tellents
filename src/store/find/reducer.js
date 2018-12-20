import { combineReducers } from 'redux';
import { handleActions, combineActions } from 'redux-actions';
import * as findActions from './actions';

const jobs = handleActions({
  [findActions.fetchJobsSuccess](state, { payload: { newJobs } }) {
    return [...state, ...newJobs];
  },
  [findActions.clearList]() {
    return [];
  },
}, []);

const talents = handleActions({
  [findActions.fetchTalentsSuccess](
    state,
    { payload: { newTalents } },
  ) {
    return [...state, ...newTalents];
  },
  [findActions.clearList]() {
    return [];
  },
}, []);

const countries = handleActions({
  [findActions.fetchCountriesSuccess](
    state,
    { payload: newCountries },
  ) {
    return newCountries;
  },
}, []);

const languages = handleActions({
  [findActions.fetchLanguagesSuccess](
    state,
    { payload: newLanguages },
  ) {
    return newLanguages;
  },
}, []);

const resultsCount = handleActions({
  [combineActions(
    findActions.fetchJobsSuccess,
    findActions.fetchTalentsSuccess,
  )](_, { payload: { newResultsCount } }) {
    return newResultsCount;
  },
}, 0);

const nextPage = handleActions({
  [combineActions(
    findActions.fetchJobsSuccess,
    findActions.fetchTalentsSuccess,
  )](_, { payload: { newNextPage } }) {
    return newNextPage;
  },
  [findActions.clearList]() {
    return 1;
  },
}, 1);

const talentsFetchingState = handleActions({
  [findActions.fetchTalentsRequest]() {
    return 'requested';
  },
  [findActions.fetchTalentsSuccess]() {
    return 'success';
  },
  [findActions.fetchTalentsFailure]() {
    return 'failed';
  },
}, 'none');

const jobsFetchingState = handleActions({
  [findActions.fetchJobsRequest]() {
    return 'requested';
  },
  [findActions.fetchJobsSuccess]() {
    return 'success';
  },
  [findActions.fetchJobsFailure]() {
    return 'failed';
  },
}, 'none');

export default combineReducers({
  jobs,
  talents,
  nextPage,
  countries,
  languages,
  resultsCount,
  jobsFetchingState,
  talentsFetchingState,
});
