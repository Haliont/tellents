import { createAction } from 'redux-actions';
import axios from 'axios';
import JobsService from '../../services/JobsService';
import * as jobsSelectors from './selectors';

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

export const fetchJobs = () => async (dispatch, getState) => {
  dispatch(fetchJobsRequest());
  try {
    const crnState = getState();
    const page = jobsSelectors.getNextPage(crnState);
    const query = {};

    const {
      jobs,
      meta,
    } = await JobsService.getJobs(page, query);

    dispatch(fetchJobsSuccess({
      newJobs: jobs,
      newNextPage: meta.next_page,
      newResultsCount: meta.total_count,
    }));
  } catch (e) {
    dispatch(fetchJobsFailure());
  }
};

export const fetchTalents = () => async (dispatch) => {
  dispatch(fetchTalentsRequest());
  try {
    const { data } = await axios.get('https://floating-atoll-63112.herokuapp.com/api/v1/tellents/search', {
      params: {
        q: {},
      },
    });

    const { users, meta } = data;

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

export const fetchCountries = () => async (dispatch) => {
  dispatch(fetchCountriesRequest());
  try {
    dispatch(fetchCountriesSuccess());
  } catch (e) {
    dispatch(fetchCountriesFailure());
  }
};

export const fetchLanguages = () => async (dispatch) => {
  dispatch(fetchLanguagesRequest());
  try {
    dispatch(fetchLanguagesSuccess());
  } catch (e) {
    dispatch(fetchLanguagesFailure());
  }
};
