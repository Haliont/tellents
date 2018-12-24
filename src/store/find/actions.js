import { createAction } from 'redux-actions';
import qs from 'query-string';
import { createBrowserHistory } from 'history';
import FindService from '../../services/FindService';
import * as findSelectors from './selectors';
import { shapeQsFromFilters } from '../../utils';

const history = createBrowserHistory();

export const fetchJobsRequest = createAction('FETCH_JOBS_REQUEST');
export const fetchJobsSuccess = createAction('FETCH_JOBS_SUCCESS');
export const fetchJobsFailure = createAction('FETCH_JOBS_FAILURE');

export const fetchTalentsRequest = createAction('FETCH_TALENTS_REQUEST');
export const fetchTalentsSuccess = createAction('FETCH_TALENTS_SUCCESS');
export const fetchTalentsFailure = createAction('FETCH_TALENTS_FAILURE');

export const fetchCountriesRequest = createAction('FETCH_COUNTRIES_REQUEST');
export const fetchCountriesSuccess = createAction('FETCH_COUNTRIES_SUCCESS');
export const fetchCountriesFailure = createAction('FETCH_COUNTRIES_FAILURE');

export const fetchLanguagesRequest = createAction('FETCH_LANGUAGES_REQUEST');
export const fetchLanguagesSuccess = createAction('FETCH_LANGUAGES_SUCCESS');
export const fetchLanguagesFailure = createAction('FETCH_LANGUAGES_FAILURE');

export const clearList = createAction('CLEAR_LIST');
export const clearFilters = createAction('CLEAR_FILTERS');
export const setFilter = createAction('SET_FILTER');

export const fetchJobs = () => async (dispatch, getState) => {
  dispatch(fetchJobsRequest());
  try {
    const crnState = getState();
    const { jobs, meta } = await FindService.getJobs({
      page: findSelectors.getNextPage(crnState),
      q: findSelectors.getQuery(crnState),
    });

    dispatch(fetchJobsSuccess({
      newJobs: jobs,
      newNextPage: meta.next_page,
      newResultsCount: meta.total_count,
    }));
  } catch (e) {
    dispatch(fetchJobsFailure());
  }
};

export const fetchTalents = () => async (dispatch, getState) => {
  dispatch(fetchTalentsRequest());
  try {
    const crnState = getState();
    const { users, meta } = await FindService.getTalents({
      page: findSelectors.getNextPage(crnState),
      q: findSelectors.getQuery(crnState),
    });

    dispatch(fetchTalentsSuccess({
      newTalents: users,
      newNextPage: meta.next_page,
      newResultsCount: meta.total_count,
    }));
  } catch (e) {
    console.error(e);
    dispatch(fetchTalentsFailure());
  }
};

const fetchMap = {
  talent: fetchTalents,
  job: fetchJobs,
};

export const filterCards = (payload, filterObject) => (dispatch, getState) => {
  const newFilters = {
    ...findSelectors.getFilters(getState()),
    ...payload,
  };

  history.push({
    pathname: `/dashboard/find/${filterObject}`,
    search: qs.stringify(shapeQsFromFilters(newFilters)),
  });

  dispatch(setFilter(newFilters));
  dispatch(clearList());
  dispatch(fetchMap[filterObject]());
};


export const fetchCountries = () => async (dispatch) => {
  dispatch(fetchCountriesRequest());
  try {
    const countries = await FindService.getCountries();
    dispatch(fetchCountriesSuccess(countries));
  } catch (e) {
    dispatch(fetchCountriesFailure());
  }
};

export const fetchLanguages = () => async (dispatch) => {
  dispatch(fetchLanguagesRequest());
  try {
    const languages = await FindService.getLanguages();
    dispatch(fetchLanguagesSuccess(languages));
  } catch (e) {
    dispatch(fetchLanguagesFailure());
  }
};
