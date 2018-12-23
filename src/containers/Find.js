import { connect } from 'react-redux';
import Component from '../components/Find';

import * as userSelectors from '../store/user/selectors';
import * as findSelectors from '../store/find/selectors';

const mapStateToProps = state => ({
  username: userSelectors.getUsername(state),
  resultsCount: findSelectors.getResultsCount(state),
});

export default connect(
  mapStateToProps,
)(Component);
