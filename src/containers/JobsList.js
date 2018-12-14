import { connect } from 'react-redux';
import Component from '../components/JobsList';

import * as findSelectors from '../store/find/selectors';
import * as findActions from '../store/find/actions';

const mapStateToProps = state => ({
  jobsCards: findSelectors.getJobs(state),
  isBusy: findSelectors.isJobsRequested(state),
});

export default connect(
  mapStateToProps,
  findActions,
)(Component);
