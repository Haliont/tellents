import { combineReducers } from 'redux';
import { handleActions, combineActions } from 'redux-actions';
import * as findActions from './actions';
import { shapeFiltersFromQs } from '../../utils';

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

const initialFilters = {
  avl: [],
  exp: [],
  ds: '',
  skill: '',
  rate: '',
  post: '',
  loc: [],
  lang: [],
  place: [],
  payment: [],
  p_from: '',
  p_to: '',
  bud: '',
  prop: '',
  q: '',
  sort: '',
};

const filters = handleActions({
  [findActions.setFilterSuccess](_, { payload }) {
    return payload;
  },
  [findActions.clearFilters]() {
    return initialFilters;
  },
}, { ...initialFilters, ...shapeFiltersFromQs() });

export default combineReducers({
  jobs,
  talents,
  filters,
  nextPage,
  countries,
  languages,
  resultsCount,
  jobsFetchingState,
  talentsFetchingState,
});
