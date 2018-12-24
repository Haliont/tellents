import { connect } from 'react-redux';
import Component from '../components/Find';

import * as userSelectors from '../store/user/selectors';
import * as findSelectors from '../store/find/selectors';
import * as findActions from '../store/find/actions';

const mapStateToProps = state => ({
  filters: findSelectors.getFilters(state),
  username: userSelectors.getUsername(state),
  resultsCount: findSelectors.getResultsCount(state),
});

export default connect(
  mapStateToProps,
  findActions,
)(Component);
