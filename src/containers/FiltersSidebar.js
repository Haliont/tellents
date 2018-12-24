import { connect } from 'react-redux';
import Component from '../components/FiltersSidebar';

import * as findActions from '../store/find/actions';
import * as findSelectors from '../store/find/selectors';

const mapStateToProps = state => ({
  filters: findSelectors.getFilters(state),
  countries: findSelectors.getCountries(state),
  languages: findSelectors.getLanguages(state),
});

export default connect(
  mapStateToProps,
  findActions,
)(Component);
