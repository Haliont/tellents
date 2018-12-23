import { createBrowserHistory } from 'history';
import qs from 'query-string';

export const noop = () => {};
export const capitalize = str => `${str[0].toUpperCase()}${str.slice(1)}`;
export const stringify = value => value || 'N/A';

const history = createBrowserHistory();

export const setQueryString = (values) => {
  const prev = qs.parse(history.location.search);

  history.push({
    search: qs.stringify({
      ...prev,
      ...values,
    }),
  });
};

export const getQueryString = () => qs.parse(history.location.search);

export const shapeFiltersFromQs = () => {
  const filters = getQueryString();

  if (filters.exp && !(filters.exp instanceof Array)) {
    filters.exp = [filters.exp];
  }

  if (filters.loc && !(filters.loc instanceof Array)) {
    filters.loc = [filters.loc];
  }

  if (filters.lang && !(filters.lang instanceof Array)) {
    filters.lang = [filters.lang];
  }

  if (filters.avl && !(filters.avl instanceof Array)) {
    filters.avl = [filters.avl];
  }

  if (filters.place && !(filters.place instanceof Array)) {
    filters.place = [filters.place];
  }

  return filters;
};
